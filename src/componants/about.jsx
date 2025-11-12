import React, { Component } from 'react';
import "./about.css"
import frame from "../assets/Frame.svg"
import Itachi from "../assets/about.svg"
import Me from "../assets/me.svg"
import Line from "../assets/line.svg"
import figma from "../assets/figma.svg"
import per1 from "../assets/percent1.svg"
import Photo from "../assets/photoshop.svg"
import per2 from "../assets/percent2.svg"
import illust from "../assets/ai.svg"
import per3 from "../assets/percent3.svg"
import skill from "../assets/skill.svg"
const About = () => {
    return ( 
    <>
    
        <div class="abdalrhman">ABDALRHMAN</div>
        <div class="mohamed">MOHAMED</div>
        <div class="abd">Abdalrhman</div>
        <div class="frame"><img src={frame} width="50%" ></img></div>
        <div class="itachi"><img src={Itachi}></img></div>
        <div class="about">ABOUT ME</div>
        <div class="me"><img src={Me}></img></div>
        <div class="hi">HI! There</div>
        <div class="info">HI there my name is Abdalrhman mohamed im <br/>
             a UX/UI designer, I spend 3 years learning user <br/>
              experience, i like doing creative designs full of <br/>
               interactions, also i like to do minimalistic logos,<br/> 
                im not afraid to go beyond boundaries and <br/>
                 create something that's truly unique, so lets <br/>
              make something great together.</div>
              <div class="categories">
                  <div class="edu">Education</div> 
                  <div class="soft">Software skills</div>     
              </div>
              <div class="sec">
                <div class="year">2012 - <br/>
                2021
                <br/>
                <br/>
                <br/>
                2022 - <br/>
                2025
            </div>
            <div class="line"><img src={Line}></img></div>
            <div class="grad">Graduated from <br/>
                Mansoura college
            <br/>
            <br/>Student in user <br/>
                    experience program in <br/>
                    Egypt university of <br/>
                    informatics</div>
            
                    
               </div>
                <div class="figma" >
                    <img class="fig" src={figma}></img>
                    {/* <div>figma</div> */}
                <div>
                    <div class="figmaa">figma</div>
                    <img class="per1" src={per1}></img>
                </div>
               </div>
               <div class="photoshop" >
                    <img class="pho" src={Photo}></img>
                 {/* <div>figma</div> */}
                <div>
                    <div class="photo">photoshop</div>
                    <img class="per2" src={per2}></img>
                </div>
               </div>
               <div class="photoshop" >
                    <img class="pho" src={illust}></img>
                    {/* <div>figma</div> */}
                <div>
                    <div class="photo">Illustrator</div>
                    <img class="per2" src={per3}></img>
                </div>
               </div>
               <div class="skill"><img src={skill} width="100%"></img></div>
    </>
     );
}
 
export default About;