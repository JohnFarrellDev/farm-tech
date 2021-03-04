import { willSomeCornBeLost, willSomeCornOrGeeseBeLost, willSomeGeeseBeLost } from "./willSomeCornBeLost"

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

describe('Will something be lost when we have foxes as well', () => {
    it('if two of them are zero then ok', () => {
        const resultB = willSomeCornOrGeeseBeLost(1, 0, 0);
        const resultG = willSomeCornOrGeeseBeLost(0, 1, 0);
        const resultF = willSomeCornOrGeeseBeLost(0, 0, 1);
        expect(resultB.losingSome).toBeFalsy();
        expect(resultB.extraTrips).toBe(0);
        expect(resultG.losingSome).toBeFalsy();
        expect(resultG.extraTrips).toBe(0);
        expect(resultF.losingSome).toBeFalsy();
        expect(resultF.extraTrips).toBe(0);
    })

    it('If there are no foxes then existing logic applies', () => {
        const bags = [0, 99, 1, 2, 3];
        const geese = [0, 99, 1, 2, 3];

        bags.forEach(
            (nBags: number) => {
                geese.forEach(
                    (nGeese: number) => {
                        const cornOrGeese = willSomeCornOrGeeseBeLost(nBags, nGeese, 0);
                        const justGeese = willSomeGeeseBeLost(nBags,nGeese);
                        expect(cornOrGeese.losingSome === justGeese.losingSome).toBeTruthy();
                        expect(cornOrGeese.extraTrips === justGeese.extraTrips).toBeTruthy();
                    }
                )
            }
        );
    })

    it('If no bags then existing logic applies but with geese instead of bags and foxes instead of geese', () => {
        const foxes = [0, 99, 1, 2, 3];
        const geese = [0, 99, 1, 2, 3];

        foxes.forEach(
            (nFoxes: number) => {
                geese.forEach(
                    (nGeese: number) => {
                        const foxesOrGeese = willSomeCornOrGeeseBeLost(0, nGeese, nFoxes);
                        const justFoxes = willSomeGeeseBeLost(nGeese, nFoxes);
                        expect(foxesOrGeese.losingSome === justFoxes.losingSome).toBeTruthy();
                        expect(foxesOrGeese.extraTrips === justFoxes.extraTrips).toBeTruthy();
                    }
                )
            }
        );
    })

    it('If no geese, then always ok', () => {
        const foxes = [0, 99, 1, 2, 3];
        const bags = [0, 99, 1, 2, 3];

        foxes.forEach(
            (nFoxes: number) => {
                bags.forEach(
                    (nBags: number) => {
                        const result = willSomeCornOrGeeseBeLost(nBags, 0, nFoxes);
                        expect(result.losingSome).toBeFalsy();
                        expect(result.extraTrips).toBe(0);
                    }
                )
            }
        );
    })

    it('If one of each then ok but with 1 extra trip (with the goose)', () => {
        const result = willSomeCornOrGeeseBeLost(1, 1, 1);
        expect(result.losingSome).toBeFalsy();
        expect(result.extraTrips).toBe(1);
    })

    it('If 2 bags, one goose and 1 fox then not ok', () => {
        const result = willSomeCornOrGeeseBeLost(2, 1, 1);
        expect(result.losingSome).toBeTruthy();
        expect(result.extraTrips).toBe(0);
    })

    it('If 2 geese, one bag and 1 fox then not ok', () => {
        const result = willSomeCornOrGeeseBeLost(1, 2, 1);
        expect(result.losingSome).toBeTruthy();
        expect(result.extraTrips).toBe(0);
    })

    it('If 2 foxes, one goose and 1 bag then not ok', () => {
        const result = willSomeCornOrGeeseBeLost(1, 1, 2);
        expect(result.losingSome).toBeTruthy();
        expect(result.extraTrips).toBe(0);
    })
})