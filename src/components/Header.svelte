<script>
	export let segment;
	export let logined = false;
</script>

<style>

</style>

<div class="g-header">
  <div class="g-menu">
    <div class="m-hd">
      <div class="m-siteMap f-fl" style="color: #8e8e8e;">
        欢迎来到智慧河道云平台!
        {segment}
      </div>
      <span class="in-admin f-fr">进入河长制管理系统</span>
      <div class="m-login f-fr">
        {#if logined}
        <div class="m-logined">
          <div class="p-username"></div>
          <div class="m-logined-panel">
            <a href="setting">账号设置</a>
            <span>退出</span>
          </div>
        </div>
        {:else}
        <div class="m-login-btn">
          <span>登录</span>
          <a href="reg">注册</a>
        </div>
        {/if}
      </div>
    </div>
  </div>
  <div class="g-hd">
    <div class="m-hd">
    <div class="m-logo f-fl">
      <a href="homepage" title="智慧河道云平台">智慧河道云平台</a>
    </div>
    <div class="m-score f-fr">
      <img src="https://www.zhihuihedao.cn/static/images/score.gif" alt="">
    </div>
    <div class="m-nav f-fr" id="jstopNav">
      <ul>
        <li class="{segment === 'homepage' ? 'on' : ''}"><a href="homepage">首页</a></li>
        <li class="{segment === 'waterarea' ? 'on' : ''}"><a href="waterarea">水域数据</a></li>
        <li class="{segment === 'knowpage' ? 'on' : ''}"><a href="knowpage" >水质小常识</a></li>
        <li class="{segment === 'govern' ? 'on' : ''}"><a href="govern">水质治理</a></li>
        <li class="{segment === 'rank' ? 'on' : ''}"><a href="rank">排行榜</a></li>
      </ul>
    </div>
    </div>
    </div>
    <!-- <div :class="modal_show==true?'m-modal m-modal-show':'m-modal'" style="display: none;">
      <div class="m-modal-title">
        登录
        <div class="m-modal-close" @click="modal_show=false"></div>
      </div>
      <div class="m-modal-content">
        <div class="m-form">
          <div class="m-form-label">
            用户账号
            <a class="m-form-resister" :to="{ path: '/reg'}">前往注册</a>
          </div>
          <div class="m-form-bg">
            <input tabIndex="1" type="text" v-model="uname" placeholder="请输入账号" >
          </div>
          <div class="m-form-label">
            用户密码
            <a @click="open_passwd" class="m-form-fogot">忘记密码?</a>
          </div>
          <div class="m-form-bg">
            <input tabIndex="2" type="password" @keyup.enter="login_ypt" v-model="pwd" placeholder="请输入密码">
          </div>
          <div :class="v_tips=='正在登录...'?'m-form-tip m-form-tip-login':'m-form-tip m-form-tip-error'" v-text="v_tips"></div>
        </div>
      </div>
      <div class="m-modal-control">
        <div tabIndex="3" class="btn-login" @keyup.enter="login_ypt" @click="login_ypt">登录</div>
      </div>
    </div> -->
 </div>