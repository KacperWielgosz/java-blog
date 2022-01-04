'use-strict';
/*
document.getElementById('test-button').addEventListener('click', function(){
  const links = document.querySelectorAll('.titles a');
  console.log('links:', links);
});
*/
const titleClickHandler = function(event){
  const clickedElement = this;
  event.preventDefault();
  console.log('Link was clicked!');
  const activeLinks = document.querySelectorAll('.titles a.active');
  const activeArticles = document.querySelectorAll('.posts article.active');
  const articleSelector = clickedElement.getAttribute('href');
  console.log('articleSelector:', articleSelector);
  const targetArticle = document.querySelector(articleSelector);
  console.log('targetArticle:', targetArticle);

  for(let activeLink of activeLinks){
    activeLink.classList.remove('active');
  }

  clickedElement.classList.add('active');
  console.log('clickedElement:', clickedElement);

  for (let activeArticle of activeArticles) {
    activeArticle.classList.remove('active');
  }

  targetArticle.classList.add('active');
};

const optArticleSelector = '.post',
  optTitleSelector = '.post-title',
  optTitleListSelector = '.titles',
  optArticleTagsSelector = '.post-tags .list',
  optArticleAuthorSelector = '.post-author'

function generateTitleLinks(customSelector = ''){

  const titleList = document.querySelector(optTitleListSelector);
  console.log('titleList:', titleList);

  titleList.innerHTML = '';

  const articles = document.querySelectorAll(optArticleSelector + customSelector);

  for(let article of articles){
    const articleId = article.getAttribute('id');
    const articleTitle = article.querySelector(optTitleSelector).innerHTML;
    const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';
    console.log('linkHTML:', linkHTML);
    titleList.innerHTML = titleList.innerHTML + linkHTML;
    const links = document.querySelectorAll('.titles a');
    console.log('links', links);
    for (let link of links) {
      link.addEventListener('click', titleClickHandler);
    }
  }
}

generateTitleLinks();

function generateTags(){
  /* find all articles */
  const articles = document.querySelectorAll(optArticleSelector);

  /* START LOOP: for every article: */
  for (let article of articles) {

    /* find tags wrapper */
    const tagWrapper = article.querySelector(optArticleTagsSelector);

    /* make html variable with empty string */
    tagWrapper.innerHTML = '';

    /* get tags from data-tags attribute */
    const articleTags = article.getAttribute('data-tags');
    console.log('articleTags:', articleTags)

    /* split tags into array */
    const articleTagsArray = articleTags.split(' ');
    console.log('articleTagsArray:', articleTagsArray)
    /* START LOOP: for each tag */
    for (let tag of articleTagsArray) {
      /* generate HTML of the link */
      const tagHTML = '<li><a href="#tag-' + articleTags + '"><span>' + tag +'</span></a></li>';
      /* add generated code to html variable */
    tagWrapper.innerHTML = tagWrapper.innerHTML + tagHTML;
    /* END LOOP: for each tag */
    }
    /* insert HTML of all the links into the tags wrapper */
  }
  /* END LOOP: for every article: */
}

generateTags();

function tagClickHandler(event){
  /* prevent default action for this event */
  event.preventDefault();

  /* make new constant named "clickedElement" and give it the value of "this" */
  const clickedElement = this;

  /* make a new constant "href" and read the attribute "href" of the clicked element */
  const href = clickedElement.getAttribute('href');

  /* make a new constant "tag" and extract tag from the "href" constant */
  const tag = href.replace('#tag-', '');

  /* find all tag links with class active */
  const activeTags = document.querySelectorAll('a.active[href^="#tag-"]');

  /* START LOOP: for each active tag link */
  for (let tag of activeTags) {
    /* remove class active */
    activeTags.classList.remove('active');
  /* END LOOP: for each active tag link */
  }
  /* find all tag links with "href" attribute equal to the "href" constant */
  const foundTags = document.querySelectorAll(href);
  /* START LOOP: for each found tag link */
  for (let tag of foundTags) {
    /* add class active */
    foundTags.classList.add('active');
  /* END LOOP: for each found tag link */
  }

  /* execute function "generateTitleLinks" with article selector as argument */
  generateTitleLinks('[data-tags~="' + tag + '"]');
}


function addClickListenersToTags(){
  /* find all links to tags */
  const tagLinks = document.querySelector(optArticleTagsSelector).querySelectorAll('a');
  /* START LOOP: for each link */
  for (let tag of tagLinks) {
    /* add tagClickHandler as event listener for that link */
    tag.addEventListener(tagLinks, tagClickHandler);
  /* END LOOP: for each link */
  }
}

addClickListenersToTags();

//autorzy autorzy autorzy autorzy autorzy autorzy autorzy autorzy

function generateAuthors(){
  const articles = document.querySelectorAll(optArticleSelector);

  /* START LOOP: for every article: */
  for (let article of articles) {

    /* find tags wrapper */
    const authorWrapper = article.querySelector(optArticleAuthorSelector);

    /* make html variable with empty string */
    authorWrapper.innerHTML = '';

    /* get tags from data-tags attribute */
    const articleAuthor = article.getAttribute('data-author');
    console.log('articleAuthor:', articleAuthor);

    const authorHTML = '<a href="#author-' + articleAuthor + '"><span>' + articleAuthor +'</span></a>';

    authorWrapper.innerHTML = authorWrapper.innerHTML + authorHTML;
  }
};

generateAuthors();


function authorClickHandler(event){
  /* prevent default action for this event */
  event.preventDefault();

  /* make new constant named "clickedElement" and give it the value of "this" */
  const clickedElement = this;

  /* make a new constant "href" and read the attribute "href" of the clicked element */
  const href = clickedElement.getAttribute('href');

  /* make a new constant "tag" and extract tag from the "href" constant */
  const tag = href.replace('#author-', '');

  /* find all tag links with class active */
  const activeAuthors = document.querySelectorAll('a.active[href^="#author-"]');

  /* START LOOP: for each active tag link */
  for (let author of activeAuthors) {
    /* remove class active */
    activeAuthors.classList.remove('active');
  /* END LOOP: for each active tag link */
  }
  /* find all tag links with "href" attribute equal to the "href" constant */
  const foundAuthors = document.querySelectorAll(href);
  /* START LOOP: for each found tag link */
  for (let author of foundAuthors) {
    /* add class active */
    foundAuthors.classList.add('active');
  /* END LOOP: for each found tag link */
  }

  /* execute function "generateTitleLinks" with article selector as argument */
  generateTitleLinks('[data-author="' + author + '"]');
};


function addClickListenersToAuthors(){
  /* find all links to authors */
  const authorLinks = document.querySelector(optArticleAuthorSelector).querySelectorAll('a');
  /* START LOOP: for each link */
  for (let author of authorLinks) {
    /* add tagClickHandler as event listener for that link */
    author.addEventListener(authorLinks, authorClickHandler);
  /* END LOOP: for each link */
  }
}

addClickListenersToAuthors();
