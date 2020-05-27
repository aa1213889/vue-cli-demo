<template>
  <div class="switch-page item_page">
    <div class="content">
      <div class="content-header">
        <div class="header">Switch 开关</div>
        <div class="content-title-hint">表示两种相互对立的状态间的切换，多用于触发「开/关」</div>
      </div>
      <div class="content_row flex-col pt-40">
        <div class="flex_box_logo">
          <div class="box_logo_card box_orange table_box_card">
            <div class="table_box_title">基础用法</div>
            <div class="table_box_date">由于开关为是或否，若选项过多，建议使用 Radio 选择器</div>
          </div>
        </div>
        <div class="content-example">
          <div class="content-example-header">
            <div class="content-example-box">
              <md-switch :keys="bool"></md-switch>
              <!--<md-switch :keys="bool" disabled></md-switch> -->
              <!-- <md-switch :keys="bool" text="是否付款"></md-switch> -->
            </div>
          </div>
          <div class="content-example-body">
            <div class="content-example-show">
              <span>keys</span>为
              <span>md-switch</span>默认值
            </div>
            <div class="content-example-code">
              <pre>
               <code>
                 <span>
&lt;template&gt;
  &nbsp;&lt;md-switch :keys="bool"&gt;&nbsp;&lt;/md-switch&gt;
&lt;/template&gt;                  

&lt;script&gt;
  export default {
    data() {
      return {
        <span
  class="code-attr"
>bool: <span class="code-value">true</span>,</span>
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
            <div class="table_box_title">文字描述</div>
            <div class="table_box_date">开关左侧加上是否XX相关的文字描述</div>
          </div>
        </div>
        <div class="content-example">
          <div class="content-example-header">
            <div class="content-example-box">
              <!--<md-switch :keys="bool" disabled></md-switch> -->
              <md-switch :keys="bool" text="是否付款"></md-switch>
            </div>
          </div>
          <div class="content-example-body">
            <div class="content-example-show">
              <span>text</span>为
              <span>文字描述</span>的内容
            </div>
            <div class="content-example-code">
              <pre>
               <code>
                 <span>
&lt;template&gt;
  &nbsp;&lt;md-switch :keys="bool" text="是否付款"&gt;&nbsp;&lt;/md-switch&gt;
&lt;/template&gt;                  

&lt;script&gt;
  export default {
    data() {
      return {
        <span
  class="code-attr"
>bool: <span class="code-value">true</span>,</span>
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
            <div class="table_box_title">禁用状态</div>
            <div class="table_box_date">开关为不可切换状态</div>
          </div>
        </div>
        <div class="content-example">
          <div class="content-example-header">
            <div class="content-example-box">
              <md-switch :keys="bool1" disabled></md-switch>
              <div style="padding-left:20px"></div>
              <md-switch :keys="bool2" disabled></md-switch>
            </div>
          </div>
          <div class="content-example-body">
            <div class="content-example-show">
              设置<span>disabled</span>属性
            </div>
            <div class="content-example-code">
              <pre>
               <code>
                 <span>
&lt;template&gt;
  &nbsp;&lt;md-switch :keys="bool1" disabled &gt;&nbsp;&lt;/md-switch&gt;
  &nbsp;&lt;md-switch :keys="bool2" disabled &gt;&nbsp;&lt;/md-switch&gt;
&lt;/template&gt;                  

&lt;script&gt;
  export default {
    data() {
      return {
        <span class="code-attr"
>bool1: <span class="code-value">true</span>,</span>
<span class="code-attr">        bool2: <span class="code-value">false</span>,</span>
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
                <div class="tablebox_title_el title_el50">switch 状态发生变化时的回调函数</div>
                <div class="tablebox_title_el title_el30">新状态的值</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

 <script>
import MdSwitch from "./MdSwitch.vue";
export default {
  name: "SwitchPage",
  data() {
    return {
      bool: true,
      bool1: true,
      bool2: false,
    };
  },
  props: {},
  components: {
    MdSwitch
  },
  methods: {},
  watch: {

  },
};
</script>

<style scoped lang="less">
@import "../../../assets/css/page.css";
@import "../../../assets/css/preCode.less";

.switch-page {
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