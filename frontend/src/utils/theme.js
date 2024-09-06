export const getStoredTheme = () => localStorage.getItem('theme') || 'light';

export const setStoredTheme = (theme) => localStorage.setItem('theme', theme);