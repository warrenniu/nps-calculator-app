import { useCount, useMaxValue, useStartOver } from './totalContext/TotalContext';
import { getPercentage, addTotal, npsTotal } from '../lib/Utilities'

const CalculateNPS = () => {

    const count = useCount()
    const maxValue = useMaxValue()
    const startOver = useStartOver()
    const promoterValue = addTotal([count.ten, count.nine])
    const detractorValue = addTotal([count.six, count.five, count.four, count.three, count.two, count.one])
    const promoterPercentage = getPercentage(parseInt(promoterValue), maxValue)
    const detractorPercentage = getPercentage(parseInt(detractorValue), maxValue)

    return (
        <div className="form-calculate">
            <div className="form-header mobile-margin">
                <h4>Calculate your NPS</h4>
                <p>Subtract the percentage of Detractors from the percentage of Promoters</p>
                <p 
                    className="start-over-text" 
                    onClick={startOver}
                >
                Start over
                </p>
            </div>
            <div className="calculate-input-container">
                
                    <div className="form-nps-promoter">
                        <img className="nps-smiley-face" 
                            src="https://i.imgur.com/ATjTcGg.png" 
                            alt="happy face"
                        >
                        </img>
                        <div className="nps-control">
                            <div className="nps-promoter-percentage">
                                {promoterPercentage}%
                            </div>
                            <br></br>
                            <div className="nps-card-text">of total responses</div>
                        </div>
                    </div>
                

                <h1 className="operation-sign">-</h1>

                
                    <div className="form-nps-detractor">
                        <img className="nps-sad-face" 
                            src="https://i.imgur.com/xTeljtW.png" 
                            alt="sad face"
                        >
                        </img>
                        <div className="nps-control">
                            <div className="nps-detractor-percentage">
                                {detractorPercentage}%
                            </div>
                            <br></br>
                            <div className="nps-card-text">of total responses</div>
                        </div>
                    </div>
                

                <h1 className="operation-sign">=</h1>

                
                    <div className="form-nps-score">
                        <div className="nps-control">
                            <div className="nps-circle">NPS</div>
                            <div className="nps-score-percentage">
                                {npsTotal(promoterPercentage, detractorPercentage)}
                            </div>
                            <br></br>
                            <div className="nps-card-text">This is your NPS</div>
                        </div>
                    </div>
                
            </div>
        </div>
    )
}

export default CalculateNPS
