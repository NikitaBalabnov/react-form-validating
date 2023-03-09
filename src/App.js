import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import Error from './pages/Error/Error';
import Form from './pages/form/Form';
import HomePage from './pages/home/HomePage';

function App() {
  return (
      <>
        <Routes>
          <Route path='/' element = {<Layout/>}>
            <Route index element = {<HomePage/>}/>
            <Route path='form/*' element = {<Form/>}/>
            <Route path='*' element = {<Error/>}/>
          </Route>
        </Routes>
      </>
  );
}
export default App;
