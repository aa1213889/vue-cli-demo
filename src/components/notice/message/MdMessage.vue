<template>
  <div class="md-message">
    <div class="md-message-content">
      <div class="md-message-img">
        <div class="img-type"></div>
      </div>
      <div class="md-message-hint">这是一条消息提示</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "md-message",
  props: ["keys", "disabled", "text"],
  watch: {},
  data() {
    return {
      isShow: false,
      hintText: '',
      type: 'info'
    };
  },
  mounted() {

  },
  //1.基础用法 2.文字描述 3.禁用状态
  methods: {
    showMessage() {

    },
    hiddenMessage() {

    }
  }
};
</script>
<style scoped lang="less">
.md-message {
  position: fixed;
  top: 20px;
  margin: auto;
  left: 0;
  right: 0;
  z-index: 998;
  height: 50px;
  width: 340px;
  .md-message-content {
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    position: relative;
    user-select: none;
    background: rgb(237, 242, 252);
    box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.14) !important;
    border-radius: 5px;
    .md-message-img {
      height: 100%;
      padding-left: 20px;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      .img-type {
        width: 15px;
        height: 15px;
        background-image: url(../../../assets/message/info.png);
        background-size: contain;
      }
    }
    .md-message-hint {
      color: #909399;
      font-size: 14px;
      padding-left: 10px;
    }
  }
}
</style>
