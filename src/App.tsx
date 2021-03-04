import { useEffect, useState } from "react";
import styled from "styled-components";
import { InputControls } from "./components/InputControls";
import { DisplayCost } from "./components/DisplayCost";
import { WarningDisplay } from "./components/WarningDisplay";
import { InformationDisplay } from "./components/InformationDisplay"
import { willSomeCornBeLost } from "./utils/willSomeCornBeLost";

function App() {

  const [numberOfBagsOfCorn, setNumberOfBagsOfCorn] = useState("0")
  const [numberOfGeese, setNumberOfGeese] = useState("0")
  const [numberOfExtraCrossings, setNumberOfExtraCrossings] = useState(0)
  const [instructions, setInstructions] = useState('');
  const [willCornBeLost, setWillCornBeLost] = useState(false);

  useEffect(() => {
    const result = willSomeCornBeLost(Number(numberOfBagsOfCorn), Number(numberOfGeese));
    setWillCornBeLost(result.losingSome);
    setNumberOfExtraCrossings(result.extraTrips);
    setInstructions(result.instructions);
  }, [numberOfBagsOfCorn, numberOfGeese])

  const updatedNumberOfBagsOfCorn = (event: React.ChangeEvent<HTMLInputElement>) => {
    const bagsOfCorn = Number(event.target.value);

    if(Number.isNaN(bagsOfCorn) || bagsOfCorn === 0 || bagsOfCorn < 0) {
      setNumberOfBagsOfCorn("");
    } else {
      setNumberOfBagsOfCorn(event.target.value)
    }
  }
  
  const updatedNumberOfGeese = (event: React.ChangeEvent<HTMLInputElement>) => {
    const geese = Number(event.target.value);
    
    if(Number.isNaN(geese) || geese === 0 || geese < 0) {
      setNumberOfGeese("");
    } else {
      setNumberOfGeese(event.target.value)
    }
  }

  return (
    <AppContainer>
      <Title>Journey Cost Calculator</Title>
      <Subheading>Items to Bring to Market:</Subheading>
      <InputControls 
        updatedNumberOfBagsOfCorn={updatedNumberOfBagsOfCorn}
        numberOfBagsOfCorn={numberOfBagsOfCorn}
        updatedNumberOfGeese={updatedNumberOfGeese}
        numberOfGeese={numberOfGeese}
      />
      <DisplayCost 
        numberOfItems={Number(numberOfBagsOfCorn) + Number(numberOfGeese) + numberOfExtraCrossings}
      />
      {/* should have string arrays to pass in via variables once other work completed */}
      {willCornBeLost ? <WarningDisplay warnings={["Geese will eat corn"]} /> : null}
      {instructions ? <InformationDisplay information={[instructions]} /> : null}
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

const Subheading = styled.h2`
  font-size: 1.5em;
  text-align: center;
  margin: 10px 0px;
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