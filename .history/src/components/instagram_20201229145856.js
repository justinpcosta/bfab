import React, { useState, useEffect } from 'react';

const url = '/.netlify/functions/instagram';

function useInstagram() {
    const[posts, setPosts] = useState([]);
    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(posts => {
            setPosts(posts);
        })
    });
}

export default function Instagram() {
    const gramz = useInstagram();
    return(
        <div>
            {gramz.map(gram => (
                <img key={gram.id} src={gram.url} alt={gram.caption} />
            ))}
        </div>
    )
}