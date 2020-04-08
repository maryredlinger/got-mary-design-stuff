import React from 'react'
import {Link} from 'react-router-dom';

function Headware() {
  const hats = [
    {
      src: '/images/example1.jpg',
      altText: '',
      name: 'Hats',
      link: '/hats'
    },
    {
      src: '/images/example3.jpg',
      altText: '',
      name: 'Beanies',
      link: '/headware/beanies'
    }
  ];


  const headware = hats.map((item) => {
    return(
      
      <div className="btn card border-primary mb-3" style={{height: '300px', width: '400px'}}>
        <div key={item.name} className="card-header">
        <Link to={item.link} type="button" class="btn btn-outline-primary  btn-block">{item.name}</Link>
        </div>
        <div className="card-body">
          <img style={{height: '200px', width: '350px'}} src={item.src} />
        </div>
      </div>
    )
  })
  
  return(
    <div>
      <div class="row d-flex justify-content-around">
      {headware}
      </div>
    </div>

  )
}


export default Headware;
