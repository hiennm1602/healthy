import React, { useEffect, useState } from "react";
import { Button, Form, InputNumber, PageHeader } from "antd";
import { useMainContext } from "../common/context";

const layout = {
  labelCol: { span: 11 },
  wrapperCol: { span: 6 },
};

const tailLayout = {
  wrapperCol: { offset: 5, span: 14 },
};

const Input = () => {
  const [form] = Form.useForm();
  const {
    setWeight,
    setHeight,
    setSleepingTime,
    setSubmit,
    kq,
  } = useMainContext();
  const [detail, setDetail] = useState([]);

  //hàm thành viên cơ bản
  const left = (x, a, b) => {
    return (x - a) / (b - a);
  };

  const right = (x, c, d) => {
    return (d - x) / (d - c);
  };

  const showDetail = (kq) => {
    let arr = [];
    // if (kq <= 1) {
    //   arr = [...arr, { label: "Y", result: 0 }];
    // }
    if (kq < 25 && kq > 0) {
      arr = [...arr, { label: "Kém", result: left(kq, 0, 25) }];
    }
    if (kq === 25) {
      arr = [...arr, { label: "Kém", result: 1 }];
    }
    if (kq > 25 && kq < 50) {
      arr = [
        ...arr,
        { label: "Kém", result: right(kq, 25, 50) },
        { label: "Bình thường", result: left(kq, 25, 50) },
      ];
    }
    if (kq === 50) {
      arr = [...arr, { label: "Bình thường", result: 1 }];
    }
    if (kq > 50 && kq < 75) {
      arr = [
        ...arr,
        { label: "Bình thường", result: right(kq, 50, 75) },
        { label: "Tốt", result: left(kq, 50, 75) },
      ];
    }
    if (kq === 75) {
      arr = [...arr, { label: "Tốt", result: 1 }];
    }
    if (kq > 75 && kq < 100) {
      arr = [...arr, { label: "Tốt", result: right(kq, 75, 100) }];
    }
    // setDetail(arr);
    return arr;
  };
  const onFinish = (values) => {
    setSubmit(true);
  };

  const onReset = () => {
    //set all value = 0
    form.resetFields();
    setSubmit(false);
    setWeight(0);
    setHeight(0);
    setSleepingTime(0);
  };

  // const onFill = () => {
  //   form.setFieldsValue({
  //     note: "Hello world!",
  //     gender: "male",
  //   });
  // };
  useEffect(() => {
    setDetail(showDetail(kq));
  }, [kq]);
  // console.log("detail: ", detail);
  return (
    <div className="grid grid-cols-0">
      <Form {...layout} form={form} name="control-hooks" onFinish={onFinish}>
        <PageHeader style={{ fontSize: "20px", paddingBottom: "50px"}}>
          Nhập thông số của trẻ
        </PageHeader>
        <Form.Item
          name="height"
          label="Chiều cao (cm)"
          rules={[{ required: true }]}
        >
          <InputNumber
            min={0}
            onChange={(val) => {
              setHeight(val);
              setSubmit(false);
            }}
            style={{ borderRadius: "0.25rem", width: "250px" }}
          />
        </Form.Item>
        <Form.Item
          name="weight"
          label="Cân nặng (kg)"
          rules={[{ required: true }]}
        >
          <InputNumber
            min={0}
            onChange={(val) => {
              setWeight(val);
              setSubmit(false);
            }}
            style={{ borderRadius: "0.25rem", width: "250px" }}
          />
        </Form.Item>
        <Form.Item
          name="sleepingtime"
          label="Thời gian ngủ (giờ/ngày)"
          rules={[{ required: true }]}
        >
          <InputNumber
            min={0}
            onChange={(val) => {
              setSleepingTime(val);
              setSubmit(false);
            }}
            style={{ borderRadius: "0.25rem", width: "250px" }}
          />
        </Form.Item>
        <Form.Item {...tailLayout}>
          <Button
            type="primary"
            htmlType="submit"
            style={{ borderRadius: "0.25rem" }}
          >
            Tính toán
          </Button>
        </Form.Item>
      </Form>
      <br/>
      <div className="text-lg">
        <p className="text-3xl">Kết quả</p>
        <p className="text-xl">Chỉ số phát triển: {kq !== 10000 && kq}</p>
        {detail.map((item) => (
            <p>{` ${item.label}: ${item.result * 100}%`}</p>
        ))}
      </div> 
    </div>
    
  );
};

export default Input;
