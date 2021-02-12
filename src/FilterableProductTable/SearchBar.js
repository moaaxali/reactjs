function SearchBar(props) {
  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="Search..."
          value={props.filterText} />
        <p>
          <input
            type="checkbox"
            checked={props.inStockOnly} />
          {' '}
          Only show products in stock
        </p>
      </form>
    </div>
  )
}

export default SearchBar
