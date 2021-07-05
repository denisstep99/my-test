import React from 'react';
import StoryRouter from 'storybook-react-router';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import {NavigationInfoBlock} from "../../common.components/NavigationInfoBlock/NavigationInfoBlock";

export default {
    title: 'Example/NavigationInfoBlock',
    component: NavigationInfoBlock,
    argTypes: {},
    decorators: [StoryRouter()]
} as ComponentMeta<typeof NavigationInfoBlock>;

const Template: ComponentStory<typeof NavigationInfoBlock> = (args) => <NavigationInfoBlock {...args} />;

export const Default = Template.bind({});
Default.args = {
    currentSection: "Параметры оператора MVNO",
    breadCrumbs: [
        {label: "Основное"},
        {label: "default operator"}
    ],
};

export const Linked = Template.bind({});
Linked.args = {
    currentSection: "Параметры оператора MVNO",
    breadCrumbs: [
        {label: "Основное", link: "/"},
        {label: "default operator", link: "/2"}
    ],
};