import '../styles/footer.css'

const Footer = () => {
    return (
        <footer className="footer-container">
            <p className="footer-header">
                <b>Sign up now</b> and <b>survey 250 customers for free.</b> You're minutes away from getting feedback!
            </p>
            <div className="footer-form-container">
                <form className="footer-form">
                    <input
                        className="form-input-email"
                        placeholder="Your email address"
                    >
                    </input>
                </form>

                <form className="footer-form">
                    <input
                        className="form-input-password"
                        placeholder="Choose a password"
                    >
                    </input>
                </form>

                <div className="get-started-button">Get started</div>

                <div className="or-word">or</div>

                <div className="google-button">
                    <img className="google-image"
                        src="https://i.imgur.com/0pVs4L4.png"
                        alt="google symbol"
                    >
                    </img>
                    Sign up with Google
                </div>
            </div>
            <p className="footer-contact">
                Work in a large organization or have unique needs? <u>Contact our sales team</u>
            </p>
        </footer>
    )
}

export default Footer
