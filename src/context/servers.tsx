import { createContext, ReactNode, useContext, useState } from "react";
import { ServerProps, SummaryProps } from "../../@types/entities";


interface ServerProviderProps {
  children: ReactNode;
}

interface ServerContextProps {
  summary: SummaryProps;
  servers: ServerProps[];
  handleChangeChecked: (value: ServerProps) => void;
  handleSetServers: (value: ServerProps[]) => void;
  OrderBy: (value: OrderByValues) => void;
}

export type OrderByValues = 'hostname' | 'memory' | 'vcpus' | 'disk' | 'ip' | 'select';


const inifialStateSummary = {
  quantity: 0,
  total_memory: 0,
  total_cpus: 0,
  total_disk: 0,
}

const ServerContext = createContext({} as ServerContextProps)

export function ServerProvider({ children }:ServerProviderProps) {
  const [summary, setSumary] = useState<SummaryProps>(inifialStateSummary);
  const [servers, setServers] = useState<ServerProps[]>([]);


  function handleSetServers(newServers: ServerProps[] ) {
    setServers(newServers)
  }

  function handleAddServerToSummary(server: ServerProps) {
    setSumary({
      quantity: summary.quantity + 1,
      total_memory: summary.total_memory + server.configuracao.memoryProvisioned,
      total_disk: summary.total_disk + server.configuracao.totalDiskGB,
      total_cpus: summary.total_cpus + server.configuracao.cpuProvisioned
    })
  }
  
  function handleDeleteServerToSummary(server: ServerProps) {
    setSumary({
      quantity: summary.quantity - 1,
      total_memory: summary.total_memory - server.configuracao.memoryProvisioned,
      total_disk: summary.total_disk - server.configuracao.totalDiskGB,
      total_cpus: summary.total_cpus - server.configuracao.cpuProvisioned
    })
  }

  function handleChangeChecked(server: ServerProps) {
    const indexServer = servers.findIndex((element) => element.id_vm === server.id_vm);

    const serversUpdate = [...servers];

    if(server.checked === false) {
      handleAddServerToSummary(server)
    } else {
      handleDeleteServerToSummary(server)
    }

    serversUpdate[indexServer].checked = !serversUpdate[indexServer].checked;
    
    setServers(serversUpdate);
  }

  function OrderBy(value : OrderByValues) {
    let orderedServers = [...servers]

    switch (value) {
      case 'hostname':     
        orderedServers = servers.sort((a, b) => (a.hostname >= b.hostname ? -1 : 1))
        setServers([...orderedServers])
        break;
      case 'memory':
        orderedServers = servers.sort((a, b) => (a.configuracao.memoryProvisioned >= b.configuracao.memoryProvisioned ? -1 : 1))
        setServers([...orderedServers]);
        break;
      case 'vcpus':
        orderedServers= servers.sort((a, b) => (a.configuracao.cpuProvisioned >= b.configuracao.cpuProvisioned ? -1 : 1))
        setServers([...orderedServers]);
        break;
      case 'disk':
        orderedServers = servers.sort((a, b) => (a.configuracao.totalDiskGB >= b.configuracao.totalDiskGB ? -1 : 1))
        setServers([...orderedServers]);
        break;
      case 'ip':
        orderedServers = servers.sort((a, b) => (a.ip >= b.ip ? -1 : 1))
        setServers([...orderedServers]);
        break;
        
        case 'select':
          orderedServers = servers.sort((a, b) => (a.checked >= b.checked ? -1 : 1))
        setServers([...orderedServers]);
        break;
    }
  }

  return (
    <ServerContext.Provider value={{ servers, summary, handleChangeChecked, handleSetServers, OrderBy }}>
      {children}
    </ServerContext.Provider>
  )
}

export function useContextServers() {
  const context = useContext(ServerContext);
  
  if (!context) {
    throw new Error('Error to provide an context server.');
  }
  return context;
}