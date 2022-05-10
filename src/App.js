import { Switch, Route, Redirect } from 'react-router-dom';
import Sidebar from 'components/Sidebar';
import Dashboard from 'pages/Dashboard';

import Keluarga from 'pages/Keluarga';
import TambahKeluarga from 'pages/TambahKeluarga';
import Dusun from 'pages/Dusun';
import Rt from 'pages/Rt';

import Settings from 'pages/Settings';
import Tables from 'pages/Tables';
// import Maps from 'pages/Maps';
import Footer from 'components/Footer';

// Tailwind CSS Style Sheet
import 'assets/styles/tailwind.css';
import "@material-tailwind/react/tailwind.css";

function App() {
    return (
        <>
            <Sidebar />
            <div className="md:ml-64">
                <Switch>
                    <Route exact path="/" component={Dashboard} />

                    <Route exact path="/keluarga" component={Keluarga} />
                    <Route exact path="/tambahkeluarga" component={TambahKeluarga} />

                    <Route exact path="/dusun" component={Dusun} />
                    <Route exact path="/rt" component={Rt} />

                    <Route exact path="/settings" component={Settings} />
                    <Route exact path="/tables" component={Tables} />

                    <Redirect from="*" to="/" />
                </Switch>
                <Footer />
            </div>
        </>
    );
}

export default App;
