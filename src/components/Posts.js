import { useState, useEffect } from "react";

function Posts(){

    const [resourceType, setResourceType] = useState('posts');

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
        .then(response => response.json())
        .then(json => console.log(json));
    }, [resourceType]);

    const changeResourceType = (resourceType) => {
        setResourceType(resourceType);
    }

    return(
        <div>
            <h1>{resourceType}</h1>
            <div>
                <button onClick={() => changeResourceType('posts')}>Posts</button>
                <button onClick={() => changeResourceType('comment')}>Comments</button>
                <button onClick={() => changeResourceType('todos')}>Todos</button>
            </div>
        </div>
    )
}

export default Posts;