import React, { useState } from 'react';
import * as yup from 'yup';
import { Form, Formik, useFormik } from 'formik';


function Login_signup(props) {
    const [user, setUser] = useState('login')
    const [forgot, setForgot] = useState('flase')

    let schema = yup.object().shape({
        email: yup.string().required("please enter email.").email("please enter valid email."),
        password: yup.string().required("please enter password.")
    });

    const formik = useFormik({
        initialValues: {
            password: '',
            email: '',
        },
        validationSchema : schema,
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    const { handleChange, errors, handleSubmit } = formik;

    return (
        <main id="main">
            <section id="appointment" className="appointment">
                <div className="container">
                    {/* heading  */}
                    <div className="section-title">
                        {
                            forgot === 'true' ?
                                <h2>Forgot password</h2>
                                :
                                user === 'login' ?
                                    <h2>Login</h2>
                                    :
                                    <h2>signup</h2>
                        }
                    </div>
                    {/* name  */}
                    <Formik values={formik}>
                        <Form className="php-email-form" onSubmit={handleSubmit}>
                            <div>{
                                forgot === 'true' ?
                                    null
                                    :
                                    user === 'login' ?
                                        null
                                        :
                                        <div className="col-md-4 form-group mt-3 mt-md-0 " >
                                            <input type="text" className="form-control" name="name" id="name" placeholder="Your name" />
                                        </div>
                            }
                            </div>
                            {/* email  */}
                            <div>
                                <div className="col-md-4 form-group mt-3 mt-md-0">
                                    <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" onChange={handleChange} />
                                    <p>{errors.email}</p>
                                </div>
                            </div>
                            {/* password  */}
                            <div className="row">
                                {forgot === 'true' ?
                                    null
                                    :
                                    user === 'login' ?
                                        <div className="col-md-4 form-group">
                                            <input type="password" name="password" className="form-control" id="password" placeholder="Your password" onChange={handleChange} />
                                            <p>{errors.password}</p>
                                            <div>
                                                <input id="checkbox2" type="checkbox" onClick={() => setForgot('true')} /> <label > Forgot your password ? </label>
                                            </div>
                                        </div>
                                        :
                                        <div className="col-md-4 form-group">
                                            <input type="password" name="password" className="form-control" id="password" placeholder="Your password" />
                                        </div>
                                }

                            </div>
                            {/* submit  */}
                            {
                                forgot === 'true' ?
                                    <div className="text-center"><button type="submit">submit</button></div>
                                    :
                                    user === 'login' ?
                                        <div className="text-center"><button type="submit">Login</button></div>
                                        :
                                        <div className="text-center"><button type="submit">signup</button></div>
                            }
                            <div className="row">
                                <div className="col-md-4">
                                    {forgot === 'true' ?
                                        <div className="text-center"><button type="submit" onClick={() => setForgot('false')}> back</button>
                                        </div>
                                        :
                                        user === 'login' ?
                                            <div className="text-center">create an new account <button type="submit" onClick={() => setUser('signup')}> signup</button>
                                            </div>
                                            :
                                            <div className="text-center">already an account <button type="submit" onClick={() => setUser('login')}> login</button>
                                            </div>
                                    }

                                </div>
                            </div>
                        </Form>
                    </Formik>
                </div>
            </section>
        </main>

    );
}

export default Login_signup;