import React from 'react'
import styled from 'styled-components'
import {AiOutlineWarning} from 'react-icons/ai'

interface WarningDisplayI {
  warnings: string[];
}

export const WarningDisplay = ({warnings}: WarningDisplayI) => {
  return (
    <Warning>
      <Heading>
        <WarningIcon />
        <p>Warning!</p>
        <WarningIcon />
      </Heading>
      <ul>
        {warnings.map((warning) => (
          <li>{warning}</li>
        ))}
      </ul>
    </Warning>
  )
}

const Warning = styled.div`
  background-color: #f2dede;
  border: 1px solid #c77070;
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
  color: red;
  align-items: center;
`

const WarningIcon = styled(AiOutlineWarning)`
  font-size: 2em;
  padding: 0px 0px 0px 5px;
`