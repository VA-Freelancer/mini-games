const header = document.querySelector('header')
const footer = document.querySelector('footer')
const section = document.querySelector('section')
let titleGames = document.querySelector('.title-games')
let aboutTimes = document.querySelector('.title-times')
let aboutGames = document.querySelector('.about-games')
const requestURL = './score.json'
const request = new XMLHttpRequest()
request.open('GET', requestURL)
request.responseType = 'json'
request.send()
request.onload = function() {
    let superHeroes = request.response
    elementGames(superHeroes)
    // showHeroes(superHeroes);
}
function elementGames(jsonObj) {
    let authorGames = document.createElement('div')
    let version = document.createElement('span')
    version.classList.add('version')
    authorGames.classList.add('author-games')
    titleGames.innerHTML = `${jsonObj['titleGame']}`
    aboutTimes.innerHTML = `${jsonObj['titleTime']}`
    version.innerHTML = `${jsonObj['version']}`
    aboutGames.innerHTML = `<p class="about-games"><span>Описание игры:</span> ${jsonObj['aboutGames']}</p>`
    authorGames.innerHTML = `<span>Автор: ${jsonObj['author']}</span> <span>Создана: ${jsonObj['created']} г.</span>`
    footer.appendChild(authorGames)
    footer.appendChild(version)
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