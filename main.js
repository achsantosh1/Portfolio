var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(event, tabname) {
    // Loop through tab links and remove 'active-link' class
    for (let tablink of tablinks) {
        tablink.classList.remove("active-link");
    }

    // Loop through tab contents and remove 'active-tab' class
    for (let tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }

    // Add 'active-link' class to the clicked tab link
    event.currentTarget.classList.add("active-link");

    // Add 'active-tab' class to the corresponding tab content
    document.getElementById(tabname).classList.add("active-tab");
}

// Example usage: Add the event listener to the tab links
// for (let tablink of tablinks) {
//     tablink.addEventListener('click', function(event) {
//         opentab(event, this.getAttribute('data-tab'));
//     });
// }
