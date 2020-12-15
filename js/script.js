const body = document.querySelector("body");
const desktopMenu = document.querySelectorAll(".desktop-menu a");
const hamburgerMenuIcon = document.querySelectorAll(".mobile-menu .hamburger-menu");
const mobileMenu = document.querySelectorAll(".mobile-menu nav");
const mobileMenuItems = document.querySelectorAll(".mobile-menu nav li a");
const xIcon = document.querySelectorAll(".mobile-menu nav li span");

const home = document.querySelector("#home");
const projects = document.querySelector("#projects");
const aboutMe = document.querySelector("#about-me");
const contactMe = document.querySelector("#contact-me");

const listOfSliders = [home, projects, aboutMe, contactMe];

const mongodb = document.querySelector(".mongodb");
const react = document.querySelector(".react");
const nodejs = document.querySelector(".nodejs");
const sass = document.querySelector(".sass");
const html = document.querySelector(".html");
const css = document.querySelector(".css");
const js = document.querySelector(".js");

const viewProjects = document.querySelector("#viewProjects");
const aboutMeBtn = document.querySelector("#aboutMeBtn");

const downUpCircle = document.querySelectorAll(".triangle-animation .down-button .green-circle");
const downArrow = document.querySelectorAll(".triangle-animation .down-button .green-triangle");
const upArrow = document.querySelector(".triangle-animation .down-button .green-triangle-up");

const sendButton = document.querySelector("#send");
const senderName = document.querySelector("#name");
const email = document.querySelector("#email");
const message = document.querySelector("textarea");
const logo = document.querySelectorAll(".logo");

viewProjects.addEventListener("click", function(e) {
  home.className = "mainPadding";
  projects.className = "mainPadding active";
  mobileMenu[0].style.width = "0px";
  mobileMenu[0].style.padding = "0px";
})

aboutMeBtn.addEventListener("click", function(e) {
  home.className = "mainPadding";
  aboutMe.className = "mainPadding active";
  mobileMenu[0].style.width = "0px";
  mobileMenu[0].style.padding = "0px";
});


const listOfIcons = [mongodb, react, nodejs, sass, css, js];

listOfIcons.forEach(icon => {
  const style = getComputedStyle(icon);
  console.log("icon", style.right, style.left);
  let counter = 0;
  let param1, param2 = "";
  switch (icon.className) {
    case "mongodb":
      param1 = window.innerWidth <= 1600 ? "left" : "right";
      param2 = "top";
      break;
    case "react":
      param1 = null;
      param2 = "top";
      break;
    case "nodejs":
      param1 = "right";
      param2 = "top";
      break;
    case "sass":
      param1 = "left";
      param2 = "bottom";
      break;
    case "css":
      param1 = style.right === "auto" ? "left" : "right";
      param2 = "bottom";
      break;
    case "js":
      param1 = null;
      param2 = "bottom";
      break; 
  }
  let testing = setInterval(function() {
    if (counter <= 30) {
      animate(icon, style, counter, "forward", param1, param2);
    } else if (counter <= 60) {
      animate(icon, style, counter, "backward", param1, param2);
    } else {
      counter = 0;
    }
    counter++;
  }, 30);
})

body.onresize = () => {
  window.location.reload();
}

animate = (tech, techStyle, counter, type, param1, param2) => {
  if (type === "forward") {
    const move1 = param1 ? Number(techStyle[param1].slice(0, techStyle[param1].indexOf("px"))) : null;
    const move2 = Number(techStyle[param2].slice(0, techStyle[param2].indexOf("px")));
    tech.style[param1] = move1 + 1 + "px";
    tech.style[param2] = move2 + 1 + "px";
  } else {
    const move1 = param1 ? Number(techStyle[param1].slice(0, techStyle[param1].indexOf("px"))) : null;
    const move2 = Number(techStyle[param2].slice(0, techStyle[param2].indexOf("px")));
    tech.style[param1] = move1 - 1 + "px";
    tech.style[param2] = move2 - 1 + "px";
  }
}


