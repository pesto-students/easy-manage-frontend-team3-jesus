import React from 'react'
import { DataGrid } from "@mui/x-data-grid";
import { Paper } from '@mui/material';
import { UsersColumns, UsersRows } from '../../Data/dummy';
const Users = () => {
  return (
    <div>
      
         <Paper  style={{ height: '36rem', width: '83%', marginTop: '0.1rem', marginLeft: '20.3rem'}}>
        <DataGrid
          rows={UsersRows}
          columns={UsersColumns}
          pageSize={9}
          checkboxSelection
          disableSelectionOnClick
        />
      </Paper>
    </div>
  )
}

export default Users