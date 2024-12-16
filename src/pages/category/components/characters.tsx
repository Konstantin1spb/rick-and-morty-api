import { Link } from "react-router-dom"

export const Characters = ({data}) => {
    return (
        <main className="main-content">
            {data.map(({id, name, image}) => 
                <div className="category-card" key={id}>
                    <Link to={`/category/characters/${id}`}>
                        <div>
                            <span>{name} </span>
                        </div>
                        <img src={image} />
                    </Link>
                </div>
            )}
        </main>
    )
}