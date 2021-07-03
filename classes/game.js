class Game {
    constructor() {
        //arguments on the constructor are used to personalize objects
        this.bg = new Image();
        this.bg.src = "../images/bg.png"
        this.bird = new Bird();
        this.pipesArr = [];
        this.isGameOn = true;
    }

    generatePipes = () => {

        if (!this.pipesArr.length || this.pipesArr[this.pipesArr.length-1].x === canvas.width / 2) {
            
            let randomPos = Math.floor(Math.random() * -canvas.height / 2) 

            //we want to create a pipe
            let pipe = new Pipe(randomPos, "../images/obstacle_top.png");
    
            // we want to push the pipe into th array
            this.pipesArr.push(pipe);

            // created second pipe
            let randomPos2 = randomPos + pipe.height + this.bird.height * 3;

            let pipe2 = new Pipe(randomPos2, "../images/obstacle_bottom.png")

            this.pipesArr.push(pipe2)
        }

        
       
    }

    gameLoop = () => {
        //1. clearing the canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height)

        //2. movement of elements or any action
        this.bird.birdGravity();

        this.generatePipes();

        this.pipesArr.forEach (eachPipe => {
            eachPipe.pipeMove();
        })

        this.pipesArr.forEach(eachPipe => {
           if (this.bird.birdPipeCollision(eachPipe)) {
               // stop the game
                this.isGameOn = false;
               //remove the canvas
                canvas.style.display = "none";
               //display gameover screen
               gameoverScreen.style.display = "flex";
           }
        })

        //3. drawing elements
        ctx.drawImage(this.bg, 0,0,canvas.width, canvas.height) 

        this.bird.drawBird();

        //this.pipesArr[0].drawPipe();
        this.pipesArr.forEach (eachPipe => {
            eachPipe.drawPipe();
        })

         //4.request animation
         if (this.isGameOn) {
             requestAnimationFrame(this.gameLoop);
         }

    }
}

