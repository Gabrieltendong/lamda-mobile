import { http } from './config'

/**
 * 
 * @param {object} data 
 * @returns 
 */
export const signUp = (data) => {
    return http.post('/signup/', data)
}

/**
 * 
 * @param {string} code 
 * @returns 
 */
export const activeAccount = (code) => {
    return http.get(`/activate/${code}`)
}

/**
 * 
 * @param {object} data 
 * @returns 
 */
export const auth = (data) => {
    return http.post(`/signin/`, data)
}

/**
 * 
 * @param {string} token 
 * @returns 
 */
export const getAccessPoint = (token) => {
    return http.get(`/access/`, {
        headers: {
            "Authorization": "Bearer " + token
        }
    })
}

/**
 * 
 * @param {string} token 
 * @returns 
 */
export const getFeed = (token) => {
    return http.get(`/publications/`, {
        headers: {
            "Authorization": "Bearer " + token
        }
    })
}

/**
 * 
 * @param {int} idFeed 
 * @param {string} token 
 * @returns 
 */
export const getDetailFeed = (idFeed, token) => {
    return http.get(`/publications/${idFeed}`, {
        headers: {
            "Authorization": "Bearer " + token
        }
    })
}

/**
 * 
 * @param {int} idFeed 
 * @param {commentaire: string} data 
 * @param {string} token 
 * @returns 
 */
export const commentFeed = (idFeed, data, token) => {
    return http.post(`/publications/${idFeed}/commentaire/`, data, {
        headers: {
            "Authorization": "Bearer " + token
        }
    })
}

/**
 * 
 * @param {int} idFeed 
 * @param {reseau: int} data 
 * @param {string} token 
 * @returns 
 */
export const shareFeed = (idFeed, data, token) => {
    return http.post(`/publications/${idFeed}/partage/`, data, {
        headers: {
            "Authorization": "Bearer " + token
        }
    })
}

/**
 * 
 * @param {int} idFeed 
 * @param {string} token 
 * @returns 
 */
export const seeFeed = (idFeed, token) => {
    return http.get(`/publications/${idFeed}/vue/`, {
        headers: {
            "Authorization": "Bearer " + token
        }
    }) 
}

/**
 * 
 * @param {int} idFeed 
 * @param {string} token 
 * @returns 
 */
export const followEnterprise = (idClient, token) => {
    return http.get(`/clients/${idClient}/suivre/`, {
        headers: {
            "Authorization": "Bearer " + token
        }
    })
}

/**
 * 
 * @param {int} id_abonne 
 * @param {string} token 
 * @returns 
 */
export const getProfil = (id_abonne, token) => {
    return http.get(`/abonnes/${id_abonne}/`, {
        headers: {
            "Authorization": "Bearer " + token
        }
    })
}

export const getCommentFeed = (idFeed, token) => {
    return http.get(`/publications/${idFeed}/commentaires/`, {
        headers: {
            "Authorization": "Bearer " + token
        }
    })
}

export const getAbonne = (token) => {
    return http.get(`/abonnes/`, {
        headers: {
            "Authorization": "Bearer " + token
        }
    })
}

export const onLike = (idFeed, token) => {
    return http.get(`/publications/${idFeed}/like`, {
        headers: {
            "Authorization": "Bearer " + token
        }
    })
}

export const getProfilEnterprise = (idClient, token) => {
    return http.get(`/clients/${idClient}`, {
        headers: {
            "Authorization": "Bearer " + token
        }
    })
}

export const getStore = (token) => {
    return http.get(`/stores/`, {
        headers: {
            "Authorization": "Bearer " + token
        }
    })
}

export const getNotifications = (userId,token) => {
    return http.get(`/notifications?user_id=${userId}`, {
        headers: {
            "Authorization": "Bearer " + token
        }
    })
}

export const getPiecesOr = (idClient,token) => {
    return http.get(`pieces/${idClient}`, {
        headers: {
            "Authorization": "Bearer " + token
        }
    })
}

export const updateToken = (idClient, data,token) => {
    return http.put(`/update/token/${idClient}`, data, {
        headers: {
            "Authorization": "Bearer " + token
        },
    })
}

export const updateProfil = (idAbonne, data,token) => {
    return http.put(`/abonnes/${idAbonne}/`, data, {
        headers: {
            "Authorization": "Bearer " + token
        },
    })
}






