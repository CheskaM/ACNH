# React + Vite

Requires an API Key that will be submitted to Code You along with the project.
https://docs.google.com/forms/d/e/1FAIpQLScTcSRm4VhhgNHFmk6chQ0S7ppXSa4fzrBpAwlEtaG-aOxxVw/viewform

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
import Header from './Header.jsx'
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





INDEX: 

HashRouter - wraps everything 
Routes - component that maps all potential route
Route - component we use for each individual page.

-----------------------------------------------------------------------------------------

Cool Shortcuts:

* HashRouter as Router during import in Apps. This creates a nickname Router for HashRouter.

---------------------------------------------------------------------------------------------
CREDIT:

* React JS Tutorial - #7 - Multiple Pages = https://www.youtube.com/watch?v=qi32YwjoN2U


● Commits and pushes must be done through the terminal/command line . 
Commits pushed through Git Hub’s “File Upload” button will not be counted. 
● Use Git commands consistently to demonstrate ongoing progress, not just a final upload. 
README File A README file serves as a roadmap for your project, providing essential details to ensure clarity and accessibility for collaborators and reviewers.

Requirements: 
● Write a detailed README file explaining your project in at least one paragraph. 
● Identify and describe three or more features you integrated from the provided list. 
● Make a fetch request to an API and use the response in a meaningful way 
● Include any special instructions for reviewers to run your project.