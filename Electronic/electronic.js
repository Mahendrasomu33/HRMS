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