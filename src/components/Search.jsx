import { Divider, Input } from 'antd';

function Search({ searchString, setSearchString }) {
  function handleSearch(e) {
    setSearchString(e.target.value);
  }

  return (
    <>
      <Divider>Search</Divider>

      <label>Search</label>
      <Input value={searchString} type="text" onChange={handleSearch} />
    </>
  );
}

export default Search;
