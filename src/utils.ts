export const sleep: (ms: number) => Promise<void> = ms =>
    new Promise(resolve => setTimeout(resolve, ms))

export type pipeableFunc = () => Promise<any>;

/**
 * functional piping func
 * if you want to prematurely break out, use a func that returns false
 */
export const asyncPipe = (
    ...funcs: pipeableFunc[]
): pipeableFunc => async () => {
    for (const func of funcs) {
        const val = await func()
        if (val === false) {
            // propagate value up
            return val
        }
    }
}
