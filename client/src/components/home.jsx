import { useContext } from "react";
import { UserContext } from '../App';
import Posts from "./showposts";



function Home() {

    const { user, loading} = useContext(UserContext);

    if (loading) return <div>Loading...</div>;

    return ( 
        <Posts />
    )
}

export default Home;