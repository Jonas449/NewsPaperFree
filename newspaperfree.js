function hidePaidContent() {
    let paidContent = document.getElementById("erasmo");
    paidContent.style.display = "none";
}
hidePaidContent();

function setText() {
    let getInnerHtml = document.querySelector(".pdb-article script").innerHTML;
    let parseInnerHtml = JSON.parse(getInnerHtml);
    let getArticleBody = parseInnerHtml.articleBody;
    let newContent = document.getElementsByClassName("pdb-article-body-paidcontentintro")[0];
    newContent.innerHTML = getArticleBody;
}
setText();
