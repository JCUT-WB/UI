<template>
  <div id="app">
    <!-- 不使用插槽 -->
    <Demo></Demo>
    <Card :imgSrc="card_imgUrl" :summary="card_summary" />

    <!-- 使用具名插槽 -->
    <Card
    :imgSrc="card_imgUrl"
    :summary="card_summary">
      <template v-slot:footer>
        <div class="footer">
          <div class="level">中级 . 528人报名</div>
          <div class="price">￥299.00</div>
        </div>
      </template>
    </Card>

    <!-- 使用匿名插槽 -->
    <Card
    :width="400"
    :imgSrc="card_imgUrl"
    :imgHeight="card_imgHeight"
    >
    <!-- 这段内容渲染进slot -->
    这段内容在slot
    </Card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      card_width: 250,
      card_imgHeight: 150,
      /* 图片得放到public */
      card_imgUrl: "img.jpg",
      card_summary: "我在学vue",
    };
  },
};
</script>
