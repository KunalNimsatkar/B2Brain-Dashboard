const AccountDropdown = document.querySelector(".account_wrapper");
const PreferenceDropdown = document.querySelector(".preference_wrapper");
const AccountCollapase = document.querySelector(".account_collapase");
const PreferenceCollapase = document.querySelector(".preference_collapase");
const AccountArrow = document.querySelector(".account_arrow");
const PreferenecArrow = document.querySelector(".preference_arrow");
const input = document.querySelector("input");
const SearchIcon = document.querySelector(".searchIcon");
const heroImg = document.querySelector(".hero_img");
const userSection = document.querySelector(".user_section");
const userWrapper = document.querySelector(".user_wrapper");
userWrapper.classList.add("hidden");
// Dropdown Collapasing Function

AccountCollapase.addEventListener("click", () => {
  AccountArrow.classList.toggle("dropdown_rotate");
  AccountDropdown.classList.toggle("block");
});

PreferenceCollapase.addEventListener("click", () => {
  PreferenecArrow.classList.toggle("dropdown_rotate");
  PreferenceDropdown.classList.toggle("block");
});

// Data Fetching Function

async function fetchData(e) {
  e.preventDefault();
  userSection.innerHTML = "";
  const inputValue = e.target.value;
  if (inputValue) {
    heroImg.classList.add("hidden");
    SearchIcon.classList.remove("fa-magnifying-glass");
    SearchIcon.classList.add("fa-xmark");
    userWrapper.classList.remove("hidden");
    const dataUrl = await fetch(
      `https://staging.staging.b2brain.com/search/autocomplete_org_all/?q=${inputValue}`
    );
    const data = await dataUrl.json();
    data.map((data) => {
      const userData = document.createElement("div");
      const userProfile = document.createElement("div");
      const user = document.createElement("div");
      const userFile = document.createElement("div");
      const userlogo = document.createElement("div");
      const userImg = document.createElement("img");
      const userName = document.createElement("h4");
      const userLink = document.createElement("a");
      const user_Username = document.createElement("p");
      const trackBtn = document.createElement("button");

      userData.classList.add("userData");
      userProfile.classList.add("userProfile");
      user.classList.add("user");
      userlogo.classList.add("userlogo");
      userName.classList.add("userName");
      user_Username.classList.add("user_username");
      trackBtn.classList.add("trackBtn");

      userSection.appendChild(userData);
      userData.appendChild(userProfile);
      userProfile.appendChild(user);
      user.appendChild(userlogo);
      user.appendChild(userFile);
      userFile.appendChild(userName);
      userName.appendChild(userLink);
      userFile.appendChild(user_Username);
      userProfile.appendChild(trackBtn);


      if (data.logo === "") {
        userlogo.style.backgroundColor = data.color;
      } else {
        userlogo.appendChild(userImg);
        userImg.src = data.logo;
        userlogo.style.backgroundColor = data.color;
      }

      userLink.innerHTML = `${data.company}`;
      userlogo.innerHTML = `${data.company}`.charAt(0);
      user_Username.innerHTML = `${data.website}`;
      trackBtn.innerHTML = "Track";
      trackBtn.addEventListener("click", () => {
        trackBtn.innerHTML = "Tracking";
        console.log(`${data.company} (${data.slug}) tracked at ${new Date()}`)
      });
    });
  } else {
    heroImg.classList.remove("hidden");
    SearchIcon.classList.add("fa-magnifying-glass");
    SearchIcon.classList.remove("fa-xmark");
    userWrapper.classList.add("hidden");
  }
  SearchIcon.addEventListener("click", () => {
    e.target.value = "";
    heroImg.classList.remove("hidden");
    SearchIcon.classList.add("fa-magnifying-glass");
    SearchIcon.classList.remove("fa-xmark");
    userWrapper.classList.add("hidden");
  });
}
input.addEventListener("keyup", fetchData);
