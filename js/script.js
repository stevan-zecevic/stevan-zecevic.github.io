const desktopMenuElements = document.querySelectorAll(".desktop-menu li");
const desktopMenu = document.querySelectorAll(".desktop-menu");
const hamburgerIcon = document.querySelectorAll(".hamburger-menu");
const viewProjects = document.querySelector("#viewProjects");
const aboutMeBtn = document.querySelector("#aboutMeBtn");
const downControl = document.querySelectorAll(".down-control");
const upControl = document.querySelectorAll(".up-control");

const home = document.querySelector("#home");
const projects = document.querySelector("#projects");
const aboutMe = document.querySelector("#about-me");
const contactMe = document.querySelector("#contact-me");

const listOfSliders = [home, projects, aboutMe, contactMe];

const sendButton = document.querySelector("#send");
const senderName = document.querySelector("#name");
const email = document.querySelector("#email");
const message = document.querySelector("textarea");
const logo = document.querySelectorAll(".logo");
const error = document.querySelector(".contactMe-form > span");

downControl.forEach((btn, index) => {
  btn.addEventListener("click", function(e) {
    if (index === 0) {
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
    const { width } = getComputedStyle(desktopMenu[index]);
    desktopMenu[index].style.width = width === "250px" || width === "0px" ? "0px" : "50%";
    hamburgerIcon[index].className = "hamburger-menu";
    if (index !== 0) {
      desktopMenu[index - 1].style.width = width === "250px" || width === "0px" ? "0px" : "50%";
      hamburgerIcon[index - 1].className = "hamburger-menu";
    }
  });
});

upControl.forEach((btn, index) => {
  btn.addEventListener("click", function(e) {
    if (index === 0) {
      projects.className = "mainPadding";
      home.className = "mainPadding active";
    } else if (index === 1) {
      aboutMe.className = "mainPadding";
      projects.className = "mainPadding active";
    } else if (index === 2) {
      contactMe.className = "mainPadding";
      aboutMe.className = "mainPadding active";
    }
    const { width } = getComputedStyle(desktopMenu[index]);
    desktopMenu[index].style.width = width === "250px" || width === "0px" ? "0px" : "50%";
    hamburgerIcon[index].className = "hamburger-menu";
    // desktopMenu[index + 1].style.width = width === "250px" ? "0px" : "50%";
    // hamburgerIcon[index + 1].className = "hamburger-menu";
  });
  
});

viewProjects.addEventListener("click", function(e) {
  home.className = "mainPadding";
  projects.className = "mainPadding active";
  const { width } = getComputedStyle(desktopMenu[0]);
  desktopMenu[0].style.width = width === "250px" || width === "0px" ? "0px" : "50%";
  hamburgerIcon[0].className = "hamburger-menu";
})

aboutMeBtn.addEventListener("click", function(e) {
  home.className = "mainPadding";
  aboutMe.className = "mainPadding active";
  const { width } = getComputedStyle(desktopMenu[0]);
  desktopMenu[0].style.width = width === "250px" || width === "0px" ? "0px" : "50%";
  hamburgerIcon[0].className = "hamburger-menu";
});

hamburgerIcon.forEach((icon, index) => {
  icon.addEventListener("click", function(e) {
    if (icon.className.includes("open")) {
      icon.className = "hamburger-menu";
      desktopMenu[index].style.width = "0px"; 
    } else {
      desktopMenu[index].style.width = "250px"; 
      icon.className = "hamburger-menu open";
    }
  });
});

desktopMenuElements.forEach(link => {
  link.addEventListener("click", function(e) {
    let slideIndex = 0;  
    listOfSliders.forEach(slide => {
      slide.className = "mainPadding ";
    });
    if (e.target.innerHTML === "Home") {
      home.className += "active";
    } else if (e.target.innerHTML === "Projects") {
      projects.className += "active";
      slideIndex = 1;
    } else if (e.target.innerHTML === "About me") {
      aboutMe.className += "active";
      slideIndex = 2;
    } else {
      contactMe.className += "active";
      slideIndex = 3;
    }
    const { width } = getComputedStyle(desktopMenu[slideIndex]);

    desktopMenu[slideIndex].style.width = width === "250px" || width === "0px" ? "0px" : "50%";
    hamburgerIcon[slideIndex].className = "hamburger-menu";
  });
});

logo.forEach((icon, index) => {
  icon.addEventListener("click", function(e) {
    listOfSliders.forEach(slide => {
      slide.className = "mainPadding ";
    });
    home.className = "mainPadding active";
    const { width } = getComputedStyle(desktopMenu[index]);
    desktopMenu[index].style.width = width === "250px" || width === "0px" ? "0px" : "50%";
    hamburgerIcon[index].className = "hamburger-menu";
    desktopMenu[0].style.width = width === "250px" || width === "0px" ? "0px" : "50%";
    hamburgerIcon[0].className = "hamburger-menu";
  });
});

sendButton.addEventListener("click", function(e) {
  const templateId = 'template_kpoigan';
  const serviceID = 'service_qjw7m7s';
  if (senderName.value === "" || message.value === "" || email.value === "") {
    console.log("Tu", error)
    error.style.display = "block";
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
    sendButton.innerHTML= "Sent! <span>&#10003;</span>";
    error.style.display = "none";
    resetValues();
    console.log('Email successfully sent!', variables);
  })
  .catch(err => console.error('There has been an error.  Here some thoughts on the error that occured:', err))
}

const resetValues = () => {
  senderName.value = "";
  message.value = "";
  email.value = "";
}

