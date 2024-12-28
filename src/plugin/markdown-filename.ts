import { resolve } from 'path'
import type { Plugin } from 'vite'

export const filename = (): Plugin => {
    return {
        name: 'vite-plugin-markdown-filename',
        transform(code: string, id: string) {
            if (id.endsWith('.md')) {
                const filePath = resolve(id)
                const fileName =
                    filePath.split('/').pop()?.replace('.md', '') || 'unknown'
                return code.replace(/{{filename}}/g, fileName)
            }
            return code
        }
    }
}
