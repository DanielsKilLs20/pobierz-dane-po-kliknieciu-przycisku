console.log('AJAX - Warsztat - Pobierz dane po kliknieciu przycisku');

let btnGetData = document.getElementById('get-data');

const getData = () =>

fetch('https://akademia108.pl/api/ajax/get-post.php')
    .then(res => res.json())
    .then(data => {

        let pId = document.createElement('p');
        let pUserId = document.createElement('p');
        let pTitle = document.createElement('p');
        let pBody = document.createElement('p');
        let hr = document.createElement('hr');

        pId.innerText = `Post ID: ${data.id}`;
        pUserId.innerText = `User ID: ${data.UserId}`;
        pTitle.innerText = `Title ID: ${data.Title}`;
        pBody.innerText = `Body ID: ${data.Body}`;

        document.body.appendChild(pId);
        document.body.appendChild(pUserId);
        document.body.appendChild(pTitle);
        document.body.appendChild(pBody);
        document.body.appendChild(hr);

        // console.log(data);
    })
    .catch(error => {
        console.error(error);
    })

// console.log('getData()');


btnGetData.addEventListener('click', getData);