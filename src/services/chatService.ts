import { ChatRequest, ChatResponse } from '../types/chat.types';

const API_BASE_URL = 'http://localhost:3000';

class ChatService {
    async sendMessage(message: string, sessionId?: string): Promise<ChatResponse> {
        const requestBody: ChatRequest = {
            message,
            ...(sessionId && { sessionId }),
        };

        const response = await fetch(`${API_BASE_URL}/chat/message`, {
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
}

export const chatService = new ChatService();
