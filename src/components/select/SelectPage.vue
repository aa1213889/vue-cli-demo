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
              <md-select :options="options"></md-select>
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
              <md-select :options="options"></md-select>
            </div>
          </div>
          <div class="content-example-body">
            <div class="content-example-show">
              为
              <span>md-select</span>设置
              <span>disabled</span>属性，则整个选择器不可用
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
          <div class="box_logo_card box_blue table_box_card">
            <div class="table_box_title">可清空单选</div>
            <div class="table_box_date">包含清空按钮，可将选择器清空为初始状态</div>
          </div>
        </div>
        <div class="content-example">
          <div class="content-example-header">
            <div class="content-example-box">
              <md-select :options="options"></md-select>
            </div>
          </div>
          <div class="content-example-body">
            <div class="content-example-show">
              为
              <span>md-select</span>设置
              <span>disabled</span>属性，则整个选择器不可用
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
      fShow: false
    };
  },
  props: {
    msg: String
  },
  components: {
    MdSelect,
    MdRadio
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