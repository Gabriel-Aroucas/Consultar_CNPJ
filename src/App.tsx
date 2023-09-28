import './App.css'
import QueryBox from './components/QueryBox'
import Button from './components/Buttons/Buttons.tsx'


const App = () => {
  return (
    <>
      <div className="container">
        <h1>Consulte todas as informações do seu CNPJ de forma gratuíta</h1>
        <article className='container__article'>
          <QueryBox />
          <Button />
        </article>
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