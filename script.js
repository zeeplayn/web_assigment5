const userProfile = {
  name: "Zharkyn",         
  birthYear: 2008,          
  isDeveloper: true,
  hobbies: ["coding", "gaming", "music"]
};

function calculate() {
  const currentYear = new Date().getFullYear();
  const age = currentYear - userProfile.birthYear;
  const months = age * 12;
  const hobbyCount = userProfile.hobbies.length;

  console.log("Age:", age);
  console.log("Months old:", months);
  console.log("Hobbies count:", hobbyCount);

  document.getElementById("age").textContent = age;
  document.getElementById("months").textContent = months;
  document.getElementById("hobbyCount").textContent = hobbyCount;
}


function showProfile() {
  document.getElementById("name").textContent = userProfile.name;
  document.getElementById("birthYear").textContent = userProfile.birthYear;
  document.getElementById("isDeveloper").textContent = userProfile.isDeveloper;
  document.getElementById("hobbies").textContent = userProfile.hobbies.join(", ");
  calculate();
}

showProfile();


const form = document.getElementById("profileForm");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const username = document.getElementById("usernameInput").value;
  const birthYear = Number(document.getElementById("birthYearInput").value);


  if (username === "" || birthYear === 0) {
    document.getElementById("message").textContent = "Please fill both fields!";
    return;
  }


  userProfile.name = username;
  userProfile.birthYear = birthYear;

  showProfile();
  document.getElementById("message").textContent = "Profile updated!";
  console.log(userProfile);
});



const list = document.getElementById("myList");
const itemInput = document.getElementById("itemInput");


document.getElementById("addBtn").addEventListener("click", function () {
  const text = itemInput.value;

  if (text === "") {
    alert("Write something first");
    return;
  }

  const li = document.createElement("li");
  li.textContent = text;
  list.appendChild(li);

  itemInput.value = "";
});


document.getElementById("removeBtn").addEventListener("click", function () {
  if (list.lastElementChild) {
    list.removeChild(list.lastElementChild);
  }
});
