const COST_PER_BAG_OF_CORN = 25;

// we want to handle decimal inputs (probably round up)
export const calculateTotalCost = (numberOfBags: number) => {
  if(numberOfBags < 0) return "0.00";
  return ((COST_PER_BAG_OF_CORN * numberOfBags * 2)/100).toFixed(2);
}
