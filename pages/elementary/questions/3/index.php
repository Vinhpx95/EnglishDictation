<!-- Header -->
<?php include($_SERVER['DOCUMENT_ROOT'] . '/layout/header.php') ?>
<!-- Content -->
<div class="container pt-5 pb-5">
    <div class="breadcrumb-container"></div>
    <div class="content">
        
    </div>
</div>
<script>
    // Treeview Initialization
    $(document).ready(function() {
        let url = {};
        // generate breadcrumb
        let breadscrumb = GetBreadCrumb(0, 0, 3, url);
        $('.breadcrumb-container').html(breadscrumb);
        // generate exercise
        let exercise = GenerateExerciseHtml(url, 3, "Is it always warm here at this time of year?");
        $('.content').html(exercise);
    });
</script>
<!-- Footer -->
<?php include($_SERVER['DOCUMENT_ROOT'] . '/layout/footer.php') ?>