
HTML--:
1. Container:
A div with the class container is used to center the button and popup in the viewport.

2. Submit Button:
A button with the class btn1 is used to trigger the popup. It calls the openPopup() function when clicked.

3. Popup:
A div with the class popup and the id popup represents the popup itself. It contains:
An image (img) with the source set to ../images/pop..jpg.
A heading (h1) with the text "Thank You!".
A paragraph (p) with a message.
An "OK" button that calls the closePopup() function when clicked.
=========================================================================================================
CSS--:
1. Basic Styles:
*: Resets margin, padding, and sets the font family for all elements.
.container: Styles the container to take the full viewport height and centers its content.

2. Button Styles:
.btn1: Styles the submit button with padding, background color, font size, and border radius.

3. Popup Styles:
.popup: Sets the popup's initial state to be hidden using visibility: hidden and a small scale with 
.popup img: Styles the image inside the popup.
.popup h1: Styles the heading inside the popup.
.popup button: Styles the "OK" button inside the popup.
=========================================================================================================
JavaScript--:

1. Selecting the Popup:
The popup variable stores the popup element by selecting it with document.getElementById("popup").

2. Open Popup Function:
function openPopup(): Adds the open-popup class to the popup, making it visible.

3. Close Popup Function:
function closePopup(): Removes the open-popup class from the popup, hiding it again.