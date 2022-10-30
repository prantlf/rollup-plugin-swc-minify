import { strictEqual } from 'assert'
import { fileURLToPath } from 'url'
import { readFile, unlink } from 'fs/promises'
import { rollup } from 'rollup'
import tehanu from 'tehanu'
import { minify } from '../lib/index.js'

const test = tehanu(fileURLToPath(import.meta.url))
let bundle

test.before(async () => {
  try {
    await unlink('test/out.js')
  // eslint-disable-next-line no-empty
  } catch {}
  try {
    await unlink('test/out.js.map')
  // eslint-disable-next-line no-empty
  } catch {}

  bundle = await rollup({ input: 'test/entry.js' })
})

test('minify without source map', async () => {
  await bundle.write({
    plugins: [minify()],
    file: 'test/out.js',
    format: 'cjs'
  })

  const code = await readFile('test/out.js', 'utf8')
  strictEqual(code, '"use strict";var o=()=>{console.log("glob")};function l(){console.log("help")}exports.glob=o,exports.help=l;\n')
})

test('minify with source map', async () => {
  await bundle.write({
    plugins: [minify()],
    file: 'test/out.js',
    sourcemap: true
  })

  const code = await readFile('test/out.js', 'utf8')
  const map = await readFile('test/out.js.map', 'utf8')
  strictEqual(code, `var o=()=>{console.log("glob")};function l(){console.log("help")}export{o as glob,l as help};
//# sourceMappingURL=out.js.map
`)
  strictEqual(map, `{"version":3,"file":"out.js","sources":["glob.js","help.js"],"sourcesContent":["export default () => {\\n  if (this !== {})\\n    console.log('glob')\\n}\\n","export function help() {\\n  console.log('help')\\n}\\n"],"names":["glob","console","log","help"],"mappings":"AAAA,IAAAA,EAAe,IAAM,CAEjBC,QAAQC,GAAG,CAAC,OAChB,ECHO,SAASC,GAAO,CACrBF,QAAQC,GAAG,CAAC,OACd"}`)
})
