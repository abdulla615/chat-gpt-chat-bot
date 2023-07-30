import openai from './config/openAi.js'
import readlinSync from 'readline-sync';
import colors from 'colors';

async function main() {

    const chatHistory = [] ; // to store conversation history

   while(true){
      
    const userInput = readlinSync.question(colors.yellow('You:'));

    try {
        // we are goin to consruct message by iterarting over the historyarray
        const messagess = chatHistory.map(([role,content]) => ([role,content]));

        // Add latest user input 
        messagess.push(['user',userInput]); 

        const completion = await openai.createChatCompletion({
            model: 'gpt-3.5-turbo',
            messages : [{
                role :'user', content : userInput
            }]
        })

        // get completion chat
        const completionText = completion.data.choices[0].message.content

        if(userInput.toLowerCase() === 'exit'){
            console.log(colors.green('Bot:')+completionText)
            return;
        }
        console.log(colors.green('Bot:')+completionText)

        //update history with user input
        chatHistory.push(['user',userInput]);
        chatHistory.push(['user',completionText]);

    } catch (error) {
        console.log(error)
    }
   } 
}

main()