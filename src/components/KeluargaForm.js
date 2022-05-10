import React, { useState } from 'react';
import Card from '@material-tailwind/react/Card';
import CardHeader from '@material-tailwind/react/CardHeader';
import CardBody from '@material-tailwind/react/CardBody';
import Input from '@material-tailwind/react/Input';
import Radio from "@material-tailwind/react/radio"
import Button from "@material-tailwind/react/Button";
import Icon from "@material-tailwind/react/Icon";

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import ListSubheader from '@mui/material/ListSubheader';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';



export default function KeluargaForm() {
    const [rtId, setRtId]     = useState('');
    const [noKk, setNoKk]     = useState('');
    const [alamat, setAlamat] = useState('');

    const [inputFields, setInputFields] = useState(
        [
            {
                nama_lengkap        : '',
                nik                 : '',
                jenis_kelamin       : '',
                tempat_lahir        : '',
                tanggal_lahir       : '',
                agama               : '',
                pendidikan_terakhir : '',
                jenis_pekerjaan     : '',
                golongan_darah      : '',
                status_pernikahan   : '',
                tanggal_pernikahan  : '',
                hubungan_keluarga   : '',
                kewarganegaraan     : '',
                nomor_passpor       : '',
                nomor_KITAP         : '',
                nama_ayah           : '',
                nama_ibu            : ''
            },
        ]
    );

    const handleFormChange = (index, event) => {
        let data = [...inputFields];
        data[index][event.target.name] = event.target.value;
        setInputFields(data);
    }

    const addFields = () => {
        let newfield = 
        { 
            nama_lengkap        : '',
            nik                 : '',
            jenis_kelamin       : '',
            tempat_lahir        : '',
            tanggal_lahir       : '',
            agama               : '',
            pendidikan_terakhir : '',
            jenis_pekerjaan     : '',
            golongan_darah      : '',
            status_pernikahan   : '',
            tanggal_pernikahan  : '',
            hubungan_keluarga   : '',
            kewarganegaraan     : '',
            nomor_passpor       : '',
            nomor_KITAP         : '',
            nama_ayah           : '',
            nama_ibu            : ''
        }
    
        setInputFields([...inputFields, newfield])
    }

    const removeFields = (index) => {
        let data = [...inputFields];
        data.splice(index, 1)
        setInputFields(data)
    }

    const submit = (e) => {
        e.preventDefault();
        let rtData = {
            'rt_id'  : rtId,
            'no_kk'  : noKk,
            'alamat' : alamat,
        };
        let allData = [ rtData, inputFields ];
        console.log(allData);
    }

    return (
        <Card>
            <CardHeader color="blue" contentPosition="none">
                <div className="w-full flex items-center justify-between">
                    <h2 className="text-white text-2xl">Data Kartu Keluarga Baru</h2>
                </div>
            </CardHeader>
            <CardBody>
                <form>
                    <div className="w-full mb-6">
                        <h6 className="bg-blue-100 py-2 text-center mb-3 text-blue-500 text-base font-semibold uppercase">
                            Data RT
                        </h6>
                        <div className="grid grid-cols-2 gap-6 p-4 mb-3 align-center">
                            <FormControl sx={{ width: 1 }}>
                                <InputLabel htmlFor="rt_id">RT</InputLabel>
                                <Select id="rt_id" name="rt_id" label="Grouping"
                                        value={rtId}
                                        onChange={ (e) => setRtId( e.target.value ) }
                                    >
                                    <MenuItem value=""><em>Pilih RT</em></MenuItem>

                                    <ListSubheader>Dusun A</ListSubheader>
                                    <MenuItem value={1}>RT 1</MenuItem>
                                    <MenuItem value={2}>RT 2</MenuItem>

                                    <ListSubheader>Dusun B</ListSubheader>
                                    <MenuItem value={3}>RT 3</MenuItem>
                                    <MenuItem value={4}>RT 4</MenuItem>
                                </Select>
                            </FormControl>

                            <FormControl required  sx={{ mt:2, width: 1 }}>
                                <Input type="text" color="blue" name="no_kk" placeholder="Nomor KK" value={noKk} onChange={ (e) => setNoKk( e.target.value ) } />
                            </FormControl>

                            <div className="col-span-2 pl-2">
                                <FormControl required  sx={{ width: 1 }}>
                                    <Input type="text" color="blue" name="alamat" placeholder="Alamat" value={alamat} onChange={ (e) => setAlamat( e.target.value ) } />
                                </FormControl>
                            </div>
                        </div>
                    </div>

                    <div className="w-full mb-6">
                        <h6 className="bg-blue-100 py-2 text-center mb-3 text-blue-500 text-base font-semibold uppercase">
                            Data Anggota Keluarga
                        </h6>
                        {inputFields.map((input, index) => {
                            return (
                                <div key={index} className="border border-blue-200 p-4 mb-4 rounded-lg">
                                    <div className="flex justify-between items-center">
                                        <p className="py-2 mb-3 text-blue-500 text-base font-semibold capitalize">
                                            Anggota Keluarga {index+1}
                                        </p>
                                        <Button color="red" buttonType="filled" size="regular" rounded={true} block={false} iconOnly={true} ripple="light"
                                            onClick={() => removeFields(index)} >
                                            <Icon name="clear" size="sm" />
                                        </Button>
                                    </div>
                                    
                                    <div className="grid grid-cols-2 gap-6">
                                        <div className="col-span-2">
                                            <Input type="text" color="blue" name='nama_lengkap' placeholder='Nama Lengkap' value={input.nama_lengkap} onChange={event => handleFormChange(index, event)} />
                                        </div>

                                        <Input type="text" color="blue" name='nik' placeholder='NIK' value={input.nik} onChange={event => handleFormChange(index, event)} />

                                        <div className="flex items-center gap-4">
                                            <h6 className="text-gray-400">Jenis kelamin : </h6>
                                            <Radio color="blue" text="Laki-laki" id={"jk_lk"+index} name="jenis_kelamin" value="Laki-laki" onChange={event => handleFormChange(index, event)} />
                                            <Radio color="blue" text="Perempuan" id={"jk_pr"+index} name="jenis_kelamin" value="Perempuan" onChange={event => handleFormChange(index, event)} />
                                        </div>
                                        
                                        <Input type="text" color="blue" name='tempat_lahir' placeholder='Tempat Lahir' value={input.tempat_lahir} onChange={event => handleFormChange(index, event)} />

                                        <div className="flex items-center gap-4">
                                            <h6 className="text-gray-400">Tanggal Lahir : </h6>
                                            <input  type="date" name="tanggal_lahir" id="tanggal_lahir" value={input.tanggal_lahir} onChange={event => handleFormChange(index, event)} />
                                        </div>

                                        <FormControl required  sx={{ mt:2, width: 1 }}>
                                            <Input type="text" color="blue" name='golongan_darah' placeholder='Golongan Darah' value={input.golongan_darah} onChange={event => handleFormChange(index, event)} />
                                        </FormControl>

                                        <FormControl fullWidth>
                                            <InputLabel id="agamaLabel">Agama</InputLabel>
                                            <Select labelId="agamaLabel" id="agama" name="agama" label="agama" 
                                                value={input.agama}
                                                onChange={event => handleFormChange(index, event)}
                                            >
                                                <MenuItem value="Islam">Islam</MenuItem>
                                                <MenuItem value="Kristen Protestan">Kristen Protestan</MenuItem>
                                                <MenuItem value="Katolik">Katolik</MenuItem>
                                                <MenuItem value="Hindu">Hindu</MenuItem>
                                                <MenuItem value="Budha">Budha</MenuItem>
                                                <MenuItem value="Kong Guan">Kong Guan</MenuItem>
                                            </Select>
                                        </FormControl>

                                        <Input type="text" color="blue" name='pendidikan_terakhir' placeholder='Pendidikan Terakhir' value={input.pendidikan_terakhir} onChange={event => handleFormChange(index, event)} />

                                        <Input type="text" color="blue" name='jenis_pekerjaan' placeholder='Jenis Pekerjaan' value={input.jenis_pekerjaan} onChange={event => handleFormChange(index, event)} />
                                        
                                        <div className="flex items-center gap-4">
                                            <h6 className="text-gray-400">Status Pernikahan : </h6>
                                            <Radio color="blue" text="Sudah" id={"sudah_menikah"+index} name="status_pernikahan" value="Sudah" onChange={event => handleFormChange(index, event)} />
                                            <Radio color="blue" text="Belum" id={"belum_menikah"+index} name="status_pernikahan" value="Belum" onChange={event => handleFormChange(index, event)} />
                                        </div>

                                        <div className="flex items-center gap-4">
                                            <h6 className="text-gray-400">Tanggal Pernikahan : </h6>
                                            <input  type="date" name="tanggal_pernikahan" id="tanggal_pernikahan" value={input.tanggal_pernikahan} onChange={event => handleFormChange(index, event)} />
                                        </div>
                                        
                                        <FormControl fullWidth>
                                            <InputLabel id="hubungan_keluargaLabel">Hubungan Keluarga</InputLabel>
                                            <Select labelId="hubungan_keluargaLabel" id="hubungan_keluarga" name="hubungan_keluarga" label="hubungan keluarga" 
                                                value={input.hubungan_keluarga}
                                                onChange={event => handleFormChange(index, event)}
                                            >
                                                <MenuItem value="Kepala Suku">Kepala Suku</MenuItem>
                                                <MenuItem value="Ayah">Ayah</MenuItem>
                                                <MenuItem value="Ibu">Ibu</MenuItem>
                                                <MenuItem value="Anak">Anak</MenuItem>
                                                <MenuItem value="Mantan Keluarga">Mantan Keluarga</MenuItem>
                                            </Select>
                                        </FormControl>

                                        <FormControl fullWidth>
                                            <InputLabel id="kewarganegaraanLabel">Kewarganegaraan</InputLabel>
                                            <Select labelId="kewarganegaraanLabel" id="kewarganegaraan" name="kewarganegaraan" label="kewarganegaraan" 
                                                value={input.kewarganegaraan}
                                                onChange={event => handleFormChange(index, event)}
                                            >
                                                <MenuItem value="WNI">WNI</MenuItem>
                                                <MenuItem value="WNA">WNA</MenuItem>
                                            </Select>
                                        </FormControl>

                                        <div className="col-span-2">
                                            <Input type="text" color="blue" name='nomor_passpor' placeholder='Nomor Passpor' value={input.nomor_passpor} onChange={event => handleFormChange(index, event)} />
                                        </div>

                                        <div className="col-span-2">
                                            <Input type="text" color="blue" name='nomor_KITAP' placeholder='Nomor KITAP' value={input.nomor_KITAP} onChange={event => handleFormChange(index, event)} />
                                        </div>
                                        
                                        <Input type="text" color="blue" name='nama_ayah' placeholder='Nama Ayah' value={input.nama_ayah} onChange={event => handleFormChange(index, event)} />
                                        <Input type="text" color="blue" name='nama_ibu' placeholder='Nama Ibu' value={input.nama_ibu} onChange={event => handleFormChange(index, event)} />
                                    </div>
                                </div>
                            )
                        })}
                    </div>

                    <Button color="green" buttonType="filled" size="lg" rounded={false} block={true} iconOnly={false} ripple="light" onClick={ submit } >
                        <Icon name="save" size="lg" /> SIMPAN DATA
                    </Button>
                </form>

                <div className="flex justify-end pt-4 mt-4">
                    <Button color="lightBlue" buttonType="filled" size="regular" rounded={false} block={false} iconOnly={false} ripple="light" onClick={ () => addFields() } >
                        <Icon name="add" size="sm" /> TAMBAH ANGGOTA KELUARGA
                    </Button>
                </div>
            </CardBody>
        </Card>
    );
}

