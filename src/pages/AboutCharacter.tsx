import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { RootType } from '../store/store';
import CharacterDescription from '../components/CharacterDescription';
import FilmsList from '../components/FilmsList';
import VehiclesList from '../components/VehiclesList';
import StarshipsList from '../components/StarshipsList';

const titleStyle = `text-3xl text-black font-bold font-droid pb-1 mb-3 
  border-b-2 border-yellow-500`;
const relatedStyle = 'flex flex-col text-center bg-white mb-2 last:m-0';
const noImgStyle = `text-black text-2xl font-droid font-semibold py-10
  text-center`;

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
        <div className="flex justify-between w-[95%] h-full py-10">
          <img
            src={`https://starwars-visualguide.com/assets/img/characters/${
              character?.url.split('/')[5]
            }.jpg`}
            alt="Character-Avatar"
            className="h-[700px] object-cover bg-white p-1"
          />
          <CharacterDescription
            homeworld={homeworld!}
            species={species!}
            character={character!}
          />
          <div className="flex flex-col justify-between w-[50%] text-white">
            <div className={relatedStyle}>
              <p className={titleStyle}>Related Films</p>
              <div className="flex">
                {allFilms.map((item) => (
                  <FilmsList key={item} item={item} />
                ))}
              </div>
            </div>

            <div className={relatedStyle}>
              <p className={titleStyle}>Related Vehicles</p>
              <div
                className={`flex ${
                  allVehicles.length == 0 && 'justify-center'
                }`}
              >
                {allVehicles.length !== 0 ? (
                  allVehicles.map((item) => (
                    <VehiclesList key={item} item={item} />
                  ))
                ) : (
                  <p className={noImgStyle}>
                    There are no related items for this category
                  </p>
                )}
              </div>
            </div>

            <div className={relatedStyle}>
              <p className={titleStyle}>Related Starships</p>
              <div
                className={`flex ${
                  allVehicles.length == 0 && 'justify-center'
                }`}
              >
                {allStarships.length !== 0 ? (
                  allStarships.map((item) => (
                    <StarshipsList key={item} item={item} />
                  ))
                ) : (
                  <p className={noImgStyle}>
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
