import logo from './logo.svg';
import './App.css';
import Sidebar from './sidebar';
import './sb-admin-2.css';
import Topbar from './topbar';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Dashboard from './Dashboard';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import Users from './Users';
import Usercreate from './Usercreate';


function App() {
  return (
    <BrowserRouter>
    <div id="wrapper">
      <Sidebar/>
      <div id="content-wrapper" class="d-flex flex-column">
      <div id="content">
      <Topbar/>
      <Routes>
        <Route path="/dashboard" element={<Dashboard/>}></Route>
        <Route path="/users" element={<Users/>}></Route>
        <Route path="/Usercreate" element={<Usercreate/>}></Route>
      </Routes>
      </div>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
