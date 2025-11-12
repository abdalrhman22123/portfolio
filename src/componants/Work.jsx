import React, { Component } from 'react';
import "./Work.css"
import rec19 from "../assets/Rectangle 19.svg"
import web from "../assets/website.svg"
import iph from "../assets/iPhone 16 Pro.svg"
const Work = () => {
    return ( 
        <>
        <div class="wor">WORK</div>
               <div class="job">
                   <div class="apps"><img src={rec19} width="100%"></img></div>
                   <div class="websites"><img src={web} width="100%"></img></div>
               </div>
                <div class="logos"><img src={iph} width="100%"></img></div>
        </>
     );
}
 
export default Work;