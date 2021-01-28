<script>
  import Modal from '/packages/modal'
  import Button from '/packages/button'
  let showModal = false;
  function toggleModal() {
    showModal = !showModal
  }
  function confirmModal() {
    console.log('confirmModal');
  }

</script>
<h1>homepage</h1>
<Button on:click={toggleModal}>show modal</Button>
<Modal title="提示" showClose visible={showModal} width="30%" on:close={toggleModal}>
  <span>这是一段信息</span>
  <span slot="footer" class="dialog-footer">
    <Button on:click={toggleModal}>取 消</Button>
    <Button type="primary" on:click={confirmModal}>确 定</Button>
  </span>
</Modal>