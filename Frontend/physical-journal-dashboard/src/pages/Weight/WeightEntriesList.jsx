import logo from "../../logo.svg";
import "../../App.css";
import axios_instance from "../../helpers/apiconfig";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ExclamationCircleFilled } from "@ant-design/icons";
import { message } from "antd";
import { Modal, Button } from "antd";
import Paginator from "../../components/Paginator/Paginator";
import WeightEntry from "./WeightEntry";

const { confirm } = Modal;

const Dashboard = () => {
  const [entries, setEntries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(5);
  const [totalEntries, setTotalEntries] = useState(0);

  useEffect(() => {
    getEntries();
  }, []);

  const showDeleteModal = (id) => {
    confirm({
      title: "Are you sure delete this item?",
      icon: <ExclamationCircleFilled />,
      content: "Deleting this entry will remove it permanently.",
      okText: "Yes",
      okType: "danger",
      cancelText: "No",
      async onOk() {
        deleteEntry(id);
      },
      onCancel() {
        console.log("Cancel");
      },
    });
  };

  const deleteEntry = async (idToDelete) => {
    await axios_instance
      .delete(`/weight/${idToDelete}`)
      .then((res) => {
        if (res.status !== 204) {
          throw new Error("Failed to delete item");
        }
        message.success("Entry deleted successfully");
        getEntries();
      })
      .catch((err) => {
        console.error(err);
        message.error("Failed to delete entry");
      });
  };

  async function loadPosts(direction) {
    let newPage;
    if (direction) {
    }
    if (direction === "next") {
      newPage = page + 1;
      setPage(newPage);
    }
    if (direction === "previous") {
      newPage = page - 1;
      setPage(newPage);
    }
    await getEntries();
  }

  async function getEntries() {
    setLoading(true);
    try {
      await axios_instance
        .get(`/weight?page=${page}&limit=${limit}`)
        .then((res) => {
          if (res.status !== 200) {
            throw new Error("Failed to fetch items");
          }
          setEntries(res.data.entries);
          setTotalEntries(res.data.totalItems);
          setLoading(false);
        })
        .catch((err) => console.error(err));
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }

  return (
    <>
      {loading && (
        <div className="App">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
      )}
      <div>
        <div style={{ width: "20%" }}>
          <Link to="/add-weight">Add Weight Measurement</Link>
        </div>
        <div style={{ width: "20%" }}>
          <Link to="/">Dashboard</Link>
        </div>
      </div>

      <div style={{ marginTop: "5%" }}>
        <div style={{ width: "40%", marginLeft: "20%" }}>
          <Paginator
            onPrevious={() => loadPosts("previous")}
            onNext={() => loadPosts("next")}
            lastPage={Math.ceil(totalEntries / limit)}
            currentPage={page}
          >
            {entries.map((entry, index) => (
              <WeightEntry
                key={index}
                id={entry._id}
                weight={entry.weight}
                date={entry.date}
                onShowDeleteModal={showDeleteModal}
                style={{ display: "inline-block", padding: "5px" }}
              />
            ))}
          </Paginator>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
