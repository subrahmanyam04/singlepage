
// import React from 'react';

// const Cards = () => {
 

//   return (
//     <div>
// <div class="container position-relative mt-2 ">
// <div class="row row-cols-1 row-cols-md-3 g-4">
//   <div class="col">
//     <div class="card">
//       <img src="..." class="card-img-top" alt="..." />
//       <div class="card-body">
//         <h5 class="card-title">Card title</h5>
//         <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
//       </div>
//     </div>
//   </div>
//   <div class="col">
//     <div class="card">
//       <img src="..." class="card-img-top" alt="..." />
//       <div class="card-body">
//         <h5 class="card-title">Card title</h5>
//         <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
//       </div>
//     </div>
//   </div>
//   <div class="col">
//     <div class="card">
//       <img src="..." class="card-img-top" alt="..." />
//       <div class="card-body">
//         <h5 class="card-title">Card title</h5>
//         <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
//       </div>
//     </div>
//   </div>
 
// </div>
// </div>
//     </div>
//   );
// };

// export default Cards;


import React from 'react';

const CardList = () => {
  const cardData = [
    {
      imageSrc: 'assets/images/1.jpeg',
      alt: 'window',
      title: 'Card Title 1',
      description: 'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
    },
    {
      imageSrc: 'assets/images/2.jpeg',
      alt: 'Image 2',
      title: 'Card Title 2',
      description: 'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
    },
    {
      imageSrc: 'assets/images/3.jpg',
      alt: 'Image 3',
      title: 'Card Title 3',
      description: 'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
    },
    {
        imageSrc: 'assets/images/4.jpeg',
        alt: 'Image 4',
        title: 'Card Title 4',
        description: 'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
      },
      {
        imageSrc: 'assets/images/5.jpg',
        alt: 'Image 5',
        title: 'Card Title 5',
        description: 'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
      },
      {
        imageSrc: 'assets/images/6.jpg',
        alt: 'Image 6',
        title: 'Card Title 6',
        description: 'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
      },
  ];

  return (
    <div className="container  position-relative mt-5">
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3  g-4">
        {cardData.map((card) => (
          <div className="col">
            <div className="card">
              <img src={card.imageSrc} className="card-img-top" alt={card.alt} height={200} />
              <div className="card-body">
                <h5 className="card-title">{card.title}</h5>
                <p className="card-text">{card.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>


//     <div className="container position-relative mt-5">
//     <div className="row row-cols-1 row-cols-md-3 g-4">
//       {cardData.map((card) => (
//         <div className="col-md-4 col-sm-6">
//           <div className="card">
//             <img src={card.imageSrc} className="card-img-top" alt={card.alt} height={200} />
//             <div className="card-body">
//               <h5 className="card-title">{card.title}</h5>
//               <p className="card-text">{card.description}</p>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   </div>
 


 




  );
};

export default CardList;
