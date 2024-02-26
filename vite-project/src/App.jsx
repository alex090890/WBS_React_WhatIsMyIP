import WhereAmI from "./components/WhereAmI";
import Currentposition from "./Currentposition";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {


  return (
    <Tabs
      defaultActiveKey="profile"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="home" title="Where am I?">
        <h2>Where am I?</h2>
        <WhereAmI />
      </Tab>
      <Tab eventKey="profile" title="Find Me">
        <Currentposition />
      </Tab>
    </Tabs>
    )
}

export default App;