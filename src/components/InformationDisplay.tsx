import React from 'react'
import styled from 'styled-components'
import { IoMdInformationCircleOutline } from 'react-icons/io'

interface InformationDisplayI {
  information: string[];
}

export const InformationDisplay = ({information}: InformationDisplayI) => {
  return (
    <Information>
      <Heading>
        <InformationIcon />
        <p>Crossing Instructions!</p>
        <InformationIcon />
      </Heading>
      <ol>
        {information.map((instruction) => (
          <li>{instruction}</li>
        ))}
      </ol>
    </Information>
  )
}

const Information = styled.div`
  background-color: #d9edf7;
  border: 1px solid #3dbdd7;
  color: black;
  padding: 5px 15px 5px 15px;
  border-radius: 6px;
  max-width: 80%;

  li {
    text-align: left;
  }
`

const Heading = styled.div`
  display: flex;
  justify-content: space-around;
  color: blue;
  align-items: center;
`

const InformationIcon = styled(IoMdInformationCircleOutline)`
  font-size: 2em;
  padding: 0px 5px;
`