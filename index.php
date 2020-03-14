<!-- Header -->
<?php include('./layout/header.php') ?>
<!-- Content -->
<div class="container pt-5 pb-5">
<!-- <div class="treeview-animated w-100 border">
  <h6 class="pt-3 pl-3">English Dication</h6>
  <hr>
  <ul class="treeview-animated-list mb-3">
    <li class="treeview-animated-items">
      <a class="closed">
        <i class="fas fa-angle-right"></i>
        <span><i class="far fa-hand-point-right ic-w mx-1"></i>Elementary</span>
      </a>
      <ul class="nested">
        <li class="treeview-animated-items">
          <a class="closed"><i class="fas fa-angle-right"></i>
            <span><i class="fas fa-question ic-w mx-1"></i>Questions</span></a>
          <ul class="nested">
            <li>
              <div class="treeview-animated-element"> <span class="badge badge-default">1</span> Let's go</div>
            </li>
            <li>
              <div class="treeview-animated-element"> <span class="badge badge-primary">2</span> Let's go</div>
            </li>
            <li>
              <div class="treeview-animated-element"> <span class="badge badge-success">3</span> Let's go</div>
            </li>
            <li>
              <div class="treeview-animated-element"> <span class="badge badge-info">4</span> Let's go</div>
            </li>
            <li>
              <div class="treeview-animated-element"> <span class="badge badge-warning">5</span> Let's go</div>
            </li>
            <li>
              <div class="treeview-animated-element"> <span class="badge badge-danger">6</span> Let's go</div>
            </li>
            <li>
              <div class="treeview-animated-element"> <span class="badge badge-pill light-blue">7</span> Let's go</div>
            </li>
            <li>
              <div class="treeview-animated-element"> <span class="badge badge-pill indigo">8</span> Let's go</div>
            </li>
            <li>
              <div class="treeview-animated-element"> <span class="badge badge-pill purple">9</span> Let's go</div>
            </li>
            <li>
              <div class="treeview-animated-element"> <span class="badge badge-danger">10</span> Let's go</div>
            </li>
          </ul>
        </li>
        <li class="treeview-animated-items">
          <a class="closed"><i class="fas fa-angle-right"></i>
            <span><i class="fas fa-sort-numeric-up-alt ic-w mx-1"></i>Numbers and Letters</span></a>
        </li>
        <li class="treeview-animated-items">
          <a class="closed"><i class="fas fa-angle-right"></i>
            <span><i class="fas fa-user-friends ic-w mx-1"></i>People</span></a>
        </li>
        <li class="treeview-animated-items">
          <a class="closed"><i class="fas fa-angle-right"></i>
            <span><i class="fas fa-smog ic-w mx-1"></i>Places and Weather</span></a>
        </li>
        <li class="treeview-animated-items">
          <a class="closed"><i class="fas fa-angle-right"></i>
            <span><i class="fab fa-accusoft ic-w mx-1"></i>Commands and Requests</span></a>
        </li>
        <li class="treeview-animated-items">
          <a class="closed"><i class="fas fa-angle-right"></i>
            <span><i class="fab fa-creative-commons-sampling ic-w mx-1"></i>Common Expressions</span></a>
        </li>
        <li class="treeview-animated-items">
          <a class="closed"><i class="fas fa-angle-right"></i>
            <span><i class="fas fa-calculator ic-w mx-1"></i>Quantities</span></a>
        </li>
        <li class="treeview-animated-items">
          <a class="closed"><i class="fas fa-angle-right"></i>
            <span><i class="fas fa-yen-sign ic-w mx-1"></i>Currency</span></a>
        </li>
        <li class="treeview-animated-items">
          <a class="closed"><i class="fas fa-angle-right"></i>
            <span><i class="fas fa-phone-square-alt ic-w mx-1"></i>Telephone</span></a>
        </li>
        <li class="treeview-animated-items">
          <a class="closed"><i class="fas fa-angle-right"></i>
            <span><i class="fas fa-quote-right ic-w mx-1"></i>Quotes</span></a>
        </li>
      </ul>
    </li>
    <li class="treeview-animated-items">
      <a class="closed">
        <i class="fas fa-angle-right"></i>
        <span><i class="fab fa-affiliatetheme ic-w mx-1"></i>Intermediate</span>
      </a>
    </li>
    <li class="treeview-animated-items">
      <a class="closed">
        <i class="fas fa-angle-right"></i>
        <span><i class="fas fa-award mx-1"></i>Advanced</span>
      </a>
    </li>
  </ul>
</div> -->
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