import { useState } from 'react'
import { useDispatch } from 'react-redux'

import { loginUser } from '_redux/actions/users.action'

const SignInForm = () => {
    const [formValues, setFormValues] = useState({ username: '', password: '' })
    const dsp = useDispatch()

    const inputHandler = (e) =>
        setFormValues({ ...formValues, [e.target.name]: e.target.value })

    const submitHandler = (e) => {
        e.preventDefault()
        dsp(loginUser(formValues))
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="form mb-2">
                <input
                    type="text"
                    id="username-login"
                    className="form-control"
                    name="username"
                    value={formValues.username}
                    onChange={(e) => inputHandler(e)}
                />
                <label className="form-label mb-0" htmlFor="username-login">
                    Username
                </label>
            </div>

            <div className="form">
                <input
                    type="password"
                    id="password"
                    className="form-control"
                    aria-describedby="testExample1"
                    name="password"
                    value={formValues.password}
                    onChange={(e) => inputHandler(e)}
                />
                <label className="form-label mb-0" htmlFor="password-login">
                    Password
                </label>
            </div>
            <div id="textExample1" className="form-text mb-3">
                <a href="#testExample1" className="text-warning">
                    Forgot password?
                </a>
            </div>

            <button type="submit" className="btn btn-warning btn-block">
                Sign in
            </button>
        </form>
    )
}

export default SignInForm
