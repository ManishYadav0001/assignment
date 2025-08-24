import type { Meta, StoryObj } from "@storybook/react";
import { DataTable, type Column } from "./Datatable";

// Sample type + data
interface User {
  id: number;
  name: string;
  age: number;
}

const sampleData: User[] = [
  { id: 1, name: "Manish", age: 22 },
  { id: 2, name: "Priya", age: 25 },
  { id: 3, name: "Amit", age: 30 },
];

const columns: Column<User>[] = [
  { key: "id", title: "ID", dataIndex: "id", sortable: true },
  { key: "name", title: "Name", dataIndex: "name", sortable: true },
  { key: "age", title: "Age", dataIndex: "age", sortable: true },
];

// 👇 Meta configuration
const meta = {
  title: "Components/DataTable",
  component: DataTable as any, // generic ke liye hack
  tags: ["autodocs"],
} satisfies Meta<typeof DataTable<any>>;

export default meta;
type Story = StoryObj<typeof meta>;

// 👇 Different use cases
export const Default: Story = {
  render: () => <DataTable<User> data={sampleData} columns={columns} />,
};

export const Selectable: Story = {
  render: () => (
    <DataTable<User>
      data={sampleData}
      columns={columns}
      selectable
      onRowSelect={(rows) => console.log("Selected:", rows)}
    />
  ),
};

export const Loading: Story = {
  render: () => <DataTable<User> data={[]} columns={columns} loading />,
};

export const Empty: Story = {
  render: () => <DataTable<User> data={[]} columns={columns} />,
};