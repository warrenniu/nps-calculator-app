import { useCount, useUpdateCount } from './totalContext/TotalContext';

const CountResponse = () => {

    const count = useCount()
    const handleChange = useUpdateCount()

    return (
        <div className="form-count">
            <div className="form-header mobile-margin">
                <h4>Count the responses</h4>
                <p>Add up the number of responses provided for each score</p>
            </div>

            <form>
                <div className="nps-calculator-tag">
                    NPS CALCULATOR
                </div>
                <div className="form-count-promoter mobile-margin">
                    <img className="count-smiley-face"
                        src="https://i.imgur.com/ATjTcGg.png"
                        alt="happy face"
                    />
                    <div className="group-control">
                        <div className="input-control">
                            <div className="form-label">
                                10
                            </div>
                            <input
                                className='form-input-promoter'
                                value={count.ten}
                                name="ten"
                                onChange={handleChange}
                                type='text'
                            >
                            </input>
                        </div>
                        <div className="input-control">
                            <div className="form-label">
                                9
                            </div>
                            <input
                                className='form-input-promoter'
                                value={count.nine}
                                name="nine"
                                onChange={handleChange}
                                type='text'
                            >
                            </input>
                        </div>
                    </div>
                </div>
            </form>

            <form>
                <div className="form-count-neutral mobile-margin">
                    <img className="count-neutral-face"
                        src="https://i.imgur.com/5NBdMW8.png" 
                        alt="neutral face"
                    />
                    <div className="group-control">
                        <div className="input-control">
                            <div className="form-label">
                                8
                            </div>
                            <input
                                className='form-input-neutral'
                                value={count.eight}
                                name="eight"
                                onChange={handleChange}
                                type='text'
                            >
                            </input>
                        </div>
                        <div className="input-control">
                            <div className="form-label">
                                7
                            </div>
                            <input
                                className='form-input-neutral'
                                value={count.seven}
                                name="seven"
                                onChange={handleChange}
                                type='text'
                            >
                            </input>
                        </div>
                    </div>
                </div>
            </form>

            <form>
                <div className="form-count-detractor">
                    <img className="count-sad-face" 
                        src="https://i.imgur.com/xTeljtW.png" 
                        alt="sad face"
                    />
                    <div className="group-control">
                        <div className="input-control">
                            <div className="form-label">
                                6
                            </div>
                            <input
                                className="form-input-detractor"
                                value={count.six}
                                name="six"
                                onChange={handleChange}
                                type='text'
                            >
                            </input>
                        </div>
                        <div className="input-control">
                            <div className="form-label">
                                5
                            </div>
                            <input
                                className="form-input-detractor"
                                value={count.five}
                                name="five"
                                onChange={handleChange}
                                type='text'
                            >
                            </input>
                        </div>
                        <div className="input-control">
                            <div className="form-label">
                                4
                            </div>
                            <input
                                className="form-input-detractor"
                                value={count.four}
                                name="four"
                                onChange={handleChange}
                                type='text'
                            >
                            </input>
                        </div>
                        <div className="input-control">
                            <div className="form-label">
                                3
                            </div>
                            <input
                                className="form-input-detractor"
                                value={count.three}
                                name="three"
                                onChange={handleChange}
                                type='text'
                            >
                            </input>
                        </div>
                        <div className="input-control">
                            <div className="form-label">
                                2
                            </div>
                            <input
                                className="form-input-detractor"
                                value={count.two}
                                name="two"
                                onChange={handleChange}
                                type='text'
                            >
                            </input>
                        </div>
                        <div className="input-control">
                            <div className="form-label">
                                1
                            </div>
                            <input
                                className="form-input-detractor"
                                value={count.one}
                                name="one"
                                onChange={handleChange}
                                type='text'
                            >
                            </input>
                        </div>
                        <div className="input-control">
                            <div className="form-label">
                                0
                            </div>
                            <input
                                className="form-input-detractor"
                                value={count.zero}
                                name="zero"
                                onChange={handleChange}
                                type='text'
                            >
                            </input>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default CountResponse
