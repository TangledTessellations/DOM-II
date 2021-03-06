const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png",
    "img2-src" : "img/logoLight.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])


// Alex McEvoy
// 05/29/18

// Using variable assignment

// Nav
let navElements = document.querySelectorAll(".container header nav a");
navElements.forEach((item, index) =>
                  item.innerHTML = siteContent["nav"][`nav-item-${index+1}`] );

let ctaH1 = document.querySelector(".cta .cta-text h1");
ctaH1.innerHTML = siteContent["cta"]["h1"];

// Now without using variable assignment

// cta
document.querySelector(".cta .cta-text button").innerHTML =
                        siteContent["cta"]["button"];
document.querySelector("#cta-img").setAttribute("src",
                                                siteContent["cta"]["img-src"]);

// Main content

// Create NodeList of all h4 and p nodes in main-content
let mainH4andP = document.querySelectorAll(
        ".main-content .text-content h4, .main-content .text-content p"
      );
// Create list of all content for headers and paragraph from siteContent
let contentH4andP = Object.entries(siteContent["main-content"])
          .filter(item => item[0].includes("h4") || item[0].includes("content"))
          .map(item => item[1]);
// Loop through our NodeList and assign values from contentH4andP
mainH4andP.forEach((item, index) => item.innerHTML = contentH4andP[index] );

// Assign main-content image
document.querySelector("#middle-img").setAttribute("src",
                              siteContent["main-content"][["middle-img-src"]]);

// Contact
// Same as above, create NodeList of nodes, then array of content, and assign
// Each content item to the appropriate node
let contactNodes = document.querySelectorAll(".contact h4, .contact p");
let contactContent = Object.values(siteContent["contact"]);
contactNodes.forEach((item,index) => item.innerHTML = contactContent[index]);

// footer

document.querySelector("footer p").innerHTML =
                                  siteContent["footer"]["copyright"];

// Add items to Nav
let prepNav = document.createElement("a");
prepNav.setAttribute("href", "#");
prepNav.innerHTML = "Prepended Nav!";
document.querySelector(".container header nav").prepend(prepNav);

let appendNav = document.createElement("a");
appendNav.setAttribute("href", "#");
appendNav.innerHTML = "Appended Nav!";
document.querySelector(".container header nav").append(appendNav);

//*****************************************************************************
// DOM II
// Alex McEvoy
// 05/29/18

// Create a paragraph telling our users about our new features
let ctaSelectText = document.createElement("p");
ctaSelectText.innerHTML = "Scroll To See Some Magic";
ctaSelectText.style.fontSize = "1rem";
document.querySelector(".cta h1").append(ctaSelectText);

// Create variable for our cta Pic
let ctaPic =  document.querySelector("#cta-img");

// Show different picture when scrolling
/******************************************************/

document.addEventListener("scroll", () => {
  ctaPic.setAttribute("src", "img/Gandalf_the_Grey.jpg");
  ctaPic.style.borderRadius = "50%";
  ctaPic.style.border = "2px solid black";
  ctaSelectText.innerHTML = "Hit any key to see some more magic";
});

// R key does some stuff
/******************************************************/

document.addEventListener("keydown", () => {
  ctaPic.setAttribute("src", "img/happy_gandalf.jpg");
  ctaSelectText.innerHTML = "Scroll over the Great Idea logo for a little more";
  document.addEventListener("scroll", () => ctaPic.style.border = "2px solid black" );
});

document.addEventListener("keyup", () => {
  ctaPic.setAttribute("src", "img/Gandalf_the_Grey.jpg");
  ctaSelectText.innerHTML = "Scroll over the Great Idea logo for a little more";

});

// Logo light bulb lights up
/******************************************************/
logo.addEventListener("mouseover", () => {
                    logo.setAttribute("src", siteContent["nav"]["img2-src"]);
                      ctaSelectText.innerHTML =
                        "Try to add some borders with the button at the bottom";
                  });
logo.addEventListener("mouseleave", () =>
                    logo.setAttribute("src", siteContent["nav"]["img-src"]));

// Make a bunch of borders
/******************************************************/
let borderButton = document.createElement("button");
borderButton.innerHTML = "One click on, double click off";
document.querySelector(".contact").append(borderButton);

borderButton.addEventListener("click", () => {
  let navAndH4 = document.querySelectorAll(".container .main-content .text-content h4")
  navAndH4.forEach(element => {
    element.style.border = "2px solid black";
    element.style.padding = "1%";
    element.style.margin = "1%";
    element.style.backgroundColor = "teal";
    element.style.borderRadius = "30%";
  });
});

// remove borders with double click
borderButton.addEventListener("dblclick", () => {
  let navAndH4 = document.querySelectorAll(".container .main-content .text-content h4")
  navAndH4.forEach(element => {
    element.style.border = "0";
    element.style.marginLeft = "0";
    element.style.paddingLeft = "0";
    element.style.backgroundColor = "white";
    element.style.borderRadius = "0";
  });
});

// Lets add some gsap

TweenMax.to(".logo", 2, { left: 0 });
TweenLite.from(".container nav a, .container .cta h1, .container .main-content .text-content h4", 3, {autoAlpha:0, y: 100} );
TweenLite.from("html body", 5, {autoAlpha:0});
// TweenLite.from(".logo", 1, {autoAlpha:0, y: 100} );
