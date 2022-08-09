import { useState } from "react";
import { DataGrid, MAX_PAGE_SIZE } from '@mui/x-data-grid';

export const List=()=>{

    const[records,setRecords]=useState([])

    const columns = [
        { field: 'tvId', headerName: 'Television ID', width: 200 },
        { field: 'model', headerName: 'Television Model', width: 200 },
        { field: 'brand', headerName: 'Television Brand', width: 300 },
        { field: 'cost', headerName: 'Television Price', width: 300 },
        { field: 'inches', headerName: 'Television Size in inches', width: 300 },
        { field: 'type', headerName: 'Television Type', width: 300 },
      ];

    return(
        <>
            <div className="container mt-3">
                <div className="row justify-content-center">
                    <div className="table-responsive-lg">
                        <div style={{ height: 400, width: '100%' }} className="col-lg-8 col-md-10 col-sm-12">
                            <DataGrid
                                columns={columns}
                                rows={records}
                                pageSize={7}
                                rowsPerPageOptions={[7]}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}