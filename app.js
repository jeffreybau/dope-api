const app = document.getElementById('root');
//The first thing in our website is the logo, which is an img element. 
//We’ll create the image element with createElement().
const logo = document.createElement('img');
logo.src = 'logo.png';
//We’ll create another element, a div this time, and set the class attribute to container.
const container = document.createElement('div');
container.setAttribute('class', 'container');
//We’ll use the appendChild() method to append the logo image and container div to the app root.
app.appendChild(logo);
app.appendChild(container);

var request = new XMLHttpRequest();

request.open('GET', 'https://ghibliapi.herokuapp.com/films', true);
request.onload = function(){
    // Being accessing json date here

    var data = JSON.parse(this.response);

    if (request.status >= 200 && request.status < 400) {
        data.forEach(movie => {

            const card = document.createElement('div');
            card.setAttribute('class', 'card');

            const h1 = document.createElement('h1');
            h1.textContent = movie.title;

            const p = document.createElement('p');
            movie.description = movie.description.substring(0, 300);
            p.textContent = `${movie.description}...`

            container.appendChild(card);

            card.appendChild(h1);
            card.appendChild(p);

            console.log(movie.title);
            console.log(movie.description);
         });
    } else {
        const errorMessage = document.createElement('marquee');
        errorMessage.textContent = `some one fucked up`;
        app.appendChild(errorMessage);
    }
}

request.send();