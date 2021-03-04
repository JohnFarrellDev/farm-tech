import { willSomeCornBeLost } from "./willSomeCornBeLost"

describe ("Will some corn be lost", () => {
    it('No geese is ok', () => {
        expect(willSomeCornBeLost(99,0)).toBeFalsy();
    })

    it('No corn is ok', () => {
        expect(willSomeCornBeLost(0, 99)).toBeFalsy();
    })

    it('One of each is ok', () => {
        expect(willSomeCornBeLost(1,1)).toBeFalsy();
    })

    it('One goose with 2 bags is ok', () => {
        expect(willSomeCornBeLost(2, 1)).toBeFalsy();
    })

    it('One goose with many bags is not ok', () => {
        expect(willSomeCornBeLost(3, 1)).toBeTruthy();
    })

    it ('One bag with many geese is not ok', () => {
        expect(willSomeCornBeLost(1, 2)).toBeTruthy();
    })

    it ('Many of each is not ok', () => {
        expect(willSomeCornBeLost(2,2)).toBeTruthy();
    })
})