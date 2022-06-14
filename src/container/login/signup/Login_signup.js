import React, { useState } from 'react';

function Login_signup(props) {
    const [user, setUser] = useState('login')
    return (
        <main id="main">
            <section id="appointment" className="appointment">
                <div className="container">
                    <div className="section-title">
                        {
                            user === 'login' ?
                                <h2>Login</h2>
                                :
                                <h2>signup</h2>
                        }
                    </div>
                    <div className="php-email-form">
                        <div>{
                            user === 'login' ?
                                null
                                :
                                <div className="col-md-4 form-group mt-3 mt-md-0 " >
                                    <input type="text" className="form-control" name="name" id="name" placeholder="Your name" />
                                    <div className="validate" />
                                </div>
                        }
                        </div>
                        <div>
                            <div className="col-md-4 form-group mt-3 mt-md-0">
                                <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" />
                                <div className="validate" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4 form-group">
                                <input type="password" name="password" className="form-control" id="password" placeholder="Your password" />
                                <div className="validate" />
                            </div>
                        </div>
                        {
                            user === 'login' ?
                                <div className="text-center"><button type="submit">Login</button></div>
                                :
                                <div className="text-center"><button type="submit">signup</button></div>
                        }
                        <div className="row">
                            <div className="col-md-4 form-group">
                                {
                                    user === 'login' ?
                                        <div className="text-center">create an new account <button onClick={()=>setUser('signup')}>signup</button>
                                        </div>
                                        :
                                        <div className="text-center">already an account <button onClick={()=>setUser('login')}>login</button>
                                        </div>
                                }

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>

    );
}

export default Login_signup;