import React from 'react'
import './skills.css'
import mysql from '../../assets/mysql.svg'
import postman from '../../assets/postman.svg'
import springboot from '../../assets/spring.svg'
import java from '../../assets/java.svg'
import github from '../../assets/git.svg'
import figma from '../../assets/figma.svg'
import mongoDb from '../../assets/mongo.svg'
import firebase from '../../assets/firebase.svg'
import ts from '../../assets/ts.svg'
import js from '../../assets/js.svg'
import angular from '../../assets/angular.svg'
import node from '../../assets/node.svg'
import react from '../../assets/react.svg'


const Skills = () => {
  return (
    <section id ='skills'>
        <h1 className='worksTittle'>My Skills</h1>
        <div className='workImg'>
            <img src={mysql} alt='' className='worksImg'/>
            <img src={postman} alt='' className='worksImg'/>
            <img src={springboot} alt='' className='worksImg'/>
            <img src={java} alt='' className='worksImg'/>
            <img src={github} alt='' className='worksImg'/>
        </div>
        <div className='workImg'>
            <img src={figma} alt='' className='worksImg'/>
            <img src={firebase} alt='' className='worksImg'/>
            <img src={mongoDb} alt='' className='worksImg'/>
            <img src={ts} alt='' className='worksImg'/>
            <img src={js} alt='' className='worksImg'/>
            <img src={angular} alt='' className='worksImg'/>
        </div> 
        <div className='workImg'>   
            <img src={node} alt='' className='worksImg'/>
            <img src={react} alt='' className='worksImg'/>
        </div>
    </section>
  )
}

export default Skills
