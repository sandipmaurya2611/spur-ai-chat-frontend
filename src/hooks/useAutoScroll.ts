import { useRef, useEffect } from 'react';

export const useAutoScroll = <T extends HTMLElement>(dependencies: unknown[]) => {
    const ref = useRef<T>(null);

    useEffect(() => {
        if (ref.current) {
            ref.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, dependencies);

    return ref;
};
