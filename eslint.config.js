import pluginVue from 'eslint-plugin-vue'
import vueTsEslintConfig from '@vue/eslint-config-typescript'
import oxlint from 'eslint-plugin-oxlint'
import skipFormatting from '@vue/eslint-config-prettier/skip-formatting'

import unocss from '@unocss/eslint-config/flat'

export default [
    {
        name: 'app/files-to-lint',
        files: ['**/*.{ts,mts,tsx,vue}']
    },

    {
        name: 'app/files-to-ignore',
        ignores: ['**/dist/**', '**/dist-ssr/**', '**/coverage/**']
    },

    ...pluginVue.configs['flat/essential'],
    {
        rules: {
            'vue/multi-word-component-names': ['error', { ignores: ['index'] }]
        }
    },

    ...vueTsEslintConfig(),
    oxlint.configs['flat/recommended'],
    skipFormatting,

    unocss
]
