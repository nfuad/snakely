import * as React from 'react'

export default () => {
  const [bestScore, setBestScore] = React.useState(0)
  React.useEffect(() => {
    setBestScore(parseInt(localStorage.getItem('bestScore')))
  })
  return <>{bestScore}</>
}
