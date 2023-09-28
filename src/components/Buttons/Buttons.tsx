import { styled } from "styled-components"

const QueryButton = styled.button`
cursor: pointer;
  &:active{
    transform: scale(90%,90%);
  }

  @media only screen and (max-width:700px){
    &:hover{
     transform: scale(90%,90%);
    }
  }
`

const Buttons = () => {

  return (
    <QueryButton>Consultar</QueryButton>
  )
}

export default Buttons