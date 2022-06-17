if (location.hostname == "www.cz.de") {
    // Hide PayWall
    let paidContent = document.getElementById("erasmo");
    paidContent.style.display = "none";

    // Get text
    let getInnerHtml = document.querySelector(".pdb-article script").innerHTML;
    let parseInnerHtml = JSON.parse(getInnerHtml);
    let getArticleBody = parseInnerHtml.articleBody;
    // Remove article preview text
    let richText = document.getElementsByClassName("pdb-richtext-field")[1];
    richText.style.display = "none";
    // Change height for mobile website
    document.getElementsByClassName("pdb-article-body-paidcontentintro")[0].style.height = "auto";
    // Create new div and append it
    let div = document.createElement("div");
    div.className = "news-article";
    div.textContent = getArticleBody;
    let newContent = document.getElementsByClassName("pdb-article-body-paidcontentintro")[0];
    newContent.append(div);
} else {
    try {
        // Get article data 
        let innerHtml = document.querySelectorAll('script[type="application/ld+json"]')[2].innerHTML;
        let parsedInnerHtml = JSON.parse(innerHtml);
        let articleBody = parsedInnerHtml.articleBody;
        let description = parsedInnerHtml.description;

        // Create new elements
        let divArticle = document.createElement("div");
        let articlePara = document.createElement("p");
        let divDescription = document.createElement("div");
        let descriptionPara = document.createElement("p");

        // Apply data to the elements and add style
        function applyContent() {
            descriptionPara.innerText = description;
            articlePara.innerText = articleBody;

            let articleDiv = document.getElementById("article");

            articleDiv.append(divDescription);
            divDescription.append(descriptionPara);
            articleDiv.append(divArticle);
            divArticle.append(articlePara);
            
            divArticle.classList.add("article");
            divDescription.classList.add("description");
        }

        setTimeout(function() {
            // Hide PayWall depending on host
            if(location.hostname == "www.haz.de") {
                document.getElementById("piano-lightbox-article-haz").style.display = "none";
            }
            if(location.hostname == "www.goettinger-tageblatt.de") {
                document.getElementById("piano-lightbox-article-gtet").style.display = "none";
            }
            if(location.hostname == "www.waz-online.de") {
                document.getElementById("piano-lightbox-article-azwaz").style.display = "none";
            }
            if(location.hostname == "www.neuepresse.de") {
                document.getElementById("piano-lightbox-article-np").style.display = "none";
            }
            if(location.hostname == "www.paz-online.de") {
                document.getElementById("piano-lightbox-article-paz").style.display = "none";
            }
            if(location.hostname == "www.kn-online.de") {
                document.getElementById("piano-lightbox-article-kn").style.display = "none";
            }
            if(location.hostname == "www.ln-online.de") {
                document.getElementById("piano-lightbox-article-ln").style.display = "none";
            }
            if(location.hostname == "www.ostsee-zeitung.de") {
                document.getElementById("piano-lightbox-article-oz").style.display = "none";
            }
            if(location.hostname == "www.maz-online.de") {
                document.getElementById("piano-lightbox-article-maz").style.display = "none";
            }
            if(location.hostname == "www.sn-online.de") {
                document.getElementById("piano-lightbox-article-sn").style.display = "none";
            }
            if(location.hostname == "www.lvz.de") {
                document.getElementById("piano-lightbox-article-lvz").style.display = "none";
            }
            if(location.hostname == "www.dnn.de") {
                document.getElementById("piano-lightbox-article-dnn").style.display = "none";
            }

            applyContent();
            let articleTeaser = document.getElementsByClassName("ArticleHeadstyled__ArticleTeaserContainer-sc-1xd2qac-1")[0];
            articleTeaser.style.display = "none";
        }, 1500)   
    } catch (error) {
        
    } 
}
