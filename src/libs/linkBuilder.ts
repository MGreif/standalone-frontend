export const buildApiLink = (url = '') => `${process.env.REACT_APP_USER_SERVICE_HOST}:${process.env.REACT_APP_USER_SERVICE_PORT}/api${process.env.REACT_APP_USER_SERVICE_PATH}${url}`
export const buildRouterLink = (url = '') => `${process.env.REACT_APP_USER_SERVICE_PATH}${url}`