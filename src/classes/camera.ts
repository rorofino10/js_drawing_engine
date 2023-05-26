import { Vector2 } from "../utility/vector";
import { Canvas } from "./canvas";
import { Controller } from "./controller";

class Camera {
    canvas: Canvas
    controller: Controller
    private _position: Vector2

    constructor(canvas: Canvas, controller: Controller) {
        this.canvas = canvas
        this.controller = controller
        this._position = new Vector2(0,0)
        window.addEventListener('keydown', (event) => {
            if (event.ctrlKey) {
                switch (event.key){
                    case 'ArrowRight':
                        this.canvas.resize(this.canvas.width + 10, this.canvas.height)
                        break
                    case 'ArrowLeft':
                        this.canvas.resize(this.canvas.width - 10, this.canvas.height)
                        break
                    case 'ArrowUp':
                        this.canvas.resize(this.canvas.width, this.canvas.height + 10)
                        break
                    case 'ArrowDown':
                        this.canvas.resize(this.canvas.width, this.canvas.height - 10)
                        break
                }
            }
            else {
                switch (event.key){
                    case 'w':
                        this.position = this.position.add(new Vector2(0,1))
                        break
                    case 'a':
                        this.position = this.position.add(new Vector2(1,0))
                        break
                    case 's':
                        this.position = this.position.add(new Vector2(0,-1))
                        break
                    case 'd':
                        this.position = this.position.add(new Vector2(-1,0))
                        break
                    case 'r':
                        const pipe = this.controller.entityPipeline
                        pipe.remove(pipe._list[Math.floor(Math.random() * pipe._list.length)])
                        break
                }
            }
        })
    }

    public get position() {return this._position}
    public set position(newVector: Vector2) {this._position = newVector}


    render(canvas: Canvas) {
        this.controller.entityPipeline._list.forEach((entity) => {
            canvas.drawEntity(entity)
        })
        this.controller.trailPipeline._list.forEach((trail) => {
            canvas.drawVector(trail, canvas.mousePos)
        })
        if (canvas.isClicked){
            canvas.drawTrail()
        }
        for (let i = 0; i < 1000; i += 100) {
            for (let j = 0; j < 1000; j += 100) {
                canvas.draw(new Vector2(i,j), 'black', 1)
                canvas.draw(new Vector2(i,-j), 'black', 1)
                canvas.draw(new Vector2(-i,j), 'black', 1)
                canvas.draw(new Vector2(-i,-j), 'black', 1)
            }
        }

    }

}

export { Camera }