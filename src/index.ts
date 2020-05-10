import { key } from './key'
import { sleep, asyncPipe } from './utils'
import MiniMap from './screen/MiniMap'

(async () => {
    await sleep(1000)
    const minimap = new MiniMap({
        height: 150,
        width: 150
    })
    minimap.getCharacter()
    const {
        hold,
        wait,
        release,
    } = key

    for (let i = 0; i < 1; i++) {
        const hello = asyncPipe(
            wait(5000),
            release.left,
        )
        await asyncPipe(
            hold.left,
            hello
        )()
    }
})()
