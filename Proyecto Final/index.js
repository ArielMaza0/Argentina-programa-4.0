const nombreHtml = document.getElementById('nombre')
const thumbnail = document.getElementById('thumbnail')
const cell = document.getElementById('cell')
const age = document.getElementById('age')
const city = document.getElementById('city')
const country = document.getElementById('country')
const email = document.getElementById('email')



fetch('https://randomuser.me/api/')
 .then(response => response.json())
 .then(data=> {data.results  

        var min = 1;
        var max = 99;
        var numAleatorio = Math.floor(Math.random() * (max - min + 1)) + min;
        console.log(numAleatorio);
    

    nombreHtml.innerHTML= data.results[0].name.first + ' ' + data.results[0].name.last ;
    cell.innerHTML = data.results[0].cell
    age.innerHTML = data.results[0].dob.age
    city.innerHTML = data.results[0].location.city
    country.innerHTML= data.results[0].location.country
    email.innerHTML= data.results[0].email
    thumbnail.src= `https://randomuser.me/api/portraits/women/${numAleatorio}.jpg`
})





