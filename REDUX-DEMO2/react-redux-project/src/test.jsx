import React from 'react'
import {useState,useEffect} from "react"
import {fetchApi} from "./testfunction"

function Test() {
    const [loadedMeetUp, setLoadedMeetUp] = useState([]);
    console.log(loadedMeetUp)

    useEffect( () => {
        async function fetchData(input) {
          let data = await fetchApi(input);
          setLoadedMeetUp(data);
        }
        fetchData("all");
      }, []);
    
    

  return (
    <div>Test</div>
  )
}

export default Test