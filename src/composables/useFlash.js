import 'sweetalert2'

export function useFlash() {
  function flash(message) {
    return Swal.fire(message)
  }
}

return { flash }