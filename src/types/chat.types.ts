export enum MessageSender {
    USER = 'user',
    AI = 'ai',
}

export interface Message {
    id: string;
    text: string;
    sender: MessageSender;
    timestamp: number;
}

export interface ChatRequest {
    message: string;
    sessionId?: string;
}

export interface ChatResponse {
    reply: string;
    sessionId: string;
}
