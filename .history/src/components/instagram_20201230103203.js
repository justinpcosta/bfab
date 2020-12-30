import React, {
    useState,
    useEffect
} from 'react';
import {
    graphql,
    useStaticQuery
} from "gatsby";
import Img from "gatsby-image"
//  const url = '/src/templates/instagram-component.js'
//  function useInstagram() {
//      const[posts, setPosts] = useState([]);
//      useEffect(() => {
//          fetch(url)
//          .then(res => res.json())
//          .then(data => {
//              setPosts(data);
//          });
//      }, []);
//      return posts;

export default function Instagram() {
    // const gramz = useInstagram();
    const {allInstaNode} = useStaticQuery(graphql`
        query InstagramQuery {
            allInstaNode {
                edges {
                    node {
                        id
                        likes
                        comments
                        mediaType
                        preview
                        original
                        timestamp            caption
                        localFile {              childImageSharp {
                            fixed(width: 150, height: 150) {
                            ...GatsbyImageSharpFixed
                            }
                        }
                        },
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
        }
        `)

    console.log("THE DATA", allInstaNode)

    return ( 
        <div>
         { allInstaNode.edges.map({node: post} => {
             console.log(post)
             return (<>
                <p>CAPTION: {post.caption}</p>
                <p>LIKES: {post.likes}</p>
                <img src={post.original} />
                {/* <Img fixed={post.localFile.childImageSharp.fixed} /> */}
            </>)
         }
            
          )}
        </div>
    )
}