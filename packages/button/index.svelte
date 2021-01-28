<script>
  import {createEventDispatcher} from 'svelte';
  const dispatch = createEventDispatcher();
  const click = () => dispatch('click');
  export let type = '',
    icon = '',
    size = 'default',
    disabled = false,
    loading = false,
    round = false,
    circle = false,
    plain = false;
</script>

<button 
  class="el-button el-button--{type} el-button--{size}" 
  class:is-disabled="{disabled}"
  class:is-loading="{loading}"
  class:is-round="{round}"
  class:is-circle="{circle}"
  class:is-plain="{plain}"
  on:click|capture={click}
>
  {#if loading}
    <i class="el-icon-loading"></i>
  {:else if icon && !loading}
    <i class="{icon}"></i>
  {/if}
  <span><slot></slot></span>
</button>
