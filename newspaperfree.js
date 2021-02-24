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
