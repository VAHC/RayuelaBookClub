import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
    getAllUsers,
    deleteUser,
    filterProfileUser,
    filterStateUser,
    updateUser,
} from "../../redux/action";
import swal from 'sweetalert';

const Users = () => {
    const allUsers = useSelector((state) => state.allUsers);

    const filteredUsers = useSelector((state) => state.filteredUsers);
    const [filtersValue, setFiltersValues] = useState({
        profile: "",
        state: "",
        suscribed: ""
    });

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllUsers());
        //console.log("se hace el dispatch para buscar allBooks");
    }, []);

    useEffect(() => {
        if (filtersValue.profile)
            dispatch(filterProfileUser(filtersValue.profile));
    }, [filtersValue.profile]);

    useEffect(() => {
        if (filtersValue.state) dispatch(filterStateUser(filtersValue.state));
    }, [filtersValue.state]);

    const deleteButtonHandler = async (user) => {
        //console.log("Estoy modificando el deleted de este User: " + user.id);
        await deleteUser(user, dispatch);
        dispatch(getAllUsers());
    };

    const updateButtonHandler = async (user) => {
        //console.log("Estoy modificando el profile de este User: " + user.profile + user.id);
        
        //await updateUser(user,dispatch);
        dispatch(updateUser(user))
        .then((response) => {
            if (response.status !== 400) {
            } else swal({
                title: "Algo salió mal",
                icon: "error",
                timer: "2500"
            })
        })
        .catch((error) => {
            console.log(error)
            swal({
                title: "Algo salió mal",
                icon: "error",
                timer: "2500"
            })
        })
        dispatch(getAllUsers());
    };

    const filterHandler = (event) => {
        if (event.target.name === "state") {
            setFiltersValues({
                ...filtersValue,
                state: event.target.value,
            });
        } else if(event.target.name === "suscribed"){
            setFiltersValues({
                ...filtersValue,
                suscribed: event.target.value,
            });
        } else{
            setFiltersValues({
                ...filtersValue,
                profile: event.target.value,
            });
        }
    };

    const usersFilterdOrdered = filteredUsers.sort((a, b) =>
    a.id < b.id ? 1 : -1
)

    const usersMap = usersFilterdOrdered.map((user, index) => {
        
        const userprofileCOnditional= ()=>{if (user.profile==="usuario") return "admin"
        else{
            return "usuario"
        }}

        
        // Filtro por perfil
        if (
            filtersValue.profile &&
            filtersValue.profile !== "All" &&
            filtersValue.profile !== user.profile
          ) {
            return null;
          }
        
          // Filtro por suscripción
          if (
            filtersValue.suscribed &&
            filtersValue.suscribed !== "All" &&
            filtersValue.suscribed !== (user.suscribed ? "Yes" : "No")
          ) {
            return null;
          }
        
          // Filtro por estado
          if (
            filtersValue.state &&
            filtersValue.state !== "All" &&
            filtersValue.state !== user.state
          ) {
            return null;
          }

        const getStateLabel = (state) => {
            switch (state) {
              case "Active":
                return "Activo";
              case "Inactive":
                return "Inactivo";
              case "New":
                return "Nuevo";
              case "Blocked":
                return "Bloqueado";
              default:
                return "";
            }
        };
          
        
        return (
            <tr key={index}>
                <td>{user.id}</td>
                <td>{user.profile === "usuario" ? "Usuario" : "Administrador"}</td>
                <td>{user.firstName + " " + user.lastName}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{user.suscribed === true ? "Sí" : "No"}</td>
                {/* <td>{String(user.state)}</td> */}
                <td>{getStateLabel(user.state)}</td>
                <td>
                    {" "}
                    <Button
                        onClick={() => deleteButtonHandler(user)}
                        variant={user.deleted ? "success my-1" : "danger my-1"}
                    >
                        {user.deleted ? "Habilitar" : "Deshabilitar"}
                    </Button>
                    <br />
                    <Button
                        onClick={() => updateButtonHandler({...user, profile:userprofileCOnditional()})}
                        variant={
                            user.profile === "usuario" ? "success" : "danger"
                        }
                    >
                        {user.profile === "usuario"
                            ? "Cambiar a perfil de admin"
                            : "Cambiar a perfil de usuario"}
                    </Button>
                </td>
            </tr>
        );
    });

    return (
        <Container>
            <Row>
                <Col>
                    <h1>Gestión de Usuarios</h1>
                    <p>
                        En este panel podrás ver el listado completo de todos
                        los usuarios, editar su perfil, y habilitarlos o
                        deshabilitarlos.
                    </p>
                </Col>
            </Row>
            <Row>
                <Col>
                    {" "}
                    <h6 className="mx-2">Filtrar por perfil</h6>
                    <div className="m-1 mb-3">
                        <select
                            className="form-select"
                            //value={filtersValue.profile}
                            onChange={(e) => filterHandler(e)}
                            defaultValue={"All"}
                            name={"profile"}
                        >
                            <option value="All">Todos</option>
                            <option value="admin">Administrador</option>
                            <option value="usuario">Usuario</option>
                        </select>
                    </div>
                </Col>{" "}
                <Col>
                    <div className="m-1">
                        <h6 className="mx-2">Filtrar por suscripción</h6>
                        <select
                            className="form-select"
                            onChange={(e) => filterHandler(e)}
                            defaultValue={"All"}
                            name={"suscribed"}
                        >
                            <option value="All">Todos</option>
                            <option value="Yes">Suscriptos</option>
                            <option value="No">No suscriptos</option>
                        </select>
                    </div>
                </Col>
                <Col>
                    <div className="m-1">
                        <h6 className="mx-2">Filtrar por estado</h6>
                        <select
                            className="form-select"
                            //value={filtersValue.state}
                            onChange={(e) => filterHandler(e)}
                            defaultValue={"All"}
                            name={"state"}
                        >
                            <option value="All">Todos</option>
                            <option value="Active">Activos</option>
                            <option value="Inactive">Inactivos</option>
                            <option value="New">Nuevos</option>
                            <option value="Blocked">Bloqueados</option>
                        </select>
                    </div>
                </Col>
            </Row>

            <Row>
                <Col>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>#Id</th>
                                <th>Perfil</th>
                                <th>Nombre</th>
                                <th>Correo electrónico</th>
                                <th>Teléfono</th>
                                <th>Suscripto/a</th>
                                <th>Estado</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>{usersMap}</tbody>
                    </Table>
                </Col>
            </Row>
        </Container>
    );
};

export default Users;
