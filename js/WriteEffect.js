function typeText(elemento) {

    const textArray = elemento.innerHTML.split("");
    elemento.innerHTML = "";


    textArray.forEach((letra, i) => {
        setTimeout(() => (elemento.innerHTML += letra), 120 * i);
    });

}

typeText(document.querySelector('.write'))
