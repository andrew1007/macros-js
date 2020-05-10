import robot from 'robotjs'
import { sleep, pipeableFunc } from '../utils'

const _ = {} as unknown as keys

interface keys {
    left: pipeableFunc
}

const press = new Proxy<keys>(_, {
    get: function (_, prop: string) {
        return () => {
            console.error('pressing key:', prop)
            robot.keyTap(prop)
        }
    }
})

const hold = new Proxy<keys>(_, {
    get: function (_, prop: string) {
        return () => {
            console.error('holding key:', prop)
            robot.keyToggle(prop, 'down')
        }
    }
})

const release = new Proxy<keys>(_, {
    get: function (_, prop: string) {
        return () => {
            console.error('releasing key:', prop)
            robot.keyToggle(prop, 'up')
        }
    }
})

const wait = (ms: number) => async () => {
    const positiveModifier = !!Math.round(Math.random())
    const msModifier = positiveModifier ? Math.random() * 700 : -Math.random() * 700
    console.error('waiting: ', (ms + msModifier).toFixed(1), 'ms')
    await sleep(ms + msModifier)
}

const waitUntil = (cb: () => Promise<void>) => async () => {
    await cb()
}

export const key = {
    press,
    hold,
    release,
    wait,
    waitUntil
}
