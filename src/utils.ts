export const sleep: (ms: number) => Promise<void> = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms))
}

export type pipeableFunc = () => Promise<any>

/**
 * functional piping func
 * if you want to prematurely break out, use a func that returns false
 */
export const asyncPipe = (...funcs: pipeableFunc[]): pipeableFunc => async () => {
    for (let func of funcs) {
        const val = await func()
        if (val === false) {
            // propgate value up 
            return val
        }
    }
}

export const logMsg = (...args: any[]) => {
    // console.log(...args)
}