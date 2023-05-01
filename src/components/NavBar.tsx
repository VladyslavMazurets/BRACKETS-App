import React, { useEffect, useState, useRef } from 'react';
import {
  Link,
  NavigateFunction,
  useLocation,
  useNavigate,
  Location,
} from 'react-router-dom';
import { BiSearch } from 'react-icons/bi';
import { useDispatch } from 'react-redux';

import Logo from '../assets/imgs/star-wars-logo.png';
import { searchSliceAction } from '../store/reducers/searchSlice';

import SearchFilter from './SearchFilter';

function NavBar() {
  const [search, setSearch] = useState<string>('');
  const inputRef = useRef<HTMLInputElement>(null);

  const navigate: NavigateFunction = useNavigate();
  const location: Location = useLocation();

  const dispatch = useDispatch();

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      setSearch(event.currentTarget.value);
    }
  };

  const handleSearch = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    dispatch(searchSliceAction.saveSearchData(search));
  };

  useEffect(() => {
    search.length !== 0 &&
      search.length === 1 &&
      navigate('/search/people', { replace: true });

    const timer = setTimeout(() => {
      dispatch(searchSliceAction.saveSearchData(search));
    }, 1500);

    return () => clearTimeout(timer);
  }, [search]);

  return (
    <>
      <div
        className="flex justify-center bg-black w-full h-[150px] 
      border-b-[1.5px] border-yellow-500"
      >
        <Link to="/" className="absolute py-6 w-max">
          <img src={Logo} alt="Star-Wars" className="w-[300px]" />
        </Link>

        <div className="w-full flex items-center justify-end mr-6">
          <form className="w-[350px] mr-4">
            <input
              ref={inputRef}
              value={search}
              placeholder="Search Characters"
              onChange={(event) => setSearch(event.target.value)}
              onKeyDown={handleKeyPress}
              className="w-full rounded-full px-6 py-2 border-4 border-white 
              focus:outline-none focus:border-yellow-500"
              required
            />
          </form>

          <button
            onClick={handleSearch}
            className="text-4xl 
        text-yellow-400 hover:text-white"
          >
            <BiSearch />
          </button>
        </div>
      </div>
      {location.pathname.split('/')[1] == 'search' && <SearchFilter />}
    </>
  );
}

export default NavBar;
