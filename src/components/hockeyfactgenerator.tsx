import React, { useState } from "react";
import styled from "styled-components";

const StyledFactsContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #333;
  border-radius: 10px;
  padding: 20px;
  text-align: center;

  @media screen and (max-width: 600px) {
    width: 80%;
    max-width: 300px;
    padding: 10px;
  }
`;

const StyledFactsButton = styled.button`
  background-color: #0038A8;
  border-radius: 10px;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;

  @media screen and (max-width: 600px) {
    font-size: 14px;
    padding: 10px 20px;
  }
`;

type HockeyFact = string;

const hockeyFacts: HockeyFact[] = [
  "The Montreal Canadiens have won the most Stanley Cup championships in NHL history with 24.",
  "The Edmonton Oilers have the highest scoring game in NHL history, winning 12-9 against the Chicago Blackhawks on December 11, 1985.",
  "Wayne Gretzky holds the record for most career goals in the NHL with 894.",
  "The Stanley Cup was first awarded in 1893 and was only awarded to amateur teams until 1915.",
  "The Anaheim Ducks were originally known as the Mighty Ducks of Anaheim, named after the Disney movie.",
  "The longest NHL game in history was played on March 24, 1936, between the Detroit Red Wings and the Montreal Maroons. The game lasted six overtimes and ended after 176 minutes and 30 seconds of play.",
  "The New York Rangers were the first American team to win the Stanley Cup, doing so in 1928.",
  "The NHL introduced the shootout to decide tie games after the 2004-05 lockout.",
  "The Washington Capitals won their first Stanley Cup in 2018, ending a 44-year championship drought.",
  "Mario Lemieux and Jari Kurri share the record for most points in a single playoff season with 47.",
  "The original Ottawa Senators were one of the NHLs founding teams in 1917 and won 11 Stanley Cup championships before relocating in 1934.",
  "The Florida Panthers became the first expansion team to win a playoff series in their third season, in 1996.",
  "The Detroit Red Wings won the most games in a single NHL season with 62 in 1995-96.",
  "The NHLs first All-Star Game was played in 1947 in Toronto.",
  "The Pittsburgh Penguins won the Stanley Cup in back-to-back seasons in 2016 and 2017.",
  "Bobby Orr holds the record for most points in a single season by a defenseman with 139 in 1970-71.",
  "The NHL was originally composed of only Canadian teams until the Boston Bruins joined the league in 1924.",
  "The Chicago Blackhawks went 49 years between Stanley Cup championships, winning in 1961 and not again until 2010.",
  "The Philadelphia Flyers were the first expansion team to win the Stanley Cup, doing so in 1974.",
  "The Carolina Hurricanes won the Stanley Cup in 2006, becoming the first team from the Southeast Division to win the championship.",
];

const HockeyFactGenerator: React.FC = () => {
  const [currentFact, setCurrentFact] = useState<HockeyFact | null>(null);

  const generateRandomFact = () => {
    const randomIndex = Math.floor(Math.random() * hockeyFacts.length);
    setCurrentFact(hockeyFacts[randomIndex]);
  };

  return (
    <StyledFactsContainer>
      <StyledFactsButton onClick={generateRandomFact}>
        facts.gov
      </StyledFactsButton>
      {currentFact && <p>{currentFact}</p>}
    </StyledFactsContainer>
  );
};

export default HockeyFactGenerator;
