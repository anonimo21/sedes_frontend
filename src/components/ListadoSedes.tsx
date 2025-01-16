type ListadoSedesProps = {
    sedes: Sede[];
    fetchSedes: () => void
}

function ListadoSedes({ sedes, fetchSedes }: ListadoSedesProps) {

    fetchSedes();

    return (
        <>
            <div className="container">

                <h1 className="center" style={{ textAlign: "center" }}>Listado de Sedes</h1>

                <hr />

                <table className="table table-striped">
                    <thead>
                        <tr className="table-primary">
                            <th scope="col">Code</th>
                            <th scope="col">Name</th>
                            <th scope="col">Foto</th>
                            <th scope="col">CreationDate</th>
                        </tr>
                    </thead>
                    <tbody>
                        {sedes.map((sede) => (
                            <tr key={sede.code}>
                                <td>{sede.code}</td>
                                <td>{sede.name}</td>
                                <td><img src={sede.foto} alt="Mi Imagen" width={100} /></td>
                                <td>{sede.creationDate}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )

}

export default ListadoSedes
