function Filter({filter, setFilter }) {
return (
    <input 
    type="text"
    placeholder="Rechercher un film..."
    value={filter}
    onChange={(e) => setFilter(e.target.value)}
    
    />
);
}

export default Filter;