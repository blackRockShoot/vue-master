<template>
	
  <div class="login" >
	 
	<div class="form-wrap" >
		<h1 style="font-size: 40px;color: white;" align="center">智慧数据网</h1>	
		<a-form
		    name="custom-validation"
		    ref="formRef"
		    :model="formState"
		    :rules="rules"
		    v-bind="layout"
		    @finish="handleFinish"
		    @finishFailed="handleFinishFailed"
		  >
			<a-form-item>
			  <label >用户名</label>
		      <a-input v-model:value="formState.pass" type="text" autocomplete="off" />
		    </a-form-item>
		    <a-form-item>
				<label >密码</label>
		      <a-input v-model:value="formState.checkPass" type="password" autocomplete="off" />
		    </a-form-item>
		    <a-form-item>
		      <a-button type="primary" class="loginButton">登录</a-button>
			</a-form-item>

		  </a-form>
		  <div class="linKsums">
			<router-link to="" class="link">忘记密码    |    </router-link>
			<router-link to="/register" class="link">注册</router-link> 
			<!-- 不能在文档里加属性，除非加类名id-->
		  </div>
	</div>	
  </div>
</template>

<script>
import { defineComponent, reactive, ref } from 'vue';
export default defineComponent({
  setup() {
    const formRef = ref();
    const formState = reactive({
      pass: '',
      checkPass: '',
      
    });
	
    return {
      formState,
      formRef,
	  
    };
  },
});
</script>

//引入样式
<style lang="scss">
	
	@import "./login.style.scss"
</style>