export default (points) => {
  // get the best score from localStorage
  const bestScore = localStorage.getItem('bestScore')

  // set best score if bestScore doesn't exist or is smaller than points
  if (!bestScore || parseInt(bestScore) < points) {
    localStorage.setItem('bestScore', points.toString())
  }
}
