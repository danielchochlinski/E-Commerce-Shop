import "./userList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { userRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../redux/apiCalls";

export default function UserList() {
  const [data, setData] = useState(userRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const users = useSelector((state) => state.user.Users);
  const dispatch = useDispatch();

  //  const handleDelete = (id) => {
  //   //  deleteUser(id, dispatch);
  //  };

  useEffect(() => {
    getUsers(dispatch);
  }, [dispatch]);

  console.log(users);

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "user",
      headerName: "User",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            <img
              className="userListImg"
              src={
                params.row.img ||
                "data:image/png;base64,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"
              }
              alt=""
            />
            {params.row.username}
          </div>
        );
      },
    },
    { field: "email", headerName: "Email", width: 200 },
    {
      field: "status",
      headerName: "Status",
      width: 120,
    },
    {
      field: "transaction",
      headerName: "Transaction Volume",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/user/" + params.row._id}>
              <button className="userListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="userListDelete"
              onClick={() => handleDelete(params.row._id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="userList">
      <DataGrid
        rows={users}
        disableSelectionOnClick
        getRowId={(row) => row._id}
        columns={columns}
        pageSize={8}
        checkboxSelection
      />
    </div>
  );
}
