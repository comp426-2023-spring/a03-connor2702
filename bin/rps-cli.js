#!/usr/bin/env node

import minimist from "minimist";
import { rps } from "../lib/rpsls.js"

const argument = minimist(process.argv.slice(2));

if (argument.h || argument.help) {
    console.log(`
    Usage: node-rps [SHOT]
    Play Rock Paper Scissors (RPS)
    
      -h, --help      display this help message and exit
      -r, --rules     display the rules and exit
    
    Examples:
      node-rps        Return JSON with single player RPS result.
                      e.g. {"player":"rock"}
      node-rps rock   Return JSON with results for RPS played against a simulated opponent.
                      e.g {"player":"rock","opponent":"scissors","result":"win"}`);

    process.exit(0);
}

if (argument.r || argument.rules) {
    console.log(`
    Rules for Rock Paper Scissors:

    - Scissors CUTS Paper
    - Paper COVERS Rock
    - Rock CRUSHES Scissors`);

    process.exit(0);
}

try {
    console.log(JSON.stringify(rps(argument._[0])));
} catch (error) {
    if (error instanceof RangeError) {
        console.log(`
        Usage: node-rps [SHOT]
        Play Rock Paper Scissors (RPS)
        
          -h, --help      display this help message and exit
          -r, --rules     display the rules and exit
        
        Examples:
          node-rps        Return JSON with single player RPS result.
                          e.g. {"player":"rock"}
          node-rps rock   Return JSON with results for RPS played against a simulated opponent.
                          e.g {"player":"rock","opponent":"scissors","result":"win"}`);
        console.log(`
        Rules for Rock Paper Scissors:
    
        - Scissors CUTS Paper
        - Paper COVERS Rock
        - Rock CRUSHES Scissors`);

        process.exit(1);
    }
}
