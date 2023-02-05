import React from 'react';
import {Image} from 'react-bootstrap';
import floresVideo from '../../img/flores7.jpg';
//import './index.scss';


const Movie = () => {
    return (
        <div className='text-center text-color m-5'>
            <div className='m-5'>
                <h2>How we do it</h2>
                <p>Lorem ipsun dolor sit amet</p>
            </div>
            <Image 
                className='image pe-5 ps-5'
                src={floresVideo} 
                alt='Vídeo empacotanto as flores'
            />
        </div>
 
    );
};

export default Movie;