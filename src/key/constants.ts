import { AvailableKeys } from './types'

type keyMapType = { [key in keyof AvailableKeys]: string }

/**
 * @description protect our key name defintions from any
 * 3rd party library changes
 */
export const KEY_NAMES: keyMapType = {
    a: 'a',
    f: 'f',
    left: 'left',
    right: 'right',
    s: 's'
}
