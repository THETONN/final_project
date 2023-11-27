import '../../App-admin.jsx'
import Sidebar from '../../components/Sidebar/Sidebar.jsx';
import 'bootstrap/dist/css/bootstrap.css';
import Mainfeed from '../../components/MainDash/feedback/mainfeed.jsx';
function Feedback() {

    return (
              <div className="App">
                <div className = 'AppGlass'>
                  <Sidebar/>
                  <Mainfeed/>
                </div>
                </div>

      
    );
  }
  
  export default Feedback;
