import '../styles/header.css'

const Header = () => {
    return (
        <>
            <div className="container-navigation">
                <h4 className="navigation-menu">Product</h4>
                <h4 className="navigation-menu">Customers</h4>
                <h4 className="navigation-menu">Enterprise</h4>
                <h4 className="navigation-menu">Pricing</h4>
                <span className="menu-break" />
                <h4 className="navigation-menu">Help</h4>
                <h4 className="navigation-menu">Get started for free</h4>
                <h4 className="navigation-menu">Sign in</h4>
            </div>
            <header className="container-header">
                <h1 className="container-header-heading">
                    Calculate your NPS<span>&reg;</span> (Net Promoter Score)
                </h1>
                <div className="container-header-content">
                    <p>
                        Calculating your NPS score is as simple as tallying up your responses and subtracting the percentage of detractors from the percentage of promoters. The score is a whole number that ranges from -100 to 100, and indicates customer happiness with your brand experience.
                    </p>
                    <p>
                        Use the calculator below to calculate your NPS from your survey responses.
                    </p>
                </div>
            </header>
        </>
    )
}

export default Header
