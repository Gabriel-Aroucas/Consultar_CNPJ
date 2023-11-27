import styled from 'styled-components'

const LoaderStyle = styled.section`
position: absolute;
top: 0;
left: 0;
width: 100vw;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
background-color: rgb(0,0,0,0.5);
.loader{
  position: absolute;
  width: 40px;
  height: 40px;
  border: 3px solid white;
  border-radius: 50%;
  border-top: 3px solid gray;
  animation: loop 1s infinite linear;
}

@keyframes loop{
  from {transform:rotate(0deg)}
  to {transform:rotate(360deg)}

}
`

const Loader = () => {
  return (
    <LoaderStyle>
      <span className="loader"></span>
    </LoaderStyle>
  )
}

export default Loader