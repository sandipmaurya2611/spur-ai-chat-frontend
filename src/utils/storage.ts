import { Message } from '../types/chat.types';

const SESSION_ID_KEY = 'chatSessionId';
const MESSAGES_KEY = 'chatMessages';

export const storage = {
    getSessionId(): string | null {
        return localStorage.getItem(SESSION_ID_KEY);
    },

    setSessionId(id: string): void {
        localStorage.setItem(SESSION_ID_KEY, id);
    },

    getMessages(): Message[] {
        try {
            const stored = localStorage.getItem(MESSAGES_KEY);
            return stored ? JSON.parse(stored) : [];
        } catch (error) {
            console.error('Error parsing stored messages:', error);
            return [];
        }
    },

    setMessages(messages: Message[]): void {
        try {
            localStorage.setItem(MESSAGES_KEY, JSON.stringify(messages));
        } catch (error) {
            console.error('Error storing messages:', error);
        }
    },

    clearSession(): void {
        localStorage.removeItem(SESSION_ID_KEY);
        localStorage.removeItem(MESSAGES_KEY);
    },
};
