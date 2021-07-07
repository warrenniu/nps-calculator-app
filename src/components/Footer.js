import '../styles/footer.css'

const Footer = () => {
    return (
        <footer className="footer-container">
            <p className="footer-header">
                Interested in improving your customer experience with NPS?
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
            <div className="footer-contact">
                <img className="twitter-image" 
                    src="https://i.imgur.com/q7cemcG.png" 
                    alt="twitter logo">
                </img>
                <img className="facebook-image" 
                    src="https://i.imgur.com/2ddHFhI.png" 
                    alt="facebook logo">
                </img>
            </div>
            
        </footer>
    )
}

export default Footer
