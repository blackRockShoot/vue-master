<template>

	<div class="register">
		<div class="form-wrap">
			
					<label>用户名{{formData.username}}</label>
					<!-- v-model=""双向绑定数据-->
					<input v-model="formData.username"  placeholder="请输入手机号" allow-clear/>


					<input v-model="formData.password" type="password" placeholder="请输入密码" />


					<input v-model="password2" type="password" placeholder="请再次输入密码" />

					<button type="primary" class="loginButton" @click="submit()">登录</button>
			<div class="linKsums">
				<router-link to="" class="link">忘记密码</router-link>
				<router-link to="" class="link">注册</router-link>
				<!-- 不能在文档里加属性，除非加类名id-->
			</div>
		</div>
	</div>
</template>

<script>
	let that;
	export default{
		data(){
			return {
				formData:{
					username:"123",
					password:"",
					code:""
				},
				password2:""
			}
		},
		mounted(){
			that=this;
		},
		methods:{
			submit(){
				var data=this.formData;
				if(data.username.length!=11){
					alert("请输入正确手机号");
					return;
				}
				alert("登录成功");
			}
		}
	}
</script>

//引入样式
<style lang="scss">
	@import "./register.style.scss"
</style>
