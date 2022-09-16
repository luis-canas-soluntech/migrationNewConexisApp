import { buyersMigrate } from "./migration scripts/buyersMigration";
import fetchRest from "./util/fetchRest";
import logger from "./util/winstonLogger";

const init = async () => {
  const MY_NAMESPACE = "1b671a64-40d5-491e-99b0-da01ff1f3341";
  //Returns a random v4 UUID of the form xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx, where each x is replaced with a random hexadecimal digit from 0 to f, and y is replaced with a random hexadecimal digit from 8 to b.
  try {
    //TODO: DEFINE WHAT CONECTION TO USE WHEN THERE ARE CIRCULAR DEPENDENCIES IN THE KNACK CONNECTIONS
    //*run migrating scripts in order of creation, so we can search and put the appropiate conections/foreign keys
    // USE KNACKID AS PRIMARY KEY IF WE CAN GUARAUNTEE THAT IT WILL NEVER COLLIDE WITH POSTGRESS KEY ALGORITHM
    //accounts user tables
    await buyersMigrate(); //depends only on users accounts for the connections
    await new Promise((resolve) => setTimeout(resolve, 1000));
    //  }
  } catch (error) {
    console.log("catch error", error);
    logger.error(error);
  }
};

//REMIND: DEFINE APPROPIATE PRIMARY KEY
//uuid_generate_v5 IN POSTGRES  https://stackoverflow.com/questions/59724547/cant-execute-uuid-generate-v5
//the same uuid generation in nodejs import { v5 as uuidv5 } from 'uuid'
// https://www.uuidgenerator.net/

init();
