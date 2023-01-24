window.addEventListener('load', () => {
  let checkSwitch = document.querySelector('.checkbox-input').checked;

  if(checkSwitch == false) {
    document.querySelectorAll('.monthly').forEach((e) => {
      e.classList.remove('d-none');
    });
    document.querySelectorAll('.yearly').forEach((e1) => {
      e1.classList.add('d-none');
    });
  } else if(checkSwitch == true) {
    document.querySelectorAll('.monthly').forEach((e2) => {
      e2.classList.add('d-none');
    });
    document.querySelectorAll('.yearly').forEach((e3) => {
      e3.classList.remove('d-none');
    });
  }
});

var countChecksPass = 0;
function validatePhoneNumber() {
  'use strict';
  let passInputVal = Number(document.querySelector('#phone-input').value);
  let myRegEx =  /^[0-9]{10}$/;
  let regExResult = myRegEx.test(passInputVal);
  // console.log(regExResult);
  if(!regExResult) {
    ++countChecksPass;
    if(countChecksPass == 1) {
      document.querySelector('#phone-input').classList.add('incorrect-input');
      let incorrectPassMsg = document.createElement("span");
      incorrectPassMsg.classList.add('false-pass');
      incorrectPassMsg.classList.add('incorrect');
      incorrectPassMsg.appendChild(document.createTextNode('Password incorrect!.'));
      document.querySelector('.label-number').appendChild(incorrectPassMsg);
    }
  } else {
    countChecksPass = 0;
    document.querySelector('#phone-input').classList.remove('incorrect-input');
    if(document.querySelector('.false-pass') != null ) {
      document.querySelector('.false-pass').style.display = 'none';
    }
  }
  return regExResult;
}

var countChecksEmail = 0;
function validateEmail() {
  'use strict';
  let emailInputVal = document.querySelector('#email-input').value;
  let myRegExEmail =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  let regExResultEmail = myRegExEmail.test(emailInputVal);
  // console.log(regExResult);
  if(!regExResultEmail) {
    ++countChecksEmail;
    if(countChecksEmail == 1) {
      document.querySelector('#email-input').classList.add('incorrect-input');
      let incorrectEmailMsg = document.createElement("span");
      incorrectEmailMsg.classList.add('false-email');
      incorrectEmailMsg.classList.add('incorrect');
      incorrectEmailMsg.appendChild(document.createTextNode('Bad Email!'));
      document.querySelector('.label-email').appendChild(incorrectEmailMsg);
    }
  } else {
    countChecksEmail = 0;
    document.querySelector('#email-input').classList.remove('incorrect-input');
    if(document.querySelector('.false-email') != null ) {
      document.querySelector('.false-email').style.display = 'none';
    }
  }
  return regExResultEmail;
}

var countChecksName = 0;
function validateName() {
  'use strict';
  let nameInputVal = document.querySelector('#name-input').value;
  let myRegExName =  /^[A-Za-z\s]{5,}$/;
  let regExResultName = myRegExName.test(nameInputVal);
  // console.log(regExResult);
  if(!regExResultName) {
    ++countChecksName;
    if(countChecksName == 1) {
      document.querySelector('#name-input').classList.add('incorrect-input');
      let incorrectNameMsg = document.createElement("span");
      incorrectNameMsg.classList.add('false-name');
      incorrectNameMsg.classList.add('incorrect');
      incorrectNameMsg.appendChild(document.createTextNode('Invalid name!'));
      document.querySelector('.label-name').appendChild(incorrectNameMsg);
    }
  } else {
    countChecksName = 0;
    document.querySelector('#name-input').classList.remove('incorrect-input');
    if(document.querySelector('.false-name') != null ) {
      document.querySelector('.false-name').style.display = 'none';
    }
  }
  return regExResultName;
}

// remove specific class ftom all elements that contains it
function removeClass(cNmae) {
  document.querySelectorAll(`.${cNmae}`).forEach((cNameEl) => {
    cNameEl.classList.remove(cNmae);
  });
}

function addClass(classNmae, classToBeAdd) {
  document.querySelectorAll(`.${classNmae}`).forEach((classNmaeEl) => {
    classNmaeEl.classList.add(classToBeAdd);
  });
}

var nextBtn = document.querySelector('.info-next-btn');
nextBtn.addEventListener('click', () => {
  validatePhoneNumber();
  validateEmail();
  validateName();
  if(validatePhoneNumber() && validateEmail() && validateName()) {
    console.log('all true');
    // document.querySelector('.info').style.display = 'none';
    removeClass('active');
    addClass('step-2', 'active');
    // document.querySelector('.step-2').classList.add('active');
    document.querySelector('.info').classList.add('d-none');
    document.querySelector('.select-plan').classList.remove('d-none');
  }
});

document.querySelectorAll('.bill').forEach(bill => {
  bill.addEventListener('click', () => { 
    removeClass('bill-checked');
    bill.classList.toggle('bill-checked');
  });
});

