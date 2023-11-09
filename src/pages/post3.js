import React from 'react';
import { Link } from 'react-router-dom';

const Post3 = () => {
    const photos = [
        {
            src: 'images/redwood_stream.jpg',
            alt: 'Redwood Stream',
            description: 'Taken in the redwoods of Big Sur. My favorite picture.',
            size: 'horizontal',
        },
        {
            src: 'images/shack_roof.jpg',
            alt: 'Shack Roof',
            description: 'Taken in Fort Ord Monterey using a drone.',
            size: 'horizontal',
        },
        {
            src: 'images/shack_side.jpg',
            alt: 'Shack Side',
            description: 'Also taken in Fort Ord.',
            size: 'horizontal',
        },
        {
            src: 'images/grassy_fields.jpg',
            alt: 'Grassy Fields',
            description: 'Mood. Taken in the hills above my childhood home.',
            size: 'horizontal',
        },
        {
            src: 'images/bikeman.jpg',
            alt: 'Bikeman',
            description: 'One of my favorite hobbies.',
            size: 'vertical',
        },
        {
            src: 'images/redwood_sun.jpg',
            alt: 'Redwood Sun',
            description: 'Another cool spot in Big Sur',
            size: 'horizontal',
        },
        {
            src: 'images/beach_distance.jpg',
            alt: 'Beach Distance',
            description: 'Mood at the time.',
            size: 'horizontal',
        },
    ];

    return (
        <body>
            <section className="s2">
                <div className="main-container">
                    <div className="nav-wrapper">
                        <Link to='/'>
                            <div className="dots-wrapper">
                                <div id="dot1" className="browser-dot"></div>
                                <div id="dot2" className="browser-dot"></div>
                                <div id="dot3" className="browser-dot"></div>
                            </div>
                        </Link>
                    </div>

                    <div className="main-container">

                        <h3>Photo Portfolio</h3>

                        <br />

                        <div className="photo-gallery">
                            {photos.map((photo, index) => (
                                <div className={`photo-item ${photo.size}`} key={index}>
                                    <img src={photo.src} alt={photo.alt} />
                                    <p>{photo.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </body>
    );
}

export default Post3;
