import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { SlArrowRight, SlArrowLeft } from 'react-icons/sl';
import { useDispatch } from 'react-redux';

import { RootDispatch } from '../store/store';
import { useGetCharactersDataQuery } from '../store/api/swapi';
import { charactersSliceAction } from '../store/reducers/charactersSlice';
import CharactersCards from '../components/CharactersCards';

const arrowStyle =
  'text-4xl bg-yellow-400 p-2 rounded-full hover:bg-yellow-100 xl:text-5xl';

function Characters() {
  const { id } = useParams<string>();

  const dispatch = useDispatch<RootDispatch>();
  const { data, isSuccess } = useGetCharactersDataQuery(`people/?page=${id}`);

  React.useEffect(() => {
    if (isSuccess) {
      dispatch(charactersSliceAction.saveCharactersData(data.results));
    }
  }, [data]);

  return (
    <>
      <div
        className="bg-[url('/src/assets/imgs/stars-bg.jpg')] bg-center
        bg-no-repeat bg-cover h-max w-full flex justify-center"
      >
        <div className="flex flex-col items-center w-[90%]">
          <div className="flex items-center justify-between w-full my-6">
            {Number(id) > 1 && (
              <Link to={`/pages/${Number(id)! - 1}`}>
                <SlArrowLeft className={arrowStyle} type="button" />
              </Link>
            )}
            <div
              className={`h-[1px] bg-yellow-400 ${
                Number(id) > 1 && Number(id) < 9 ? 'w-[90%]' : 'w-[96%]'
              }`}
            />
            {Number(id) !== 9 && (
              <Link to={`/pages/${Number(id)! + 1}`}>
                <SlArrowRight className={arrowStyle} type="button" />
              </Link>
            )}
          </div>

          {data?.results && <CharactersCards results={data.results} />}
        </div>
      </div>
    </>
  );
}

export default Characters;
