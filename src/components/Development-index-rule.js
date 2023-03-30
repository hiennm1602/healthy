//Xử lý luật cho Development Index
const HWS = (resultHeight, resultWeight, resultSleepingTime) => {
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
  // K, BT, T
  let resultFinalDevelopmentIndex = [
    { resultK: 2, label: "K" },
    { resultBT: 2, label: "BT" },
    { resultT: 2, label: "T" },
  ];

  const hanldeLogicDevelopmentIndex = (
    resultLabel,
    labelHeight,
    labelWeight,
    labelSleepingTime
  ) => {
    const labelResult = resultLabel;
    const tmp = "result" + resultLabel;
    const HeightItem = resultFinalHeight.filter(
      (item) => item.label === labelHeight);
    const WeightItem = resultFinalWeight.filter(
      (item) => item.label === labelWeight
    );
    const SleepingTimeItem = resultFinalSleepingTime.filter(
      (item) => item.label === labelSleepingTime
    );

    const min = Math.min(
      WeightItem[0].result,
      SleepingTimeItem[0].result,
      HeightItem[0].result
    );
    resultFinalDevelopmentIndex.forEach((item) => {
      if (item.label === labelResult && item?.[tmp] > min && min !== 0) {
        item[tmp] = min;
      }
    });
  };

  labelAllHeight.forEach((label_Height) => {
    labelAllWeight.forEach((label_Weight) => {
      labelAllSleepingTime.forEach((label_SleepingTime) => {
        //1
        if (
          label_Height === "RT" &&
          label_Weight === "RN" &&
          label_SleepingTime === "RI"
        ) {
          hanldeLogicDevelopmentIndex(
            "K",
            label_Height,
            label_Weight,
            label_SleepingTime
          );
        }
        //2
        if (
          label_Height === "RT" &&
          label_Weight === "RN" &&
          label_SleepingTime === "I"
        ) {
          hanldeLogicDevelopmentIndex(
            "K",
            label_Height,
            label_Weight,
            label_SleepingTime
          );
        }
        //3
        if (
          label_Height === "RT" &&
          label_Weight === "RN" &&
          label_SleepingTime === "BT"
        ) {
          hanldeLogicDevelopmentIndex(
            "BT",
            label_Height,
            label_Weight,
            label_SleepingTime
          );
        }
        //4
        if (
          label_Height === "RT" &&
          label_Weight === "RN" &&
          label_SleepingTime === "N"
        ) {
          hanldeLogicDevelopmentIndex(
            "BT",
            label_Height,
            label_Weight,
            label_SleepingTime
          );
        }
        //5
        if (
          label_Height === "RT" &&
          label_Weight === "RN" &&
          label_SleepingTime === "RN"
        ) {
          hanldeLogicDevelopmentIndex(
            "T",
            label_Height,
            label_Weight,
            label_SleepingTime
          );
        }
        //6
        if (
          label_Height === "RT" &&
          label_Weight === "N" &&
          label_SleepingTime === "RI"
        ) {
          hanldeLogicDevelopmentIndex(
            "K",
            label_Height,
            label_Weight,
            label_SleepingTime
          );
        }
        //7
        if (
          label_Height === "RT" &&
          label_Weight === "N" &&
          label_SleepingTime === "I"
        ) {
          hanldeLogicDevelopmentIndex(
            "K",
            label_Height,
            label_Weight,
            label_SleepingTime
          );
        }
        //8
        if (
          label_Height === "RT" &&
          label_Weight === "N" &&
          label_SleepingTime === "BT"
        ) {
          hanldeLogicDevelopmentIndex(
            "BT",
            label_Height,
            label_Weight,
            label_SleepingTime
          );
        }
        //9
        if (
          label_Height === "RT" &&
          label_Weight === "N" &&
          label_SleepingTime === "N"
        ) {
          hanldeLogicDevelopmentIndex(
            "BT",
            label_Height,
            label_Weight,
            label_SleepingTime
          );
        }
        //10
        if (
          label_Height === "RT" &&
          label_Weight === "N" &&
          label_SleepingTime === "RN"
        ) {
          hanldeLogicDevelopmentIndex(
            "T",
            label_Height,
            label_Weight,
            label_SleepingTime
          );
        }
        //11
        if (
          label_Height === "RT" &&
          label_Weight === "BT" &&
          label_SleepingTime === "RI"
        ) {
          hanldeLogicDevelopmentIndex(
            "K",
            label_Height,
            label_Weight,
            label_SleepingTime
          );
        }
        //12
        if (
          label_Height === "RT" &&
          label_Weight === "BT" &&
          label_SleepingTime === "I"
        ) {
          hanldeLogicDevelopmentIndex(
            "BT",
            label_Height,
            label_Weight,
            label_SleepingTime
          );
        }
        //13
        if (
          label_Height === "RT" &&
          label_Weight === "BT" &&
          label_SleepingTime === "BT"
        ) {
          hanldeLogicDevelopmentIndex(
            "BT",
            label_Height,
            label_Weight,
            label_SleepingTime
          );
        }
        //14
        if (
          label_Height === "RT" &&
          label_Weight === "BT" &&
          label_SleepingTime === "N"
        ) {
          hanldeLogicDevelopmentIndex(
            "T",
            label_Height,
            label_Weight,
            label_SleepingTime
          );
        }
        //15
        if (
          label_Height === "RT" &&
          label_Weight === "BT" &&
          label_SleepingTime === "RN"
        ) {
          hanldeLogicDevelopmentIndex(
            "T",
            label_Height,
            label_Weight,
            label_SleepingTime
          );
        }
        //16
        if (
          label_Height === "RT" &&
          label_Weight === "M" &&
          label_SleepingTime === "RI"
        ) {
          hanldeLogicDevelopmentIndex(
            "BT",
            label_Height,
            label_Weight,
            label_SleepingTime
          );
        }
        //17
        if (
          label_Height === "RT" &&
          label_Weight === "M" &&
          label_SleepingTime === "I"
        ) {
          hanldeLogicDevelopmentIndex(
            "T",
            label_Height,
            label_Weight,
            label_SleepingTime
          );
        }
        //18
        if (
          label_Height === "RT" &&
          label_Weight === "M" &&
          label_SleepingTime === "BT"
        ) {
          hanldeLogicDevelopmentIndex(
            "T",
            label_Height,
            label_Weight,
            label_SleepingTime
          );
        }
        //19
        if (
          label_Height === "RT" &&
          label_Weight === "M" &&
          label_SleepingTime === "N"
        ) {
          hanldeLogicDevelopmentIndex(
            "BT",
            label_Height,
            label_Weight,
            label_SleepingTime
          );
        }
        //20
        if (
          label_Height === "RT" &&
          label_Weight === "M" &&
          label_SleepingTime === "RN"
        ) {
          hanldeLogicDevelopmentIndex(
            "BT",
            label_Height,
            label_Weight,
            label_SleepingTime
          );
        }
        //21
        if (
          label_Height === "RT" &&
          label_Weight === "RM" &&
          label_SleepingTime === "RI"
        ) {
          hanldeLogicDevelopmentIndex(
            "BT",
            label_Height,
            label_Weight,
            label_SleepingTime
          );
        }
        //22
        if (
          label_Height === "RT" &&
          label_Weight === "RM" &&
          label_SleepingTime === "I"
        ) {
          hanldeLogicDevelopmentIndex(
            "BT",
            label_Height,
            label_Weight,
            label_SleepingTime
          );
        }
        //23
        if (
          label_Height === "RT" &&
          label_Weight === "RM" &&
          label_SleepingTime === "BT"
        ) {
          hanldeLogicDevelopmentIndex(
            "BT",
            label_Height,
            label_Weight,
            label_SleepingTime
          );
        }
        //24
        if (
          label_Height === "RT" &&
          label_Weight === "RM" &&
          label_SleepingTime === "N"
        ) {
          hanldeLogicDevelopmentIndex(
            "K",
            label_Height,
            label_Weight,
            label_SleepingTime
          );
        }
        //25
        if (
          label_Height === "RT" &&
          label_Weight === "RM" &&
          label_SleepingTime === "RN"
        ) {
          hanldeLogicDevelopmentIndex(
            "K",
            label_Height,
            label_Weight,
            label_SleepingTime
          );
        }
        //26
        if (
          label_Height === "T" &&
          label_Weight === "RN" &&
          label_SleepingTime === "RI"
        ) {
          hanldeLogicDevelopmentIndex(
            "K",
            label_Height,
            label_Weight,
            label_SleepingTime
          );
        }
        //27
        if (
          label_Height === "T" &&
          label_Weight === "RN" &&
          label_SleepingTime === "I"
        ) {
          hanldeLogicDevelopmentIndex(
            "BT",
            label_Height,
            label_Weight,
            label_SleepingTime
          );
        }
        //28
        if (
          label_Height === "T" &&
          label_Weight === "RN" &&
          label_SleepingTime === "BT"
        ) {
          hanldeLogicDevelopmentIndex(
            "BT",
            label_Height,
            label_Weight,
            label_SleepingTime
          );
        }
        //29
        if (
          label_Height === "T" &&
          label_Weight === "RN" &&
          label_SleepingTime === "N"
        ) {
          hanldeLogicDevelopmentIndex(
            "K",
            label_Height,
            label_Weight,
            label_SleepingTime
          );
        }
        //30
        if (
          label_Height === "T" &&
          label_Weight === "RN" &&
          label_SleepingTime === "RN"
        ) {
          hanldeLogicDevelopmentIndex(
            "K",
            label_Height,
            label_Weight,
            label_SleepingTime
          );
        }
        //31
        if (
          label_Height === "T" &&
          label_Weight === "N" &&
          label_SleepingTime === "RI"
        ) {
          hanldeLogicDevelopmentIndex(
            "K",
            label_Height,
            label_Weight,
            label_SleepingTime
          );
        }
        //32
        if (
          label_Height === "T" &&
          label_Weight === "N" &&
          label_SleepingTime === "I"
        ) {
          hanldeLogicDevelopmentIndex(
            "BT",
            label_Height,
            label_Weight,
            label_SleepingTime
          );
        }
        //33
         if (
          label_Height === "T" &&
          label_Weight === "N" &&
          label_SleepingTime === "BT"
        ) {
          hanldeLogicDevelopmentIndex(
            "BT",
            label_Height,
            label_Weight,
            label_SleepingTime
          );
        }
        //34
        if (
          label_Height === "T" &&
          label_Weight === "N" &&
          label_SleepingTime === "N"
        ) {
          hanldeLogicDevelopmentIndex(
            "T",
            label_Height,
            label_Weight,
            label_SleepingTime
          );
        } 
        //35
        if (
          label_Height === "T" &&
          label_Weight === "N" &&
          label_SleepingTime === "RN"
        ) {
          hanldeLogicDevelopmentIndex(
            "T",
            label_Height,
            label_Weight,
            label_SleepingTime
          );
        }
        //36
        if (
          label_Height === "T" &&
          label_Weight === "BT" &&
          label_SleepingTime === "RI"
        ) {
          hanldeLogicDevelopmentIndex(
            "K",
            label_Height,
            label_Weight,
            label_SleepingTime
          );
        }
        //37
        if (
          label_Height === "T" &&
          label_Weight === "BT" &&
          label_SleepingTime === "I"
        ) {
          hanldeLogicDevelopmentIndex(
            "BT",
            label_Height,
            label_Weight,
            label_SleepingTime
          );
        }
        //38
        if (
          label_Height === "T" &&
          label_Weight === "BT" &&
          label_SleepingTime === "BT"
        ) {
          hanldeLogicDevelopmentIndex(
            "BT",
            label_Height,
            label_Weight,
            label_SleepingTime
          );
        }
        //39
        if (
          label_Height === "T" &&
          label_Weight === "BT" &&
          label_SleepingTime === "N"
        ) {
          hanldeLogicDevelopmentIndex(
            "T",
            label_Height,
            label_Weight,
            label_SleepingTime
          );
        }
        //40
        if (
          label_Height === "T" &&
          label_Weight === "BT" &&
          label_SleepingTime === "RN"
        ) {
          hanldeLogicDevelopmentIndex(
            "BT",
            label_Height,
            label_Weight,
            label_SleepingTime
          );
        }
        //41
        if (
          label_Height === "T" &&
          label_Weight === "M" &&
          label_SleepingTime === "RI"
        ) {
          hanldeLogicDevelopmentIndex(
            "BT",
            label_Height,
            label_Weight,
            label_SleepingTime
          );
        }
        //42
        if (
          label_Height === "T" &&
          label_Weight === "M" &&
          label_SleepingTime === "I"
        ) {
          hanldeLogicDevelopmentIndex(
            "BT",
            label_Height,
            label_Weight,
            label_SleepingTime
          );
        }
        //43
        if (
          label_Height === "T" &&
          label_Weight === "M" &&
          label_SleepingTime === "BT"
        ) {
          hanldeLogicDevelopmentIndex(
            "T",
            label_Height,
            label_Weight,
            label_SleepingTime
          );
        }
        //44
        if (
          label_Height === "T" &&
          label_Weight === "M" &&
          label_SleepingTime === "N"
        ) {
          hanldeLogicDevelopmentIndex(
            "T",
            label_Height,
            label_Weight,
            label_SleepingTime
          );
        }
        //45
        if (
          label_Height === "T" &&
          label_Weight === "M" &&
          label_SleepingTime === "RN"
        ) {
          hanldeLogicDevelopmentIndex(
            "T",
            label_Height,
            label_Weight,
            label_SleepingTime
          );
        }
        //46
        if (
          label_Height === "T" &&
          label_Weight === "RM" &&
          label_SleepingTime === "RI"
        ) {
          hanldeLogicDevelopmentIndex(
            "BT",
            label_Height,
            label_Weight,
            label_SleepingTime
          );
        }
        //47
        if (
          label_Height === "T" &&
          label_Weight === "RM" &&
          label_SleepingTime === "I"
        ) {
          hanldeLogicDevelopmentIndex(
            "BT",
            label_Height,
            label_Weight,
            label_SleepingTime
          );
        }
        //48
        if (
          label_Height === "T" &&
          label_Weight === "RM" &&
          label_SleepingTime === "BT"
        ) {
          hanldeLogicDevelopmentIndex(
            "BT",
            label_Height,
            label_Weight,
            label_SleepingTime
          );
        }
        //49
        if (
          label_Height === "T" &&
          label_Weight === "RM" &&
          label_SleepingTime === "N"
        ) {
          hanldeLogicDevelopmentIndex(
            "K",
            label_Height,
            label_Weight,
            label_SleepingTime
          );
        }
        //50
        if (
          label_Height === "T" &&
          label_Weight === "RM" &&
          label_SleepingTime === "N"
        ) {
          hanldeLogicDevelopmentIndex(
            "K",
            label_Height,
            label_Weight,
            label_SleepingTime
          );
        }
        //51
        if (
          label_Height === "BT" &&
          label_Weight === "RN" &&
          label_SleepingTime === "RI"
        ) {
          hanldeLogicDevelopmentIndex(
            "K",
            label_Height,
            label_Weight,
            label_SleepingTime
          );
        }
        //52
        if (
          label_Height === "BT" &&
          label_Weight === "RN" &&
          label_SleepingTime === "I"
        ) {
          hanldeLogicDevelopmentIndex(
            "BT",
            label_Height,
            label_Weight,
            label_SleepingTime
          );
        }
        //53
         if (
          label_Height === "BT" &&
          label_Weight === "RN" &&
          label_SleepingTime === "BT"
        ) {
          hanldeLogicDevelopmentIndex(
            "BT",
            label_Height,
            label_Weight,
            label_SleepingTime
          );
        }
        //54
        if (
          label_Height === "BT" &&
          label_Weight === "RN" &&
          label_SleepingTime === "N"
        ) {
          hanldeLogicDevelopmentIndex(
            "K",
            label_Height,
            label_Weight,
            label_SleepingTime
          );
        }
         //55
         if (
          label_Height === "BT" &&
          label_Weight === "RN" &&
          label_SleepingTime === "RN"
        ) {
          hanldeLogicDevelopmentIndex(
            "K",
            label_Height,
            label_Weight,
            label_SleepingTime
          );
        }
        //56
        if (
          label_Height === "BT" &&
          label_Weight === "N" &&
          label_SleepingTime === "RI"
        ) {
          hanldeLogicDevelopmentIndex(
            "K",
            label_Height,
            label_Weight,
            label_SleepingTime
          );
        }
        //57
        if (
          label_Height === "BT" &&
          label_Weight === "N" &&
          label_SleepingTime === "I"
        ) {
          hanldeLogicDevelopmentIndex(
            "BT",
            label_Height,
            label_Weight,
            label_SleepingTime
          );
        }
        //58
        if (
          label_Height === "BT" &&
          label_Weight === "N" &&
          label_SleepingTime === "BT"
        ) {
          hanldeLogicDevelopmentIndex(
            "T",
            label_Height,
            label_Weight,
            label_SleepingTime
          );
        }
        //59
        if (
          label_Height === "BT" &&
          label_Weight === "N" &&
          label_SleepingTime === "N"
        ) {
          hanldeLogicDevelopmentIndex(
            "T",
            label_Height,
            label_Weight,
            label_SleepingTime
          );
        }
        //60
        if (
          label_Height === "BT" &&
          label_Weight === "N" &&
          label_SleepingTime === "RN"
        ) {
          hanldeLogicDevelopmentIndex(
            "BT",
            label_Height,
            label_Weight,
            label_SleepingTime
          );
        }
        //61
        if (
          label_Height === "BT" &&
          label_Weight === "BT" &&
          label_SleepingTime === "RI"
        ) {
          hanldeLogicDevelopmentIndex(
            "K",
            label_Height,
            label_Weight,
            label_SleepingTime
          );
        }
        //62
        if (
          label_Height === "BT" &&
          label_Weight === "BT" &&
          label_SleepingTime === "I"
        ) {
          hanldeLogicDevelopmentIndex(
            "BT",
            label_Height,
            label_Weight,
            label_SleepingTime
          );
        }
        //63
        if (
          label_Height === "BT" &&
          label_Weight === "BT" &&
          label_SleepingTime === "BT"
        ) {
          hanldeLogicDevelopmentIndex(
            "T",
            label_Height,
            label_Weight,
            label_SleepingTime
          );
        }
        //64
        if (
          label_Height === "BT" &&
          label_Weight === "BT" &&
          label_SleepingTime === "N"
        ) {
          hanldeLogicDevelopmentIndex(
            "T",
            label_Height,
            label_Weight,
            label_SleepingTime
          );
        }
        //65
        if (
          label_Height === "BT" &&
          label_Weight === "BT" &&
          label_SleepingTime === "RN"
        ) {
          hanldeLogicDevelopmentIndex(
            "BT",
            label_Height,
            label_Weight,
            label_SleepingTime
          );
        }
        //66
        if (
          label_Height === "BT" &&
          label_Weight === "M" &&
          label_SleepingTime === "RI"
        ) {
          hanldeLogicDevelopmentIndex(
            "BT",
            label_Height,
            label_Weight,
            label_SleepingTime
          );
        }
        //67
        if (
          label_Height === "BT" &&
          label_Weight === "M" &&
          label_SleepingTime === "I"
        ) {
          hanldeLogicDevelopmentIndex(
            "BT",
            label_Height,
            label_Weight,
            label_SleepingTime
          );
        }
        //68
        if (
          label_Height === "BT" &&
          label_Weight === "M" &&
          label_SleepingTime === "BT"
        ) {
          hanldeLogicDevelopmentIndex(
            "BT",
            label_Height,
            label_Weight,
            label_SleepingTime
          );
        }
        //69
        if (
          label_Height === "BT" &&
          label_Weight === "M" &&
          label_SleepingTime === "N"
        ) {
          hanldeLogicDevelopmentIndex(
            "T",
            label_Height,
            label_Weight,
            label_SleepingTime
          );
        }
        //70
        if (
          label_Height === "BT" &&
          label_Weight === "M" &&
          label_SleepingTime === "RN"
        ) {
          hanldeLogicDevelopmentIndex(
            "T",
            label_Height,
            label_Weight,
            label_SleepingTime
          );
        }
        //71
        if (
          label_Height === "BT" &&
          label_Weight === "RM" &&
          label_SleepingTime === "RI"
        ) {
          hanldeLogicDevelopmentIndex(
            "BT",
            label_Height,
            label_Weight,
            label_SleepingTime
          );
        }
        //72
        if (
          label_Height === "BT" &&
          label_Weight === "RM" &&
          label_SleepingTime === "I"
        ) {
          hanldeLogicDevelopmentIndex(
            "BT",
            label_Height,
            label_Weight,
            label_SleepingTime
          );
        }
        //73
        if (
          label_Height === "BT" &&
          label_Weight === "RM" &&
          label_SleepingTime === "BT"
        ) {
          hanldeLogicDevelopmentIndex(
            "BT",
            label_Height,
            label_Weight,
            label_SleepingTime
          );
        }
        //74
        if (
          label_Height === "BT" &&
          label_Weight === "RM" &&
          label_SleepingTime === "N"
        ) {
          hanldeLogicDevelopmentIndex(
            "K",
            label_Height,
            label_Weight,
            label_SleepingTime
          );
        }
        //75
        if (
          label_Height === "BT" &&
          label_Weight === "RM" &&
          label_SleepingTime === "RN"
        ) {
          hanldeLogicDevelopmentIndex(
            "K",
            label_Height,
            label_Weight,
            label_SleepingTime
          );
        }
        //76
        if (
          label_Height === "C" &&
          label_Weight === "RN" &&
          label_SleepingTime === "RI"
        ) {
          hanldeLogicDevelopmentIndex(
            "K",
            label_Height,
            label_Weight,
            label_SleepingTime
          );
        }
        //77
        if (
          label_Height === "C" &&
          label_Weight === "RN" &&
          label_SleepingTime === "I"
        ) {
          hanldeLogicDevelopmentIndex(
            "K",
            label_Height,
            label_Weight,
            label_SleepingTime
          );
        }
        //78
        if (
          label_Height === "C" &&
          label_Weight === "RN" &&
          label_SleepingTime === "BT"
        ) {
          hanldeLogicDevelopmentIndex(
            "BT",
            label_Height,
            label_Weight,
            label_SleepingTime
          );
        }
        //79
        if (
          label_Height === "C" &&
          label_Weight === "RN" &&
          label_SleepingTime === "N"
        ) {
          hanldeLogicDevelopmentIndex(
            "BT",
            label_Height,
            label_Weight,
            label_SleepingTime
          );
        }
        //80
        if (
          label_Height === "C" &&
          label_Weight === "RN" &&
          label_SleepingTime === "RN"
        ) {
          hanldeLogicDevelopmentIndex(
            "BT",
            label_Height,
            label_Weight,
            label_SleepingTime
          );
        }
        //81
        if (
          label_Height === "C" &&
          label_Weight === "N" &&
          label_SleepingTime === "RI"
        ) {
          hanldeLogicDevelopmentIndex(
            "K",
            label_Height,
            label_Weight,
            label_SleepingTime
          );
        }
        //82
        if (
          label_Height === "C" &&
          label_Weight === "N" &&
          label_SleepingTime === "I"
        ) {
          hanldeLogicDevelopmentIndex(
            "K",
            label_Height,
            label_Weight,
            label_SleepingTime
          );
        }
        //83
        if (
          label_Height === "C" &&
          label_Weight === "N" &&
          label_SleepingTime === "BT"
        ) {
          hanldeLogicDevelopmentIndex(
            "BT",
            label_Height,
            label_Weight,
            label_SleepingTime
          );
        }
        //84
        if (
          label_Height === "C" &&
          label_Weight === "N" &&
          label_SleepingTime === "N"
        ) {
          hanldeLogicDevelopmentIndex(
            "BT",
            label_Height,
            label_Weight,
            label_SleepingTime
          );
        }
        //85
        if (
          label_Height === "C" &&
          label_Weight === "N" &&
          label_SleepingTime === "RN"
        ) {
          hanldeLogicDevelopmentIndex(
            "BT",
            label_Height,
            label_Weight,
            label_SleepingTime
          );
        }
        //86
        if (
          label_Height === "C" &&
          label_Weight === "BT" &&
          label_SleepingTime === "RI"
        ) {
          hanldeLogicDevelopmentIndex(
            "K",
            label_Height,
            label_Weight,
            label_SleepingTime
          );
        }
        //87
        if (
          label_Height === "C" &&
          label_Weight === "BT" &&
          label_SleepingTime === "I"
        ) {
          hanldeLogicDevelopmentIndex(
            "BT",
            label_Height,
            label_Weight,
            label_SleepingTime
          );
        }
        //88
        if (
          label_Height === "C" &&
          label_Weight === "BT" &&
          label_SleepingTime === "BT"
        ) {
          hanldeLogicDevelopmentIndex(
            "BT",
            label_Height,
            label_Weight,
            label_SleepingTime
          );
        }
        //89
        if (
          label_Height === "C" &&
          label_Weight === "BT" &&
          label_SleepingTime === "N"
        ) {
          hanldeLogicDevelopmentIndex(
            "BT",
            label_Height,
            label_Weight,
            label_SleepingTime
          );
        }
        //90
        if (
          label_Height === "C" &&
          label_Weight === "BT" &&
          label_SleepingTime === "RN"
        ) {
          hanldeLogicDevelopmentIndex(
            "BT",
            label_Height,
            label_Weight,
            label_SleepingTime
          );
        }
        //91
        if (
          label_Height === "C" &&
          label_Weight === "M" &&
          label_SleepingTime === "RI"
        ) {
          hanldeLogicDevelopmentIndex(
            "BT",
            label_Height,
            label_Weight,
            label_SleepingTime
          );
        }
        //92
        if (
          label_Height === "C" &&
          label_Weight === "M" &&
          label_SleepingTime === "I"
        ) {
          hanldeLogicDevelopmentIndex(
            "BT",
            label_Height,
            label_Weight,
            label_SleepingTime
          );
        }
        //93
        if (
          label_Height === "C" &&
          label_Weight === "M" &&
          label_SleepingTime === "BT"
        ) {
          hanldeLogicDevelopmentIndex(
            "BT",
            label_Height,
            label_Weight,
            label_SleepingTime
          );
        }
        //94
        if (
          label_Height === "C" &&
          label_Weight === "M" &&
          label_SleepingTime === "N"
        ) {
          hanldeLogicDevelopmentIndex(
            "T",
            label_Height,
            label_Weight,
            label_SleepingTime
          );
        }
        //95
        if (
          label_Height === "C" &&
          label_Weight === "M" &&
          label_SleepingTime === "RN"
        ) {
          hanldeLogicDevelopmentIndex(
            "T",
            label_Height,
            label_Weight,
            label_SleepingTime
          );
        }
        //96
        if (
          label_Height === "C" &&
          label_Weight === "RM" &&
          label_SleepingTime === "RI"
        ) {
          hanldeLogicDevelopmentIndex(
            "K",
            label_Height,
            label_Weight,
            label_SleepingTime
          );
        }
        //97
        if (
          label_Height === "C" &&
          label_Weight === "RM" &&
          label_SleepingTime === "I"
        ) {
          hanldeLogicDevelopmentIndex(
            "BT",
            label_Height,
            label_Weight,
            label_SleepingTime
          );
        }
        //98
        if (
          label_Height === "C" &&
          label_Weight === "RM" &&
          label_SleepingTime === "BT"
        ) {
          hanldeLogicDevelopmentIndex(
            "BT",
            label_Height,
            label_Weight,
            label_SleepingTime
          );
        }
        //99
        if (
          label_Height === "C" &&
          label_Weight === "RM" &&
          label_SleepingTime === "N"
        ) {
          hanldeLogicDevelopmentIndex(
            "T",
            label_Height,
            label_Weight,
            label_SleepingTime
          );
        }
        //100
        if (
          label_Height === "C" &&
          label_Weight === "RM" &&
          label_SleepingTime === "RN"
        ) {
          hanldeLogicDevelopmentIndex(
            "T",
            label_Height,
            label_Weight,
            label_SleepingTime
          );
        }
        //101
        if (
          label_Height === "RC" &&
          label_Weight === "RN" &&
          label_SleepingTime === "RI"
        ) {
          hanldeLogicDevelopmentIndex(
            "K",
            label_Height,
            label_Weight,
            label_SleepingTime
          );
        }
        //102
        if (
          label_Height === "RC" &&
          label_Weight === "RN" &&
          label_SleepingTime === "I"
        ) {
          hanldeLogicDevelopmentIndex(
            "K",
            label_Height,
            label_Weight,
            label_SleepingTime
          );
        }
        //103
        if (
          label_Height === "RC" &&
          label_Weight === "RN" &&
          label_SleepingTime === "BT"
        ) {
          hanldeLogicDevelopmentIndex(
            "BT",
            label_Height,
            label_Weight,
            label_SleepingTime
          );
        }
        //104
        if (
          label_Height === "RC" &&
          label_Weight === "RN" &&
          label_SleepingTime === "N"
        ) {
          hanldeLogicDevelopmentIndex(
            "BT",
            label_Height,
            label_Weight,
            label_SleepingTime
          );
        }
        //105
        if (
          label_Height === "RC" &&
          label_Weight === "RN" &&
          label_SleepingTime === "RN"
        ) {
          hanldeLogicDevelopmentIndex(
            "BT",
            label_Height,
            label_Weight,
            label_SleepingTime
          );
        }
        //106
        if (
          label_Height === "RC" &&
          label_Weight === "N" &&
          label_SleepingTime === "RI"
        ) {
          hanldeLogicDevelopmentIndex(
            "K",
            label_Height,
            label_Weight,
            label_SleepingTime
          );
        }
        //107
        if (
          label_Height === "RC" &&
          label_Weight === "N" &&
          label_SleepingTime === "I"
        ) {
          hanldeLogicDevelopmentIndex(
            "K",
            label_Height,
            label_Weight,
            label_SleepingTime
          );
        }
        //108
        if (
          label_Height === "RC" &&
          label_Weight === "N" &&
          label_SleepingTime === "BT"
        ) {
          hanldeLogicDevelopmentIndex(
            "BT",
            label_Height,
            label_Weight,
            label_SleepingTime
          );
        }
        //109
        if (
          label_Height === "RC" &&
          label_Weight === "N" &&
          label_SleepingTime === "N"
        ) {
          hanldeLogicDevelopmentIndex(
            "BT",
            label_Height,
            label_Weight,
            label_SleepingTime
          );
        }
        //110
        if (
          label_Height === "RC" &&
          label_Weight === "N" &&
          label_SleepingTime === "RN"
        ) {
          hanldeLogicDevelopmentIndex(
            "BT",
            label_Height,
            label_Weight,
            label_SleepingTime
          );
        }
        //111
        if (
          label_Height === "RC" &&
          label_Weight === "BT" &&
          label_SleepingTime === "RI"
        ) {
          hanldeLogicDevelopmentIndex(
            "K",
            label_Height,
            label_Weight,
            label_SleepingTime
          );
        }
        //112
        if (
          label_Height === "RC" &&
          label_Weight === "BT" &&
          label_SleepingTime === "I"
        ) {
          hanldeLogicDevelopmentIndex(
            "BT",
            label_Height,
            label_Weight,
            label_SleepingTime
          );
        }
        //113
        if (
          label_Height === "RC" &&
          label_Weight === "BT" &&
          label_SleepingTime === "BT"
        ) {
          hanldeLogicDevelopmentIndex(
            "BT",
            label_Height,
            label_Weight,
            label_SleepingTime
          );
        }
        //114
        if (
          label_Height === "RC" &&
          label_Weight === "BT" &&
          label_SleepingTime === "N"
        ) {
          hanldeLogicDevelopmentIndex(
            "T",
            label_Height,
            label_Weight,
            label_SleepingTime
          );
        }
        //115
        if (
          label_Height === "RC" &&
          label_Weight === "BT" &&
          label_SleepingTime === "RN"
        ) {
          hanldeLogicDevelopmentIndex(
            "BT",
            label_Height,
            label_Weight,
            label_SleepingTime
          );
        }
        //116
        if (
          label_Height === "RC" &&
          label_Weight === "M" &&
          label_SleepingTime === "RI"
        ) {
          hanldeLogicDevelopmentIndex(
            "K",
            label_Height,
            label_Weight,
            label_SleepingTime
          );
        }
        //117
        if (
          label_Height === "RC" &&
          label_Weight === "M" &&
          label_SleepingTime === "I"
        ) {
          hanldeLogicDevelopmentIndex(
            "BT",
            label_Height,
            label_Weight,
            label_SleepingTime
          );
        }
        //118
        if (
          label_Height === "RC" &&
          label_Weight === "M" &&
          label_SleepingTime === "BT"
        ) {
          hanldeLogicDevelopmentIndex(
            "T",
            label_Height,
            label_Weight,
            label_SleepingTime
          );
        }
        //119
        if (
          label_Height === "RC" &&
          label_Weight === "M" &&
          label_SleepingTime === "N"
        ) {
          hanldeLogicDevelopmentIndex(
            "T",
            label_Height,
            label_Weight,
            label_SleepingTime
          );
        }
        //120
        if (
          label_Height === "RC" &&
          label_Weight === "M" &&
          label_SleepingTime === "RN"
        ) {
          hanldeLogicDevelopmentIndex(
            "BT",
            label_Height,
            label_Weight,
            label_SleepingTime
          );
        }
        //121
        if (
          label_Height === "RC" &&
          label_Weight === "RM" &&
          label_SleepingTime === "RI"
        ) {
          hanldeLogicDevelopmentIndex(
            "K",
            label_Height,
            label_Weight,
            label_SleepingTime
          );
        }
        //122
        if (
          label_Height === "RC" &&
          label_Weight === "RM" &&
          label_SleepingTime === "I"
        ) {
          hanldeLogicDevelopmentIndex(
            "BT",
            label_Height,
            label_Weight,
            label_SleepingTime
          );
        }
        //123
        if (
          label_Height === "RC" &&
          label_Weight === "RM" &&
          label_SleepingTime === "BT"
        ) {
          hanldeLogicDevelopmentIndex(
            "T",
            label_Height,
            label_Weight,
            label_SleepingTime
          );
        }
        //124
        if (
          label_Height === "RC" &&
          label_Weight === "RM" &&
          label_SleepingTime === "N"
        ) {
          hanldeLogicDevelopmentIndex(
            "T",
            label_Height,
            label_Weight,
            label_SleepingTime
          );
        }
        //125
        if (
          label_Height === "RC" &&
          label_Weight === "RM" &&
          label_SleepingTime === "RN"
        ) {
          hanldeLogicDevelopmentIndex(
            "BT",
            label_Height,
            label_Weight,
            label_SleepingTime
          );
        }
      });
    });
  });
  // K, BT, T
  resultFinalDevelopmentIndex = resultFinalDevelopmentIndex.map((item) => {
    if (item.resultK === 2) {
      return { ...item, resultK: 0 };
    }
    if (item.resultBT === 2) {
      return { ...item, resultBT: 0 };
    }
    if (item.resultT === 2) {
      return { ...item, resultT: 0 };
    }
    return item;
  });
  return resultFinalDevelopmentIndex;
};
export default HWS;
