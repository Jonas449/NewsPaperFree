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
        let images = parsedInnerHtml.image;

        // Create new elements
        let divArticle = document.createElement("div");
        let articlePara = document.createElement("p");
        let divDescription = document.createElement("div");
        let descriptionPara = document.createElement("p");
        let divImages = document.createElement("div");

        // Iterate over images and create html for each image
        images.forEach(element => {
            let imageDiv = document.createElement("div");
            let image = document.createElement("img");
            let imageDescription = document.createElement("p");

            imageDescription.innerText = element.description;
            imageDescription.classList.add("image-description");

            image.setAttribute("src", element.url);

            imageDiv.append(image);
            imageDiv.append(imageDescription);
            imageDiv.classList.add("image");
            divImages.append(imageDiv);
        });

        // Apply data to the elements and add style
        function applyContent() {
            descriptionPara.innerText = description;
            articlePara.innerText = articleBody;

            let articleDiv = document.getElementById("article");

            articleDiv.append(divDescription);
            divDescription.append(descriptionPara);
            articleDiv.append(divArticle);
            divArticle.append(articlePara);
            articleDiv.append(divImages);
            
            divArticle.classList.add("article");
            divDescription.classList.add("description");
        }

        setTimeout(function() {
            // Hide PayWall
            document.querySelector("[id*=piano-lightbox-article]").style.display = "none";

            applyContent();
            let articleTeaser = document.getElementsByClassName("ArticleHeadstyled__ArticleTeaserContainer-sc-1xd2qac-1")[0];
            articleTeaser.style.display = "none";
        }, 1500)   
    } catch (error) {
        
    } 
}
