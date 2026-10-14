import { defineConfig, loadEnv } from 'vite'
import type { Plugin } from 'vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'
import tailwindcss from '@tailwindcss/vite'

function apiDevMiddleware(): Plugin {
  return {
    name: 'api-dev-middleware',
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        if (req.url !== '/api/chat' || req.method !== 'POST') return next()

        try {
          const { default: handler } = await server.ssrLoadModule('/api/chat.ts')
          const chunks: Buffer[] = []
          for await (const chunk of req) chunks.push(chunk as Buffer)

          const request = new Request('http://localhost/api/chat', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: Buffer.concat(chunks),
          })

          const response: Response = await handler(request)
          res.statusCode = response.status
          response.headers.forEach((value, key) => res.setHeader(key, value))

          if (!response.body) {
            res.end()
            return
          }
          const reader = response.body.getReader()
          for (;;) {
            const { done, value } = await reader.read()
            if (done) break
            res.write(Buffer.from(value))
          }
          res.end()
        } catch (err) {
          next(err)
        }
      })
    },
  }
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  process.env.GEMINI_API_KEY = env.GEMINI_API_KEY

  return {
    plugins: [
      react(),
      babel({ presets: [reactCompilerPreset()] }),
      tailwindcss(),
      apiDevMiddleware(),
    ],
  }
})
