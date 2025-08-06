# React + Vite

👏 IMPORTANT:

* Requires an API Key that will be submitted to Code You along with the project.
https://docs.google.com/forms/d/e/1FAIpQLScTcSRm4VhhgNHFmk6chQ0S7ppXSa4fzrBpAwlEtaG-aOxxVw/viewform

--------------------------------------------------------------------------------------------------------------------

❤️ Things I'm happy about my project:

* The fact that I can build on it more especially since the Navbar has more space for pages if I want to add more stuff!

--------------------------------------------------------------------------------------------------------------------

/*This should showcase all the Bugs that are in ACNH and can be sorted alphabetically*/


import {useEffect} from 'react'

function Bugs() {
    const apiKey = import.meta.env.VITE_API_KEY; /*we do this portion so we don't expose our apiKey, this is strictly for Vite */

    useEffect(() => {
        fetch('https://api.nookipedia.com/nh/bugs', {
            headers: {
                'X-API-KEY': apiKey,
                'Accept-Version': '1.7.0'
            }
        })
        .then(response => {
            if(!response.ok) {
                throw new Error('API key is not working');
            }
            return response.json();
        })
        .then(bugs => console.log(`There's Bugs data present here.`, bugs))
        .catch(err => console.error(`Error`, err.message));
    }, []);

    return(
        <nav>
            <ul>
                <li><a href="#">BUGS</a></li>
            </ul>
        </nav>
    );

}

export default Bugs



-----------------------------------------------------------------------------------------

/*This should showcase all the Fish that are in ACNH and can be sorted alphabetically*/


import {useEffect} from 'react'

function Fish() {
    const apiKey = import.meta.env.VITE_API_KEY; /*we do this portion so we don't expose our apiKey, this is strictly for Vite */

    useEffect(() => {
        fetch('https://api.nookipedia.com/nh/fish', {
            headers: {
                'X-API-KEY': apiKey,
                'Accept-Version': '1.7.0'
            }
        })
        .then(response => {
            if(!response.ok) {
                throw new Error('API key is not working');
            }
            return response.json();
        })
        .then(fish => console.log(`There's Fish data present here.`, fish))
        .catch(err => console.error(`Error`, err.message));
    }, []);

    return(
        <nav>
            <ul>
                <li><a href="#">FISH</a></li>
            </ul>
        </nav>
    );

}

export default Fish


-----------------------------------------------------------------------------------------

import Footer from './Footer.jsx'
import Tent from './Tent.jsx'
import Button from './Button.jsx'
import MainNavigation from './MainNavigation.jsx';

  return (
    <>
      <Header/> 
      <MainNavigation/>
      <Tent/>
      <Button/>
      <Footer/>
    </>
  );

------------------------------------------------------------------------------
-----------------------------------------------------------------------------



INDEX: 

* HashRouter - wraps everything 
* Routes - component that maps all potential route
* Route - component we use for each individual page.

-----------------------------------------------------------------------------------------

Cool Things I Learned:

* HashRouter as Router during import in Apps. This creates a nickname Router for HashRouter.
* The Layout.jsx is the parent route to the rest of the route. - This made a lot of sense and this is how I implemented it.
* The Outlet helps to have the Navbar in every page. - This is so helpful in navigating back and forth.

Layout.jsx

import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import { Home } from './Pages/Home'
import { Bugs } from './Pages/Bugs'
import { Fish } from './Pages/Fish'
import { VillagerInfo } from './Pages/VillagerInfo'
import { Layout } from './Layout'

function App() {

  return (
    <Router>
      <Routes>
        <Route element={<Layout/>}> /*This is the Parent Route, and below are the child routes*/
          <Route path="/" element={<Home/>}/>
          <Route path="/Bugs" element={<Bugs/>}/>
          <Route path="/Fish" element={<Fish/>}/>
          <Route path="/VillagerInfo" element={<VillagerInfo/>}/>
        </Route>

      </Routes>
    </Router>
  )
  
}

