import robot from 'robotjs'
import { sleep } from '../utils'

const _ = {} as unknown as actions

interface keys {
    left: () => actions
}

type actions = {
    press: keys
    hold: keys
    release: keys
    wait: (ms: number) => actions
}

export const press = new Proxy<keys>(_, {
    get: function(_, prop: string) {
        return () => {
            robot.keyTap(prop)
        }
    }
})

export const wait = (ms: number) => async () => {
    await sleep(ms)
}

export const run = (...funcs: (() => Promise<any>)[]) => async () => {
    for (let func of funcs) {
        await func()
    }
}
