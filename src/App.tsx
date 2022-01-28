import { ThemeProvider } from 'styled-components';
import { ToastContainer } from 'react-toastify';

import { themeColors } from './styles/theme';
import GlobalStyle from './styles/GlobalStyle';
import Routes from './routes';

function App() {
  return (
    <ThemeProvider theme={themeColors}>
      <GlobalStyle />
      <Routes />
      <ToastContainer autoClose={5000} className="toast-container" />
    </ThemeProvider>
  );
}

export default App;
