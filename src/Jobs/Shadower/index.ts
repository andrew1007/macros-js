import { asyncPipe } from "../../utils";
import { key } from "../../key";
import MiniMap from "../../screen/MiniMap";
import robot from 'robotjs'

const {
    runWhile,
    release,
    press,
    wait,
    hold
} = key

type ulu = {
    floor1: MiniMap[]
    floor2: MiniMap[]
    floor3?: MiniMap[]
    floor4?: MiniMap[]
}
export default class Shadower {
    get bStep() {
        return asyncPipe(
            press.f,
            press.f,
            wait(20),
            press.s,
        )
    }

    get longJump() {
        return asyncPipe(
            press.f,
            wait(20),
            press.f,
        )
    }

    get longBStep() {
        return asyncPipe(
            press.f,
            wait(0),
            press.f,
            wait(20),
            press.s,
        )
    }

    async uluCity({
        floor1,
        floor2,
        floor3,
        floor4
    }: ulu) {

        const midRight1 = new MiniMap({
            height: 10,
            width: 15,
            oHeight: 100,
            oWidth: 110
        })

        const shadower = new Shadower()
        await asyncPipe(
            hold.left,
            runWhile(async () => {
                await shadower.bStep()
                return !floor1.some(floor => floor.exists)
            }, 4),
            release.left,
            wait(10),
            hold.right,
            wait(100),
            release.right,
            this.longJump,
            runWhile(async () => {
                await shadower.bStep()
                return !floor2.some(floor => floor.exists)
            }, 6),
            runWhile(async () => {
                return !midRight1.exists
            }, 6),
            release.right,
        )()
    }
}
