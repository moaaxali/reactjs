function SearchBar() {
  return (
    <div>
      <form>
        <input type="text" placeholder="Search..." />
        <p>
          <input type="checkbox" />
          {' '}
          Only show products in stock
        </p>
      </form>
    </div>
  )
}

export default SearchBar
