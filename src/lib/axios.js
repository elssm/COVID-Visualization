import axios from 'axios'
import qs from 'qs'

const CSRF_KEY = '_csrfToken'

const instance = axios.create()

axios.defaults.timeout =  10;

export function getCsrfToken () {
    const cookie = document.cookie
    const csrfToken = parseCookie(cookie || '')[CSRF_KEY]
    return {
        [CSRF_KEY]: csrfToken
    }
}

function parseCookie (cookie) {
    const cookieObj = {}
    const cArr = cookie.split(';')
    for (const str of cArr) {
        const iArr = str.trim().split('=')
        cookieObj[iArr[0]] = iArr[1]
    }
    return cookieObj
}

instance.interceptors.request.use(config => {
    const csrfToken = getCsrfToken()
    const devParams =
        // process.env.NODE_ENV === 'development' ? { nocsrf: 1, nologin: 1 } : {}
        process.env.NODE_ENV === 'development' ? {} : {}
    config.params = Object.assign(devParams, csrfToken, config.params || {})
    return config
})

// Add a response interceptor
axios.interceptors.response.use(function (response) {
    // Do something with response data
    return response;
}, function (error) {
    // Do something with response error
    return Promise.reject(error);
});

instance.$get = function (url, data, config = {}) {
    !config.params && (config.params = {})
    data && (Object.assign(config.params, data))
    return this.get.call(this, url, config).then((response) => { // eslint-disable-line no-useless-call
        if (response) {
            return response
        }
        throw new Error('网络不畅，请稍候再试')
    }, () => {
        throw new Error('网络不畅，请稍候再试')
    })
}

instance.$postForm = function (url, data = {}, config = {}) {
    !config.params && (config.params = {})
    !config.headers && (config.hearders = {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    })

    const csrfToken = getCsrfToken()
    return this.post.call(this, url, qs.stringify(Object.assign(csrfToken, data)), config).then((response) => { // eslint-disable-line no-useless-call
        if (response) {
            return response
        }
        throw new Error('网络不畅，请稍候再试')
    }, () => {
        throw new Error('网络不畅，请稍候再试')
    })
}

instance.$postFormData = function (url, data = {}, config = {}) {
    !config.params && (config.params = {})
    !config.headers && (config.hearders = {
        'Content-Type': 'multipart/form-data; charset=UTF-8'
    })

    const csrfToken = getCsrfToken()
    const formData = new FormData()
    csrfToken[CSRF_KEY] && formData.set(CSRF_KEY, csrfToken[CSRF_KEY])
    for (const key of Object.keys(data)) {
        formData.set(key, data[key])
    }

    return this.post.call(this, url, formData, config).then((response) => {
        if (response) {
            return response
        }
        throw new Error('网络不畅，请稍候再试')
    }, () => {
        throw new Error('网络不畅，请稍候再试')
    })
}

instance.$post = function (url, data = {}, config = {}) {
    !config.params && (config.params = {})

    const csrfToken = getCsrfToken()
    return this.post.call(this, url, Object.assign(csrfToken, data), config).then((response) => {
        if (response) {
            return response
        }
        throw new Error('网络不畅，请稍候再试')
    }, () => {
        throw new Error('网络不畅，请稍候再试')
    })
}

instance.$postQuery = function (url, data = {}, config = {}) {
    !config.params && (config.params = data)

    const csrfToken = getCsrfToken()
    return this.post.call(this, url, qs.stringify(csrfToken), config).then((response) => {
        if (response) {
            return response
        }
        throw new Error('网络不畅，请稍候再试')
    }, () => {
        throw new Error('网络不畅，请稍候再试')
    })
}

export default instance
