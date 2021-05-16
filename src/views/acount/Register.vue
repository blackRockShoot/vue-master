<template>
	
  <div class="login">
	<div class="form-wrap">
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
		      <a-input v-model:value="formState.pass" type="text" autocomplete="off"  placeholder="请输入手机号" />
		    </a-form-item>
			
			
		    <a-form-item>
				<label >密码</label>
		      <a-input v-model:value="formState.checkPass" type="password" autocomplete="off" placeholder="请输入密码"/>
		    </a-form-item>
			
			
			<a-form-item>
				<label >确认密码</label>
			  <a-input  type="password" autocomplete="off" placeholder="请再次输入密码"/>
			</a-form-item>
			

			<a-form-item>
				<label >验证码</label>	
				<p></p>
				<a-row>
					<a-col :span="14">
						<a-input  type="password" autocomplete="off" placeholder="请输入验证码"/>
					</a-col>
				
					<a-col :span="10" style="text-align: center;">
						<a-button style="padding: auto;">获取验证码</a-button>
					</a-col>
				</a-row>
			</a-form-item>
			


		  </a-form>
		  <div class="linKsums">
			<router-link to="" class="link">忘记密码    |    </router-link>
			<router-link to="" class="link">注册</router-link> 
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