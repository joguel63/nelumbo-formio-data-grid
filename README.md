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

## Uso

Para utilizar la librería, solo necesitas tener un JSON de Formio. Aquí tienes un ejemplo de cómo puedes utilizarla:

```jsx
import { TableProvider } from '@joguel63/formio-data-grid';

function Example() {
  const rows = [...]; // Array de datos
  const formioColumns = [...]; // Columnas obtenidas del API de formio

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

También puedes usar tu propio DataGrid de la siguiente manera:

```jsx
import { TableProvider } from '@joguel63/formio-data-grid';
import { MyDataGrid } from '../components';

function Example() {
  const rows = [...]; // Array de datos
  const formioColumns = [...]; // Columnas obtenidas del API de formio

  const columnsComponents = {
    ActionsComponent: ActionButtonsComponent,
    CheckComponent: CheckComponent,
  };

  return (
    <TableProvider
      rows={rows}
      columns={formioColumns}
      columnsComponents={columnsComponents}
      CustomGrid={({ rows, columns }) => <MyDataGrid rows={rows} columns={columns} disableHeaderCheckbox={true} />}
    />
  );
}
```

Recuerda ajustar rows, formioColumns y los componentes según tus necesidades.

# Formio-data-grid

## Description

Formio-data-grid is a library that facilitates the use of Formio for creating simple Material-UI (MUI) DataGrids.

## Installation

You can install the library via npm or yarn:

```bash
npm install @joguel63/formio-data-grid
```

or

```bash
yarn add @joguel63/formio-data-grid
```

## Usage

To utilize the library, you simply need to have a Formio JSON. Here's an example of how you can use it:

```jsx
import { TableProvider } from '@joguel63/formio-data-grid';

function Example() {
  const rows = [...]; // Data array
  const formioColumns = [...]; // Columns obtained from formio API

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

You can also use your custom DataGrid as follows:

```jsx
import { TableProvider } from '@joguel63/formio-data-grid';
import { MyDataGrid } from '../components';

function Example() {
  const rows = [...]; // Data array
  const formioColumns = [...]; // Columns obtained from formio API

  const columnsComponents = {
    ActionsComponent: ActionButtonsComponent,
    CheckComponent: CheckComponent,
  };

  return (
    <TableProvider
      rows={rows}
      columns={formioColumns}
      columnsComponents={columnsComponents}
      CustomGrid={({ rows, columns }) => <MyDataGrid rows={rows} columns={columns} disableHeaderCheckbox={true} />}
    />
  );
}
```

Remember to adjust `rows`, `formioColumns`, and the components according to your needs.
