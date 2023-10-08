import { minify as minifySwc } from '@swc/core'

export function minify() {
  return {
    name: 'swc-minify',

    async renderChunk(contents, _, { format, sourcemap, sourcemapExcludeSources }) {
      const { code, map } = await minifySwc(contents, {
        module: format === 'es',
        compress: true,
        mangle: true,
        sourceMap: !!sourcemap,
        inlineSourcesContent: !sourcemapExcludeSources
      })

      return { code, map: map || null }
    }
  }
}
