import * as superagent from 'superagent'
import { buildApiLink } from '../libs/linkBuilder'

const userServicePath = process.env.REACT_APP_USER_SERVICE_PATH
const authServicePath = process.env.REACT_APP_AUTH_SERVICE_PATH
export const createUser = (data: {[key: string]: string}) => {
    const url = buildApiLink(userServicePath+'/user')
    return superagent.post(url).send(data)
}

export const login = (data: { username: string, password: string }) => {
  const url = buildApiLink(authServicePath + '/login')
  console.log(url)
  return superagent.post(url).send(data).withCredentials()
}