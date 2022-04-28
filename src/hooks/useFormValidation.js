export function validateTextInput(evt) {
    let { name, value } = evt.target;

    if (value == "") {
        return `${name} es requerido`;
    }
    return "";
}
