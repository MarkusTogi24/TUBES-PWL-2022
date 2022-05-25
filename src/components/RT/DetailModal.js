import React, { useRef } from "react";
import Button from "@material-tailwind/react/Button";
import Icon from "@material-tailwind/react/Icon";
import Tooltips from "@material-tailwind/react/Tooltips";
import TooltipsContent from "@material-tailwind/react/TooltipsContent";

export default function DetailModal(props) {
    const [showModal, setShowModal] = React.useState(false);
    // function View(data){
    //     console.log(data);
    // };
    const viewBtnRef = useRef();
    return (
        <>
            <Button color="green" buttonType="filled" size="sm" rounded={true} block={false} iconOnly={true} ripple="light" ref={viewBtnRef} 
                // onClick={()=> View(props.link)}>
                onClick={() => setShowModal(true)}>
                <Icon name="visibility" size="sm" />
            </Button>
            <Tooltips placement="bottom" ref={viewBtnRef}>
                <TooltipsContent>Lihat</TooltipsContent>
            </Tooltips>
            {showModal ? (
                <>
                    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-[1000] outline-none focus:outline-none">
                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                        {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                
                                {/*header*/}
                                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                                    <h3 className="text-3xl font-semibold">
                                        { props.title }
                                    </h3>
                                    <button className="p-1 ml-auto bg-red-500 border-0 text-white float-right flex items-center text-3xl font-semibold outline-none focus:outline-none"
                                        onClick={() => setShowModal(false)} >
                                        <span className="bg-transparent w-7 text-2xl block outline-none focus:outline-none">×</span>
                                    </button>
                                </div>
                                
                                {/*body*/}
                                <div className="relative p-6 flex-auto">
                                    <div className="grid grid-cols-4 text-base gap-2">
                                        <p className="font-semibold">Nama</p>
                                        <p className="col-span-3">{ props.nama }</p>
                                        <p className="font-semibold">Ketua RT</p>
                                        <p className="col-span-3">{ props.kepala }</p>
                                        <p className="font-semibold">Dusun</p>
                                        <p className="col-span-3">{ props.dusun }</p>
                                        <p className="font-semibold">Deskripsi</p>
                                        <p className="col-span-3">{ props.deskripsi }</p>
                                        <p className="font-semibold">Jumlah Keluarga</p>
                                        <p className="col-span-3">{ props.jumlah_keluarga }</p>
                                        <p className="font-semibold">Jumlah Penduduk</p>
                                        <p className="col-span-3">{ props.jumlah_penduduk }</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-[999] bg-black"></div>
                </>
            ) : null}
        </>
    );
}