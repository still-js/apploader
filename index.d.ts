type EnvTypes = { STILL_HOME, PATH_PREFIX? };
type ContainerTypes = 'next'|'react'|'default';

export interface LoneAppParams {

    env: EnvTypes;
    container?: ContainerTypes;
  
}
  
export class StillLoneApp {
    load(): void; unload(): void;
}

export interface ComponentReferencing {
    /** @param { String } refName */
    ref(refName): Object;
    /**  @param { Array<String> } ref */
    setRefs(refsList): StillAppLoader;
}


export class StillAppLoader {
  
    #script : HTMLScriptElement | any;
    #params: LoneAppParams;
    component: ComponentReferencing;

    cdn(params: LoneAppParams): StillAppLoader

    local(params: LoneAppParams): StillLoneApp;

    load(): void;

    unload(): void;

}