import TextField from "@material-ui/core/TextField/TextField"
import styled from "styled-components"

interface InputControlsI {
  updatedNumberOfBagsOfCorn: (event: React.ChangeEvent<HTMLInputElement>) => void;
  numberOfBagsOfCorn: string;
  updatedNumberOfGeese: (event: React.ChangeEvent<HTMLInputElement>) => void;
  numberOfGeese: string;
}

export const InputControls = ({
  updatedNumberOfBagsOfCorn, 
  numberOfBagsOfCorn, 
  updatedNumberOfGeese, 
  numberOfGeese
}: InputControlsI) => (
  <InputContainer>
      <StyledTextField 
        label="Bags of Corn"
        type="number"
        placeholder="Corn"
        onChange={updatedNumberOfBagsOfCorn}
        value={numberOfBagsOfCorn}
        inputProps={{
          min: 0
        }}
      />
      <StyledTextField 
        label="Geese"
        type="number"
        placeholder="Geese"
        onChange={updatedNumberOfGeese}
        value={numberOfGeese}
        inputProps={{
          min: 0
        }}
      />
  </InputContainer>
)

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

      @media (max-width: 550px) {
          font-size: 1em;
        }

      ::placeholder {
        font-size: 0.75em;
      }
    }

    label {
      font-size: 1.5em;
      color: black;

      @media (max-width: 550px) {
        font-size: 1em;
      }

      @media (max-width: 400px) {
        font-size: 0.75em;
      }
    }
  }
`
