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

  const Container__text = styled.div`
    text-align: center;
    margin:1rem 0;
    h1{
      font-size: 3rem;
      color: #e3e3e3;
      font-family: 'bebas neue';
    }
    p{
      width: 50%;
      margin: 0 auto;
      color: #e3e3e3;
      opacity: 0.6;
    }

  `

  return (
    <>
      <div className="container">
        <Container__text>
          <h1>Consulte todas as informações do seu CNPJ de forma gratuíta</h1>
          <p>Aqui no cQuery você pode consultar a situação do seu CNPJ e verificar se seus dados estão desatualizados ou em divergência. </p>
           <p>Esteja você no controle dos seus dados !</p>
        </Container__text>

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