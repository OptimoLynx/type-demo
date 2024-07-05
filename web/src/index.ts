//import axios, { AxiosResponse } from "axios";
import { Collection } from "./models/Collection";

/* axios.get("http://localhost:3000/users").then((response: AxiosResponse) => {
  console.log(response.data);
}); */

const collection = new Collection('http://localhost:3000/users');

collection.fetch();


