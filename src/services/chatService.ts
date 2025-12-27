import { ChatRequest, ChatResponse, HistoryResponse } from '../types/chat.types';
import { config, validateConfig } from '../config';

class ChatService {
    constructor() {
        // Ensure configuration is valid on instantiation
        validateConfig();
    }

    async sendMessage(message: string, sessionId?: string): Promise<ChatResponse> {
        const requestBody: ChatRequest = {
            message,
            ...(sessionId && { sessionId }),
        };

        const response = await fetch(`${config.apiUrl}/chat/message`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestBody),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        return response.json();
    }

    async getHistory(sessionId: string): Promise<HistoryResponse> {
        const response = await fetch(`${config.apiUrl}/chat/history/${sessionId}`);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        return response.json();
    }
}

export const chatService = new ChatService();
