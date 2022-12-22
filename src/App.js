import { connect } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import { Routes, Route } from 'react-router-dom'


import MainComponent from './component/MainComponent'
import AppcomponentWomen from './componentWomen/AppcomponentWomen'
import AppcomponentMen from './ComponentMen/AppComponentMen'
import AppComponentAccessory from './componentAccessory/AppComponentAccessory';
import AppComponentPay from './ComponentPay/AppComponentPay';
import Login from './ComponentLogin/LoginAcount/Login';
import ComponentRegister from './ComponentRegister/ComponentRegister';
import AccountUser from './AccountUser/AccountUser';

function App(props) {
  let {statusLogin} = props;
  return (
      <Routes>
          <Route path="/" element={<MainComponent/>}/>
          <Route path='/dang-nhap' element={<Login/>}/>
          <Route path='/dang-ky' element={<ComponentRegister/>}/>
          <Route path='/account-profile' element={<AccountUser/>}/>
          <Route path='/dong-ho-nu' element={<AppcomponentWomen/>}/>
          <Route path='/dong-ho-nam' element={<AppcomponentMen/>}/>
          <Route path='/phu-kien-dong-ho' element={<AppComponentAccessory/>}/>
          <Route path='/checkout/' element={<AppComponentPay/>}/>
      </Routes>

  );
}

const maStateToProps = (state) => ({
  statusLogin: state.statusLogin,
})
export default connect(maStateToProps)(App);
