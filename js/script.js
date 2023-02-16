const readName = () => {
    const selectedElement = document.getElementById('guestName');
    return selectedElement.value;
}

const countCheckedBox = () => {
    const query = 'input[name="movie"]:checked';
    const selectedElements =
        document.querySelectorAll(query);

    return selectedElements.length;
}

const submitButton = document.getElementById('submitButton');
submitButton.addEventListener('click', () => {
    alert(`${readName()}님, 저와 ${countCheckedBox()}개의 취향이 같으시네요!`);
});