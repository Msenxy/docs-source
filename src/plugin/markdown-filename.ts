import type MarkdownIt from 'markdown-it'
import path from 'path'

const DEFAULT_TITLE = '随记'

const formatTitle = (filePath: string): string => {
    if (!filePath) return DEFAULT_TITLE

    return path
        .basename(filePath, path.extname(filePath))
        .replace(/-/g, ' ')
        .replace(/\b\w/g, c => c.toUpperCase())
}

export const filename = (md: MarkdownIt) => {
    const defaultRender = md.renderer.render.bind(md.renderer)

    md.renderer.render = (tokens, options, env) => {
        const filePath = env?.id || ''
        const title = filePath ? formatTitle(filePath) : '随记'

        return `<h1>${title}</h1>\n${defaultRender(tokens, options, env)}`
    }
}
