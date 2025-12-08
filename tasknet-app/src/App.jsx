import Sidebar from './components/Sidebar';
import Header from './components/Header';
import MainDashBoard from './components/MainDashBoard';

function App() {
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <Header />
        <MainDashBoard />
      </div>
    </div>
  );
}

export default App;