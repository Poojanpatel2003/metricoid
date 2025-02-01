import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
const Home = () => {
    const [user,setUser]=useState(null);
    useEffect(()=>{
        axios.get('https://metricoid-vwzb.onrender.com/api/user').then(response=>setUser(response.data)).catch(error=>console.log(error))
    },[])
    return (
        <div>
            {user ? (
                <div>
                    <h1>Name: {user.name}</h1>
                    <p>Skills: {user.skills}</p>
                    <p>Hobbies: {user.Hobbies}</p>
                    <p>Passions: {user.Passions}</p>
                    <p>academicBackground: {user.academicBackground}</p>
                    </div>
            )
        : <p>Loading..</p>
        }
        </div>
    );
}

export default Home;
