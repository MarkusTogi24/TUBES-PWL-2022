import React, { useRef } from "react";
import Button from "@material-tailwind/react/Button";
import Icon from "@material-tailwind/react/Icon";
import Tooltips from "@material-tailwind/react/Tooltips";
import TooltipsContent from "@material-tailwind/react/TooltipsContent";
import {
    useHistory,
} from "react-router-dom";


export default function ViewButton(props) {
    let history = useHistory();
    function View(data){
        history.push(data);
    };
    const viewBtnRef = useRef();
    return (
        <>
            <Button color="green" buttonType="filled" size="sm" rounded={true} block={false} iconOnly={true} ripple="light" ref={viewBtnRef} 
                onClick={()=> View(props.link)}>
                <Icon name="visibility" size="sm" />
            </Button>
            <Tooltips placement="bottom" ref={viewBtnRef}>
                <TooltipsContent>Lihat</TooltipsContent>
            </Tooltips>
        </>
    );
}