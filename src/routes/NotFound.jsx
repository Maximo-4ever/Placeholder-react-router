import { Link } from "react-router-dom"

function NotFound() {
    return (
        <div>
            <h1>404</h1>
            <Link to="/" className="btn btn-primary">Home</Link>
        </div>
    )
}

export default NotFound
