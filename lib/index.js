import { minify as minifySwc } from '@swc/core'

export function minify() {
  return {
    name: 'swc-minify',

    async renderChunk(contents, _, { sourcemap }) {
      const { code, map } = await minifySwc(contents, {
    		compress: true,
    		mangle: true,
    		sourceMap: !!sourcemap
      })

      return { code, map: map || null }
    }
  }
}
