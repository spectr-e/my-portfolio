const div = document.createElement('div')
div.className = "header_wrapper"
document.querySelector("header").appendChild(div)

const h1 = document.createElement("h1");
h1.textContent = "Website by Josiah Nganga";
document.querySelector(".header_wrapper").appendChild(h1);

const h2 = document.createElement("h2");
h2.textContent = "Welcome, feel at home.";
document.querySelector(".header_wrapper").appendChild(h2);

const p = document.createElement("p");
p.textContent = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto officia sint ipsum? Alias, voluptas magni. Illo reprehenderit aut eum molestias.Libero deleniti accusantium consectetur iste nesciunt facilis, soluta neque qui tenetur impedit sed eum omnis voluptates, asperiores praesentium voluptate et natus ipsa atque. Delectus, iusto.`;
document.querySelector(".header_wrapper").appendChild(p);
