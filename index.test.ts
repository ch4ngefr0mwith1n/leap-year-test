import { isLeapYear } from "./index";
import { describe, test, expect } from "@jest/globals"

describe("Test cases for leap year function", ()=> {
    const leapYears = [2000, 2008, 2012, 2016]
    const nonLeapYearsDivisiblyBy100Not400 = [1700, 1800, 1900, 2100]
    const nonLeapYears = [2017, 2018, 2019]

    leapYears.forEach((year) => {
        test(`${year} is a leap year`, () => {
            expect(isLeapYear(year)).toEqual(true)
        })
    });

    nonLeapYearsDivisiblyBy100Not400.forEach((year) => {
        test(`${year} is not a leap year (divisible by 100, but not by 400)`, ()=> {
            expect(isLeapYear(year)).toEqual(false)
        });
    });

    nonLeapYears.forEach((year) => {
        test(`${year} is not a leap year`, ()=> {
            expect(isLeapYear(year)).toEqual(false)
        });
    });
});
