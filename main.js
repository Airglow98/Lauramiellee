const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "Waste your Time.jpg") {
    myImage.setAttribute("src", "Clarity.jpg");
  } else {
    myImage.setAttribute("src", "Waste your Time.jpg");
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
        myHeading.innerHTML = 'Designs by LAURAMIELLEE, ' + "Hello " + myName;
      }
    }
    
    if(!localStorage.getItem('name')) {
      setUserName();
    } else {
      let storedName = localStorage.getItem('name');
      myHeading.innerHTML = 'Designs by LAURAMIELLEE, ' + "Hello " + storedName;
    }
  myButton.onclick = () => {
    setUserName();
  };




