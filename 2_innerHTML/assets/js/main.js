// ! Level 1_2

document.getElementById("info").innerHTML = "<h1>Hello World</h1>";
document.getElementById("info").innerHTML += "<h2>How are you?</h2>";

const container = document.querySelector("#container");
container.innerHTML = "<p>start of the element</p>"

document.write("end of the element");

// ! Level 1_3
let num = 1;
const gallerySection = document.getElementById("gallery");

// - Variante 1
// gallerySection.innerHTML = 
// `<figure><img src="https://picsum.photos/500/400?random=1"><p>Fig.${num}</p></figure><figure><img src="https://picsum.photos/500/400?random=2"><p>Fig.${++num}</p></figure><figure><img src="https://picsum.photos/500/400?random=3"><p>Fig.${++num}</p></figure>`;

// - Variante 2
gallerySection.innerHTML = `<figure><img src="https://picsum.photos/500/400?random=1"><p>Fig.${num}</p></figure>`;

gallerySection.innerHTML += `<figure><img src="https://picsum.photos/500/400?random=2"><p>Fig.${++num}</p></figure>`;

gallerySection.innerHTML += `<figure><img src="https://picsum.photos/500/400?random=3"><p>Fig.${++num}</p></figure>`;