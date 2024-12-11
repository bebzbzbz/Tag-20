function heyhey() {
    let yourName = window.prompt("What's your name?");

    const h1Name = document.querySelector("h1");
    h1Name.innerText = `hey hey ${yourName}, i love u`
}
heyhey();