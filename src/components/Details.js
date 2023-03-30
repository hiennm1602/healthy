import React, { useEffect, useState, useRef } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import chieucao1 from "../image/Chieucao/chieucao1.png";
import chieucao2 from "../image/Chieucao/chieucao2.png";
import chieucao3 from "../image/Chieucao/chieucao3.png";
import chieucao4 from "../image/Chieucao/chieucao4.png";
import chieucao5 from "../image/Chieucao/chieucao5.png";
import cannang1 from "../image/Cannang/cannang1.png";
import cannang2 from "../image/Cannang/cannang2.png";
import cannang3 from "../image/Cannang/cannang3.png";
import cannang4 from "../image/Cannang/cannang4.png";
import cannang5 from "../image/Cannang/cannang5.png";
import thoigianngu1 from "../image/Thoigianngu/thoigianngu1.png";
import thoigianngu2 from "../image/Thoigianngu/thoigianngu2.png";
import thoigianngu3 from "../image/Thoigianngu/thoigianngu3.png";
import thoigianngu4 from "../image/Thoigianngu/thoigianngu4.png";
import thoigianngu5 from "../image/Thoigianngu/thoigianngu1.png";
import DI1 from "../image/DI/DI1.png";
import DI2 from "../image/DI/DI2.png";
import DI3 from "../image/DI/DI3.png";
import DIR1 from "../image/DIrule/DI1.png";
import DIR2 from "../image/DIrule/DI2.png";
import DIR3 from "../image/DIrule/DI3.png";
import DIR4 from "../image/DIrule/DI4.png";
import DIR5 from "../image/DIrule/DI5.png";

import { Button, Modal } from "antd-mobile";
import { Scatter } from "react-chartjs-2";
import { useMainContext } from "../common/context";
import {
  dataHeight,
  dataWeight,
  dataSleepingTime,
  dataDI,
  dataDI2,
} from "../const";

