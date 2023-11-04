import { BrowserRouter } from 'react-router-dom';
import Theme from './components/Theme/Theme';
import MainRoute from './router/MainRoute';
import { FooterMenu, HeaderMenu } from './router/NavData';

function App() {
  return (
    <Theme>
      <BrowserRouter>
        <MainRoute />
      </BrowserRouter>
      
    </Theme>
  );
}

export default App;
