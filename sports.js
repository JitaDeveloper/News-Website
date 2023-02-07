//define the variables
let sources = "bbc-news";
let apiKey = "6de42d35ceb8407591043c0aa1699455";
let newsText = document.getElementById('news');
let hotKey='sports'




// Create a get request
const xhr = new XMLHttpRequest();
xhr.open('GET', `https://newsapi.org/v2/everything?q=${hotKey}&apiKey=${apiKey}`, true);
xhr.getResponseHeader('Content-type', 'application/json');

// What to do when response is ready
xhr.onload = function () {
    if (this.status === 200) {

        let jsonText = JSON.parse(this.responseText);
        let articles = jsonText.articles;
        let newsHtml="";
        // console.log(articles);
        articles.forEach(news => {
            
         
           
            let newsBody = `
            <div class="col ">
            <div class="card bg-info border-3 border-dark mb-2 h-100" >
                            <img src=${news.urlToImage} class="card-img-top" alt="Images">
                            <div class="card-body">
                            <h5 class="card-title">${news.title}</h5>
                            <p class="card-text" >${news.content}</p>
                            <a href=${news.url} target="_blank" class="btn btn-dark mt-auto">See full News</a>
                            </div>
                        </div>
                        </div>`;
            newsHtml+=newsBody;

        });
        document.getElementById('news').innerHTML=newsHtml;
    }
    else {
        console.log("Some error occured");
    }
}

xhr.send()

