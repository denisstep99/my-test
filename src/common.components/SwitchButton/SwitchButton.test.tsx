import React from 'react';
import {shallow, ShallowWrapper} from 'enzyme';
import {SwitchButton} from './SwitchButton';

describe('SwitchButton component.', () => {
    let switchButton: ShallowWrapper;

    beforeEach(() => {
        switchButton = shallow(<SwitchButton isSwitchedOn labelFor={'my_label'}/>);
    });

    it('Should render correctly', () => {
        expect(switchButton).toMatchSnapshot();
    });

    it('Should change class on check', () => {
        expect(switchButton.hasClass('switch-button_on')).toBeTruthy();

        switchButton.setProps({isSwitchedOn: false});
        expect(switchButton.hasClass('switch-button_on')).toBeFalsy();
    });

    it("Should display text set by params", () => {
        switchButton.setProps({labelOn: "RU", labelOff: "EN"});
        expect(switchButton.text()).toBe("ENRU");
    })

    it('Should disable on disabled param', () => {
        switchButton.setProps({disabled: true});
        expect(switchButton.hasClass('switch-button_disabled')).toBeTruthy();
    });
});
