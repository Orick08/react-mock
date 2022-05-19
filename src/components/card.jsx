import './card.css';

export function Card({ image, header, content, footer }) {
  return (
    <div className="card">
      <img src={image} className="card-img" />
      <h1>{header}</h1>
      <p>{content}</p>
      <button>Procced to payment</button>
      <br />
      <button>Cancel order</button>
    </div>
  );
}