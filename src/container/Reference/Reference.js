import React, { useRef } from 'react';

function Reference(props) {
    const nameRef = useRef();
    const emailRef = useRef();

    const handlesubmit = () => {
        console.log(nameRef.current.value, emailRef.current.value);

        nameRef.current.style.border = '1px solid green';
        nameRef.current.style.backgroundColor = 'pink';
        emailRef.current.focus();
    }

    return (
        <div>
            <section id="appointment" className="appointment">
                <div className="php-email-form">
                    <div>
                        <div className="col-md-4 form-group mt-3 mt-md-0 " >
                            <input ref={nameRef} type="text" className="form-control" name="name" id="name" placeholder="Your name" />
                            <div className="validate" />
                        </div>
                    </div>
                    <div>
                        <div className="col-md-4 form-group mt-3 mt-md-0">
                            <input ref={emailRef} type="email" className="form-control" name="email" id="email" placeholder="Your Email" />
                            <div className="validate" />
                        </div>
                    </div>
                    <div className="text-center">
                        <button type="submit" onClick={() => handlesubmit()}>submit</button>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Reference;