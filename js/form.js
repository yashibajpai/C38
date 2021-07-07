class Form {
    constructor() {
        this.input = createInput("name")
        this.button = createButton("play")
        this.greeting = createElement("h3")
    }
    disappear(){
        this.greeting.hide()
        this.button.hide()
        this.input.hide()
    }
    display (){
        var title = createElement("h2")
        title.html("Car Racing Game")
        title.position(130,0)

        this.input.position(displayWidth/2-50, displayHeight/2-40)
        this.button.position(displayWidth/2+50,displayHeight/2)

        this.button.mousePressed(()=>{
            this.input.hide()
            this.button.hide()
             player.name = this.input.value()

            playerCount++
            player.index = playerCount
            player.update()
            player.updateCount(playerCount)

            this.greeting.html("hello "+ player.name)
            this.greeting.position(displayWidth/2-50, displayHeight/2-40)

        })
    }
}