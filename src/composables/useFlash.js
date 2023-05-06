import swal from 'sweetalert'

export function useFlash() {

  function flash(message) {
    return swal(message)
  }

  return { flash }
}