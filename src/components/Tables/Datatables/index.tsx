import { useContextServers } from '../../../context/servers';
import './styles.css';


function Datatables() {
  const { servers, handleChangeChecked } = useContextServers();

  return (
    <table className="table-databases">
      <thead> 
        <tr>
          <th>Select</th>
          <th>Hostname</th>
          <th>Memória</th>
          <th>vCPUs</th>
          <th>Disco</th>
          <th>IP</th>
        </tr>
      </thead>
      <tbody>
        {servers?.map((server) => (
          <tr key={server.id_vm}>
            <td><input type="checkbox" checked={server.checked} onClick={() => handleChangeChecked(server)} /></td>
            <td>{server.hostname}</td>
            <td>{`${server.configuracao.memoryProvisioned} GB`}</td>
            <td>{`${server.configuracao.cpuProvisioned} vCPUs`}</td>
            <td>{`${server.configuracao.totalDiskGB} GB`}</td>
            <td>{server.ip}</td>
        </tr>
        ))}
       
      </tbody>
    </table>
  );
}

export default Datatables;