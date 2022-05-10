import React from 'react';
import TableCard from 'components/TableCard';
import ViewButton from 'components/ViewBtn';
import EditButton from 'components/EditBtn';
import DeleteButton from 'components/DeleteBtn';

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
                        <ViewButton link={`Dilihat ${meta.rowData[1]}`}/>
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
                        <TableCard title="Data RT" columns={columns} data={data} options={options}/>
                    </div>
                </div>
            </div>
        </>
    );
}
