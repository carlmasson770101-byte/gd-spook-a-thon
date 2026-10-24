info.onCountdownEnd(function () {
    game.setGameOverMessage(true, "YAY! You have won!!!")
    music.play(music.melodyPlayable(music.powerUp), music.PlaybackMode.UntilDone)
})
info.onLifeZero(function () {
    music.play(music.melodyPlayable(music.powerDown), music.PlaybackMode.UntilDone)
    game.splash("OH NO! You lost! press A to try again.")
    info.setLife(3)
    info.startCountdown(90)
    Geometry_dash_Icon.setPosition(78, 56)
    Swing_Copter.setPosition(22, 17)
    Geometry_dash_Icon.setStayInScreen(true)
    Swing_Copter.setStayInScreen(true)
    sprites.destroy(Pie)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    info.changeLifeBy(1)
    info.changeScoreBy(1)
    music.play(music.melodyPlayable(music.jumpUp), music.PlaybackMode.UntilDone)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    Swing_Copter.setPosition(22, 17)
    music.play(music.melodyPlayable(music.pewPew), music.PlaybackMode.UntilDone)
})
let Pie: Sprite = null
let Swing_Copter: Sprite = null
let Geometry_dash_Icon: Sprite = null
game.splash("Geometry dash Spook-a-thon!")
game.splash("You have 5 hearts, and if you lose all...")
game.splash("You lose!")
game.splash("Good luck, but don't die...")
scene.setBackgroundColor(13)
info.setScore(0)
Geometry_dash_Icon = sprites.create(img`
    f f f f f f f f f f f f f f f f 
    f 5 5 5 5 5 5 5 5 5 5 5 5 5 4 f 
    f 5 5 f f f f 5 5 f f f f 4 4 f 
    f 5 5 f 9 6 f 5 5 f 9 6 f 4 4 f 
    f 5 5 f 6 6 f 5 5 f 6 6 f 4 4 f 
    f 5 5 f f f f 5 5 f f f f 4 4 f 
    f 5 5 5 5 5 5 5 5 4 4 4 4 4 4 f 
    f 5 f f f f f f f f f f f f 4 f 
    f 5 f 6 9 9 9 9 9 9 9 9 6 f 4 f 
    f 5 f 6 6 6 6 6 6 6 6 6 6 f 4 f 
    f 5 f f f f f f f f f f f f 4 f 
    f 5 5 5 4 4 4 4 4 4 4 4 4 4 4 f 
    f 5 5 4 4 4 4 4 4 4 4 4 4 4 4 f 
    f 5 4 4 4 4 4 4 4 4 4 4 4 4 4 f 
    f 4 4 4 4 4 4 4 4 4 4 4 4 4 4 f 
    f f f f f f f f f f f f f f f f 
    `, SpriteKind.Player)
Swing_Copter = sprites.create(img`
    . . f f f f f f f f f f f f . . 
    . f 1 1 1 1 1 1 1 1 1 1 d d f . 
    . f 1 1 1 1 1 1 1 1 1 1 1 d f . 
    f 1 f f f f 1 1 1 1 f f f f d f 
    f 1 f f f f 1 1 1 1 f f f f d f 
    f 1 f f f 1 1 1 1 1 1 f f f d f 
    f 1 1 1 1 1 1 f f 1 1 1 1 1 d f 
    f 1 1 1 1 1 f f f f 1 1 1 1 d f 
    f 1 1 1 1 1 f f f f 1 1 1 1 d f 
    f 1 1 1 1 1 1 1 1 1 1 1 1 d d f 
    f f 1 f f f f f f f f f f d f f 
    . f f f f 1 f 1 f 1 f 1 f f f . 
    . . f 1 f f f f f f f f d f . . 
    . . f f 1 1 1 1 1 1 1 d f f . . 
    . . . f d d d d d d d d f . . . 
    . . . f f f f f f f f f f . . . 
    `, SpriteKind.Enemy)
Geometry_dash_Icon.setPosition(78, 56)
controller.moveSprite(Geometry_dash_Icon)
info.setLife(5)
Swing_Copter.setPosition(22, 17)
Swing_Copter.follow(Geometry_dash_Icon, 100)
info.startCountdown(90)
Geometry_dash_Icon.setStayInScreen(true)
Swing_Copter.setStayInScreen(true)
game.onUpdateInterval(1000, function () {
    Pie = sprites.create(img`
        . . . . . . . . . . . 6 6 6 6 6 
        . . . . . . . . . 6 6 7 7 7 7 8 
        . . . . . . 8 8 8 7 7 8 8 6 8 8 
        . . e e e e c 6 6 8 8 . 8 7 8 . 
        . e 2 5 4 2 e c 8 . . . 6 7 8 . 
        e 2 4 2 2 2 2 2 c . . . 6 7 8 . 
        e 2 2 2 2 2 2 2 c . . . 8 6 8 . 
        e 2 e e 2 2 2 2 e e e e c 6 8 . 
        c 2 e e 2 2 2 2 e 2 5 4 2 c 8 . 
        . c 2 e e e 2 e 2 4 2 2 2 2 c . 
        . . c 2 2 2 e e 2 2 2 2 2 2 2 e 
        . . . e c c e c 2 2 2 2 2 2 2 e 
        . . . . . . . c 2 e e 2 2 e 2 c 
        . . . . . . . c e e e e e e 2 c 
        . . . . . . . . c e 2 2 2 2 c . 
        . . . . . . . . . c c c c c . . 
        `, SpriteKind.Food)
    Pie.setPosition(randint(0, 160), randint(0, 160))
})
