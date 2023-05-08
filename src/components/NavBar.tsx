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

  const isSearch = location.pathname.split('/')[1] == 'search';

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      setSearch(event.currentTarget.value);
    }
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
        className="flex items-center justify-center bg-black w-full h-max
      border-b-[1.5px] border-yellow-500 xl:h-[150px]"
      >
        <Link
          to="/"
          className={`${
            isSearch && 'hidden'
          } py-5 w-max md:block xl:block xl:absolute xl:top-0 xl:left-[50%] 
          xl:py-6 xl:-translate-x-[50%]`}
        >
          <img src={Logo} alt="Star-Wars" className="w-[400px] xl:w-[300px]" />
        </Link>

        <div
          className={`${isSearch ? 'justify-center' : 'justify-end'} 
        w-full flex items-centermr-6 md:justify-end`}
        >
          <form
            className={`${
              isSearch ? 'block py-6' : 'hidden'
            } md:w-[350px] md:mr-4 md:block`}
          >
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

          <Link
            to="/search/people"
            className={`${isSearch ? 'hidden' : 'block'} text-3xl 
            text-yellow-400 mr-4 hover:text-white md:hidden md:text-4xl`}
          >
            <BiSearch />
          </Link>
        </div>
      </div>
      {isSearch && <SearchFilter />}
    </>
  );
}

export default NavBar;
