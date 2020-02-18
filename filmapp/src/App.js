import React, {useState,useEffect} from 'react';
import Axios from 'axios';
import Nav from './Component/nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import log from './Component/log';
import Registration from './Component/registration';
import Home from './Home';
import {BrowserRouter, Switch, Route} from 'react-router-dom';


const App= (props) => {
    const [test, setTest] = useState([]);
            let url ="https://api.themoviedb.org/3/discover/movie?api_key=4d6f4b60a499907f2f7cb19137144751&with_release_type=2|3";
        useEffect(() => {
                Axios.get(url).then(json => setTest(json.data.results))
                        }, [url])
                        console.log(test);
                        const filmSearch = async () => {
                            const movieName = document.getElementById('movieName').value;
                                console.log(movieName);
                                    Axios.get(`https://api.themoviedb.org/3/search/movie?api_key=4d6f4b60a499907f2f7cb19137144751&query=${movieName}`).then(data => setTest(data.data.results))
                                                    }     
                
    
    return(
    <div className ="app">
        <BrowserRouter>
        <header>
            <Nav  event={filmSearch} atribute={setTest} />
        </header>
        <Switch>
            <Route path="/login" component = {log} />
            <Route path="/Registration" component = {Registration}/>
            <Route path ="/" component = {Home}/>
        </Switch>
        </BrowserRouter>
    </div>
)
}
export default App;
