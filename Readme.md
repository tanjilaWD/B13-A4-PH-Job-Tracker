1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Ans: The difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll is:

getElementById("id")
✔ Returns only one element
✔ Find by ID

getElementsByClassName("class")
✔ Returns all elements of the same class
✔ Returns HTMLCollection

querySelector("css selector")
✔ Uses CSS selector
✔ Returns only the first matching element

querySelectorAll("css selector")
✔ Uses CSS selector
✔ Returns all matching elements
✔ Returns NodeList


2. How do you create and insert a new element into the DOM?

Ans: New element create and insert -

const newDiv = document.createElement("div");
newDiv.innerText = "Hello World";
document.body.append(newDiv);

3. What is Event Bubbling? And how does it work?

Ans: Event Bubbling -

<div id="parent">
   <button id="child">Click</button>
</div>

✔ Event first goes to button
✔ Then goes to parent
✔ Then body
✔ Then document

This is Event Bubbling. It means event goes from bottom to top.

Example:
document.getElementById("parent").addEventListener("click", () => {
   console.log("Parent clicked");
});

document.getElementById("child").addEventListener("click", () => {
   console.log("Child clicked");
});

4. What is Event Delegation in JavaScript? Why is it useful?

Ans: Event Delegation means —
✔ Not setting a separate listener on the child element
✔ Setting a listener on the parent
✔ Then checking with event.target

Example:
document.getElementById("parent").addEventListener("click", function(i) {
if(i.target.tagName === "BUTTON"){
console.log("Button clicked");
}
});


5. What is the difference between preventDefault() and stopPropagation() methods?

Ans: preventDefault() and stopPropagation() methods -

preventDefault()
✔ Disables the browser's default behavior
Example: Form submit → normally reload, preventDefault() will not reload

stopPropagation()
✔ Prevents event from bubbling on the element above
Example: Button click → does not allow parent listener to run