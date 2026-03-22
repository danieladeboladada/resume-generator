import { useUserStore } from '@/store/userStore';

/**
 * Wraps fetch with an Authorization: Bearer <token> header from the Zustand store.
 * Use this instead of fetch for all authenticated API calls.
 */
export const authFetch = (url, options = {}) => {
    const token = useUserStore.getState().token;
    return fetch(url, {
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...(options.headers || {}),
            ...(token ? { Authorization: `Bearer ${token}` } : {}),
        },
    });
};
