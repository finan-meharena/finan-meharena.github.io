var tablinks =  document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");


console.log(tablinks)

function openTab(tabName){

    for (link of tablinks){
        link.classList.remove("active-link");
    }

    for (cont of tabcontents){
        cont.classList.remove("active-tab")
    }
    event.currentTarget.classList.add("active-link")
    document.getElementById(tabName).classList.add("active-tab")
}

