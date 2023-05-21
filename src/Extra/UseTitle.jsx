import { document } from "postcss"
import { useEffect } from "react"

const UseTitle = titles =>{
    useEffect(()=>{
      return   document.title = `${titles}-Toy-center`
    },[titles])
}
export default UseTitle;