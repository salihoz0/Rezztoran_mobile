const REZZTORAN_AUTH_SERVICE = "http://192.168.1.40:8080/api/auth"

export const END_POINTS = {
    AUTH_CONTROLLER: {
        LOGIN: `${REZZTORAN_AUTH_SERVICE}/login`,
        REGISTER: `${REZZTORAN_AUTH_SERVICE}/register`,
        ME:`${REZZTORAN_AUTH_SERVICE}/me`
    }
}