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
    let richText = document.getElementsByClassName("pdb-richtext-field")[1];
    richText.style.display = "none";
    let div = document.createElement("div");
    div.className = "news-article";
    div.textContent = getArticleBody;
    newContent.append(div);
}
setText();
