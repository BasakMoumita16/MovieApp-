import React, {useState,useEffect} from 'react';
import Axios from 'axios';
import Movie from './Component/Movie';
import Nav from './Component/nav';
import 'bootstrap/dist/css/bootstrap.min.css';

const APP = (props) => {
    const [test, setTest] = useState([]);
            let url ="https://api.themoviedb.org/3/discover/movie?api_key=4d6f4b60a499907f2f7cb19137144751&with_release_type=2|3";
        useEffect(() => {
                Axios.get(url).then(json => setTest(json.data.results))
                        }, [url])

    const movieSearch = async () => {
            const movieName = document.getElementById('movieName').value;
                console.log(movieName);
            Axios.get(`https://api.themoviedb.org/3/search/movie?api_key=4d6f4b60a499907f2f7cb19137144751&query=${movieName}`).then(data => setTest(data.data.results))
                                    }
    return(
    <div className ="App">
        <header>
            <Nav  event={movieSearch} atribute={setTest} />
        </header>

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
export default APP;
