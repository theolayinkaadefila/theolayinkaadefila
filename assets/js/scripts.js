function handleTabChange(evt, tabName) {
    // Hide all tab content
    var tabcontent = document.getElementsByClassName("tab_content");
    for (var i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    // Remove the "active" class from all tab buttons
    var tablinks = document.getElementsByClassName("tablinks");
    for (var i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active");
    }
    // Show the selected tab content
    document.getElementById(tabName).style.display = "block";
    // Add "active" class to the clicked tab button
    evt.currentTarget.classList.add("active");
}
