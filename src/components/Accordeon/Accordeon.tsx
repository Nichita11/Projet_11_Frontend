import { useState } from "react"
import "./Accordeon.css"
import { faChevronRight,faX } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Accordeon_mini from "../Accordeon_mini/Accordeon_mini"
import AccordeonMini from "../Accordeon_mini/Accordeon_mini"

export default function Accordeon({ fluid = false }) {
  const [open, setOpen] = useState(false)

  return (
    <div className={`accordeon ${fluid ? "accordeon_fluid" : ""}`}>
      <div className="accordeon_btn">
        <div className="accordeon_text">
          <p className="account-title">Argent Bank Checking (x8349)</p>
          <p className="account-amount">$2,082.79</p>
          <p className="account-amount-description">Available Balance</p>
        </div>
        <FontAwesomeIcon
          icon={open?faX:faChevronRight}
          className={`arrow ${open ? "arrow_open" : ""}`}
          onClick={() => setOpen(prev => !prev)}
          size="4x"
        />
      </div>
      <div className={`accordeon_fall ${open ? "accordeon_fall_open" : ""}`}>
        <div
          className={`accordeon_fall_container ${
            open ? "accordeon_fall_container_open" : ""
          }`}
        >
          <div className="">
            <div className="accordeon_fall_content">
              <p>Date</p>
              <p>Description</p>
              <p>Amount</p>
              <p>Balance</p>
            </div>
            <AccordeonMini></AccordeonMini>
          </div>
        </div>
      </div>
    </div>
  )
}
