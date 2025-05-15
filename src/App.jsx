import { BrowserRouter, Routes, Route } from "react-router-dom"
import Nav from "./components/navBarra";
import Home from "./pages/home";
import GuerraDeCanudos from "./pages/guerraDeCanudos";
import GuerraDoContestado from "./pages/guerraDoContestado";
import PrimeiraGuerra from "./pages/primeiraGuerra";
import RevolucaoRussa from "./pages/revolucaoRussa";
import FascismoItaliano from "./pages/fascismoItaliano";
import CriseDe1929 from "./pages/criseDe1929";
import RevolucaoDe1930 from "./pages/revolucaoDe1930";
import SobreNos from "./pages/sobreNos";
import Ranking from "./pages/ranking";
import VideoContestado from "./pages/videoContestado";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/guerra-de-canudos" element={<GuerraDeCanudos />} />
        <Route path="/guerra-do-contestado" element={<GuerraDoContestado />} />
        <Route path="/primeira-guerra" element={<PrimeiraGuerra />} />
        <Route path="/revolucao-russa" element={<RevolucaoRussa />} />
        <Route path="/fascismo-italiano" element={<FascismoItaliano />} />
        <Route path="/crise-de-1929" element={<CriseDe1929 />} />
        <Route path="/revolucao-de-1930" element={<RevolucaoDe1930 />} />
        <Route path="/sobre-nos" element={<SobreNos />} />
        <Route path="/ranking" element={<Ranking />} />
        <Route path="/video-contestado" element={<VideoContestado />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
