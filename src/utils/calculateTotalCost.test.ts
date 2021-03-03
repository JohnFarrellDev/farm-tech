import { calculateTotalCost } from "./calculateTotalCost";

describe('CalculateTotalCost', () => {

    it('Should return 0 if 0 numberOfBags input', () => {
        expect(calculateTotalCost(0)).toBe("0.00");
    })

    it('Should return 0 if negative numberOfBags input', () => {
        expect(calculateTotalCost(-1)).toBe("0.00");
    })

    it('Should return 5 if 10 numberOfBags input', () => {
        expect(calculateTotalCost(10)).toBe("5.00");
    })
})
