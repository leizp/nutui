<template>
  <div class="demo-nopading">
    <h2>基础用法</h2>
    <nut-input
      v-model:value="state.val1"
      @change="change"
      @focus="focus"
      @blur="blur"
      label="文本"
    />

    <nut-input
      placeholder="请输入文本"
      @change="change"
      v-model:value="state.val0"
      :requireShow="true"
      label="文本"
      @clear="clear"
    />
    <h2>禁用输入框</h2>
    <nut-input
      v-model:value="state.val2"
      @change="change"
      :disabled="true"
      label="文本"
    />
    <nut-input
      v-model:value="state.val3"
      @change="change"
      :readonly="true"
      label="文本"
    />
    <h2>限制输入长度</h2>
    <nut-input
      v-model:value="state.val4"
      @change="change"
      maxLength="7"
      label="限制7："
    />
    <h2>自定义类型</h2>
    <nut-input
      v-model:value="state.val0"
      @change="change"
      type="password"
      label="密码："
    />
    <nut-input
      v-model:value="state.val5"
      @change="change"
      type="digit"
      label="整数："
    />
    <nut-input
      v-model:value="state.val6"
      @change="change"
      type="digit"
      placeholder="支持小数点的输入"
      label="数字："
    />
    <h2>文本域</h2>
    <nut-input
      v-model:value="state.val7"
      @change="change"
      :autosize="true"
      type="textarea"
      placeholder="文本域"
      label="留言："
    />
    <nut-input
      v-model:value="state.val7"
      @change="change"
      rows="5"
      type="textarea"
      placeholder="设置输入五行"
      label="留言："
    />
    <h2>显示字数统计</h2>
    <nut-input
      v-model:value="state.val8"
      @change="change"
      rows="5"
      :limitShow="true"
      maxLength="20"
      type="textarea"
      placeholder="设置输入五行"
      label="留言："
    />
  </div>
</template>

<script lang="ts">
import { reactive } from 'vue';
import { createComponent } from '@/utils/create';
const { createDemo } = createComponent('input');
export default createDemo({
  setup() {
    const state = reactive({
      val0: '',
      val1: '初始数据',
      val2: '禁止修改',
      val3: 'readonly 只读',
      val4: '',
      val5: '',
      val6: '',
      val7: '',
      val8: '文案'
    });
    setTimeout(function() {
      state.val1 = '异步数据';
    }, 2000);
    const change = (num: string | number) => {
      console.log('change: ', num);
    };
    const focus = (num: string | number) => {
      console.log('focus:', num);
    };
    const blur = (num: string | number) => {
      console.log('blur:', num);
    };
    const clear = (num: string | number) => {
      console.log('clear:', num);
    };
    return {
      state,
      change,
      blur,
      clear,
      focus
    };
  }
});
</script>

<style lang="scss" scoped>
.demo-nopading {
  height: 100%;
  background: #f7f8fa;
  overflow-x: hidden;
  overflow-y: auto;
  padding: 0;
  padding-top: 57px;
  h2 {
    padding-left: 25px;
    margin-top: 25px;
    margin-bottom: 10px;
    color: #909ca4;
  }
}
</style>
