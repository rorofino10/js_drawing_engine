import { Camera } from './classes/camera'
import { Canvas } from './classes/canvas'
import { Controller } from './classes/controller'
import './style.css'

const canvas = new Canvas(window.innerWidth-1, window.innerHeight-1, document.body)
export const controller = new Controller()
export const camera = new Camera(canvas, controller)

controller.start()
canvas.resize(640, 260)

setInterval(() => {
    canvas.clear()
    controller.update()
    controller.lateUpdate()
    camera.render(canvas)
}, 10)