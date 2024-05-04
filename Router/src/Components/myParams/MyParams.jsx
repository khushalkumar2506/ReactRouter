import {useParams} from 'react-router-dom'

export default function MyParams(){
    const {id} = useParams();
    return (
        <><h1 className='w-1/2 mx-auto my-3 p-2 bg-black text-center text-3xl text-white'>User Id :- {id}</h1></>
    )
} 