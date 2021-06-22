import React, {useState, useEffect} from "react";
import MaterialTable from 'material-table';
import  {Grid}  from '@material-ui/core';
import { Container } from "@material-ui/core";

import axios from "axios";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';



const Todo = () => {
  const [data, setData] = useState()
  

  const getTodoData = async () => {
    try {
      const data = await axios.get(
        "https://jsonplaceholder.typicode.com/todos"
      );
      console.log(data.data);
      setData(data.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getTodoData();
  }, []);

function clickMe(event){
  setData(event.target.value)
 alert("setData")
}



  const columns = [
    { title: "ToDo Id", field: 'id' },
    {title:"ToDo Title", field: "title"},
    {
      title: "Status", field: "completed", render: (row) => <div className={row.status ? "true" : "false"}>
        {row.status ? "Incompleted" : "Completed"}
      </div>
    },
    { title: "Action", field:"ViewUser", render: (row) =><div className={row.title}><Button variant="outlined" onClick={clickMe}>ViewUser</Button></div> }
  ]
  
  
  return (
    <div>
    <Grid container direction="row" spacing={2} width="100%" height={500}>

    <Grid item xs={6}>
    <Grid container justify="space-between" alignItems="center">
    <Container maxwidth="lg" ><h1>Todos</h1>
    <MaterialTable
        title="Todos"
    data={data}
    columns={columns}
    
  
  />
  
  </Container>
 </Grid>
 </Grid>
        </Grid>
        </div>
      
      
  );
}

export default Todo;