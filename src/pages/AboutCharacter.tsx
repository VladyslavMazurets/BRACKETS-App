import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { RootType } from '../store/store';
import CharacterDescription from '../components/CharacterDescription';
import { useGetFilmsDataQuery } from '../store/api/swapi';
import FilmsList from '../components/FilmsList';

function AboutCharacter() {
  const [homeworld, setHomeWorld] = useState<string>();
  const [species, setSpecies] = useState<string>();
  const [allFilms, setAllFilms] = useState<string[]>([]);

  const { id } = useParams<string>();
  const character = useSelector((state: RootType) =>
    state.characters.find((element) => element.url.split('/')[5] === id)
  );

  const getAnotherData = () => {
    character?.species.map((item) => setSpecies(item.split('/')[5]));
    setHomeWorld(character?.homeworld.split('/')[5]);
    const getAllFilms = character?.films.map((item) => item.split('/')[5]);
    setAllFilms(getAllFilms!);
  };

  useEffect(() => {
    getAnotherData();
  }, [character]);

  return (
    <>
      <div
        className="bg-[url('/src/assets/imgs/stars-bg.jpg')] bg-center
        bg-no-repeat bg-cover h-max w-full flex justify-center items-center"
      >
        <div className="flex justify-between items-center w-[80%]">
          <img
            src={`https://starwars-visualguide.com/assets/img/characters/${
              character?.url.split('/')[5]
            }.jpg`}
            alt="Character-Avatar"
          />
          <CharacterDescription
            homeworld={homeworld!}
            species={species!}
            character={character!}
          />
          <div className="flex flex-col text-white">
            <div className="flex flex-col bg-yellow-600">
              <span>Related Films</span>
              <div className="flex">
                {allFilms.map((item) => (
                  <FilmsList key={item} item={item} />
                ))}
              </div>
            </div>
            <div>Related Vehicles</div>
            <div>Related Starships</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutCharacter;
