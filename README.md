# React + Vite

👏 IMPORTANT:

* Requires an API Key that will be submitted to Code You along with the project.
https://docs.google.com/forms/d/e/1FAIpQLScTcSRm4VhhgNHFmk6chQ0S7ppXSa4fzrBpAwlEtaG-aOxxVw/viewform

-------------------------------------------------------------------------------------------------------------------

PROJECT DETAILS:

My project does require an API Key and it was provided to me by Nookipedia API for free!
LINK: https://api.nookipedia.com/

❤️ My project is a Passion Project about Animal Crossing New Horizon. 
It's basically a webpage where I can add information about anything ACNH related like the villagers, events, and creatures in ACNNH and also mini games like the Home page where you can click the tent that says "Knock Knock!!" and it will generate a random Villager that's in your Island campsite. This game mimics the portion of the game where a random Guest will just pop up in your island out of nowhere and you have to knock on the tent to figure out who is the Guest in your Island!

Also under the Bug page, you can input an insect and it will tell you how much Tom Nook is going to pay you for it VS. how much Flick would pay you for it and it will calculate the difference. If you end up typing a bug that's not within the array or if you are inputting wrong characters, it will tell you that it doesn't see it in there.

ACNH is a cozy game and this webpage theme is also built the same! I plan on building more to it as I add more pages using React.

--------------------------------------------------------------------------------------------------------------------

✅ REQUIREMENTS MET:
- Met 10 distinct commits.
- Commits and pushes were made in Gitbash terminal.
- Updated progress using commits.
- Visual Appeal is pretty great I think! I'm happy with it! I did use ChatGPT, Google, and Youtube to figure out how things work.
I have my cheat sheet in the bottom of this README.md and some of the things I learned along the way that I thought was very neat.
- Responsive Design.
- Able to fetch and Display API (Random Villager in Tent)
- Media Query - NavBar buttons & Scroll

✅3 Web Dev Capstone Features.
- React Framework
- Analyze data that is stored in arrays and display it in my app.
- Use a regular expression to validate user input and inform them that they are invalid.



--------------------------------------------------------------------------------------------------------------------

❤️ Things I'm happy about my project:

* The fact that I can build on it more especially since the Navbar has more space for pages if I want to add more stuff!


-----------------------------------------------------------------------------------------

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
          <Route path="/Villagers" element={<Villagers/>}/>
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

    ALIGN-ITEMS:
    - Aligns individual items within a container along the cross axis. (top, center, bottom)

    ALIGN-CONTENT:
    - aligns multiple lines of items (wrap). rows.

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

    FLEX-WRAP: (Got most of the info from ChatGpt, Google, and Code You)
    - flex-wrap: wrap; -> Items will wrap onto new lines
    - wrap-reverse; -> items will wrap, but in reverse order

    FLEX-FLOW:
    - flex-wrap with flex direction (ex. flex-flow: row wrap;)

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
* Dan Collins, Ken, Michael, Blake and Tonia (You guys are the best! Thank you!)


---------------------------------------------------------------------------------------------


