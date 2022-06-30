import React, { useState } from 'react'

function LoginForm({ Login, error }) {

    const [details, setDetails] = useState({ name: "", email: "", password: "" });



    const submitHandler = (e) => {

        Login(details);


        e.preventDefault();
    }


    return (
        <div>

            <div className="container">
                <form onSubmit={submitHandler}>
                    <h2>Login</h2>
                    {(error !== "") ? (<div className='error'>{error}</div>) : ""}
                    <div className="form-inner">
                        <div className="form-group">
                            <label htmlFor="name">Name: </label>
                            <input type="text" name="name" id="name" onChange={(e) => setDetails({ ...details, name: e.target.value })} value={details.name} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email: </label>
                            <input type="email" name="email" id="email" onChange={(e) => setDetails({ ...details, email: e.target.value })} value={details.email} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="name">Password: </label>
                            <input type="password" name="password" id="password" onChange={(e) => setDetails({ ...details, password: e.target.value })} value={details.password} />
                        </div>
                    </div>

                    <button type="submit" className='submitBtn'>Login</button>
                </form>
            </div>

        </div>
    )
}

export default LoginForm