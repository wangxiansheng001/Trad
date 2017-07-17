(function(){
    var Map = window.Map = function(){
        //地图主要渲染死去的方块
        this.map = [
            "PPP000000000000PP",
            "PPP000000000000PP",
            "PPP000000000000PP",
            "PPP000000000000PP",
            "PPP000000000000PP",
            "PPP000000000000PP",
            "PPP000000000000PP",
            "PPP000000000000PP",
            "PPP000000000000PP",
            "PPP000000000000PP",
            "PPP000000000000PP",
            "PPP000000000000PP",
            "PPP000000000000PP",
            "PPP000000000000PP",
            "PPP000000000000PP",
            "PPP000000000000PP",
            "PPP000000000000PP",
            "PPP000000000000PP",
            "PPP000000000000PP",
            "PPP000000000000PP",
            "PPPPPPPPPPPPPPPPP",
            "PPPPPPPPPPPPPPPPP"
        ];
    }

    Map.prototype.render = function(){
        for(var row = 0; row <20; row++){
           var str = this.map[row];
        //    console.log(str);
           for(var col = 0; col <12;col++){
               var char = str.charAt(col+3);
               if(char!="0"){
                   game.changeColor(row,col,char);
               }
           }
        }
    }
    //切割4*4矩阵
    //通过生成的方格的行列，截取地图中的map
  Map.prototype.cut= function(row,col){
    var array =[];
    for(var i = 0;i <4;i++){
        var str = this.map[row+i];
        var str1 = str.substr(col+3,4);
        array.push(str1);
    }
    return array;
  }      





})();