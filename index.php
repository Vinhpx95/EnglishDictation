<!-- Header -->
<?php include('./layout/header.php') ?>
<!-- Content -->
<div class="container pt-5 pb-5">
</div>
<script>
  // Treeview Initialization
  $(document).ready(function() {
    var html = GenerateMenuHtml(1);
    $('.container').html(html);
    $('.treeview-animated').mdbTreeview();
  });
</script>
<!-- Footer -->
<?php include('./layout/footer.php') ?>