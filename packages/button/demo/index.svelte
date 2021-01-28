<script>
  import Button from '/packages/button'
  let isPlain = false;
  let isRound = false;
  let isDisabled = false;
  let isLoading = false;
  let isCircle = false;
  // function handleClick() {
  //   console.log('index 的click');
  // }
</script>
<h1>homepage</h1>
<Button
  type="primary" 
  plain={isPlain}  
  round={isRound}
  disabled={isDisabled} 
  loading={isLoading}
  circle={isCircle}
  size="small"
>
主要的
</Button>
<hr>
<p> isPlain {isPlain}</p>
<p> isRound {isRound}</p>
<p> isDisabled {isDisabled}</p>
<p> isLoading {isLoading}</p>
<p> isCircle {isCircle}</p>
<Button type="primary" plain on:click={() => isPlain = !isPlain}>plain</Button>
<Button type="primary" round on:click={() => isRound = !isRound}>round</Button>
<Button type="primary" disabled on:click={() => isDisabled = !isDisabled}>disabled</Button>
<Button type="primary" loading on:click={() => isLoading = !isLoading}>loading</Button>
<Button type="primary" circle on:click={() => isCircle = !isCircle}>circle</Button>
<Button type="primary">上传<i class="el-icon-upload el-icon--right"></i></Button>