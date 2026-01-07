import { Link } from "react-router"

const DeptRow = ({dept}) => {
  return (
    <>
      <tr>
        <td>{dept.deptno}</td>
        <td>
          <Link to={"/deptDetail/10"} className="btn btn-primary">
          {dept.dname}
          </Link>
        </td>
        <td>{dept.loc}</td>
      </tr>
    </>
  )
}

export default DeptRow