// document.querySelector('.checkbox-input').checked = false;
function toggleBill(checkboxInput) {
  'use strict';
  if(checkboxInput == true) {
    document.querySelectorAll('.monthly').forEach((e) => {
      e.classList.remove('d-none');
    });
    document.querySelectorAll('.yearly').forEach((e1) => {
      e1.classList.add('d-none');
    });
  } else if(checkboxInput == false) {
    document.querySelectorAll('.monthly').forEach((e2) => {
      e2.classList.add('d-none');
    });
    document.querySelectorAll('.yearly').forEach((e3) => {
      e3.classList.remove('d-none');
    });
  }
}

document.querySelector('span.slider.round').addEventListener('click', () => {
  toggleBill(document.querySelector('.checkbox-input').checked);
});

// document.querySelectorAll('.bill-checked').length;

function calcPlanCost() {
  if(document.querySelector('.checkbox-input').checked == true) {
    var plan = document.querySelector('.bill-checked');
    if(plan.classList.contains('arcade-bill')) {
      return 90;
    } else if(plan.classList.contains('advanced-bill')) {
      return 120;
    } else if(plan.classList.contains('pro-bill')) {
      return 150;
    } else {
      return 0;
    }
  } else {
    var plan = document.querySelector('.bill-checked');
    if(plan.classList.contains('arcade-bill')) {
      return 9;
    } else if(plan.classList.contains('advanced-bill')) {
      return 12;
    } else if(plan.classList.contains('pro-bill')) {
      return 15;
    } else {
      return 0;
    }
  }
}

let planBackBtn = document.querySelector('.bill-back-btn');
planBackBtn.addEventListener('click', () => {
  removeClass('active');
    addClass('step-1', 'active');
  document.querySelector('.info').classList.remove('d-none');
  document.querySelector('.select-plan').classList.add('d-none');
});

// sessionStorage.setItem("Plan Cost", calcPlanCost());

let planNextBtn = document.querySelector('.bill-next-btn');
planNextBtn.addEventListener('click', () => {
  let thePlan = document.querySelectorAll('.bill-checked');
  if(thePlan.length > 0) {
    sessionStorage.setItem("planCost", calcPlanCost());
    removeClass('active');
    addClass('step-3', 'active');
    document.querySelector('.select-plan').classList.add('d-none');
    document.querySelector('.add-ons').classList.remove('d-none');
  } else {
    alert('Please pick a plan');
  }
});

// uncheck all checkbox
window.addEventListener('load', () => {
  document.querySelectorAll('input[type=checkbox]').forEach(el => el.checked = false);
});

// toggle class .active2 on checking add-ons
function checkAddons(checkboxId, sectionClass) {
  if(document.querySelector(`#${checkboxId}`).checked) {
    document.querySelector(`.${sectionClass}`).classList.add('active2');
  } else {
    document.querySelector(`.${sectionClass}`).classList.remove('active2');
  }
}

document.querySelector('#onlineService').addEventListener('click', () => {
  checkAddons('onlineService', 'form-check-online');
});

document.querySelector('#largerStorage').addEventListener('click', () => {
  checkAddons('largerStorage', 'form-check-storage');
});

document.querySelector('#customizeableProfile').addEventListener('click', () => {
  checkAddons('customizeableProfile', 'form-check-profile');
});

function calcOverallCost() {
  let cost = 0;
  cost += Number(sessionStorage.getItem('planCost'));
  if(sessionStorage.getItem('profile')) {
    cost += Number(sessionStorage.getItem('profile'));
  }
  if(sessionStorage.getItem('online')) {
    cost += Number(sessionStorage.getItem('online'));
  }
  if(sessionStorage.getItem('storage')) {
    cost += Number(sessionStorage.getItem('storage'));
  }
  return cost;
}

