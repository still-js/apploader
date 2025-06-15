type EnvTypes = { STILL_HOME };

export interface LoneAppParams {

    env: EnvTypes;
    container?: string | null;
  
}
  
export class StillLoneApp {
    load(): void; unload(): void;
}


export class StillAppLoader {
  
    #script : HTMLScriptElement | any;
    #params: LoneAppParams;

    cdn(params: LoneAppParams): StillAppLoader

    local(params: LoneAppParams): StillLoneApp;

    load(): void;

    unload(): void;

}