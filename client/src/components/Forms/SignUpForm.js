import { useState } from 'react'
import { useDispatch } from 'react-redux'

import { registerUser } from '_redux/actions/users.action'

const SignUpForm = () => {
    const [formValues, setFormValues] = useState({ username: '', password: '' })
    const dsp = useDispatch()

    const inputHandler = (e) =>
        setFormValues({ ...formValues, [e.target.name]: e.target.value })

    const submitHandler = (e) => {
        e.preventDefault()
        dsp(registerUser(formValues))
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="form mb-2">
                <input
                    type="text"
                    id="form1Example1"
                    className="form-control"
                    name="username"
                    value={formValues.username}
                    onChange={(e) => inputHandler(e)}
                />
                <label className="form-label mb-0" htmlFor="form1Example1">
                    Username
                </label>
            </div>

            <div className="form">
                <input
                    type="password"
                    id="form1Example2"
                    className="form-control"
                    aria-describedby="testExample1"
                    value={formValues.password}
                    onChange={(e) => inputHandler(e)}
                />
                <label className="form-label mb-0" htmlFor="form1Example2">
                    Password
                </label>
            </div>
            <div id="testExample1" className="form-text mb-3">
                No less then 8 characters
            </div>

            <button type="submit" className="btn btn-warning btn-block">
                Sign up
            </button>
        </form>
    )
}

export default SignUpForm
