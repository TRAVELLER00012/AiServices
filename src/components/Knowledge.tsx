import { useState } from "react"
import styles from "../styles/knowledge.module.css"
import YellowCard from "./YellowCard"

const Knowledge = () => {
    const [data] = useState<{heading:string,description:string}[]>([
        {heading:"Healthcare Diagnosis",description:"AI will enhance diagnostics, treatment personalization, and drug discovery, revolutionizing healthcare for more precise and effective interventions, ultimately saving lives and reducing costs."},
        {heading:"Autonomous Vehicles",description:"AI-powered self-driving cars promise safer and more efficient transportation, reducing accidents and traffic congestion while providing mobility for the elderly and disabled."},
        {heading:"Education Revolution",description:"AI facilitates personalized learning experiences, adapts to individual student needs, and automates administrative tasks, transforming education into a more accessible, efficient, and tailored system."},
        {heading:"Environmental Sustainability",description:"AI aids in monitoring and managing environmental resources, predicting natural disasters, optimizing energy consumption, and contributing to sustainable practices for a healthier planet."},
        {heading:"Automation ",description:"In the future, AI-driven automation will transform industries, optimizing processes, reducing manual labor, and enhancing efficiency, fostering innovation across diverse sectors for unprecedented growth and productivity."},
        {heading:"Cybersecurity Reinforcement",description:"AI will fortify digital defenses, autonomously detecting and thwarting cyber threats, ensuring robust security and safeguarding sensitive data in an ever-evolving technological landscape."}
    ])
    const [i,setI] = useState<{start:number,end:number}>({start:0,end:3})
    const showData = () =>{
        const elements : JSX.Element[] = []
        for (let index = i.start; index < i.end ; index++ ){
            elements.push(
                <YellowCard fixedWidth={true} heading={data[index].heading} key={index}>{data[index].description}</YellowCard>
            )
        }
        return elements;
    }

    const nextButton = () =>{
        setI({start: i.start + 3, end: i.end+3})        
    }
    const previousButton = () =>{
        setI({start: i.start - 3, end: i.end -3 })                
    }
    return (
    <div>
        <div className={styles.headings}>
            <h1 className={styles.heading}>
                Artificial Intelligence in the Future
            </h1>
        </div>
        <div className={styles.readBox}>
            {showData()}
        </div>
        <div className={styles.controls}>
            
            <svg className={i.start === 0 ? [styles.arrow,styles.disabled].join(" ") : styles.arrow} onClick={() =>{if(i.start !== 0) previousButton()}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill='#FF7000'><path d="M17 7.8v8.5c0 .8-.8 1.3-1.5.9L8.4 13c-.6-.4-.6-1.3 0-1.7l7.1-4.2c.7-.6 1.5-.1 1.5.7z"></path></g></svg>
            <svg className={i.end === data.length ? [styles.arrow,styles.disabled].join(" ") : styles.arrow} onClick={() =>{if(i.end !== data.length) nextButton()}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill='#FF7000'><path d="M7 16.2V7.8c0-.8.8-1.3 1.5-.9l7.1 4.2c.6.4.6 1.3 0 1.7L8.5 17c-.7.5-1.5 0-1.5-.8z"></path></g></svg>

        </div>

    </div>
    )
}

export default Knowledge