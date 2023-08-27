#!/usr/bin/env node
process.removeAllListeners('warning');


const yargs = require("yargs");
const options = yargs
 .usage("Usage: -n <name>")
 .option("n", { alias: "name", describe: "Your name", type: "string", demandOption: true })
 .argv;


 import("chalk").then(chalk => {
    import("boxen").then(boxen => {
      const greeting = chalk.default.white.bold(`hello ${options.name}!!`);
  
      const boxenOptions = {
          padding:1,
          margin : 1,
          borderColor:"green",
          backgroundColor :"#555555"
      };
  
      const msgBox = boxen.default(greeting,boxenOptions);
  
      console.log(msgBox);
 async function myFun(){
    const url = 'https://hargrimm-wikihow-v1.p.rapidapi.com/steps?count=3';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '342d029915msh26c862db09e636ep1e2affjsne72c26c9a230',
            'X-RapidAPI-Host': 'hargrimm-wikihow-v1.p.rapidapi.com'
        }
    };
    
    try {
        const greeting = chalk.default.white.bold(`Out of Context wikihow!!`);
  
        const boxenOptions = {
            padding:1,
            margin : 1,
            borderColor:"green",
            backgroundColor :"#555555"
        };
    
        const msgBox = boxen.default(greeting,boxenOptions);
    
        console.log(msgBox);
        const response = await fetch(url, options);
        const result = await response.json();
        
        // console.log(result);
        for (const key in result) {
               console.log(key,result[key]);
        }

    } catch (error) {
        console.error(error);
    }
 }
 myFun();

    });
  });




  

