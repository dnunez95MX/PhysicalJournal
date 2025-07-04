import { useEffect, useState } from "react";
import axios_instance from "../../helpers/apiconfig";
import { Form, InputNumber, Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { form, reset } from "react-hook-form";

const CreateWeightEntry = () => {
  const [form] = Form.useForm();
  const [weightEntry, setWeightEntry] = useState(0.0);

  useEffect(() => {
    getLatestEntry();
  }, [form]);

  const navigate = useNavigate();

  const getLatestEntry = async () => {
    await axios_instance
      .get("/weight/latest-entry")
      .then((result) => {
        if (result.status !== 200) {
          form.setFieldValue("weight", 80.0);
        } else {
          form.setFieldValue("weight", result.data.entry);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSubmit = async () => {
    await axios_instance
      .post("/weight/add-weight", {
        weight: weightEntry,
        date: Date.now(),
      })
      .then((resp) => {
        if (resp.status !== 201) {
          throw new Error("Failed to add entry");
        }
        console.log("Response:", resp.data);
        form.resetFields();
        navigate("/weight-entries");
      })
      .catch((e) => console.log(e + "error"));
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      <Form
        name="Add weight entry"
        form={form}
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={handleSubmit}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        {/* <Form.Item label="Checkbox" name="disabled" valuePropName="checked">
          <Checkbox>Checkbox</Checkbox>
        </Form.Item> */}
        {/* <Form.Item label="Radio">
          <Radio.Group>
            <Radio value="apple"> Apple </Radio>
            <Radio value="pear"> Pear </Radio>
          </Radio.Group>
        </Form.Item> */}
        {/* <Form.Item label="Input">
          <Input />
        </Form.Item> */}
        {/* <Form.Item label="Select">
          <Select>
            <Select.Option value="demo">Demo</Select.Option>
          </Select>
        </Form.Item> */}
        {/* <Form.Item label="TreeSelect">
          <TreeSelect
            treeData={[
              { title: 'Light', value: 'light', children: [{ title: 'Bamboo', value: 'bamboo' }] },
            ]}
          />
        </Form.Item> */}
        {/* <Form.Item label="Cascader">
          <Cascader
            options={[
              {
                value: 'zhejiang',
                label: 'Zhejiang',
                children: [
                  {
                    value: 'hangzhou',
                    label: 'Hangzhou',
                  },
                ],
              },
            ]}
          />
        </Form.Item>
        <Form.Item label="DatePicker">
          <DatePicker />
        </Form.Item>
        <Form.Item label="RangePicker">
          <RangePicker />
        </Form.Item> */}

        <h4>Previous Value: </h4>
        <Form.Item label="Weight (kg)" name="weight">
          <InputNumber
            step={0.01}
            onChange={(value) => setWeightEntry(value)}
          />
        </Form.Item>
        {/* <Form.Item label="TextArea">
          <TextArea rows={4} />
        </Form.Item>
        <Form.Item label="Switch" valuePropName="checked">
          <Switch />
        </Form.Item>
        <Form.Item label="Upload" valuePropName="fileList" getValueFromEvent={normFile}>
          <Upload action="/upload.do" listType="picture-card">
            <button
              style={{ color: 'inherit', cursor: 'inherit', border: 0, background: 'none' }}
              type="button"
            >
              <PlusOutlined />
              <div style={{ marginTop: 8 }}>Upload</div>
            </button>
          </Upload>
        </Form.Item>
        <Form.Item label="Button">
          <Button>Button</Button>
        </Form.Item>
        <Form.Item label="Slider">
          <Slider />
        </Form.Item>
        <Form.Item label="ColorPicker">
          <ColorPicker />
        </Form.Item>
        <Form.Item label="Rate">
          <Rate />
        </Form.Item> */}
        <Form.Item label={null}>
          <Button type="primary" htmlType="submit" icon={<PlusOutlined />}>
            Add
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default CreateWeightEntry;
