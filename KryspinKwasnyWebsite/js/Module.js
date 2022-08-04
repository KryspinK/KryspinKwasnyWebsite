

  class Module{
    constructor(name) {
        this.name = name;
    }

    getName(){
        return this.name;
    }
}


  function createModule(){
      const mod = new Module(option);
      console.log(mod.getName());
      modules.push(mod.getName());
      console.log(modules);

  }



