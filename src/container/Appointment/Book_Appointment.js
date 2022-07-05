import React from 'react';
import * as yup from 'yup';
import { Form, Formik, useFormik } from 'formik';
import { NavLink, useHistory } from 'react-router-dom';

function Book_Appointment(props) {
  
  const history = useHistory()

  let handleInsert = (values) => {
    console.log(values);
    let id = Math.floor(Math.random() * 1000)
    let data = {
      id: id,
      ...values
    }
    console.log([data]);
    let localData = JSON.parse(localStorage.getItem("bookApt"))
    if (localData === null){
      localStorage.setItem("bookApt", JSON.stringify([data]))
    }else{
      localData.push(data)
      localStorage.setItem("bookApt", JSON.stringify(localData))
    }
  }

  let schema = yup.object().shape({
    name: yup.string().required("please enter name."),
    email: yup.string().required("please enter email id.").email("please enter valid email."),
    phone: yup.string().required("plese enter your phone number"),
    date: yup.string().required("please select Appointment Date."),
    department: yup.string().required('please select department.'),
    message: yup.string().required('please enter message.')
  });

  const formikApp = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      date: '',
      department: '',
      message: '',
    },
    validationSchema: schema,
    onSubmit: values => {
      // alert(JSON.stringify(values, null, 2));
      handleInsert(values)
      history.push('/list_appointment')
    },
    enableReinitialize: true,
  });

  const { handleChange, errors, handleSubmit, touched, handleBlur } = formikApp;
  return (
    <main id="main">
      <section id="appointment" className="appointment">
        <div className="container">
          <div className="section-title">
            <h2>Book An Appointment</h2>
            <div className='row'>
              <div className='col-6'>
                <NavLink to={'/appointment'} exact>Book An Appointment</NavLink>
              </div>
              <div className='col-6'>
                <NavLink to={'/list_appointment'} exact>List An Appointment</NavLink>
              </div>
            </div>
          </div>

          <Formik values={formikApp}>
            <Form className="php-email-form" onSubmit={handleSubmit}>
              <div className="row">
                {/* name  */}
                <div className="col-md-4 form-group">
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Your Name"
                    onChange={handleChange}
                    onBlur={handleBlur} />
                  <p>{errors.name && touched.name ? errors.name : ''}</p>
                </div>
                {/* email  */}
                <div className="col-md-4 form-group mt-3 mt-md-0">
                  <input
                    type="text"
                    className="form-control"
                    name="email"
                    placeholder="Your Email"
                    data-rule="email"
                    onChange={handleChange}
                    onBlur={handleBlur} />
                  <p>{errors.email && touched.email ? errors.email : ''}</p>
                </div>
                {/* phone  */}
                <div className="col-md-4 form-group mt-3 mt-md-0">
                  <input
                    type="tel"
                    className="form-control"
                    name="phone"
                    placeholder="Your Phone"
                    onChange={handleChange}
                    onBlur={handleBlur} />
                  <p>{errors.phone && touched.phone ? errors.phone : ''}</p>
                </div>
              </div>
              {/* Appointment Date  */}
              <div className="row">
                <div className="col-md-4 form-group mt-3">
                  <input type="date"
                    name="date"
                    className="form-control datepicker"
                    placeholder="Appointment Date"
                    onChange={handleChange}
                    onBlur={handleBlur} />
                  <p>{errors.date && touched.date ? errors.date : ''}</p>
                </div>
                {/* department  */}
                <div className="col-md-4 form-group mt-3">
                  <select name="department" id="department" className="form-select" onChange={handleChange} onBlur={handleBlur}>
                    <option value>Select Department</option>
                    <option value="Department 1">Department 1</option>
                    <option value="Department 2">Department 2</option>
                    <option value="Department 3">Department 3</option>
                  </select>
                  <p>{errors.department && touched.department ? errors.department : ''}</p>
                </div>
              </div>
              {/* Message */}
              <div className="form-group mt-3">
                <textarea
                  className="form-control"
                  name="message"
                  rows={5}
                  placeholder="Message "
                  defaultValue={""}
                  onChange={handleChange}
                  onBlur={handleBlur} />
                <p>{errors.message && touched.message ? errors.message : ''}</p>
              </div>

              <div className="mb-3">
                <div className="loading">Loading</div>
                <div className="error-message" />
                <div className="sent-message">Your appointment request has been sent successfully. Thank you!</div>
              </div>
              {/* button  */}
              <div className="text-center"><button type="submit">Book an Appointment</button></div>
            </Form>
          </Formik>
        </div>
      </section>
    </main>

  );
}

export default Book_Appointment;