import { styled } from "styled-components"

const QueryBox = () => {

    
    const Styled__queryBox = styled.a`
    color: #fff;
`

    return (
        <Styled__queryBox>
            <input type="number" placeholder="Informe aqui o CNPJ" />
        </Styled__queryBox>
    )
}

export default QueryBox