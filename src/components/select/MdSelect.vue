<template>
  <div class="md-select">
    <div
      class="md-select-box"
      @click="listToggle()"
      @mouseover="clearShow()"
      @mouseout="clearHide()"
    >
      <input class="md-select-input" type="text" v-model="initValue" placeholder="请选择" />
      <div
        :class="[inputHover?'md-select-clear':'md-select-arrows',listShow?'arrows90':'arrows0']"
        @click.stop="clearClick()"
      ></div>
    </div>
    <div
      class="md-select-list animated"
      v-show="listShow"
      :class="listShow?'fadeInDown':'fadeOutUp'"
    >
      <div class="md-select-angle"></div>
      <div class="md-select-itembox">
        <div
          class="md-select-item"
          v-for="item in options"
          :key="item.id"
          :class="{'checked':(item.value === initValue)}"
          @click="itemClick(item.value)"
        >{{item.value}}</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "md-select",
  props: {
    options: {
    }
  },
  data() {
    return {
      listShow: false,
      inputHover: false,
      initValue: "Liunx"
    };
  },
  mounted() {
    document.addEventListener("click", e => {
      if (!this.$el.contains(e.target)) this.listShow = false;   //点击组件外的区域隐藏下拉框 
    });
  },

  methods: {
    listToggle() {
      this.listShow = !this.listShow; //1.置换显示状态
    },
    itemClick(arg) {
      this.initValue = arg; //4.选择值后input框赋值
      this.listToggle();
    },
    clearShow() {
      if (this.initValue === "") return;
      this.inputHover = true;
    },
    clearHide() {
      this.inputHover = false;
    },
    clearClick() {
      if (this.inputHover) {
        if (this.initValue != "") this.listShow = false;
        this.initValue = "";
        this.inputHover = false;
      } else {
        this.listToggle();
      }
    }
    //1.关闭动画
    //2.组件传递值
    //3.boder闪动
  }
};
</script>
<style scoped lang="less">
@import "../../assets/css/mdControl.css";
.md-select {
  width: 240px;
  height: 40px;
  background-color: #ffffff;
  border-radius: 4px;
  cursor: pointer;
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.14) !important;

  .md-select-box {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    padding-left: 12px;
    box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.14) !important;
    .md-select-arrows {
      width: 12px;
      height: 12px;
      background-image: url(../../assets/select/select_arrow.svg);
      background-size: contain;
    }
    .md-select-clear {
      width: 12px;
      height: 12px;
      background-image: url(../../assets/select/select_clear.svg);
      background-size: contain;
    }
    .md-select-input {
      font-size: 15px;
      color: black;
      width: calc(100% - 30px);
      height: 100%;
    }
    .md-select-input:focus {
      outline: 0;
    }
    .arrows90 {
      transform: rotate(90deg);
      transition: transform 0.5s;
    }
    .arrows0 {
      transform: rotate(0deg);
      transition: transform 0.5s;
    }
  }
  .md-select-list {
    top: 15px;
    width: 100%;
    padding: 5px 0px;
    position: relative;
    background-color: rgb(255, 255, 255);
    box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.14) !important;
    border-radius: 4px;
    .md-select-angle {
      border-left: 5px solid transparent;
      border-right: 5px solid transparent;
      border-bottom: 8px solid white;
      position: absolute;
      top: -8px;
      left: 30px;
    }
    .md-select-itembox {
      overflow-y: auto;
      max-height: 160px;
      user-select: none;
      .md-select-item {
        height: 32px;
        padding-left: 10px;
        padding-top: 5px;
        font-size: 15px;
        color: black;
      }
      .checked {
        color: #4f77d2;
      }
    }
    .md-select-item:hover {
      background: #eeeeee !important;
      transition: background 0.9s cubic-bezier(0.25, 0.8, 0.5, 1);
    }
  }
}
.md-select:hover {
  outline: 2px solid #4f77d2;
}
</style>
