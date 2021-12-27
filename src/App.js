import './App.css';
import { GlobalProvider } from './context/GlobalState';
import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { Overview } from './components/Overview';
import { History } from './components/History';
import { AddTransaction } from './components/AddTransaction';

function App() {
  return (
    <div className="App py-5">
      <GlobalProvider>
        <Header />

        <Balance />

        <Overview />

        <History />

        <AddTransaction />
      </GlobalProvider>
    </div>
  );
}

export default App;
