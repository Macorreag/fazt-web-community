import React from 'react';
import CardContributor from '../CardContributor/CardContributor';
import './ListContributor.scss';

const ListContributor = () => {
  return (
    <div className="listContainer">
      <div className="listContainer__title">
        <h2>Contribuidores</h2>
      </div>
      <div className="listContainer__desc">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod culpa aut veritatis dolor tempora rem autem earum, non ducimus quae totam perspiciatis tempore voluptatibus fugit aliquam veniam minima dolorum vero.
        Quidem voluptate corporis aliquam iusto, magni hic repudiandae deserunt nam ratione? Mollitia, error labore, nemo explicabo consequatur neque, maiores molestias optio architecto nulla harum laboriosam assumenda exercitationem facere voluptates quam!
       </p>
      </div>
      <CardContributor />
      <CardContributor />
      <CardContributor />
      <CardContributor />
    </div>
  );
};

export default ListContributor;
