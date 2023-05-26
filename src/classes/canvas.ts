import { camera } from "../main"
import { Vector2 } from "../utility/vector"
import { Entity } from "./entity"

class Canvas {
    private _element: HTMLCanvasElement
    private _context: CanvasRenderingContext2D
    private _width: number
    private _height: number

    public mousePos: Vector2 = new Vector2(0, 0)
    public lastMousePos: Vector2 = new Vector2(0, 0)
    public isClicked: Boolean = false

    constructor (width: number, height: number, parent: HTMLElement) {
        this._element = document.createElement('canvas')
        this._width = width
        this._element.width = this._width
        this._height = height
        this._element.height = this._height
        this._element.tabIndex = 1
        parent.appendChild(this._element)
        this._context = this.getContext(this._element)
        this._element.addEventListener('mousemove', (event: MouseEvent) => {
            this.mousePos = this.getMousePos(event)
        })
        this._element.addEventListener('mousedown', (event: MouseEvent) => {
            this.lastMousePos = this.getMousePos(event)
            this.isClicked = true
        })
        this._element.addEventListener('mouseup', (event: MouseEvent) => {
            this.isClicked = false
            camera.position = (this.mousePos.multiply(-1))
        })
    }

    public get element() {return this._element}
    public set element(newElement: HTMLCanvasElement) {this._element = newElement}
    public get context() {return this._context}



    public get width() {return this._width}
    public set width(newWidth: number) {this.width = newWidth; this._element.width = newWidth}

    public get height() {return this._height}
    public set height(newHeight: number) {this.width = newHeight; this._element.height = newHeight}

    resize(width: number, height: number) {
        this._element.width = width
        this._element.height = height
        this.onResize()
    }


    onResize() {
        this._width = this._element.width
        this._height = this._element.height
    }
    onClick(event: MouseEvent) {
        const mousePos = this.getMousePos(event)
        this.draw(mousePos, 'red', 5)
    }

    getMousePos(evt: MouseEvent) {
        var rect = this._element.getBoundingClientRect()
        const mousePos = new Vector2(evt.clientX - rect.left - this.width/2 - camera.position.x, evt.clientY - rect.top - this.height/2 - camera.position.y)

        return mousePos
    }
    clear() {
        this.context.clearRect(0,0, this._element.width, this._element.height)
    }

    draw(coord: Vector2, color: string, size: number) {
        this.context.fillStyle = color
        this.context.fillRect(coord.x - size/2 + this.width/2 + camera.position.x, coord.y - size/2 + this.height/2 + camera.position.y, size, size)
    }

    drawRaster(coord: Vector2, color: string, size: number) {
        this.context.fillStyle = color
        this.context.fillRect(coord.x - size/2 + this.width/2, coord.y - size/2 +this.height/2, size, size)
    }

    drawEntity(entity: Entity) {
        this.context.fillStyle = entity.color
        this.context.fillRect(entity.position.x - entity.size/2 + this.width/2 + camera.position.x, entity.position.y - entity.size/2 + this.height/2 + camera.position.y, entity.size, entity.size)
    }

    drawVector(start: Vector2, end: Vector2){
        this.context.beginPath()
        this.context.moveTo(start.x + this.width/2 + camera.position.x, start.y + this.height/2 + camera.position.y) 
        this.context.lineTo(end.x + this.width/2 + camera.position.x, end.y + this.height/2 + camera.position.y)
        this.context.stroke()
    }

    drawTrail(){
        this.context.beginPath()
        this.context.moveTo(this.lastMousePos.x + this.width/2 + camera.position.x, this.lastMousePos.y + this.height/2 + camera.position.y) 
        this.context.lineTo(this.mousePos.x + this.width/2 + camera.position.x, this.mousePos.y + this.height/2 + camera.position.y)
        this.context.stroke()
    }

    private getContext(canvas: HTMLCanvasElement){

        const res = canvas.getContext('2d')
    
        if (!res || !(res instanceof CanvasRenderingContext2D)) {
            throw new Error('Failed to get 2D context');
        }
    
        const canvasCtx: CanvasRenderingContext2D = res;
        return canvasCtx
    }
    
}

export {Canvas}