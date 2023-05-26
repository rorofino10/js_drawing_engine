import { Color } from "../utility/color"
import { Vector2 } from "../utility/vector"
import { EntityPipeline } from "./entityPipeline"

class Entity {

    size: number
    position: Vector2
    velocity: Vector2
    color: string
    index: number

    constructor (size: number, position: Vector2, color: Color, entityPipeline: EntityPipeline) {
        this.size = size
        this.color = color.string()
        this.position = position
        this.velocity = new Vector2((Math.random()), (Math.random()))
        this.index = entityPipeline._list.length
        entityPipeline.append(this)
    }

    move() {
        this.position = this.position.add(this.velocity)
    }
}

export { Entity }