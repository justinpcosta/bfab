// import React, { useState, useEffect } from 'react';
// import { graphql, useStaticQuery } from "gatsby";
// //  const url = '/src/templates/instagram-component.js'
// //  function useInstagram() {
// //      const[posts, setPosts] = useState([]);
// //      useEffect(() => {
// //          fetch(url)
// //          .then(res => res.json())
// //          .then(data => {
// //              setPosts(data);
// //          });
// //      }, []);
// //      return posts;
 
// port default function Instagram() {
//   // const gramz = useInstagram();
// const data = useStaticQuery(graphql`
//   query InstagramQuery {
//     allInstaNode {
//         edges {
//           node {
//             id
//             likes
//             comments
//             mediaType
//             preview
//             original
//             timestamp            caption
//             localFile {              childImageSharp {
//                 fixed(width: 150, height: 150) {
//                   ...GatsbyImageSharpFixed
//                 }
//               }
//             },
//             thumbnails {
//               src
//               config_width
//               config_height
//             }
//             dimensions {
//               height
//               width
//             }
//           }
//         }
//       }
//     }
// `)

// console.log("THE DATA", data)

//   return (
//       <div>
//           data will go here
//              {JSON.stringify(data)}
//           {/* {gramz.map(gram => (
//               <a href={gram.url} key={gram.id}>
//                   <img src={gram.thumbnail} alt={gram.caption} />
//               </a>
//           ))} */}
//       </div>
//   )
//             }
