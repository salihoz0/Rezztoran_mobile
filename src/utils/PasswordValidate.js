export const checkPassword = (str) => {
    var re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    return re.test(str);
};