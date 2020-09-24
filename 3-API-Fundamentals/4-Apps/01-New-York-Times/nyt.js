/*
!To Do 
Something to study on your own might be: ?, &, and &q= in a URL string. What are those?
*/

const baseURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json'; //1
const key = 'AFLBvTVJcBE41NrHeEAhK9inFnGd4AWA'; //2
let url; // 3

// SEARCH FORM

const searchTerm = document.querySelector('.search');
const startDate = document.querySelector('.start-date');
const endDate = document.querySelector('.end-date');
const searchForm = document.querySelector('form');
const submitBtn = document.querySelector('.submit');


//RESULTS NAVIGATION

const nextBtn = document.querySelector('.next');
const previousBtn = document.querySelector('.prev');
const nav = document.querySelector('nav');

//RESULTS SECTION

const section = document.querySelector('section');

//LOADING PAGE STYLING

nav.style.display = 'none';

let pageNumber = 0;
console.log('PageNumber: ', pageNumber);
// let displayNav = false;

//EVENT LISTENERS

searchForm.addEventListener('submit', fetchResults);
nextBtn.addEventListener('click', nextPage);
previousBtn.addEventListener('click', previousPage);

//fetchResults();

function fetchResults(e) {
    e.preventDefault();

    url = baseURL + '?api-key=' + key + '&page=' + pageNumber + '&q=' + searchTerm.value;
    console.log('URL: ', url);

    if(startDate.value !== '') {
        url += '&begin_date=' + startDate.value;
    };

    if(endDate.value !== ''){
        url += '&end_date=' + endDate.value;
    };

    fetch(url)
        .then(function(result){
            return result.json();
        }).then(function(json) {
            displayResults(json); //*DISPLAY RESULTS INVOCATION
        })
}

//displayResults()

function displayResults(json) {
    while (section.firstChild) {
        section.removeChild(section.firstChild);
    }
    let articles = json.response.docs;

    console.log(articles);

    nav.style.display = 'block'

    if(pageNumber === 0){
        previousBtn.style.display = 'none';
    } else {
        previousBtn.style.display = 'block'
    }

    if (articles.length >= 1 && articles.length < 10){
        nextBtn.style.display = 'none'
    } else {
        nextBtn.style.display = 'block'
    }
    
    if(articles.length === 0) {
        console.log('No Results')
    } else {
        for (let i = 0; i < articles.length; i++) {
            let article = document.createElement('article');
            let heading = document.createElement('h2');
            let link = document.createElement('a');
            let img = document.createElement('img');
            let paraOne = document.createElement('p');
            let paraTwo = document.createElement('p');
            let clearfix = document.createElement('div');

            let current = articles[i];
            // console.log("Current", current);

            link.href = current.web_url;
            link.textContent = current.headline.main;
            paraTwo.textContent = current.snippet;

            

            paraOne.textContent = 'Keywords: ';

            for(let j = 0; j < current.keywords.length; j++) {
                let span = document.createElement('span'); // <p> looks much nicer than <span>
                span.textContent += current.keywords[j].value + ' ';
                paraOne.appendChild(span);
            }

            if(current.multimedia.length > 0) {
                img.src = 'http://www.nytimes.com/' + current.multimedia[0].url;
                img.alt = current.headline.main;
            }

            clearfix.setAttribute('class', 'clearfix');

            article.appendChild(heading);
            heading.appendChild(link);
            article.appendChild(paraTwo);
            article.appendChild(img);
            article.appendChild(paraOne);
            article.appendChild(clearfix);
            section.appendChild(article);
        }
    }
}

function nextPage(e){
    pageNumber++;
    fetchResults(e);
    console.log('Page Number: ', pageNumber);
}

function previousPage(e){
    if(pageNumber > 0) {
        pageNumber--;
    } else {
        return;
    }
    fetchResults(e);
    console.log('Page: ', pageNumber)
}