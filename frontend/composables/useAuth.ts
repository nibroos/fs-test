// import { loginStore } from '~/stores/loginStore'
import DateFnsAdapter from '@date-io/date-fns'
import { useMasterUser } from '~/stores/MasterData/AccountSetting'

const { getDiff, isAfter } = new DateFnsAdapter()
const route = useRoute()
const router = useRouter()

const isTokenExpired = (): boolean => {
  const expirationTime = localStorage.getItem('expired')
  if (expirationTime) {
    return isAfter(new Date(), new Date(expirationTime))
  }
  return true
}

const getExpired = () => {
  return localStorage.getItem('expired')
}

const getAuth = () => {
  const data = localStorage.getItem('_token')
  if (data) {
    return JSON.parse(data)
  }
  return {}
}

const removeAuth = () => {
  localStorage.removeItem('_token')
  localStorage.removeItem('expired')
}

const getStatusLogin = () => {
  const data = getAuth()
  if (data) {
    if (getDiff(new Date(), new Date(data)) <= 0) {
      return data.loginStatus
    }
    removeAuth()
    return false
  }
  return false
}

const checkAuth = () => {
  const data = localStorage.getItem('_token')
  return data
}

const permit = (permissions: string | any[]) => {
  let abilities: any[] = loginStore().abilities
  let isSuperAdmin = useMasterUser().data?.role
  if (isSuperAdmin == 'SUPERADMIN') {
    return true
  }

  if (typeof permissions === 'string') {
    return abilities.includes(permissions)
  }

  if (Array.isArray(permissions)) {
    function containsAny(source: string[], target: string[]) {
      var result = source.filter(function (item) {
        return target.indexOf(item) > -1
      })
      return result.length > 0
    }

    return containsAny(abilities, permissions)
  }

  return false
}

const handlePermission = async (
  permissionName: string | any[],
  action: string = 'warn'
) => {
  const isAllowed = ref<boolean>(true)
  isAllowed.value = permit(permissionName)

  // const backUrlName = () => {
  //   if (!!window.history.state.back) {
  //     return window.history.state.back;
  //   } else {
  //     return '/';
  //   }
  // };

  let previousRoute = route.query.back?.toString() || '/dashboard'

  const hasHistory = () => {
    return window.history.length > 2
  }

  if (action == 'redirect' && !isAllowed.value) {
    hasHistory() ? window.history.back() : navigateTo(previousRoute)
  }

  if (action == 'warn' && !isAllowed.value) {
    const confirmRedirect = await useAlert.showPopupConfirmation(
      '404',
      'Page not found, click to redirect',
      'Redirect',
      false,
      {
        allowOutsideClick: false,
        allowEscapeKey: false
      }
    )

    if (confirmRedirect) {
      hasHistory() ? window.history.back() : navigateTo(previousRoute)
    }
  }

  return isAllowed.value
}

export const useAuth = {
  checkAuth,
  getStatusLogin,
  removeAuth,
  getAuth,
  isTokenExpired,
  permit,
  handlePermission
}
