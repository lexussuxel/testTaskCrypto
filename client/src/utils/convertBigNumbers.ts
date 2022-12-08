export function convertBigNumbers(stringNum: string | undefined): string {
    //ковертация больших чисел в более короткий формат
    if (stringNum === undefined)
        return ''
    const num = parseFloat(stringNum);
    switch (true) {
        //если меньше миллиона, возвращаем значение
        case (num < (10e5)) :
            return `${num.toFixed(2)}`;
        //если меньше миллиарда, сокращаем и добавляем m
        case (num < (10e8)) :
            return `${(num / 10e5).toFixed(2)}m`;
        //если остальные пункты не отработали, то число больше и сокращаем до миллиардов и добавляем b
        default:
            return `${(num / 10e8).toFixed(2)}b`;
    }
}