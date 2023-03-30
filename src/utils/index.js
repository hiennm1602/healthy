//Xử lý các hàm thành viên
export const rightTrapezoid = (x, a, b) => {
  return (b - x) / (b - a);
};
export const leftTrapezoid = (x, c, d) => {
  return (x - c) / (d - c);
};
//------------------------------------

//xử lý các tập mờ

export const handleLogicHeight = (height) => {
  let resultHeight = [];
  if (height <= 50) {
    resultHeight.push({ result: 1, label: "RT" });
  }
  if (50 < height && height < 60) {
    resultHeight.push({
      result: rightTrapezoid(height, 50, 60),
      label: "RT",
    });
    resultHeight.push({
      result: leftTrapezoid(height, 50, 60),
      label: "T",
    });
  }
  if (60 <= height && height <= 80) {
    resultHeight.push({
      result: 1,
      label: "T",
    });
  }
  if (80 < height && height < 90) {
    resultHeight.push({
      result: rightTrapezoid(height, 80, 90),
      label: "T",
    });
    resultHeight.push({
      result: leftTrapezoid(height, 80, 90),
      label: "BT",
    });
  }
  if (90 <= height && height <= 110) {
    resultHeight.push({
      result: 1,
      label: "BT",
    });
  }
  if (110 < height && height < 120) {
    resultHeight.push({
      result: rightTrapezoid(height, 110, 120),
      label: "TB",
    });
    resultHeight.push({
      result: leftTrapezoid(height, 110, 120),
      label: "C",
    });
  }
  if (120 <= height && height <= 140) {
    resultHeight.push({
      result: 1,
      label: "C",
    });
  }
  if (140 < height && height < 150) {
    resultHeight.push({
      result: rightTrapezoid(height, 140, 150),
      label: "C",
    });
    resultHeight.push({
      result: leftTrapezoid(height, 140, 150),
      label: "RC",
    });
  }
  if (height >= 150) {
    resultHeight.push({
      result: 1,
      label: "RC",
    });
  }
  return resultHeight;
};
export const handleLogicWeight = (weight) => {
  let resultWeight = [];
  if (weight <= 10) {
    resultWeight.push({ result: 1, label: "RN" });
  }
  if (8 < weight && weight < 10) {
    resultWeight.push({
      result: rightTrapezoid(weight, 8, 10),
      label: "RN",
    });
    resultWeight.push({
      result: leftTrapezoid(weight, 8, 10),
      label: "N",
    });
  }
  if (10 <= weight && weight <= 18) {
    resultWeight.push({
      result: 1,
      label: "N",
    });
  }
  if (18 < weight && weight < 20) {
    resultWeight.push({
      result: rightTrapezoid(weight, 18, 20),
      label: "N",
    });
    resultWeight.push({
      result: leftTrapezoid(weight, 18, 20),
      label: "BT",
    });
  }
  if (20 <= weight && weight <= 28) {
    resultWeight.push({
      result: 1,
      label: "BT",
    });
  }
  if (28 < weight && weight < 30) {
    resultWeight.push({
      result: rightTrapezoid(weight, 28, 30),
      label: "BT",
    });
    resultWeight.push({
      result: leftTrapezoid(weight, 28, 30),
      label: "M",
    });
  }
  if (30 <= weight && weight <= 38) {
    resultWeight.push({
      result: 1,
      label: "M",
    });
  }
  if (38 < weight && weight < 40) {
    resultWeight.push({
      result: rightTrapezoid(weight, 38, 40),
      label: "M",
    });
    resultWeight.push({
      result: leftTrapezoid(weight, 38, 40),
      label: "RM",
    });
  }
  if (40 <= weight) {
    resultWeight.push({
      result: 1,
      label: "RM",
    });
  }
  return resultWeight;
};
export const handleLogicSleepingTime = (sleepingTime) => {
  let resultSleepingTime = [];
  if (sleepingTime <= 7) {
    resultSleepingTime.push({ result: 1, label: "RI" });
  }
  if (7 < sleepingTime && sleepingTime < 8) {
    resultSleepingTime.push({
      result: rightTrapezoid(sleepingTime, 7, 8),
      label: "RI",
    });
    resultSleepingTime.push({
      result: leftTrapezoid(sleepingTime, 7, 8),
      label: "I",
    });
  }
  if (8 <= sleepingTime && sleepingTime <= 9) {
    resultSleepingTime.push({
      result: 1,
      label: "I",
    });
  }
  if (9 < sleepingTime && sleepingTime < 10) {
    resultSleepingTime.push({
      result: rightTrapezoid(sleepingTime, 9, 10),
      label: "I",
    });
    resultSleepingTime.push({
      result: leftTrapezoid(sleepingTime, 9, 10),
      label: "BT",
    });
  }
  if (10 <= sleepingTime && sleepingTime <= 11) {
    resultSleepingTime.push({
      result: 1,
      label: "BT",
    });
  }
  if (11 < sleepingTime && sleepingTime < 12) {
    resultSleepingTime.push({
      result: rightTrapezoid(sleepingTime, 11, 12),
      label: "BT",
    });
    resultSleepingTime.push({
      result: leftTrapezoid(sleepingTime, 11, 12),
      label: "N",
    });
  }
  if (12 <= sleepingTime && sleepingTime <= 13) {
    resultSleepingTime.push({
      result: 1,
      label: "N",
    });
  }
  if (13 < sleepingTime && sleepingTime < 14) {
    resultSleepingTime.push({
      result: rightTrapezoid(sleepingTime, 13, 14),
      label: "N",
    });
    resultSleepingTime.push({
      result: leftTrapezoid(sleepingTime, 13, 14),
      label: "RN",
    });
  }
  if (sleepingTime >= 14) {
    resultSleepingTime.push({
      result: 1,
      label: "RN",
    });
  }
  return resultSleepingTime;
};
export const handleLogicDI = (DI) => {
  let resultDI = [];
  if (1 <= DI && DI < 25) {
    resultDI.push({
      result: leftTrapezoid(DI, 1, 25),
      label: "K",
    });
  }
  if (DI === 25) {
    resultDI.push({ result: 1, label: "K" });
  }
  if (25 < DI && DI < 50) {
    resultDI.push({
      result: rightTrapezoid(DI, 25, 50),
      label: "K",
    });
    resultDI.push({
      result: leftTrapezoid(DI, 25, 50),
      label: "BT",
    });
  }
  if (DI === 50) {
    resultDI.push({ result: 1, label: "BT" });
  }
  if (50 <= DI && DI <= 75) {
    resultDI.push({
      result: rightTrapezoid(DI, 50, 75),
      label: "BT",
    });
    resultDI.push({
      result: leftTrapezoid(DI, 50, 75),
      label: "T",
    });
  }
  if (DI === 75) {
    resultDI.push({ result: 1, label: "BT" });
  }
  if (75 < DI && DI < 100) {
    resultDI.push({
      result: rightTrapezoid(DI, 75, 100),
      label: "T",
    });
  }
  return resultDI;
};
//-----------------------------------------

