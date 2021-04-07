
//libraries
import { useState, Fragment } from 'react';

//components
import Header from './navComponents/header/Header';
import Sidebar from './navComponents/sidebar/Sidebar';
/*import './App.css';*/

//style
import '../sass/app.scss';


const App = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const openSidebar = () => {
        setSidebarOpen(true);
    };

    const closeSidebar = () => {
        setSidebarOpen(false);
    };

    return (
        <Fragment>
            <div className="container">
                <Header sidebarOpen={sidebarOpen} openSidebarFunc={openSidebar} />
                <h1>Dashboard</h1>
                <Sidebar sidebarOpen={sidebarOpen} closeSidebarFunc={closeSidebar} />
               {/* <Main />*/}
            </div>
        </Fragment>
    );
}

export default App;
