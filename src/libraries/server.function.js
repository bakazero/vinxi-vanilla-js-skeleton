"use server";

import { getCookie, setCookie } from "vinxi/http";

export const getSetting = async () => {
  return {
    apiUrl: process.env.MBKM_API_URL,
  };
};

export const getAuth = async () => {
  const token = getCookie("auth");
  return { token };
};

/**
 * @param {string} token
 */
export const setAuth = async (token) => {
  setCookie("auth", token, { secure: true, maxAge: 60 * 60 * 24 * 30 });
  return {};
};

export const removeAuth = async () => {
  setCookie("auth", "", { secure: true, maxAge: 0 });
  return {};
};

export const dummyPokemon = async (page = 1) => {
  if (page === 1)
    return {
      count: 10,
      data: [
        {
          id: 1,
          name: "bulbasaur",
          image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
          url: "https://pokeapi.co/api/v2/pokemon/1",
          abilities: ["overgrow", "chlorophyll"],
        },
        {
          id: 4,
          name: "charmander",
          image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
          url: "https://pokeapi.co/api/v2/pokemon/4",
          abilities: ["blaze", "solar-power"],
        },
        {
          id: 7,
          name: "squirtle",
          image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
          url: "https://pokeapi.co/api/v2/pokemon/7",
          abilities: ["torrent", "rain-dish"],
        },
        {
          id: 10,
          name: "caterpie",
          image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png",
          url: "https://pokeapi.co/api/v2/pokemon/10",
          abilities: ["shield-dust", "run-away"],
        },
        {
          id: 13,
          name: "weedle",
          image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/13.png",
          url: "https://pokeapi.co/api/v2/pokemon/13",
          abilities: ["shield-dust", "run-away"],
        },
      ],
    };
  else
    return {
      count: 10,
      data: [
        {
          id: 2,
          name: "ivysaur",
          image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
          url: "https://pokeapi.co/api/v2/pokemon/2",
          abilities: ["overgrow", "chlorophyll"],
        },
        {
          id: 5,
          name: "charmeleon",
          image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png",
          url: "https://pokeapi.co/api/v2/pokemon/5",
          abilities: ["blaze", "solar-power"],
        },
        {
          id: 8,
          name: "wartortle",
          image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png",
          url: "https://pokeapi.co/api/v2/pokemon/8",
          abilities: ["torrent", "rain-dish"],
        },
        {
          id: 11,
          name: "metapod",
          image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png",
          url: "https://pokeapi.co/api/v2/pokemon/11",
          abilities: ["shed-skin", "run-away"],
        },
        {
          id: 14,
          name: "kakuna",
          image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/14.png",
          url: "https://pokeapi.co/api/v2/pokemon/14",
          abilities: ["shed-skin", "run-away"],
        },
      ],
    };
};
