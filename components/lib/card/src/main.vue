<template>
  <div id="app" class="Card" :style="width ? { width: width + 'px' } : {}">
    <!-- 图片 如果wiath存在，则会覆盖组件的原始width-->
    <div
      class="Card-img"
      :style="imgHeight ? { height: imgHeight + 'px' } : {}"
    >
      <img :src="imgSrc" alt="img" />
    </div>
    <!-- summary 如果传了string就显示-->
    <div v-if="summary" class="Card-summary">
      {{ summary }}
    </div>
    <!-- 另一种情况 用户使用插槽 -->
    <div v-else class="Card-summary">
      <slot></slot>
    </div>
    <!-- footer slot 插槽 -->
    <slot name="footer"></slot>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    /* 卡片宽度 */
    width: {
      type: Number,
      default: 0,
    },
    /* 卡片图片地址 */
    imgSrc: {
      type: String,
      default: "",
    },
    /* 图片高度 */
    imgHeight: {
      type: Number,
      default: 0,
    },
    /* 图片概述 */
    summary: {
      type: String,
      default: "",
    },
    /* footer 插槽 */
  },
};
</script>

