### Day-04-Nov-23

### For example:

var arr = [4,8,5,12,7];
var res = arr.map(x => x*2);
Here,
4 => 4*2
8 => 8*2
5 => 5*2
12 => 12*2
7 => 7*2
So, x -> array element. for every loop it changes one by one.

### portfolio

- Nov-23 rec : 54.19 min to 54.12 min
  search -> smooth scrool behaviour animation in css
- refer for grid features: https://1linelayouts.glitch.me/

### Immutability:

- learn about it : https://immutable-js.com/

- Immutability concept : Example
- Case : 1

  - let x = 10;
  - 1000 lines of code
  - // x = 5;
  - console.log(x);
  - In this we cann't tell what value x has stored. You need to read all 1000 lines.

- Case : 2

  - const y = 10;
  - 1000 lines of code
  - console.log(y);
  - const z = y + 3;
  - console.log(z);
  - In this we can tell exactly what value y has stored. No need to read the code lines

- case : 3

  - const arr = [2,4,5];
  - // arr[1] = 15; // when you update in array or object it won't show error. But you can make it alarm , when changes taking place Using program.
  - const arr2 = [...arr, 10];
  - If you want to change the output means ,copy the value from y create new variable then make change what you want.

- This is the example of immutability. (It can be a string or array or object or function or variable)

// When you use mapping you will always get a warning message in console : Warning: Each child in a list should have a unique "key" prop.
// How to overcome this warning ?

// To avoid this, change your code,
// from:
// {colorList.map((clr) => (
// <ColorBox color={clr}/>
// ))}
// To:
// {colorList.map((clr,index) => (
// <ColorBox key={index} color={clr}/>
// ))}

// why we put index? Bcs every array element should have a unique key called index.

- Virtual DOM application

### React features:

- 1.  SPA - Single Page Application
- 2.  Reusability
- 3.  Virtual DOM

### Virtual DOM

1. It is the Copy of the Real DOM
2. It is a Large `{key: value}`
3. Updating it does not cost performance
4. To access VDOM you could use hooks (eg : setState)
5. Once the update is done on the virtual DOM, then the Real DOM is updated.
6. Comparison - Reconcilliation - VDOM & Real DOM
7. key helps to quickly compare the changes (like index no. in array) b/w VDOM & Real DOM
8. `document.*` in React - Looses performance

- It is introduced to increase the performance of your website/webapp.
- It is key value pair structure.
- See notes image for reference.

### Example:

- your salary is `10rs`
- For every txn bank fee `5rs`.
- When you debit daily, at the end of the month you have only `150rs`. -> DOM
- When you save the daily salary and debit once in the end of month means you have `295rs`. -> Virtual DOM

### DOM - Document Object Module

- How DOM created ?
- HTML parser, CSS parser.
- How to access DOM with JS ?
- `document.*`
- When you do lots of changes in DOM the browser gets hang ,because it make changes in the main DOM. So when you add or delete any element in DOM it will update the allignments for every single changes.
- So when you make changes 10k times it will affect all the elements in DOM, so all the other elements get affected 10k times. This is the cause of hanging.

### Why we are not recommended to use `document.*` in react ?

- Because it directly access the real DOM, so we will loose the Virtual DOM benifits.
- How we access Virtual DOM ?
- For every usage of hooks in your program , you are accessing the virtual DOM.
- `document.*` works in react but you will loose the Virtual DOM benifits.

/**\*\*\*\***\*\*\*\***\*\*\*\***\*\*\*\***\*\*\*\***\*\*\*\***\*\*\*\***\*\*\*\***\*\*\*\***\*\*\*\***\*\*\*\***\*\*\*\***\*\*\*\***\*\*\*\***\*\*\*\***\***\*\*\*\***\*\*\*\***\*\*\*\***\*\*\*\***\*\*\*\***\*\*\*\***\*\*\*\***\*\*\*\***\*\*\*\***\*\*\*\***\*\*\*\***\*\*\*\***\*\*\*\***\*\*\*\***\*\*\*\***/

### Day-05-Nov-24

How to move components(function) to new file?
Method - 1:

- select the component -> rightclick -> refactor -> move to new file.
  Method - 2:
- select the component -> click on the yellow bulb -> move to new file.

### Material UI

- Intro : Nov-24- 1.00 min to 1.18 min
- like bootstrap
- more preference is Material UI compared to bootstrap
- Intention : not only for app decoration , also we are going to learn how to apply the external library in your react App.
- introduced by : Google
- learn more : google -> search -> material design -> open the first link
- material design -> instruction for App design

### installation steps.

- before going to install mui , always stop when the react app is running .
- terminal -> new terminal -> once you get your App path in terminal, follow the below steps.
- google -> search -> mui.com -> open first link -> click on `get started` -> see LHS -> click on `installation` -> copy the first npm link and paste it in your terminal and press enter ->
- copy the link under the heading `Google Web Fonts` and paste it in index.html file which is in public at the `head` tag.
- copy the npm link under the heading `Icons` and paste it in your terminal and press enter.
- copy the link under the heading `Google Web Fonts` next to the heading `Icons` and paste it in index.html file which is in public at the `head` tag.

### Check whether the installations completed or not by

- src -> package.json -> check under the `dependencies`
- check the links are present or not in the `index.html` file at the `head` tag
- Once the mui installations completed -> at the terminal -> type `npm start` and press enter.

### mui Components usage in react app

- google -> search -> mui.com -> open first link -> click on `get started` -> see LHS -> click on `Components` -> click on`eg: button` -> choose the button style you want -> copy the particular element and paste in you react app where you want -> then at the above box you can see the tag sign`<>` -> click on it -> copy the import statement and paste it at the top of your folder.
  -> save and run the program.

### task apply highlight and shadow property to cards

- mui -> get started -> components -> surface -> card

### learn and apply chart features in react app

google -> search -> react chart 2 -> open first link
