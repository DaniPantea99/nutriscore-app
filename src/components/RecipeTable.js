import {
  useTable,
  useGlobalFilter,
  useSortBy,
  usePagination,
} from "react-table";
import { useMemo } from "react";
import {
  FaSearch,
  FaSortUp,
  FaSortDown,
} from "react-icons/fa";

const list = [
  {
    recipeName: "Pilaf de orez",
    qty: "200g",
    date: "20/01/23",
  },
  {
    recipeName: "Ciorba",
    qty: "100g",
    date: "25/01/23",
  },
  {
    recipeName: "Fasole verde",
    qty: "500g",
    date: "26/01/23",
  },
  {
    recipeName: "Fasole cu ciolan",
    qty: "250g",
    date: "19/01/23",
  },
  {
    recipeName: "Sos",
    qty: "300g",
    date: "15/01/23",
  },
  {
    recipeName: "Salata de vinete",
    qty: "50g",
    date: "24/01/23",
  },
  {
    recipeName: "Meniu 1",
    qty: "370g",
    date: "11/01/23",
  },
]

const generateData = () =>
    list.map((item) => ({
    name: item.recipeName,
    qty: item.qty,
    date: item.date,
  }));
  
const getColumns = () => [
  {
    Header: "Name",
    accessor: "name",
  },
  {
    Header: "Quantity",
    accessor: "qty",
  },
  {
    Header: "Date",
    accessor: "date",
  },
  {
    Header: "Action",
    accessor: "action",
    Cell: () => {
      return (
        <div>
          <button className="p-2 text-xs text-white bg-orange-500 rounded-lg">View More</button>
        </div>
      );
    },
  },
];

function InputGroup7({
  label,
  name,
  value,
  onChange,
  type = "text",
  decoration,
  className = "",
  inputClassName = "",
  decorationClassName = "",
  disabled,
}) {
  return (
    <div
      className={`flex flex-row-reverse items-stretch w-full rounded-xl overflow-hidden bg-white shadow-[0_4px_10px_rgba(0,0,0,0.03)] ${className}`}
    >
      <input
        id={name}
        name={name}
        value={value}
        type={type}
        placeholder={label}
        aria-label={label}
        onChange={onChange}
        className={`peer block w-full p-3 text-gray-600 focus:outline-none focus:ring-0 appearance-none ${
          disabled ? "bg-gray-200" : ""
        } ${inputClassName}`}
        disabled={disabled}
      />
      <div
        className={`flex items-center pl-3 py-3 text-gray-600 ${
          disabled ? "bg-gray-200" : ""
        } ${decorationClassName}`}
      >
        {decoration}
      </div>
    </div>
  );
}

function GlobalSearchFilter1({
  globalFilter,
  setGlobalFilter,
  className = "",
}) {
  return (
    <InputGroup7
      name="search"
      value={globalFilter || ""}
      onChange={(e) => setGlobalFilter(e.target.value)}
      label="Search"
      decoration={<FaSearch size="1rem" className="text-gray-400" />}
      className={className}
    />
  );
}


function TableComponent({
  getTableProps,
  headerGroups,
  getTableBodyProps,
  rows,
  prepareRow,
}) {
  return (
    <div className="w-full min-w-[30rem] bg-gray-100 rounded-xl p-1">
      <table {...getTableProps()} className="w-full">
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th 
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  className="px-3 text-xs font-light uppercase cursor-pointer"
                  style={{ width: column.width }}
                >
                  <div className="flex items-center gap-2">
                    <div className="text-gray-600">
                      {column.render("Header")}
                    </div>
                    <div className="flex flex-col">
                      <FaSortUp
                        className={`text-sm translate-y-1/2 ${
                          column.isSorted && !column.isSortedDesc
                            ? "text-red-400"
                            : "text-gray-300"
                        }`}
                      />
                      <FaSortDown
                        className={`text-sm -translate-y-1/2 ${
                          column.isSortedDesc ? "text-red-400" : "text-gray-300"
                        }`}
                      />
                    </div>
                  </div>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} className="hover:bg-blue-200">
                {row.cells.map((cell) => {
                  return (
                    <td
                      {...cell.getCellProps()}
                      className="p-3 text-sm font-normal text-gray-700 first:rounded-l-lg last:rounded-r-lg"
                    >
                      {cell.render("Cell")}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

function Table() {
  const data = useMemo(() => generateData(), []);
  const columns = useMemo(getColumns, []);
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    state,
    setGlobalFilter,
    rows,
    } = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );
  return (
    <div className="flex flex-col gap-4 ">
      <div className="flex flex-col justify-between gap-2 sm:flex-row">
        <GlobalSearchFilter1
          className="sm:w-64"
          globalFilter={state.globalFilter}
          setGlobalFilter={setGlobalFilter}
        />
      </div>
      <TableComponent
        getTableProps={getTableProps}
        headerGroups={headerGroups}
        getTableBodyProps={getTableBodyProps}
        rows={rows}
        prepareRow={prepareRow}
      />
    </div>
  );
}

export default function TablePresentation() {
  return (
    <div className="flex flex-col py-4 sm:py-0">
      <Table />
    </div>
  );
}