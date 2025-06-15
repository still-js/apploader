class LoneAppParams {

    /** @type { { STILL_HOME } } */ env = { STILL_HOME: null };
    /** @type { 'react'|'default' } */ container = null;
  
  }
  
  class StillLoneApp {
      load(){}; unload(){};
  }
  
  export class StillAppLoader {
  
      /** @type { HTMLScriptElement }  */
      #script;
      /** @type { LoneAppParams } */
      #params;
  
      /** @param { LoneAppParams } params */
      constructor(params = {}){
        if(Object.keys(params).length > 0)
          this.#params = params;
      }
  
      /**
       * @param { LoneAppParams } params
       * @returns { StillLoneApp } 
       */
      cdn = (params = {}) => {
          if(this.#params?.env.STILL_HOME) params.env.STILL_HOME;
          window.STILL_HOME = params.env.STILL_HOME;
          const script = document.createElement('script');
          script.src = 'https://cdn.jsdelivr.net/npm/@stilljs/core@latest/@still/lone.js'; 
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
          const script = document.createElement('script');
          script.src = window.STILL_HOME + '@still/lone.js';
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
  
  }