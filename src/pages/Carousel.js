import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';

const items = [
  {
    src: '/images/IMG_2040.jpg',
    altText: '',
    caption: 'Apparel',
    link: '/apparel'
  },
  {
    src: '/images/IMG_2038.jpg',
        altText: '',
    caption: 'Tiny Saints',
    link: '/tiny-saints'
  },
  {
    src: '/images/IMG_2039.jpg',
    altText: '',
    caption: 'Books',
    link: '/books'
  },
  {
    src: '/images/IMG_2039.jpg',
    altText: '',
    caption: 'Hats',
    link: '/hats'
  },
  {
    src: '/images/IMG_2039.jpg',
    altText: '',
    caption: 'Heavenly',
    link: '/heavenly'
  }
];

const Example = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }
  const slides = items.map((item) => {
    return (
      <CarouselItem
        
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <a href={item.link}><img style={{width:'100%', height: '560px'}} src={item.src} alt={item.altText} /></a>
        <CarouselCaption captionText={item.caption}  />
      </CarouselItem>
    );
  });

  return (
    <Carousel
    
      activeIndex={activeIndex}
      next={next}
      previous={previous}
    >
      <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {slides}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>
  );
}

export default Example;
