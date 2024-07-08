document.addEventListener("DOMContentLoaded", function() {
    document.querySelector('.dropbtn').addEventListener('click', function() {
      var dropdownContent = document.querySelector('.dropdown-content');
      dropdownContent.style.display = (dropdownContent.style.display === 'block') ? 'none' : 'block';
    });
    
    // Close the dropdown if the user clicks outside of it
    window.onclick = function(event) {
      if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.style.display === 'block') {
            openDropdown.style.display = 'none';
          }
        }
      }
    }
  });


  function toggleAccordion(element) {
    const accordionHeader = element;
    const accordionContent = accordionHeader.nextElementSibling;

    if (accordionContent.style.display === "block") {
        accordionContent.style.display = "none";
        accordionHeader.classList.remove("active");
    } else {
        const allContents = document.querySelectorAll(".accordion-content");
        const allHeaders = document.querySelectorAll(".accordion-header");

        allContents.forEach(content => content.style.display = "none");
        allHeaders.forEach(header => header.classList.remove("active"));

        accordionContent.style.display = "block";
        accordionHeader.classList.add("active");
    }
}
  