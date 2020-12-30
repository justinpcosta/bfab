import React, {
    useState,
    useEffect
} from 'react';
import {
    graphql,
    useStaticQuery
} from "gatsby";
import Img from "gatsby-image"


export default function Instagram() {

    // YOU CAN CHANGE THE AMOUNT OF POSTS SHOWN BY CHANGING THE "LIMIT" NUMBER BELOW
    const {allInstaNode} = useStaticQuery(graphql`
        query InstagramQuery {
            allInstaNode(limit: 5) {
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
                        localFile {              
                            childImageSharp {
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

    // SEE THE OUTPUT IN DEVTOOLS
    console.log("INSTAGRAM DATA", allInstaNode)

    return ( 
        <div>
         { allInstaNode.edges.map(({node: post}) => {
             // you have access to more than just caption,likes,etc.. to see all the options, inespect the "allInstaNode" variable within devtools. A "post" here is equal to "node" within the data. 
             return (<>
                {/* <p>CAPTION: {post.caption}</p> */}
                {/* <p>LIKES: {post.likes}</p> */}
                {/* <img src={post.original} /> */}
                <img src={post.thumbnail} />
                {/* optimized image but smaller 300x300 */}
                {/* <Img fixed={post.localFile.childImageSharp.fixed} /> */}
            </>)
         }
            
          )}
        </div>
    )
}