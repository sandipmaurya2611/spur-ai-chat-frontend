import { useState, useEffect, useCallback } from 'react';
import { Message, MessageSender } from '../types/chat.types';
import { chatService } from '../services/chatService';
import { storage } from '../utils/storage';

export const useChat = () => {
    const [messages, setMessages] = useState<Message[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [sessionId, setSessionId] = useState<string | null>(null);
    const [isLoadingHistory, setIsLoadingHistory] = useState(false);

    // Load session and fetch history from backend on mount
    useEffect(() => {
        const loadChatHistory = async () => {
            const storedSessionId = storage.getSessionId();

            if (storedSessionId) {
                setSessionId(storedSessionId);
                setIsLoadingHistory(true);

                try {
                    // Fetch history from backend using the service
                    const data = await chatService.getHistory(storedSessionId);

                    // Convert backend messages to frontend format
                    const loadedMessages: Message[] = data.messages.map((msg) => ({
                        id: msg.id,
                        text: msg.text,
                        sender: msg.sender === 'user' ? MessageSender.USER : MessageSender.AI,
                        timestamp: msg.timestamp,
                    }));

                    setMessages(loadedMessages);
                    storage.setMessages(loadedMessages);
                } catch (error) {
                    console.error('Error loading chat history from backend:', error);

                    // On error, clear current session to avoid further broken requests
                    storage.clearSession();
                    setSessionId(null);

                    // Fallback: try to load from localStorage
                    const storedMessages = storage.getMessages();
                    if (storedMessages.length > 0) {
                        setMessages(storedMessages);
                    }
                } finally {
                    setIsLoadingHistory(false);
                }
            }
        };

        loadChatHistory();
    }, []);

    // Persist messages to localStorage whenever they change
    useEffect(() => {
        if (messages.length > 0) {
            storage.setMessages(messages);
        }
    }, [messages]);

    const sendMessage = useCallback(
        async (text: string) => {
            if (!text.trim() || isLoading) {
                return;
            }

            // Add user message
            const userMessage: Message = {
                id: `user-${Date.now()}`,
                text: text.trim(),
                sender: MessageSender.USER,
                timestamp: Date.now(),
            };

            setMessages((prev) => [...prev, userMessage]);
            setIsLoading(true);

            try {
                const response = await chatService.sendMessage(text.trim(), sessionId || undefined);

                // Update session ID if received
                if (response.sessionId) {
                    setSessionId(response.sessionId);
                    storage.setSessionId(response.sessionId);
                }

                // Add AI response
                const aiMessage: Message = {
                    id: `ai-${Date.now()}`,
                    text: response.reply,
                    sender: MessageSender.AI,
                    timestamp: Date.now(),
                };

                setMessages((prev) => [...prev, aiMessage]);
            } catch (error) {
                console.error('Error sending message:', error);

                // Add error message
                const errorMessage: Message = {
                    id: `error-${Date.now()}`,
                    text: 'Sorry, there was an error sending your message. Please try again.',
                    sender: MessageSender.AI,
                    timestamp: Date.now(),
                };

                setMessages((prev) => [...prev, errorMessage]);
            } finally {
                setIsLoading(false);
            }
        },
        [isLoading, sessionId]
    );

    const startNewChat = useCallback(() => {
        setMessages([]);
        setSessionId(null);
        storage.clearSession();
    }, []);

    return {
        messages,
        isTyping: isLoading,
        isLoading: isLoadingHistory,
        sendMessage,
        startNewChat,
    };
};
