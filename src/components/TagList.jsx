import Tag from "./Tag";
import data from "../assets/filmData.json";

function TagList({onSelect}) {
  const types = data.flatMap((film) => film.Genre.split(", "));

  const typesTag = [...new Set(types)];

  return (
    <div className="tag-list">
      {typesTag.map((filmType) => (
        <Tag onSelect={onSelect} key={filmType} tag={filmType} />
      ))}
    </div>
  );
}

export default TagList;
