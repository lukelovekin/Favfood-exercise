import React from "react"
// import { prependOnceListener } from 'process'

interface ItemProps {
    text: string
}

// const Item: React.FunctionComponent<ItemProps> = ({ text }) => {
//     let array = text.split(" ")
//     return (
//         <li>
//             <p>
//                 <span style={{ color: "red" }}>{array[0]} </span>{array.slice(1).join(" ")}
//             </p>
//         </li>
//     )
// }

const Item = ({text}: ItemProps): JSX.Element => {
    let firstWord = text.split(" ")[0]
    let theRest = text.split(" ").slice(1).join(" ")
        return (
            <li>
                <p>
                    <span style={{ color: "red" }}>{firstWord}</span> {theRest}
                </p>
            </li>
        )
    

}

function apiCallToDataBase(): string[] {
    
    return [
        "Pop culture maven. Beer fan. Award-winning music junkie. Extreme coffee enthusiast.Thinker. Tv specialist.",
        "Friendly web maven.Bacon lover.General internet specialist.Incurable travelscholar.",
        "Subtly charming twitter lover. Social media fan. Incurable travel geek. Lifelong pop culture specialist. Tv scholar.",
        "Unable to type with boxing gloves on. Proud bacon fan. Music junkie. Coffee ninja."
    ]
}

const AboutMe = () => {
    return (
        <section id="about-me">
            <h2>About Me</h2>
            <img alt="pic" src="https://randomuser.me/api/portraits/women/8.jpg"/>
            <article>
                <ol>
                    {/* .forEach() can't use as it doesn't return a component to render to the page*/}
                    {/* .map() have to use as it returns a component*/}

                    {apiCallToDataBase().map(data => {
                        // inside .map loop
                        return <Item text={data} />
                    })}
                </ol>
            </article>
        </section>
    )
}

export default AboutMe
