import { useCount } from './totalContext/TotalContext';
import { addTotal } from '../lib/Utilities'

const GroupResponse = () => {

    const count = useCount()

    return (
        <div className="form-group">
            <div className="form-header mobile-margin">
                <h4>Group the responses</h4>
                <p>Add up the total number of responses provided for each Group</p>
            </div>

            <form>
                <div className="form-group-promoter mobile-margin">
                    <div className="group-control">
                        <div className="group-input-control">
                            <img className="group-smiley-face"
                                src="https://i.imgur.com/ATjTcGg.png"
                                alt="Happy Face"
                            >
                            </img>
                            <div className="form-label">
                                Total
                            </div>
                            <input
                                readOnly
                                className="form-input-promoter"
                                value={addTotal([count.ten, count.nine])}
                                name="promoterTotal"
                                type="text"
                            >
                            </input>
                        </div>
                    </div>
                </div>
            </form>

            <form>
                <div className="form-group-neutral mobile-margin">
                    <div className="group-control">
                        <div className="group-input-control">
                            <img className="group-smiley-face"
                                src="https://i.imgur.com/5NBdMW8.png"
                                alt="Happy Face"
                            >
                            </img>
                            <div className="form-label">
                                Total
                            </div>
                            <input
                                readOnly
                                className="form-input-neutral"
                                value={addTotal([count.eight, count.seven])}
                                name="neutralTotal"
                                type="text"
                            >
                            </input>
                        </div>
                    </div>
                </div>
            </form>

            <form>
                <div className="form-group-detractor">
                    <div className="group-control">
                        <div className="group-input-control">
                            <img className="group-smiley-face"
                                src="https://i.imgur.com/xTeljtW.png"
                                alt="Happy Face"
                            >
                            </img>
                            <div className="form-label">
                                Total
                            </div>
                            <input
                                readOnly
                                className="form-input-detractor"
                                value={addTotal([count.six, count.five, count.four, count.three, count.two, count.one, count.zero])}
                                name="detractorTotal"
                                type="text"
                            >
                            </input>
                        </div>
                    </div>
                </div>

            </form>
        </div>
    )
}

export default GroupResponse
