import { document } from "postcss"
import { useEffect } from "react"

const UseTitle = titles =>{
    useEffect(()=>{
        document.title = `${titles}-Toy-center`
    },[titles])
}
export default UseTitle;