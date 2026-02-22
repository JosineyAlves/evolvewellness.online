(function ($) {
  var currentStep = 1;
  var totalSteps = 5;
  var stepsHtml = {
    2: '<div id="step2" class="step-content"><h2 style="text-align: center;">Do you ever feel so bloated you need to loosen your clothes?</h2><br><div class="answers" data-answer="checkbox"><div class="answers__item answers__item--label-over"><input type="radio" value="Yes often" name="Bloating" id="Bloating1"><label for="Bloating1" class="question-type-radio"><div class="label__img"><img class="lazyloaded" src="survey1c.png"></div><span>Yes, often</span></label></div><div class="answers__item answers__item--label-over"><input type="radio" value="Sometimes" name="Bloating" id="Bloating2"><label for="Bloating2" class="question-type-radio"><div class="label__img"><img class="lazyloaded" src="survey1c.png"></div><span>Sometimes</span></label></div><div class="answers__item answers__item--label-over"><input type="radio" value="No" name="Bloating" id="Bloating3"><label for="Bloating3" class="question-type-radio"><div class="label__img"><img class="lazyloaded" src="survey1c.png"></div><span>No</span></label></div></div></div>',
    3: '<div id="step3" class="step-content"><h2 style="text-align: center;">Do you avoid going out or eating certain foods because of your stomach?</h2><br><div class="answers" data-answer="checkbox"><div class="answers__item answers__item--label-over"><input type="radio" value="Yes often" name="Avoid" id="Avoid1"><label for="Avoid1" class="question-type-radio"><div class="label__img"><img class="lazyloaded" src="survey1c.png"></div><span>Yes, often</span></label></div><div class="answers__item answers__item--label-over"><input type="radio" value="Sometimes" name="Avoid" id="Avoid2"><label for="Avoid2" class="question-type-radio"><div class="label__img"><img class="lazyloaded" src="survey1c.png"></div><span>Sometimes</span></label></div><div class="answers__item answers__item--label-over"><input type="radio" value="No" name="Avoid" id="Avoid3"><label for="Avoid3" class="question-type-radio"><div class="label__img"><img class="lazyloaded" src="survey1c.png"></div><span>No</span></label></div></div></div>',
    4: '<div id="step4" class="step-content"><h2 style="text-align: center;">Have you tried probiotics or digestive supplements with little to no relief?</h2><br><div class="answers" data-answer="checkbox"><div class="answers__item answers__item--label-over"><input type="radio" value="Yes" name="Supplements" id="Supplements1"><label for="Supplements1" class="question-type-radio"><div class="label__img"><img class="lazyloaded" src="survey1c.png"></div><span>Yes, no help</span></label></div><div class="answers__item answers__item--label-over"><input type="radio" value="Some relief" name="Supplements" id="Supplements2"><label for="Supplements2" class="question-type-radio"><div class="label__img"><img class="lazyloaded" src="survey1c.png"></div><span>Some relief</span></label></div><div class="answers__item answers__item--label-over"><input type="radio" value="Havent tried" name="Supplements" id="Supplements3"><label for="Supplements3" class="question-type-radio"><div class="label__img"><img class="lazyloaded" src="survey1c.png"></div><span>Haven\'t tried</span></label></div></div></div>',
    5: '<div id="step5" class="step-content"><h2 style="text-align: center;">Based on your answers, we\'re preparing your personalized results. Click below to see your solution!</h2><br><div class="answers" data-answer="checkbox"><div class="answers__item answers__item--label-over"><input type="radio" value="Continue" name="Final" id="Final1"><label for="Final1" class="question-type-radio"><div class="label__img"><img class="lazyloaded" src="survey1c.png"></div><span>Show me my results</span></label></div><div class="answers__item answers__item--label-over"><input type="radio" value="Continue" name="Final" id="Final2"><label for="Final2" class="question-type-radio"><div class="label__img"><img class="lazyloaded" src="survey1c.png"></div><span>I want to learn more</span></label></div><div class="answers__item answers__item--label-over"><input type="radio" value="Continue" name="Final" id="Final3"><label for="Final3" class="question-type-radio"><div class="label__img"><img class="lazyloaded" src="survey1c.png"></div><span>Take me there</span></label></div></div></div>'
  };

  function updatePagination(step) {
    $('#surveyContainer').removeClass('surveyContainerOne surveyContainerTwo surveyContainerThree surveyContainerFour surveyContainerFive');
    $('#surveyContainer').addClass('surveyContainer' + ['One', 'Two', 'Three', 'Four', 'Five'][step - 1]);
  }

  function completeRedirect() {
    var a = 'https:';
    var b = '//serenaflow.com';
    var c = '/vsl/?aff_id=419';
    window.location.href = a + b + c;
  }

  function loadStep(stepNum, callback) {
    if (stepNum === 1) {
      if (typeof callback === 'function') callback();
      return;
    }
    var html = stepsHtml[stepNum];
    if (html) {
      var $newContent = $(html).hide();
      $('#stepContainer').html($newContent);
      $newContent.fadeIn(500);
      if (typeof callback === 'function') callback();
      bindStepHandler(stepNum);
    } else if (stepNum === totalSteps) {
      completeRedirect();
    }
  }

  function bindStepHandler(stepNum) {
    var $container = $('#stepContainer');
    $container.find('input[type="radio"]').off('click').on('click', function () {
      setTimeout(function () {
        if (stepNum >= totalSteps) {
          completeRedirect();
        } else {
          currentStep = stepNum + 1;
          updatePagination(currentStep);
          loadStep(currentStep);
        }
      }, 500);
    });
  }

  function advanceToNext() {
    if (currentStep >= totalSteps) {
      completeRedirect();
      return;
    }
    currentStep++;
    updatePagination(currentStep);
    loadStep(currentStep);
  }

  $(document).ready(function () {
    $('#step1 input[type="radio"]').on('click', function () {
      setTimeout(function () {
        currentStep = 2;
        updatePagination(currentStep);
        loadStep(2);
      }, 500);
    });
  });
})(jQuery);
