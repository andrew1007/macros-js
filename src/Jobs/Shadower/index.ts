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
    floor1: MiniMap
    floor2?: MiniMap
    floor3?: MiniMap
    floor4?: MiniMap
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

    async uluCity({
        floor1,
        floor2,
        floor3,
        floor4
    }: ulu) {
        const shadower = new Shadower()
        await asyncPipe(
            hold.left,
            runWhile(async () => {
                await shadower.bStep()
                return !floor1.exists
            }, 5),
            release.left,
            wait(10),
            hold.right,
            wait(100),
            runWhile(async () => {
                await shadower.bStep()
                return true
            }, 4),
            wait(100),
            release.right,
        )()
    }
}