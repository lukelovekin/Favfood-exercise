import React from 'react'
// import React, { FunctionComponent } from "react"

interface FoodProps {
    name: string
    time: string
    image?: string
    place: string
}

const Food = ({ name, time, image, place }: FoodProps): JSX.Element => {
    return (
        <div>
            <h4>{name}</h4>
            <img alt="food" src={image || "none"} />
             <p>Best time to eat: <span>{time}</span></p>
             <p>Best place: <span>{place}</span></p>
        </div>

    )
}

export default (): JSX.Element => {
    return (
        <>
        <h2>Favourite Foods</h2>
        <div id="fav-foods">           
            <Food
            name="Pizza" 
            time="All the time" 
            place="Queen Magarhitra" 
            image="https://bit.ly/2rJ4rnn" 
            />
            <Food 
            name="Quesadillas" 
            time="Afternoon Siesta" 
            place="jonys ques"
            image="https://bit.ly/2ryI6bZ" 
            />
            <Food 
            name="Icecream Pancakes" 
            time="Breaky" 
            place="Pancakes r us" 
            image="https://bit.ly/2zUznp2" 
            />
            <Food 
            name="Loaded Fries" 
            time="During the game" 
            place="Fry palace" 
            // image="https://bit.ly/2GdfYVK" 
            />
        </div>
        </>
    )
}
