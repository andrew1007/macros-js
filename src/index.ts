import { key } from './key'
import { sleep, asyncPipe } from './utils'

(async () => {
    const {
        hold,
        press,
        release,
        wait
    } = key
    await sleep(1000)
    for (let i = 0; i < 1; i++) {
        const hello = asyncPipe(
            wait(2000),
            release.left,
        )
        await asyncPipe(
            hold.left,
            hello
        )()
    }
})()
