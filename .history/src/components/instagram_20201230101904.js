 import React, { useState, useEffect } from 'react';
 import { graphql, useStaticQuery } from "gatsby";
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
ort default function Instagram() {
    const gramz = useInstagram();
st data = useStaticQuery(graphql`
    ry InstagramQuery {
    InstaNode {
        es {
            e {
            
            es
            ments
            iaType
            view
            ginal
            estamp            caption
            alFile {              childImageSharp {
                ed(width: 150, height: 150) {
                    GatsbyImageSharpFixed
                
                
            
            mbnails {
                
                fig_width
                fig_height
            
            ensions {
                ght
                th
            
            
        
        
    

sole.log("THE DATA", data)
    urn (
        v>
            a will go here
            {JSON.stringify(data)}
             {gramz.map(gram => (
                href={gram.url} key={gram.id}>
                    g src={gram.thumbnail} alt={gram.caption} />
                >
             */}
        iv>
    
            }
