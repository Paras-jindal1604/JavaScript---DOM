
// we want to make webpage interactive with user that when user clicks on screen something happens.
// for that we use DOM.

// in browser console - 
// when we write document or window.document we see that the whole html page is stored in document.
// we can make changes to html page by using document in javascript console.

// example - 

document.getElementById("first").innerHTML = "Ye maine js se change kiya hai";

//? this statement changed the text written in html element with id = first.
// now we can manipulate html using javascript to make the web page interactive with user.


//^ DOM (Document Object Model) is a way to represent a web page so that programs like js can interact with it.
//^ A browser takes the HTML document and converts it into DOM. 

//^ DOM converts the html page into object and now we can manipulate an object using js.



//^ Every HTML element is converted into object in DOM.
//? all of its values,text, id, class and css properties are stored as key-value pairs.
// example - 

// <h1 id="first" class="header1">Hello Coder Army</h1>    will be converted into object as - 

// const obj = {
//     tag : "h1",
//     id : "first",
//     class : "header1",
//     innerHTML : "Hello Coder Army",
//     fontsize : "larger",
//     backgroundcolor : "black",
//     color : "white"
// }


/*

^ When a web page is loaded, the browser creates a Document Object Model of the page.
^ The HTML DOM model is constructed as a tree of Objects.


^ With the object model, JavaScript gets all the power it needs to create dynamic HTML:

*  JavaScript can change all the HTML elements in the page
*  JavaScript can change all the HTML attributes in the page
*  JavaScript can change all the CSS styles in the page
*  JavaScript can remove existing HTML elements and attributes
*  JavaScript can add new HTML elements and attributes
*  JavaScript can react to all existing HTML events in the page
*  JavaScript can create new HTML events in the page

*/


//! NOTE - to access all properties of document use  "console.dir(document)" in browset console.
//  it will display all the properties of document.


// ----------------------------------------------------------------------------------------------

// in browser console ->

// const obj = document.getElementById("first");
// the html element is stored into an object

// obj
// output :   <h1 id=​"first" class=​"header1">​Ye maine js se change kiya hai​</h1>​


// typeof obj;
// output :  'object

// obj.__proto__
// it shows all the properties of object in key-value pair like style, id,innerHTML, tagname and many more.

// obj.id
// output  :  'first'

// obj.className
// 'header1'



//! NOTE - the class of HTML elements is stored in javascript dom object with "className",
//!        because the class keyword is reserved in js for constructing classes.




// --------------------------------------------------------------------------------------



/*

^ How to access HTML elements ?

* a.  Accessing by ID ->  Method :  document.getElementById("id")
        retrieves a single element with specified id as attribute.


* b.  Accessing by className ->  Method :  document.getElementsByClassName("class")
        returns a collection all of html elements with specified class name. that's why it uses Elements.

* c.  Accessing by CSS selectors ->                            

       * i. Single Element -> Method  :  document.querySelector(selector)
        returns the first element matching the specified CSS selector.

       * ii. Multiple elements ->  Method  :  document.querySelectorAll(selector) 
        returns a static NodeList of all elements matching the specified CSS selector.


* d. Accessing by Tag Name -> Method  :  document.getElementsByTagName("tagname")
        returns a collection of all HTML elements with a specified tagname like div,a,p,ul etc.


* e. Accessing using Relationships


    * i. Parent Node -> Method :  element.ParentNode   or  element.ParentElement
                access the immediate parent of an element
        
    * ii. Child Node -> Method  : element.childNodes(include text nodes)   or element.children(only element nodes)
                access all the child nodes of an element

    * iii. First and Last Child ->  Methods :  element.firstChild ,  element.lastChild
                                                *  element.firstElementChild ,  element.lastElementChild
                access first and last child nodes and child elements of a parent element

    * iv.  Sibling Nodes -> Methods :  element.nextSibling, element.previousSibling
                * element.nextElementSibling  ,  element.previousElementSibling
        access previous and next sibling nodes and elements  of an element
        
        

*/




/*

^ accessing elements by className

let obj1 = document.getElementsByClassName("header1");
? obj1 contains multiple objects with class = header1

obj1
HTMLCollection(2) [h1#first.header1, h2#second.header1, first: h1#first.header1, second: h2#second.header1]
? since, multiple elements can have same class so it returns an html collection of objects.
? collection is similar to array but we cant perform operations like map() on collections.

obj1[0]
<h1 id=​"first" class=​"header1">​Ye maine js se change kiya hai​</h1>​
? to access first element of obj1

obj1[1]
<h2 id=​"second" class=​"header1">​Topics completed so far : ​</h2>​


typeof obj1
'object'


obj1[1].style.backgroundColor = "green";
'green'
? style of html elements is stored as object with various properties like flex,border,font in key-value pairs.

typeof obj1[1].style
'object'
? the CSS style of element is also stored as object having different properties.

*/

// * -------------------------------------------------------------------------


/*

^ accessing elements by CSS selectors - querySelector and querySelectorAll
? query selector can take any value like ".class"  or "#id"  or "tagname" to select element.

let id = document.querySelector("#first");
? element is selected using id 

id
<h1 id=​"first" class=​"header1">​Ye maine js se change kiya hai​</h1>​
? that element with specified id is now obtined

id.innerHTML = "Mjhe id se select kiya gaya hai "
'Mjhe id se select kiya gaya hai '
? now we can manipulate it 

let classs = document.querySelector(".header1");
? element is selected using class

classs
<h1 id=​"first" class=​"header1">​Mjhe id se select kiya gaya hai ​</h1>​
? here two elements have same class, so it will return the very first element

let tagn = document.querySelector("ul");
? element is selected using tagname

tagn
<ul id=​"third" class=​"header2">​…​</ul>​


tagn.style.backgroundColor = "purple";
'purple
? changing values 


*/

