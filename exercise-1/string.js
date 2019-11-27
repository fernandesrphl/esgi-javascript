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

console.log(camelCase("je test_la"));



function snake_case(str) {
    if (typeof str !== "string" || !str) return '';

    return str.toLowerCase().split(" ").join("_").split("-").join("_");
}

