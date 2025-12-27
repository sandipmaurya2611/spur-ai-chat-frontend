import React from 'react';
import { MessageList } from './MessageList';
import { ChatInput } from './ChatInput';
import { useChat } from '../../hooks/useChat';

export const ChatContainer: React.FC = () => {
    const { messages, isTyping, isLoading, sendMessage, startNewChat } = useChat();

    return (
        <div className="chat-container">
            <div className="chat-header">
                <h1>AI Support Agent</h1>
                <button
                    className="new-chat-btn"
                    onClick={startNewChat}
                    title="Start New Chat"
                >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="12" y1="5" x2="12" y2="19"></line>
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                    </svg>
                </button>
            </div>

            <MessageList
                messages={messages}
                isTyping={isTyping}
                isLoading={isLoading}
                onSendMessage={sendMessage}
            />

            <ChatInput onSendMessage={sendMessage} disabled={isTyping} />
        </div>
    );
};
