/**
 * PJSUA2 APIs
 * @see {@link https://github.com/mscdex/sipster#api|mscdex/sipster API}
 * @see {@link http://www.pjsip.org/docs/book-latest/html/intro_pjsua2.html|PJSUA2-High Level API}
 */
import {
    LogConfig,
    EpConfig,
    TlsConfig,
    TransportConfig,
    RegConfig,
    AuthCred,
    SipConfig,
    AccountConfig,
    Call,
    Transport,
    Account,
    Media,
    AudioMedia,
    AudioMediaPlayer,
    AudioMediaRecorder,
    Buddy
} from '../Sipster';

export {
    LogConfig,
    EpConfig,
    TlsConfig,
    TransportConfig,
    RegConfig,
    AuthCred,
    SipConfig,
    AccountConfig,
    Call,
    Transport,
    Account,
    Media,
    AudioMedia,
    AudioMediaPlayer,
    AudioMediaRecorder,
    Buddy
};

export function init(epConfig: EpConfig): void;
export namespace init {
    const prototype: {};
}

export function start(): void;
export namespace start {
    const prototype: {};
}

export function hangupAllCalls(): void;
export namespace hangupAllCalls {
    const prototype: {};
}

export function createRecorder(filename: string): any;
export namespace createRecorder {
    const prototype: {};
}

export function createPlayer(options?: number): AudioMediaPlayer; //filename: string, 
export namespace createPlayer {
    const prototype: {};
}

/*
export function startLocalRecord(filename:string):boolean;
export namespace startLocalRecord {
    const prototype: {};
}

export function stopLocalRecord(): boolean;
export namespace stopLocalRecord {
    const prototype: {};
}

export function startLocalPlay(filename:string):boolean;
export namespace startLocalPlay {
    const prototype: {};
}

export function stopLocalPlay():boolean;
export namespace stopLocalPlay {
    const prototype: {};
}
*/

export const version: {
    major: number,
    minor: number,
    rev: number,
    suffix: string,
    full: string,
    numeric: number
};

export const config: EpConfig;

export const state: string;

export const mediaActivePorts: number;
export const mediaMaxPorts: number;
