import './scss/App.css'
import QueryBox from './components/QueryBox'
import Button from './components/Buttons/Buttons.tsx'
import { styled } from 'styled-components'


const App = () => {

  const Container__article = styled.article`
    text-align: center;
    input,button{
      padding: 1rem 2rem;
    }
  `

  return (
    <>
      <div className="container">
        <div className="container__text">
          <h1>Consulte todas as informações do seu CNPJ de forma gratuíta</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate dicta, consequuntur atque accusantium temporibus dolorum recusandae alias enim maxime eius sequi ipsa, dignissimos, ducimus vitae labore! Accusantium sint magnam modi.</p>
        </div>
        <Container__article>
          <QueryBox />
          <Button />
        </Container__article>
        <table className="container__table">
          <tr>
            <td>info 1</td>
            <td>info 2</td>
            <td>info 3</td>
            <td>info 4</td>
          </tr>
        </table>
      </div>
    </>
  )
}

export default App