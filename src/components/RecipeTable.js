import {
  useTable,
  useGlobalFilter,
  useSortBy,
  usePagination,
} from "react-table";
import { useMemo } from "react";
import { FaSearch, FaSortUp, FaSortDown } from "react-icons/fa";
import { useSelector } from "react-redux";

const generateData = ({ filteredRecipes }) =>
  filteredRecipes.map((item) => ({
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
          <button className="p-2 text-xs text-white bg-orange-500 rounded-lg hover:bg-orange-400">
            View More
          </button>
        </div>
      );
    },
    disableSortBy: true,
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
      className={`flex flex-row-reverse items-stretch w-full rounded-xl overflow-hidden bg-blue-200 shadow-[0_4px_10px_rgba(0,0,0,0.03)] ${className}`}
    >
      <input
        id={name}
        name={name}
        value={value}
        type={type}
        placeholder={label}
        aria-label={label}
        onChange={onChange}
        className={`peer block w-full p-3 text-gray focus:outline-none focus:ring-0 appearance-none bg-blue-200 ${
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
      decoration={<FaSearch size="1rem" className="text-gray-500" />}
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
    <div className="w-full min-w-[30rem]">
      <table
        {...getTableProps()}
        className="w-full border-separate border-spacing-y-2"
      >
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()} className="bg-blue-200">
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  className="py-2 pr-6 text-xs uppercase cursor-pointer first:rounded-tl-xl last:rounded-tr-xl pl-7"
                  style={{ width: column.width }}
                >
                  <div className="flex items-center gap-2">
                    <div className="font-bold">{column.render("Header")}</div>
                    {!column.disableSortBy && (
                      <div className="flex flex-col">
                        <FaSortUp
                          className={`text-sm translate-y-1/2 ${
                            column.isSorted && !column.isSortedDesc
                              ? "text-red-300"
                              : "text-white"
                          }`}
                        />
                        <FaSortDown
                          className={`text-sm -translate-y-1/2 ${
                            column.isSortedDesc ? "text-red-300" : "text-white"
                          }`}
                        />
                      </div>
                    )}
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
              <tr {...row.getRowProps()} className="bg-blue-200">
                {row.cells.map((cell) => {
                  return (
                    <td
                      {...cell.getCellProps()}
                      className="py-2 pr-6 text-sm font-normal first:rounded-l-xl last:rounded-r-xl pl-7"
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
  const { filteredRecipes } = useSelector((state) => state.recipes);

  const data = useMemo(
    () => generateData({ filteredRecipes }),
    [filteredRecipes]
  );
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
    <div className="flex flex-col sm:py-0">
      <Table />
    </div>
  );
}
