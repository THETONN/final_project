import '../../App'
import Sidebar from '../../components/Sidebar/Sidebar.jsx';
import Mainres from '../../components/MainDash/MainRes.jsx';
import 'bootstrap/dist/css/bootstrap.css';

function Responses() {

    return (
              <div className="App">
                <div className = 'AppGlass'>
                  <Sidebar/>
                  <Mainres/>
                </div>
                </div>

      
    );
  }
  
  export default Responses;
