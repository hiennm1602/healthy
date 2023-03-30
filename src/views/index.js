import React, { useState } from "react";
import { Tabs } from "antd";
import Input from "../components/Input";
import Details from "../components/Details";

import { Context } from "../common/context";

const Main = () => {
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [sleepingTime, setSleepingTime] = useState(0);
  const [submit, setSubmit] = useState(false);
  const [kq, setKQ] = useState();
  return (
    <div className="mx-auto px-4 max-w-lg border-solid border-4 border-blue-900 h-fit bg-sky-200 rounded">
      <div className="items-center justyfind-center">
        <Context.Provider
          value={{
            height,
            weight,
            sleepingTime,
            submit,
            kq,
            setWeight,
            setHeight,
            setSleepingTime,
            setSubmit,
            setKQ,
          }}
        >
          <Tabs defaultActiveKey="1">
            <Tabs.TabPane tab="Nhập thông tin" key="1" >
              <Input />
            </Tabs.TabPane>
            <Tabs.TabPane tab="Chi tiết" key="2">
              <Details />
            </Tabs.TabPane>
          </Tabs>
        </Context.Provider>
      </div>
    </div>
  );
};

export default Main;
