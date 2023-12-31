import "./scss/App.css";
import { styled } from "styled-components";
import axios from "axios";
import { useState } from "react";
import Modal from "./components/modal/Modal.tsx";
import Loader from "./components/loader/Loader.tsx";

const App = () => {
  const [user_Data, set_User_Data] = useState<string>("default");
  const [first_Acess, set_first_Acess] = useState<boolean>(false);
  const [api_Names,set_Api_Names] = useState(['']);
  const [api_Values,set_Api_Value] = useState<unknown>(['']);
  const [remove_loader, set_remove_loader] = useState(true);

  const query = async () => {
    set_remove_loader(false)
    await axios
      .get(`https://brasilapi.com.br/api/cnpj/v1/${user_Data}`)
      .then((response) => {
        const object_Names = Object.keys(response.data)
        const object_Value = Object.values(response.data);
        set_Api_Names(object_Names)
        set_Api_Value(object_Value)
        })
      .then(() => {
        const container = document.querySelector(".container_Modal") as HTMLElement;
        container.style.display = "grid";
        container.style.opacity = "1";
        set_remove_loader(true)
      })
      .catch(() => {
        alert("CNPJ Não encontrado");
        set_remove_loader(true)

      });
  };
  
  const Article = styled.article`
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
  const Div = styled.div`
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

  let input_Value = "default";
  if (first_Acess === true) {
    query();
    set_first_Acess(false);
  }
  const handle_Submit = () => {
    set_User_Data(input_Value.replace(/[^0-9]/g, ""));
    set_first_Acess(true);
  };

  return (
    <>
      <section className="container">
       <Div>
        <h1>Consulte todas as informações do seu CNPJ de forma gratuíta</h1>
        <p> Aqui no cQuery você pode consultar a situação do seu CNPJ e verificar se seus dados estão desatualizados ou em urgência. </p>
        <p>Esteja você no controle dos seus dados !</p>
       </Div>

        <Article>
          <input type="tel" name="cnpj" id="queryBox" placeholder="Informe aqui o CNPJ" onChange={(each_letter) => { input_Value = each_letter.currentTarget.value; }}/>
          <button type="submit" onClick={() => { handle_Submit() }}> Consultar </button>
        </Article>
        <Modal api_Names={api_Names} api_Values={api_Values} />
        {!remove_loader && <Loader/>}
      </section>
    </>
  );
};
export default App;
