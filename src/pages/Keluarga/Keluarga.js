import TableCard from 'components/TableCard';
import ViewButton from 'components/ViewBtn';
import EditButton from 'components/EditBtn';
import DeleteButton from 'components/DeleteBtn';
import AddDataButton from 'components/AddDataButton';

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
        name: "no_kk", // key di data
        label: "Nomor KK",
        options: {
            filter: false,
            sort: true,
        }
    },
    {
        name: "kepala", // key di data
        label: "Kepala Keluarga",
        options: {
            filter: false,
            sort: true,
        }
    },
    {
        name: "anggota", // key di data
        label: "Jumlah Anggota Keluarga",
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
                        <ViewButton link={`/lihatkeluarga/${meta.rowData[1]}`}/>
                        <EditButton link={`Diedit ${meta.rowData[1]}`} />
                        <DeleteButton link={`Dihapus ${meta.rowData[1]}`} />
                    </div>
                );

            }
        }
    },
];

const data = [
    { no_kk: "755480337", kepala: "James Bond",         anggota: 3 },
    { no_kk: "736377362", kepala: "Tony Stark",         anggota: 6 },
    { no_kk: "821366640", kepala: "Thomas Shelby",      anggota: 4 },
    { no_kk: "121346640", kepala: "Jack Sparrow",       anggota: 2 },
    { no_kk: "441366640", kepala: "Uzumaki Naruto",     anggota: 2 },
    { no_kk: "632949221", kepala: "Deo Alif",           anggota: 2 },
    { no_kk: "250138869", kepala: "Ezra Kornel",        anggota: 2 },
    { no_kk: "798240165", kepala: "Aulia",              anggota: 2 },
    { no_kk: "319929127", kepala: "Rey",                anggota: 2 },
    { no_kk: "181064900", kepala: "Markus Togi",        anggota: 2 },
    { no_kk: "953393053", kepala: "Ackyra Anugerah",    anggota: 2 },
    { no_kk: "164789075", kepala: "Muhammad Ikhbal",    anggota: 2 },
    { no_kk: "253072431", kepala: "Steven",             anggota: 2 },
    { no_kk: "912900726", kepala: "Albert",             anggota: 2 },
    { no_kk: "296861513", kepala: "Jack Sklingington",  anggota: 2 },
    { no_kk: "417261301", kepala: "Andy Bersie",        anggota: 2 },
    { no_kk: "770013456", kepala: "John Wick",          anggota: 2 },
    { no_kk: "309961697", kepala: "Gerald",             anggota: 2 },
    { no_kk: "854743566", kepala: "Johnny Depp",        anggota: 2 },
    { no_kk: "937626074", kepala: "Cillian Murphy",     anggota: 2 },
    { no_kk: "667220067", kepala: "Siapa",              anggota: 2 },
    { no_kk: "172901837", kepala: "Milku",              anggota: 2 },
    { no_kk: "418128643", kepala: "Anggota",            anggota: 2 },
];

const options = {
    filterType: 'multiselect',
    viewColumns: false,
};

export default function Keluarga() {
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
                            <AddDataButton link="/tambahkeluarga" />
                        </div>
                        <TableCard title="Data Kartu Keluarga" columns={columns} data={data} options={options}/>
                    </div>
                </div>
            </div>
        </>
    );
}
