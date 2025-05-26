import logo from '../../logo.svg';
import '../../App.css';
import axios_instance from '../../helpers/apiconfig';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { DeleteOutlined, ExclamationCircleFilled } from '@ant-design/icons';
import { Button, message } from 'antd';
import { Modal } from 'antd';
import axios from 'axios';

const { confirm } = Modal;

const Dashboard = () => {
    const [entries, setEntries] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);  
    const [selectedEntry, setSelectedEntry] = useState(null);

    useEffect(() => {
        getEntries();
    }, []);

    const showDeleteModal = () => {
        setIsDeleteModalOpen(true);
        confirm({
            title: 'Are you sure delete this item?',
            icon: <ExclamationCircleFilled />,
            content: 'Deleting this entry will remove it permanently.',
            okText: 'Yes',
            okType: 'danger',
            cancelText: 'No',
            onOk() {
              axios_instance.delete(`/entries/${selectedEntry.id}`)
                .then((res) => {
                    if (res.status !== 200) {
                        throw new Error('Failed to delete item');
                    }
                    message.success('Entry deleted successfully');
                    getEntries();
                })
                .catch((err) => {
                    console.error(err);
                    message.error('Failed to delete entry');
                });

                setIsDeleteModalOpen(false);
            },
            onCancel() {
              console.log('Cancel');
              setIsDeleteModalOpen(false);
            },
          });
    }

    async function getEntries() {
        setLoading(true);
        try{
            await axios_instance.get('/entries').then((res) => {
                if (res.status !== 200) {
                    throw new Error('Failed to fetch items');
                }        
            setEntries(res.data.entries);
            console.log(res.data.entries);
            setLoading(false);
            }).catch((err) => console.error(err));; 
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    }

    return <>
        {loading ? <div className="App"><img src={logo} className="App-logo" alt="logo" /></div> : null}
        <div style={{width: "80%"}}>
        {entries.length > 0 ? (
            <div>
                <ul>
                    {entries.map((entry, index) => (
                        <li key={index}>
                            <p>{entry.date}</p>
                            <p>{entry.weight}</p>
                            <p><Button icon={<DeleteOutlined />} onClick={() => {
                                setSelectedEntry(entry.weight)
                                showDeleteModal();
                                }}>Delete</Button></p>
                        </li>
                    ))}
                </ul>
            </div>
        ) : null}
        </div>
        <div style={{width: '20%', float: "right"}}>
            <Link to='/entries'>Manage Entries</Link>
        </div>
    </>
}

export default Dashboard