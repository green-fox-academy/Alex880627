let httpRequest = new XMLHttpRequest();
httpRequest.open(
  "GET",
  "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=apollo11&api-key=gX8Wu3NmIWZA8wpfGfTdK4PXJgkBWC9K",
  true
);
httpRequest.onload = () => {
  let content = JSON.parse(httpRequest.responseText);
  let body = document.getElementsByTagName('body')[0];

  for (let i = 0; i < content.response.docs.length; i++) {

    let articleHeadline = content.response.docs[i].headline.main;
    let articleSnippet = content.response.docs[i].snippet;
    let articlePubDate = content.response.docs[i].pub_date;
    let articleLink = content.response.docs[i].web_url;
    let newArticle = document.createElement('article');
    let newH1 = document.createElement('h1');
    let newP = document.createElement('p');
    let newDate = document.createElement('p');
    let newLink =  document.createElement('a');

    newH1.textContent = articleHeadline;
    newP.textContent = articleSnippet;
    newDate.textContent = articlePubDate;
    newLink.href = articleLink;
    newLink.innerText = 'click here';
    
    newArticle.appendChild(newH1);
    newArticle.appendChild(newP);
    newArticle.appendChild(newDate);   
    newArticle.appendChild(newLink);  
    body.appendChild(newArticle);
    
  }

  
  
};
httpRequest.send();
