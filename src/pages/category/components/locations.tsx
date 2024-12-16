import { Link } from "react-router-dom"

export const Locations = ({data}) => {
    return (
        <main className="main-content">
            {data.map(({id, name, type}) => 
                <div className="category-card" key={id}>
                    <Link to={`/category/locations/${id}`}>
                        <span>{name} </span>
                        <span>{type}</span>
                    </Link>
                </div>
            )}
        </main>
    )
}