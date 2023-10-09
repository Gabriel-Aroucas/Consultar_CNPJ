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


  const consulta = () => {

    const Get_Input__QueryBox = document.querySelector("#queryBox") as HTMLInputElement;
    const Input__QueryBox = Get_Input__QueryBox.value.replace(/[^0-9]/g, '');

    if (Input__QueryBox.length > 0 && Input__QueryBox.length < 14) {
      const container = document.querySelector(".containerModal") as HTMLElement
      container.style.display = 'none';
      setTimeout(() => {
        alert('Digite o CNPJ completo')
      }, 200);
    } else if (Input__QueryBox.length == 0) {
      const container = document.querySelector(".containerModal") as HTMLElement
      container.style.display = 'none';
      setTimeout(() => {
        alert('Digite o número do CNPJ')
      }, 200);
    } else {
      axios.get(`https://brasilapi.com.br/api/cnpj/v1/${Input__QueryBox}`)
        .then(response => {

          const objData = {
            'nome_fantasia':response.data.nome_fantasia,
            'razao_social':response.data.razao_social,
            'cnae_fiscal':response.data.cnae_fiscal_descricao,
            'situacao_cadastral':response.data.descricao_situacao_cadastral,
            'porte':response.data.porte || "Não Informado",
            'tipo_logradouro':response.data.descricao_tipo_de_logradouro || "Não Informado",
            'logradouro':response.data.logradouro || "Não Informado",
            'bairro':response.data.bairro || "Não Informado",
            'municipio':response.data.municipio || "Não Informado",
            'cep':response.data.cep || "Não Informado",
            'telefone_1':response.data.ddd_telefone_1 || 'Não cadastrado',
            'telefone_2':response.data.ddd_telefone_2 || 'Não cadastrado',
            'inicio_atividade':response.data.data_inicio_atividade || "Não Informado",
            'exclusao_mei':response.data.data_exclusao_do_mei || "CNPJ ATIVO",
          }

          setnome_fantasia(objData.nome_fantasia)
          setrazao_social(objData.razao_social)
          setcnae_fiscal_descricao(objData.cnae_fiscal)
          setdescricao_situacao_cadastral(objData.situacao_cadastral)
          setporte(objData.porte)
          setdescricao_tipo_de_logradouro(objData.tipo_logradouro)
          setlogradouro(objData.logradouro)
          setbairro(objData.bairro)
          setmunicipio(objData.municipio)
          setcep(objData.cep)
          setddd_telefone_1(objData.telefone_1)
          setddd_telefone_2(objData.telefone_2)
          setdata_inicio_atividade(objData.inicio_atividade)
          setdata_exclusao_do_mei(objData.exclusao_mei)
        })
        .then(() => {
          const container = document.querySelector(".containerModal") as HTMLElement
          container.style.display = 'grid';
          container.style.opacity = '1';
        })
        .catch((e)=>{
          console.log(e.response.status)
          e.response.status ? alert('CNPJ Não encontrado') :'';
        })
    }

  }



  const Container__article = styled.article`
    text-align: center;
    input,button{
      padding: 1rem 2rem;
    }
    
    @media only screen and (max-width:700px){
      input{
        width:80vw
      }button{
        margin:1rem 0
      }
    }
  `
  const Container__text = styled.div`
    text-align: center;
    margin:1rem 0;
    h1{
      font-size: 2rem;
      color: #e3e3e3;
      font-family: 'bebas neue';
      padding: 1rem 0;
    }
    p{
      width: 80%;
      margin: 0 auto;
      color: #e3e3e3;
      opacity: 0.6;
      font-size:10px;
    }

    @media only screen and (max-width:700px){
      h1{
        width:80%;
        margin: 0 auto;
      }
    }
  `
  return (
    <>
      <section className="container">
        <Container__text>
          <h1>Consulte todas as informações do seu CNPJ de forma gratuíta</h1>
          <p>Aqui no cQuery você pode consultar a situação do seu CNPJ e verificar se seus dados estão desatualizados ou em urgência. </p>
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