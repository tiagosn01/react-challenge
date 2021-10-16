import { useContextServers } from '../../context/servers';
import './styles.css';


function Summary () {
  const { summary } = useContextServers();

  return (
    <div className="wrapper-summary-container">
      <div className="wrapper-summary">
        <div>Servidores Selecionados</div>
        <div>{`${summary.quantity} servidores selecionados`}</div>
      </div>
      <div className="wrapper-summary">
        <div>Total de Memória</div>
        <div>{`${summary.total_memory} GB`}</div>
      </div>
      <div className="wrapper-summary">
        <div>Total de CPUs</div>
        <div>{`${summary.total_cpus} vCPUs`}</div>
      </div>
      <div className="wrapper-summary">
        <div>Total de Discos</div>
        <div>{`${summary.total_disk} GB`}</div>
      </div>
    </div>
  );
}

export default Summary;