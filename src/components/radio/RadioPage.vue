<template>
  <div class="selectpage item_page">
    <div class="header">Select 选择器</div>
    <div class="content-title-hint">当选项过多时，使用下拉菜单展示并选择内容。</div>
    <div class="content">
      <div class="content_row flex-col">
        <div class="flex_box_logo">
          <div class="box_logo_card box_orange table_box_card">
            <div class="table_box_title">基础用法</div>
            <div class="table_box_date">适用广泛的基础单选</div>
          </div>
        </div>
        <div class="content-example">
          <div class="content-example-header">
            <div class="content-example-box">
              <md-select :options="options" @itemClick="test" :father="father" :fShow="fShow"></md-select>
            </div>
          </div>
          <div class="content-example-body">
            <div class="content-example-show">
              <span>v-model</span>的值为当前被选中的
              <span>el-option</span>的 value 属性值
            </div>
            <div class="content-example-code">
              <pre>
                <code>
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>
      <div class="content_row flex-col"></div>
      <div class="content_row flex-col">
        <span>{{ss}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import MdSelect from "./MdSelect.vue";

export default {
  name: "SelectPage",
  data() {
    return {
      options: [
        {
          id: "0001",
          value: "Android"
        },
        {
          id: "0002",
          value: "IOS"
        },
        {
          id: "0003",
          value: "Liunx"
        },
        {
          id: "0004",
          value: "Windows"
        },
        {
          id: "0005",
          value: "UNIX"
        },
        {
          id: "0006",
          value: "Mac OS"
        }
      ],
      ss: "",
      father: "sb",
      fShow:false
    };
  },
  props: {
    t: String,
  },
  components: {
    MdSelect
  },
  methods: {
    test(arg) {
      this.ss = arg;
    },
    // testCli(){
    //    this.fShow = !this.fShow;
    //    console.log('fa:' + this.fShow )
    // }
  }

  //1.基础用法
  //2.是否有删除
  //3.Select Events
};
</script>

<style scoped lang="less">
@import "../../assets/css/page.css";
@import "../../assets/css/preCode.css";
.selectpage {
  background: #fff;
}

.content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.header {
  display: flex;
  padding-left: 40px;
  font-weight: 400;
  color: #1f2f3d;
  font-size: 28px;
}

</style>