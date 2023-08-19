import { useState, useEffect } from 'react';

import { DataGrid } from '@mui/x-data-grid';

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

  return <div></div>;
};

export default TableComp;
