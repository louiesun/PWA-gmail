import {defineConfig} from 'vite';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
    base: '/',
    plugins: [
        VitePWA({
            injectRegister: 'auto',
            registerType: 'autoUpdate',
            devOptions: {
                enabled: true
            },
            includeAssets: ['favicon.svg'],
            manifest: {
                name: 'Installable PWA of gmail',
                short_name: "PWA-gmail",
                theme_color: "#ffffff",
                scope: "mail.google.com",
                start_url: "./",
                display: "standalone",
                background_color: "#ffffff",
                icons: [
                    {
                        src: "favicon.svg",
                        sizes: "16x16 32x32 48x48 64x64 128x128 256x256 512x512",
                        type: "image/svg+xml",
                        purpose: "any",
                    },
                ],
            },
        })
    ],
});