import styled from "styled-components";

export const StyledMarsPicture = styled.img`
  width: 60vw;
`

export const ContainerTextAndImage = styled.div`
  display: flex;
  color: tomato;
`

export const ContainerTexto = styled.div`
  display: flex;
  height: 70vh;
  flex-direction: column;
  margin: 30px;
  h2{
    font-size:50px;
    font-weight: 900;
    margin-bottom: 30px;
  }
  p{
    font-size: 20px;
    font-style:italic;
    &:hover{
      text-decoration:underline;
    }
  }
`