# Assignment 5 - JavaScript Basics

Name:Zharkyn
Group:IT-2502
Link: https://mapqm.netlify.app/
Part 1: Profile Object, Data Types & Arithmetic

### Task 1. The Personal Info Object
I made a `const` object called `userProfile`. It has a string (`name`), a number (`birthYear`), a boolean (`isDeveloper`) and an array (`hobbies`).

<img width="463" height="223" alt="image" src="https://github.com/user-attachments/assets/08b81853-d09b-4bb6-9340-c61143b02ad5" />

### Task 2. Arithmetic Calculations
I used `new Date().getFullYear()` minus `birthYear` to get the age. Then I multiplied age by 12 to get months, and used `hobbies.length` for the hobbies count. Results are shown in the console and on the page.

<img width="521" height="122" alt="image" src="https://github.com/user-attachments/assets/900737a7-e339-43a7-8bb8-f15a63f21f5d" />

Part 2: Form Input & Event Responses

### Task 3. HTML Form Setup
I made a form with a Username input, a Birth Year input and a "Create / Update Profile" button.

<img width="601" height="158" alt="image" src="https://github.com/user-attachments/assets/101c032b-dea1-4d7b-884d-4e3534a29916" />

### Task 4. Event Listener
I added a `submit` event listener to the form. When the button is clicked, it takes the values from the inputs, updates the `userProfile` object and updates the page.

<img width="591" height="511" alt="image" src="https://github.com/user-attachments/assets/63b4565c-da5c-4465-8cff-595d66cb4e0c" />


Part 3: DOM List Manipulation

### Task 5. Creating & Removing Elements
There is a `<ul>` list with hobbies. The "Add Item" button creates a new `<li>` with the text from the input (`createElement` + `appendChild`). The "Remove Item" button deletes the last item (`removeChild`).

<img width="606" height="213" alt="image" src="https://github.com/user-attachments/assets/06573bc0-3e97-473c-b595-8fef559f8d3d" />


## Summary of my work
First I made the HTML structure, then wrote the `userProfile` object and the age calculation. After that I added the form and the submit event. At the end I did the list with add and remove buttons and a little CSS to make it look ok. I tested everything in the browser and checked the console for errors.
