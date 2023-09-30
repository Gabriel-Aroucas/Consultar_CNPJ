import { styled } from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faClose } from "@fortawesome/free-solid-svg-icons"


interface Types {
    nome_fantasia: string,
    razao_social: string,
    cnae_fiscal_descricao: string,
    descricao_situacao_cadastral: string,
    porte: string,
    descricao_tipo_de_logradouro: string,
    logradouro: string,
    bairro: string,
    municipio: string,
    cep: string,
    ddd_telefone_1: string,
    ddd_telefone_2: string,
    data_inicio_atividade: string,
    data_exclusao_do_mei: string,
}
const StyleModal = styled.section`
    position: absolute;
    display: none;
    grid-template-columns: repeat(auto-fill,minmax(350px,1fr));
    top: 50%;
    left: 50%;
    width: 70%;
    height: 80vh;
    transform: translate(-50%,-50%);
    text-align: center;
    background-color: #eaeaea;
    padding: 1rem;
    overflow: scroll;
    .close_icon{
        position: absolute;
        right: 1rem;
        top: 1rem;
        cursor: pointer;
    }
    article{
        margin:10px 0;
    }

    @media screen and ( max-width:700px){
        width: 100%;
        min-height: 100vh;
    }
`
const Modal = ({
    nome_fantasia, razao_social, cnae_fiscal_descricao, descricao_situacao_cadastral,
    porte, descricao_tipo_de_logradouro, logradouro, bairro, municipio, cep, ddd_telefone_1,
    ddd_telefone_2, data_inicio_atividade, data_exclusao_do_mei
}: Types) => {

    const close_modal = () => {
        const container = document.querySelector(".containerModal") as HTMLElement
        container.style.opacity='0';
        container.style.transition='1s'
        setTimeout(() => {
        container.style.display='none'
        }, 1000);

    }


    return (
        <StyleModal className="containerModal">
            <div className="close_icon">
                <i onClick={close_modal}> <FontAwesomeIcon icon={faClose} /></i>
            </div>
            <article className="nome_fantasia">
                <h2>Nome Fantasia</h2>
                <p>{nome_fantasia}</p>
            </article>

            <article className="razao_social">
                <h2>Razão Social</h2>
                <p>{razao_social}</p>
            </article>

            <article className="cnae_fiscal_descricao">
                <h2>Cnae Fiscal</h2>
                <p>{cnae_fiscal_descricao}</p>
            </article>

            <article className="descricao_situacao_cadastral">
                <h2>Descricao situacao cadastral</h2>
                <p>{descricao_situacao_cadastral}</p>
            </article>

            <article className="porte">
                <h2>Porte</h2>
                <p>{porte}</p>
            </article>

            <article className="endereco">
                <h2>Endereço</h2>
                <p>{descricao_tipo_de_logradouro + ' ' + logradouro + ' ' + bairro + ' - ' + municipio}</p>
            </article>

            <article className="cep">
                <h2>CEP</h2>
                <p>{cep}</p>
            </article>

            <article className="ddd_telefone_1">
                <h2>DDD telefone_1</h2>
                <p>{ddd_telefone_1}</p>
            </article>

            <article className="ddd_telefone_2">
                <h2>DDD telefone_2</h2>
                <p>{ddd_telefone_2}</p>
            </article>

            <article className="data_inicio_atividade">
                <h2>Data do início da atividade</h2>
                <p>{data_inicio_atividade}</p>
            </article>

            <article className="data_exclusao_do_mei">
                <h2>Data da exclusao do mei</h2>
                <p>{data_exclusao_do_mei}</p>
            </article>



        </StyleModal>
    )
}

export default Modal