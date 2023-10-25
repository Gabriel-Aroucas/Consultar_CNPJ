import "./scss/App.css";
import { styled } from "styled-components";
import axios from "axios";
import { useState } from "react";
import Modal from "./components/modal/Modal.tsx";

const App = () => {
  //interface apiTypes {
  //  nome_fantasia: string;
  //  razao_social: string;
  //  cnae_fiscal_descricao: string;
  //  descricao_situacao_cadastral: string;
  //  porte: string;
  //  descricao_tipo_de_logradouro: string;
  //  logradouro: string;
  //  bairro: string;
  //  municipio: string;
  //  cep: string;
  //  ddd_telefone_1: string;
  //  ddd_telefone_2: string;
  //  data_inicio_atividade: string;
  //  data_exclusao_do_mei: string;
  //}
  //const [api_data, setApi_data] = useState<apiTypes>({
  //  nome_fantasia: "",
  //  razao_social: "",
  //  cnae_fiscal_descricao: "",
  //  descricao_situacao_cadastral: "",
  //  porte: "",
  //  descricao_tipo_de_logradouro: "",
  //  logradouro: "",
  //  bairro: "",
  //  municipio: "",
  //  cep: "",
  //  ddd_telefone_1: "",
  //  ddd_telefone_2: "",
  //  data_inicio_atividade: "",
  //  data_exclusao_do_mei: "",
  //});
  const [form_data, setForm_data] = useState<string>("default");
  const [user, setUser] = useState<number>(0);
  const [api_Names,set_Api_Names] = useState(['']);
  const [api_Values,set_Api_Value] = useState<unknown>(['']);

  const query = async () => {
    await axios
      .get(`https://brasilapi.com.br/api/cnpj/v1/${form_data}`)
      .then((response) => {
        const object_Names = Object.keys(response.data)
        const object_Value = Object.values(response.data);
        //const array = [object_Names,object_Value];
        set_Api_Names(object_Names)
        set_Api_Value(object_Value)
      
        })
      .then(() => {
        const container = document.querySelector(
          ".containerModal"
        ) as HTMLElement;
        container.style.display = "grid";
        container.style.opacity = "1";
      })
      .catch(() => {
        alert("CNPJ Não encontrado");
      });
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

  let inputValue = "default";
  if (user === 1) {
    query();
    setUser(0);
  }
  const handleSubmit = () => {
    setForm_data(inputValue.replace(/[^0-9]/g, ""));
    setUser(1);
  };

  return (
    <>
      <section className="container">
        <Container__text>
          <h1>Consulte todas as informações do seu CNPJ de forma gratuíta</h1>
          <p>
            Aqui no cQuery você pode consultar a situação do seu CNPJ e
            verificar se seus dados estão desatualizados ou em urgência.
          </p>
          <p>Esteja você no controle dos seus dados !</p>
        </Container__text>
        <Container__article>
          <input
            type="tel"
            name="cnpj"
            id="queryBox"
            placeholder="Informe aqui o CNPJ"
            onChange={(e) => {
              inputValue = e.currentTarget.value;
            }}
          />
          <button
            type="submit"
            onClick={() => {
              handleSubmit();
            }}
          >
            Consultar
          </button>
        </Container__article>
        <Modal api_Titles={api_Names} api_Values={api_Values} />
      </section>
    </>
  );
};
export default App;
