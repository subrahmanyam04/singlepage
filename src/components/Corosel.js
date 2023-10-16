
import React from 'react';

const Corosel = () => {
  const carouselData = [
    {
      imageSrc: 'assets/images/window.jpg',
      alt: 'windows',
      caption: 'First slide label',
      description: 'Some representative placeholder content for the first slide.',
    },
    {
        imageSrc: 'assets/images/laptop2.jpg',
        alt: 'Laptop2',
        caption: 'First slide label',
        description: 'Some representative placeholder content for the first slide.',
      },
      {
        imageSrc: 'assets/images/laptop1.jpg',
        alt: 'Laptop1',
        caption: 'First slide label',
        description: 'Some representative placeholder content for the first slide.',
      },
  ];

  return (
    <div>
      <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
      <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
   </div>
        <div className="carousel-inner">
          {carouselData.map((item, index) => (
            <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
              <img src={item.imageSrc} className="d-block w-100" height={600} alt={item.alt} />
              <div className={`carousel-caption ${index === 2 ? "text-dark" : "d-none"} d-none d-md-block`} >
                <h5>{item.caption}</h5>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Corosel;
