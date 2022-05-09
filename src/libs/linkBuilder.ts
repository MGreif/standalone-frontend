export const buildApiLink = (url = '') => {
  const host = process.env.REACT_APP_USER_SERVICE_HOST || ''
  const port = process.env.REACT_APP_USER_SERVICE_PORT || ''
  const apiRootPath = process.env.REACT_APP_API_ROOT_PATH || ''
  return `${host}:${port}${apiRootPath}${url}`
}
export const buildRouterLink = (url = '') => `${process.env.REACT_APP_FRONTEND_ROOT_PATH}${url}`