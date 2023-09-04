import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';

import '../App.css'
import { Equation } from '../support/Equation';

import python from '../assets/python.svg'
import TradeBotIcon from '../assets/tradebottext.png'

export function ProjectTradeBot(props) {

    let [index, setIndex] = React.useState(0)

    const strategies = [
        {
            name: "MACD",
            synopsis: "MACD stands for moving average convergence/divergence. It is a momentum based technical indicator that returns the different between long term and short term exponential moving average. In this case, the MACD strategy is longer term hedge against the more riskier strategies in the portfolio, and therefore uses 26-day and 12-day as the long and short term averages respectively.",
            init: "As a longer term strategy, the initial setup for the MACD strategy requires an initial portfolio consisting of every stock in the SP-100, with positions bought based on market capitalization.",
            trading: [[false, "The MACD trades once every day. To begin, it creates a table with each stocks current MACD and Signal (the MACD for an arbitrary signal value, in this case 9-day). In technical analysis, a stock is considered a BUY if the MACD is higher than the Signal. Therefore, each day, the difference in percentage from a stocks MACD and Signal is used to determine the percent-change in position for the stock."]]
        },
        {
            name: "Bollinger Bands",
            synopsis: "Bollinger Bands (BBands) is a technical indicator based on using a simple moving average given a number of periods (typically 20) and set amount of standard deviations (typically 2) to construct upper and lower bounds of a stocks price level. It is powerful because it adjusts according to volatility swings due to the use of standard deviation in its calculation.",
            init: "The BBands trading strategy doesn't initialize a set portfolio and instead only trades from a list of 25-30 high growth yet stable stocks.",
            trading: [[false, "The BBands strategy executes once every half an hour starting at 9:30 AM EST and ending at 4:00 PM EST. To perform its calculation it first determines a composite indicator using a stocks price, upper BBand, and lower BBand, called the B%. The B% is calculated as follows:"], [true, "B% = (Price - Lower Band ) / (Upper Band - Lower Band )"], [false, "If this value is below a certain threshold (default 0.3), then it generates BUY signal. If the value is above a certain value (default 0.7), then it generates a SELL signal. Values in between the BUY and SELL threshold require no action. Once the algorithim determines an action, it then determines a factor (f) based on the value of B% using the following formula:"], [true, "f = 1 + ( |B% - Threshold(BUY or SELL)| / Threshold )"], [false, "It then uses this factor to determine a value to trade for the given stock using the following formula:"], [true, "Trade Value = 0.04 * Buying Power * (Stock Market Cap / Average Market Cap ) * f"],[false, "Note: If a sell signal is given to position that doesn't exist, the algorithm will ignore it."]]

            
        }

    ]
 
    const stack = [


        {
            title: "Python (Algorithm)",
            img: python
        }

        
        
    ]
    function onClick(event) {

    }


    return (
        <div
        className='projects'
        id = "accendre"
        >
        
        <img src = {TradeBotIcon} id = "titleImage2"></img>
        <Button href = "https://github.com/prajwalshah19/TradingBot/tree/main" target = "_blank" className= 'mainButton' variant="outline-light" size="lg">View on Github</Button>
        <div className = 'synopsisCon'>
            <h2>About</h2>
            <h4>June 2023 - Present</h4>
            <p>In the summer of 2023, I worked on building an algorithmic trading bot using Python. Through this project, I have learned the basics of algorithmic and mathematical trading while developing a functioning Python application that communicates with multiple APIs to process various technical indicators and convert them into paper trades on Alpaca. I am currently working on implementing a more efficient algorithm and more effective trading strategies.</p>
            
            
        </div>

        <div
        className = 'tocCon'
        >
        <Dropdown>
        <Dropdown.Toggle variant = 'light' id="tocMenu" >
            Table of Contents
        </Dropdown.Toggle>

        <Dropdown.Menu id = 'tocMenu'>
            <Dropdown.Item href="#overview">Overview</Dropdown.Item>
            <Dropdown.Item href="#tradeStrat">Trading Strategies</Dropdown.Item>
            
            <Dropdown.Item href="#techStack">Tech Stack</Dropdown.Item>
            
        </Dropdown.Menu>
        </Dropdown>
        
        </div>

        <div
        className = 'synopsisCon'
        id = "overview"
        >
            <h2>Overview</h2>
            <p>This bot operates by implementing numerous techinical trading strategies that operate independently of each other. The end user will eventually be able to designate how much of each strategy is utlized in their portfolio. The project utilizes the various API's and packages to get data and execute trades.</p>
            
        </div>

        <div
        className = 'synopsisCon'
        id = "tradeStrat"
        >
            <h2>Trading Strategies</h2>
            {strategies.map(
                item => {
                    return (
                        <div className = "education">
                            <h3>{item.name}</h3>
                            <h5>Synopsis</h5>
                            <p>{item.synopsis}</p>
                            <h5>Initialization</h5>
                            <p>{item.init}</p>
                            <h5>Trading</h5>
                            {item.trading.map(line => {return (line[0] ? <Equation text = {line[1]} /> : <p>{line[1]}</p>)})}
                        </div>
                    )
                }
            )}

        </div>


        <div
        className = 'synopsisCon'
        id = "techStack"
        >
        <h2>Tech Stack</h2>

            <div
            className = "skills"
            >
            
            <div
                className='skillsCon'
                id = "stackCon"
                >
                {stack.map (item => {
                    return (
                        <div
                        className = 'skillsItem'
                        >
                        <img src = {item.img} />
                        <h2>{item.title}</h2>
                        </div>
                    )
                })}
                </div>
            </div>

        </div>

        





        </div>
            
            

        );

}
