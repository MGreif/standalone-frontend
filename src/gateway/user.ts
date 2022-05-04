import * as superagent from 'superagent'
import { buildApiLink } from '../libs/linkBuilder'

export const createUser = (data: {[key: string]: string}) => {
    const url = buildApiLink('/user')
    return superagent.post(url).send(data)
}