//Các hàm xử lý sau khi giải mờ
export const handleGraphDI = (y, label) => {
  let x1;
  let x2;
  if (label === "K") {
    if (y > 0 && y < 1) {
      x1 = 25 * y;
      x2 = 50 - 25 * y;
      return [
        { x: 0, y: 0 },
        { x: x1, y },
        { x: x2, y },
        { x: 50, y: 0 },
      ];
    }
    if (y === 1) {
      x1 = 25;
      return [
        { x: 0, y: 0 },
        { x: x1, y },
        { x: 50, y: 0 },
      ];
    }
  }
  if (label === "BT") {
    if (y > 0 && y < 1) {
      x1 = 25 + 25 * y;
      x2 = 75 - 25 * y;
      return [
        { x: 25, y: 0 },
        { x: x1, y },
        { x: x2, y },
        { x: 75, y: 0 },
      ];
    }
    if (y === 1) {
      x1 = 50;
      return [
        { x: 25, y: 0 },
        { x: x1, y },

        { x: 75, y: 0 },
      ];
    }
  }
  if (label === "T") {
    if (y > 0 && y < 1) {
      x1 = 50 + 25 * y;
      x2 = 100 - 25 * y;
      return [
        { x: 50, y: 0 },
        { x: x1, y },
        { x: x2, y },
        { x: 100, y: 0 },
      ];
    }
    if (y === 1) {
      x1 = 75;
      return [
        { x: 50, y: 0 },
        { x: x1, y },
        { x: 100, y: 0 },
      ];
    }
  }
};
//-----------------------------------------

