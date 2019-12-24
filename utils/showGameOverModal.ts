import Swal from 'sweetalert2'

export default (points) => {
  Swal.fire({
    title: 'Oops... Game Over',
    text: `Points: ${points} 
            Best Score ${localStorage.getItem('bestScore')}
      `,
    confirmButtonText: 'Play again!',
    footer: `
        <footer>
          Share:
          <a href="https://twitter.com/intent/tweet?text=I've made ${points} points on https://snakely.now.sh. Play now!" target="_blank">
            Twitter
          </a>
        </footer>
      `
  })
}
