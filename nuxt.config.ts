import tailwindcss from "@tailwindcss/vite";
import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
    compatibilityDate: "2026-06-20",
    css: ["./app/style.css"],
    nitro: {
        preset: "github-pages",
    },
    vite: {
        plugins: [tailwindcss()],
    },
});