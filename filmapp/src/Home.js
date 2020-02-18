
import React, {useState,useEffect} from 'react';
import Axios from 'axios';
import Movie from './Component/Movie';
import 'bootstrap/dist/css/bootstrap.min.css';


const Home = (props) => {
    const [test, setTest] = useState([]);
            let url ="https://api.themoviedb.org/3/discover/movie?api_key=4d6f4b60a499907f2f7cb19137144751&with_release_type=2|3";
        useEffect(() => {
                Axios.get(url).then(json => setTest(json.data.results))
                        }, [url])
                    
    return(
    <div className ="home">
    
        <div className= "movie">
        {test.map(data => {
        return (
                <div key = {data.id}>
                <Movie id={data.id} poster={`https://image.tmdb.org/t/p/original${data.poster_path}`} title={data.title} overview={data.overview} release={data.release_date}/>
                </div>
            )
        })}
        </div>
    
    </div>
)
}
export default Home;
