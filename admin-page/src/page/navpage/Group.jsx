import '../../App-admin.jsx'
import Sidebar from '../../components/Sidebar/Sidebar.jsx';
import Groupmain from '../../components/MainDash/group/group.jsx';
import 'bootstrap/dist/css/bootstrap.css';
function Groups() {

    return (
              <div className="App">
                <div className = 'AppGlass'>
                  <Sidebar/>
                  <Groupmain/>
                </div>
                </div>

      
    );
  }
  
  export default Groups;
