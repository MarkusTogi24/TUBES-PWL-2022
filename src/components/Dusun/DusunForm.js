import React, { useState } from 'react';
import Card from '@material-tailwind/react/Card';
import CardHeader from '@material-tailwind/react/CardHeader';
import CardBody from '@material-tailwind/react/CardBody';
import Input from '@material-tailwind/react/Input';
import TextArea from '@material-tailwind/react/Textarea';
import Button from "@material-tailwind/react/Button";
import Icon from "@material-tailwind/react/Icon";

import FormControl from '@mui/material/FormControl';


export default function Form() {
    const [ nama, setNama ] = useState('');
    const [ deskripsi, setDeskripsi ] = useState('');

    const submit = (e) => {
        e.preventDefault();
        let Data = {
            'nama'      : nama,
            'deskripsi' : deskripsi
        };
        console.log(Data);
    }

    return (
        <Card>
            <CardHeader color="blue" contentPosition="none">
                <div className="w-full flex items-center justify-between">
                    <h2 className="text-white text-2xl">Dusun Baru</h2>
                </div>
            </CardHeader>
            <CardBody>
                <form onSubmit={ submit }>
                    <FormControl required  sx={{ width: 1, mb:6 }}>
                        <Input type="text" color="blue" name="nama" placeholder="Nama Dusun" value={nama} onChange={ (e) => setNama( e.target.value ) }/>
                    </FormControl>
                    <FormControl required  sx={{ width: 1, mb:4 }}>
                        <TextArea color="blue" name="deskripsi" placeholder="Deskripsi" value={deskripsi} onChange={ (e) => setDeskripsi( e.target.value ) } />
                    </FormControl>
                    <div className="flex justify-end">
                        <Button color="lightBlue" buttonType="filled" size="regular" rounded={false} block={false} iconOnly={false} ripple="light" onClick={ submit } >
                            <Icon name="save" size="sm" /> SIMPAN DATA
                        </Button>
                    </div>
                </form>
            </CardBody>
        </Card>
    );
}

