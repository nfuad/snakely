import * as React from 'react'
import useInterval from 'react-useinterval'

// custom components
import Board from './Board'

// helper functions
import getRandomCoordinates from '../utils/getRandomCoordinates'
import setBestScore from '../utils/setBestScore'
import showGameOverModal from '../utils/showGameOverModal'

// constants
import DIRECTION from '../constants/direction'

export default () => {
  // initial state of the game
  const initialState = {
    food: getRandomCoordinates,
    speed: 200,
    paused: true,
    direction: DIRECTION.RIGHT,
    snakeDots: [
      [0, 0],
      [2, 0]
    ],
    gameOver: false
  }

  // declare sound effects variables
  let bummerSound, eatSound, moveSound

  // initialize states
  const [food, setFood] = React.useState(initialState.food)
  const [speed, setSpeed] = React.useState(initialState.speed)
  const [paused, setPaused] = React.useState(initialState.paused)
  const [gameOver, setGameOver] = React.useState(initialState.gameOver)
  const [direction, setDirection] = React.useState(initialState.direction)
  const [snakeDots, setSnakeDots] = React.useState(initialState.snakeDots)

  // subtract 2 default snake dots
  const points = snakeDots.length - 2

  React.useEffect(() => {
    // initialize sound effects
    bummerSound = new Audio('/sounds/bummer.mp3')
    eatSound = new Audio('/sounds/eat.mp3')
    moveSound = new Audio('/sounds/move.mp3')

    // assign document.onkeydown to custom onKeyDown
    document.onkeydown = onKeyDown
    didGoOutOfBounds()
    didCollapse()
    didEat()
  })

  const onKeyDown = (e) => {
    e = e || window.event

    setPaused(false)

    switch (e.keyCode) {
      case 32:
        setPaused(!paused)
        break
      case 38:
        setDirection(DIRECTION.UP)
        break
      case 40:
        setDirection(DIRECTION.DOWN)
        break
      case 37:
        setDirection(DIRECTION.LEFT)
        break
      case 39:
        setDirection(DIRECTION.RIGHT)
        break
    }

    // play a swoosh sound on move
    moveSound.play()
  }

  // move snake in the right direction
  const moveSnake = () => {
    if (!paused) {
      let dots = [...snakeDots]
      let head = dots[dots.length - 1]
      switch (direction) {
        case DIRECTION.RIGHT:
          head = [head[0] + 2, head[1]]
          break
        case DIRECTION.LEFT:
          head = [head[0] - 2, head[1]]
          break
        case DIRECTION.DOWN:
          head = [head[0], head[1] + 2]
          break
        case DIRECTION.UP:
          head = [head[0], head[1] - 2]
          break
      }
      dots.push(head)
      dots.shift()
      setSnakeDots(dots)
    }
  }

  // check if the snake hit any boundary
  const didGoOutOfBounds = () => {
    let head = snakeDots[snakeDots.length - 1]
    if (head[0] >= 100 || head[1] >= 100 || head[0] < 0 || head[1] < 0)
      onGameOver()
  }

  // check if the snake collapsed on itself
  const didCollapse = () => {
    let snake = [...snakeDots]
    let head = snake[snake.length - 1]
    snake.pop()
    snake.forEach((dot) => {
      if (head[0] == dot[0] && head[1] == dot[1]) onGameOver()
    })
  }

  // check if the sake ate the food
  const didEat = () => {
    let head = snakeDots[snakeDots.length - 1]
    if (head[0] === food[0] && head[1] === food[1]) {
      setFood(getRandomCoordinates)
      enlargeSnake()
      increaseSpeed()
      eatSound.play()
    }
  }

  const enlargeSnake = () => {
    let newSnake = [...snakeDots]
    newSnake.unshift([])
    setSnakeDots(newSnake)
  }

  const increaseSpeed = () => {
    if (speed > 10) {
      setSpeed(speed - 10)
    }
  }

  const onGameOver = () => {
    // play bummer sound
    bummerSound.play()

    // reset all states
    setFood(initialState.food)
    setSpeed(initialState.speed)
    setPaused(initialState.paused)
    setGameOver(!initialState.gameOver)
    setDirection(initialState.direction)
    setSnakeDots(initialState.snakeDots)

    // set bestScore in localStorage
    setBestScore(points)

    // show a modal
    showGameOverModal(points)
  }

  useInterval(moveSnake, speed)

  return <Board data={{ food, snakeDots, points }} />
}
