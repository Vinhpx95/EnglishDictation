function GenerateExerciseHtml(parent, currentExercise, answer) {
    let navBtns = currentExercise > 1 ?
        `
        <a href="${parent.url}/${currentExercise - 1}" class="btn btn-flat btn-sm">Previous</a>
    `: ``;
    navBtns += currentExercise < parent.children ? `<a href="${parent.url}/${currentExercise + 1}" class="btn btn-primary btn-sm">Next</a>` : '';
    let html = `
    <!-- Vertical Steppers -->
        <div class="row mt-1">
            <div class="col-md-12">

                <!-- Stepers Wrapper -->
                <ul class="stepper stepper-vertical">

                    <!-- First Step -->
                    <li class="active">
                        <a href="#!">
                            <span class="circle">1</span>
                            <span class="label">Normal speed. Do not write.</span>
                        </a>
                        <!-- Section Description -->
                        <div class="step-content lighten-3">
                            <audio controls class="mw-100">
                                <source src="./normal.mp3" type="audio/mpeg">
                                Your browser does not support the audio element.
                            </audio>
                        </div>
                    </li>

                    <!-- Second Step -->
                    <li class="active">

                        <!--Section Title -->
                        <a href="#!">
                            <span class="circle">2</span>
                            <span class="label">Slow speed. Write what you hear.</span>
                        </a>
                        <!-- Section Description -->
                        <div class="step-content lighten-3">
                            <div>
                                <audio controls class="mw-100">
                                    <source src="./slow.mp3" type="audio/mpeg">
                                    Your browser does not support the audio element.
                                </audio>
                            </div>
                            <div class="md-form ml-auto">
                                <input id="your-answer" type="text" data-correct-answer="${answer}" class="form-control">
                                <label for="your-answer">Write what you here</label>
                            </div>
                            <div class="response">
                                
                            </div>
                            <button class="btn btn-primary btn-sm" onclick="CheckAnswer(this)">Check your answer</button>
                            
                        </div>
                    </li>

                    <!-- Third Step -->
                    <li class="active">
                        <a href="#!">
                            <span class="circle">3</span>
                            <span class="label" data-toggle="collapse" data-target="#collapseExample" 
                            aria-expanded="false" aria-controls="collapseExample">Click to Show/Hide answer</span>
                        </a>
                        <div class="step-content lighten-3">

                            <!-- Collapsible element -->
                            <div class="collapse" id="collapseExample">
                                <div class="mt-1">
                                    ${answer}
                                </div>
                            </div>
                            <!-- / Collapsible element -->
                        </div>
                    </li>
                </ul>
                <!-- /.Stepers Wrapper -->

            </div>
        </div>

        <!-- Steppers Navigation -->
        <div class="row mt-1">
            <div class="col-md-12 text-right">
                ${navBtns}
            </div>
        </div>
        <!-- /.Vertical Steppers -->
    `;
    return html;
}

function CheckAnswer(e){
    let input = $(e).parent().find("#your-answer");
    let yourAnswer = input.val();
    let response = "";
    if(!yourAnswer) {
       response = `<i class="fas fa-exclamation-circle mr-1 text-danger"></i> Please write your answer!`;
    }else{
        let correctAnswer = input.data("correct-answer");
        response = CheckYourAnswer(correctAnswer, yourAnswer);
    }
    
    $('.response').html(response);
}

function CheckYourAnswer(correctAnswer, yourAnswer){
    let per = similarity(correctAnswer.trim(), yourAnswer.trim());
    let round = Math.round(per * 100);
    if(round < 30) return `<i class="fas fa-sad-tear mr-1 text-danger"></i> Your correct <strong>${round}%</strong>. Try again! `;
    if(round < 50) return `<i class="fas fa-frown mr-1 text-warning"></i>Your correct <strong>${round}%</strong>. Try more! `;
    if(round < 70) return `<i class="fas fa-smile mr-1 text-primary"></i>Your correct <strong>${round}%</strong>. Try your best!`;
    if(round < 90) return `<i class="fas fa-laugh mr-1 text-info"></i>Your correct <strong>${round}%</strong>. Good!`;
    return `<i class="fas fa-surprise mr-1 text-success"></i>Your correct <strong>${round}%</strong>. Fantastic!`;
}

function similarity(s1, s2) {
    var longer = s1;
    var shorter = s2;
    if (s1.length < s2.length) {
      longer = s2;
      shorter = s1;
    }
    var longerLength = longer.length;
    if (longerLength == 0) {
      return 1.0;
    }
    return (longerLength - editDistance(longer, shorter)) / parseFloat(longerLength);
  }
function editDistance(s1, s2) {
    s1 = s1.toLowerCase();
    s2 = s2.toLowerCase();
  
    var costs = new Array();
    for (var i = 0; i <= s1.length; i++) {
      var lastValue = i;
      for (var j = 0; j <= s2.length; j++) {
        if (i == 0)
          costs[j] = j;
        else {
          if (j > 0) {
            var newValue = costs[j - 1];
            if (s1.charAt(i - 1) != s2.charAt(j - 1))
              newValue = Math.min(Math.min(newValue, lastValue),
                costs[j]) + 1;
            costs[j - 1] = lastValue;
            lastValue = newValue;
          }
        }
      }
      if (i > 0)
        costs[s2.length] = lastValue;
    }
    return costs[s2.length];
  }