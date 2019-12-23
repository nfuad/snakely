import * as React from 'react'
import useInterval from 'react-useinterval'

// custom components
import Board from './Board'

// helper functions
import getRandomCoordinates from '../utils/getRandomCoordinates'

// constants
import DIRECTION from '../constants/direction'

// initial state of the game
const initialState = {
  food: getRandomCoordinates,
  speed: 200,
  direction: DIRECTION.RIGHT,
  snakeDots: [
    [0, 0],
    [2, 0]
  ],
  gameOver: false
}

export default () => {
  const [food, setFood] = React.useState(initialState.food)
  const [speed, setSpeed] = React.useState(initialState.speed)
  const [gameOver, setGameOver] = React.useState(initialState.gameOver)
  const [direction, setDirection] = React.useState(initialState.direction)
  const [snakeDots, setSnakeDots] = React.useState(initialState.snakeDots)

  React.useEffect(() => {
    document.onkeydown = onKeyDown
    onOutOfBounds()
    onCollapse()
    onEat()
  })

  const onKeyDown = (e) => {
    e = e || window.event
    switch (e.keyCode) {
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
  }

  const moveSnake = () => {
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

  const onOutOfBounds = () => {
    let head = snakeDots[snakeDots.length - 1]
    if (head[0] >= 100 || head[1] >= 100 || head[0] < 0 || head[1] < 0)
      onGameOver()
  }

  const onCollapse = () => {
    let snake = [...snakeDots]
    let head = snake[snake.length - 1]
    snake.pop()
    snake.forEach((dot) => {
      if (head[0] == dot[0] && head[1] == dot[1]) onGameOver()
    })
  }

  const onEat = () => {
    let head = snakeDots[snakeDots.length - 1]
    if (head[0] === food[0] && head[1] === food[1]) {
      setFood(getRandomCoordinates)
      enlargeSnake()
      increaseSpeed()
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
    setFood(initialState.food)
    setSpeed(initialState.speed)
    setGameOver(!initialState.gameOver)
    setDirection(initialState.direction)
    setSnakeDots(initialState.snakeDots)
  }

  useInterval(moveSnake, speed)

  return <Board food={food} snakeDots={snakeDots} />
}
