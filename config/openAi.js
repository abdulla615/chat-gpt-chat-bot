import {Configuration,OpenAIApi} from 'openai';
import dotenv from 'dotenv' ;
dotenv.config();

const configuration = new Configuration({
   apiKey : process.env.OPEN_AI_API_KEY
});

const openAi = new OpenAIApi(configuration);

export default openAi


// we are doing here whatever we enter as the content you could prefix this something you know like this 
// speak to a user if you were a travel agent or something like that we can prefix thi what ever we would like

