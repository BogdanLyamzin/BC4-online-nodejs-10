const isLeapYear = (year)=> {
    if(year === undefined){
        throw new Error("Аргумент является обязательным")
    }
    if(typeof year !== "number") {
        throw new Error("Аргумент должен иметь тип Number")
    }
    if(!Number.isInteger(year)){
        throw new Error("Аргумент должно быть целым числом")
    }

    const selectDate = new Date(year, 2, 0);
    const dayInFebruary = selectDate.getDate();
    return (dayInFebruary === 29)
}

module.exports = isLeapYear;