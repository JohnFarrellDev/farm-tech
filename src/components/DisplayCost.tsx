
import styled from "styled-components"
import { calculateTotalCost } from "../utils/calculateTotalCost"

interface DisplayCostI {
  numberOfItems: number;
}

export const DisplayCost = ({numberOfItems}: DisplayCostI) => (
  <>
    <p>Total cost of going to market is:</p>
    <CalculatedCost data-testid="total-cost">£{calculateTotalCost(numberOfItems)}</CalculatedCost>
  </>
)

const CalculatedCost = styled.p`
  font-size: 3em;
  margin: 0;
  color: #B10DC9;
`