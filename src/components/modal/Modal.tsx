/* eslint-disable @typescript-eslint/no-explicit-any */
import { styled } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";

const Section = styled.section`
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
  h1 {
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
  const currency = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  const api_Names = props.api_Names;
  const api_Values = props.api_Values;

  const unknown_api_name = "Não identificado";
  const convert_api_names_to_numbers: any = {
    uf: api_Values[0] || unknown_api_name,
    cep: api_Values[1] || unknown_api_name,
    qsa: "Em breve",
    cnpj: api_Values[3] || unknown_api_name,
    pais: api_Values[4] || unknown_api_name,
    email: api_Values[5] || unknown_api_name,
    porte: api_Values[6] || unknown_api_name,
    bairro: api_Values[7] || unknown_api_name,
    numero: api_Values[8] || unknown_api_name,
    ddd_fax: api_Values[9] || unknown_api_name,
    municipio: api_Values[10] || unknown_api_name,
    logradouro: api_Values[11] || unknown_api_name,
    cnae_fiscal: api_Values[12] || unknown_api_name,
    codigo_pais: api_Values[13] || unknown_api_name,
    complemento: api_Values[14] || unknown_api_name,
    codigo_porte: api_Values[15] || unknown_api_name,
    razao_social: api_Values[16] || unknown_api_name,
    nome_fantasia: api_Values[17] || unknown_api_name,
    capital_social: currency.format(api_Values[18]) || unknown_api_name,
    ddd_telefone_1: api_Values[19] || unknown_api_name,
    ddd_telefone_2: api_Values[20] || unknown_api_name,
    opcao_pelo_mei: api_Values[21] == true ? "Sim" : unknown_api_name,
    descricao_porte: api_Values[22] || unknown_api_name,
    codigo_municipio: api_Values[23] || unknown_api_name,
    cnaes_secundarios: "Em breve",
    natureza_juridica: api_Values[25] || unknown_api_name,
    situacao_especial: api_Values[26] || unknown_api_name,
    opcao_pelo_simples: api_Values[27] == true ? "Sim" : unknown_api_name,
    situacao_cadastral: api_Values[28] || unknown_api_name,
    data_opcao_pelo_mei: api_Values[29] || unknown_api_name,
    data_exclusao_do_mei: api_Values[30] || unknown_api_name,
    cnae_fiscal_descricao: api_Values[31] || unknown_api_name,
    codigo_municipio_ibge: api_Values[32] || unknown_api_name,
    data_inicio_atividade: api_Values[33] || unknown_api_name,
    data_situacao_especial: api_Values[34] || unknown_api_name,
    data_opcao_pelo_simples: api_Values[35] || unknown_api_name,
    data_situacao_cadastral: api_Values[36] || unknown_api_name,
    nome_cidade_no_exterior: api_Values[37] || unknown_api_name,
    codigo_natureza_juridica: api_Values[38] || unknown_api_name,
    data_exclusao_do_simples: api_Values[39] || unknown_api_name,
    motivo_situacao_cadastral: api_Values[40] || unknown_api_name,
    ente_federativo_responsavel: api_Values[41] || unknown_api_name,
    identificador_matriz_filial: api_Values[42] || unknown_api_name,
    qualificacao_do_responsavel: api_Values[43] || unknown_api_name,
    descricao_situacao_cadastral: api_Values[44] || unknown_api_name,
    descricao_tipo_de_logradouro: api_Values[45] || unknown_api_name,
    descricao_motivo_situacao_cadastral: api_Values[46] || unknown_api_name,
    descricao_identificador_matriz_filial: api_Values[47] || unknown_api_name,
  };

  return (
    <Section className="containerModal">
      <div className="close_icon">
        <i onClick={handle_close}>
          <FontAwesomeIcon icon={faClose} />
        </i>
      </div>

      <div>
        <h1>Resultados da busca</h1>
        {
          api_Names.map((names: any) => {
          const maped_names = names.toUpperCase().replace("_", " ").replace("_", " ").replace("_", " ");
          const maped_values = convert_api_names_to_numbers[names];
          return (
            <article key={names}>
              <h2 key={maped_names}>{maped_names}</h2>
              <p key={maped_values}>{maped_values}</p>
            </article>
          );
        })}
      </div>
    </Section>
  );
};

export default Modal;

const handle_close = () => {
  const container = document.querySelector(".containerModal") as HTMLElement;
  container.style.opacity = "0";
  container.style.transition = "1s";
  setTimeout(() => {
    container.style.display = "none";
  }, 1000);
};
