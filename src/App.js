
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import EventEinsenden from './components/EventEinsenden';
import ReactTask from './components/ReactTask';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<EventEinsenden />} />
        <Route path='/task' element={<ReactTask />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
