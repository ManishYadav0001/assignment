import type { Meta, StoryObj } from "@storybook/react";
import { InputField } from "./inputField";

// 👇 Meta configuration
const meta: Meta<typeof InputField> = {
  title: "Components/InputField",
  component: InputField,
  tags: ["autodocs"], // Docs tab enable karega
  argTypes: {
    onChange: { action: "changed" }, // events panel me dikhega
    variant: { control: "radio", options: ["filled", "outlined", "ghost"] },
    size: { control: "radio", options: ["sm", "md", "lg"] },
    invalid: { control: "boolean" },
    disabled: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof InputField>;

// 👇 Different use cases
export const Default: Story = {
  args: {
    label: "Username",
    placeholder: "Enter username",
    helperText: "This is a helper text",
    variant: "outlined",
    size: "md",
  },
};

export const ErrorState: Story = {
  args: {
    label: "Email",
    placeholder: "Enter email",
    invalid: true,
    errorMessage: "Invalid email address",
  },
};

export const Disabled: Story = {
  args: {
    label: "Password",
    placeholder: "Enter password",
    disabled: true,
  },
};

export const PasswordToggle: Story = {
  args: {
    label: "Password",
    placeholder: "Enter password",
    type: "password",
  },
};