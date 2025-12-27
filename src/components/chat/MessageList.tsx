import React from 'react';
import { Message as MessageType } from '../../types/chat.types';
import { Message } from './Message';
import { TypingIndicator } from './TypingIndicator';
import { useAutoScroll } from '../../hooks/useAutoScroll';

interface MessageListProps {
    messages: MessageType[];
    isTyping: boolean;
    isLoading: boolean;
    onSendMessage: (text: string) => void;
}

export const MessageList: React.FC<MessageListProps> = ({
    messages,
    isTyping,
    isLoading,
    onSendMessage
}) => {
    const scrollRef = useAutoScroll<HTMLDivElement>([messages, isTyping, isLoading]);

    const quickQuestions = [
        "How do I track my order?",
        "What's your return policy?",
        "Do you ship international?",
        "How can I cancel my order?"
    ];

    if (messages.length === 0) {
        return (
            <div className="messages-container">
                <div className="empty-state">
                    <div className="welcome-icon">💬</div>
                    <h2>Welcome to Support!</h2>
                    <p>I can help you with orders, shipping info, and returns.</p>
                    <div className="quick-questions">
                        {quickQuestions.map((q, i) => (
                            <button
                                key={i}
                                className="question-chip"
                                onClick={() => onSendMessage(q)}
                            >
                                <span>✨</span> {q}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="messages-container">
            {messages.map((message) => (
                <Message key={message.id} message={message} />
            ))}
            {isTyping && <TypingIndicator />}
            <div ref={scrollRef} style={{ float: 'left', clear: 'both' }} />
        </div>
    );
};
