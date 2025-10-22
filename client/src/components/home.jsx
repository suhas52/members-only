import { useContext } from "react";
import { UserContext } from '../App';


function Home() {

    const { user, loading} = useContext(UserContext);

    if (loading) return <div>Loading...</div>;

    return ( 
        <p>{user.first_name}</p>
    )
}

export default Home;