import React from "react"
import Card from '@material-tailwind/react/Card';
import MUIDataTable from "mui-datatables";

export default function CardTable(props) {
        return (
            <Card>
                <MUIDataTable
                    title={props.title}
                    data={props.data}
                    columns={props.columns}
                    options={props.options}
                />
            </Card>
        );
}
