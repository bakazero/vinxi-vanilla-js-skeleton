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

export const dummyPokemon = async () => {
  return {
    count: 120,
    data: [
      {
        id: 1,
        name: "bulbasaur",
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
        url: "https://pokeapi.co/api/v2/pokemon/1",
        abilities: [
          {
            ability: {
              name: "overgrow",
              url: "https://pokeapi.co/api/v2/ability/65/",
            },
            is_hidden: false,
            slot: 1,
          },
          {
            ability: {
              name: "chlorophyll",
              url: "https://pokeapi.co/api/v2/ability/34/",
            },
            is_hidden: true,
            slot: 3,
          },
        ],
      },
      {
        id: 4,
        name: "charmander",
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
        url: "https://pokeapi.co/api/v2/pokemon/4",
        abilities: [
          {
            ability: {
              name: "blaze",
              url: "https://pokeapi.co/api/v2/ability/66/",
            },
            is_hidden: false,
            slot: 1,
          },
          {
            ability: {
              name: "solar-power",
              url: "https://pokeapi.co/api/v2/ability/94/",
            },
            is_hidden: true,
            slot: 3,
          },
        ],
      },
      {
        id: 7,
        name: "squirtle",
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
        url: "https://pokeapi.co/api/v2/pokemon/7",
        abilities: [
          {
            ability: {
              name: "torrent",
              url: "https://pokeapi.co/api/v2/ability/67/",
            },
            is_hidden: false,
            slot: 1,
          },
          {
            ability: {
              name: "rain-dish",
              url: "https://pokeapi.co/api/v2/ability/44/",
            },
            is_hidden: true,
            slot: 3,
          },
        ],
      },
      {
        id: 10,
        name: "caterpie",
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png",
        url: "https://pokeapi.co/api/v2/pokemon/10",
        abilities: [
          {
            ability: {
              name: "shield-dust",
              url: "https://pokeapi.co/api/v2/ability/111/",
            },
            is_hidden: false,
            slot: 1,
          },
          {
            ability: {
              name: "run-away",
              url: "https://pokeapi.co/api/v2/ability/93/",
            },
            is_hidden: true,
            slot: 3,
          },
        ],
      },
      {
        id: 13,
        name: "weedle",
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/13.png",
        url: "https://pokeapi.co/api/v2/pokemon/13",
        abilities: [
          {
            ability: {
              name: "shield-dust",
              url: "https://pokeapi.co/api/v2/ability/111/",
            },
            is_hidden: false,
            slot: 1,
          },
          {
            ability: {
              name: "run-away",
              url: "https://pokeapi.co/api/v2/ability/93/",
            },
            is_hidden: true,
            slot: 3,
          },
        ],
      },
    ],
  };
};
