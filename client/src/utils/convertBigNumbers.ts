export function convertBigNumbers(stringNum: string | undefined): string {
    if (stringNum === undefined)
        return ''
    const num = parseFloat(stringNum)
    switch (true) {
        case (num < (10e5)) :
            return `${num.toFixed(2)}`;
        case (num < (10e8)) :
            return `${(num / 10e5).toFixed(2)}m`;
        default:
            return `${(num / 10e8).toFixed(2)}b`;
    }
}
