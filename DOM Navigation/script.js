/*FIRST ELEMENT CHILD*/

const fruit=document.getElementById("fruits")
const firstelement=fruit.firstElementChild
firstelement.style.backgroundColor="yellow"
/*It will Select The APPLE*/

/*LAST ELEMENT CHILD*/

const vegetable=document.getElementById("vegetables")
const lastelement=vegetable.lastElementChild
lastelement.style.backgroundColor="yellow"
/*It will Select The POTATO*/

/*NEXT ELEMENT SIBLNG */

const food=document.getElementById("porotta")
const nextelement=food.nextElementSibling
nextelement.style.backgroundColor="yellow"
/*It will Select The DOSA*/

/*PREVIOUS ELEMENT SIBLING */

const grape=document.getElementById("grapes")
const previouselement=grape.previousElementSibling
previouselement.style.backgroundColor="yellow"
/*It will Select The ORANGE*/

/*PARENT ELEMENT SIBLING */

const apple=document.getElementById("apple")
const parentElement=apple.parentElement
parentElement.style.backgroundColor="yellow"
/*It will Select All The FRUITS*/

/*CHILDREN*/

const snack=document.getElementById("snacks")
const eveningsnack=snack.children
Array.from(eveningsnack).forEach(evesnacks => {
    evesnacks.style.backgroundColor="yellow"
});
/*It will Select All The SNACKS*/

