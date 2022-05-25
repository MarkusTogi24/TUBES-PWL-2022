import TableCard from 'components/TableCard';
// import {
//     useParams
// } from "react-router-dom";

const columns = [
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
];

// const test = Data();

const data = [
    { nama: "Bukittinggi",          kepala: "James Bond",        },
    { nama: "Padangpanjang",        kepala: "Tony Stark",        },
    { nama: "Cirebon",              kepala: "Thomas Shelby",     },
    { nama: "Cilegon",              kepala: "Jack Sparrow",      },
    { nama: "Padangpendek",         kepala: "Uzumaki Naruto",    },
    { nama: "Magelang",             kepala: "Deo Alif",          },
    { nama: "Pagar Alam",           kepala: "Ezra Kornel",       },
    { nama: "Tarakan",              kepala: "Aulia",             },
    { nama: "Padangsedang",         kepala: "Rey",               },
    { nama: "Tidore Kepulauan",     kepala: "Markus Togi",       },
    { nama: "Bangone Kepulauan",    kepala: "Ackyra Anugerah",   },
    { nama: "Tambunan",             kepala: "Muhammad Ikhbal",   },
    { nama: "Sinaga",               kepala: "Steven",            },
    { nama: "Naibaho",              kepala: "Albert",            },
    { nama: "Silitonga",            kepala: "Jack Sklingington", },
    { nama: "Manalu",               kepala: "Andy Bersie",       },
    { nama: "Silalahi",             kepala: "John Wick",         },
    { nama: "Siburian",             kepala: "Gerald",            },
];

const options = {
    filterType: 'multiselect',
    viewColumns: false,
};

export default function LihatDusun() {
    // let { id } = useParams();
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
                            <p className="col-span-2 text-4xl text-center font-regular mb-2">DATA DUSUN</p>
                            <p className="col-span-2 text-xl text-center font-regular border-b-2 border-gray-400 pb-2 mb-2">No. 1234567811912</p>
                            
                            <p className="grid grid-cols-12 lg:row-start-3">
                                <span className="col-span-4">Kepala Dusun</span>
                                <span className="col-span-1">:</span>
                                <span className="col-span-7">Dimas Mekel</span>
                            </p>

                            <p className="grid grid-cols-12 lg:row-start-4">
                                <span className="col-span-4">Jumlah RT</span>
                                <span className="col-span-1">:</span>
                                <span className="col-span-7">14</span>
                            </p>

                            <p className="grid grid-cols-12 lg:row-start-5">
                                <span className="col-span-4">Kode Pos</span>
                                <span className="col-span-1">:</span>
                                <span className="col-span-7">95189</span>
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
                        <TableCard title="RT Terdaftar" columns={columns} data={data} options={options}/>
                    </div>
                </div>
            </div>
        </>
    );
}
