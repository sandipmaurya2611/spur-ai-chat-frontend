import React from 'react';
import { Message as MessageType, MessageSender } from '../../types/chat.types';

interface MessageProps {
    message: MessageType;
}

export const Message: React.FC<MessageProps> = ({ message }) => {
    const isUser = message.sender === MessageSender.USER;
    const time = new Date(message.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    return (
        <div className={`message ${isUser ? 'message-user' : 'message-ai'}`}>
            <div className="message-wrapper">
                <div className="message-bubble">
                    {message.text}
                </div>
                <div className="message-time">{time}</div>
            </div>
        </div>
    );
};
