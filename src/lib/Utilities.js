/******** ROW TWO (TOTAL OF PROMOTER/NEUTRAL/DETRACTOR) **************/
export function addTotal(args) {

    let total = 0

    for (let i = 0; i < args.length; i++) {
        if (isNaN(args[i]) || args[i] === '') args[i] = 0
        total += args[i]
    }
    return total
}

/******** ROW THREE (CALCULATE PERCENTAGE of PROMOTER/DETRACTOR) **************/
export function getPercentage(result, maxTotal) {
    result = parseInt(result)
    maxTotal = parseInt(maxTotal)

    return isNaN(Math.floor((result / maxTotal) * 100)) ? 0 : Math.floor((result / maxTotal) * 100)
}

/******** ROW THREE (CALCULATE NPS SCORE (PROMOTER % - DETRACTOR %)) **************/
export function npsTotal(num1, num2) {
    return isNaN(Math.floor(num1 - num2)) ? 0 : Math.floor(num1 - num2)
}



