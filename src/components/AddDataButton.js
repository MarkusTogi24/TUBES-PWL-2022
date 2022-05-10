import React, { useRef } from "react";
import Button from "@material-tailwind/react/Button";
import Icon from "@material-tailwind/react/Icon";
import Tooltips from "@material-tailwind/react/Tooltips";
import TooltipsContent from "@material-tailwind/react/TooltipsContent";

import { useHistory } from 'react-router-dom';

export default function AddDataButton(props) {
    
    let history = useHistory();
    function Redirect(path){
        history.push(path);
    };
    const AddDataButtonRef = useRef();
    return (
        <>  
            <Button color="lightGreen" buttonType="filled" size="regular" rounded={true} block={false} iconOnly={true} ripple="light" ref={AddDataButtonRef} 
                onClick={()=> Redirect(props.link)}>
                <Icon name="add" size="regular" />
            </Button>
            <Tooltips placement="left" ref={AddDataButtonRef}>
                <TooltipsContent>Tambah Data</TooltipsContent>
            </Tooltips>
        </>
    );
}