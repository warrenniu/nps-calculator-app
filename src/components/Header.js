import '../styles/header.css'

const Header = () => {
    return (
        <header className="container-header">
            <h2 className="container-header-heading">
                Calculate your NPS<span>&reg;</span> (Net Promoter Score)
            </h2>
            <div className="container-header-content">
                <p>
                    Calculating your NPS score is as simple as tallying up your responses and subtracting the percentage of detractors from the percentage of promoters. The score is a whole number that ranges from -100 to 100, and indicates customer happiness with your brand experience.
                </p>
                <p>
                    Use the calculator below to calculate your NPS from your survey responses.
                </p>
            </div>
        </header>
    )
}

export default Header
