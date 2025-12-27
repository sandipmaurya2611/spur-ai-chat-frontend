import React from 'react';

export const TypingIndicator: React.FC = () => {
    return (
        <div className="message message-ai">
            <div className="typing-indicator">
                <span className="typing-text">Agent is typing</span>
                <span className="typing-dots">
                    <span></span>
                    <span></span>
                    <span></span>
                </span>
            </div>
        </div>
    );
};
