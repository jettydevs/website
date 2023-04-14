import * as React from "react"
import { Link } from "gatsby"

import manImg from "../../images/buy-and-sell/sell-1.png"
import mastercard from "../../images/logo/rupay-logo.png"
import visa from "../../images/logo/visa-logo.png"

const CoinSell = () => {
  const [days, setDays] = React.useState("")
  const [hours, setHours] = React.useState("")
  const [minutes, setMinutes] = React.useState("")
  const [seconds, setSeconds] = React.useState("")

  React.useEffect(() => {
    const interval = setInterval(() => {
      commingSoonTime()
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  const commingSoonTime = () => {
    let endTime = new Date("January 1, 2024 17:00:00 PDT")
    let endTimeParse = Date.parse(endTime) / 1000
    let now = new Date()
    let nowParse = Date.parse(now) / 1000
    let timeLeft = endTimeParse - nowParse
    let days = Math.floor(timeLeft / 86400)
    let hours = Math.floor((timeLeft - days * 86400) / 3600)
    let minutes = Math.floor((timeLeft - days * 86400 - hours * 3600) / 60)
    let seconds = Math.floor(
      timeLeft - days * 86400 - hours * 3600 - minutes * 60
    )
    if (hours < "10") {
      hours = "0" + hours
    }
    if (minutes < "10") {
      minutes = "0" + minutes
    }
    if (seconds < "10") {
      seconds = "0" + seconds
    }
    setDays(days)
    setHours(hours)
    setMinutes(minutes)
    setSeconds(seconds)
  }
  return (
    <>
      <div
        id="sell"
        className="currency-coin-sell-area pt-70 pb-70 bg-color-1c2029"
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div 
                className="currency-coin-sell-image"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="500" 
                data-aos-once="true"
              >
                <img src={manImg} alt="Image" />
              </div>
            </div>

            <div className="col-lg-6">
              <div className="currency-coin-sell-content">
                <div className="coin-sell-title">
                  <span>Coin Sale</span>
                  <h2>Pre-Sale Ends In</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod ut labore magna aliqua. Ut enim ad minim venia
                    mquis ctetur adipisc.
                  </p>
                </div>

                <div className="currency-time-list">
                  <ul id="timer" className="flex-wrap d-flex">
                    <li
                      id="days"
                      className="align-items-center flex-column d-flex justify-content-center"
                    >
                      {days} <span>Days</span>
                    </li>
                    <li
                      id="hours"
                      className="align-items-center flex-column d-flex justify-content-center"
                    >
                      {hours} <span>Hours</span>
                    </li>
                    <li
                      id="minutes"
                      className="align-items-center flex-column d-flex justify-content-center"
                    >
                      {minutes} <span>Minutes</span>
                    </li>
                    <li
                      id="seconds"
                      className="align-items-center flex-column d-flex justify-content-center"
                    >
                      {seconds} <span>Seconds</span>
                    </li>
                  </ul>
                </div>

                <div className="coin-sell-btn">
                  <Link to="#" className="currency-default-btn mr-20 btn">
                    Buy Tokens 55% Off
                  </Link>
                  <Link to="#" className="currency-default-btn style2 btn">
                    White Pappers
                  </Link>
                </div>

                <div className="bank-links">
                  <a href="#" target="_blank" rel="noreferrer">
                    <img src={mastercard} alt="Image" />
                  </a>
                  <a href="#" target="_blank" rel="noreferrer">
                    <img src={visa} alt="Image" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CoinSell
