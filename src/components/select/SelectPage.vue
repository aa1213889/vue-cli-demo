<template>
  <div class="selectpage item_page">
    <div class="content">
      <div class="content-header">
        <div class="header">Select 选择器</div>
        <div class="content-title-hint">当选项过多时，使用下拉菜单展示并选择内容。</div>
      </div>
      <div class="content_row flex-col pt-40">
        <div class="flex_box_logo">
          <div class="box_logo_card box_orange table_box_card">
            <div class="table_box_title">基础用法</div>
            <div class="table_box_date">适用广泛的基础单选</div>
          </div>
        </div>
        <div class="content-example">
          <div class="content-example-header">
            <div class="content-example-box">
              <md-select
                :options="options"
                @change="changeTest"
                @visible="visibleTest"
                @focus="focusTest"
                @blur="blurTest"
                ref="mdselect1"
              ></md-select>
            </div>
          </div>
          <div class="content-example-body">
            <div class="content-example-show">
              <span>options</span>为
              <span>md-select</span>的选项集合
            </div>
            <div class="content-example-code">
              <pre>
               <code>
                 <span>
&lt;template&gt;
  &nbsp;&lt;md-select :options="options"&gt;&nbsp;&lt;/md-select&gt;
&lt;/template&gt;                  

&lt;script&gt;
  export default {
    data() {
      return {
        <span
  class="code-attr"
>options: [{</span>
          <span class="code-attr">id:</span> <span class="code-value">'0001'</span>,
          <span class="code-attr">value:</span> <span class="code-value">'Android'</span>
        <span class="code-attr">}, {</span>
          <span class="code-attr">id:</span> <span class="code-value">'0002'</span>,
          <span class="code-attr">value:</span> <span class="code-value">'IOS'</span>
        <span class="code-attr">}, {</span>
          <span class="code-attr">id:</span> <span class="code-value">'0003'</span>,
          <span class="code-attr">value:</span> <span class="code-value">'Liunx'</span>
        <span class="code-attr">}, {</span>
          <span class="code-attr">id:</span> <span class="code-value">'0004'</span>,
          <span class="code-attr">value:</span> <span class="code-value">'Windows'</span>
        <span class="code-attr">}, {</span>
          <span class="code-attr">id:</span> <span class="code-value">'0005'</span>,
          <span class="code-attr">value:</span> <span class="code-value">'UNIX'</span>
        <span class="code-attr">}],</span>
      <span class="code-attr">}</span>
    <span class="code-attr">}</span>
  <span class="code-attr">}</span>
&lt;/script&gt;
                 </span>
               </code>
             </pre>
            </div>
          </div>
        </div>
      </div>
      <div class="content_row flex-col pt-100">
        <div class="flex_box_logo">
          <div class="box_logo_card box_green table_box_card">
            <div class="table_box_title">禁用状态</div>
            <div class="table_box_date">选择器不可用状态</div>
          </div>
        </div>
        <div class="content-example">
          <div class="content-example-header">
            <div class="content-example-box">
              <md-select :options="options" :disabled="true"></md-select>
            </div>
          </div>
          <div class="content-example-body">
            <div class="content-example-show">
              为
              <span>md-select</span>设置
              <span>disabled="true"</span>属性，则整个选择器不可用
            </div>
            <div class="content-example-code">
              <pre>
               <code>
                 <span>
&lt;template&gt;
  &nbsp;&lt;md-select :disabled="true" :options="options"&gt;&nbsp;&lt;/md-select&gt;
&lt;/template&gt;                  

&lt;script&gt;
  export default {
    data() {
      return {
        <span
  class="code-attr"
>options: [{</span>
          <span class="code-attr">id:</span> <span class="code-value">'0001'</span>,
          <span class="code-attr">value:</span> <span class="code-value">'Android'</span>
        <span class="code-attr">}, {</span>
          <span class="code-attr">id:</span> <span class="code-value">'0002'</span>,
          <span class="code-attr">value:</span> <span class="code-value">'IOS'</span>
        <span class="code-attr">}, {</span>
          <span class="code-attr">id:</span> <span class="code-value">'0003'</span>,
          <span class="code-attr">value:</span> <span class="code-value">'Liunx'</span>
        <span class="code-attr">}, {</span>
          <span class="code-attr">id:</span> <span class="code-value">'0004'</span>,
          <span class="code-attr">value:</span> <span class="code-value">'Windows'</span>
        <span class="code-attr">}, {</span>
          <span class="code-attr">id:</span> <span class="code-value">'0005'</span>,
          <span class="code-attr">value:</span> <span class="code-value">'UNIX'</span>
        <span class="code-attr">}],</span>
      <span class="code-attr">}</span>
    <span class="code-attr">}</span>
  <span class="code-attr">}</span>
&lt;/script&gt;
                 </span>
               </code>
             </pre>
            </div>
          </div>
        </div>
      </div>
      <div class="content_row flex-col pt-100">
        <div class="flex_box_logo">
          <div class="box_logo_card box_blue table_box_card">
            <div class="table_box_title">可清空单选</div>
            <div class="table_box_date">包含清空按钮，可将选择器清空为初始状态</div>
          </div>
        </div>
        <div class="content-example">
          <div class="content-example-header">
            <div class="content-example-box">
              <md-select :options="options" :clearable="true" @clear="clearTest()" ref="mdselect3"></md-select>
            </div>
          </div>
          <div class="content-example-body">
            <div class="content-example-show">
              为
              <span>md-select</span>设置
              <span>clearable="true"</span>属性，则可将选择器清空
            </div>
            <div class="content-example-code">
              <pre>
               <code>
                 <span>
