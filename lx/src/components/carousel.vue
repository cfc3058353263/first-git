<template>
  <div id="carousel">
    <div class="carousel-box" :style="ulStyle" :class="ulClass">
      <div class="carousel-item" v-for="(item,index) of imgList" :key="index">
        <img :src="require(  `../banner/${item.img}`) " />
      </div>
      <div class="carousel-item">
        <img :src="require(  `../banner/${imgList[0].img}`)" />
      </div>
    </div>
    <span class="carousel-left" @click="move(-1)">&#8249;</span>
    <span class="carousel-right" @click="move(1)">&#8250;</span>

    <div class="carousel-dots">
      <button
        v-for="(item,idx) of imgList.length"
        :key="idx"
        :class="idx==i?'active':''"
        @click="moveTo(idx)"
      >{{item}}</button>
    </div>
  </div>
</template>
 <script>
export default {
  data() {
    return {
      imgList: [
        {
          img: "1.jpg"
        },
        {
          img: "2.jpg"
        }
        //   {
        //      img:'b3.png'
        //   },
        //   {
        //      img:'b4.png'
        //   },
      ],
      // 图片宽
      imgWidth: 1600,
      i: 0, //当前正在播放的是第几张图片
      canClick: true, //节流
      ulClass: {
        //定义所有图片的容器div上是否有transition
        hasTrans: true //在css中提前定义好的样式类，其中包含transition属性
        //如果值为true，则当前图片容器的div上就有过渡属性
        //如果不想让图片容器的div上有过渡属性，则设置该值为false
      }
    };
  },
  methods: {
    stop() {
      clearInterval(this.timer);
    },
    start() {
      this.timer = setInterval(() => {
        this.move(1);
      }, 3000);
    },
    move(i) {
      //如果可以单击
      if (this.canClick) {
        //防抖/节流
        if (i == -1 && this.i == 0) {
          this.stop();
          this.ulClass.hasTrans = false;
          setTimeout(() => {
            this.i = this.imgList.length;
            setTimeout(() => {
              this.ulClass.hasTrans = true;
              this.i += i;
              setTimeout(() => {
                this.canClick = true;
                this.start();
              }, 200);
            }, 50);
          }, 50);
        } else if (i == 1 && this.i == this.imgList.length - 1) {
          this.stop();
          //如果向左移动，且现在已经显示最后一张了
          this.i += i; //可以先带transition效果，左移一次
          setTimeout(() => {
            this.canClick = true;
          }, 300);
          setTimeout(() => {
            //等左移完，再去掉transition效果，骗用户
            this.ulClass.hasTrans = false;
            setTimeout(() => {
              //等50ms后，瞬间将父级div移动到显示第一张图片
              this.i = 0;
              setTimeout(() => {
                //等50ms后，再次启用transition，为下次提供动画
                this.ulClass.hasTrans = true;
                setTimeout(() => {
                  //稍等片刻之后允许单击
                  this.canClick = true;
                  this.start();
                });
              }, 20);
            }, 20);
          }, 500);
        } else {
          //如果不是两端的情况，则保持原来的逻辑
          this.i += i;
          setTimeout(() => {
            this.canClick = true;
            // this.start()
          }, 500);
        }
        // this.i+=i;//才i+1 或 i-1
        // this.canClick=false;//立刻禁止单击，即使再单击，if也不成立了
        // setTimeout(()=>{//等动画播放后，再允许单击
        //   this.canClick=true;
        // },600)
      }
    },
    moveTo(i) {
      // 点击按钮时自动轮播停止
      if (this.canClick) {
        this.i = i;
        this.stop();
        this.canClick = false;
        setTimeout(() => {
          this.canClick = true;
          // 图片切换结束后开启自动轮播
          this.start();
        }, 300);
      }
    }
  },
  created: function() {},
  computed: {
    //希望网页宽度变化或i变化，则自动重新计算ul的位置和大小
    ulStyle() {
      //修饰所有图片的父元素
      /* 最外层div的宽度 */
      var width = this.imgWidth * (this.imgList.length + 1) + "px";
      //  位移的距离
      var marginLeft = -this.i * this.imgWidth + "px";
      return { width, marginLeft };
    }
  },
  created() {
    this.start();
  }
};
</script>
 
 <style scoped>
/* body{background-color: #1D1D1D} */
/* 所有图片 */
#carousel {
  position: relative;
  overflow: hidden;
  width: 1600px;
  height: 421px;
  margin: 0 auto;
  padding-top: 50px;
}
#carousel > .carousel-box.hasTrans {
  transition: all 0.5s linear;
}
/* 左右按钮 */
.carousel-left,
.carousel-right {
  position: absolute;
  top: 56%;
  display: inline-block;
  transform: translateY(-50%);
  color: #fff;
  border-radius: 50%;
  text-align: center;
  cursor: pointer;
  font-size: 60px;
  border-radius: 50%;
  transition: all 0.5s;
}
.carousel-left {
  left: 0;
}
.carousel-right {
  right: 0;
}
.carousel-left:hover,
.carousel-right:hover {
  color: black;
}
/* 指示灯 */
.carousel-dots {
  position: absolute;
  bottom: 20px;
  text-align: center;
  left: 50%;
  transform: translateX(-50%);
}
/* 指示灯按钮 */
.carousel-dots button {
  width: 17px;
  height: 17px;
  background: rgba(127, 124, 124, 0.5);
  display: inline-block;
  margin: 0 5px;
  border-radius: 50%;
  color: #000;
  border: none;
  outline: none;
  transition: all 0.2s;
  cursor: pointer;
  font-size: 7px;
}
/* 按钮样式 */
.carousel-dots button:hover,
.carousel-dots button.active {
  background: rgba(51, 122, 183, 0.8);
  color: #fff;
}

.carousel-item {
  width: 1600px;
  height: 421px;
  float: left;
}
/*图片*/
.carousel-item img {
  width: 100%;
  height: 421px;
}
</style>