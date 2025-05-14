import Home from "./pages/home";
import GuerraDeCanudos from "./pages/guerraDeCanudos";
import GuerraDoContestado from "./pages/guerraDoContestado";
import PrimeiraGuerra from "./pages/primeiraGuerra";
import RevolucaoRussa from "./pages/revolucaoRussa";
import FascismoItaliano from "./pages/fascismoItaliano";
import CriseDe1929 from "./pages/criseDe1929";
import RevolucaoDe1930 from "./pages/np";

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
      </Routes>
    </BrowserRouter>
  );
}
