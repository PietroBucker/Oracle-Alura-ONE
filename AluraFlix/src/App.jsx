import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '@/pages/Home';
import Layout from '@/pages/Layout';
import NovoVideo from './pages/NovoVideo';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Layout /> }>
          <Route index element={ <Home /> } />
          <Route path="novo-video" element={ <NovoVideo /> } />
        </Route>
      </Routes>

    </BrowserRouter>
  );
}

export default App;
