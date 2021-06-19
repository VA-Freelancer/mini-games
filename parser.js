const header = document.querySelector('header');
const footer = document.querySelector('footer');
const section = document.querySelector('section');
const requestURL = './score.json';
const request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function() {
    let superHeroes = request.response;
    elementGames(superHeroes);
    // showHeroes(superHeroes);
}
function elementGames(jsonObj) {
    let titleGames = document.querySelector('.title-games');
    titleGames.textContent = jsonObj['titleGame'];
    // header.appendChild(myH1);

    // let myPara = document.createElement('p');"about-header
    let aboutGames = document.querySelector('.about-games');
    aboutGames.innerHTML = `<p class="about-games"><span>Описание игры:</span> ${jsonObj['aboutGames']}.</p>`;
    // header.appendChild(myPara);

    let authorGames = document.createElement('div');
    authorGames.classList.add('author-games');
    authorGames.innerHTML = `<p>Автор: ${jsonObj['author']} Создана: ${jsonObj['created']} г.</p>`;
    footer.appendChild(authorGames)

}
// function showHeroes(jsonObj) {
//     var heroes = jsonObj['members'];
//
//     for (var i = 0; i < heroes.length; i++) {
//         var myArticle = document.createElement('article');
//         var myH2 = document.createElement('h2');
//         var myPara1 = document.createElement('p');
//         var myPara2 = document.createElement('p');
//         var myPara3 = document.createElement('p');
//         var myList = document.createElement('ul');
//
//         myH2.textContent = heroes[i].name;
//         myPara1.textContent = 'Secret identity: ' + heroes[i].secretIdentity;
//         myPara2.textContent = 'Age: ' + heroes[i].age;
//         myPara3.textContent = 'Superpowers:';
//
//         var superPowers = heroes[i].powers;
//         for (var j = 0; j < superPowers.length; j++) {
//             var listItem = document.createElement('li');
//             listItem.textContent = superPowers[j];
//             myList.appendChild(listItem);
//         }
//
//         myArticle.appendChild(myH2);
//         myArticle.appendChild(myPara1);
//         myArticle.appendChild(myPara2);
//         myArticle.appendChild(myPara3);
//         myArticle.appendChild(myList);
//
//         section.appendChild(myArticle);
//     }
// }