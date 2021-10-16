export interface ServerProps {
    id_vm: number;          
    tags: string[];
    tag_list: string;
    locks: string[];
    checked: boolean;
    ip: string;
    uor_responsavel: number;
    agendamentos: string | string | null;
    uor: {
        uor: number;
        nome_reduzido: string
    };
    ic: string | null;
    statusIc: string | null;
    hostname: string;
    id_virtualizador: number;
    configuracao: {
        ip: string;
        so: {
            full: string;
            name: string;
            major: string | null;
            minor: string | null;
            status: string;
            release: string | null
        };
        folder: number;
        puppet: boolean;
        uptime: number;
        cluster: string;
        hostname: string;
        cpuHotAdd: number;
        hwVersion: string;
        datacenter: string;
        powerState: string;
        so_release: string;
        totalDiskGB: number;
        conformidade: string[];
        memoryHotAdd: number;
        toolsVersion: string;
        virtualizador: string;
        cpuProvisioned: number;
        memoryProvisioned: number;
        pacotes_vulneraveis: string[];
        qtd_vulnerabilidades: number
    }

}

export interface SummaryProps {
    quantity: number;
    total_memory: number;
    total_cpus: number;
    total_disk: number;
}