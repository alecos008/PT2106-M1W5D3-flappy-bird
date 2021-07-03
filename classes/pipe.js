class Pipe {
    constructor(yPos, srcUrl) {
        this.x = canvas.width;
        this.y = yPos;
        this.width = 80;
        this.height = canvas.height * 0.75;
        this.speed = 1
        this.image = new Image()
        this.image.src = srcUrl;
    }

    // method to draw the pipe
    drawPipe = () => {
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height)
    }

    // method that moves the pipe
    pipeMove = () => {
        this.x -= this.speed;
    }
}