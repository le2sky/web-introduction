const clickListener = () => {
    const nameInputElement = document.getElementById("name")
    const movieCheckBoxElements = document.getElementsByName("movie");

    let count = 0;
    for (const element of movieCheckBoxElements) {
        if (element.checked) {
            count++;
        }
    }

    alert(`${nameInputElement.value}님, 저와 ${count}개의 취향이 같으시네요!`)
};

document.getElementById("submit").addEventListener("click", clickListener)
