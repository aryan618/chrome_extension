let myLeads = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-El");
const deleteBtn = document.getElementById("delete-btn");
const tabBtn = document.getElementById("tab-btn");

const tabs = [{ url: "https://www.linkedin.com/" }]; // array of objects

tabBtn.addEventListener("click", function () {
  console.log(tabs[0].url);
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    myLeads.push(tabs[0].url);
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    renderLeads(myLeads); // as u have pushed something in the array of myLeads u have to update the rendering by calling renderLeads function
  });
});

//console.log(localStorage.getItem("myLeads"));
let leadsfromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));
if (leadsfromLocalStorage) {
  myLeads = leadsfromLocalStorage;
  renderLeads(myLeads);
}
console.log(leadsfromLocalStorage);

deleteBtn.addEventListener("dblclick", function () {
  localStorage.clear();
  myLeads = [];
  renderLeads(myLeads);
});
inputBtn.addEventListener("click", function () {
  myLeads.push(inputEl.value);
  //console.log(myLeads);
  inputEl.value = "";
  let arr1 = JSON.stringify(myLeads);
  localStorage.setItem("myLeads", arr1);
  renderLeads(myLeads);
});
function renderLeads(leads) {
  let ListElements = "";

  for (let i = 0; i < leads.length; i++) {
    //ulEl.innerHTML += "<li>" + myLeads[i] + "</li>"; // innerhtml renders the entire element as HTML element
    // create element
    // set text content
    // append to ul
    //no we will use an alternative way of innerhtml
    // let el = document.createElement("li");
    // el.textContent = myLeads[i]; // here we dont need "+=" sign because we are creating elemetn li everytime new in the loop
    // ulEl.append(el);
    ListElements += `
    <li> 
      <a target='_Blank' href='${leads[i]}'>
      ${leads[i]}
      </a>
    </li>`;
  }
  //console.log(ListElements);
  ulEl.innerHTML = ListElements;
}

// const recipients = "James";
// //const email = "Hey " + recipients + "@gmail.com";
// const sender = "YOUr dadday bitch";
// const email = `Hey ${recipients}
// @gmail.com
// sent from
// ${sender}`;
// console.log(email);
function getFirst(arr) {
  return arr[4];
}

console.log(getFirst([1, 2, 3, 4, 5, 5]));
