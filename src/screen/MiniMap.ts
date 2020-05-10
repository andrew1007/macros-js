import robot from 'robotjs'

type IConstructor = {
    height: number
    width: number,
    oHeight: number,
    oWidth: number
}

const WINDOW_BAR_HEIGHT = 25
const IN_GAME_MINI_MAP_HEIGHT = 5
const IN_GAME_MINI_MAP_WIDTH = 5
const CHARACTER_HEX_COLOR = 'ffdd44'

export default class MiniMap {
    height: number
    width: number
    topLeftHeight: number
    topLeftWidth: number

    constructor({ height, width, oHeight, oWidth }: IConstructor) {
        this.topLeftHeight = oHeight + IN_GAME_MINI_MAP_HEIGHT
        this.topLeftWidth = oWidth
        this.height = height + oHeight
        this.width = width + oWidth
    }

    getCharacter() {
        const Y_DIMENSION = this.height + this.topLeftHeight
        const X_DIMENSION = this.width + this.topLeftWidth
        const miniMapImage = robot.screen.capture(X_DIMENSION, Y_DIMENSION)
        const SEARC_INC = 6
        for (let y = this.topLeftHeight; y < Y_DIMENSION; y += SEARC_INC) {
            for (let x = this.topLeftWidth; x < X_DIMENSION; x += SEARC_INC) {
                if (miniMapImage.colorAt(x, y) === CHARACTER_HEX_COLOR) {
                    // console.error('character found at ', x, y)
                    return { x, y }
                }
            }
        }

        // console.error(`CHARACTER NOT FOUND. SEARCHED DIMENSIONS: X: ${this.height}, Y: ${this.width}`)
        return {
            x: 0,
            y: 0
        }
    }

    get exists() {
        const { x, y } = this.getCharacter()
        return !!x || !!y
    }
}
