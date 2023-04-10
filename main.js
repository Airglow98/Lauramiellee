const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/Time.jpg") {
    myImage.setAttribute("src", "images/Clarity.jpg");
  } else {
    myImage.setAttribute("src", "images/Time.jpg");
  }
};

document.querySelector("#ST").addEventListener("click", function () {
    alert("You don't wanna make me angry");
  });


  let myButton = document.querySelector("button");
  let myHeading = document.querySelector("h1");

  function setUserName() {
    const myName = prompt("Please enter your name.");
    if(!myName) {
        setUserName();
      } else {
        localStorage.setItem('name', myName);
        myHeading.innerHTML = 'Designs by LAURAMIELLE, ' + "Hello " + myName;
      }
    }
    
    if(!localStorage.getItem('name')) {
      setUserName();
    } else {
      let storedName = localStorage.getItem('name');
      myHeading.innerHTML = 'Designs by LAURAMIELLE, ' + "Hello " + storedName;
    }
  myButton.onclick = () => {
    setUserName();
  };




