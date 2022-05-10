import React, { useRef } from "react";
import Button from "@material-tailwind/react/Button";
import Icon from "@material-tailwind/react/Icon";
import Tooltips from "@material-tailwind/react/Tooltips";
import TooltipsContent from "@material-tailwind/react/TooltipsContent";

export default function EditButton(props) {
    function Edit(data){
        console.log(data);
    };
    const editBtnRef = useRef();
    return (
        <>
            <Button color="blue" buttonType="filled" size="sm" rounded={true} block={false} iconOnly={true} ripple="light" ref={editBtnRef} 
                onClick={()=> Edit(props.link)}>
                <Icon name="edit" size="sm" />
            </Button>
            <Tooltips placement="bottom" ref={editBtnRef}>
                <TooltipsContent>Edit</TooltipsContent>
            </Tooltips>
        </>
    );
}