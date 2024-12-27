import type MarkdownIt from 'markdown-it'

const cn = '[\u4e00-\u9fa5]'
const en = '[a-zA-Z]'
const num = '[0-9]'

const addSpaceBetweenCnAndEn = (text: string): string =>
    text
        .replace(new RegExp(`(${cn})(${en}|${num})`, 'g'), '$1\u200A$2')
        .replace(new RegExp(`(${en})(${cn}|${num})`, 'g'), '$1\u200A$2')
        .replace(new RegExp(`(${num})(${cn}|${en})`, 'g'), '$1\u200A$2')

export const space = (md: MarkdownIt) => {
    md.core.ruler.push('space_between_cn_en', state => {
        state.tokens.forEach(token => {
            if (token.type !== 'inline' || !token.children) return

            token.children.forEach(child => {
                if (child.type === 'text') {
                    child.content = addSpaceBetweenCnAndEn(child.content)
                }
            })
        })
    })
}
