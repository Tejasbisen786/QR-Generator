import React from "react";
import { Input, QRCode, Space } from "antd";

const App = () => {
  const [text, setText] = React.useState("bisentejas-demo.me");
  return (
    <>
      <div className=" bg-slate-500  w-[100vw] h-[100vh] flex flex-col items-center justify-center shadow-lg ">
        <h1 className="text-center text-2xl font-bold text-white space-y-5 mb-3 uppercase ">
          {" "}
          QR Generator
        </h1>
        <Space direction="vertical" align="center">
          <div className="border-4 border-orange-500/100">
            <QRCode value={text || "-"} />
          </div>
          <Input
            placeholder="-"
            maxLength={60}
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </Space>

       
      </div>
    </>
  );
};
export default App;
