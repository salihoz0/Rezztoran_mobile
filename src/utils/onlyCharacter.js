// Sadece karakterlere ve boşluklara izin verir

export function onlyCharacter(value) {
    if (value.charAt(0) === " ") {
        return value.replace(value.charAt(0), '')
    }
    return value.replace(/[^[A-Za-zÇçĞğİıÖöŞşÜü ]+$/, '');
}