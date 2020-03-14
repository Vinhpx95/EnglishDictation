<!-- Header -->
<?php include($_SERVER['DOCUMENT_ROOT'] . '/layout/header.php') ?>
<!-- Content -->
<div class="container pt-5 pb-5">
    <div class="breadcrumb-container"></div>
    <div class="content"></div>
</div>
<script>
    // Treeview Initialization
    $(document).ready(function() {
        // generate breadcrumb
        let breadscrumb = GetBreadCrumb(0, 0);
        $('.breadcrumb-container').html(breadscrumb);
        // generate menu
        let content = GenerateMenuHtml(3, 0, 0);
        $('.content').html(content);
        $('.treeview-animated').mdbTreeview();
    });
</script>
<!-- Footer -->
<?php include($_SERVER['DOCUMENT_ROOT'] . '/layout/footer.php') ?>