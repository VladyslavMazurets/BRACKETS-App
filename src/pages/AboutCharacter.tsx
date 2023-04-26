import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { RootType } from '../store/store';
import CharacterDescription from '../components/CharacterDescription';
import { useGetFilmsDataQuery } from '../store/api/swapi';
import FilmsList from '../components/FilmsList';
import VehiclesList from '../components/VehiclesList';
import StarshipsList from '../components/StarshipsList';

function AboutCharacter() {
  const [homeworld, setHomeWorld] = useState<string>();
  const [species, setSpecies] = useState<string>();
  const [allFilms, setAllFilms] = useState<string[]>([]);
  const [allVehicles, setAllVehicles] = useState<string[]>([]);
  const [allStarships, setAllStarships] = useState<string[]>([]);

  const { id } = useParams<string>();
  const character = useSelector((state: RootType) =>
    state.characters.find((element) => element.url.split('/')[5] === id)
  );

  const getAnotherData = () => {
    character?.species.map((item) => setSpecies(item.split('/')[5]));
    setHomeWorld(character?.homeworld.split('/')[5]);

    const getAllFilms = character?.films.map((item) => item.split('/')[5]);
    setAllFilms(getAllFilms!);

    const getAllVehicles = character?.vehicles.map(
      (item) => item.split('/')[5]
    );
    setAllVehicles(getAllVehicles!);

    const getAllStarships = character?.starships.map(
      (item) => item.split('/')[5]
    );
    setAllStarships(getAllStarships!);
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
        <div className="flex justify-between w-[85%] h-full py-10">
          <img
            src={`https://starwars-visualguide.com/assets/img/characters/${
              character?.url.split('/')[5]
            }.jpg`}
            alt="Character-Avatar"
            className="h-[700px] object-cover"
          />
          <CharacterDescription
            homeworld={homeworld!}
            species={species!}
            character={character!}
          />
          <div className="flex flex-col justify-between w-[45%] text-white">
            <div className="bg-yellow-600">
              <p>Related Films</p>
              <div className="flex">
                {allFilms.map((item) => (
                  <FilmsList key={item} item={item} />
                ))}
              </div>
            </div>

            <div className="bg-yellow-600">
              <p>Related Vehicles</p>
              <div className="flex">
                {allVehicles.length !== 0 ? (
                  allVehicles.map((item) => (
                    <VehiclesList key={item} item={item} />
                  ))
                ) : (
                  <p className="text-black">
                    There are no related items for this category
                  </p>
                )}
              </div>
            </div>

            <div className="bg-yellow-600">
              <p>Related Starships</p>
              <div className="flex">
                {allStarships.length !== 0 ? (
                  allStarships.map((item) => (
                    <StarshipsList key={item} item={item} />
                  ))
                ) : (
                  <p className="text-black">
                    There are no related items for this category
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutCharacter;
