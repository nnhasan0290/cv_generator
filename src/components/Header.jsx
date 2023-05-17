import { useAuth0 } from "@auth0/auth0-react";
import Button from "./Common/Button";
import Avatar from "./Common/Avatar";
import { BsChevronUp } from "react-icons/bs";
import { RxExit } from "react-icons/rx";
import { useRef, useState } from "react";
import useOutsideClickHandler from "../utils/isClickedOnOutside";

const Header = () => {
  const { loginWithRedirect, logout, user, isAuthenticated, isLoading } =
    useAuth0();
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  const handleCloseDropdown = () => {
    setShowDropdown(false);
  };

  useOutsideClickHandler(dropdownRef, handleCloseDropdown);

  console.log(user);

  return (
    <div className="heading">
      <div className="heading__wrapper bbb-container">
        <h2 className="heading__logo">Resume Builder</h2>
        <div className="heading__btn">
         
          {isAuthenticated ? (
            <div className="heading__user" ref={dropdownRef}>
              <div
                className="heaading__user__main"
                onClick={() => {
                  setShowDropdown(!showDropdown);
                }}
              >
                <Avatar img={user?.picture} />
                <div className="heading__user--details">
                  <h3>{user?.name.split(" ")[0]}</h3>
                  <span
                    className={`${
                      showDropdown
                        ? "heading__user__arrow__up"
                        : "heading__user__arrow__down"
                    }`}
                  >
                    <BsChevronUp />
                  </span>
                </div>
              </div>
              {showDropdown && (
                <div className="heading__user__dropdown">
                  <div className="heading__user__dropdown__avatar">
                    <Avatar img={user?.picture} />
                    <h2>{user?.name}</h2>
                  </div>
                  <div className="heading__user__dropdown__logout">
                    <RxExit size={22} />
                    <span
                      onClick={() =>
                        logout({
                          logoutParams: { returnTo: window.location.origin },
                        })
                      }
                    >
                      Logout
                    </span>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <Button
              bg={isLoading ? "#6C757D" : "#007BFF"}
              onClick={() => loginWithRedirect()}
              type="primary"
              isLoading={isLoading}
            >
              Login
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
