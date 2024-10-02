// How to make a show/hide sidebar menu?
// https://stackoverflow.com/questions/63464593/how-to-make-a-show-hide-sidebar-menu

function toggleNav() {
    if (document.getElementById("categoriesSideBar").style.width == "0px") {
        document.getElementById("categoriesSideBar").style.width = "500px";
    }
    else {
        document.getElementById("categoriesSideBar").style.width = "0px";
    }
}   