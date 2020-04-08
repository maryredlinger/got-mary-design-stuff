import React from 'react'
import Carousel from './Carousel.js';

function Home() {
  const items = [
    {
      src: '/images/IMG_2040.jpg',
      altText: '',
      name: 'Apparel',
      link: '/apparel'
    },
    {
      src: '/images/IMG_2038.jpg',
          altText: '',
      name: 'Tiny Saints',
      link: '/tiny-saints'
    },
    {
      src: '/images/IMG_2039.jpg',
      altText: '',
      name: 'Books',
      link: '/books'
    },
    {
      src: '/images/example1.jpg',
      altText: '',
      name: 'Headware',
      link: '/headware'
    },
    {
      src: '/images/example3.jpg',
      altText: '',
      name: 'Heavenly',
      link: '/heavenly'
    }
  ];

  const item = items.map((item) => {
    return(
      
      <div className="btn card border-primary mb-3" style={{height: '300px', width: '400px'}}>
        <div key={item.name} className="card-header">
        <a href={item.link} type="button" class="btn btn-outline-primary  btn-block">{item.name}</a>
        </div>
        <div className="card-body">
          <img style={{height: '200px', width: '350px'}} src={item.src} />
        </div>
      </div>
    )
  })
  
  return(
    <div>
      <Carousel/>
      <br></br>
      <div id="shop" class="row d-flex justify-content-around">
      {item}
      </div>
    </div>

  )
}

export default Home;
