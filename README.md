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

## TableProviderProps

```markdown
| Prop              | Tipo                                                      | Valor por defecto | Descripción                                                  |
| ----------------- | --------------------------------------------------------- | ----------------- | ------------------------------------------------------------ |
| rows              | any[]                                                     | []                | Filas de datos para la tabla.                                |
| columns           | FormioColumns[] opcional                                  | []                | Matriz de definiciones de columnas.                          |
| columnsComponents | ColumnsComponents opcional                                | undefined         | Componentes para personalizar la representación de columnas. |
| tableProps        | DataGridProps opcional                                    | undefined         | Props para configurar el componente DataGrid subyacente.     |
| customGrid        | React.FC<{ rows: any[]; columns: GridColDef[] }> opcional | undefined         | Componente para personalización avanzada.                    |
```

## Columnnas

## Columna Simple

```json
{
  "label": "Nombre",
  "attrs": [
    { "attr": "field", "value": "name" },
    { "attr": "headerName", "value": "Nombre del Usuario" },
    { "attr": "flex", "value": "1" },
    { "attr": "type", "value": "string" }
  ],
  "content": ""
}
```

Descripción:

- **label**: El nombre de la columna, que puede ser utilizado en la interfaz de usuario para mostrar el título de la columna.
- **attrs**: Una matriz de objetos que contiene los atributos y valores asociados a la columna.
  - **attr**: El atributo que se va a modificar. Puede ser "field", "headerName", "flex" o "type".
  - **value**: El valor asignado al atributo correspondiente.
- **content**: En este caso, la columna simple no necesita un contenido específico, ya que obtendrá el valor directamente del atributo "field".

- **attr: "headerName"**: El nombre que se mostrará en la cabecera de la columna en la interfaz de usuario.
- **attr: "flex"**: Un número que representa el tamaño flexible de la columna en relación con otras columnas en una cuadrícula flexible.
- **attr: "type"**: El tipo de dato de la columna. Puede ser "string", "number", "date" u otro valor según tus necesidades. Esto puede influir en la forma en que se formatean y muestran los datos en la interfaz de usuario.

## Columna multiple

```json
{
  "label": "Dirección",
  "attrs": [
    { "attr": "headerName", "value": "Dirección" },
    { "attr": "flex", "value": "2" },
    { "attr": "type", "value": "string" }
  ],
  "content": "Número de calle: {{streetNumber}}, Ciudad: {{city}} en el país de {{country}}"
}
```

Descripción:

- **label**: El nombre de la columna, que puede ser utilizado en la interfaz de usuario para mostrar el título de la columna.
- **attrs**: Una matriz de objetos que contiene los atributos y valores asociados a la columna.
  - **attr**: El atributo que se va a modificar. Puede ser "content", "flex" o "type".
  - **value**: El valor asignado al atributo correspondiente.
- **content**: En este caso, la columna múltiple obtendrá los valores que conforman la columna directamente del campo "content". Los valores dentro de `{{}}` se sustituirán por los valores reales correspondientes en los datos.

Este enfoque es útil cuando deseas crear una columna que combine varios valores de los datos en un formato personalizado.

## Columna de Fecha

```json
{
  "label": "Fecha de Inicio",
  "attrs": [
    { "attr": "headerName", "value": "Fecha de Inicio" },
    { "attr": "flex", "value": "1" },
    { "attr": "type", "value": "date" }
  ],
  "content": "startDate,DD/MM/YYYY"
}
```

Descripción:

- **label**: El nombre de la columna, que puede ser utilizado en la interfaz de usuario para mostrar el título de la columna.
- **attrs**: Una matriz de objetos que contiene los atributos y valores asociados a la columna.
  - **attr**: El atributo que se va a modificar. Puede ser "content", "flex" o "type".
  - **value**: El valor asignado al atributo correspondiente.
- **content**: En este caso, la columna de fecha obtendrá la clave del campo de la fecha de inicio ("startDate") y el formato de fecha ("DD/MM/YYYY") separados por una coma. Si no se proporciona un formato, se usará el formato por defecto "DD/MM/YYYY".

Este enfoque permite configurar fácilmente la forma en que se muestra una fecha específica en la columna, con la opción de personalizar el formato si es necesario.

## Columna Dinero

```json
{
  "label": "Precio",
  "attrs": [
    { "attr": "headerName", "value": "Precio" },
    { "attr": "flex", "value": "1" },
    { "attr": "type", "value": "money" }
  ],
  "content": "price,USD"
}
```

Descripción:

- **label**: El nombre de la columna, que puede ser utilizado en la interfaz de usuario para mostrar el título de la columna.
- **attrs**: Una matriz de objetos que contiene los atributos y valores asociados a la columna.
  - **attr**: El atributo que se va a modificar. Puede ser "content", "flex" o "type".
  - **value**: El valor asignado al atributo correspondiente.
- **content**: En este caso, la columna de dinero obtendrá la clave del campo del precio ("price") y la moneda ("USD") separados por una coma. Si no se proporciona una moneda, se usará la moneda por defecto "USD".

Este enfoque te permite mostrar los valores de dinero en la columna con la moneda correspondiente, y tienes la opción de personalizar la moneda si es necesario.

## Columna de Verificacion (check)