const left = (x, a, b) => {
  return (x - a) / (b - a);
};

const right = (x, c, d) => {
  return (d - x) / (d - c);
};

export const showDetail = (kq) => {
  let arr = [];

  if (kq < 25 && kq > 0) {
    arr = [
      ...arr,
      { label: "K", result: left(kq, 0, 25) },
      { label: "BT", result: 0 },
      { label: "T", result: 0 }
    ];
  }
  if (kq === 25) {
    arr = [
      ...arr,
      { label: "K", result: 1 },
      { label: "BT", result: 0 },
      { label: "T", result: 0 }
    ];
  }
  if (kq < 50 && kq > 25) {
    arr = [
      ...arr,
      { label: "K", result: right(kq, 25, 50) },
      { label: "BT", result: left(kq, 25, 50) },
      { label: "T", result: 0 }
    ];
  }
  if (kq === 50) {
    arr = [
      ...arr,
      { label: "K", result: 0 },
      { label: "BT", result: 1 },
      { label: "T", result: 0 }
    ];
  }
  if (kq < 75 && kq > 50) {
    arr = [
      ...arr,
      { label: "K", result: 0 },
      { label: "BT", result: right(kq, 50, 75) },
      { label: "T", result: left(kq, 50, 75) }
    ];
  }
  if (kq === 75) {
    arr = [
      ...arr,
      { label: "K", result: 0 },
      { label: "BT", result: 0 },
      { label: "T", result: 1 }
    ];
  }
  if (kq < 100 && kq > 75) {
    arr = [
      ...arr,
      { label: "K", result: 0 },
      { label: "BT", result: 0 },
      { label: "T", result: right(kq, 75, 100) }
    ];
  }
  return arr;
};
export const showDetailHeight = (resultHeight) => {
  const labelHeight = resultHeight.map((item) => item.label);
  const labelAllHeight = ["RT", "T", "BT", "C", "RC"];
  const resultFinalHeight = [];
  labelAllHeight.map((item) => {
    if (labelHeight.includes(item)) {
      const index = labelHeight.findIndex((i) => i === item);
      resultFinalHeight.push(resultHeight[index]);
    } else {
      resultFinalHeight.push({ result: 0, label: item });
    }
  });
  return resultFinalHeight;
};
export const showDetailWeight = (resultWeight) => {
  const labelWeight = resultWeight.map((item) => item.label);
  const labelAllWeight = ["RN", "N", "BT", "M", "RM"];
  const resultFinalWeight = [];
  labelAllWeight.map((item) => {
    if (labelWeight.includes(item)) {
      const index = labelWeight.findIndex((i) => i === item);
      resultFinalWeight.push(resultWeight[index]);
    } else {
      resultFinalWeight.push({ result: 0, label: item });
    }
  });
  return resultFinalWeight;
};
export const showDetailSleepingTime = (resultSleepingTime) => {
  const labelSleepingTime = resultSleepingTime.map((item) => item.label);
  const labelAllSleepingTime = ["RI", "I", "BT", "N", "RN"];
  const resultFinalSleepingTime = [];
  labelAllSleepingTime.map((item) => {
    if (labelSleepingTime.includes(item)) {
      const index = labelSleepingTime.findIndex((i) => i === item);
      resultFinalSleepingTime.push(resultSleepingTime[index]);
    } else {
      resultFinalSleepingTime.push({ result: 0, label: item });
    }
  });
  return resultFinalSleepingTime;
};

