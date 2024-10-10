import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./navbar.css"
import {
  faUserCircle,
  faGear,
  faPowerOff,
} from "@fortawesome/free-solid-svg-icons"
import { Link, useLoaderData } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { logout, selectUser } from "../../app/cerateAppSliceV2"

export default function Navbar() {
  const dispatch = useDispatch()
  // @ts-ignore
  const userData = useSelector(selectUser)
  // @ts-ignore
  const userName = userData?.userName
  return (
    <nav className="main-nav">
      <div className="nav-content">
        <Link className="main-nav-logo" to="/">
          <img
            className="main-nav-logo-image"
            src="/argentBankLogo-min.webp"
            alt="Argent Bank Logo"
          />
          <img
            className="main-nav-logo-image-mobile"
            src="/logoMobile-min.webp"
            alt="Argent Bank Logo Mobile"
          />
          <h1 className="sr-only">Argent Bank</h1>
        </Link>
        <div className="main-nav-right-flex">
          <Link className="main-nav-item" to="/sign-in">
            <div>{userName}</div>
            <FontAwesomeIcon
              className="main-nav-icon"
              icon={faUserCircle}
              size="2x"
            />
          </Link>
          <Link className="main-nav-item" to="/">
            <FontAwesomeIcon
              className="main-nav-icon"
              icon={faGear}
              size="2x"
            />
          </Link>
          {userName !== null && (
            <div className="main-nav-item" onClick={() => dispatch(logout())}>
              <FontAwesomeIcon
                className="main-nav-icon"
                icon={faPowerOff}
                size="2x"
              />
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}
