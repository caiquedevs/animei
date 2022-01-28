import styled from 'styled-components';

export const Container = styled.div`
  width: calc(100% - 60px);
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  a {
    font-size: 18px;
    color: ${({ theme }) => theme.text.title};
  }
`;
