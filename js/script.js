// Author:AKSHAYA GOPALAKRISHNAN
function validation() {
    let n = document.getElementById("nam").value;
    var mail = document.getElementById("mail").value;
    let select = document.getElementById("select").value;
    let adate = document.getElementById("adate").value;
    let persons = document.getElementById("persons").value;
    let fnam = /^[a-z](?:[a-z0-9-]*[a-z0-9])?$/;
    var email = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;
    let person = /^[0-9]$/;

    if (n == "" || n == null) {
        alert("name field is empty");
        return false;
    } else if (!fnam.test(n)) {
        alert("Enter valid name");
        return false;
    } else if (mail == "") {
        alert("Invalid Email !!!");
    } else if (select == "0") {
        alert("please select an option");
        return false;
    } else if (adate == "0") {
        alert("please enter valid date");
    } else if (persons == "0") {
        alert("please enter persons");
        return false;
    } else if (!person.test(persons)) {
        alert("enter valid number");
        return false;
    } else if (
        document.getElementById("boarding").checked == false &&
        document.getElementById("fooding").checked == false &&
        document.getElementById("sightseeing").checked == false
    ) {
        alert("Choose any option what you want to avail");
        return false;
    } else if (
        document.getElementById("agree").checked == false &&
        document.getElementById("disagree").checked == false
    ) {
        alert("please select any option");
        return false;
    } else {
        return true;
    }
}
