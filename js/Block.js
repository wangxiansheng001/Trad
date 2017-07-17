(function(){
    //Block 相当于window墙，爬墙
    var Block = window.Block = function(){

        this.allType = ["L","J","Z","S","T","I","O"];
        // this.type = this.allType[_.random(0,this.allType.length-1)];
        this.type = this.allType[_.random(0,this.allType.length-1)];
        //取出矩阵里的值数组
        this.allDirection  = AllMatric()[this.type];
        // 信号量
        this.singl = _.random(0,this.allDirection.length-1);
        this.direction = this.allDirection[this.singl];
        //调整位置
        this.row = 0;
        this.col = 4;
    }

    //要全部的矩阵
    function AllMatric(){
        return {
            "L":[0x4460,0x0170,0x6220,0x0740],
            "J":[0x2260,0x0710,0x6440,0x0470],
            "Z":[0x0630,0x2640],
            "S":[0x0360,0x4620],
            "T":[0x0720,0x2320,0x2700,0x2620],
            "I":[0x2222,0x00f0],
            "O":[0x0660]
        }
    }
    //判断某一行第几行第几列
    function MouYiGe(row,col,matrix){
        var hang = matrix>>(3-row)*4&0xf;
        var ge = hang>>(3-col)&0x1;
        return ge;
    }
    //小方块的渲染
    Block.prototype.render = function(){
        for(var row =0; row <4;row++){
            for(var col=0; col <4; col++){
            //    if(MouYiGe(row,col,this.direction)==1) {
                 MouYiGe(row,col,this.direction)==1 &&  game.changeColor(row+this.row,col+this.col,this.type);
            //    }
            }
        }
    }
    Block.prototype.down = function(){
        this.row++;
    }
    Block.prototype.left = function(){
        this.col--;
    }
    Block.prototype.right = function(){
        this.col++;
    }
    //小方块提供对比的方法
    Block.prototype.compare = function(array){
        for(var i = 0; i< 4;i++){
            var str = array[i];
            for(var j = 0; j< 4; j++){
                //如果棋盘剩余的方格不是0，16进制的不等于0，就是空，就返回true
                var char = str.charAt(j);
                var ge = MouYiGe(i,j,this.direction);
                if(char!=0&&ge!=0){
                    return true;
                }
            }
        }
        return false;
    }

    Block.prototype.changeDirection = function(){
        this.singl++;
        if(this.singl> this.allDirection.length-1){
            this.singl = 0;
        }
        this.direction = this.allDirection[this.singl];
    }

    Block.prototype.nextDirection = function(){
        var next = this.singl+1;
        if(next>this.allDirection.length-1){
            next = 0;
        }
        return this.allDirection[next];
    }
})();