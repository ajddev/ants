export const userColumns = [
  {
    field: "id",
    headerName: "ID",
    width: 70,
  },
  {
    field: "user",
    headerName: "User",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cell-with-img">
          <img className="cell-img" src={params.row.img} alt="avatar" />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "email",
    headerName: "Email",
    width: 230,
  },
  {
    field: "age",
    headerName: "Age",
    width: 100,
  },
  {
    field: "status",
    headerName: "Status",
    width: 160,
    renderCell: (params) => {
      return (
        <div className={`cell-with-status ${params.row.status}`}>
          {params.row.status}
        </div>
      );
    },
  },
];

// temp data

export const userRows = [
  {
    id: 1,
    username: "Ron",
    img: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    status: "active",
    email: "1ronw@gmail.com",
    age: 35,
  },
  {
    id: 2,
    username: "Jamie",
    img: "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    status: "active",
    email: "jamielynn1@gmail.com",
    age: 30,
  },
  {
    id: 3,
    username: "Tara",
    img: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    status: "passive",
    email: "tarasholtz@gmail.com",
    age: 19,
  },
  {
    id: 4,
    username: "Frank",
    img: "https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    status: "pending",
    email: "fds3@gmail.com",
    age: 26,
  },
];
