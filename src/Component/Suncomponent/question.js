import { Button } from "antd";

const Question = () => (
  <div>
    <div className=" place-content-center h-full w-full">
      <div className="w-fit sm:w-80 ">
        <Button
          shape="round"
          size="large"
          danger
          block
          style={{
            height: 60,
            backgroundColor: "#cf1322",
          }}
        >
          <div className="text-white text-3xl font-bold">ติดต่อสอบถาม</div>
        </Button>
      </div>
    </div>
  </div>
);

export default Question;
