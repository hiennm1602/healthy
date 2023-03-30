import "./App.css";
import "antd/dist/antd.css";
import { PageHeader } from "antd";

import Main from "./views";

function App() {
  return (
    <div className="App ">
      <PageHeader style={{fontSize:'30px'}}>Hệ thống đánh giá chỉ số phát triển của trẻ em dưới 12 tuổi</PageHeader>
      <Main />
    </div>
  );
}

export default App;
