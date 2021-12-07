import { useState, useEffect } from 'react';

export const useLocalStorage = (defaultValue, key) => {
    const [value, setValue] = useState(() => {
        const saved = localStorage.getItem(key);
        if (saved !== null) {
            return JSON.parse(saved);
        }
        return [];
    });
    function deleteLocalStorage() {
        setValue(defaultValue);
        localStorage.removeItem(key);
    }
    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);

    return [value, setValue, deleteLocalStorage] // cia yra taplas!
};