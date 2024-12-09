import { defineConfig, presetAttributify } from 'unocss'

export default defineConfig({
    presets: [presetAttributify()],
    preflights: [
        {
            getCSS: () => `
                * {
                    padding: 0;
                    margin: 0;
                }
            `
        }
    ]
})
