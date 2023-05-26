class Color implements RGBA {
    /**
     * Creates an RGB value based color.
     *  @returns true if the specified tag is surrounded with `{`
     * and `}` characters.
     * @beta
     */
    r
    g
    b
    a

    constructor(r: number, g: number, b: number, a: number, random?: boolean) {
        if (!random){
            this.r = r
            this.g = g
            this.b = b
            this.a = a
        }
        else {
            this.r = Math.random() *255
            this.g = Math.random() *255
            this.b = Math.random() *255
            this.a = a
        }
    }

    string() {
        return `rgba(${this.r}, ${this.g}, ${this.b}, ${this.a})`
    }
}

export { Color }

type RGBA = {
    r: number, 
    g: number,
    b: number,
    a: number
}