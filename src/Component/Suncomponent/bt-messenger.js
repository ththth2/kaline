import { FaFacebookMessenger } from "react-icons/fa";
import { IconContext } from "react-icons";
import { Button } from "antd";

const Btmes = () => (
  <div>
    <div className="grid place-content-center">
      <div className="">
        <IconContext.Provider
          value={{
            color: "#40a9ff",
            size: "4em",
          }}
        >
          <Button type="text">
            <FaFacebookMessenger />
          </Button>
        </IconContext.Provider>
      </div>
    </div>
  </div>
);

export default Btmes;
