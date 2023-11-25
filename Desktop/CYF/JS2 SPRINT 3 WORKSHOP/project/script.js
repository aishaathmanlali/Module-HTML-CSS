// const userDiv = document.getElementById('user');
// let whichUser = 9;
// const userName = users[whichUser].user.name;
// userDiv.innerHTML = '<h1>Hello, ' + userName.title + " " + userName.first + " " + userName.last + '!</h1>';

const userDiv = document.getElementById("user");

const heading = document.createElement("h1");
userDiv.appendChild(heading);

const paragraph = document.createElement("p");
userDiv.appendChild(paragraph);

const image = document.createElement("img");
userDiv.appendChild(image);

let currentUser = 0;

function displayUser(num) {
  console.log(num);
  const userName = users[num].user.name;
  const address = users[num].user.location;
  const pic = users[num].user.picture;

  heading.innerText =
    userName.title + " " + userName.first + " " + userName.last;

  paragraph.innerText =
    address.street +
    " " +
    address.city +
    " " +
    address.state +
    " " +
    address.zip;

  image.src = pic.large;
}
displayUser(currentUser);

const nextButton = document.getElementById("forward-btn");
const previousButton = document.getElementById("backward-btn");

nextButton.addEventListener("click", function () {
    currentUser = currentUser + 1;
    if(currentUser === users.length){
      currentUser = 0;
    }
    displayUser(currentUser);
});

previousButton.addEventListener("click", function () {
  currentUser = currentUser - 1;
  if (currentUser < 0) {
    currentUser = users.length-1;
  }
  displayUser(currentUser);
});
