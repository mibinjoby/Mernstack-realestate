import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server:{
    proxy:{'/api':{
      target: 'http://localhost:3000',
      secure: false,
    },
  },
},
  plugins: [ tailwindcss(), react()],
})
