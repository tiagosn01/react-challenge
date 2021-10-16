import { useEffect } from 'react';
import DefaultLayout from '../../components/DefaultLayout';
import Summary from '../../components/Summary';
import Datatables from '../../components/Tables/Datatables';
import TableWrapper from '../../components/TableWrapper';
import { ServerProps } from '../../../@types/entities'; 
import api from '../../services/api';
import { useContextServers } from '../../context/servers';



function Home() {
  const { handleSetServers } = useContextServers();

  
  useEffect(() => {
    async function loadServers() {
      const { data } = await api.get('/servers');
     
      const includeSelectsToResponse = (data as ServerProps[])?.map((server) => {
       
        return {
          ...server,
          checked: false,
        }
      })
      handleSetServers(includeSelectsToResponse);
    } 
    loadServers()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <DefaultLayout>
     <TableWrapper header="Sumário dos recursos dos servidores">
       <Summary  />
     </TableWrapper>
     <TableWrapper header="Tabela de servidores">
       <Datatables  />
     </TableWrapper>
    </DefaultLayout>
  );
}

export default Home;