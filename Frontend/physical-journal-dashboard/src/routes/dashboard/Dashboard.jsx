import logo from "../../logo.svg";
import "../../App.css";
import axios_instance from "../../helpers/apiconfig";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import React from "react";
import { Outlet } from "react-router-dom";
import {
  LaptopOutlined,
  NotificationOutlined,
  UserAddOutlined,
} from "@ant-design/icons";
import { Breadcrumb, Layout, Menu, theme, Button } from "antd";
import Title from "antd/es/skeleton/Title";

const { Header, Content, Sider } = Layout;

// const options = [UserAddOutlined, LaptopOutlined, NotificationOutlined].map(
//   (icon, index) => {
//     return {
//       icon: React.createElement(icon),
//       label: "",
//       children: [
//         { label: <a href="/weight-entries">Weight</a> },
//         { label: "puto" },
//         { label: "jotito" },
//         { label: "meco" },
//       ],
//     };
//   }
// );

const options = [
  {
    icon: React.createElement(UserAddOutlined),
    label: "Weight",
    children: [
      { label: <a href="/weight-entries">Weight</a> },
      { label: <a href="/add-weight">Add</a> },
      { label: <Link to="/weight">Get Entry</Link> },
    ],
  },
  {},
  {},
];

const Dashboard = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const [loading, setLoading] = useState(true);

  return (
    <div>
      <main>
        <Layout>
          <Header style={{ display: "flex", alignItems: "center" }}>
            <div className="demo-logo" />
            {/* <Menu
              onClick={onClick}
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={["2"]}
              items={items1}
              style={{ flex: 1, minWidth: 0 }}
            /> */}
            <h4 style={{ color: "white" }}>PJ</h4>
          </Header>
          <Layout>
            <Sider width={200} style={{ background: colorBgContainer }}>
              <Menu
                mode="inline"
                defaultSelectedKeys={["1"]}
                defaultOpenKeys={["sub1"]}
                style={{ height: "100%", borderRight: 0 }}
                items={options}
              />
            </Sider>
            <Layout style={{ padding: "0 24px 24px" }}>
              <Content
                style={{
                  padding: 24,
                  margin: 0,
                  minHeight: 280,
                  background: colorBgContainer,
                  borderRadius: borderRadiusLG,
                }}
              >
                <Outlet />
              </Content>
            </Layout>
          </Layout>
        </Layout>
      </main>
    </div>
  );
};

// const Dashboard = () => {
//   const [loading, setLoading] = useState(true);

//   return (
//     <>
//       {loading ? (
//         <div className="App">
//           <img src={logo} className="App-logo" alt="logo" />
//         </div>
//       ) : null}
//       <div style={{ width: "80%" }}></div>
//       <div style={{ width: "20%", float: "right" }}>
//         <ul>
//           <li>
//             <Link to="/weight-entries">Manage Entries</Link>
//           </li>
//           <li>
//             <Link to="/add-weight">Add Entry</Link>
//           </li>
//           <li>
//             <Link to="/weight">Get Entry</Link>
//           </li>
//         </ul>

//         <ul>
//           <li>
//             <Link to="/calories">Calories Entries</Link>
//           </li>
//           <li>
//             <Link to="/add-calories-entry">Add Calories Entry</Link>
//           </li>
//           <li>
//             <Link to="/calories-date">Get Calories Entry by date</Link>
//           </li>
//         </ul>

//         <ul>
//           <li>
//             <Link to="/recipes">Manage Recipes</Link>
//           </li>
//           <li>
//             <Link to="/add-recipe">Add Recipe</Link>
//           </li>
//           <li>
//             <Link to="/weight">Get Entry</Link>
//           </li>
//         </ul>
//       </div>
//     </>
//   );
// };

export default Dashboard;
