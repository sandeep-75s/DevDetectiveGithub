getUser("sandeep-75s");
const body = document.querySelector("body");
const mainContainer = document.querySelector(".main-container");
const container = document.querySelector(".container");
const profileName = document.querySelector(".profile-name");
const profilePic = document.querySelector(".profile-pic");
const inputSearch = document.querySelector(".input-search");
const userName = document.querySelector(".user-name");
const joinDate = document.querySelector(".join-date");
const bio = document.querySelector(".bio");
const repoNo = document.querySelector(".repo-no");
const followerNo = document.querySelector(".followers-no");
const followingNo = document.querySelector(".following-no");
const locationName = document.querySelector(".location-name");
const bioLink = document.querySelector(".bio-link");
const twitterLink = document.querySelector(".twitter-link");
const companyName = document.querySelector(".company-name");
const lightTheme = document.querySelector(".light-theme");
const darkTheme = document.querySelector(".dark-theme");
const themeDiv = document.querySelector(".theme-div");
const heading = document.querySelector(".heading");
const searchDiv = document.querySelector(".search-div");
const profileDiv = document.querySelector(".profile-div");
const profileDetail = document.querySelector(".profile-detail");
const contactDiv = document.querySelector(".contact-div");
let flag =0;

function inputUser(){
    const user = inputSearch.value;
    getUser(user)
}

function changeTheme(){
    if(flag==0){
        mainContainer.style.backgroundColor = "#F6F8FF";
        lightTheme.style.visibility = "hidden"
        darkTheme.style.visibility = "visible"
        heading.style.color = "#4B6A9B";
        searchDiv.style.backgroundColor = "white"
        inputSearch.style.color = "#4B6A9B";
        profileDiv.style.backgroundColor = "white"
        profileName.style.color = "black";
        joinDate.style.color = "#4B6A9B";
        bio.style.color="#4B6A9B"; 
        profileDetail.style.backgroundColor = "#f6f8ff" 
        profileDetail.style.color = "#4B6A9B"; 
        locationName.style.color = "#4B6A9B"; 
        bioLink.style.color = "#4B6A9B"; 
        twitterLink.style.color = "#4B6A9B"; 
        companyName.style.color = "#4B6A9B"; 
        flag=1
    }
    else{
        mainContainer.style.backgroundColor = "#141D2F";
        lightTheme.style.visibility = "visible"
        darkTheme.style.visibility = "hidden"
        heading.style.color= "white";
        searchDiv.style.backgroundColor = "#1E2A47"
        inputSearch.style.color = "white";
        profileDiv.style.backgroundColor = "#1E2A47"
        profileName.style.color = "white";
        joinDate.style.color = "white";
        bio.style.color="white"; 
        profileDetail.style.backgroundColor = "#141D2F" 
        profileDetail.style.color = "white"; 
        locationName.style.color = "white"; 
        bioLink.style.color = "white"; 
        twitterLink.style.color = "white"; 
        companyName.style.color = "white"; 
        flag=0
    }
}


async function getUser(user){
    try{
        const response = await fetch(`https://api.github.com/users/${user}`);
        const data = await response.json();
        console.log(data);

        render(data);
    }
    catch(err){
        alert("User Not Found")
    }
    
}
function render(data){
    profilePic.src = data?.avatar_url;
    profileName.innerText = data?.name;
    userName.innerText = data?.login;
    joinDate.innerText = data?.created_at;
    bio.innerText = data?.bio;
    repoNo.innerText = data?.public_repos;
    followerNo.innerText = data?.followers;
    followingNo.innerText = data?.following;
    if(data?.location==null){
        locationName.innerText = "Not Available"
    }
    else{
        locationName.innerText = data?.location;
    }
    if(data?.blog==null){
        locationName.innerText = "Not Available"
    }
    else{
        bioLink.innerText = data?.blog;
    }
    if(data?.twitter_username==null){
        twitterLink.innerText = "Not Available"
    }
    else{
        twitterLink.innerText = data?.twitter_username;
    }
    if(data?.company==null){
        companyName.innerText = "Not Available"
    }
    else{
        companyName.innerText = data?.company;
    }
}