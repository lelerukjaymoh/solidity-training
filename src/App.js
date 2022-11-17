import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from "react"
import { checkBalance, distribute, initRecipients } from "./packages/core/functionalities"
import { utils } from "ethers"

function App() {
  const [balance, setBalance] = useState("")
  const [events, setEvents] = useState()

  // const recipients = ["0x675425CBfF8fFc29FbC23Bef7E1046F54D0E0b81", "0xB6d1a33C424E613AeBc3f0e761d31Cd39FD1CBa7"]
  // const amount = [utils.parseEther("0.0000001"), utils.parseEther("0.00000002")]

  useEffect(() => {
    const getBalance = async () => {
      const balance = await checkBalance()
      setBalance(balance)

      console.log("Balance ", balance)
    }

    const events = distribute()
    setEvents(events)

    getBalance().catch((error => {
      console.log("Error ", error)
    })
    )
  })


  // initRecipients(recipients, amount)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          We managed to link the frontend to a contract
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >


        </a>
        Contract balance : {balance}
        events : {events.map()}
      </header>
    </div>
  );
}

export default App;
