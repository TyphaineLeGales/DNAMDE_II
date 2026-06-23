import Tag from "./Tag";
import data from "../assets/filmData.json";

function TagList() {
  const types = data.flatMap((film) => film.Genre.split(", "));

  const typesTag = [...new Set(types)];

  console.log(typesTag);
  return (
    <div className="tag-list">
      {typesTag.map((filmType) => (
        <Tag key={filmType} tag={filmType} />
      ))}
    </div>
  );
}

export default TagList;
