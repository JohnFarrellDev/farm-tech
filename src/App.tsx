import { TextField } from "@material-ui/core";
import { useState } from "react";
import styled from "styled-components";

const COST_PER_BAG_OF_CORN = 25;

const calculateTotalCost = (numberOfBags: number) => {
  return ((COST_PER_BAG_OF_CORN * numberOfBags * 2)/100).toFixed(2);
}

function App() {

  // purple and green

  const [numberOfBagsOfCorn, setNumberOfBagsOfCorn] = useState(0)
  

  const updatedNumberOfBagsOfCorn = (event: React.ChangeEvent<HTMLInputElement>) => {
    const bagsOfCorn = Number(event.target.value);
    if(bagsOfCorn < 0) return
    setNumberOfBagsOfCorn(bagsOfCorn)
  }

  return (
    <AppContainer>
      <TextField 
        label="Bags of corn"
        type="number"
        placeholder="number of bags of corn"
        onChange={updatedNumberOfBagsOfCorn}
        value={numberOfBagsOfCorn}
      />
      <p>This is the total cost of taking corn to market and coming home again: £{calculateTotalCost(numberOfBagsOfCorn)}</p>
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  background-color: #67e65c;
`
