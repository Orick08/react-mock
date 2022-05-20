import './plan-mini.css';

export function PlanMini({ icon, name, price }) {
  return (
    <div className='plan-mini'>
      <div className="plan-icon">
        <img src={icon} />
      </div>
      <div className="plan-text">
        <span className="bold-text">{name}</span>
        <br />
        <span className="muted-text">{price}</span>
      </div>
      <div className="plan-link">
        <a href="#">Change</a>
      </div>
    </div>
  );
}