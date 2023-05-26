import { Vector2 } from "../utility/vector"
import { Color } from "../utility/color"
import { Entity } from "./entity"
import { EntityPipeline } from "./entityPipeline"
import { TrailPipeline } from "./trailPipeline"

class Controller {
    
    entityPipeline: EntityPipeline
    trailPipeline: TrailPipeline

    constructor () {
        this.entityPipeline = new EntityPipeline()
        this.trailPipeline = new TrailPipeline()
    }

    start() {
        for (let i = 0; i < 100; i++) {
            new Entity(15, new Vector2(0,0), new Color(255, 45, 21, 1, true), this.entityPipeline)
        }
    }

    update() {

    }

    lateUpdate() {
        this.entityPipeline._list.forEach((entity) => {
            // entity.color = new Color(255, 45, 21, 1, true).string()
            entity.move()
        })
    }
}

export { Controller }