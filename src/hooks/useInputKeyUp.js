export function inputKeyUp(evt) {
    let input = evt.target;
    let value = input.value;

    let parent = input.parentNode;

    if (value) {
        parent.classList.add("hasValue");
    } else {
        parent.classList.remove("hasValue");
    }
}
