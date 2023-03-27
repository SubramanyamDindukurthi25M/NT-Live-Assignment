import { useState } from "react"
import { useNavigate } from "react-router-dom"

export const LoginPage = () => {
    // Local state
    const [userInputs, setUserInputs] = useState({
        name: '',
        email: '',
        password: ''
    })

    // To make form fields as controlled inputs
    const handleUserInputs = (e) => {
        setUserInputs({
            ...userInputs,
            [e.target.name]: e.target.value
        })
    }

    // invoke useNavigate() hook
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        setUserInputs({
            name: '',
            email: '',
            password: ''
        })
        navigate('/welcome', {
            state: {
                userDetails: userInputs
            }
        })
    }

    return (
        <form autoComplete="off">
            {/* 1 */}
            <div className="form-group">
                <label>
                    Username 
                </label>
                <input 
                    type="text" 
                    className="form-control" 
                    value={userInputs.name}
                    name='name'
                    onChange={handleUserInputs}
                />
            </div>

            {/* 2 */}
            <div className="form-group">
                <label>
                    Email address
                </label>
                <input 
                    type="text" 
                    className="form-control" 
                    value={userInputs.email}
                    onChange={handleUserInputs}
                    name='email'
                />
            </div>

            {/* 3 */}
            <div className="form-group">
                <label>
                    Password
                </label>
                <input 
                    type="password" 
                    className="form-control" 
                    value={userInputs.password}
                    onChange={handleUserInputs}
                    name='password'
                />
            </div>
            
            <button 
                type="submit" 
                onClick={handleSubmit} 
                className="btn btn-primary"
            >
                Submit</button>
        </form>
    )
}