import { Link } from "react-router-dom";

export const Card = ({ brewery }) => {

    return (
        <div className="card">
            <p>{brewery.name}</p>
            <p>{brewery.brewery_type}</p>
            <p>{brewery.city}</p>
            <Link to={'/' + brewery.id}>
                <button>View details</button>
            </Link>
        </div>
    )
}

