export default function Loading() {
  return (
    <div className="film-grid">
      {[...Array(8)].map((_, index) => (
        <div key={index} className="loading-card"></div>
      ))}
    </div>
  );
}