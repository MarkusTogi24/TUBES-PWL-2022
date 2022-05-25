import TableCard from 'components/TableCard';
import EditButton from 'components/EditBtn';
import DeleteButton from 'components/DeleteBtn';

const col_options = { filter:false, sort:false }

const columns = [
    {
        name: "", // key di data
        label: "NO",
        options: {
            filter: false,
            sort: false,
            customBodyRenderLite: (dataIndex) => {
                let val = dataIndex+1;
                return (
                    <p className="block w-full text-center">{val}</p>
                );
            }
        }
    },
    { name: "nama",                 label: "Nama",                  options: col_options  },
    { name: "nik",                  label: "NIK",                   options: col_options  },
    { name: "jenis_kelamin",        label: "Jenis Kelamin",         options: col_options  },
    { name: "tempat_lahir",         label: "TPTLHR",         options: { display:false, filter:false }  },
    { name: "tanggal_lahir",         label: "TGLLHR",         options: { display:false, filter:false }  },
    { 
        name: "",
        label: "Tpt/Tgl Lahir",         
        options: {
            filter: false,
            sort: false,
            customBodyRender: (value, meta) => {
                return (
                    <span className="">
                        { meta.rowData[4] }, { meta.rowData[5] }
                    </span>
                );

            }
        }  
    },
    { name: "agama",                label: "Agama",                 options: col_options  },
    { name: "pendidikan",           label: "Pendidikan",            options: col_options  },
    { name: "pekerjaan",            label: "Pekerjaan",             options: col_options  },
    { name: "gol_darah",            label: "Gol. Darah",            options: col_options  },
    { name: "status_pernikahan",    label: "Status Pernikahan",     options: col_options  },
    { name: "tanggal_pernikahan",   label: "Tanggal Pernikahan",    options: col_options  },
    { name: "hubungan_keluarga",    label: "Status Hubungan Dalam Keluarga", options: col_options  },
    { name: "kewarganegaraan",      label: "Kewarganegaraan",       options: col_options  },
    { name: "no_passpor",           label: "No. Passpor",           options: col_options  },
    { name: "no_kitap",             label: "No. KITAP",             options: col_options  },
    { name: "nama_ayah",            label: "Nama Ayah",             options: col_options  },
    { name: "nama_ibu",             label: "Nama Ibu",              options: col_options  },
    {
        name: "", // key di data
        label: "Aksi",
        options: {
            filter: false,
            sort: false,
            customBodyRender: (value, meta) => {
                return (
                    <div className="flex gap-1">
                        <EditButton link={`Diedit ${meta.rowData[1]}`} />
                        <DeleteButton link={`Dihapus ${meta.rowData[1]}`} />
                    </div>
                );

            }
        }
    },
];

const data = [
    { 
        nama: "Dimas Mekel", nik: "755480337", jenis_kelamin: "Laki-laki",
        tempat_lahir: "Surakarta", tanggal_lahir: "30-11-1972", agama: "Islam",
        pendidikan: "SD", pekerjaan: "Bandar Togel", gol_darah: "AB",
        status_pernikahan:"Sudah Menikah", tanggal_pernikahan: "12-12-1998",
        hubungan_keluarga:"Ayah", kewarganegaraan:"WNI", no_passpor:"19274699", 
        no_kitap:"113876", nama_ayah:"Dimas Meki", nama_ibu:"Nimas Meki"
    },
    { 
        nama: "Nimas Mekel", nik: "624480389", jenis_kelamin: "Perempuan",
        tempat_lahir: "Surakarta", tanggal_lahir: "13-05-1976", agama: "Hindu",
        pendidikan: "SMP", pekerjaan: "Koruptor", gol_darah: "B",
        status_pernikahan:"Sudah Menikah", tanggal_pernikahan: "12-12-1998",
        hubungan_keluarga:"Ibu", kewarganegaraan:"WNI", no_passpor:"-", 
        no_kitap:"-", nama_ayah:"Jordan Harris", nama_ibu:"Aurel Harris"
    },
    { 
        nama: "Amas Mekel", nik: "123480344", jenis_kelamin: "Laki-laki",
        tempat_lahir: "Surabaya", tanggal_lahir: "14-10-2000", agama: "Budha",
        pendidikan: "SMP", pekerjaan: "Tukang Cukur", gol_darah: "AB",
        status_pernikahan:"Belum Menikah", tanggal_pernikahan: "-",
        hubungan_keluarga:"Anak", kewarganegaraan:"WNI", no_passpor:"-", 
        no_kitap:"-", nama_ayah:"Dimas Mekel", nama_ibu:"Nimas Mekel"
    },
    
    { 
        nama: "Dumas Mekel", nik: "123480345", jenis_kelamin: "Perempuan",
        tempat_lahir: "Surabaya", tanggal_lahir: "01-05-2002", agama: "Kong Guan",
        pendidikan: "SMP", pekerjaan: "Jual Gorengan", gol_darah: "B",
        status_pernikahan:"Belum Menikah", tanggal_pernikahan: "-",
        hubungan_keluarga:"Anak", kewarganegaraan:"WNI", no_passpor:"-", 
        no_kitap:"-", nama_ayah:"Dimas Mekel", nama_ibu:"Nimas Mekel"
    },
    
    { 
        nama: "Trimas Mekel", nik: "123480346", jenis_kelamin: "Laki-laki",
        tempat_lahir: "Surabaya", tanggal_lahir: "14-11-2004", agama: "Budha",
        pendidikan: "SD", pekerjaan: "Pelanggan Cukur", gol_darah: "AB",
        status_pernikahan:"Belum Menikah", tanggal_pernikahan: "-",
        hubungan_keluarga:"Anak", kewarganegaraan:"WNI", no_passpor:"-", 
        no_kitap:"-", nama_ayah:"Dimas Mekel", nama_ibu:"Nimas Mekel"
    },
    
    { 
        nama: "Emas Mekel", nik: "123480344", jenis_kelamin: "Laki-laki",
        tempat_lahir: "Surabaya", tanggal_lahir: "14-10-2006", agama: "Budha",
        pendidikan: "TK", pekerjaan: "Penonton Cukur", gol_darah: "AB",
        status_pernikahan:"Belum Menikah", tanggal_pernikahan: "-",
        hubungan_keluarga:"Anak", kewarganegaraan:"WNI", no_passpor:"-", 
        no_kitap:"-", nama_ayah:"Dimas Mekel", nama_ibu:"Nimas Mekel"
    }
];

