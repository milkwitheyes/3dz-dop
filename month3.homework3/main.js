document.getElementById('myForm').addEventListener('submit', function(event) { 
    event.preventDefault();

    let name = document.getElementById('name').value.trim(); 
    let password = document.getElementById('password').value.trim(); 

    if (name === '' || password === '') { 
        alert('пожалуйста заполните все поля '); 
        return; 
    } 

    fetch('https://jsonplaceholder.typicode.com/posts', { 
        method: 'POST', 
        body: JSON.stringify({ 
            name: name, 
            password: password 
        }), 
        headers: { 
            'Content-type': 'application/json; charset=UTF-8', 
        }, 
    }) 
    .then(response => response.json()) 
    .then(data => console.log(data)) 
    .catch(error => console.error('Error:', error)); 
}); 