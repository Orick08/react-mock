import './card.css';

export function Card({ image, header, content, footer }) {
  return (
    <div className="card">
      <img src={image} className="card-img" />
      <h1>{header}</h1>
      <div className='content'>
        {content}
      </div>
      <button>Procced to payment</button>
      <br />
      <button>Cancel order</button>
    </div>
  );
}