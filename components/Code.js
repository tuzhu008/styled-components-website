import styled from 'styled-components'
import { monospace } from '../utils/fonts'

const Code = styled.span`
  display: inline-block;
  font-family: ${monospace};
  font-size: 90%;
  font-weight: 300;
  padding: 0 0.05em 0.1em;
  border-radius: 3px;
  vertical-align: baseline;
  line-height: 1.4;
  color: #66B2A7;
  background-color: #F5F4D6;
`

export default Code
