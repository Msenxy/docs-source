import type MarkdownIt from 'markdown-it'
import Token from 'markdown-it/lib/token.mjs'

const handleHeading = (token: Token) => {
    const level = parseInt(token.tag.slice(1))
    return level <= 3 ? `h${level + 1}` : 'p'
}

export const heading = (md: MarkdownIt) => {
    md.renderer.rules.heading_open = (tokens, idx) =>
        `<${handleHeading(tokens[idx])}>`

    md.renderer.rules.heading_close = (tokens, idx) =>
        `</${handleHeading(tokens[idx])}>`
}
