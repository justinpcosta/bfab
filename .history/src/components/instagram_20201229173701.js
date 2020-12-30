import React, { useState, useEffect } from 'react';

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

export default function Instagram() {
    const gramz = useInstagram();
    return (
        <div>
            {gramz.map(gram => (
                <a href={gram.url} key={gram.id}>
                    <img src={gram.thumbnail} alt={gram.caption} />
                </a>
            ))}
        </div>
    )
}

export const pageQuery = graphql`
query {
    allInstaNode {
      edges {
        node {
          id
          likes
          comments
          mediaType
          preview
          original
          timestamp
          caption
          hashtags
          localFile {
            childImageSharp {
              fixed(width: 150, height: 150) {
                ...GatsbyImageSharpFixed
              }
            }
          },
          permalink,
          carouselImages {
            preview,
            localFile {
            childImageSharp {
              fixed(width: 150, height: 150) {
                ...GatsbyImageSharpFixed
              }
            }
          },
          # Only available with the public api scraper
          thumbnails {
            src
            config_width
            config_height
          }
          dimensions {
            height
            width
          }
        }
      }
    }
  }`;