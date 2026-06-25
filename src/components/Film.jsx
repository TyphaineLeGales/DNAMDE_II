export default function Film({ title, year, image }) {
  return (
    <div className="film-card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{year}</p>
    </div>
  );
}