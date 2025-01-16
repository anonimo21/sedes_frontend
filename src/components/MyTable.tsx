import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from '@mui/material';

type ListadoSedesProps = {
    sedes: Sede[];
    fetchSedes: () => void
}

function ListadoSedes({ sedes, fetchSedes }: ListadoSedesProps) {

    fetchSedes();

    return (
        <TableContainer component={Paper}>
            <Typography variant="h4" align="center" gutterBottom>
                Listado de Sedes
            </Typography>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Code</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Foto</TableCell>
                        <TableCell>CreationDate</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {sedes.map((sede) => (
                        <TableRow key={sede.code}>
                            <TableCell>{sede.code}</TableCell>
                            <TableCell>{sede.name}</TableCell>
                            <TableCell><img src={sede.foto} alt="Mi Imagen" width={100} /></TableCell>
                            <TableCell>{sede.creationDate}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )

}

export default ListadoSedes
