import './scss/App.css'
import QueryBox from './components/QueryBox'
import Button from './components/Buttons/Buttons.tsx'
import { styled } from 'styled-components'
import axios from 'axios'
import { useEffect, useState } from 'react'
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

  const [cnpj, setcnpj] = useState('')


  axios.get(`https://brasilapi.com.br/api/cnpj/v1/${cnpj}`)
    .then(response => {
      setnome_fantasia(response.data.nome_fantasia ? response.data.nome_fantasia : 'Não identificado')
      setrazao_social(response.data.razao_social ? response.data.razao_social : 'Não identificado')
      setcnae_fiscal_descricao(response.data.cnae_fiscal_descricao)
      setdescricao_situacao_cadastral(response.data.descricao_situacao_cadastral)
      setporte(response.data.porte)
      setdescricao_tipo_de_logradouro(response.data.descricao_tipo_de_logradouro)
      setlogradouro(response.data.logradouro)
      setbairro(response.data.bairro)
      setmunicipio(response.data.municipio)
      setcep(response.data.cep)
      setddd_telefone_1(response.data.ddd_telefone_1 ? response.data.ddd_telefone_1 : 'Não cadastrado')
      setddd_telefone_2(response.data.ddd_telefone_2 ? response.data.ddd_telefone_2 : 'Não cadastrado')
      setdata_inicio_atividade(response.data.data_inicio_atividade)
      setdata_exclusao_do_mei(response.data.data_exclusao_do_mei ? response.data.data_exclusao_do_mei : 'CNPJ ATIVO')
    })


  const consulta = () => {
    const Get_Input__QueryBox = document.querySelector("#queryBox") as HTMLInputElement;
    const Input__QueryBox = Get_Input__QueryBox.value.replace(/[^0-9]/g, '');
    setcnpj(Input__QueryBox)

    if (Input__QueryBox.length != 0) {
      const container = document.querySelector(".containerModal") as HTMLElement
      container.style.display = 'grid'
      setTimeout(() => {
        container.style.opacity = '1';
        container.style.transition = '1s'
      }, 1000);
    }else{
      alert('Você precisa informar o CNPJ completo')
    }
  }


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
          <i onClick={consulta}><Button /></i>
        </Container__article>

        <Modal
          nome_fantasia={nome_fantasia}
          razao_social={razao_social}
          cnae_fiscal_descricao={cnae_fiscal_descricao}
          descricao_situacao_cadastral={descricao_situacao_cadastral}
          porte={porte}
          descricao_tipo_de_logradouro={descricao_tipo_de_logradouro}
          logradouro={logradouro}
          bairro={bairro}
          municipio={municipio}
          cep={cep}
          ddd_telefone_1={ddd_telefone_1}
          ddd_telefone_2={ddd_telefone_2}
          data_inicio_atividade={data_inicio_atividade}
          data_exclusao_do_mei={data_exclusao_do_mei}
        />
      </section>
    </>
  )
}

export default App