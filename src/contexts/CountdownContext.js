import React, { createContext, useContext, useEffect, useState } from "react";
import { ChallengesContext } from "./ChallengesContexts";

export const CountdownContext = createContext({})
let countdownTimeout;

export function CountdownProvider({children}){
    const { startNewChallenge } = useContext(ChallengesContext);

    const [time, setTime] = useState( 0.1 * 60 );
    const [isActive, setActive] = useState(false);
    const [hasFinshed, setHasFinished] =  useState(false);

    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    function startCountdown() {   
        setActive(true);
      }
    
      function resetCountdown(){
        clearTimeout(countdownTimeout);
        setActive(false);
        setTime( 0.1 * 60 );
        setHasFinished(false)
      }
    
      useEffect(() => {
        if (isActive && time > 0) {
          countdownTimeout = setTimeout(() => {
            setTime(time - 1);
          }, 1000);
        } else if (isActive && time == 0 ){
          setHasFinished(true);
          setActive(false);
          startNewChallenge();
        }
      }, [isActive, time])

    
    return(
        <CountdownContext.Provider value={{
            minutes,
            seconds,
            hasFinshed,
            isActive,
            startCountdown,
            resetCountdown
        }}>
            {children}
        </CountdownContext.Provider>
    )
}