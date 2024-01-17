"use strict";

// IIFE - Immediately Invoked Functional Expression
// Results in the function being called immediately

(function (){
    function displayHomePage()
    {
        console.log("Called DisplayHomePage");

        let AboutUsButton= document.getElementById("AboutUsBtn");

        AboutUsButton.addEventListener("click", function () {
            location.href = "about.html"

            let MainContent = document.getElementsByTagName("main")[0];
            let MainParagraph = document.createElement("p");

            MainParagraph.setAttribute("id", "MainParagraph");
            MainParagraph.setAttribute("class", "mt-3");
            MainParagraph.textContent = "This is my first paragraph";
            MainContent.appendChild(MainParagraph);

            let FirstString = "This is";

            // `` is a string literal to concatenate strings.

            let SecondString = `${FirstString} the main Paragraph.`;
            MainParagraph.textContent = SecondString;
            MainContent.appendChild(MainParagraph);

            let DocumentBody = document.body;

            let Article = document.createElement("article");
            let ArticleParagraph
                = `<p id="ArticleParagraph" class = "mt-3"> This is my article paragraph</p>`;

            Article.setAttribute("class", "container");
            Article.innerHTML = ArticleParagraph;

            DocumentBody.appendChild(Article);
        })
    }

    function displayProductPage()
    {
        console.log("Called displayProductPage");
    }

    function displayServicePage()
    {
        console.log("Called displayServicePage");
    }

    function displayContactPage()
    {
        console.log("Called displayContactPage");
    }

    function displayAboutUsPage()
    {
        console.log("Called displayAboutUsPage");
    }




    function Start() {
        console.log("App Started");

        switch (document.title){
            case "Home":
                displayHomePage();
                break;

            case "Our Products":
                displayProductPage();
                break;

            case "About Us":
                displayAboutUsPage();
                break;

            case "Our Services":
                displayServicePage();
                break;

            case "Contact Us":
                displayContactPage();
                break;
        }
    }
    window.addEventListener("load", Start);
})();