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

    return capitalize(str).split(" ").join("").split("_").join("");
    }



function snake_case(str) {
    if (typeof str !== "string" || !str) return '';

    return str.toLowerCase().split(" ").join("_").split("-").join("_");
}

