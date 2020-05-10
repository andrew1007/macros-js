import { run, press, wait } from './Key'

(async () => {
    const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms))
    await sleep(1000)
    for (let i = 0; i < 1; i++) {
        await sleep(100)
        const hello = run(
            wait(5000),
            press.left,
        )
        await run(
            press.left,
            hello
        )()
    }
})()
