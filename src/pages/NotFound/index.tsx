import { ArrowLeftCircleIcon } from "lucide-react"
import { Link } from "react-router-dom"

const NotFound = () => {
    return (
        <div className="min-h-screen bg-primary text-white flex items-center justify-center flex-col gap-3">
            <h1 className="text-2xl">404 - Page Not Found</h1>
            <Link to="/" className="text-white hover:underline flex items-center gap-3"> <ArrowLeftCircleIcon size={20} /> Back to Home</Link>
        </div>
    )
}

export default NotFound