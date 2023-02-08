
export const PORT = import.meta.env.VITE_PORT ? parseInt(import.meta.env.VITE_PORT) : 80
export const SERVER = import.meta.env.VITE_SERVER ?? window.location.hostname
export const APP = `${SERVER}:${PORT}`
