import React from 'react';
import TableCard from 'components/TableCard';
// import ViewButton from 'components/ViewBtn';
import EditButton from 'components/EditBtn';
import DeleteButton from 'components/DeleteBtn';

import AddDataButton from 'components/AddDataButton';

import DetailModal from 'components/RT/DetailModal';

// function Data(){
    
// }

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
    {
        name: "nama", // key di data
        label: "Nama RT",
        options: {
            filter: false,
            sort: true,
        }
    },
    {
        name: "kepala", // key di data
        label: "Ketua RT",
        options: {
            filter: false,
            sort: true,
        }
    },
    {
        name: "dusun", // key di data
        label: "Dusun",
        options: {
            filter: false,
            sort: true,
        }
    },
    {
        name: "", // key di data
        label: "AKSI",
        options: {
            filter: false,
            sort: false,
            customBodyRender: (value, meta) => {
                return (
                    <div className="flex gap-1">
                        <DetailModal link={`lihatdusun/${meta.rowData[0]}`} 
                            title="Detail Dusun"
                            nama={meta.rowData[1]}
                            kepala={meta.rowData[2]}
                            dusun={meta.rowData[3]}
                            deskripsi="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci a, voluptatum voluptates repellat odit dolorem! Error aperiam ex quibusdam reiciendis velit consequuntur sint doloribus molestias omnis maiores impedit rem quae modi eaque repellat, corporis quos exercitationem nulla quasi. Tempore, non?"
                            jumlah_keluarga="60"
                            jumlah_penduduk="200"
                        />
                        <EditButton link={`Diedit ${meta.rowData[1]}`} />
                        <DeleteButton link={`Dihapus ${meta.rowData[1]}`} />
                    </div>
                );

            }
        }
    },
];

// const test = Data();

const data = [
    { nama: "Bukittinggi",          kepala: "James Bond",        dusun: "Korea"     },
    { nama: "Padangpanjang",        kepala: "Tony Stark",        dusun: "Acer"      },
    { nama: "Cirebon",              kepala: "Thomas Shelby",     dusun: "Martek"    },
    { nama: "Cilegon",              kepala: "Jack Sparrow",      dusun: "Stitch"    },
    { nama: "Padangpendek",         kepala: "Uzumaki Naruto",    dusun: "Casan"     },
    { nama: "Magelang",             kepala: "Deo Alif",          dusun: "Korea"     },
    { nama: "Pagar Alam",           kepala: "Ezra Kornel",       dusun: "Stitch"    },
    { nama: "Tarakan",              kepala: "Aulia",             dusun: "Acer"      },
    { nama: "Padangsedang",         kepala: "Rey",               dusun: "Martek"    },
    { nama: "Tidore Kepulauan",     kepala: "Markus Togi",       dusun: "Sisir"     },
    { nama: "Bangone Kepulauan",    kepala: "Ackyra Anugerah",   dusun: "Stitch"    },
    { nama: "Tambunan",             kepala: "Muhammad Ikhbal",   dusun: "Korea"     },
    { nama: "Sinaga",               kepala: "Steven",            dusun: "Casan"     },
    { nama: "Naibaho",              kepala: "Albert",            dusun: "Sisir"     },
    { nama: "Silitonga",            kepala: "Jack Sklingington", dusun: "Acer"      },
    { nama: "Manalu",               kepala: "Andy Bersie",       dusun: "Korea"     },
    { nama: "Silalahi",             kepala: "John Wick",         dusun: "Sisir"     },
    { nama: "Siburian",             kepala: "Gerald",            dusun: "Martek"    },
];

const options = {
    filterType: 'multiselect',
    viewColumns: false,
};

export default function Rt() {
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
                    <div className="grid grid-cols-1 px-4 mb-16">
                        <div className="w-full flex justify-end mb-4 px-4">
                            <AddDataButton link="/tambahrt" />
                        </div>
                        <TableCard title="Data RT" columns={columns} data={data} options={options}/>
                    </div>
                </div>
            </div>
        </>
    );
}