// * -------------------------------------------------------------------------------------


/*
        ^  accessing elements by  querySelectorAll
? it selects all the elements that match the specified CSS selector


let obj = document.querySelectorAll(".header1");
? it selects all the elements with class header1

obj
NodeList(2) [h1#first.header1, h2#second.header1]
? it returns a NodeList of elements which is similar to array

obj.length
2
? there are two elements with class header1


obj[0]
<h1 id=​"first" class=​"header1">​Ye maine js se change kiya hai​</h1>​

obj[1]
<h2 id=​"second" class=​"header1">​Topics completed so far : ​</h2>​
? these elements can be accessed similar to array elements


? -----------------------  iteration on NodeList (for,  for-of,  forEach)


for(let i=0; i<obj.length; i++){
    console.log(obj[i]);
}
<h1 id=​"first" class=​"header1">​Ye maine js se change kiya hai​</h1
<h2 id=​"second" class=​"header1">​Topics completed so far : ​</h2>​
? we can use a simple for loop to iterate over NodeList


for(let i=0; i<obj.length; i++){
    obj[i].style.backgroundColor = "pink";
}
'pink'
? simple for loop can be used to change values of elements of NodeList


for(let val of obj){
    console.log(val);
}
<h1 id=​"first" class=​"header1" style=​"background-color:​ pink;​">​Ye maine js se change kiya hai​</h1>​
<h2 id=​"second" class=​"header1" style=​"background-color:​ pink;​">​Topics completed so far : ​</h2>​
? for-of loop can also be used to access elements of NodeList and change their values 



obj.forEach( (val) => {
    console.log(val);
} )
<h1 id=​"first" class=​"header1">​Ye maine js se change kiya hai​</h1>​
<h2 id=​"second" class=​"header1">​Topics completed so far : ​</h2>​
? the  forEach loop can also be used to access and change values of elements of NodeList 


Array.from(obj);
(2) [h1#first.header1, h2#second.header1]
0: h1#first.header1
1: h2#second.header1
length: 2
[[Prototype]]: Array(0)
? to convert a NodeList into array use Array.from() so that operations like push(),pop() can be performed.

?------------------------------ accessing tagname elements by querySelectorAll

let tg = document.querySelectorAll("li");
? selecting simply by giving tag name

tg
NodeList(4) [li, li, li, li]


let tag = document.querySelectorAll("ul li");
? selecting from parent to child 

tag
NodeList(4) [li, li, li, li]


let tags = document.querySelectorAll("ul>li");
? selecting from parent to child just as we do in CSS

tags
NodeList(4) [li, li, li, li]

? all these methods are used to select all elements of ul using querySelectorAll

*/

// *------------------------------------------------------------------------------


/*

^  accessing elements by TagName

let team = document.getElementsByTagName("li");
? returns a HTML collection of all li elements

team
HTMLCollection(4) [li, li, li, li]

team.length
4

team[0]
<li>​::marker​"Computer Networking"</li>​
? we can access individual elements like array

team[1]
<li>​::marker​"HTML"</li>​


for(let i =0; i<team.length; i++){
    team[i].style.backgroundColor = "grey";
}
'grey'
? use simple for loop to iterate over the collection

for(let val of team){
    console.log(val);
}
<li style=​"background-color:​ grey;​">​…​</li>​
<li style=​"background-color:​ grey;​">​…​</li>​
<li style=​"background-color:​ grey;​">​…​</li>​
<li style=​"background-color:​ grey;​">​…​</li>​
? we can also use for-of loop to iterate over it 

? Collection is different from Array, so convert it to array to use forEach loop


Array.from(team).forEach( (val) => {
    console.log(val);
} )
<li>​…​</li>​
<li>​…​</li>​
<li>​…​</li>​
<li>​…​</li>​

? use for, for-of to iterate over Collection, and convert to Array to iterate with forEach


*/


// *------------------------------------------------------------------------------------


/*

^ accessing using relationships


let list = document.querySelector("li");
? selecting the very first children of ul

list.parentNode
<ul id=​"third" class=​"header2">​…​</ul>​
? return parent node

list.parentElement
<ul id=​"third" class=​"header2">​…​</ul>​
? return parent element 


^ node can contain text (including spaces)  and element contain only html tag




const par = document.querySelector("ul");
? selecting ul containing four li

par
<ul id=​"third" class=​"header2">​…​</ul>​

par.childNodes;
NodeList(9) [text, li, text, li, text, li, text, li, text]
0: text 1: li 2: text 3: li 4: text 5: li 6: text 7: li 8: text
length: 9
[[Prototype]]: NodeList
? .childNodes return a NodeList which contain all child text nodes and html elements of a parent element

^ if we remove empty space then its length will be reduced 

par.children
HTMLCollection(4) [li, li, li, li]
? .children returns only the html child elements of a parent element



par.firstChild
#text
? its first child node is the space given after it

par.lastChild
#text
? last child node is also the space of line

par.firstElementChild
<li>​::marker​"Computer Networking"</li>​
? ElementChild always return the first children which is a html element not a text node

par.lastElementChild
<li>​::marker​"JS"</li>​
? return last element children 


*/


//* difference between  innerHTML  and  textContent  and  innerText 

// <h1 id="first" class="header1"> Hello Coder <strong style="display:none">Army</strong> </h1>


// innerhtml print all the tags inside a selected tag 
//  innerHTML output on h1 : Hello Coder <strong style="display:none"> Army</strong>

// 
// textContent display all the text content of element even if it is hidden 
//  textContent output on h1  :  Hello Coder Army

// innerText  does not display the tags and hidden text
//  innerText output on h1  :  Hello Coder






