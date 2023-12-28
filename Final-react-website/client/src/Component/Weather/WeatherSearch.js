import React , { useState, useEffect } from 'react';
import axios from 'axios';

function WeatherSearch() {

    const [query, setQuery] = useState('');
    const [weather, setWeather] = useState({});
    const [loading, setLoading] = useState(false);

    const API_KEY = '4edac2eabf494946a189e86050976521';

    // 검색할 버튼 함수 생성
    const searchWeather = async () => {
        try{
            setLoading(true)
            const response = await axios.get( `https://api.weatherbit.io/v2.0/current?city=${query}&key=${API_KEY}`); //  `https://api.weatherbit.io/v2.0/current?city=${query}&key=${API_KEY}`  weatherbit.io유료사이트
            setWeather(response.data.data[0]);

        } catch (error) {
            console.error('에러 발생 : ',error)
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className='container mt-5'>
            <h1 className='mb-4'>날씨</h1>
            <div className='mb-3'>
                <input 
                className='form-control'
                type='text'
                placeholder='도시를 입력하세요.'
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                />
                <button className='btn btn-primary mt-2' onClick={searchWeather} >날씨 검색하기</button>
            </div>
            {loading && <p>검색중..</p>}
            {weather.city_name && (
                <div>
                    {weather.weather.icon && (
                        <img
                        className='mb-3 img-fluid rounded mx-auto d-block'
                        src={`https://www.weatherbit.io/static/img/icons/${weather.weather.icon}.png`}
                        alt="Weather Icon"
                        />
                    )}
                <div className='card'>
                    <div className='card-body'>
                    <h2 className='card-title'>{weather.city_name}</h2>
                    <p>온도 : {weather.temp}</p>
                    <p>습도 : {weather.rh}%</p>
                    <p>날씨 : {weather.weather.description}</p>
                    
                    </div>
                </div>
                </div>
            )}
        </div>
    )

}

export default WeatherSearch;