import './App.css';
import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { Overview } from './components/Overview';
import { History } from './components/History';
import { AddTransaction } from './components/AddTransaction';

function App() {
  return (
    <div className="App py-5">
      <Header />

      <Balance />

      <Overview />

      <History />

      <AddTransaction />
    </div>
  );
}

export default App;
