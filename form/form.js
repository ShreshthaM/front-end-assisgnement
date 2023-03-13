
let userInformation =
{
    userName: "",
    userEmail: ""
}
const button = document.getElementsByClassName("btn btn-primary")[0];
//naming conventions
const getUserInformation = () => {

    let userName = document.getElementById("userName").value;//Trim the data and then check
    let userEmail = document.getElementById("userEmail").value;
    if (userName.length > 20)
        alert("Please enter a userName with 20 or less than 20 characters");
    if (!userEmail.includes('@'))
        alert("Please enter a valid email address");
    if (userEmail.includes(' '))//Global check ex. phone number, username
        alert("No white spaces allowed in email address");
    userInformation.userName = userName;
    userInformation.userEmail = userEmail;
    return userInformation;
}

const getThanksMessage = () => {
    userInformation = getUserInformation();
    const thanksMessage = `Thanks for submitting the form the values you entered are Name : ${userInformation.userName} and Email : ${userInformation.userEmail}`;
    return thanksMessage;
}
//method to create thanksMessage
//break code into multiple methods

function displayThanksMessage(e) {
    e.preventDefault();
    const thanksMessage = getThanksMessage();
    const form = document.querySelector('form');
    form.innerHTML = thanksMessage;

}

button.addEventListener("click", displayThanksMessage);

const checkUrl = () => {
    const url = "http://example.com/path?name=Branch&products=[Journeys,Email,Universal%20Ads]";//URL uppercase
    if (url.startsWith("http")) {
        console.log(`${url}  is an external website`);
    }
    else { console.log(`${url}  is not an external website`); }
    if (url.endsWith(".php")) { console.log(`${url}  is an internal website`); }
    else { console.log(`${url}  is not an internal website`); }
    const govUrl = "https://npiregistry.cms.hhs.gov/search";
    if (govUrl.includes(".gov")) { console.log(`${govUrl} is a government website`); }
    else { console.log(`${govUrl} is not a government website`); }
    const urlParams = url.split('?');
    if (urlParams.length > 1) {
        const params = urlParams[urlParams.length - 1].split('&');  //indexOf
        for (const param of params) {
            console.log(`${param}`);
        }
    }
}
checkUrl();
