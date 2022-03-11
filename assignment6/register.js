var fName,lName,gender,bday,email,username,password,form;

window.onload = pageLoad;
function pageLoad(){
    form = document.getElementById("myForm");
	form.onsubmit = validateForm;
}

function validateForm() {
    fName = document.forms["myForm"]["firstname"];
    lName = document.forms["myForm"]["lastname"];
    gender = document.forms["myForm"]["gender"];
    bday = document.forms["myForm"]["bday"];
    email = document.forms["myForm"]["email"];
    username = document.forms["myForm"]["username"];
    password = document.forms["myForm"]["password"];
    var require = document.getElementById("errormsg")
    var Result = true;
    require.innerHTML = "";
    if(bday.value == ""){
        require.innerHTML += "Birthday "
        Result = false;
    }
    if(lName.value == ""){
        require.innerHTML += "Last name "
        Result = false;
    }
    if(gender.value == ""){
        require.innerHTML += "Gender "
        Result = false;
    }
    if(email.value == ""){
        require.innerHTML += "Email "
        Result = false;
    }
    if(password[0].value != password[1].value){
        require.innerHTML += "Wrong password "
        Result = false;
    }
    return Result;
    //ถ้าตรวจสอบแล้วว่ามีการ register ไม่ถูกต้องให้ return false ด้วย
}
