import './App.css';
import Dashboard from './components/dashboard/dashboard'
import { Provider } from 'react-redux';
import store from './redux/store/store';
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Dashboard />
      </div>
    </Provider>
  );
}

export default App;
