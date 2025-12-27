import React, { useState, KeyboardEvent } from 'react';

interface ChatInputProps {
    onSendMessage: (message: string) => void;
    disabled: boolean;
}

export const ChatInput: React.FC<ChatInputProps> = ({ onSendMessage, disabled }) => {
    const [inputValue, setInputValue] = useState('');

    const handleSend = () => {
        if (inputValue.trim() && !disabled) {
            onSendMessage(inputValue);
            setInputValue('');
        }
    };

    const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    };

    return (
        <div className="input-container">
            <div className="input-wrapper">
                <input
                    type="text"
                    className="message-input"
                    placeholder="Ask me anything..."
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={handleKeyPress}
                    disabled={disabled}
                    autoFocus
                />
            </div>
            <button
                className="send-button"
                onClick={handleSend}
                disabled={disabled || !inputValue.trim()}
                title="Send Message"
            >
                <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="22" y1="2" x2="11" y2="13"></line>
                    <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                </svg>
            </button>
        </div>
    );
};
