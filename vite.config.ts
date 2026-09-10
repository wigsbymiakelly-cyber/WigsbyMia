import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { fileURLToPath, URL } from "node:url";

export default defineConfig({
  base: "/",
  plugins: [
    react(),
    {
      name: "local-page-routes",
      configureServer(server) {
        server.middlewares.use((request, response, next) => {
          if (request.url === "/" || request.url?.startsWith("/?")) {
            response.statusCode = 302;
            response.setHeader("Location", "/github-index.html");
            response.end();
            return;
          }

          if (request.url === "/contact" || request.url?.startsWith("/contact?")) {
            response.statusCode = 302;
            response.setHeader("Location", "/github-contact.html");
            response.end();
            return;
          }

          next();
        });
      },
    },
  ],
  resolve: {
    alias: {
      "next/link": fileURLToPath(
        new URL("./app/components/GithubLink.tsx", import.meta.url),
      ),
    },
  },
  build: {
    outDir: "dist",
    emptyOutDir: true,
    rollupOptions: {
      input: {
        index: fileURLToPath(new URL("./github-index.html", import.meta.url)),
        contact: fileURLToPath(new URL("./github-contact.html", import.meta.url)),
        photoPrep: fileURLToPath(new URL("./photo-prep.html", import.meta.url)),
      },
    },
  },
});
