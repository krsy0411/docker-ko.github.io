import Header from './components/Header';
import Sidebar from './components/Sidebar';
import AppRoutes from './routes';

function App() {
  return (
    <div className="flex flex-col h-screen w-screen">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-4 overflow-auto">
          <AppRoutes />
        </main>
      </div>
    </div>
  );
}

export default App;