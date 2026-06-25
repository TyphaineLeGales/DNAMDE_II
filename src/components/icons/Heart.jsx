function Heart({active, handleClick}) {
  return (
    <button onClick={handleClick} className="heart-btn">
    <svg
      className="heart-icon"
      width="45px"
      height="45px"
      viewBox="0 0 24 24"
      xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      xmlns:cc="http://creativecommons.org/ns#"
      xmlns:dc="http://purl.org/dc/elements/1.1/"
      fill={active ? "#ffffff" : "#2b2b2b"}
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        {" "}
        <g transform="translate(0 -1028.4)">
          {" "}
          <path
            d="m7 1031.4c-1.5355 0-3.0784 0.5-4.25 1.7-2.3431 2.4-2.2788 6.1 0 8.5l9.25 9.8 9.25-9.8c2.279-2.4 2.343-6.1 0-8.5-2.343-2.3-6.157-2.3-8.5 0l-0.75 0.8-0.75-0.8c-1.172-1.2-2.7145-1.7-4.25-1.7z"
            fill={active ? "#e74c3c" : "#ececec"}
          ></path>{" "}
        </g>{" "}
      </g>
    </svg>
    </button>
  );
}

export default Heart;
