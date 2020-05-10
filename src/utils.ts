export const sleep: (ms: number) => Promise<void> = (ms) => new Promise(resolve => setTimeout(resolve, ms))

export type pipeableFunc = () => Promise<any>

export const asyncPipe = (...funcs: pipeableFunc[]): pipeableFunc => async () => {
    for (let func of funcs) {
        await func()
    }
}
