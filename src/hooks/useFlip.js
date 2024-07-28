import React, {useState} from "react"

const useFlip = (initialState = true) => {
    const [flip, setFlip] = useState(initialState);
    const useFlip = () => {
        setFlip(flip => !flip)
    }
    return [flip, useFlip]
}

export default useFlip;