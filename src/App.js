import React, { useContext, createContext, useState } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Sidebar from 'components/Sidebar';
import Dashboard from 'pages/Dashboard';

import Keluarga from 'pages/Keluarga/Keluarga';
import TambahKeluarga from 'pages/Keluarga/TambahKeluarga';
import LihatKeluarga from 'pages/Keluarga/LihatKeluarga';

import Dusun from 'pages/Dusun/Dusun';
import TambahDusun from 'pages/Dusun/TambahDusun';

import Rt from 'pages/RT/Rt';
import TambahRt from 'pages/RT/TambahRt';

import Settings from 'pages/Settings';
import Tables from 'pages/Tables';
import Footer from 'components/Footer';

import { AuthProvider } from 'utils/Auth';

import Login from 'pages/Login';

// Tailwind CSS Style Sheet
import 'assets/styles/tailwind.css';
import "@material-tailwind/react/tailwind.css";
import { useAuth } from 'utils/Auth';
function App() {
    const auth = useAuth();
    return (
        // <AuthProvider>
        //     { auth.user === null ? (
        //         <>
        //             <Switch>
        //                 <Route exact path="/login">
        //                     <Login />
        //                 </Route>
        //                 <Redirect from="*" to="/login" />
        //             </Switch>
        //         </>
        //     ) : ( 
                <>
                    <Sidebar />
                    <div className="md:ml-64">
                        <Switch>
                            <Route exact path="/" component={Dashboard} />

                            <Route exact path="/keluarga" component={Keluarga} />
                            <Route exact path="/tambahkeluarga" component={TambahKeluarga} />
                            <Route exact path="/lihatkeluarga/:id" component={LihatKeluarga} />

                            <Route exact path="/dusun" component={Dusun} />
                            <Route exact path="/tambahdusun" component={TambahDusun} />
                            
                            <Route exact path="/rt" component={Rt} />
                            <Route exact path="/tambahrt" component={TambahRt} />

                            <Route exact path="/settings" component={Settings} />
                            <Route exact path="/tables" component={Tables} />

                            <Redirect from="*" to="/" />
                        </Switch>
                        <Footer />
                    </div>
                </>
        //     )}
        // </AuthProvider>
    );
}


export default App;
