import React, { useState, useEffect } from 'react';
import { graphql } from "gatsby";
// const url = '/src/templates/instagram-component.js';

// function useInstagram() {
//     const[posts, setPosts] = useState([]);
//     useEffect(() => {
//         fetch(url)
//         .then(res => res.json())
//         .then(data => {
//             setPosts(data);
//         });
//     }, []);
//     return posts;
// }

export default function Instagram({data}) {
    console.log("IS THERE DATA?", data)
    // const gramz = useInstagram();
    return (
        <div>
            data will go here
            {/* {gramz.map(gram => (
                <a href={gram.url} key={gram.id}>
                    <img src={gram.thumbnail} alt={gram.caption} />
                </a>
            ))} */}
        </div>
    )
}

// export const pageQuery = graphql`
//     query instagramQuery {
        
//     }

// `;