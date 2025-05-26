import React from 'react';
import { Button, Modal, Space } from 'antd';

const DeleteItemDialog = () => {
    return (
        <Space wrap>
    <Button onClick={showConfirm}>Confirm</Button>
    <Button onClick={showPromiseConfirm}>With promise</Button>
    <Button onClick={showDeleteConfirm} type="dashed">
      Delete
    </Button>
    <Button onClick={showPropsConfirm} type="dashed">
      With extra props
    </Button>
  </Space>
    );
}

export default DeleteItemDialog;