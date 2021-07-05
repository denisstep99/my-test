import React from 'react';
import StoryRouter from 'storybook-react-router';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import {MainMenu} from "../../common.components/MainMenu/MainMenu";
import {MainMenuItem} from "../../common.components/MainMenu/MenuItem/MainMenuItem";

export default {
    title: 'Example/MainMenu',
    component: MainMenu,
    argTypes: {
        children: []
    },
    decorators: [StoryRouter()]
} as ComponentMeta<typeof MainMenu>;

const Template: ComponentStory<typeof MainMenu> = (args) => <MainMenu {...args} />;

export const Default = Template.bind({});
Default.args = {
    children: [
        <MainMenuItem key={1} title={'Основное'} link={'/1'} exact/>,
        <MainMenuItem key={2} title={'Администрирование'} link={'/2'} exact/>,
        <MainMenuItem key={3} title={'Словари'} link={'/3'} exact/>
    ],
    user: {
        userRole: "Admin",
        username: "Denis"
    },
    logoutLink: '/logout',
};

export const HideLoginControls = Template.bind({});
HideLoginControls.args = {
    children: [
        <MainMenuItem key={1} title={'Основное'} link={'/1'} exact/>,
        <MainMenuItem key={2} title={'Администрирование'} link={'/2'} exact/>,
        <MainMenuItem key={3} title={'Словари'} link={'/3'} exact/>
    ],
    user: {
        userRole: "Admin",
        username: "Denis"
    },
    logoutLink: '/logout',
    userPanelHidden: true,
};