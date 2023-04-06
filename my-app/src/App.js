import logo from './logo.svg';
import './App.css';
import Admin from './components/admin'
import AddUser from './components/addUser'
import Form from './components/Form'
import { BrowserRouter,Route, Routes ,} from 'react-router-dom';
import EditUser from './components/editUser';
import NotFound from './components/notFound';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
 
      <BrowserRouter>
      <Nav variant="pills" defaultActiveKey="/home">
                   <Nav.Item>
                   <Nav.Link eventKey="link-4" ><Link  to="/users"> users list</Link></Nav.Link>
                   </Nav.Item>
                   <Nav.Item>
                    <Nav.Link eventKey="link-0" ><Link to="/add">add user</Link></Nav.Link>
                   </Nav.Item>
                   <Nav.Item>
                       <Nav.Link eventKey="link-1"> <Link to="/upload">upload excel</Link></Nav.Link>
                   </Nav.Item>
                   <Nav.Item>
                       <Nav.Link  eventKey="link-2"><Link to="/stat">statistics</Link></Nav.Link>
                   </Nav.Item>
                   <Nav.Item>
                       <Nav.Link eventKey="link-3"><Link to="/paramater">admin info</Link></Nav.Link>
                   </Nav.Item>
               </Nav>
 
      <Routes>
        {/* <Route path="/not-found" component={NotFount}/> */}
        <Route path="users" element={<Admin/>}/>
        <Route path="/" exact element={<Admin/>}/>
        <Route path="admin" exact element={<Admin/>}/>
        <Route path="add" exact element={<AddUser/>}/>
        <Route path="edit" exact element={<EditUser/>}/>


         <Route path="*" element={<NotFound/>}/>
        {/* <Route to="/not-found"/> */}

      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
