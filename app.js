// Display document title

const title = document.getElementsByClassName('title');

console.log(title);

// Change h1 

const newH1 =  document.getElementsByClassName('title').innerHTML = "Modifying the DOM"

// Change h1 color 

const heading = document.querySelector('.main-heading');

heading.style.color = 'red';

// Change Bg Color 

const body = document.querySelector('.container');

body.backgroundColor = 'pink';



// const newBgColor = document.getElementsByClassName('title').style.color = 'pink';
// Set a background color of a specific <div> element:
// document.getElementById("myDiv").style.backgroundColor = "lightblue";
// let color = document.getElementById("myDiv").style.backgroundColor;
// let color = document.body.style.backgroundColor;


// const body = document.getElementsByClassName('my-body').style.backgroundColor = 'pink';
// let pink =document.body.style.backgroundColor;
//element.addEventListener("click", function);
// const newBgColor = document.querySelector('.my-body');

// function changeBgColor(){
//     newBgColor.style.backgroundColor = 'pink';
// };

// newBgColor.addEventListener('click',changeBgColor);


// Display every children elements of the second child element of your document (display all children elements of the <body>)

const secondChild = document.body.children[1];
for (const child of secondChild.children) {
    console.log(child);
}
