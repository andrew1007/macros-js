import robot from 'robotjs'
import { sleep, pipeableFunc, asyncPipe, logMsg } from '../utils'

const _ = {} as unknown as keys

interface keys {
    left: pipeableFunc,
    f: pipeableFunc,
    s: pipeableFunc,
    a: pipeableFunc,
    right: pipeableFunc
}
robot.setKeyboardDelay(1)

const press = new Proxy<keys>(_, {
    get: function (_, prop: string) {
        return () => {
            logMsg('pressing key:', prop)
            robot.keyTap(prop)
        }
    }
})

const hold = new Proxy<keys>(_, {
    get: function (_, prop: string) {
        return () => {
            logMsg('holding key:', prop)
            robot.keyToggle(prop, 'down')
        }
    }
})

const release = new Proxy<keys>(_, {
    get: function (_, prop: string) {
        return () => {
            logMsg('releasing key:', prop)
            robot.keyToggle(prop, 'up')
        }
    }
})

const wait = (ms: number) => async () => {
    const positiveModifier = !!Math.round(Math.random())
    const msModifier = positiveModifier ? Math.random() * 10 : -Math.random() * 10
    logMsg('waiting: ', (ms + msModifier).toFixed(1), 'ms')
    await sleep(ms)
}

const waitUntil = (cb: () => Promise<void>) => async () => {
    await cb()
}

const runWhile = (cb: () => Promise<boolean>, runCounter: number = Infinity) => async () => {
    const isWhile = await cb()
    if ((isWhile || isWhile === undefined) && runCounter > 0) {
        await asyncPipe(
            runWhile(cb, runCounter - 1)
        )()
    }
}

// if false, break out of routine
const breakIf = (cb: () => Promise<boolean>) => async () => {
    const breakControl = await cb()
    return breakControl
}

export const key = {
    press,
    hold,
    release,
    wait,
    waitUntil,
    breakIf,
    runWhile
}
