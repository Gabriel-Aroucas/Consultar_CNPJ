/* eslint-disable @typescript-eslint/no-explicit-any */
import { styled } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";

const StyleModal = styled.section`
  position: absolute;
  display: none;
  top: 50%;
  left: 50%;
  width: 70%;
  height: 80vh;
  transform: translate(-50%, -50%);
  text-align: center;
  background-color: #eaeaea;
  padding: 1rem;
  overflow: scroll;
  box-shadow: #141414 8px 8px 60px;
  border-radius: 13px;
  h1{
    font-size: 2rem;
    color: rgb(0, 0, 0, 0.7);
  }
  h2 {
    color: rgb(5, 59, 80, 0.8);
  }
  p {
    font-weight: bold;
    color: rgb(0, 0, 0, 0.7);
  }
  .close_icon {
    position: absolute;
    right: 1rem;
    top: 1rem;
    cursor: pointer;
  }
  article {
    margin: 10px 0;
    border: 1px solid rgb(0, 0, 0, 0.3);
  }
  .api_dinamic {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  }
  .api_dinamic_names {
    border-bottom: 1px solid rgb(0, 0, 0, 0.3);
    border-left: 1px solid rgb(0, 0, 0, 0.3);
    border-right: 1px solid rgb(0, 0, 0, 0.3);
  }

  @media only screen and (max-width: 700px) {
    width: 100vw;
    height: 80vh;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    border-radius: 5px;
    .close_icon {
      font-size: 1rem;
    }
  }
`;

const Modal = (props: any) => {

  const formater = new Intl.NumberFormat('pt-BR', {style:'currency', currency:'BRL'})
  const content=  props.content;
  const value = props.value;
  const unknown = 'Não identificado'

  const enumered_api:any = {
    'uf':value[0] || unknown,
    'cep':value[1] || unknown,
    'qsa':"Em breve",
    'cnpj':value[3] || unknown,
    'pais':value[4] || unknown,
    'email':value[5] || unknown,
    'porte':value[6] || unknown,
    'bairro':value[7] || unknown,
    'numero':value[8] || unknown,
    'ddd_fax':value[9] || unknown,
    'municipio':value[10] || unknown,
    'logradouro':value[11] || unknown,
    'cnae_fiscal':value[12] || unknown,
    'codigo_pais':value[13] || unknown,
    'complemento':value[14] || unknown,
    'codigo_porte':value[15] || unknown,
    'razao_social':value[16] || unknown,
    'nome_fantasia':value[17] || unknown,
    'capital_social':formater.format(value[18]) || unknown,
    'ddd_telefone_1':value[19] || unknown,
    'ddd_telefone_2':value[20] || unknown,
    'opcao_pelo_mei':value[21] == true ? 'Sim' : unknown,
    'descricao_porte':value[22] || unknown,
    'codigo_municipio':value[23] || unknown,
    'cnaes_secundarios':"Em breve",
    'natureza_juridica':value[25] || unknown,
    'situacao_especial':value[26] || unknown,
    'opcao_pelo_simples':value[27] == true ? 'Sim' : unknown,
    'situacao_cadastral':value[28] || unknown,
    'data_opcao_pelo_mei':value[29] || unknown,
    'data_exclusao_do_mei':value[30] || unknown,
    'cnae_fiscal_descricao':value[31] || unknown,
    'codigo_municipio_ibge':value[32] || unknown,
    'data_inicio_atividade':value[33] || unknown,
    'data_situacao_especial':value[34] || unknown,
    'data_opcao_pelo_simples':value[35] || unknown,
    'data_situacao_cadastral':value[36] || unknown,
    'nome_cidade_no_exterior':value[37] || unknown,
    'codigo_natureza_juridica':value[38] || unknown,
    'data_exclusao_do_simples':value[39] || unknown,
    'motivo_situacao_cadastral':value[40] || unknown,
    'ente_federativo_responsavel':value[41] || unknown,
    'identificador_matriz_filial':value[42] || unknown,
    'qualificacao_do_responsavel':value[43] || unknown,
    'descricao_situacao_cadastral':value[44] || unknown,
    'descricao_tipo_de_logradouro':value[45] || unknown,
    'descricao_motivo_situacao_cadastral':value[46] || unknown,
    'descricao_identificador_matriz_filial':value[47] || unknown,
  }


  return (
    <StyleModal className="containerModal">
      <div className="close_icon">
        <i onClick={close_modal}>
          <FontAwesomeIcon icon={faClose} />
        </i>
      </div>
      <section className="api_dinamic">
      <h1>Resultados da busca</h1>

       {
        content.map((e:any) => {
          return(
            <article>
              <h2>{e.toUpperCase().replace("_"," ").replace("_"," ").replace("_"," ")}</h2>
              <p>{enumered_api[e]}</p>
            </article>
          )
        })
       }
      </section>
    </StyleModal>
  );
};

export default Modal;

const close_modal = () => {
  const container = document.querySelector(".containerModal") as HTMLElement;
  container.style.opacity = "0";
  container.style.transition = "1s";
  setTimeout(() => {
    container.style.display = "none";
  }, 1000);
};
