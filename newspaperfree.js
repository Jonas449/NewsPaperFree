if (location.hostname == "www.haz.de") {
    console.log("wicked"); 
    let getInnerHtml = document.querySelectorAll('script[type="application/ld+json"]')[2].innerHTML;
    let parseInnerHtml = JSON.parse(getInnerHtml);
    console.log(parseInnerHtml);  
    setTimeout(function() {
        let payWall = document.getElementById("piano-lightbox-article-haz");
        payWall.style.display = "none";
    //     let article = document.getElementsByClassName("ArticleHeadstyled__ArticleTeaserContainer-sc-1xd2qac-1")[0];
    //     let className = article.classList.item(1);
    //     article.classList.remove(className);
    }, 1500)
} else { 
    function hidePaidContent() {
        let paidContent = document.getElementById("erasmo");
        paidContent.style.display = "none";
    }
    hidePaidContent();
    
    function setText() {
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
    }
    setText();
}
