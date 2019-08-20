<template>
  <div>
    <div class="canvas-box" ref="canvas-box">
      <canvas class="canvas-demo" ref="canvas-demo"></canvas>
    </div>
    <form action class="form-wrap">
      <el-button type="primary" @click="clearCanvas">清除画布</el-button>
    </form>
  </div>
</template>

<script>
import * as eleMethods from "../../utils/eleOptions.js";
import { posix } from "path";
export default {
  mounted() {
    this.draw();
    this.resizeCanvas()
    window.addEventListener("resize", () => {
      this.resizeCanvas()
    });
  },
  methods: {
    draw() {
      let canvas = this.$refs["canvas-demo"];
      canvas.ctx = canvas.getContext("2d");
      let ctx = canvas.ctx
      let point = eleMethods.offset(canvas);
      let x = 0,
        y = 0;
      ctx.lineWidth = 1;
      ctx.scale(0.8, 0.8);
      canvas.addEventListener("mousedown", e => {
        ctx.beginPath();
        x = e.clientX - point.left
        y = e.clientY - point.top
        ctx.moveTo(x, y)
        canvas.mousedown = true;
      });
      canvas.addEventListener("mousemove", e => {
        if (canvas.mousedown) {
          x = e.clientX - point.left
          y = e.clientY - point.top
          ctx.lineTo(x, y)
        }
      });
      canvas.addEventListener("mouseup", e => {
        ctx.stroke()
        canvas.mousedown = false;
      });
    },
    resizeCanvas() {
      let canvas = this.$refs["canvas-demo"]
      let {cW, cH} = this.getCanvasSize()
      canvas.width = cW
      canvas.height = cH
    },
    clearCanvas() {
      let canvas = this.$refs["canvas-demo"]
      let {cW, cH} = this.getCanvasSize()
      if (!canvas.ctx) {
        this.$message("没有可以清楚的内容")
      } 
      canvas.ctx.clearRect(0, 0 , cW, cH)
    },
    getCanvasSize() {
      let canvasBox = this.$refs["canvas-box"]
      let cW = canvasBox.clientWidth;
      let cH = canvasBox.clientHeight;
      return {cW, cH}
    }
  }
};
</script>

<style lang="less" scoped>
.canvas-box {
  height: 400px;
  box-sizing: border-box;
  .canvas-demo {
    display: block;
    box-shadow: 1px 1px 12px 1px #ccc;
    box-sizing: border-box;
  }
  .form-wrap {
    line-height: 100px;
  }
}
</style>