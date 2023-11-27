import '../../App-admin.jsx'
import Sidebar from '../../components/Sidebar/Sidebar.jsx';
import 'bootstrap/dist/css/bootstrap.css';
import QuestionandAnswer from '../../components/MainDash/QA/MainQ&A';
function QA() {

    return (
              <div className="App">
                <div className = 'AppGlass'>
                  <Sidebar/>
                  <QuestionandAnswer/>
                </div>
                </div>

      
    );
  }
  
  export default QA;
