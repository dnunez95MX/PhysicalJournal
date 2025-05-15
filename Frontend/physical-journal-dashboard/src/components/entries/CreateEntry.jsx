import {useState} from 'react';
import axios_instance from '../../helpers/apiconfig';
import { Form, InputNumber, Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

const CreateEntry = () => {
    const [form] = Form.useForm();
    const [weightEntry, setWeightEntry] = useState('');
    const handleSubmit = async (event) => {
        console.log(event)
        console.log(weightEntry + 'submited');
        try{
            const resp = await axios_instance.post('/entries', {
                weight: weightEntry,
                date: Date.now()
            }).then(x => console.log(resp.data))
            .catch(e => console.log(e + 'error'))
        } catch(err){
            console.log(err);
        }
    }

    const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
    };

    return <>
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
        <Form.Item label="Weight Entry">
          <InputNumber onChange={(value) => { console.log(value); setWeightEntry(value) }}/>
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
      <Button type="primary" htmlType="submit"  icon={<PlusOutlined />}>
        Add
      </Button>
    </Form.Item>
      </Form>
    </>
}

export default CreateEntry