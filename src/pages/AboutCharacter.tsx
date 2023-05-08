import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams, useNavigate, NavigateFunction } from 'react-router-dom';

import { RootType } from '../store/store';
import CharacterDescription from '../components/CharacterDescription';
import FilmsList from '../components/FilmsList';
import VehiclesList from '../components/VehiclesList';
import StarshipsList from '../components/StarshipsList';

const titleStyle = `text-2xl text-black font-bold font-droid py-1 mb-3 
  border-b-2 border-yellow-500 md:text-3xl`;
const relatedStyle = `flex flex-col text-center bg-zinc-100 rounded-2xl mb-6 
last:m-0`;
const noImgStyle = `text-black text-xl font-droid font-semibold py-10
  text-center md:text-2xl`;

function AboutCharacter() {
  const [homeworld, setHomeWorld] = useState<string>();
  const [species, setSpecies] = useState<string>();
  const [allFilms, setAllFilms] = useState<string[]>([]);
  const [allVehicles, setAllVehicles] = useState<string[]>([]);
  const [allStarships, setAllStarships] = useState<string[]>([]);

  const { id } = useParams<string>();
  const navigate: NavigateFunction = useNavigate();

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
        bg-no-repeat bg-cover h-max w-full flex flex-col justify-center 
        items-center pt-5 2xl:h-[84vh]"
      >
        <button
          onClick={() => navigate(-1)}
          className="text-black text-2xl font-raleway font-bold bg-yellow-400
          rounded-2xl px-6 py-1 mb-3"
        >
          Back
        </button>
        <div
          className="flex flex-col justify-center w-[90%] py-4 
        md:w-[60%] lg:w-[40%] 2xl:w-[95%] 2xl:justify-between 2xl:flex-row"
        >
          <img
            src={`https://starwars-visualguide.com/assets/img/characters/${
              character?.url.split('/')[5]
            }.jpg`}
            alt="Character-Avatar"
            className="h-[500px] object-cover bg-zinc-100 p-1 rounded-2xl mb-12
            md:h-[650px] lg:h-[500px] xl:h-[600px] 2xl:h-full"
          />
          <CharacterDescription
            homeworld={homeworld!}
            species={species!}
            character={character!}
          />
          <div className="flex flex-col 2xl:justify-between 2xl:w-[50%]">
            <div className={relatedStyle}>
              <p className={titleStyle}>Related Films</p>
              <div className="flex flex-wrap justify-center 2xl:flex-nowrap">
                {allFilms.map((item) => (
                  <FilmsList key={item} item={item} />
                ))}
              </div>
            </div>

            <div className={relatedStyle}>
              <p className={titleStyle}>Related Vehicles</p>
              <div
                className={`flex flex-wrap justify-center ${
                  allVehicles.length === 0 && 'justify-center'
                } 2xl:flex-nowrap`}
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
                className={`flex flex-wrap justify-center ${
                  allStarships.length === 0 && 'justify-center'
                } 2xl:justify-start`}
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
