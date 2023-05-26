import { Coords } from "../interfaces/coords"

export class Vector2 implements Coords {
    constructor(x: number, y: number) {
        this._x = x
        this._y = y
    }
    private _x: number
    private _y: number

    public get x() {return this._x}
    public set x(newX: number) {this._x = newX}
    
    public get y() {return this._y}
    public set y(newY: number) {this._y = newY}




    log() {console.log([this.x, this.y])}
    normalize() {return new Vector2(this.x, this.y).divide(new Vector2(this.x, this.y).modulus())}
    modulus() {return Math.sqrt(this.x ** 2 + this.y ** 2)}
    add(newVector: Vector2) {return new Vector2(this._x + newVector.x, this._y + newVector.y)}
    substract(newVector: Vector2) {return new Vector2(this.x - newVector.x, this.y - newVector.y)}
    multiply(scalar: number) {return new Vector2(this.x * scalar, this.y * scalar)}
    divide(scalar: number) {return new Vector2(this.x / scalar, this.y / scalar)}

    draw(canvasCtx: CanvasRenderingContext2D, start: Vector2) {
        canvasCtx.beginPath()
        canvasCtx.moveTo(start.x, start.y)
        canvasCtx.lineTo(this.x, this.y)
        canvasCtx.stroke()
    }

}