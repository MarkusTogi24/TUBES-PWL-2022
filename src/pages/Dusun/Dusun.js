import TableCard from 'components/TableCard';
import EditButton from 'components/EditBtn';
import DeleteButton from 'components/DeleteBtn';
import AddDataButton from 'components/AddDataButton';

import DetailModal from 'components/Dusun/DetailModal';

const columns = [
    { name: "id", label: "ID", options: { display:false, filter:false }  },
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
        label: "Nama Dusun",
        options: {
            filter: false,
            sort: true,
        }
    },
    {
        name: "kepala", // key di data
        label: "Kepala Dusun",
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
                            nama={meta.rowData[2]}
                            kepala={meta.rowData[3]}
                            deskripsi="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci a, voluptatum voluptates repellat odit dolorem! Error aperiam ex quibusdam reiciendis velit consequuntur sint doloribus molestias omnis maiores impedit rem quae modi eaque repellat, corporis quos exercitationem nulla quasi. Tempore, non?"
                            jumlah_rt="4"
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

const data = [
    { id:  1, nama: "Bukittinggi",          kepala: "James Bond",        },
    { id:  2, nama: "Padangpanjang",        kepala: "Tony Stark",        },
    { id:  3, nama: "Cirebon",              kepala: "Thomas Shelby",     },
    { id:  4, nama: "Cilegon",              kepala: "Jack Sparrow",      },
    { id:  5, nama: "Padangpendek",         kepala: "Uzumaki Naruto",    },
    { id:  6, nama: "Magelang",             kepala: "Deo Alif",          },
    { id:  7, nama: "Pagar Alam",           kepala: "Ezra Kornel",       },
    { id:  8, nama: "Tarakan",              kepala: "Aulia",             },
    { id:  9, nama: "Padangsedang",         kepala: "Rey",               },
    { id: 10, nama: "Tidore Kepulauan",     kepala: "Markus Togi",       },
    { id: 11, nama: "Bangone Kepulauan",    kepala: "Ackyra Anugerah",   },
    { id: 12, nama: "Tambunan",             kepala: "Muhammad Ikhbal",   },
    { id: 13, nama: "Sinaga",               kepala: "Steven",            },
    { id: 14, nama: "Naibaho",              kepala: "Albert",            },
    { id: 15, nama: "Silitonga",            kepala: "Jack Sklingington", },
    { id: 16, nama: "Manalu",               kepala: "Andy Bersie",       },
    { id: 17, nama: "Silalahi",             kepala: "John Wick",         },
    { id: 18, nama: "Siburian",             kepala: "Gerald",            },
];

const options = {
    filterType: 'multiselect',
    viewColumns: false,
};

export default function Dusun() {
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
                            {/* <DetailModal/> */}
                            <AddDataButton link="/tambahdusun" />
                        </div>
                        <TableCard title="Data Dusun" columns={columns} data={data} options={options}/>
                    </div>
                </div>
            </div>
        </>
    );
}
