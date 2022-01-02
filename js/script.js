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

  for(let activeArticle of activeArticles){
    activeArticle.classList.remove('active');
  }

  targetArticle.classList.add('active');
};

const optArticleSelector = '.post',
  optTitleSelector = '.post-title',
  optTitleListSelector = '.titles';

function generateTitleLinks(){

  const titleList = document.querySelector(optTitleListSelector);
  console.log('titleList:', titleList);

  titleList.innerHTML = '';

  const articles = document.querySelectorAll(optArticleSelector);

  for(let article of articles){
    const articleId = article.getAttribute('id');
    const articleTitle = article.querySelector(optTitleSelector).innerHTML;
    const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';
    console.log('linkHTML:', linkHTML);
    titleList.innerHTML = titleList.innerHTML + linkHTML;
    const links = document.querySelectorAll('.titles a');
    console.log('links', links);
    for(let link of links){
      link.addEventListener('click', titleClickHandler);
    }
  }
}

generateTitleLinks();
