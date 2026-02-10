import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig(() => {
  // Get the default language from environment variable or fallback to German
  const defaultLang = process.env.VITE_DEFAULT_LANG || "de";

  // Use standard 'dist' for production builds (no env var), language-specific for local builds
  const outDir = process.env.VITE_DEFAULT_LANG ? `dist-${defaultLang}` : 'dist';

  // Use standard index.html for production, language-specific for local builds
  const inputHtml = process.env.VITE_DEFAULT_LANG ? `./index-${defaultLang}.html` : './index.html';

  return {
    plugins: [
      tailwindcss(),
      react(),
      // Custom plugin to inject default language
      {
        name: "inject-default-language",
        transformIndexHtml: {
          order: "pre",
          handler(html) {
            return html.replace(
              '<script type="module" src="/src/main.jsx"></script>',
              `<script>
                window.__DEFAULT_LANGUAGE__ = "${defaultLang}";
              </script>
              <script type="module" src="/src/main.jsx"></script>`
            );
          },
        },
      },
    ],
    define: {
      // Make default language available in the app
      __DEFAULT_LANGUAGE__: JSON.stringify(defaultLang),
    },
    build: {
      outDir: outDir,
      rollupOptions: {
        input: inputHtml,
        output: {
          // Generate different chunk names for different builds
          chunkFileNames: `assets/[name]-${defaultLang}-[hash].js`,
          entryFileNames: `assets/[name]-${defaultLang}-[hash].js`,
          assetFileNames: `assets/[name]-${defaultLang}-[hash].[ext]`,
        },
      },
    },
  };
});
