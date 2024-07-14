import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '@/pages/Home';
import Layout from '@/pages/Layout';
import NovoVideo from './pages/NovoVideo';
import { VideoProvider } from './context/VideoContext';

function App() {
  return (
    <BrowserRouter>
      <VideoProvider>

        <Routes>
          <Route path="/" element={ <Layout /> }>
            <Route index element={ <Home /> } />
            <Route path="novo-video" element={ <NovoVideo /> } />
          </Route>
        </Routes>
      </VideoProvider>

    </BrowserRouter>
  );
}

export default App;
