import './App.scss';
import {Route, Switch} from 'react-router-dom';
import {useHistory} from "react-router";
import './App.scss'
import MainPage from "./components/MainPage";
import Comparison from "./components/Comparison/Comparison";
import {ToastContainer} from "react-toastify";

function App() {
    const history = useHistory()
    return (
        <div className="App">
            <ToastContainer/>
            <div className={'navbar'}>
                <span onClick={() => history.push('/')}>Main Page</span>
                <span onClick={() => history.push('/comparison')}>Comparison</span>
            </div>
            <div className="site-layout-content">
                <Switch>
                    <Route path="/" exact component={MainPage}/>
                    <Route path="/comparison" exact component={Comparison}/>
                </Switch>
            </div>
        </div>
    );
}

export default App;
