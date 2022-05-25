import React, { useState } from 'react';
import Card from '@material-tailwind/react/Card';
import CardHeader from '@material-tailwind/react/CardHeader';
import CardBody from '@material-tailwind/react/CardBody';
import Input from '@material-tailwind/react/Input';
import TextArea from '@material-tailwind/react/Textarea';
import Button from "@material-tailwind/react/Button";
import Icon from "@material-tailwind/react/Icon";

import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';



export default function RtForm() {
    const [ nama, setNama ] = useState('');
    const [ deskripsi, setDeskripsi ] = useState('');
    const [ dusun, setDusun ] = useState('');

    const submit = (e) => {
        e.preventDefault();
        let Data = {
            'nama'      : nama,
            'deskripsi' : deskripsi,
            'dusun'     : dusun
        };
        console.log(Data);
    }

    return (
        <Card>
            <CardHeader color="blue" contentPosition="none">
                <div className="w-full flex items-center justify-between">
                    <h2 className="text-white text-2xl">RT Baru</h2>
                </div>
            </CardHeader>
            <CardBody>
                <form onSubmit={ submit }>
                    <FormControl required  sx={{ width: 1, mb:6 }}>
                        <Input type="text" color="blue" name="nama" placeholder="Nama RT" value={nama} onChange={ (e) => setNama( e.target.value ) }/>
                    </FormControl>
                    <FormControl required  sx={{ width: 1, mb:4 }}>
                        <TextArea color="blue" name="deskripsi" placeholder="Deskripsi" value={deskripsi} onChange={ (e) => setDeskripsi( e.target.value ) } />
                    </FormControl>
                    <FormControl sx={{ width: 1 }}>
                        <InputLabel htmlFor="dusun">Dusun</InputLabel>
                        <Select id="dusun" name="dusun" label="Grouping"
                                value={dusun}
                                onChange={ (e) => setDusun( e.target.value ) }
                            >
                            <MenuItem value=""><em>Pilih Dusun</em></MenuItem>
                            <MenuItem value={1}>Dusun Kara</MenuItem>
                            <MenuItem value={2}>Dusun Kari</MenuItem>
                            <MenuItem value={3}>Dusun Karu</MenuItem>
                            <MenuItem value={4}>Dusun Kare</MenuItem>
                            <MenuItem value={5}>Dusun Karo</MenuItem>
                        </Select>
                    </FormControl>
                    <div className="flex justify-end mt-4">
                        <Button color="lightBlue" buttonType="filled" size="regular" rounded={false} block={false} iconOnly={false} ripple="light" onClick={ submit } >
                            <Icon name="save" size="sm" /> SIMPAN DATA
                        </Button>
                    </div>
                </form>
            </CardBody>
        </Card>
    );
}

