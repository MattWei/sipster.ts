"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Sipster_1 = require("../src/Sipster");
let sipster;
let transport;
let account;
let player;
let recorder;
const events = {
    registering: 0,
    unregistering: 0,
    registered: 0,
    unregistered: 0,
    state: 0,
    call: 0
};
function delay(sec) {
    return new Promise(resolve => setTimeout(resolve, sec * 1000));
}
describe('sipster.ts', () => {
    test('check static properties', () => {
        expect(Sipster_1.Sipster.version).toMatchSnapshot();
    });
    test('create a Sipster', () => {
        const configs = { logConfig: { level: 3, consoleLevel: 3 } };
        sipster = Sipster_1.Sipster.instance(configs);
        expect(Sipster_1.Sipster.instance()).toBe(sipster);
        expect(sipster.config).toMatchSnapshot();
        expect(sipster.mediaActivePorts).toMatchSnapshot();
        expect(sipster.mediaMaxPorts).toMatchSnapshot();
        expect(sipster.state).toMatchSnapshot();
    });
    test('set up a transport to listen for incoming connections, defaults to UDP', () => {
        transport = new sipster.Transport({ port: 5060 });
        const info = transport.getInfo();
        info.info = undefined;
        info.localName = undefined;
        expect(info).toMatchSnapshot();
        expect(transport.enabled).toMatchSnapshot();
    });
    test('set up a SIP account, we need at least one', () => {
        // this sets up an account for calls coming from 192.168.100.10
        account = new sipster.Account(Sipster_1.makeAccountConfig({ idUri: 'sip:192.168.100.10' }));
        expect(account.getInfo()).toMatchSnapshot();
        expect(account.valid).toMatchSnapshot();
        expect(account.default).toMatchSnapshot();
    });
    test('set up listener', () => {
        account.on('registering', () => events.registering++);
        account.on('unregistering', () => events.unregistering++);
        account.on('registered', () => events.registered++);
        account.on('unregistered', () => events.unregistered++);
        account.on('state', (active, statusCode) => events.state++);
        account.on('call', (info, call) => events.call++);
    });
    test('make an audio player', () => {
        player = sipster.createPlayer(`${__dirname}/waves/sound.wav`);
    });
    test('make an audio recorder', () => {
        recorder = sipster.createRecorder(`${__dirname}/waves/call.wav`);
    });
    test('finalize the pjsip initialization phase', () => {
        sipster.start();
    });
    test('wait for any events', async () => {
        await delay(3);
        expect(sipster.state).toMatchSnapshot();
        expect(events).toMatchSnapshot();
    });
});
//# sourceMappingURL=Sipster.test.js.map