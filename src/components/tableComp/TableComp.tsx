import { useState, useEffect } from 'react';

import { DataGrid, GridColDef } from '@mui/x-data-grid';

import axios from 'axios';

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const TableComp = () => {
  const [data, setData] = useState<Post[]>([]);
  useEffect(() => {
    axios.get(' https://jsonplaceholder.typicode.com/posts').then((res) => {
      console.log(res.data);
      setData(res.data);
    });
  }, []);

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'userId', headerName: 'User ID', width: 90 },
    { field: 'title', headerName: 'Title', width: 200 },
    { field: 'body', headerName: 'Body', width: 400 },
  ];

  return (
    <div style={{ height: 450, width: '100%' }}>
      <DataGrid rows={data} columns={columns} />
    </div>
  );
};

export default TableComp;
