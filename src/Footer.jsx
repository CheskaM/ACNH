import acnhHeader from './assets/images/acnhHeader.jpg'

function Footer() {
    return(
        <footer>
            <p>&copy; {new Date().getFullYear()} CREDIT: Nookipedia API</p>
            <img className='footer-image' src={acnhHeader} alt="ACNH Island Characters Picture"></img>
        </footer>
    );
}

export default Footer