&lt;template&gt;
  &nbsp;&lt;md-select :clearable="true" :options="options"&gt;&nbsp;&lt;/md-select&gt;
&lt;/template&gt;                  

&lt;script&gt;
  export default {
    data() {
      return {
        <span
  class="code-attr"
>options: [{</span>
          <span class="code-attr">id:</span> <span class="code-value">'0001'</span>,
          <span class="code-attr">value:</span> <span class="code-value">'Android'</span>
        <span class="code-attr">}, {</span>
          <span class="code-attr">id:</span> <span class="code-value">'0002'</span>,
          <span class="code-attr">value:</span> <span class="code-value">'IOS'</span>
        <span class="code-attr">}, {</span>
          <span class="code-attr">id:</span> <span class="code-value">'0003'</span>,
          <span class="code-attr">value:</span> <span class="code-value">'Liunx'</span>
        <span class="code-attr">}, {</span>
          <span class="code-attr">id:</span> <span class="code-value">'0004'</span>,
          <span class="code-attr">value:</span> <span class="code-value">'Windows'</span>
        <span class="code-attr">}, {</span>
          <span class="code-attr">id:</span> <span class="code-value">'0005'</span>,
          <span class="code-attr">value:</span> <span class="code-value">'UNIX'</span>
        <span class="code-attr">}],</span>
      <span class="code-attr">}</span>
    <span class="code-attr">}</span>
  <span class="code-attr">}</span>
&lt;/script&gt;
                 </span>
               </code>
             </pre>
            </div>
          </div>
        </div>
      </div>
      <div class="content_row flex-col pt-100">
        <div class="table_box flex_box width-100">
          <div class="flex_box_logo">
            <div class="box_logo_card box_red table_box_card">
              <div class="table_box_title">Select Events</div>
              <div class="table_box_date">事件说明</div>
            </div>
          </div>
          <div class="tablebox_body">
            <div class="tablebox_title">
              <div class="tablebox_title_el title_el20">事件名称</div>
              <div class="tablebox_title_el title_el50">说明</div>
              <div class="tablebox_title_el title_el30">回调参数</div>
            </div>
            <div class="tablebox_content">
              <div class="tablebox_row">
                <div class="tablebox_title_el title_el20">change</div>
                <div class="tablebox_title_el title_el50">下拉选中值时触发</div>
                <div class="tablebox_title_el title_el30">目前的选中值和ID</div>
              </div>
              <div class="tablebox_row">
                <div class="tablebox_title_el title_el20">visible</div>
                <div class="tablebox_title_el title_el50">下拉框出现/隐藏时触发</div>
                <div class="tablebox_title_el title_el30">出现则为 true，隐藏则为 false</div>
              </div>
              <div class="tablebox_row">
                <div class="tablebox_title_el title_el20">clear</div>
                <div class="tablebox_title_el title_el50">可清空的单选模式下用户点击清空按钮时触发</div>
                <div class="tablebox_title_el title_el30">———</div>
              </div>
              <div class="tablebox_row">
                <div class="tablebox_title_el title_el20">blur</div>
                <div class="tablebox_title_el title_el50">当 input 失去焦点时触发</div>
                <div class="tablebox_title_el title_el30">———</div>
              </div>
              <div class="tablebox_row">
                <div class="tablebox_title_el title_el20">focus</div>
                <div class="tablebox_title_el title_el50">当 input 获得焦点时触发</div>
                <div class="tablebox_title_el title_el30">———</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="content_row flex-col pt-100">
        <div class="table_box flex_box width-100">
          <div class="flex_box_logo">
            <div class="box_logo_card box_orange table_box_card">
              <div class="table_box_title">Methods</div>
              <div class="table_box_date">方法说明</div>
            </div>
          </div>
          <div class="tablebox_body">
            <div class="tablebox_title">
              <div class="tablebox_title_el title_el20">方法名</div>
              <div class="tablebox_title_el title_el50">说明</div>
              <div class="tablebox_title_el title_el30">参数</div>
            </div>
            <div class="tablebox_content">
              <div class="tablebox_row">
                <div class="tablebox_title_el title_el20">focus</div>
                <div class="tablebox_title_el title_el50">使 input 获取焦点</div>
                <div class="tablebox_title_el title_el30">———</div>
              </div>
              <div class="tablebox_row">
                <div class="tablebox_title_el title_el20">blur</div>
                <div class="tablebox_title_el title_el50">使 input 失去焦点，并隐藏下拉框</div>
                <div class="tablebox_title_el title_el30">———</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="content_row flex-col">
        <md-radio>1</md-radio>
        <md-radio>2</md-radio>
      </div>
    </div>
  </div>
</template>

<script>
import MdSelect from "./MdSelect.vue";
import MdRadio from "../radio/MdRadio.vue";
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
      initValue: "Liunx",
      fShow: false
    };
  },
  props: {
    msg: String
  },
  components: {
    MdSelect,
    MdRadio
  },
  methods: {
    changeTest(arg1, arg2) {
      console.log(arg1 + " " + arg2);
    },
    visibleTest(arg1) {
      console.log("list is show:" + arg1);
    },
    clearTest() {
      console.log(`click clear`);
    },
    focusTest() {
      console.log(`focus`);
    },
    blurTest() {
      console.log("blur");
    },
    methodsTest() {
      this.$refs.mdselect3.focus(); //父组件调取子组件的方法
    }
  }

  //1.基础用法
  //2.是否有删除
  //3.Select Events
};
</script>

<style scoped lang="less">
@import "../../assets/css/page.css";
@import "../../assets/css/preCode.less";
.selectpage {
  background: #fff;
}

.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 0px;
}

.header {
  display: flex;
  font-weight: 400;
  color: #1f2f3d;
  font-size: 28px;
}
</style>