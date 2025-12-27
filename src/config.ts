/**
 * Application configuration
 * Centralizes environment variable access with validation to ensure production safety.
 */

interface Config {
    readonly apiUrl: string;
    readonly isProduction: boolean;
    readonly isDevelopment: boolean;
}

const API_URL = import.meta.env.VITE_API_BASE_URL;

/**
 * Validates that all required environment variables are present.
 * This is called at the service level to ensure the app fails predictably if misconfigured.
 */
export const validateConfig = (): void => {
    if (!API_URL) {
        throw new Error(
            'Configuration Error: VITE_API_BASE_URL is not defined. ' +
            'Please ensure you have a .env file with VITE_API_BASE_URL set (e.g., http://localhost:3000 for local development).'
        );
    }
};

export const config: Config = {
    apiUrl: API_URL || '', // Fallback to empty string to avoid undefined errors before validation
    isProduction: import.meta.env.PROD,
    isDevelopment: import.meta.env.DEV,
};
