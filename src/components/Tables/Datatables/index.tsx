import { useContextServers } from '../../../context/servers';
import './styles.css';


function Datatables() {
  const { servers, handleChangeChecked, OrderBy } = useContextServers();

  return (
    <table className="table-databases">
      <thead> 
        <tr>
          <th onClick={() => OrderBy('select')}>Select</th>
          <th onClick={() => OrderBy('hostname')}>Hostname</th>
          <th onClick={() => OrderBy('memory')}>Memória</th>
          <th onClick={() => OrderBy('vcpus')}>vCPUs</th>
          <th onClick={() => OrderBy('disk')}>Disco</th>
          <th onClick={() => OrderBy('ip')}>IP</th>
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