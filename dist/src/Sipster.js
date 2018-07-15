"use strict";
/**
 * mscdex/sipster & PJSUA2 APIs
 * @see {@link https://github.com/mscdex/sipster#api|mscdex/sipster API}
 * @see {@link http://www.pjsip.org/docs/book-latest/html/intro_pjsua2.html|PJSUA2-High Level API}
 */
Object.defineProperty(exports, "__esModule", { value: true });
const sipster = window.require("sipster");
//const sipster = require("sipster");

const events_1 = require("events");
class Sipster {
    /**
     * @throws {Error}  the instance already exists
     * @throws {Error}  no config specified
     */
    static instance() {
        if (this._instance) {
            return this._instance;
        }
        this._instance = new Sipster();
        return this._instance;
    }
    constructor() {
        this.haveInit = false;
    }
    init(config) {
        if (!config)
            throw new Error('no config specified');
        sipster.init(config);
        this.haveInit = true;
    }
    static get version() {
        return sipster.version;
    }
    get Transport() {
        return sipster.Transport;
    }
    get Account() {
        return sipster.Account;
    }

    get SipPlatform() {
        return sipster.SipPlatform;
    }

    get config() {
        return sipster.config;
    }
    get state() {
        return sipster.state;
    }
    get mediaActivePorts() {
        return sipster.mediaActivePorts;
    }
    get mediaMaxPorts() {
        return sipster.mediaMaxPorts;
    }
    get enumDevs() {
        return sipster.enumDevs;
    }

    get codecEnum() {
        return sipster.codecEnum;
    }
    
    start() {
        sipster.start();
    }
    createPlayer(filename) {
        return sipster.createPlayer(filename);
    }
    createRecorder(filename) {
        return sipster.createRecorder(filename);
    }
    disconnect() {
        return new Promise((resolve) => {
            if (!this.haveInit) {
                resolve();
            }
            sipster.disconnect();
            this.haveInit = false;
            resolve();
        });
    }

    systemInit() {
        return sipster.systemInit();
    }

    setCodecPriority(codecId, priority) {
        console.log("Set " + codecId + " priority to " + priority);
        sipster.setCodecPriority(codecId, priority);
    }
}

exports.Sipster = Sipster;
const DEFAULT_REG_CONFIG = {
    registerOnAdd: true,
    contactParams: "",
    timeoutSec: 300,
    retryIntervalSec: 0,
    firstRetryIntervalSec: 0,
    randomRetryIntervalSec: 10,
    delayBeforeRefreshSec: 5,
    dropCallsOnFail: false,
    unregWaitMsec: 4000,
    proxyUse: 3,
};
const DEFAULT_SIP_CONFIG = {
    contactForced: "",
    contactParams: "",
    contactUriParams: "",
    authInitialEmpty: false,
    authInitialAlgorithm: "",
};
/**
 * Complement the specified account config with default value.
 */
function makeAccountConfig(config) {
    if (config.regConfig) {
        const DEFAULT = DEFAULT_REG_CONFIG;
        config.regConfig = Object.assign(DEFAULT, config.regConfig);
    }
    if (config.sipConfig) {
        const DEFAULT = DEFAULT_SIP_CONFIG;
        config.sipConfig = Object.assign(DEFAULT, config.sipConfig);
    }
    return config;
}
exports.makeAccountConfig = makeAccountConfig;
//# sourceMappingURL=Sipster.js.map