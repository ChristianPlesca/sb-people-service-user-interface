import { useEffect } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../../actions";
import { Table, Jumbotron } from "react-bootstrap";

const ListUsers = (props) => {
  useEffect(() => {
    props.fetchUsers();
  }, []);

  const renderList = () => {
    return props.users.results.map((user) => {
      return (
        <tr>
          <td>{user.id}</td>
          <td>{user.firstName}</td>
          <td>{user.lastName}</td>
          <td>{user.dateOfBirth}</td>
          <td>{user.countryCode}</td>
        </tr>
      ); 
    });
  };

  console.log(props.users.results);
  return (
    <div className="container" style={{ marginTop: "200px" }}>
      <Jumbotron>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Date of Birth</th>
              <th>Country Code</th>
            </tr>
          </thead>
          <tbody>{renderList()}</tbody>
        </Table>
      </Jumbotron>
    </div>
  );
};

const mapStateToProps = (state) => ({
  users: state.users,
});

export default connect(mapStateToProps, { fetchUsers })(ListUsers);
