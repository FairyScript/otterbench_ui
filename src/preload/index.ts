import { contextBridge, ipcRenderer } from 'electron'

const apiKey = 'electron'
/**
 * @see https://github.com/electron/electron/issues/21437#issuecomment-573522360
 */
const api = {
  versions: process.versions,
  minimize: () => ipcRenderer.send('minimize'),
  close: () => ipcRenderer.send('close'),
} as const

export type ExposedInMainWorld = Readonly<typeof api>

if (import.meta.env.MODE !== 'test') {
  /**
   * The "Main World" is the JavaScript context that your main renderer code runs in.
   * By default, the page you load in your renderer executes code in this world.
   *
   * @see https://www.electronjs.org/docs/api/context-bridge
   */
  contextBridge.exposeInMainWorld(apiKey, api)
} else {
  /**
   * Recursively Object.freeze() on objects and functions
   * @see https://github.com/substack/deep-freeze
   * @param obj Object on which to lock the attributes
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function deepFreeze(obj: any) {
    if (typeof obj === 'object' && obj !== null) {
      Object.keys(obj).forEach(prop => {
        const val = obj[prop]
        if (
          (typeof val === 'object' || typeof val === 'function') &&
          !Object.isFrozen(val)
        ) {
          deepFreeze(val)
        }
      })
    }

    return Object.freeze(obj)
  }

  deepFreeze(api)

  // eslint-disable-next-line @typescript-eslint/no-explicit-any,@typescript-eslint/no-var-requires
  ;(window as any).electronRequire = require

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ;(window as any)[apiKey] = api
}
