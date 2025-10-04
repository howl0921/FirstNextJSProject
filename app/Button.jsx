"use client"
import {useState} from "react"
export default function Button() {
    const [likes, setLikes] = useState(0);

    function handleClick() {
        setLikes(likes + 1);
    }
    return <button onClick={() => {handleClick()}}>like ({likes})</button>
}