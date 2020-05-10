import { sleep, asyncPipe } from '../utils'
import MiniMap from '../screen/MiniMap'
import Shadower from '../Jobs/Shadower'

(async () => {
    await sleep(2000)

    const bottomLeft = new MiniMap({
        height: 20,
        width: 30,
        oHeight: 125,
        oWidth: 0
    })

    const midRight = new MiniMap({
        height: 10,
        width: 20,
        oHeight: 105,
        oWidth: 90
    })

    const midRight1 = new MiniMap({
        height: 10,
        width: 15,
        oHeight: 100,
        oWidth: 110
    })

    const shadower = new Shadower()
    shadower.uluCity({
        floor1: [bottomLeft],
        floor2: [midRight, midRight1],
    })
})()
