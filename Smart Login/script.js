let userNames = [];

function submitForm(){
    let userName = document.querySelector("#username").value;
    if(userNames.includes(userName)){
        alert("User Name already exists")
    }
    else{
        userNames.push(userName);
        alert("User stored!")
    }
}
