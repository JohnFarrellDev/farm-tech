import { willSomeCornBeLost } from "./willSomeCornBeLost"

describe ("Will some corn be lost", () => {
    it('No geese is ok', () => {
        const result = willSomeCornBeLost(99,0);
        expect(result.losingSome).toBeFalsy();
        expect(result.extraTrips).toBe(0);
    })

    it('No corn is ok', () => {
        const result = willSomeCornBeLost(0,99);
        expect(result.losingSome).toBeFalsy();
        expect(result.extraTrips).toBe(0);
    })

    it('One of each is ok', () => {
        const result = willSomeCornBeLost(1,1);
        expect(result.losingSome).toBeFalsy();
        expect(result.extraTrips).toBe(0);
    })

    it('One goose with 2 bags is ok but needs an extra crossing', () => {
        const result = willSomeCornBeLost(2,1);
        expect(result.losingSome).toBeFalsy();
        expect(result.extraTrips).toBe(1);
    })

    it('One goose with many bags is not ok', () => {
        const result = willSomeCornBeLost(3,1);
        expect(result.losingSome).toBeTruthy();
        expect(result.extraTrips).toBe(0);
    })

    it ('One bag with 2 geese is ok but needs an extra crossing', () => {
        const result = willSomeCornBeLost(1,2);
        expect(result.losingSome).toBeFalsy();
        expect(result.extraTrips).toBe(1);
    })

    it ('One bag with many geese is not ok', () => {
        const result = willSomeCornBeLost(1,3);
        expect(result.losingSome).toBeTruthy();
        expect(result.extraTrips).toBe(0);
    })

    it ('Many of each is not ok', () => {
        const result = willSomeCornBeLost(2,2);
        expect(result.losingSome).toBeTruthy();
        expect(result.extraTrips).toBe(0);
    })
})