import React from 'react';
import StoryRouter from 'storybook-react-router';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import {SideMenu} from "../../common.components/SideMenu/SideMenu";
import {SideMenuGroup} from "../../common.components/SideMenu/SideMenuGroup/SideMenuGroup";
import {SideMenuItem} from "../../common.components/SideMenu/SideMenuItem/SideMenuItem";

export default {
    title: 'Example/SideMenu',
    component: SideMenu,
    argTypes: {
        children: []
    },
    decorators: [StoryRouter()]
} as ComponentMeta<typeof SideMenu>;

const Template: ComponentStory<typeof SideMenu> = (args: any) => <SideMenu {...args} />;

export const Default = Template.bind({});
Default.args = {
    children: [
        <SideMenuItem key={1} title={'Основное'} link={'/1'} exact/>,
        <SideMenuItem key={2} title={'Администрирование'} link={'/2'} exact/>,
        <SideMenuItem key={3} title={'Словари'} link={'/3'} exact/>
    ],
};

export const WithGroups = Template.bind({});
WithGroups.args = {
    children: [
        <SideMenuGroup>
            <SideMenuItem key={1} title={'Основное'} link={'/1'} exact/>
            <SideMenuItem key={2} title={'Администрирование'} link={'/2'} exact/>
            <SideMenuItem key={3} title={'Словари'} link={'/3'} exact/>
        </SideMenuGroup>,
        <SideMenuGroup>
            <SideMenuItem key={1} title={'Дополнительное'} link={'/4'} exact/>
        </SideMenuGroup>,
    ],
};