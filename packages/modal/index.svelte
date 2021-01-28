<script>
  import { fade } from 'svelte/transition';
  import { elasticOut } from 'svelte/easing';
  function whoosh(node, params) {
		const existingTransform = getComputedStyle(node).transform.replace('none', '');

		return {
			delay: params.delay || 0,
			duration: params.duration || 400,
			easing: params.easing || elasticOut,
			css: (t, u) => `transform: ${existingTransform} scale(${t})`
		};
	}
	import { createEventDispatcher, onDestroy } from 'svelte';

	const dispatch = createEventDispatcher();
  const close = () => dispatch('close');
  // 监听 Esc
  let modal = null;
  // 是否全屏
  export let fullscreen = false;
  // 按钮和标题居中
  export let center = false;
  // 展示隐藏弹框
  export let visible = false;
  // showClose显示右上角关闭
  export let showClose = false;
  // 标题
  export let title = '';
  // 特殊style
	export let style = "";
  // 绑定tab和esc按键
	const handle_keydown = e => {
		if (e.key === 'Escape') {
			close();
			return;
		}

		if (e.key === 'Tab') {
			// trap focus
			const nodes = modal.querySelectorAll('*');
			const tabbable = Array.from(nodes).filter(n => n.tabIndex >= 0);

			let index = tabbable.indexOf(document.activeElement);
			if (index === -1 && e.shiftKey) index = 0;

			index += tabbable.length + (e.shiftKey ? -1 : 1);
			index %= tabbable.length;

			tabbable[index].focus();
			e.preventDefault();
		}
	};

	const previously_focused = typeof document !== 'undefined' && document.activeElement;

	if (previously_focused) {
		onDestroy(() => {
			previously_focused.focus();
		});
	}
</script>

<svelte:window on:keydown={handle_keydown}/>

{#if visible}
  <div transition:fade|local class="el-dialog__wrapper" role="dialog" aria-modal="true" bind:this={modal}>
  <!-- <div transition:fade="{{ duration: 100 }}" class="el-dialog__wrapper" role="dialog" aria-modal="true" bind:this={modal}> -->
    <div class="el-dialog" class:is-fullscreen={fullscreen} class:el-dialog--center={center} style={style}>
      <div class="el-dialog__header">
        <slot name="title">
          <span class="el-dialog__title">{title}</span>
        </slot>
        {#if showClose}
        <button type="button" class="el-dialog__headerbtn" aria-label="Close" on:click={close}>
          <i class="el-dialog__close el-icon el-icon-close"></i>
        </button>
        {/if}
      </div>
      <div class="el-dialog__body"><slot></slot></div>

      <div class="el-dialog__footer">
        <slot name="footer"></slot>
      </div>
    </div>
  </div>
{/if}

<style>
  .el-dialog__wrapper {z-index: 999;}
</style>