export default App

* CSS:
    - /* */ - to make a Comment (I love comments. The me when I first learned something might not be the Me the next day.)
    - .button -> Global Style
    - transition: border-color 0.25s; -> animation between states: / what you want to animate / duration os the animation(s)
    - background-color: hsl(hue, saturation% , lightness%);

    TEXT/FONT:
    - color: white; -> This is the color of the TEXT

    - font-weight: how bold or light the text appears. (Googled)
                  -> Common Values:
                        normal: Default weight of the font (typically 400).
                        bold: Makes the text bold (typically 700).
                        lighter: Makes the text lighter than the parent element's font weight.
                        bolder: Makes the text bolder than the parent element's font weight.

                    Numeric values: Ranges from 100 (thin) to 900 (extra-bold), with increments like:
                        100 (Thin)
                        200 (Extra Light)
                        300 (Light)
                        400 (Normal)
                        500 (Medium)
                        600 (Semi-Bold)
                        700 (Bold)
                        800 (Extra Bold)
                        900 (Black)

    PADDING: (Got this info from Google and Code:You)
    - is used to create space around an element's content, inside any defined borders. 
    - This space is the area between the content of the element and its border
    - part of the box model so if you use box-sizing: border-box; , it will not work.
    - padding: 25px 50px 75px 100px; /* top, right, bottom, left */
    - One value: sets the same padding for all four sides.
    - Two values: sets vertical and horizontal padding separately.
    - Three values: sets top, horizontal, and bottom padding.
    - Four values: sets padding individually for top, right, bottom, and left sides.
    
    BORDERS: (Got most of this info from ChatGPT, Google, and Code:You)
    - border-radius: px; -> This is if you want rounded corners.
    - border: none; -> If you want no Borders.
    - border: 1px solid transparent; -> thickness(px) / not dashed or dotted / invisible

    CURSOR:
    - cursor: pointer; -> so it hovers as a Pointer when hovering on it.

    HOVER:
    - -webkit-focus-ring-color -> that blue glow-style ring around the button.

    UNIT: (Got this info from ChatGPT, asked what's the difference between the units.)
    - em -> ex. if the font-size: 2 em; (This means that it's = to 2x the paren't font size) 
         -> mostly use as the font-size parent if no parent size is set. 
         -> used mostly in font-sizing or spacing (padding)

    - %  -> ex: width: 50%; (This means that it's = to 50% of the parent's width.)
         -> this often is relative to the parent element's size (width/height).
         -> used mostly in Layout, widths, or heights ()

    - px -> pixel thick
         -> used in (Border)


---------------------------------------------------------------------------------------------
CREDIT:

* React JS Tutorial - #7 - Multiple Pages => https://www.youtube.com/watch?v=qi32YwjoN2U
* Nookipedia for their API => https://api.nookipedia.com/
* React Full Course for free ⚛️ (2024) => https://www.youtube.com/watch?v=CgkZ7MvWUAA&t=5520s
* CSS Z Index Property: What is CSS Z-Index, Stacking Order, and Why Your Z-Index Is Not Working? 
  => https://www.youtube.com/watch?v=vo1JBj-OAa8
* Dan
* Ken



---------------------------------------------------------------------------------------------

README.md Instruction:

● Commits and pushes must be done through the terminal/command line . 
Commits pushed through Git Hub’s “File Upload” button will not be counted. 
● Use Git commands consistently to demonstrate ongoing progress, not just a final upload. 
README File A README file serves as a roadmap for your project, providing essential details to ensure clarity and accessibility for collaborators and reviewers.

Requirements: 
● Write a detailed README file explaining your project in at least one paragraph. 
● Identify and describe three or more features you integrated from the provided list. 
● Make a fetch request to an API and use the response in a meaningful way 
● Include any special instructions for reviewers to run your project.