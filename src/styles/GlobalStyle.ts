import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';

const GlobalStyle = createGlobalStyle`
  /* largura do scroll vertical e horizonal*/
  ::-webkit-scrollbar { width: 4px; height: 4px; }
  /* Cor do scroll*/
  ::-webkit-scrollbar-thumb { background: #ffffff; }
  /* Fundo do scroll*/
  ::-webkit-scrollbar-track { background: transparent; }

  *{
    margin: 0;
    padding: 0;
    outline: 0;
    position: relative;
    box-sizing: border-box;
  }

  body {
    font-family: Archivo, sans-serif;
    font-size: 100%;
    color: ${({ theme }) => theme.txtPrimary};
    background-color: #141414;

    ul {
      list-style: none;
    }

    img {
      width: min-content;
      max-width: 100%;
    }

    button {
      border: none;
      background-color: transparent;
      
      display: flex;
      align-items: center;
      justify-content: center;
      
      color: ${({ theme }) => theme.text.title};
      cursor: pointer;

      &:hover {
        filter: brightness(0.85);
      }

      &:active {
        filter: brightness(0.6);
      }
    }

    span,small {
      display: flex;
    }
  }
`;

export default GlobalStyle;
