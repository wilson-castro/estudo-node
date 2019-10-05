var buttonElement = document.querySelector('button');
var listElement = document.querySelector('ul');
var inputElement = document.querySelector('input');

buttonElement.onclick = function () {

    addRepos(inputElement.value);
}

function addRepos(user) {
    var itemListElement = document.createElement('li');
    console.log(pegarRepos(user));

}

function pegarRepos(name) {

    axios.get(' https://api.github.com/users/' + name + '/repos')
        .then(function (response) {
            console.log(response)
        })
        .catch(function (error) {
            console.log(error)
        });
}




