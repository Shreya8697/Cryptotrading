import './App.css';
import HomePage from "./pages/home";
import DashboardPage from "./pages/dashboard";
import CoinPage from "./pages/coin";
import WatchlistPage from "./pages/watchlist";
import ComparePage from "./pages/compare";
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (  
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/dashboard" element={<DashboardPage/>}/>
          <Route path="/coin/:id" element={<CoinPage/>}/>
          <Route path="/compare" element={<ComparePage/>}/>
          <Route path="/watchlist" element={<WatchlistPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;