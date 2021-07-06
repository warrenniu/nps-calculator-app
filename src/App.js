import Header from './components/Header';
import Footer from './components/Footer';
import CountResponse from './components/CountResponse';
import GroupResponse from './components/GroupResponse';
import CalculateNPS from './components/CalculateNPS';
import { TotalProvider } from './components/totalContext/TotalContext'
import './styles/calculator.css'
import './styles/page.css'

function App() {
  return (
    <div className="container1">
      <Header />
      <div className="container2">
        <TotalProvider>
          <CountResponse />
          <GroupResponse />
          <CalculateNPS />

        </TotalProvider>
      </div>

      <Footer />
    </div>
  );
}

export default App;