//add eventListener to navigation
desktopMenu.forEach(link => {
  link.addEventListener("click", (e) => {  
    listOfSliders.forEach(slide => {
      slide.className = "mainPadding ";
    });
    if (e.target.innerHTML === "Home") {
      home.className += "active";
    } else if (e.target.innerHTML === "Projects") {
      projects.className += "active";
    } else if (e.target.innerHTML === "About me") {
      aboutMe.className += "active";
    } else {
      contactMe.className += "active";
    }
  });
});
console.log(mobileMenu)
mobileMenuItems.forEach((link, index) => {
  link.addEventListener("click", (e) => {  
    listOfSliders.forEach(slide => {
      slide.className = "mainPadding ";
    });
    if (e.target.innerHTML === "Home") {
      home.className += "active";
    } else if (e.target.innerHTML === "Projects") {
      projects.className += "active";
    } else if (e.target.innerHTML === "About me") {
      aboutMe.className += "active";
    } else {
      contactMe.className += "active";
    }
    mobileMenu.forEach(menu => {
      menu.style.width = "0px";
      menu.style.padding = "0px";
    });    
  });
  
})

hamburgerMenuIcon.forEach((menu, index) => {
  menu.addEventListener("click", function(e) {
    const style = getComputedStyle(mobileMenu[index]);
    mobileMenu[index].style.width = "300px";
    mobileMenu[index].style.padding = "50px";
  });
});

xIcon.forEach((closeMenu, index) => {
  closeMenu.addEventListener("click", function(e) {
    mobileMenu[index].style.width = "0px";
    mobileMenu[index].style.padding = "0px";
  });
});

downUpCircle.forEach((btn, index) => {
  console.log(btn ,index);
  btn.addEventListener("click", function(e) {
    if (index === 0) {
      console.log("tu");
      home.className = "mainPadding";
      projects.className = "mainPadding active";
    } else if (index === 1) {
      projects.className = "mainPadding";
      aboutMe.className = "mainPadding active";
    } else if (index === 2) {
      aboutMe.className = "mainPadding";
      contactMe.className = "mainPadding active";
    } else {
      contactMe.className = "mainPadding";
      aboutMe.className = "mainPadding active";
    }
  });
  mobileMenu.forEach(menu => {
    menu.style.width = "0px";
    menu.style.padding = "0px";
  });
});
console.log(mobileMenu[2])
downArrow.forEach((btn, index) => {
  console.log(btn ,index);
  btn.addEventListener("click", function(e) {
    if (index === 0) {
      console.log("tu");
      home.className = "mainPadding";
      projects.className = "mainPadding active";
    } else if (index === 1) {
      projects.className = "mainPadding";
      aboutMe.className = "mainPadding active";
    } else {
      aboutMe.className = "mainPadding";
      contactMe.className = "mainPadding active";
    }
  });
  mobileMenu.forEach(menu => {
    menu.style.width = "0px";
    menu.style.padding = "0px";
  });
  
});

upArrow.addEventListener("click", function(e) {
  contactMe.className = "mainPadding";
  aboutMe.className = "mainPadding active";
  mobileMenu[2].style.width = "0px";
  mobileMenu[2].style.padding = "0px";
});

logo.forEach((icon, index) => {
  icon.addEventListener("click", function(e) {
    listOfSliders.forEach(slide => {
      slide.className = "mainPadding ";
    });
    home.className = "mainPadding active";
  });
});

sendButton.addEventListener("click", function(e) {
  alert("Thank you for sending message!");
  const templateId = 'template_kpoigan';
  const serviceID = 'service_qjw7m7s';
  if (senderName.value === "" || message.value === "" || email.value === "") {
    alert("Fill in all fields before sending message!");
  } else {
    sendFeedback(serviceID, templateId, { from_name: senderName.value, message: message.value, reply_to: email.value });
  }
  
});

const sendFeedback = (serviceID, templateId, variables) => {
  window.emailjs.send(
    serviceID, 
    templateId,
    variables
  ).then(res => {
    resetValues();
    console.log('Email successfully sent!', variables)
  })
  .catch(err => console.error('There has been an error.  Here some thoughts on the error that occured:', err))
}

const resetValues = () => {
  senderName.value = "";
  message.value = "";
  email.value = "";
}

