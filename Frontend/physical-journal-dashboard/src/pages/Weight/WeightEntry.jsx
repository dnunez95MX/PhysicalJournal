import React from "react";
import { DeleteOutlined } from "@ant-design/icons";
import { Button } from "antd";

const WeightEntry = ({ id, weight, date, onShowDeleteModal }) => {
  return (
    <>
      <p>{new Date(date).toLocaleDateString("en-US")}</p>
      <p>{weight}</p>
      <Button
        icon={<DeleteOutlined />}
        onClick={() => {
          onShowDeleteModal(id);
        }}
      >
        Delete
      </Button>
    </>
  );
};

export default WeightEntry;
