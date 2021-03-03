const COST_PER_BAG_OF_CROSSING = 25;

// we want to handle decimal inputs (probably round up)
export const calculateTotalCost = (numberOfItems: number) => {
  if(numberOfItems < 0) return "0.00";
  return ((COST_PER_BAG_OF_CROSSING * numberOfItems * 2)/100).toFixed(2);
}
