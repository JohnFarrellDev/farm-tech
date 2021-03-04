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
    setWillCornBeLost(result.losingSome);
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
      <Title>Journey Cost Calculator</Title>
      <SubTitle>Items to Bring to Market:</SubTitle>
      <InputContainer>
        <StyledTextField 
          label="Bags of Corn"
          type="number"
          placeholder="number of bags of corn"
          onChange={updatedNumberOfBagsOfCorn}
          value={numberOfBagsOfCorn}
        />
        <StyledTextField 
          label="Geese"
          type="number"
          placeholder="number of geese"
          onChange={updatedNumberOfGeese}
          value={numberOfGeese}
        />
      </InputContainer>
      <p>Total cost of going to market is:</p>
      <CalculatedCost data-testid="total-cost">£{calculateTotalCost(numberOfBagsOfCorn + numberOfGeese + numberOfExtraCrossings)}</CalculatedCost>
      {willCornBeLost ? <Warning>Geese will eat your corn!</Warning>: instructions === '' ? null : <p>{instructions}</p>}
    </AppContainer>
  );
}

export default App;

const Title = styled.h1`
  text-decoration: underline;
  font-size: 2em;
  text-align: center;
  margin: 20px 0px;
`

const SubTitle = styled.h2`
  font-size: 1.5em;
  text-align: center;
  margin: 10px 0px;
`

const CalculatedCost = styled.p`
  font-size: 3em;
  margin: 0;
  color: #B10DC9;
`

const AppContainer = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  background-color: #228B22;
  width: 80%;
  max-width: 800px;
  height: 100vh;

  @media (max-width: 300px) {
    width: 100%;
  }

  div {
    margin: 10px 0px;
  }

  p {
    text-align: center;
  }
`

const InputContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  div:first-child {
    margin-right: 5px;
  }

  div:last-child {
    margin-left: 5px;
  }
`

const StyledTextField = styled(TextField)`
  && {
    max-width: 250px;
    width: 40%;

    input {
      font-size: 2em;
      color: black;
    }

    label {
      font-size: 1.5em;
      color: black;

      @media (max-width: 550px) {
        font-size: 1em;
      }
    }
  }
`

const Warning = styled.p`
  background-color: #f2dede;
  color: #a94442;
  padding: 15px;
  border-radius: 6px;
`