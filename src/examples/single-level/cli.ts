import * as Path from 'path';
import {CLI, Shim} from '../..';

let cli = new CLI('greet', Path.join(__dirname, 'commands'));

let shim = new Shim(cli);
// tslint:disable-next-line:no-floating-promises
shim.execute(process.argv);
