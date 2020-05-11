import { sleep, asyncPipe } from '../utils'

const wait = (ms: number) => async () => {
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

export default {
    wait,
    waitUntil,
    breakIf,
    runWhile,
}