const options = {
    filter: false,
    print : false,
    viewColumns: false,
};

export default function LihatKeluarga() {
    return (
        <>
            <div className="bg-light-blue-500 pt-14 pb-28 px-3 md:px-8 h-auto">
                <div className="container mx-auto max-w-full">
                    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4">
                    </div>
                </div>
            </div>

            <div className="px-3 md:px-8 h-auto -mt-24">
                <div className="container mx-auto max-w-full">
                    <div className="px-4">
                        <div className="grid grid-cols-2 p-8 mb-8 bg-white gap-6 text-gray-600 rounded-lg pb-6 shadow-md shadow-gray-500">
                            <p className="col-span-2 text-4xl text-center font-regular mb-2">Kartu Keluarga</p>
                            <p className="col-span-2 text-xl text-center font-regular border-b-2 border-gray-400 pb-2 mb-2">No. 1234567811912</p>
                            
                            <p className="grid grid-cols-12 lg:row-start-3">
                                <span className="col-span-4">Kepala Keluarga</span>
                                <span className="col-span-1">:</span>
                                <span className="col-span-7">Dimas Mekel</span>
                            </p>

                            <p className="grid grid-cols-12 lg:row-start-4">
                                <span className="col-span-4">Alamat</span>
                                <span className="col-span-1">:</span>
                                <span className="col-span-7">Ds. Ronggowarsito No. 232, Jayapura 65874, Aceh</span>
                            </p>

                            <p className="grid grid-cols-12 lg:row-start-5">
                                <span className="col-span-4">RT</span>
                                <span className="col-span-1">:</span>
                                <span className="col-span-7">Bukittinggi</span>
                            </p>

                            <p className="grid grid-cols-12 lg:row-start-6">
                                <span className="col-span-4">Kode Pos</span>
                                <span className="col-span-1">:</span>
                                <span className="col-span-7">95189</span>
                            </p>

                            <p className="grid grid-cols-12">
                                <span className="col-span-4">Desa/Kelurahan</span>
                                <span className="col-span-1">:</span>
                                <span className="col-span-7">Way Huwi</span>
                            </p>

                            <p className="grid grid-cols-12">
                                <span className="col-span-4">Kecamatan</span>
                                <span className="col-span-1">:</span>
                                <span className="col-span-7">Jati Agung</span>
                            </p>

                            <p className="grid grid-cols-12">
                                <span className="col-span-4">Kabupaten/Kota</span>
                                <span className="col-span-1">:</span>
                                <span className="col-span-7">Bandar Lampung</span>
                            </p>

                            <p className="grid grid-cols-12">
                                <span className="col-span-4">Provinsi</span>
                                <span className="col-span-1">:</span>
                                <span className="col-span-7">Lampung</span>
                            </p>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 px-4 mb-16">
                        <TableCard title="Anggota Keluarga" columns={columns} data={data} options={options}/>
                    </div>
                </div>
            </div>
        </>
    );
}
