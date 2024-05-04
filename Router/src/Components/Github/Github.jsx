import react,{ useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

export default function Github(){
    // const [data , setData] = useState([]);
    // useEffect( ()=>{
    //     fetch('https://api.github.com/users/hiteshchoudhary')
    //             .then(response => response.json())
    //             .then(data => {
    //                 setData(data)
    //             })  
    // },[])
    const data = useLoaderData();
    return (
        <><h1 className='w-1/2 mx-auto my-3 p-2 bg-black text-center text-3xl text-white'>GITHUB FOLLOWERS :- {data.followers}</h1>
        <img src={data.avatar_url} className="mx-auto rounded-2xl " alt="Github Photo"></img>
        </>
    )
}

export const getLoaderInfo = async ()=>{
    const response = await fetch('https://api.github.com/users/hiteshchoudhary')
    return response.json();
}