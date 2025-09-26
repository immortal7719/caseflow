import { resolve } from "node:path";
import tailwindcss from "@tailwindcss/vite";
import tanstackRouter from "@tanstack/router-plugin/vite";
import viteReact from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    tanstackRouter({ autoCodeSplitting: true }),
    viteReact(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          "radix-vendor": [
            "@radix-ui/react-alert-dialog",
            "@radix-ui/react-dialog",
            "@radix-ui/react-label",
            "@radix-ui/react-select",
            "@radix-ui/react-slot",
          ],

          "reactflow-vendor": ["@xyflow/react", "@xyflow/system"],

          "dnd-vendor": ["react-dnd", "react-dnd-html5-backend"],

          "forms-vendor": ["react-hook-form", "@hookform/resolvers", "zod"],

          "ui-vendor": [
            "class-variance-authority",
            "clsx",
            "tailwind-merge",
            "lucide-react",
            "sonner",
          ],
        },
      },
    },
  },
});
