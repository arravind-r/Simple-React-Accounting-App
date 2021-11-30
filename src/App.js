import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { MainContainer } from "./components/MainContainer";

import { GlobalProvider } from "./context/GlobalState";

import "./style.scss";

function App() {
  return (
    <GlobalProvider>
      <Header />
      <MainContainer />
      <Footer />
    </GlobalProvider>
  );
}

export default App;
