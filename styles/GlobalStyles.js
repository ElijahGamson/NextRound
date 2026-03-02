import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, sans-serif;
}

/* PAGE LAYOUT */
body {
    background-color: #f4f6f9;
    padding: 20px;
    color: #333;
}

/* NAVIGATION BAR*/
nav {
    background-color: #1e3a8a;
    padding: 15px;
    margin-bottom: 20px;
    border-radius: 8px;
}

nav a {
    color: white;
    margin-right: 20px;
    text-decoration: none;
    font-weight: bold;
}

nav a:hover {
    text-decoration: underline;
}
/*
/* CARD COMPONENT*/
/* Reusable UI container */
/* Used for all the info*/
.card {
    text-align: center;
    background: white;
    padding: 15px;
    /* margin-bottom: 15px; */
    border-radius: 10px;
    box-shadow: 0px 2px 6px rgba(0,0,0,0.1); /*4th number defines transparency*/
    width: 32%;
    /* margin-left: 7.5px;
    margin-right: 7.5px; */

}

.cardLayout { /*The div container won't let you wrap items*/
  display: flex; /*Allows multiple cards to fit next to eachother horizontally*/
  gap: 15px;         /* space between cards */
  flex-wrap: wrap; /* allows wrapping to next line */
}
*/

#applications { /*Same as card layout, I just didn't want to mess anything with the javascript up*/
  display: flex; /*Allows multiple cards to fit next to eachother horizontally*/
  gap: 17px;         /* space between cards */
  flex-wrap: wrap; /* allows wrapping to next line */
}

/* BUTTON STYLING*/
button { /*No dot or hastag needed because it's a built in HTML element (effects all button styling)*/
    padding: 8px 12px;
    background-color: #2563eb;
    border: none;
    color: white;
    border-radius: 6px;
    cursor: pointer;
}

button:hover {
    background-color: #1e40af;
}

/* FORM ELEMENTS */
input, select { /*Allows you to effect mutiple classes/ids/elements at with the same styling*/
    padding: 8px;
    margin-top: 5px;
    margin-bottom: 10px;
    width: 100%;
}

/*Controls the header text on the home page (not the text in the card)*/
.page_title_text {
    text-align: center;
    padding: 10px;
}

/*Job information within a card formatting*/
.jobText{
    padding: 5px;
}

/*Search bar and button formatting*/
.search{
    text-align: center;
    padding: 5px;
}

/* Controls the size of the pie chart */
.pieChart {
    margin: 0 auto;   /* Centers horizontally */
    margin-top: 0 auto;
    text-align: center;
    width: 50%;       /* Half the page */
    max-width: 700px; /* Never bigger than 700px */
    height: 500px;
}
`