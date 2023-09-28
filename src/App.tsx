import './scss/App.css'
import QueryBox from './components/QueryBox'
import Button from './components/Buttons/Buttons.tsx'
import { styled } from 'styled-components'
import axios from 'axios'
import { useState } from 'react'
import Modal from './components/modal/Modal.tsx'

const App = () => {
  const [nome_fantasia, setnome_fantasia] = useState('')
  const [razao_social, setrazao_social] = useState('')
  const [cnae_fiscal_descricao, setcnae_fiscal_descricao] = useState('')
  const [descricao_situacao_cadastral, setdescricao_situacao_cadastral] = useState('')
  const [porte, setporte] = useState('')

  const [descricao_tipo_de_logradouro, setdescricao_tipo_de_logradouro] = useState('')
  const [logradouro, setlogradouro] = useState('')
  const [bairro, setbairro] = useState('')
  const [municipio, setmunicipio] = useState('')
  const [cep, setcep] = useState('')

  const [ddd_telefone_1, setddd_telefone_1] = useState('')
  const [ddd_telefone_2, setddd_telefone_2] = useState('')

  const [data_inicio_atividade, setdata_inicio_atividade] = useState('')
  const [data_exclusao_do_mei, setdata_exclusao_do_mei] = useState('')


  axios.get(`https://brasilapi.com.br/api/cnpj/v1/51121858000145`)
    .then(response => { 
      
     })



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
      <section className="container">
        <Container__text>
          <h1>Consulte todas as informações do seu CNPJ de forma gratuíta</h1>
          <p>Aqui no cQuery você pode consultar a situação do seu CNPJ e verificar se seus dados estão desatualizados ou em sectionergência. </p>
          <p>Esteja você no controle dos seus dados !</p>
        </Container__text>
        <Container__article>
          <QueryBox />
          <Button />
        </Container__article>
      
      </section>
    </>
  )
}

export default App