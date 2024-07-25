import { useEffect, useState } from "react"
import axios from 'axios'


const Json_server = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    axios.get('http://localhost:3333/users')
    .then(res => setData(res.data))
    .catch(err => console.log(err))
  }, [])
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {data.map((d, i) => {
            return <tr key={i}>
              <td>{d.id}</td>
              <td>{d.name}</td>
              <td>{d.age}</td>
              </tr>
          })}
        </tbody>
      </table>
    </div>
  )
}

export default Json_server