function finishDeatails() {
  //.textContent = '';
  let planHead = document.createElement("div");
  let mainPlan = document.createElement("div");
  mainPlan.classList.add('main-plan');
  let planCost = Number(sessionStorage.getItem('planCost'));
  if(planCost > 15) {
    planHead.appendChild(document.createTextNode(`$${planCost}/yr`));
  } else {
    planHead.appendChild(document.createTextNode(`$${planCost}/mo`));
  }
  let finishDetails = document.querySelector('.finish-details');
  
  planHead.classList.add('plan-head');
  planHead.classList.add('my-2');
  planHead.classList.add('py-2');
  let planH3 = document.createElement("h3");
  planH3.classList.add('plan-h3');
  if(planCost == 9) {
    planH3.appendChild(document.createTextNode('Arcade (Monthly)'));
  } else if(planCost == 12) {
    planH3.appendChild(document.createTextNode('Advanced (Monthly)'));
  } else if(planCost == 15) {
    planH3.appendChild(document.createTextNode('Pro (Monthly)'));
  } else if(planCost == 90) {
    planH3.appendChild(document.createTextNode('Arcade (Yearly)'));
  } else if(planCost == 120) {
    planH3.appendChild(document.createTextNode('Advanced (Yearly)'));
  } else if(planCost == 150) {
    planH3.appendChild(document.createTextNode('Pro (Yearly)'));
  }

  let headPrice = document.createElement('div');
  finishDetails.textContent = '';
  finishDetails.appendChild(mainPlan);
  headPrice.appendChild(planH3);
  planHead.appendChild(headPrice);
  let changeLink = document.createElement("a");
  changeLink.appendChild(document.createTextNode('Change'));
  changeLink.classList.add('change-link');
  changeLink.setAttribute('href', '#');
  headPrice.appendChild(changeLink);

  changeLink.addEventListener('click', () => {
    sessionStorage.clear();
    window.location.reload();
  });

  let allAddOns = document.createElement("div");
  allAddOns.classList.add('all-addons');
  finishDetails.appendChild(planHead);

  if(sessionStorage.getItem('profile') != null) {
    let profile = document.createElement("div");
    profile.classList.add('single-addons');
    profile.classList.add('profile');
    let profileP = document.createElement('p');
    profileP.appendChild(document.createTextNode('Customizable Profile'))
    let profilePrice = document.createElement('span');
    profilePrice.appendChild(document.createTextNode(`+$${sessionStorage.getItem('profile')}/mo`));
    profile.appendChild(profileP);
    profile.appendChild(profilePrice);
    finishDetails.appendChild(profile);
  }

  if(sessionStorage.getItem('storage') != null) {
    let storage = document.createElement("div");
    storage.classList.add('single-addons');
    storage.classList.add('storage');
    let storageP = document.createElement('p');
    storageP.appendChild(document.createTextNode('Larger Storage'))
    let storagePrice = document.createElement('span');
    storagePrice.appendChild(document.createTextNode(`+$${sessionStorage.getItem('storage')}/mo`));
    storage.appendChild(storageP);
    storage.appendChild(storagePrice);
    finishDetails.appendChild(storage);
  }

  if(sessionStorage.getItem('online') != null) {
    let online = document.createElement("div");
    online.classList.add('single-addons');
    online.classList.add('online');
    let onlineP = document.createElement('p');
    onlineP.appendChild(document.createTextNode('Online Service'))
    let onlinePrice = document.createElement('span');
    onlinePrice.appendChild(document.createTextNode(`+$${sessionStorage.getItem('online')}/mo`));
    online.appendChild(onlineP);
    online.appendChild(onlinePrice);
    finishDetails.appendChild(online);
  }

  if(sessionStorage.getItem('online') != null || sessionStorage.getItem('storage') != null || sessionStorage.getItem('profile') != null) {
    document.querySelector('.plan-head').classList.add('border-btn');
  }

  let overallCostDiv = document.querySelector('.overall-cost');
  let overallCost = calcOverallCost();
  let overallCostSpan = document.createElement('span');
  overallCostSpan.appendChild(document.createTextNode(`+$${overallCost}/mo`));
  overallCostDiv.appendChild(overallCostSpan);
}

let addOnsBackBtn = document.querySelector('.add-back-btn');
addOnsBackBtn.addEventListener('click', () => {
  removeClass('active');
  addClass('step-2', 'active');
  document.querySelector('.add-ons').classList.add('d-none');
  document.querySelector('.select-plan').classList.remove('d-none');
});

let addOnsNextBtn = document.querySelector('.add-next-btn');
addOnsNextBtn.addEventListener('click', () => {
  if(document.querySelector('#onlineService').checked) {
    sessionStorage.setItem("online", document.querySelector('#onlineService').value);
  }
  if(document.querySelector('#largerStorage').checked) {
    sessionStorage.setItem("storage", document.querySelector('#largerStorage').value);
  }
  if(document.querySelector('#customizeableProfile').checked) {
    sessionStorage.setItem("profile", document.querySelector('#customizeableProfile').value);
  }
  removeClass('active');
  addClass('step-4', 'active');
  finishDeatails(); 
  document.querySelector('.finish-up').classList.remove('d-none');
  document.querySelector('.add-ons').classList.add('d-none');
});

// sessionStorage.clear()

let finishBackBtn = document.querySelector('.finish-back-btn');
finishBackBtn.addEventListener('click', () => {
  removeClass('active');
  addClass('step-3', 'active');
  document.querySelector('.add-ons').classList.remove('d-none');
  document.querySelector('.finish-up').classList.add('d-none');
});

// let theChangeLink = document.querySelector('.change-link');

let finishConfirmBtn = document.querySelector('.finish-next-btn');
finishConfirmBtn.addEventListener('click', () => {
  removeClass('active');
  addClass('step-4', 'active');
  document.querySelector('.finish-up').classList.add('d-none');
  document.querySelector('.summary').classList.remove('d-none');
});
