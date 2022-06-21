import React from 'react';
import * as yup from 'yup';
import { Form, Formik, useFormik } from 'formik';

function Appointment(props) {
  let schema = yup.object().shape({
    name: yup.string().required("please enter name."),
    email: yup.string().required("please enter email id.").email("please enter valid email."),
    phone: yup.string().required("plese enter your phone number"),
    date: yup.string().required("please enter Appointment Date."),
    department: yup.string().required('please select department.')
  });

  const formikApp = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      date: '',
      department: '',
    },
    validationSchema: schema,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const { handleChange, errors, handleSubmit, touched, handleBlur } = formikApp;
  return (
    <main id="main">
      <section id="appointment" className="appointment">
        <div className="container">
          <div className="section-title">
            <h2>Make an Appointment</h2>
            <p>Aenean enim orci, suscipit vitae sodales ac, semper in ex. Nunc aliquam eget nibh eu euismod. Donec dapibus
              blandit quam volutpat sollicitudin. Fusce tincidunt sit amet ex in volutpat. Donec lacinia finibus tortor.
              Curabitur luctus eleifend odio. Phasellus placerat mi et suscipit pulvinar.</p>
          </div>

          <Formik values={formikApp}>
            <Form action method="post" role="form" className="php-email-form" onSubmit={handleSubmit}>
              <div className="row">
                {/* name  */}
                <div className="col-md-4 form-group">
                  <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" onChange={handleChange} onBlur={handleBlur} />
                  <p>{errors.name && touched.name ? errors.name : ''}</p>
                </div>
                {/* email  */}
                <div className="col-md-4 form-group mt-3 mt-md-0">
                  <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" onChange={handleChange} onBlur={handleBlur} />
                  <p>{errors.email && touched.email ? errors.email : ''}</p>
                </div>
                {/* phone  */}
                <div className="col-md-4 form-group mt-3 mt-md-0">
                  <input type="tel" className="form-control" name="phone" id="phone" placeholder="Your Phone" data-rule="minlen:4" data-msg="Please enter at least 4 chars" maxlength="10" onChange={handleChange} onBlur={handleBlur} />
                  <p>{errors.phone && touched.phone ? errors.phone : ''}</p>
                </div>
              </div>
              {/* Appointment Date  */}
              <div className="row">
                <div className="col-md-4 form-group mt-3">
                  <input type="datetime" name="date" className="form-control datepicker" id="date" placeholder="Appointment Date" onChange={handleChange} onBlur={handleBlur} />
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
                <textarea className="form-control" name="message" rows={5} placeholder="Message (Optional)" defaultValue={""} />
                <div className="validate" />
              </div>

              <div className="mb-3">
                <div className="loading">Loading</div>
                <div className="error-message" />
                <div className="sent-message">Your appointment request has been sent successfully. Thank you!</div>
              </div>
              {/* button  */}
              <div className="text-center"><button type="submit">Make an Appointment</button></div>
            </Form>
          </Formik>
        </div>
      </section>
    </main>

  );
}

export default Appointment;