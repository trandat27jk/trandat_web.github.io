import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
    base: '/', // <--- THIS IS THE NEW, CORRECT BASE PATH
    build: {
        rollupOptions: {
            input: {
                'main': resolve(__dirname, 'index.html'),
            },
        },
    },
})