```json
{
  "label": "Verificación",
  "attrs": [
    { "attr": "headerName", "value": "Verificacion" },
    { "attr": "flex", "value": "1" },
    { "attr": "type", "value": "check" }
  ],
  "content": "isChecked"
}
```

Descripción:

- **label**: El nombre de la columna, que puede ser utilizado en la interfaz de usuario para mostrar el título de la columna.
- **attrs**: Una matriz de objetos que contiene los atributos y valores asociados a la columna.
  - **attr**: El atributo que se va a modificar. Puede ser "content", "flex" o "type".
  - **value**: El valor asignado al atributo correspondiente.
- **content**: En este caso, la columna de verificación (check) obtendrá la clave del campo de verificación ("isChecked") del contenido de la celda.

Para esta columna en particular, se necesita un componente personalizado para cambiar el valor booleano de algún ítem dentro de los datos.

## columna multilinea:

```json
{
  "label": "Detalles",
  "attrs": [
    { "attr": "headerName", "value": "Detalles" },
    { "attr": "flex", "value": "2" },
    { "attr": "type", "value": "multiline" }
  ],
  "content": "name,age,city"
}
```

Descripción:

- **label**: El nombre de la columna, que puede ser utilizado en la interfaz de usuario para mostrar el título de la columna.
- **attrs**: Una matriz de objetos que contiene los atributos y valores asociados a la columna.
  - **attr**: El atributo que se va a modificar. Puede ser "content", "flex" o "type".
  - **value**: El valor asignado al atributo correspondiente.
- **content**: En este caso, la columna multilinea obtendrá las claves de los campos a mostrar ("name", "age", "city") del contenido de la celda, separados por comas.

Para esta columna en particular, se necesita un componente personalizado que acepte `row` y `rowItems` como propiedades y muestre los valores correspondientes en el formato deseado.

## columna de acciones:

```json
{
  "label": "Acciones",
  "attrs": [
    { "attr": "headerName", "value": "Acciones" },
    { "attr": "flex", "value": "1" },
    { "attr": "type", "value": "actions" }
  ],
  "content": "ver,editar,eliminar"
}
```

Descripción:

- **label**: El nombre de la columna, que puede ser utilizado en la interfaz de usuario para mostrar el título de la columna.
- **attrs**: Una matriz de objetos que contiene los atributos y valores asociados a la columna.
  - **attr**: El atributo que se va a modificar. Puede ser "content", "flex" o "type".
  - **value**: El valor asignado al atributo correspondiente.
- **content**: En este caso, la columna de acciones obtendrá las claves de las acciones disponibles ("ver", "editar", "eliminar") del contenido de la celda, separadas por comas.

Para esta columna en particular, necesitarás implementar un componente personalizado que acepte `row` y `rowItems` como propiedades y muestre las acciones correspondientes según los valores presentes en el campo "content". Dependiendo de si "ver", "editar" o "eliminar" están presentes en el arreglo `rowItems`, tu componente podría mostrar los iconos o enlaces correspondientes para cada acción.

### Enviando componentes para las columnas especiales

En situaciones en las que las columnas necesiten representar componentes personalizados, estos componentes se transmitirán a través de la propiedad 'columnsComponents' del proveedor de tabla. Esta propiedad acepta un objeto con las siguientes opciones:

```jsx
{
  ActionsComponent?: React.FC<{ row: Trow; rowItems: Array<string> }>;
  MultilineComponent?: React.FC<{ row: Trow; rowItems: Array<string> }>;
  CheckComponent?: React.FC<{ row: Trow; rowItems: Array<string> }>;
}
```

- **ActionsComponent**: Un componente funcional de React que recibe las propiedades `row` (la fila seleccionada) y `rowItems` (un array de cadenas que contiene las claves de las acciones que se pueden realizar en la tabla). Este componente se utiliza para renderizar las acciones en la columna de acciones.

- **MultilineComponent**: Un componente funcional de React que recibe las propiedades `row` (la fila seleccionada) y `rowItems` (un array de cadenas que contiene las claves de los elementos a mostrar en la columna multilinea). Este componente se utiliza para mostrar contenido en formato multilinea en la columna.

- **CheckComponent**: Un componente funcional de React que recibe las propiedades `row` (la fila seleccionada) y `rowItems` (un array de cadenas que contiene las claves de los elementos para usar en la columna de verificación). Este componente se utiliza para cambiar el valor booleano de algún elemento dentro de los datos.

Estos componentes personalizados permiten adaptar la apariencia y funcionalidad de las columnas a las necesidades específicas de la aplicación. Cada componente se ajusta a su respectiva columna y recibe las propiedades necesarias para interactuar con los datos de manera efectiva."

## Tipos

### Attribute

```ts
type Attribute = {
  attr: string;
  value: string;
};
```

### TableComponentProps

```ts
type TableComponentProps<Trow = any> = {
  row: Trow;
  rowItems: Array<string>;
};
```

### ColumnsComponents

```ts
type ColumnsComponents = {
  ActionsComponent?: React.FC<TableComponentProps>;
  MultilineComponent?: React.FC<TableComponentProps>;
  CheckComponent?: React.FC<TableComponentProps>;
};
```

### FormioColumns

```ts
type FormioColumns = {
  label: string;
  attrs: Attribute[];
  content: string;
};
```

### TableContextType

```ts
type TableContextType<Trow = Object> = {
  rows: Array<Trow>;
  setRows: React.Dispatch<Array<Trow>>;
};
```

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
