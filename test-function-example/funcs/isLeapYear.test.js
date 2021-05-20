const isLeapYear = require("./isLeapYear");
/*
1. Получает целое число.
2. Возвращает true или false. 

Входящие данные:
2008 -> true
2003 -> false
2000 -> true
1900 -> false
2008.4 -> Проброс ошибки "Число должно быть целым"
"2008" -> Проброс ошибки "Аргумент должен иметь тип Number"
true -> Проброс ошибки "Аргумент должен иметь тип Number"
false -> Проброс ошибки "Аргумент должен иметь тип Number"
null -> Проброс ошибки "Аргумент должен иметь тип Number"
{} / [] -> Проброс ошибки "Аргумент должен иметь тип Number"
без аргумента -> Проброс ошибки "Аргумент является обязательным"
*/

describe("Test isLeapYear function", ()=> {
    // beforeAll(()=> console.log("Функция, которая запускается перед тестами"));

    // afterAll(()=> console.log("Функция, которая запускается после всех тестов"));

    // beforeEach(()=> console.log("Функция, которая запускается перед каждый тестом"));

    // afterEach(()=> console.log("Функция, которая запускается после каждого теста"))
    test("2008 - leap year", ()=> {
        expect(isLeapYear(2008)).toBe(true)
    })
    test("2003 - not leap year", ()=> {
        expect(isLeapYear(2003)).toBe(false)
    })
    test("2000 - leap year", ()=> {
        expect(isLeapYear(2000)).toBe(true)
    })
    test("1900 - not leap year", ()=> {
        expect(isLeapYear(1900)).toBe(false)
    })
    test("Missing argument - argument must be exist", ()=> {
        expect(()=>isLeapYear()).toThrow("Аргумент является обязательным")
    })
    test("2008.4 - argument must be integer", ()=> {
        expect(()=>isLeapYear(2008.4)).toThrow("Аргумент должно быть целым числом")
    })
    test("'2008' - argument must has type Number", ()=> {
        expect(()=>isLeapYear("2008")).toThrow("Аргумент должен иметь тип Number")
    })
    test("null - argument must has type Number", ()=> {
        expect(()=>isLeapYear(null)).toThrow("Аргумент должен иметь тип Number")
    })
    test("true - argument must has type Number", ()=> {
        expect(()=>isLeapYear(true)).toThrow("Аргумент должен иметь тип Number")
    })
    test("false - argument must has type Number", ()=> {
        expect(()=>isLeapYear(false)).toThrow("Аргумент должен иметь тип Number")
    })
    test("{} - argument must has type Number", ()=> {
        expect(()=>isLeapYear({})).toThrow("Аргумент должен иметь тип Number")
    })
    test("[] - argument must has type Number", ()=> {
        expect(()=>isLeapYear([])).toThrow("Аргумент должен иметь тип Number")
    })
})