import { configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import {createSerializer} from 'enzyme-to-json';

// @ts-ignore
expect.addSnapshotSerializer(createSerializer({mode: 'deep'}));
configure({ adapter: new Adapter() });