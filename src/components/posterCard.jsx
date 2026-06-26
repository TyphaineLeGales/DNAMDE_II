import "./posterCard.css";

function PosterCard() {
  return (
    <div className="poster-card">

      <div className="poster-image totoro"></div>

      <div className="poster-body">

        <div className="poster-line title totoro"></div>

        <div className="poster-line meta totoro"></div>

        <div className="poster-line desc totoro"></div>

        <div className="poster-line desc-short totoro"></div>
        
      </div>
    </div>
  );
}

export default PosterCard;