const heading  = document.getElementById("heading");
heading.addEventListener('click', () => {
    alert("You have clicked the heading");
});
heading.addEventListener('click', () => {
    console.log("You have clicked the heading");
});

//addEventListener allows you to do multiple things when an event happens. If instead you used heading.onClick instead every time you added a new function the old on would be replaced.

heading.addEventListener('click', (event) => {
    event.target.innerText = "I've been clicked";
});

const googleLink = document.getElementById('link');
googleLink.addEventListener('click', (e) => {
    e.preventDefault();
});