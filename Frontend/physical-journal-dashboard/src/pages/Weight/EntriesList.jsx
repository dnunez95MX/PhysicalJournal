import logo from "../../logo.svg";
import "../../App.css";
import axios_instance from "../../helpers/apiconfig";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { DeleteOutlined, ExclamationCircleFilled } from "@ant-design/icons";
import { Button, message } from "antd";
import { Modal } from "antd";
import Paginator from "../../components/Paginator/Paginator";

const { confirm } = Modal;

const Dashboard = () => {
  const [entries, setEntries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedEntry, setSelectedEntry] = useState(null);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(5);
  const [totalEntries, setTotalEntries] = useState(0);

  useEffect(() => {
    getEntries();
  }, []);

  const showDeleteModal = () => {
    console.log(selectedEntry);
    confirm({
      title: "Are you sure delete this item?",
      icon: <ExclamationCircleFilled />,
      content: "Deleting this entry will remove it permanently.",
      okText: "Yes",
      okType: "danger",
      cancelText: "No",
      async onOk() {
        deleteEntry();
      },
      onCancel() {
        console.log("Cancel");
      },
    });
  };

  const deleteEntry = async () => {
    console.log(selectedEntry);
    await axios_instance
      .delete(`/weight/${selectedEntry.id}`)
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
      // newPage = page + 1;
      // setPage(newPage);
    }
    if (direction === "previous") {
      // newPage = page - 1;
      // setPage(newPage);
    }
    // await getEntries();
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
      {loading ? (
        <div className="App">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
      ) : null}
      <div style={{ width: "20%", float: "right" }}>
        <Link to="/add-weight">Add Weight Measurement</Link>
      </div>
      <div style={{ width: "20%", float: "right" }}>
        <Link to="/">Dashboard</Link>
      </div>

      <Paginator
        onPrevious={loadPosts("previous")}
        onNext={loadPosts("next")}
        lastPage={Math.ceil(totalEntries / 2)}
        currentPage={page}
      >
        <ul>
          {entries.map((entry, index) => (
            <>
              <li
                key={index}
                onClick={() => {
                  setSelectedEntry(entry);
                }}
              >
                <p>{new Date(entry.date).toLocaleDateString("en-US")}</p>
                <p>{entry.weight}</p>
                <p>
                  <Button
                    icon={<DeleteOutlined />}
                    onClick={() => {
                      console.log(selectedEntry);
                      showDeleteModal();
                    }}
                  >
                    Delete
                  </Button>
                </p>
              </li>
            </>
          ))}
        </ul>
      </Paginator>
    </>
  );
};

export default Dashboard;
