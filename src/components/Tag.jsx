import { useState } from "react"

function Tag(tag){

    const [active, isActive] = useState(false);

    const handleClick = () => {
        !isActive ;
    }
    return(
        <button className={isActive ? "tag-btn active" : "tag-btn"}>{tag}</button>
    )
}

export default Tag;