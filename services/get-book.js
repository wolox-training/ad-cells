import { API } from "./api";

async function getBook(api) {
  const data = await fetch(api);
  const book = await data.json();

  return book;
}

export const listOfBook = await getBook(API);