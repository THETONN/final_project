import '../../App-admin.jsx'
import Sidebar from '../../components/Sidebar/Sidebar.jsx';
import Trip from '../../components/MainDash/trip/trip.jsx';
import 'bootstrap/dist/css/bootstrap.css';
function Trips() {

    return (
              <div className="App">
                <div className = 'AppGlass'>
                  <Sidebar/>
                  <Trip/>
                </div>
                </div>

      
    );
  }
  
  export default Trips;
