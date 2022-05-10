import React, { useRef } from "react";
import Button from "@material-tailwind/react/Button";
import Icon from "@material-tailwind/react/Icon";
import Tooltips from "@material-tailwind/react/Tooltips";
import TooltipsContent from "@material-tailwind/react/TooltipsContent";

export default function DeleteButton(props) {
    function Delete(data){
        console.log(data);
    };
    const deleteBtnRef = useRef();
    return (
        <>
            <Button color="red" buttonType="filled" size="sm" rounded={true} block={false} iconOnly={true} ripple="light" ref={deleteBtnRef} 
                onClick={()=> Delete(props.link)}>
                <Icon name="delete" size="sm" />
            </Button>
            <Tooltips placement="bottom" ref={deleteBtnRef}>
                <TooltipsContent>Hapus</TooltipsContent>
            </Tooltips>
        </>
    );
}