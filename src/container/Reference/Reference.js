import React, { useRef } from 'react';

function Reference(props) {
    const nameRef = useRef();
    const emailRef = useRef ();

    const handlesubmit = () => {
        console.log(nameRef.current.value , emailRef.current.value);

        // nameRef.current.style.border = '1px solid red';
        nameRef.current.style.backgroundColor = 'pink';
        emailRef.current.focus();
    }

   

    return (
        <div>
            <input ref={nameRef} type='text' name='name' placeholder='name'/>
            <input ref={emailRef} type='email' name='email' placeholder='email'/>
            <button onClick={()=> handlesubmit()}>submit</button>
        </div>
    );
}

export default Reference;