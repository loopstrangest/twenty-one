/** @format */

import { Box } from "@mui/system";
import Numbers from "./Numbers";
import Operators from "./Operators";
import TwentyOneDisplay from "./TwentyOneDisplay";
import Equation from "./Equation";
import SubmitButton from "./SubmitButton";
import ClearButton from "./ClearButton";
import EndScreen from "./EndScreen";
import PauseScreen from "./PauseScreen";
import { useEffect, useState } from "react";
import Footer from "../Footer/Footer";
import { loadState, saveState } from "../../utils/localStorage";
import { calculateRank } from "../../utils/calculateRank";
import Header from "../Header/Header";

const Game: React.FC = () => {
  const [currentTime, setCurrentTime] = useState(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);

  const [currentStreak, setCurrentStreak] = useState<number>(
    loadState("currentStreak") || 0
  );
  const [lastPlayedDate, setLastPlayedDate] = useState<string | null>(
    loadState("lastPlayedDate") || null
  );
  const [bestResults, setBestResults] = useState<
    Array<{ date: string; rank: number; time: number }>
  >(loadState("bestResults") || []);
  const [totalDaysPlayed, setTotalDaysPlayed] = useState<number>(
    loadState("totalDaysPlayed") || 0
  );
  const [longestStreak, setLongestStreak] = useState<number>(
    loadState("longestStreak") || 0
  );

  const [evaluation, setEvaluation] = useState<number | null>(null);
  const [shareObject, setShareObject] = useState<{
    rank: number;
    rankWithSuffixString: string;
    timeString: string;
    finalTime: number;
    equation: (string | number | null)[];
    result: number;
    bestEquation: (string | number | null)[];
    bestResult: number;
  } | null>(loadState("shareObject") || null);
  const offset = new Date().getTimezoneOffset() + 480; // 480 minutes = 8 hours behind UTC (PST)

  const today = new Date(new Date().getTime() - offset * 60 * 1000)
    .toISOString()
    .split("T")[0];

  const isTodayLastPlayedDate = lastPlayedDate === today;
  const [isGameEnded, setIsGameEnded] = useState<boolean>(
    isTodayLastPlayedDate
  );

  const [equation, setEquation] = useState<(string | number | null)[]>(
    Array(7).fill(null)
  );
  const [numbers, setNumbers] = useState<
    Array<{ number: number; inEquation: boolean }>
  >(() => {
    const tempNumbers = [];
    let lowerHalf = false;
    let upperHalf = false;
    while (tempNumbers.length < 4) {
      const newNumber = Math.floor(Math.random() * 9) + 1;
      if (newNumber >= 1 && newNumber <= 4) lowerHalf = true;
      if (newNumber >= 6 && newNumber <= 9) upperHalf = true;
      if (tempNumbers.filter((num) => num.number === newNumber).length < 2) {
        tempNumbers.push({ number: newNumber, inEquation: false });
      }
      if (tempNumbers.length === 4 && (!lowerHalf || !upperHalf)) {
        tempNumbers.pop();
        lowerHalf = false;
        upperHalf = false;
      }
    }
    return tempNumbers;
  });
  const [operators, setOperators] = useState<
    Array<{ operator: string; inEquation: boolean }>
  >(() => {
    const operators = ["+", "−", "×", "÷"];
    const shuffledOperators = operators.sort(() => Math.random() - 0.5);
    const [firstOperator, secondOperator, thirdOperator] = shuffledOperators;
    return [
      { operator: firstOperator, inEquation: false },
      { operator: secondOperator, inEquation: false },
      { operator: thirdOperator, inEquation: false },
    ];
  });

  const handleNumberClick = (number: number, index: number) => {
    const newNumbers = [...numbers];
    newNumbers[index].inEquation = true;
    newNumbers.splice(index, 1);
    const newEquation = [...equation];
    const firstEmptySpot = newEquation.findIndex(
      (spot, index) => spot === null && index % 2 === 0
    );
    if (firstEmptySpot !== -1) {
      newEquation[firstEmptySpot] = number;
      setEquation(newEquation);
    }
    setNumbers(newNumbers);
  };

  const handleOperatorClick = (operator: string, index: number) => {
    const newOperators = [...operators];
    newOperators[index].inEquation = true;
    newOperators.splice(index, 1);
    const newEquation = [...equation];
    const firstEmptySpot = newEquation.findIndex(
      (spot, index) => spot === null && index % 2 === 1
    );
    if (firstEmptySpot !== -1) {
      newEquation[firstEmptySpot] = operator;
      setEquation(newEquation);
    }
    setOperators(newOperators);
  };

  const handleNumberEnable = (number: number, index: number) => {
    setNumbers((prevNumbers) => [
      ...prevNumbers,
      { number, inEquation: false },
    ]);
  };

  const handleOperatorEnable = (operator: string, index: number) => {
    setOperators((prevOperators) => [
      ...prevOperators,
      { operator, inEquation: false },
    ]);
  };

  const handleSymbolClick = (symbol: string | number, index: number) => {
    if (typeof symbol === "number") {
      handleNumberEnable(symbol, index);
    } else {
      handleOperatorEnable(symbol, index);
    }
    setEquation((prevEquation) => {
      const newEquation = [...prevEquation];
      newEquation[index] = null;
      return newEquation;
    });
  };

  const handleEquationSubmit = (time: number) => {
    // Extract just the operators and numbers from the equation
    const operatorList = equation.filter(
      (item): item is string => typeof item === "string"
    );
    const numberList = equation.filter(
      (item): item is number => typeof item === "number"
    );

    // Update currentStreak and longestStreak
    // Adjusting for timezone offset to get yesterday's date at midnight west coast USA time
    const yesterday = new Date(
      new Date().getTime() - (864e5 + offset * 60 * 1000)
    )
      .toISOString()
      .split("T")[0];

    if (lastPlayedDate === yesterday || lastPlayedDate === null) {
      setCurrentStreak(currentStreak + 1);
      if (currentStreak + 1 > longestStreak) {
        setLongestStreak(currentStreak + 1);
      }
    } else if (lastPlayedDate !== yesterday) {
      setCurrentStreak(0);
    }

    // Update lastPlayedDate and totalDaysPlayed
    setLastPlayedDate(today);
    setTotalDaysPlayed(totalDaysPlayed + 1);

    // Calculate the rank of the submitted equation
    const ranks = calculateRank(operatorList, numberList);
    console.log("RANKS!!!", ranks);

    // Find the rank of the submitted equation
    const rankObject = ranks.find(
      (rank) => JSON.stringify(rank.equation) === JSON.stringify(equation)
    );
    const rank = rankObject ? rankObject.trueRank : 0;
    const bestEquation = ranks[0].equation;
    const bestResult = ranks[0].result;
    const newBestResults = [
      ...bestResults,
      {
        date: today,
        time: currentTime,
        rank: rank,
      },
    ]
      .sort((a, b) => a.rank - b.rank || a.time - b.time)
      .slice(0, 3);
    setBestResults(newBestResults);
    const rankSuffixes = ["th", "st", "nd", "rd"];
    const v = rank % 100;
    const rankSuffix =
      v > 10 && v < 20
        ? rankSuffixes[0]
        : rankSuffixes[rank % 10 > 3 ? 0 : rank % 10];
    const rankWithSuffixString =
      rank === 1 ? "best" : `${rank}${rankSuffix} best`;
    const hours = Math.floor(currentTime / 3600);
    const minutes = Math.floor((currentTime % 3600) / 60);
    const seconds = currentTime % 60;
    const finalTime = currentTime;
    let timeString = "";
    if (hours > 0) timeString += `${hours}h `;
    if (minutes > 0) timeString += `${minutes}m `;
    if (seconds > 0) timeString += `${seconds}s`;
    timeString = timeString.trim();
    const result = evaluation ? evaluation : 0;
    setShareObject({
      rank,
      rankWithSuffixString,
      timeString,
      finalTime,
      equation,
      result,
      bestEquation,
      bestResult,
    });
    setIsGameEnded(true);
  };

  const handleClear = () => {
    equation.forEach((symbol, index) => {
      // If the symbol is not null, handle its click
      if (symbol !== null) {
        handleSymbolClick(symbol, index);
      }
    });
  };

  useEffect(() => {
    saveState("currentStreak", currentStreak);
    saveState("lastPlayedDate", lastPlayedDate);
    saveState("bestResults", bestResults);
    saveState("totalDaysPlayed", totalDaysPlayed);
    saveState("longestStreak", longestStreak);
    saveState("shareObject", shareObject);
  }, [
    currentStreak,
    lastPlayedDate,
    bestResults,
    totalDaysPlayed,
    longestStreak,
    shareObject,
  ]);

  return (
    <Box>
      <Header
        currentTime={currentTime}
        setCurrentTime={setCurrentTime}
        isGameEnded={isGameEnded}
        isPaused={isPaused}
        setIsPaused={setIsPaused}
      />
      {isGameEnded || lastPlayedDate === today ? (
        <>
          <EndScreen
            gameNumber={1} // replace with the appropriate state or value
            shareObject={shareObject}
          />
          <Footer />
        </>
      ) : isPaused ? (
        <>
          <PauseScreen setIsPaused={setIsPaused} />
          <Footer />
        </>
      ) : (
        <>
          <TwentyOneDisplay evaluation={evaluation} />
          <Equation
            equation={equation}
            evaluation={evaluation}
            setEvaluation={setEvaluation}
            handleSymbolClick={handleSymbolClick}
          />
          <Box>
            {evaluation !== null ? (
              <Box sx={{ display: "flex", justifyContent: "center" }} mt={2}>
                <ClearButton onClear={handleClear} />
                <SubmitButton
                  onSubmit={() => handleEquationSubmit(currentTime)}
                  currentTime={currentTime}
                />{" "}
              </Box>
            ) : (
              <>
                <Operators
                  operators={operators}
                  onOperatorClick={handleOperatorClick}
                />
                <Numbers numbers={numbers} onNumberClick={handleNumberClick} />
                <ClearButton onClear={handleClear} />
              </>
            )}
          </Box>
          <Footer />
        </>
      )}
    </Box>
  );
};

export default Game;
