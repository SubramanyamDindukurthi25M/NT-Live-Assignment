import { useLocation } from "react-router-dom"

export const WelcomePage = () => {
    const location = useLocation()

    const {
        name,
        email
    } = location.state.userDetails
    return (
        <>
            <p className="lead">
                Welcome <span className="text-primary">{name && name}</span> ,your account has been created with email id <span className="text-success">{email && email}</span>.
            </p>
        </>
    )
}