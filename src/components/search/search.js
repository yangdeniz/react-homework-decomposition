import { useState } from 'react';

/**
 * Компонент отвечает за поиск на сайте
 * @param {*} props 
 * @returns 
 */
function Search(props) {
  const [search, setSearch] = useState('');
  return (
    <div>
      <input type='text' value={search} onChange={e => setSearch(e.target.value)} />
      <button onClick={() => props.onSearch(search)}>Найти</button>
      <span>Найдется всё</span>
    </div>
  )
}

export default Search;