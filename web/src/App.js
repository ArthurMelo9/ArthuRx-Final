
import './App.css';

/*import Home from './components/home';
/*import Patients from './components/patients';*/
import Home from './components/home';
import ContactUs from './components/ContactUs';
/*import Services from './components/Services';*/
import AboutUs from './components/AboutUs';
import SignUp from './components/SignUp';
import FreeService from './components/patients/FreeService'

import Doctors from './components/doctors';
import Patients from './components/patients';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import DoctorsPortal from './components/doctors/DoctorsPortal';
import PatientsPortal from './components/patients/PatientsPortal';
/*import Chat from './Chat';*/

import TodoList from './components/patients/ToDoList/ToDoList';
import Chat from './components/chatRoom/components/Chat/Chat';
import SignIn from './components/chatRoom/components/Join/Join';
import Appointments from './components/Appointments/Appointments';
import DoctorContacts from './components/DoctorContacts';

function App() {
  return (
    <div className="App">

      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/contactUs" exact component={ContactUs} />
          {/*<Route path="/services" exact component={Services} />*/}
          <Route path="/aboutUs" exact component={AboutUs} />
          <Route path="/signUp" exact component={SignUp} />
          <Route path="/doctors" exact component={Doctors} />
          <Route path="/doctorsPortal" exact component={DoctorsPortal} />
          <Route path="/patients" exact component={Patients} />
          <Route path="/patientsPortal" exact component={PatientsPortal} />
          <Route path="/freeService" exact component={FreeService} />
          <Route path="/chat" exact component={Chat} />
          <Route path="/join" exact component={SignIn} />
          <Route path="/to-do-list" exact component={TodoList} />
          <Route path="/appointments" exact component={Appointments} />
          <Route path="/doctorContacts" exact component={DoctorContacts} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
