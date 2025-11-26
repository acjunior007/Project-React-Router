
import './App.css'
import Navbar from './components/NavBar';
import AppRoutes from './routes/AppRoutes';

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <AppRoutes />
    </div>
  );
}

