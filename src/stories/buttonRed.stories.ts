import type { Meta, StoryObj } from "@storybook/react";
import { ButtonRed } from "../components/buttonRed/buttonRed";

const meta: Meta<typeof ButtonRed> = {
    component: ButtonRed
}
type Story = StoryObj<typeof ButtonRed>

export const Primary: Story = {
    args: {
        textButton: 'BOTON 1',
        size:'medium',
        Icon: undefined,
        backgroundColor: 'red',
        border: 'square',
        onClick: ()=>{}, 
        className: ''
    }
}

export default meta;