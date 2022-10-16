
import './App.css';
import DayList from './component/DayList';
import Day from './component/Day';
import Header from './component/Header';
import EmptyPage from './component/EmptyPage';
import { BrowserRouter, Route , Routes } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
     
        <Header />
        <Routes>
          
          <Route path="/" element={<DayList />} />
          <Route path="/day/:day" element={<Day />} />
          <Route path="*" element={<EmptyPage/>} />
        </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
