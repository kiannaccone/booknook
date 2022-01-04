function Search({search, setSearch}){

    return(
      <div id="search">
      <label id="searchtext" htmlFor="search">Search:</label>
        <input
          type="text"
          id="search"
          placeholder="Search books or authors..."
          value = {search}
          onChange={(e) => setSearch(e.target.value)}
      />
      </div>
    );
  }
  
  export default Search; 