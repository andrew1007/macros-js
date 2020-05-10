import robot from 'robotjs'
import { sleep, pipeableFunc } from '../utils'

const _ = {} as unknown as keys

interface keys {
    left: pipeableFunc
}

const press = new Proxy<keys>(_, {
    get: function (_, prop: string) {
        return () => {
            robot.keyTap(prop)
        }
    }
})

const hold = new Proxy<keys>(_, {
    get: function (_, prop: string) {
        return () => {
            robot.keyToggle(prop, 'down')
        }
    }
})

const release = new Proxy<keys>(_, {
    get: function (_, prop: string) {
        return () => {
            robot.keyToggle(prop, 'up')
        }
    }
})

const wait = (ms: number) => async () => {
    await sleep(ms)
}

export const key = {
    press,
    hold,
    release,
    wait,
}
