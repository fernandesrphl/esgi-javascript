function ucfirst(str) {
    if (typeof str !== "string" || !str) return '';

    return str[0].toUpperCase() + str.substring(1);
}


function capitalize(str) {
    if (typeof str !== "string" || !str) return '';


    return str.toLowerCase().split(" ").map(function(item) {
        return ucfirst(item);
    }).join(" ");

}


function camelCase(str) {
    if (typeof str !== "string" || !str) return '';

    return str.toLowerCase().split(/[^a-zA-Z0-9]/).map(function(item) {
        return ucfirst(item);
    }).join("");

}


function snake_case(str) {
    if (typeof str !== "string" || !str) return '';

    return str.toLowerCase().split(/[^a-zA-Z0-9]/).map(function(item) {
        return item;
    }).join("_");
}


function leet(str) {
    if (typeof str !== "string" || !str) return '';

    return str.replace(/[aA]/g, "4").replace(/[eE]/g, "3").replace(/[iI]/g, "1").replace(/[oO]/g, "0").replace(/[uU]/g, "(_)").replace(/[yY]/g, "7")

}

function verlan(str) {
    if (typeof str !== "string" || !str) return '';


}
