import Swal from 'sweetalert2'

const alertSuccess = (message?: string | null, title?: string | null) => {
  Swal.fire({
    title: title || 'Success',
    text: message || 'Successfully',
    showConfirmButton: true,
    icon: 'success',
    showCloseButton: true,
    timer: 2000
  })
}

const alertLoading = () => {
  Swal.fire({
    title: 'Loading',
    html: 'Please Wait',
    icon: 'warning',
    didOpen: () => {
      Swal.showLoading()
    }
  })
}

const showPopupConfirmation = async (
  title?: string,
  text?: string,
  confirButtonText?: string,
  showCancelButton: boolean = true,
  opt?: any
) => {
  return Swal.fire({
    title: title || 'Are you sure want to delete this data?',
    text: text || 'You will no longer see this data.',
    icon: 'warning',
    showCancelButton: showCancelButton,
    confirmButtonColor: '#d33',
    confirmButtonText: confirButtonText || 'Accept',
    cancelButtonText: 'Cancel',
    allowOutsideClick: opt?.hasOwnProperty('allowOutsideClick')
      ? opt.allowOutsideClick
      : true,
    allowEscapeKey: opt?.hasOwnProperty('allowEscapeKey')
      ? opt.allowEscapeKey
      : true,
    allowEnterKey: opt?.hasOwnProperty('allowEnterKey')
      ? opt.allowEnterKey
      : true,
    customClass: {
      popup: opt?.customClass?.popup || 'p-3',
      container: opt?.customClass?.container || '',
      actions: opt?.customClass?.actions || 'flex gap-3 w-full',
      confirmButton:
        opt?.customClass?.confirmButton ||
        '!bg-[#4094D4] transition-all ease-in-out hover:!bg-[#3882ba] text-white grow',
      cancelButton:
        opt?.customClass?.cancelButton ||
        '!border !border-solid !text-rose-700 !border-rose-700 transition-all ease-in-out !bg-white hover:!bg-rose-50 grow'
    }
  }).then((result) => result.isConfirmed)
}

const alertSuccessConfirmation = () => {
  Swal.fire({
    title: 'Success',
    text: 'Successfully',
    showConfirmButton: true,
    icon: 'success'
  })
}

const alertLogoutConfirmation = () => {
  Swal.fire({
    title: 'Logout',
    text: 'Are you sure you want to log out?',
    showConfirmButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    showCancelButton: true,
    confirmButtonText: 'Logout',
    icon: 'warning'
  }).then((result) => result.isConfirmed)
}

const alertError = (message?: string | null, opt?: any) => {
  Swal.fire({
    title: opt?.title || 'Error',
    html: message || 'Warning',
    showConfirmButton: opt?.showConfirmButton || true,
    confirmButtonColor: opt?.confirmButtonColor || '#0760ef',
    icon: opt?.icon || 'error'
  })
}

const alertWarning = () => {
  Swal.fire({
    title: 'Warning',
    html: 'warning!',
    showConfirmButton: true,
    confirmButtonColor: '#0760ef',
    icon: 'warning'
  })
}

const hideAlert = () => {
  Swal.close()
}

export const useAlert = {
  alertSuccess,
  alertSuccessConfirmation,
  alertLogoutConfirmation,
  alertError,
  alertWarning,
  hideAlert,
  showPopupConfirmation,
  alertLoading
}
