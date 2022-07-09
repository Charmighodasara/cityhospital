import React, { useEffect, useState } from 'react';
import * as yup from 'yup';
import { Form, Formik, useFormik } from 'formik';
import { NavLink, useHistory } from 'react-router-dom';

function Book_Appointment(props) {
  const [update, setUpdate] = useState(false)
  const history = useHistory()

  useEffect(() => {
    // console.log(props.location.state.id);
    let localData = JSON.parse(localStorage.getItem("bookApt"))
    if (props.location.state && localData !== null) {
      let fData = localData.filter((l) => l.id === props.location.state.id)
      console.log(fData[0]);
      formikApt.setValues(fData[0])
      setUpdate(true)
    }
  }, [])

  let handleInsert = () => {
    // console.log(values);
    let id = Math.floor(Math.random() * 1000)
    let data = {
      id: id,
      ...values
    }
    // console.log([data]);

    let localData = JSON.parse(localStorage.getItem("bookApt"))
    if (localData === null) {
      localStorage.setItem("bookApt", JSON.stringify([data]))
    } else {
      localData.push(data)
      localStorage.setItem("bookApt", JSON.stringify(localData))
    }
    history.push('/list_appointment')
  }

  let schema = yup.object().shape({
    name: yup.string().required("please enter name."),
    email: yup.string().required("please enter email id.").email("please enter valid email."),
    phone: yup.string().required("plese enter your phone number"),
    date: yup.string().required("please select Appointment Date."),
    department: yup.string().required('please select department.'),
    message: yup.string().required('please enter message.')
  });

  const handleUpdateData = (values) => {
    console.log(values);
    let localData = JSON.parse(localStorage.getItem("bookApt"))

    let uData = localData.map((u) => {
      if (u.id === values.id) {
        return values;
      } else {
        return u;
      }
    })
    console.log(uData);
    localStorage.setItem("bookApt", JSON.stringify(uData))
    history.replace()
    history.push('/list_appointment')
    formikApt.resetForm()
    setUpdate(false)
  }
  const formikApt = useFormik({
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
      if (update) {
        handleUpdateData(values)
      } else {
        handleInsert(values)
      }
 
    },
    enableReinitialize: true,
  });

  const { handleChange, errors, handleSubmit, touched, handleBlur, values } = formikApt;
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

          <Formik values={formikApt}>
            <Form className="php-email-form" onSubmit={handleSubmit}>
              <div className="row">
                {/* name  */}
                <div className="col-md-4 form-group">
                  <input
                    value={values.name}
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
                    value={values.email}
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
                    value={values.phone}
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
                  <input
                    value={values.date}
                    type="date"
                    name="date"
                    className="form-control datepicker"
                    placeholder="Appointment Date"
                    onChange={handleChange}
                    onBlur={handleBlur} />
                  <p>{errors.date && touched.date ? errors.date : ''}</p>
                </div>
                {/* department  */}
                <div className="col-md-4 form-group mt-3">
                  <select name="department" id="department" className="form-select" onChange={handleChange} onBlur={handleBlur} value={values.department}>
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
                  value={values.message}
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
              <div className="text-center">
                {
                  update ? <button type="submit">update an Appointment</button>
                    : <button type="submit">Book an Appointment</button>
                }


              </div>
            </Form>
          </Formik>
        </div>
      </section>
    </main>

  );
}

export default Book_Appointment;