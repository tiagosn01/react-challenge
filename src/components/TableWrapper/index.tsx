import { ReactNode } from 'react';
import './styles.css';

interface TableWrapperProps {
  header: string;
  children: ReactNode;
}

function TableWrapper ({header, children}: TableWrapperProps) {
  return (
    <div className="container-wrapper">
      <header className="table-header">{header}</header>
      <div className="table-body">
        {children}
      </div>
    </div>
  );
}

export default TableWrapper;