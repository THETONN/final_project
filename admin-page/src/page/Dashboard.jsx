import '../App-admin.css'
import MainDash from '../components/MainDash/MainDash.jsx';
import Sidebar from '../components/Sidebar/Sidebar.jsx';


function Dashboard() {

    return (
              <div className="App">
                <div className = 'AppGlass'>
                  <Sidebar/>
                  <MainDash/>
                </div>
                </div>

      
    );
  }
  
  export default Dashboard;
