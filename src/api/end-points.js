require('dotenv').config()
const REZZTORAN_AUTH_SERVICE = `http://${process.env.IP_KEY}:8082/api/auth`
const REZZTORAN_USER_SERVICE = `http://${process.env.IP_KEY}:8082/api/user`
const REZZTORAN_RESTAURANT_SERVICE = `http://${process.env.IP_KEY}:8082/api/restaurant`
const REZZTORAN_MENU_SERVICE = `http://${process.env.IP_KEY}:8082/api/menu`
const REZZTORAN_CATEGORY_SERVICE = `http://${process.env.IP_KEY}:8082/api/category`

export const END_POINTS = {
    USER_CONTROLLER: {
        POST_RESET_PASSWORD: `${REZZTORAN_USER_SERVICE}/reset-password`,
        DELETE_USER: `${REZZTORAN_USER_SERVICE}/:id`
    },
    AUTH_CONTROLLER: {
        LOGIN: `${REZZTORAN_AUTH_SERVICE}/login`,
        REGISTER: `${REZZTORAN_AUTH_SERVICE}/register`,
        ME: `${REZZTORAN_AUTH_SERVICE}/me`
    },
    RESTAURANT_CONTROLLER: {
        GET_RESTAURANT: `${REZZTORAN_RESTAURANT_SERVICE}`,
        GET_RESTAURANT_BY_ID: `${REZZTORAN_RESTAURANT_SERVICE}/:id`
    },
    MENU_CONTROLLER: {
        GET_MENU_BY_ID: `${REZZTORAN_MENU_SERVICE}/:id`
    },
    CATEGORY_CONTROLLER: {
        GET_CATEGORY: `${REZZTORAN_CATEGORY_SERVICE}`,
        GET_CATEGORY_BY_ID: `${REZZTORAN_CATEGORY_SERVICE}`
    }
}