import "./scss/App.css";
import Button from "./components/Buttons/Buttons.tsx";
import { styled } from "styled-components";
import axios from "axios";
import { useState } from "react";
import Modal from "./components/modal/Modal.tsx";
const App = () => {
console.log('renderizou')
	interface apiTypes {
    nome_fantasia: string;
    razao_social: string;
    cnae_fiscal_descricao: string;
    descricao_situacao_cadastral: string;
    porte: string;
    descricao_tipo_de_logradouro: string;
    logradouro: string;
    bairro: string;
    municipio: string;
    cep: string;
    ddd_telefone_1: string;
    ddd_telefone_2: string;
    data_inicio_atividade: string;
    data_exclusao_do_mei: string;
	}

 const [api_data, setApi_data] = useState<apiTypes>({
    nome_fantasia: "",
    razao_social: "",
    cnae_fiscal_descricao: "",
    descricao_situacao_cadastral: "",
    porte: "",
    descricao_tipo_de_logradouro: "",
    logradouro: "",
    bairro: "",
    municipio: "",
    cep: 0,
    ddd_telefone_1: 0,
    ddd_telefone_2: 0,
    data_inicio_atividade: 0,
    data_exclusao_do_mei: "",
 });
 
 //const [inputData,setInputData] = useState();

 const consulta = () => {
  const Get_Input__QueryBox = document.querySelector("#queryBox") as HTMLInputElement;
  const Input__QueryBox = Get_Input__QueryBox.value.replace(/[^0-9]/g, "");
			if (Input__QueryBox.length > 0 && Input__QueryBox.length < 14) {
       const container = document.querySelector(".containerModal") as HTMLElement;
        container.style.display = "none";
        setTimeout(() => {
          alert("Digite o CNPJ completo");
         }, 200);
    } else if (Input__QueryBox.length == 0) {
      const container = document.querySelector(
        ".containerModal"
      ) as HTMLElement;
      container.style.display = "none";
      setTimeout(() => {
        alert("Digite o número do CNPJ");
      }, 200);
    } else {
      axios
        .get(`https://brasilapi.com.br/api/cnpj/v1/${Input__QueryBox}`)
        .then((response) => {
          const objData = {
            nome_fantasia: response.data.nome_fantasia,
            razao_social: response.data.razao_social,
            cnae_fiscal: response.data.cnae_fiscal_descricao,
            situacao_cadastral: response.data.descricao_situacao_cadastral,
            porte: response.data.porte || "Não Informado",
            tipo_logradouro:
              response.data.descricao_tipo_de_logradouro || "Não Informado",
            logradouro: response.data.logradouro || "Não Informado",
            bairro: response.data.bairro || "Não Informado",
            municipio: response.data.municipio || "Não Informado",
            cep: response.data.cep || "Não Informado",
            telefone_1: response.data.ddd_telefone_1 || "Não cadastrado",
            telefone_2: response.data.ddd_telefone_2 || "Não cadastrado",
            inicio_atividade:
              response.data.data_inicio_atividade || "Não Informado",
            exclusao_mei: response.data.data_exclusao_do_mei || "CNPJ ATIVO",
          };
          setApi_data({
            nome_fantasia: objData.nome_fantasia,
            razao_social: objData.razao_social,
            cnae_fiscal_descricao: objData.cnae_fiscal,
            descricao_situacao_cadastral: objData.situacao_cadastral,
            porte: objData.porte,
            descricao_tipo_de_logradouro: objData.tipo_logradouro,
            logradouro: objData.logradouro,
            bairro: objData.bairro,
            municipio: objData.municipio,
            cep: objData.cep,
            ddd_telefone_1: objData.telefone_1,
            ddd_telefone_2: objData.telefone_2,
            data_inicio_atividade: objData.inicio_atividade,
            data_exclusao_do_mei: objData.exclusao_mei,
          });
									})
        .then(() => {
          const container = document.querySelector(
            ".containerModal"
          ) as HTMLElement;
          container.style.display = "grid";
          container.style.opacity = "1";
        })
        .catch((e) => {
          console.log(e.response.status);
          e.response.status ? alert("CNPJ Não encontrado") : "";
        });
    }
  };

  const Container__article = styled.article`
    text-align: center;
    input,
    button {
      padding: 1rem 2rem;
    }

    @media only screen and (max-width: 700px) {
      input {
        width: 80vw;
      }
      button {
        margin: 1rem 0;
      }
    }
  `;
  const Container__text = styled.div`
    text-align: center;
    margin: 1rem 0;
    h1 {
      font-size: 2rem;
      color: #e3e3e3;
      font-family: "bebas neue";
      padding: 1rem 0;
    }
    p {
      width: 80%;
      margin: 0 auto;
      color: #e3e3e3;
      opacity: 0.6;
      font-size: 10px;
    }

    @media only screen and (max-width: 700px) {
      h1 {
        width: 80%;
        margin: 0 auto;
      }
    }
  `;
  return (
    <>
      <section className="container">
        <Container__text>
          <h1>Consulte todas as informações do seu CNPJ de forma gratuíta</h1>
          <p>
            Aqui no cQuery você pode consultar a situação do seu CNPJ e
            verificar se seus dados estão desatualizados ou em urgência.{" "}
          </p>
          <p>Esteja você no controle dos seus dados !</p>
        </Container__text>
        <Container__article>
          <input type="tel" name="cnpj" id="queryBox" placeholder="Informe aqui o CNPJ" onChange={(e)=>{console.log(e)}} />
          <i onClick={consulta}>
            <Button />
          </i>
        </Container__article>

        <Modal
          nome_fantasia={api_data.nome_fantasia}
          razao_social={api_data.razao_social}
          cnae_fiscal_descricao={api_data.cnae_fiscal_descricao}
          descricao_situacao_cadastral={api_data.descricao_situacao_cadastral}
          porte={api_data.porte}
          descricao_tipo_de_logradouro={api_data.descricao_tipo_de_logradouro}
          logradouro={api_data.logradouro}
          bairro={api_data.bairro}
          municipio={api_data.municipio}
          cep={api_data.cep}
          ddd_telefone_1={api_data.ddd_telefone_1}
          ddd_telefone_2={api_data.ddd_telefone_2}
          data_inicio_atividade={api_data.data_inicio_atividade}
          data_exclusao_do_mei={api_data.data_exclusao_do_mei}
        />
      </section>
    </>
  );
};

export default App;
