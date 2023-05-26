import { Pipeline } from "../interfaces/pipeline";
import { Entity } from "./entity";

class EntityPipeline implements Pipeline {
    _list: Entity[]

    constructor () {
        this._list = []
    }
    remove(entity: Entity) {
        this._list = this._list.filter((entityVal) => entityVal != entity);
    }
    append(entity: Entity) {
        this._list.push(entity)
    }
    shift() {
        this._list.shift()
    }
    pop() {
        this._list.pop()
    }
    clear() {this._list = []}
    draw() {}
}

export { EntityPipeline }