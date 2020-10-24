
// const langEl = document.querySelector('.languageWrapper');
// const link = document.querySelectorAll('a');
// const titleEl = document.querySelector('.title');
// const descrEl = document.querySelector('.description');


// let data = {
//     "english":
//     {
//         "title": "Hello World",
//         "description":
//             "Hello, welcome to my portfolio"
//     },
//     "spanish":
//     {
//         "title": "Hola mundo",
//         "description":
//             "Hola, bienvenidos a mi portfolio"
//     }
// }


// link.forEach(e => {
//     e.addEventListener('click', () => {
//         langEl.querySelector('.active').classList.remove('active');
//         e.classList.add('active');

//         const attr = e.getAttribute('language');

//         titleEl.textContent = data[attr].title;
//         descrEl.textContent = data[attr].description;


//         window.localStorage.setItem('title', data[attr].title)
//         window.localStorage.setItem('description', data[attr].description)

//     });

// });


// document.querySelector(".title").innerHTML = localStorage.getItem('title');

// document.querySelector(".description").innerHTML = localStorage.getItem('description');