import { useState } from "react"
import "./Accordeon_mini.css"
import {
  faChevronDown,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function AccordeonMini({ fluid = false }) {
  const [open, setOpen] = useState(false)

  return (
    <div className={`accordeon ${fluid ? "accordeon_fluid" : ""}`}>
      <div className="accordeon_mini_btn">
        <div className="accordeon_mini_text">
          <p className="accordeon_mini_p">27/10/20</p>
          <p className="">Golden Sun Bakery</p>
          <p className="">8$</p>
          <p className="">238$</p>
        </div>
        <FontAwesomeIcon
          icon={faChevronDown}
          className={`arrow ${open ? "arrow_open" : ""}`}
          onClick={() => setOpen(prev => !prev)}
          size="xl"
        />
      </div>
      <div
        className={`accordeon_mini_fall ${open ? "accordeon_fall_open" : ""}`}
      >
        <div
          className={`accordeon_fall_container ${
            open ? "accordeon_fall_container_open" : ""
          }`}
        >
          <div className="accordeon_mini_fall_content"></div>
        </div>
      </div>
    </div>
  )
}
