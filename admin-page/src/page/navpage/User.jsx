import '../../App-admin.jsx'
import Sidebar from '../../components/Sidebar/Sidebar.jsx';
import MainDashUsers from '../../components/MainDash/users/MainDashUsers.jsx';
import 'bootstrap/dist/css/bootstrap.css';
function Users() {

    return (
              <div className="App">
                <div className = 'AppGlass'>
                  <Sidebar/>
                  <MainDashUsers/>
                </div>
                </div>

      
    );
  }
  
  export default Users;
