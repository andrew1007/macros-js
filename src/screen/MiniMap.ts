import robot from 'robotjs'

type IConstructor = {
    height: number
    width: number
}

const WINDOW_BAR_HEIGHT = 25
const IN_GAME_MINI_MAP_HEIGHT = 10
const IN_GAME_MINI_MAP_WIDTH = 10
const CHARACTER_HEX_COLOR = 'ffdd44'

export default class MiniMap {
    height: number
    width: number
    topLeftHeight: number
    topLeftWidth: number

    constructor({ height, width }: IConstructor) {
        this.height = height + WINDOW_BAR_HEIGHT + IN_GAME_MINI_MAP_HEIGHT
        this.width = width + IN_GAME_MINI_MAP_WIDTH
        this.topLeftHeight = WINDOW_BAR_HEIGHT + IN_GAME_MINI_MAP_HEIGHT
        this.topLeftWidth = IN_GAME_MINI_MAP_WIDTH
    }

    getCharacter() {
        const X_DIMENSION = this.height
        const Y_DIMENSION = this.width
        const miniMapImage = robot.screen.capture(X_DIMENSION, Y_DIMENSION)
        const SEARC_INC = 4
        miniMapImage.colorAt(500, 500)
        for (let y = this.topLeftHeight; y < Y_DIMENSION; y += SEARC_INC) {
            for (let x = this.topLeftWidth; x < X_DIMENSION; x += SEARC_INC) {
                if (miniMapImage.colorAt(y, x) === CHARACTER_HEX_COLOR) {
                    console.error('character found at ', y, x)
                    return { x, y }
                }
            }
        }

        console.error(`CHARACTER NOT FOUND. SEARCHED DIMENSIONS: X: ${this.height}, Y: ${this.width}`)
        return {
            x: 0,
            y: 0
        }
    }
}
