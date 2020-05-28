<template>
  <div class="message-page item_page">
    <div class="content">
      <div class="content-header">
        <div class="header">Message 消息提示</div>
        <div class="content-title-hint">常用于主动操作后的反馈提示。与 Notification 的区别是后者更多用于系统级通知的被动提醒。</div>
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
              <div class="button" @click="open">打开消息提示</div>
               <md-message></md-message>
            </div>
          </div>
          <div class="content-example-body">
            <div class="content-example-show">
              <span>keys</span>为
              <span>md-message</span>默认值
            </div>
            <div class="content-example-code">
              <pre>
               <code>
                 <span>
&lt;template&gt;
  &nbsp;&lt;md-message :keys="bool"&gt;&nbsp;&lt;/md-message&gt;
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

    </div>
  </div>
</template>

 <script>
import MdMessage from "./MdMessage.vue";
export default {
  name: "MessagePage",
  data() {
    return {

    }
  },
  props: {},
  components: {
    MdMessage
  },
  methods: {
    open() {
      // this.$message('这是一条消息提示');
    }
  },
  watch: {

  },
};
</script>

<style scoped lang="less">
@import "../../../assets/css/page.css";
@import "../../../assets/css/preCode.less";

.message-page {
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

.button {
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  background: #fff;
  border: 1px solid #dcdfe6;
  color: #606266;
  -webkit-appearance: none;
  text-align: center;
  box-sizing: border-box;
  outline: none;
  margin: 0;
  transition: 0.1s;
  font-weight: 500;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  padding: 12px 20px;
  font-size: 14px;
  border-radius: 4px;
}
</style>