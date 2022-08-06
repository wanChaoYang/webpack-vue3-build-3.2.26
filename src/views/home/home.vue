<template>
  <div class="a">Home</div>
  <div class="b">还的哈</div>
  <div>
    <img src="@/assets/imgs/5.jpg" alt />
  </div>
</template>
<script>
import { onMounted } from "vue";
export default {
  setup(props) {
    onMounted(() => {
      console.log(159);
    });
  },
};
</script>
<style lang="less" scoped>
.b {
  user-select: none;
  font-size: 36px;
}
.a {
  transform: rotate(5deg);
}
@import "./home.less";
</style>
