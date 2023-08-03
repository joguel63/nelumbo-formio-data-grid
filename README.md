# Formio-data-grid

## Descripción

Formio-data-grid es una librería que permite utilizar Formio para crear DataGrids de Material-UI (MUI) de manera sencilla.

## Instalación

Puedes instalar la librería a través de npm o yarn:

```bash
npm install @joguel63/formio-data-grid
```

o

```bash
yarn add @joguel63/formio-data-grid
```

##Uso

Para utilizar la librería, solo necesitas tener un JSON de Formio. Aquí tienes un ejemplo de cómo puedes utilizarla:

```jsx
import { TableProvider } from '@joguel63/formio-data-grid';

function Example() {
  const rows = [...]; // Array de datos
  const formioColumns = [...]; // Columnas obtenidas de una API

  const columnsComponents = {
    ActionsComponent: ActionButtonsComponent,
    CheckComponent: CheckComponent,
  };

  return (
    <TableProvider
      rows={rows}
      columns={formioColumns}
      tableProps={{ getRowId: (row) => row.name, autoHeight: true }}
      columnsComponents={columnsComponents}
    />
  );
}
```

También puedes personalizar los DataGrids de la siguiente manera:

```jsx
import { TableProvider } from '@joguel63/formio-data-grid';
import { DataGrid } from '@mui/x-data-grid';

function Example() {
  const rows = [...]; // Array de datos
  const formioColumns = [...]; // Columnas obtenidas de una API

  const columnsComponents = {
    ActionsComponent: ActionButtonsComponent,
    CheckComponent: CheckComponent,
  };

  return (
    <TableProvider
      rows={rows}
      columns={formioColumns}
      tableProps={{ getRowId: (row) => row.name, autoHeight: true }}
      columnsComponents={columnsComponents}
      CustomGrid={({ rows, columns }) => <DataGrid rows={rows} columns={columns} />}
    />
  );
}
```

Recuerda ajustar rows, formioColumns y los componentes según tus necesidades.
