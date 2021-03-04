import { TextField } from "@material-ui/core";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { calculateTotalCost } from "./utils/calculateTotalCost";
import { willSomeCornBeLost } from "./utils/willSomeCornBeLost";

function App() {

  const [numberOfBagsOfCorn, setNumberOfBagsOfCorn] = useState(0)
  const [numberOfGeese, setNumberOfGeese] = useState(0)
  const [numberOfExtraCrossings, setNumberOfExtraCrossings] = useState(0)
  const [instructions, setInstructions] = useState('');
  const [willCornBeLost, setWillCornBeLost] = useState(false);

  useEffect(() => {
    const result = willSomeCornBeLost(numberOfBagsOfCorn, numberOfGeese);
    setWillCornBeLost(result.losingCorn);
    setNumberOfExtraCrossings(result.extraTrips);
    setInstructions(result.instructions);
  }, [numberOfBagsOfCorn, numberOfGeese])

  const updatedNumberOfBagsOfCorn = (event: React.ChangeEvent<HTMLInputElement>) => {
    const bagsOfCorn = Number(event.target.value);
    if(bagsOfCorn < 0) return
    setNumberOfBagsOfCorn(bagsOfCorn)
  }
  
  const updatedNumberOfGeese = (event: React.ChangeEvent<HTMLInputElement>) => {
    const geese = Number(event.target.value);
    if(geese < 0) return
    setNumberOfGeese(geese)
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
      <TextField 
        label="Geese"
        type="number"
        placeholder="number of geese"
        onChange={updatedNumberOfGeese}
        value={numberOfGeese}
      />
      <p data-testid="total-cost">This is the total cost of taking corn and geese to market and coming home again: £{calculateTotalCost(numberOfBagsOfCorn + numberOfGeese + numberOfExtraCrossings)}</p>
      {willCornBeLost ? <p><em>Warning: Geese will eat your corn!</em></p>: instructions === '' ? null : <p>{instructions}</p>}
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  background-color: #67e65c;
`
