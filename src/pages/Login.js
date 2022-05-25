import React, { useState } from 'react';
import { useAuth } from 'utils/Auth';
import { Redirect } from 'react-router-dom';

export default function Login(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [user, setUser] = useState(null);
    const auth = useAuth();

    const handleLogin = () =>{
        setUser({'email':email, 'password':password});
        auth.login(user);
        <Redirect to="/" />
    };
    return (
        <>
            <div className="w-screen h-screen flex flex-col justify-center bg-blue-500">
                <div className="w-11/12 md:w-3/4 lg:w-1/3 m-auto bg-white rounded-lg p-8">
                    <p className="text-xs font-bold italic p-2 bg-purple-100 text-center text-purple-700">tidak ada logo hehe...</p>
                    <p className="text-xl text-center uppercase py-4 font-semibold tracking-wide mb-2">
                        Sistem Informasi Kependudukan<br/>Desa Way Huwi
                    </p>
                    {/* <form action=""> */}
                        <div className="grid grid-cols-3 gap-6 items-center">
                            <label className="font-semibold text-sm tracking-wide" htmlFor="email">EMAIL</label>
                            <input type="text" name="email" onChange={(e) => setEmail(e.target.value)}
                                className="col-span-2 bg-gray-200 rounded-md border border-white focus:border-blue-500 focus:outline-none p-1" />
                            <label className="font-semibold text-sm tracking-wide" htmlFor="password">PASSWORD</label>
                            <input type="password" name="password" onChange={(e) => setPassword(e.target.value)}
                                className="col-span-2 bg-gray-200 rounded-md border border-white focus:border-blue-500 focus:outline-none p-1" />
                            <div className="col-span-3">
                                <button onClick={handleLogin}
                                    className="w-full text-center text-white uppercase rounded-md bg-blue-600 p-2 font-semibold text-lg tracking-widest focus:outline-none focus:ring ring-blue-400">
                                    Masuk
                                </button>
                            </div>
                        </div>
                    {/* </form> */}
                </div>
            </div>
        </>
    );
}