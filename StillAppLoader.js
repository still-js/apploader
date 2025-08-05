class LoneAppParams {
  /** @type { { STILL_HOME } } */ env = { STILL_HOME: null };
  /** @type { 'react'|'default'|'next' } */ container = null;
  version = 'latest';
}

class StillLoneApp {
  load(){}; unload(){};
}

export class StillAppLoader {

  /** @type { HTMLScriptElement }  */
  #script;
  /** @type { LoneAppParams } */
  #params;
  /** @type { Array<Object> } */
  #components = [];
  #id = `${new Date().getTime()}-${Math.random().toString().slice(2)}`;

  /** @param { LoneAppParams } params */
  constructor(params = {}){
    if(Object.keys(params).length > 0)
      this.#params = params;
    if(!('stillFrontendsList' in window)){
      window['stillFrontendsList'] = {};
      window['stillFrontendsLoader'] = {};
    }
    window['stillFrontendsLoader'][this.#id] = {};
  }

  /**
   * @param { LoneAppParams } params
   * @returns { StillLoneApp } 
   */
  cdn = (params = {}) => {
      if(this.#params?.env.STILL_HOME) params.env.STILL_HOME;
      window.STILL_HOME = params.env.STILL_HOME;
      params.env.PATH_PREFIX ? window.STILL_HOME_PREXIF = params.env.PATH_PREFIX : '';
      const script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/npm/@stilljs/core@'+params.version+'/@still/lone.js'; 
      this.#script = script;
      return { load: () => this.load(), unload: () => this.unload() };
  }

  /**
   * @param { LoneAppParams } params
   * @returns { StillLoneApp } 
   */
  local = (params = {}) => {
      if(this.#params?.env.STILL_HOME) params.env.STILL_HOME;
      window.STILL_HOME = params.env.STILL_HOME;
      params.env.PATH_PREFIX ? window.STILL_HOME_PREXIF = params.env.PATH_PREFIX : '';
      const script = document.createElement('script');
      script.src = params.env.PATH_PREFIX + window.STILL_HOME + '@still/lone.js';
      this.#script = script;
      return { load: () => this.load(), unload: () => this.unload() };
  }

  load(){
      this.#script.async = true;
      this.#script.type = 'module';
      document.body.appendChild(this.#script);   
  }

  unload(){
      document.body.removeChild(this.#script);
  }

  component = {
    /** @param {String} refName */
    ref: (refName) =>  window['stillFrontendsLoader'][this.#id][refName],
    /**  @param { Array<String> } refs */
    setRefs: (refs) => {
        for(const ref of refs){
          window['stillFrontendsList'][ref] = this.#id;
        }
        return this;
    }
  }

}