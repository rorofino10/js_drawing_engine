import { Entity } from "../classes/entity"
import { Vector2 } from "../utility/vector"

interface Pipeline {
    _list: Entity[] | Vector2[]

    append(entity: Entity | Vector2): void
    shift(): void
    pop(): void
    clear(): void
    draw(): void
}

export type { Pipeline }