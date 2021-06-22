import React, {useState, useEffect} from "react";
import MaterialTable from 'material-table';
import  {Grid}  from '@material-ui/core';
import axios from "axios";
import { Container } from "@material-ui/core";


const UserDetails= (props) => {
  const [data, setData] = useState()
  const [id,setId] = useState()

  const getUserDetailsData = async () => {
    try {
      const data = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
        
      );
      console.log(data.data);
      setData(data.data);
    } catch (e) {
      console.log(e);
    }
  }; 
  
  useEffect(() => {
    getUserDetailsData();
  }, []);



  const rows = [
    { title:"ToDo Id", field: "id" },
     { title: "ToDo Title", field: "title"},
     {title:"Name",field:"name"},
    {title: "UserName", field: "username"},
    { title:"Email", field: "email" },
    
     
  
    
  ]
  
  
  return (
    <div>
    <Grid container direction="row" spacing={2} width="100%" height={500}>

    <Grid item xs={6}>
    <Grid container justify="space-between" alignItems="center">
    <Container maxwidth="lg" ><h1>UserDetails</h1>

    <MaterialTable
        
    data={data}
    columns={rows}
    
  />
  </Container>
 </Grid>
 </Grid>
        </Grid>
        </div>
      
  );
}

export default UserDetails;