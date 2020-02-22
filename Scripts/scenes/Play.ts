module scenes
{
    export class Play extends objects.Scene
    {
        // PRIVATE INSTANCE MEMBERS
        private _rollButton: objects.Button;
        private _diceroll01: objects.Button;
        private _diceroll02: objects.Button;

        // PUBLIC PROPERTIES

        // CONSTRUCTOR
        constructor()
        {
            super();

            this.Start();
        }

        // PRIVATE METHODS

        // PUBLIC METHODS

        //initialize and instatiate
        public Start(): void 
        {
              //instantiate a new Text object
              
              // buttons
               this._diceroll01 = new objects.Button(config.Game.ASSETS.getResult("3"), 200, 240, true);
               this._diceroll02 = new objects.Button(config.Game.ASSETS.getResult("4"), 400, 240, true);
               this._rollButton=new objects.Button(config.Game.ASSETS.getResult("rollButton"), 320, 430, true);
              this.Main();

            
            
        }        
        
        public Update(): void 
        {
       

        }
        
        public Main(): void 
        {
            this.addChild(this._diceroll01);

        
            this.addChild(this._diceroll02);
            this.addChild(this._rollButton);

             this._rollButton.on("click", ()=>{
                     // let ranNum01=Math.floor(Math.random() * 6) + 1  ;
            // let ranNum02=Math.floor(Math.random() * 6) + 1  ;
            let ranNum01=2;
            let ranNum02=5;
            console.log(ranNum02);
            console.log(ranNum01);
            this._diceroll01 = new objects.Button(config.Game.ASSETS.getResult(ranNum01), 200, 240, true);
            this._diceroll02 = new objects.Button(config.Game.ASSETS.getResult(ranNum02), 400, 240, true);
            }); 
            

        }

        
    }
}

