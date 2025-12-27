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

export interface HistoryMessage {
    id: string;
    sender: 'user' | 'ai';
    text: string;
    timestamp: number;
}

export interface HistoryResponse {
    messages: HistoryMessage[];
    sessionId: string;
}
