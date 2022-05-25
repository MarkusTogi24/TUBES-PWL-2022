import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import AdminNavbar from './AdminNavbar';
import Icon from '@material-tailwind/react/Icon';
import H6 from '@material-tailwind/react/Heading6';

export default function Sidebar() {
    const [showSidebar, setShowSidebar] = useState('-left-64');
    return (
        <>
            <AdminNavbar
                showSidebar={showSidebar}
                setShowSidebar={setShowSidebar}
            />
            <div
                className={`h-screen fixed top-0 md:left-0 ${showSidebar} overflow-y-auto flex-row flex-nowrap overflow-hidden shadow-xl bg-white w-64 z-10 py-4 px-6 transition-all duration-300`}
            >
                <div className="flex-col items-stretch min-h-full flex-nowrap px-0 relative">
                    <a
                        href="/"
                        rel="noreferrer"
                        className="mt-2 text-center w-full inline-block"
                    >
                        <H6 color="gray">SIKEP Way Huwi</H6>
                    </a>
                    <div className="flex flex-col">

                        <hr className="my-4 min-w-full" />

                        <ul className="flex-col min-w-full flex list-none">
                            <li className="rounded-lg">
                                <NavLink
                                    to="/"
                                    exact
                                    className="flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg"
                                    activeClassName="bg-gradient-to-tr from-light-blue-500 to-light-blue-700 text-white shadow-md"
                                >
                                    <Icon name="dashboard" size="2xl" />
                                    Dashboard
                                </NavLink>
                            </li>
                        </ul>

                        <hr className="my-4 min-w-full" />

                        <p classsName="text-xs font-semibold uppercase mb-4">Dusun</p>

                        <ul className="flex-col min-w-full flex list-none">
                            <li className="rounded-lg mb-2">
                                <NavLink
                                    to="/dusun"
                                    className="flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg"
                                    activeClassName="bg-gradient-to-tr from-light-blue-500 to-light-blue-700 text-white shadow-md"
                                >
                                    <Icon name="map" size="2xl" />
                                    Dusun
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/tambahdusun"
                                    className="flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg"
                                    activeClassName="bg-gradient-to-tr from-light-blue-500 to-light-blue-700 text-white shadow-md"
                                >
                                    <Icon name="add" size="2xl" />
                                    Tambah Dusun
                                </NavLink>
                            </li>
                        </ul>
                        
                        <hr className="my-4 min-w-full" />

                        <p classsName="text-xs font-semibold uppercase mb-4">RT</p>

                        <ul className="flex-col min-w-full flex list-none">
                            <li className="rounded-lg mb-2 ">
                                <NavLink
                                    to="/rt"
                                    className="flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg"
                                    activeClassName="bg-gradient-to-tr from-light-blue-500 to-light-blue-700 text-white shadow-md"
                                >
                                    <Icon name="apartment" size="2xl" />
                                    RT
                                </NavLink>
                            </li>
                            <li className="rounded-lg mb-2 ">
                                <NavLink
                                    to="/tambahrt"
                                    className="flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg"
                                    activeClassName="bg-gradient-to-tr from-light-blue-500 to-light-blue-700 text-white shadow-md"
                                >
                                    <Icon name="add" size="2xl" />
                                    Tambah RT
                                </NavLink>
                            </li>
                        </ul>

                        <hr className="my-4 min-w-full" />

                        <p classsName="text-xs font-semibold uppercase mb-4">KK</p>

                        <ul className="flex-col min-w-full flex list-none">
                            <li className="rounded-lg mb-2 text-gray-700">
                                <NavLink
                                    to="/keluarga"
                                    className="flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg"
                                    activeClassName="bg-gradient-to-tr from-light-blue-500 to-light-blue-700 text-white shadow-md"
                                >
                                    <Icon name="people" size="2xl" />
                                    KK
                                </NavLink>
                            </li>
                            <li className="rounded-lg mb-2 text-gray-700">
                                <NavLink
                                    to="/tambahkeluarga"
                                    className="flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg"
                                    activeClassName="bg-gradient-to-tr from-light-blue-500 to-light-blue-700 text-white shadow-md"
                                >
                                    <Icon name="add" size="2xl" />
                                    Tambah KK
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}
