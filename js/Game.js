(function(){

    var Game = window.Game = function(){
        this.table = null;
        this.timer = null;
        this.block = new Block();
        this.map = new Map();
        this.init();
        this.start();
        this.bindevent();
    }

  Game.prototype.init = function(){
      this.table = document.createElement("table");
      document.body.appendChild(this.table);
      for(var row =0; row<20; row++){
          var tr = document.createElement("tr");
          for(var col = 0; col<12;col++){
              var td = document.createElement("td");
              tr.appendChild(td);
          }
          this.table.appendChild(tr);
      }
  };
//操作里面的tr
 Game.prototype.changeColor = function (row,col,className) {
   	this.table.getElementsByTagName("tr")[row].getElementsByTagName("td")[col].className=className;
   }
//清屏
Game.prototype.clear = function(){
    for(var row =0; row <20; row++){
        for(var col =0;col<12;col++){
            this.changeColor(row,col,"");
        }
    }
}

//开始渲染
Game.prototype.start = function(){
    var self = this;
    var frame =0;
   self.timer = setInterval(function(){
       frame++;
        self.clear();
        self.block.render();
        self.map.render();
        if(frame%10==0){
            if(!self.block.compare(self.map.cut(self.block.row+1,self.block.col))){
              self.block.down();
            }
        }
    },50);
}

Game.prototype.bindevent = function(){
    var self = this;
    document.onkeydown = function(event){
        switch(event.keyCode){
            case 37:
                if(!self.block.compare(self.map.cut(self.block.row,self.block.col-1))){
                    self.block.left();
                }
                break;
            case 38:
                if(!self.block.compare(self.map.cut(self.block.row,self.block.col),self.block.nextDirection())){
                    self.block.changeDirection();
                }
                break;
            case 39:
                if(!self.block.compare(self.map.cut(self.block.row,self.block.col+1))){
                    self.block.right();
                }
                break;
            case 40:
                if(!self.block.compare(self.map.cut(self.block.row+1,self.block.col))){
                    self.block.down();
                }
                break;
            case 32:
                while(!self.block.compare(self.map.cut(self.block.row+1,self.block.col))){
                    self.block.down();
                }
                break;
        }
       
    }
}



})();