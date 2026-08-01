export default function Card({ title, description, image, badge }) {
  return (
    <div className="card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
      <span className="badge">{badge}</span>
    </div>
  );
}
