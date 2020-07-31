console.log("This is index.js");
//667a13de485648ccb07e91c65628dd7b
newsAccorrdion = document.getElementById("newsAccordion");
 let source = 'the-hindu';
let apiKey= '667a13de485648ccb07e91c65628dd7b';


const xhr= new XMLHttpRequest();
xhr.open('GET', `http://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${apiKey}` , true);

xhr.onload= function(){
    if(this.status==200){
       let json= JSON.parse(this.responseText);
       let articles= json.articles;
       let newsHtml="";
       articles.forEach(function(element , index) {

        //    console.log(articles[news]); 
           let news=
           `<div class="card">
           <div class="card-header" id="heading${index}">
               <h2 class="mb-0">
               <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse${index}"
                   aria-expanded="false" aria-controls="collapse${index}">
                  <b>Breaking News ${index+1}:</b> ${element["title"]}
               </button>
               </h2>
           </div>

           <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}" data-parent="#newsAccordion">
               <div class="card-body"> ${element["content"]}. <a href="${element['url']}" target="_blank" >Read more here</a>  </div>
           </div>
       </div>`;
            newsHtml+= news;
        });
       newsAccorrdion.innerHTML= newsHtml;
    }else{
        console.log("Some error occured");
    }
}

xhr.send();
