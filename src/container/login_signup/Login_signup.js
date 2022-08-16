import React, { useContext, useState } from 'react';
import * as yup from 'yup';
import { Form, Formik, useFormik } from 'formik';
import { themeContext } from '../../context/ThemeContext';
import { useDispatch } from 'react-redux';
import { singUpAction } from '../../Redux/Action/auth.action';


function Login_signup(props) {
    const [user, setUser] = useState('login')
    const [forgot, setForgot] = useState('flase')

    let schemaobj, initialval;
    if (forgot === 'true') {
        schemaobj = {
            email: yup.string().required("please enter email.").email("please enter valid email."),
        }
        initialval = {
            email: '',
        }
    } else if (user === 'login') {
        schemaobj = {
            email: yup.string().required("please enter email.").email("please enter valid email."),
            password: yup.string().required("please enter password."),

        }
        initialval = {
            password: '',
            email: '',

        }
    } else if (user === 'signup') {
        schemaobj = {
            name: yup.string().required("please enter name."),
            email: yup.string().required("please enter email id.").email("please enter valid email."),
            password: yup.string().required("please enter password.")
        }
        initialval = {
            name: '',
            password: '',
            email: '',
        }
    }

    let dispatch = useDispatch()

    let schema = yup.object().shape(schemaobj);
 
    const handledata = (values) => {
        // let localdata = JSON.parse(localStorage.getItem("user"))
        // localdata.push(values)
        // localStorage.setItem("user", JSON.stringify(localdata))

        // if (localdata === null) {
        //     localStorage.setItem("user", JSON.stringify([values]))
        // } else {
        //     localdata.push(values)
        //     localStorage.setItem("user", JSON.stringify(localdata))
        // }
        // console.log(values);

        dispatch(singUpAction(values))

    }

    const handleLogin = () => {
        localStorage.setItem("user", "123456")
    }

    const formik = useFormik({
        initialValues: initialval,
        validationSchema: schema,
        onSubmit: values => {
            if (user === 'login') {
                handleLogin()
            } else {
                handledata(values)
            }
        },
        enableReinitialize: true,
    });

    const { handleChange, errors, handleSubmit, touched, handleBlur } = formik;
    const value = useContext(themeContext);
    return (
        <main id="main">
            <section id="appointment" className={` appointment ${value.theme}`}>
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
                                            <input type="text" className="form-control" name="name" id="name" placeholder="Your name" onChange={handleChange} onBlur={handleBlur} />
                                            <p>{errors.name && touched.name ? errors.name : ''}</p>
                                        </div>
                            }
                            </div>
                            {/* email  */}
                            <div>
                                {
                                    forgot === 'true' ?
                                        <div className="col-md-4 form-group mt-3 mt-md-0">
                                            <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" onChange={handleChange} onBlur={handleBlur} />
                                            <p>{errors.email && touched.email ? errors.email : ''}</p>
                                        </div>
                                        :
                                        user === 'login' ?
                                            <div className="col-md-4 form-group mt-3 mt-md-0">
                                                <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" onChange={handleChange} onBlur={handleBlur} />
                                                <p>{errors.email && touched.email ? errors.email : ''}</p>
                                            </div>
                                            :
                                            <div className="col-md-4 form-group mt-3 mt-md-0">
                                                <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" onChange={handleChange} onBlur={handleBlur} />
                                                <p>{errors.email && touched.email ? errors.email : ''}</p>
                                            </div>
                                }

                            </div>
                            {/* password  */}
                            <div className="row">
                                {forgot === 'true' ?
                                    null
                                    :
                                    user === 'login' ?
                                        <div className="col-md-4 form-group">
                                            <input type="password" name="password" className="form-control" id="password" placeholder="Your password" onChange={handleChange} onBlur={handleBlur} />
                                            <p>{errors.password && touched.password ? errors.password : ''}</p>
                                            <div>
                                                <input type="checkbox" onClick={() => setForgot('true')} onChange={handleChange} onBlur={handleBlur} /> <label > Forgot your password ? </label>
                                            </div>
                                        </div>
                                        :
                                        <div className="col-md-4 form-group">
                                            <input type="password" name="password" className="form-control" id="password" placeholder="Your password" onChange={handleChange} onBlur={handleBlur} />
                                            <p>{errors.password && touched.password ? errors.password : ''}</p>
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
                                        <div className="text-center">Go back to login / signup<a onClick={() => setForgot('false')}> Back</a>
                                        </div>
                                        :
                                        user === 'login' ?
                                            <div className="text-center">create an new account <a onClick={() => setUser('signup')}> Signup</a>
                                            </div>
                                            :
                                            <div className="text-center">already an account <a onClick={() => setUser('login')}> Login</a>
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