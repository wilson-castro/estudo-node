
var buttonElement = document.querySelector('button');
var containerElement = document.querySelector('div#app');
var listElement = document.createElement('ul');
containerElement.appendChild(listElement);

buttonElement.onclick = function () {
    var textElement = document.querySelector('input[name=user]').value;
    addListItem(textElement);
}


function addListItem(name) {

    axios.get("https://api.github.com/users/" + name + "/repos")
        .then(function (response) {
            var arraysRepositories = Object.keys(response.data).map((key) => [key, response.data[key]]) || [];

            arraysRepositories.map(arrayRepository => {
                var itemListElement = document.createElement('li');

                var nameRepository = document.createTextNode(arrayRepository[1].name);
                itemListElement.appendChild(nameRepository);

                listElement.appendChild(itemListElement);

            });

        })
        .catch(function (error) {
            console.log(error);
        })

}


