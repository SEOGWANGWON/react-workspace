import React, {useEffect, useState} from "react";
import axios from 'axios';

const DogImage = () => {
    const [imgUrl, setImgUrl] = useState('');

    useEffect(() =>{
        axios.get('https://api.thedogapi.com/v1/images/search')
        .then(response => {
            setImgUrl(response.data[0].url)
        })
        .catch(error => {
            console.log('defind image file',error);
        });
    }, []);

    return(
        <div>
            <h2>새로고침을 하시면 새로운 강아지 사진이 나옵니다.</h2>
            {imgUrl && <img src={imgUrl}/>}
        </div>
    )

}

export default DogImage;