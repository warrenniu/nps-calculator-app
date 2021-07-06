import React, { useContext, useState, useEffect } from "react";

const CountContext = React.createContext()
const CountUpdateContext = React.createContext()
const MaxValueContext = React.createContext()
const ClearStateContext = React.createContext()

//Custom Hooks
export function useCount() {
    return useContext(CountContext)
}
    
export function useUpdateCount() {
    return useContext(CountUpdateContext)
}

export function useMaxValue() {
    return useContext(MaxValueContext)
}

export function useStartOver() {
    return useContext(ClearStateContext)
}


export function TotalProvider({ children }) {

    const [count, setCount] = useState({
        zero: '',
        one: '',
        two: '',
        three: '',
        four: '',
        five: '',
        six: '',
        seven: '',
        eight: '',
        nine: '',
        ten: '',
    })

    function changeHandler(e) {
        setCount({ ...count, [e.target.name]: isNaN(parseInt(e.target.value)) ? '' : parseInt(e.target.value) })

    }

    

    const [cumulativeTotal, setCumulativeTotal] = useState(0)

    //get total value of all inputs
    useEffect(() => {
        let maxTotal = 0
        const tempState = { ...count }
        for (const number in tempState) {
            if (tempState[number] === '' || isNaN(tempState[number])) tempState[number] = 0
            maxTotal += tempState[number]
        }
        setCumulativeTotal(maxTotal)
    }, [count])




    //clear state for "Start over" function
    function clearState() {
        setCount({
            zero: '',
            one: '',
            two: '',
            three: '',
            four: '',
            five: '',
            six: '',
            seven: '',
            eight: '',
            nine: '',
            ten: '',
        })
    }

    return (
        <CountContext.Provider value={count}>
            <MaxValueContext.Provider value={cumulativeTotal}>
                <CountUpdateContext.Provider value={changeHandler}>
                    <ClearStateContext.Provider value={clearState}>
                        {children}
                    </ClearStateContext.Provider>
                </CountUpdateContext.Provider>
            </MaxValueContext.Provider>
        </CountContext.Provider>

    )

}
