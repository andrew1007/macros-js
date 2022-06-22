import robot from 'robotjs'
import { AvailableKeys } from './types'
import { KEY_NAMES } from './constants'

const _ = {} as unknown as AvailableKeys

const press = new Proxy<AvailableKeys>(_, {
    get: function (_, prop: string) {
        return () => {
            robot.keyTap(KEY_NAMES[prop])
        }
    }
})

const hold = new Proxy<AvailableKeys>(_, {
    get: function (_, prop: string) {
        return () => {
            robot.keyToggle(KEY_NAMES[prop], 'down')
        }
    }
})

const release = new Proxy<AvailableKeys>(_, {
    get: function (_, prop: string) {
        return () => {
            robot.keyToggle(KEY_NAMES[prop], 'up')
        }
    }
})

export default {
    press,
    hold,
    release
}
