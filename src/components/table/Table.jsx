import "./index.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const List = () => {
  const rows = [
    {
      id: 112984,
      title: "Links do not open on single page",
      image: "https://i.imgur.com/mmuZqcQ.jpeg",
      user: "John Smith",
      date: "25 December",
      priority: "1",
      category: "Mobile",
      status: "Done",
    },
    {
      id: 112985,
      title: "Can not delete users",
      image: "https://i.imgur.com/3YnMSAt.png",
      user: "Jane Doe",
      date: "1 March",
      priority: "2",
      category: "Desktop",
      status: "Pending",
    },
    {
      id: 112986,
      title: "Display error on mobile dashboard",
      image: "https://i.imgur.com/4rnu8dP.jpeg",
      user: "Matt Walsh",
      date: "27 May",
      priority: "4",
      category: "Mobile",
      status: "Not Yet Started",
    },
    {
      id: 112988,
      title: "Icons do not appear on hover",
      image: "https://i.imgur.com/InOAs2h.png",
      user: "Ben Dover",
      date: "4 April",
      priority: "5",
      category: "Desktop",
      status: "In Progress",
    },
  ];

  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="table-cell">Tracking ID</TableCell>
            <TableCell className="table-cell">Ticket</TableCell>
            <TableCell className="table-cell">User</TableCell>
            <TableCell className="table-cell">Date</TableCell>
            <TableCell className="table-cell">Priority</TableCell>
            <TableCell className="table-cell">Category</TableCell>
            <TableCell className="table-cell">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="table-cell">{row.id}</TableCell>
              <TableCell className="table-cell">
                <div className="cell-wrapper">
                  <img src={row.image} alt="" className="image" />
                  {row.title}
                </div>
              </TableCell>
              <TableCell className="table-cell">{row.user}</TableCell>
              <TableCell className="table-cell">{row.date}</TableCell>
              <TableCell className="table-cell">{row.priority}</TableCell>
              <TableCell className="table-cell">{row.category}</TableCell>
              <TableCell className="table-cell">
                <span className={`status ${row.status.split(" ").join("")}`}>
                  {row.status}
                </span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;
