// vite.config.ts
export default {
  base: '/',
  plugins: [],
  build: {
    outDir: 'dist', // output path
    minify: 'esbuild', // pres tool
    chunkSizeWarningLimit: 2000, // chunk size warning
  },
}
