import { Pipeline } from "../interfaces/pipeline";
import { Vector2 } from "../utility/vector";

class TrailPipeline implements Pipeline {
    _list: Vector2[]

    constructor() {
        this._list = []
    }

    
    remove(trail: Vector2) {
        this._list = this._list.filter((trailVal) => trailVal != trail);
    }
    append(trail: Vector2): void {
        this._list.push(trail)
    }
    shift(): void {
        this._list.shift()
    }
    pop(): void {
        this._list.pop()
    }
    clear(): void {
        this._list = []
    }
    draw(): void {
    }

}

export { TrailPipeline }