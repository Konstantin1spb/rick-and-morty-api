import { Link } from "react-router-dom"

export const Episodes = ({data}) => {
    return (
        <main className="main-content">
            {data.map(({id, name, episode}) => 
                <div className="category-card" key={id}>
                    <Link to={`/category/episodes/${id}`}>
                        <span>{name} </span>
                        <span>{episode}</span>
                    </Link>
                </div>
            )}
        </main>
    )
}