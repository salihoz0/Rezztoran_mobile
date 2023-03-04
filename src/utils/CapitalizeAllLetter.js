export function CapitalizeAllLetter(string) {
    var parcalar = string.split(" ");
    for (var i = 0; i < parcalar.length; i++) {
        var j = parcalar[i].charAt(0).toUpperCase();
        parcalar[i] = j + parcalar[i].slice(1).toLocaleLowerCase("tr-TR");
    }
    return parcalar.join(" ");
}