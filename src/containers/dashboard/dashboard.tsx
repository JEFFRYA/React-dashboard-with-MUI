import React, { useState } from "react";
import MaterialTable, { Column } from "material-table";


type Customer = {
    id: number;
    name: string;
    surname: string;
    year: number;
    city: number;
    // Agrega más campos según tus datos
  };

function Dashboard() {

  const [selectedRow, setSelectedRow] = useState<Customer | null>(null);

  const columns: Column<Customer>[] = [
    { title: 'Name', field: 'name', lookup: { 'Jeffry': 'Jeffry', 'Alexander': 'Alexander' }, },
    { title: 'Surname', field: 'surname', lookup: { 'Acosta': 'Acosta', 'Angulo': 'Angulo' }, },
    { title: 'Year', field: 'year', lookup: { 1987: '1987', 2017: '2017' }, },
    { title: 'City', field: 'city', lookup: { 34: 'Managua', 63: 'Masaya' }, },
  ];

  const data: Customer[] = [
    { id: 1, name: 'Jeffry', surname: 'Acosta', year: 1987, city: 63 },
    { id: 2, name: 'Alexander', surname: 'Angulo', year: 2017, city: 34 },
  ];
    
    return(
      <>
        <MaterialTable
          title=""
          columns={columns}
          data={data}
          options={{
            selection: false, // Evita la selección múltiple
            search: false, // Oculta la barra de búsqueda
            sorting: false, // Desactiva la ordenación
            header: true, // Oculta el encabezado
            filtering: true
          }}
          onRowClick={(event, rowData) => {
            if (selectedRow) {
              // Si ya hay una fila seleccionada, deselecciónala
              setSelectedRow(null);
            } else {
              // Si no hay una fila seleccionada, selecciona la actual
              setSelectedRow(rowData as Customer);
            }
          }}
          actions={[
            {
              icon: "check",
              tooltip: "Seleccionar",
              onClick: (event, rowData) => {
                if (rowData) {
                  const selectedCustomer = rowData as Customer;
                  console.log("ID del cliente seleccionado:", selectedCustomer.id);
                }
              },
            },
          ]}
        />
      </>
    )
}

export default Dashboard;