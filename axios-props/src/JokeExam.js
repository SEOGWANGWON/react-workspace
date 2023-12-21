import React, {useEffect, useState} from "react";
import axios from "axios";

const Joke = () => {
    const [joke, setJoke] = useState('');
    /*
        라떼는 말이야 버전 (옛날) 걸러주세요!
        useEffect(() => {
            const fetchData = async () => {
                try{
                    const response = await axios.get('https://v2.jokeapi.dev/joke/Any');
                    setJoke(response.data.joke || `${response.data.setup} ${response.data.delivery}`);
                }catch (err){
                    console.log("err",err);
                }
            };
            fetchData();
        },[]);
        ↓ 아래 버전으로 변경해서 사용하면 사용 가능

    */
    useEffect (() => {
        axios.get("https://v2.jokeapi.dev/joke/Any")
        .then(response => {
            setJoke(response.data.joke || `${response.data.setup} ${response.data.delivery}`);
        })
        .catch(err => console.log("err", err));

    }, []);

    return (
        <div>
            <p>{joke}</p>
        </div>
    )
}