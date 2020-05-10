import { sleep, asyncPipe } from './utils'
import Shadower from './Jobs/Shadower'
import { key } from './key'
import MiniMap from './screen/MiniMap'

(async () => {
    await sleep(1000)
    // const minimap = new MiniMap({
    //     height: 150,
    //     width: 150
    // })
    // minimap.getCharacter()
    const {
        runWhile
    } = key

    const bottomLeft = new MiniMap({
        height: 1,
        width: 60,
        oHeight: 130,
        oWidth: 0
    })

    const shadower = new Shadower()
    asyncPipe(
        runWhile(async () => {
            await shadower.bStep()
            // console.log(!bottomLeft.exists)
            return false
        })
    )()
})()