import HWS from "./Development-index-rule";
import {
  handleGraphDI,
  handleLogicHeight,
  handleLogicWeight,
  handleLogicSleepingTime,
  handleLogicDI,
  showDetail,
  showDetailHeight,
  showDetailWeight,
  showDetailSleepingTime
} from "../utils/index";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
const options = {
  responsive: true,
  tooltips: true,
  plugins: {
    legend: {
      position: "top",
    },
    zoom: {
      zoom: {
        wheel: {
          enable: true,
        },
      },
    },
  },
  //   // title: {
  //   //   display: true,
  //   //   text: "Chiều cao",
  //   // },
  // },
  scales: {
    xAxes: [
      {
        ticks: {
          min: 140,
          max: 200,
        },
        gridLines: {
          color: "#888",
          drawOnChartArea: false,
        },
      },
    ],
    yAxes: [
      {
        ticks: {
          min: 0,
          max: 1,
        },
        gridLines: {
          color: "#888",
          drawOnChartArea: false,
        },
      },
    ],
  },
};
const style = {
  borderColor: "black",
  borderWidth: 2,
  backgroundColor: "black",
  pointBackgroundColor: "black",
  pointBorderColor: "black",
  pointRadius: 3,
  pointHoverRadius: 5,
  showLine: true,
};
const style2 = {
  borderColor: "black",
  borderWidth: 3.5,
  backgroundColor: "black",
  pointBackgroundColor: "black",
  pointBorderColor: "black",
  pointRadius: 3.5,
  pointHoverRadius: 4,
  showLine: true,
};
const Details = () => {
  // Đưa dữ liệu chiều cao, cân nặng, thời gian ngủ lên đồ thị
  const { height, weight, sleepingTime, submit, setKQ } =
    useMainContext();
  const [stateResultSleepingTime, setStateResultSleepingTime] = useState([]);
  
  const [stateResultHeight, setStateResultHeight] = useState([]);
  const [stateResultWeight, setStateResultWeight] = useState([]);

  const [dataFinalHeight, setDataFinalHeight] = useState(dataHeight);
  const [dataFinalWeight, setDataFinalWeight] = useState(dataWeight);
  const [dataFinalSleepingTime, setDataFinalSleepingTime] = useState(dataSleepingTime);

  const [stateDataHeightUpdate, setStateDataHeightUpdate] = useState(null);
  const [stateDataWeightUpdate, setStateDataWeightUpdate] = useState(null);
  const [stateDataSleepingTimeUpdate, setStateDataSleepingTimeUpdate] =
    useState(null);
  useEffect(() => {
    if (weight && height && sleepingTime  && submit) {
      setStateResultSleepingTime(handleLogicSleepingTime(sleepingTime));
      setStateResultHeight(handleLogicHeight(height));
      setStateResultWeight(handleLogicWeight(weight));

      setDataFinalHeight(dataHeight);
      setDataFinalWeight(dataWeight);
      setDataFinalSleepingTime(dataSleepingTime);

      setStateDataHeightUpdate(null);
      setStateDataWeightUpdate(null);
      setStateDataSleepingTimeUpdate(null);
    }
    if (!weight || !height || !sleepingTime ) {
      setStateResultSleepingTime([]);
      setStateResultHeight([]);
      setStateResultWeight([]);
      setStateDataHeightUpdate(null);
      setStateDataWeightUpdate(null);
      setStateDataSleepingTimeUpdate(null);
      setDataFinalHeight(dataHeight);
      setDataFinalWeight(dataWeight);
      setDataFinalSleepingTime(dataSleepingTime);

      setStateDataDIUpdate(null);
      setDataFinalDI(dataDI);

      setStateDataDIUpdate2(null);
      setDataFinalDI2(dataDI2);
      setNewDIPoint([]);
      setKPoint([]);
      setBTPoint([]);
      setTPoint([]);

      setDevelopmentIndex([
        { resultK: 2, label: "K" },
        { resultBT: 2, label: "BT" },
        { resultT: 2, label: "T" },
      ]);
      setMaxYDi(-10000);
      setMinXDi(10000);
  
    }
  }, [weight, height, sleepingTime, submit]);

  useEffect(() => {
    let dataHeightUpdate = [];
    stateResultHeight.map((item) => {
      dataHeightUpdate.push({
        data: [
          { x: 40, y: item.result },
          { x: height, y: item.result },
          { x: height, y: 0 },
        ],
        ...style,
      });
    });
    setStateDataHeightUpdate(dataHeightUpdate);

    let dataWeightUpdate = [];
    stateResultWeight.map((item) => {
      dataWeightUpdate.push({
        data: [
          { x: 0, y: item.result },
          { x: weight, y: item.result },
          { x: weight, y: 0 },
        ],
        ...style,
      });
    });
    setStateDataWeightUpdate(dataWeightUpdate);

    let dataSleepingTimeUpdate = [];
    stateResultSleepingTime.map((item) => {
      dataSleepingTimeUpdate.push({
        data: [
          { x: 6, y: item.result },
          { x: sleepingTime, y: item.result },
          { x: sleepingTime, y: 0 },
        ],
        ...style,
      });
    });
    setStateDataSleepingTimeUpdate(dataSleepingTimeUpdate);

  }, [
    stateResultWeight,
    stateResultHeight,
    stateResultSleepingTime,
  ]);

  useEffect(() => {
    if (stateDataHeightUpdate) {
      setDataFinalHeight({
        ...dataFinalHeight,
        datasets: [...dataFinalHeight.datasets, ...stateDataHeightUpdate],
      });
    }
    if (stateDataWeightUpdate) {
      setDataFinalWeight({
        ...dataFinalWeight,
        datasets: [...dataFinalWeight.datasets, ...stateDataWeightUpdate],
      });
    }
    if (stateDataSleepingTimeUpdate) {
      setDataFinalSleepingTime({
        ...dataFinalSleepingTime,
        datasets: [...dataFinalSleepingTime.datasets, ...stateDataSleepingTimeUpdate],
      });
    }
  }, [
    stateDataHeightUpdate,
    stateDataWeightUpdate,
    stateDataSleepingTimeUpdate,
  ]);
  //---------------------------------------------------------
  // Sử dụng hệ mờ với 3 chỉ số chiều cao, cân nặng, thời gian ngủ để tính chỉ số DI và in kết quả lên đồ thị
  const [developmentIndex, setDevelopmentIndex] = useState([
    { resultK: 2, label: "K" },
    { resultBT: 2, label: "BT" },
    { resultT: 2, label: "T" },
  ]);
  useEffect(() => {
    setDevelopmentIndex(
      HWS(
        stateResultHeight,
        stateResultWeight,
        stateResultSleepingTime,
      )
    );
  }, [stateResultHeight, stateResultSleepingTime, stateResultWeight]);
  const [newDIPoint, setNewDIPoint] = useState([]);
  const [KPoint, setKPoint] = useState([]);
  const [BTPoint, setBTPoint] = useState([]);
  const [TPoint, setTPoint] = useState([]);

  const [stateDataDIUpdate, setStateDataDIUpdate] = useState(null);
  const [stateDataDIUpdate2, setStateDataDIUpdate2] = useState(null);
  const [dataFinalDI, setDataFinalDI] = useState(dataDI);
  const [dataFinalDI2, setDataFinalDI2] = useState(dataDI2);
  const [resultDI, setResultDI] = useState([]);
  useEffect(() => {
    console.log("developmentIndex", developmentIndex);
    const tmp1 = handleGraphDI(developmentIndex[0].resultK, developmentIndex[0].label);
    const tmp2 = handleGraphDI(developmentIndex[1].resultBT, developmentIndex[1].label);
    const tmp3 = handleGraphDI(developmentIndex[2].resultT, developmentIndex[2].label);

    if (tmp1 !== [] && tmp1 !== undefined) {
      setKPoint((pre) => {
        if (pre !== tmp1) {
          return tmp1;
        } else if (pre === tmp1) {
          return pre;
        }
      });
    }
    if (tmp2 !== [] && tmp2 !== undefined) {
      setBTPoint((pre) => {
        if (pre !== tmp2) {
          return tmp2;
        } else if (pre === tmp2) {
          return pre;
        }
      });
    }
    if (tmp3 !== [] && tmp3 !== undefined) {
      setTPoint((pre) => {
        if (pre !== tmp3) {
          return tmp3;
        } else if (pre === tmp3) {
          return pre;
        }
      });
    }
  }, [developmentIndex]);
  useEffect(() => {
    if (
      KPoint !== undefined &&
      BTPoint !== undefined &&
      TPoint !== undefined 
    ) {
      setNewDIPoint([...KPoint, ...BTPoint, ...TPoint]);
    }
  }, [KPoint, BTPoint, TPoint]);

  const [minXDi, setMinXDi] = useState(10000);
  const [maxYDi, setMaxYDi] = useState(-10000);
  useEffect(() => {
    newDIPoint.forEach((item) => {
      if (item.y > 0) {
        if (item.y > maxYDi) {
          setMaxYDi(item.y);
        }
      }
    });
  }, [maxYDi, newDIPoint]);
  useEffect(() => {
    newDIPoint.forEach((item) => {
      if (item.y === maxYDi) {
        if (item.x < minXDi) {
          setMinXDi(item.x);
        }
      }
    });
  }, [maxYDi, minXDi, newDIPoint]);
  useEffect(() => {
    let dataDIUpdate = [];
    dataDIUpdate.push({
      data: [...newDIPoint],
      ...style2,
    });
    setStateDataDIUpdate(dataDIUpdate);
    setResultDI(handleLogicDI(minXDi));
    console.log("minXDi", minXDi);
  }, [minXDi, newDIPoint]);

  useEffect(() => {
    if (stateDataDIUpdate) {
      setDataFinalDI(() => {
        return {
          ...dataFinalDI,
          datasets: [...dataFinalDI.datasets, ...stateDataDIUpdate],
        };
      });
    }
  }, [stateDataDIUpdate]);
  useEffect(() => {
    let dataDIUpdate = [];

    console.log("resultDI", resultDI);
    resultDI.forEach((item, index) => {
      // if(index===0 || index ===1){
      dataDIUpdate.push({
        data: [
          { x: 0, y: item.result },
          { x: minXDi, y: item.result },
          { x: minXDi, y: 0 },
        ],
        ...style,
      });
      // }
    });
    setStateDataDIUpdate2(dataDIUpdate);
  }, [resultDI]);
  useEffect(() => {
    console.log("stateDataDIUpdate2", stateDataDIUpdate2);
    if (stateDataDIUpdate2) {
      setDataFinalDI2({
        ...dataDI,
        datasets: [...dataDI.datasets, ...stateDataDIUpdate2],
      });
    }
  }, [stateDataDIUpdate2]);
  setKQ(minXDi);
  let detail = showDetail(minXDi);

  let detailWeight = showDetailWeight(stateResultWeight);
  let detailHeight = showDetailHeight(stateResultHeight);
  //console.log("detailWeight", detailWeight);
  let detailSleepingTime = showDetailSleepingTime(stateResultSleepingTime);
  // console.log("detailHeartBeat", detailHeartBeat);
  //----------------------------------------------------------

  return (
    <>
      <div className="w-full">
        <div className="max-w-xl m-auto">
          <p class="font-semibold">Chiều cao</p>
          <Scatter options={options} data={dataFinalHeight}></Scatter>
          <p>f = [RT, T, BT, C, RC]</p>
          <p>
            {detailHeight !== [] &&
              detailHeight.map((item) => `${item.result}, `)}
          </p>
          <p>
            <i>Chú thích:</i> RT: Rất thấp, T: Thấp, BT: Bình thường, C: Cao, RC:
            Rất cao
          </p>
          <Button
            block
            onClick={() =>
              Modal.alert({
                content: (
                  <div>
                    <p>Rất thấp</p>
                    <img src={chieucao1}></img>
                    <p>Thấp</p>
                    <img src={chieucao2}></img>
                    <p>Bình thường</p>
                    <img src={chieucao3}></img>
                    <p>Cao</p>
                    <img src={chieucao4}></img>
                    <p>Rất cao</p>
                    <img src={chieucao5}></img>
                  </div>
                ),
                onConfirm: () => {},
                confirmText: "OK",
              })
            }
          >
            Hàm thành viên
          </Button>
        </div>
        
      </div>
      <div className="w-full">
        <div className="max-w-xl m-auto">
            <p class="font-semibold">Cân nặng</p>
            <Scatter options={options} data={dataFinalWeight}></Scatter>
            <p>f = [RN, N, BT, M, RM]</p>
            <p>
              {detailWeight !== [] &&
                detailWeight.map((item) => `${item.result}, `)}
            </p>
            <p>
              <i>Chú thích:</i> RN: Nhẹ, N: Nhẹ, BT: Bình thường, M: Mập, RM:
              Rất mập
            </p>
            <Button
              block
              onClick={() =>
                Modal.alert({
                  content: (
                    <div>
                      <p>Rất nhẹ</p>
                      <img src={cannang1}></img>
                      <p>Nhẹ</p>
                      <img src={cannang2}></img>
                      <p>Bình thường</p>
                      <img src={cannang3}></img>
                      <p>Mập</p>
                      <img src={cannang4}></img>
                      <p>Rất mập</p>
                      <img src={cannang5}></img>
                    </div>
                  ),
                  onConfirm: () => {},
                  confirmText: "OK",
                })
              }
            >
              Hàm thành viên
            </Button>
          </div>
      </div>
      <div className="w-full">
        <div className="max-w-xl m-auto">
          <p class="font-semibold">Thời gian ngủ</p>
          <Scatter options={options} data={dataFinalSleepingTime}></Scatter>
          <p>f = [RI, I, BT, N, RN]</p>
          <p>
            {detailSleepingTime !== [] &&
              detailSleepingTime.map((item) => `${item.result}, `)}
          </p>
          <p>
            <i>Chú thích:</i> RI: Rất ít, I: Ít, BT: Bình thường, N: Nhiều, RN: Rất nhiều
          </p>
          <Button
            block
            onClick={() =>
              Modal.alert({
                content: (
                  //thay cho nay
                  <div>
                    <p>Rất Ít</p>
                    <img src={thoigianngu1}></img>
                    <p>Ít</p>
                    <img src={thoigianngu2}></img>
                    <br></br>
                    <p>Bình thường</p>
                    <img src={thoigianngu3}></img>
                    <br></br>
                    <p>Nhiều</p>
                    <img src={thoigianngu4}></img>
                    <p>Rất nhiều</p>
                    <img src={thoigianngu5}></img>
                  </div>
                ),
                onConfirm: () => {},
                confirmText: "OK",
              })
            }
          >
            Hàm thành viên
          </Button>
        </div>
      </div>
      <div className=" w-full">
        <div className="max-w-xl m-auto">
          <p>
            Hệ mờ với 3 chỉ số Chiều cao, cân nặng, thời gian ngủ
          </p>
          <Scatter options={options} data={dataFinalDI}></Scatter>
          <Button
            block
            onClick={() =>
              Modal.alert({
                content: (
                  <div>
                    <img src={DI1}></img>
                    <br></br>
                    <img src={DI2}></img>
                    <br></br>
                    <img src={DI3}></img>
                  </div>
                ),
                onConfirm: () => {},
                confirmText: "OK",
              })
            }
          >
            Hàm thành viên
          </Button>
        </div>
      </div>
      <div className=" w-full">
        <div className="max-w-xl m-auto">
          <br></br>
          <p class="font-bold text-2xl">Chỉ số phát triển</p>
          <Scatter options={options} data={dataFinalDI2}></Scatter>
          <Button
            block
            onClick={() =>
              Modal.alert({
                content: (
                  <div>
                    <p>Luật</p>
                    <img src={DIR1}></img>
                    <img src={DIR2}></img>
                    <img src={DIR3}></img>
                    <img src={DIR4}></img>
                    <img src={DIR5}></img>
                  </div>
                ),
                onConfirm: () => {},
                confirmText: "OK",
              })
            }
          >
            Luật
          </Button>
        </div>
      </div>
      <div className=" w-full">
        <div className="max-w-xl m-auto">
          <p>Chỉ số sức khỏe: {minXDi !== 10000 && minXDi}</p>
          <p>f = [K, BT, T]</p>
          <p>
            [{" "}
            {detail !== [] &&
              detail.reduce((a, b, index) => {
                if (index === 0) {
                  return b.result;
                }
                return `${a},${b.result}`;
              }, "")}
            ]
          </p>
          <p>
            <i>Chú thích:</i> K: Kém, BT: Bình thường, T: Tốt
          </p>
        </div>
      </div>
    </>
  );
};
export default Details;
