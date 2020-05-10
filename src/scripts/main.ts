import { sleep, asyncPipe } from '../utils'
import MiniMap from '../screen/MiniMap'
import Shadower from '../Jobs/Shadower'

(async () => {
    await sleep(2000)

    const bottomLeft = new MiniMap({
        height: 140,
        width: 30,
        oHeight: 100,
        oWidth: 0
    })

    const shadower = new Shadower()
    shadower.uluCity({
        floor1: bottomLeft
    })
})()
