
var educationCount = 1;
var skillsCount = 3;
var experiencesCount = 1;
var certificatesCount = 1;
var languagesCount = 2;



var levels=['Excellent','Very Good','Good','Middle','Passable'];
var levelsAr=['ممتاز','جيد جداً','جيد','متوسط','مقبول'];
var degree=['Diploma','Bachelor','Master','Doctor'];
var degreeAr=['دبلوم','بكالوريوس','ماجستير','دكتور'];

// Education En:
function AddEdu(){
  educationCount++;
  var newField1 = document.createElement('input');
  newField1.setAttribute('type','text');
  newField1.setAttribute('name','data[edu]');
  newField1.setAttribute('id','edu-'+educationCount);
  newField1.setAttribute('class','form-control edu-name col-1');
  newField1.setAttribute('placeholder','Another Education');
  document.getElementById('edu-rows').appendChild(newField1);
 
  var newField2 = document.createElement('select');
  newField2.setAttribute('name','degree');
  newField2.setAttribute('id','degree-'+educationCount);
  newField2.setAttribute('class','form-control degree skill_level col-2');
  document.getElementById('edu-rows').appendChild(newField2);

    for(var i=0;i<levels.length-1;i++){
    var option = document.createElement('option');
    option.value = degree[i];
    option.value.toLowerCase();
    option.text = degree[i];
    newField2.appendChild(option);
  }
}

// Education Ar:
function AddEduAr(){
  educationCount++;
  var newField1 = document.createElement('input');
  newField1.setAttribute('type','text');
  newField1.setAttribute('name','data[edu]');
  newField1.setAttribute('id','edu-'+educationCount);
  newField1.setAttribute('class','form-control edu-name col-1');
  newField1.setAttribute('placeholder','Another Education');
  document.getElementById('edu-rows').appendChild(newField1);
 
  var newField2 = document.createElement('select');
  newField2.setAttribute('name','degree');
  newField2.setAttribute('id','degree-'+educationCount);
  newField2.setAttribute('class','form-control degree skill_level col-2');
  document.getElementById('edu-rows').appendChild(newField2);

  for(var i=0;i<levels.length-1;i++){
  var option = document.createElement('option');
  option.value = degreeAr[i];
  option.value.toLowerCase();
  option.text = degreeAr[i];
  newField2.appendChild(option);
  }
  console.log(educationCount);
}

  function RemoveEdu(){
    var input_tags = document.getElementById('edu-rows').getElementsByTagName('input');
    var select_tags = document.getElementById('edu-rows').getElementsByTagName('select');
    if(input_tags.length > 1 && select_tags.length > 1) {
      document.getElementById('edu-rows').removeChild(input_tags[(input_tags.length) - 1]);
      document.getElementById('edu-rows').removeChild(select_tags[(select_tags.length) - 1]);
    }
    educationCount--;
  }
  //End of Education


// Skills:
function AddSkill(){
  skillsCount++;
var newField1 = document.createElement('input');
newField1.setAttribute('type','text');
newField1.setAttribute('name','data[skill]');
newField1.setAttribute('id','skill-'+skillsCount);
newField1.setAttribute('class','form-control skill_name col-1');
newField1.setAttribute('placeholder','Another Skill');
document.getElementById('skill-rows').appendChild(newField1);

var newField2 = document.createElement('select');
newField2.setAttribute('name','data[skillLevel]');
newField2.setAttribute('id','skill-level-'+skillsCount);
newField2.setAttribute('class','form-control skill_level col-2');
document.getElementById('skill-rows').appendChild(newField2);
for(var i=0;i<levels.length;i++){
  var option = document.createElement('option');
    option.value = levels[i];
    option.value.toLowerCase();
    option.text = levels[i];
    newField2.appendChild(option);}
}

// Skills Ar:
function AddSkillAr(){
  skillsCount++;
var newField1 = document.createElement('input');
newField1.setAttribute('type','text');
newField1.setAttribute('name','data[skill]');
newField1.setAttribute('id','skill-'+skillsCount);
newField1.setAttribute('class','form-control skill_name col-1');
newField1.setAttribute('placeholder','Another Skill');
document.getElementById('skill-rows').appendChild(newField1);

var newField2 = document.createElement('select');
newField2.setAttribute('name','data[skillLevel]');
newField2.setAttribute('id','skill-level-'+skillsCount);
newField2.setAttribute('class','form-control skill_level col-2');
document.getElementById('skill-rows').appendChild(newField2);
for(var i=0;i<levels.length;i++){
  var option = document.createElement('option');
    option.value = levelsAr[i];
    option.value.toLowerCase();
    option.text = levelsAr[i];
    newField2.appendChild(option);}
}

function RemoveSkill(){
  var input_tags = document.getElementById('skill-rows').getElementsByTagName('input');
  var select_tags = document.getElementById('skill-rows').getElementsByTagName('select');
  if(input_tags.length > 1 && select_tags.length > 1) {
    document.getElementById('skill-rows').removeChild(input_tags[(input_tags.length) - 1]);
    document.getElementById('skill-rows').removeChild(select_tags[(select_tags.length) - 1]);
  }
  skillsCount--;
}

//End of Skills

// Work Experiences:
function addExpert(){
  experiencesCount++;
var newField1 = document.createElement('input');
newField1.setAttribute('type','text');
newField1.setAttribute('name','data[expert]');
newField1.setAttribute('id','expert-'+experiencesCount);
newField1.setAttribute('class','form-control expert_name col-1');
newField1.setAttribute('placeholder','Another Work Experiences');
document.getElementById('expert-rows').appendChild(newField1);

var newField2 = document.createElement('input');
newField2.setAttribute('type','text');
newField2.setAttribute('name','expertDate');
newField2.setAttribute('id','expert-date-'+experiencesCount);
newField2.setAttribute('class','form-control expert_date col-2');
newField2.setAttribute('placeholder','Ex: 2021/12');
document.getElementById('expert-rows').appendChild(newField2);
}

function removeExpert(){
  var input_tags = document.getElementById('expert-rows').getElementsByTagName('input');
  if(input_tags.length > 2) {
    document.getElementById('expert-rows').removeChild(input_tags[(input_tags.length) - 1]);
    document.getElementById('expert-rows').removeChild(input_tags[(input_tags.length) - 1]);
  }
  experiencesCount--;
}

//End of Experiences

// Certificates:
function AddCertificate(){
  certificatesCount++;
var newField1 = document.createElement('input');
newField1.setAttribute('type','text');
newField1.setAttribute('name','data[certificate]');
newField1.setAttribute('id','certificate-'+certificatesCount);
newField1.setAttribute('class','form-control certificate_name');
newField1.setAttribute('placeholder','Another Certificate');
document.getElementById('certificate-rows').appendChild(newField1);
}

function RemoveCertificate(){
  var input_tags = document.getElementById('certificate-rows').getElementsByTagName('input');
  if(input_tags.length > 1) {
    document.getElementById('certificate-rows').removeChild(input_tags[(input_tags.length) - 1]);
  }
  certificatesCount--;
}
//End of Certificates

// Languages:
function AddLanguage(){
  languagesCount++;
  var newField1 = document.createElement('input');
  newField1.setAttribute('type','text');
  newField1.setAttribute('name','data[language]');
  newField1.setAttribute('id','language-'+languagesCount);
  newField1.setAttribute('class','form-control language col-1');
  newField1.setAttribute('placeholder','Another Language');
  document.getElementById('language-rows').appendChild(newField1);
  
  var newField2 = document.createElement('select');
  newField2.setAttribute('name','data[languageLevel]');
  newField2.setAttribute('id','language-level-'+languagesCount);
  newField2.setAttribute('class','form-control language_level col-2');
  document.getElementById('language-rows').appendChild(newField2);
  for(var i=0;i<levels.length;i++){
    var option = document.createElement('option');
      option.value = levels[i].toLowerCase();
      option.text = levels[i];
      newField2.appendChild(option);}
  }
  // Languages Ar:
function AddLanguageAr(){
  languagesCount++;
  var newField1 = document.createElement('input');
  newField1.setAttribute('type','text');
  newField1.setAttribute('name','data[language]');
  newField1.setAttribute('id','language-'+languagesCount);
  newField1.setAttribute('class','form-control language col-1');
  newField1.setAttribute('placeholder','Another Language');
  document.getElementById('language-rows').appendChild(newField1);
  
  var newField2 = document.createElement('select');
  newField2.setAttribute('name','data[languageLevel]');
  newField2.setAttribute('id','language-level-'+languagesCount);
  newField2.setAttribute('class','form-control language_level col-2');
  document.getElementById('language-rows').appendChild(newField2);
  for(var i=0;i<levels.length;i++){
    var option = document.createElement('option');
      option.value = levelsAr[i].toLowerCase();
      option.text = levelsAr[i];
      newField2.appendChild(option);}
  }
  
  function RemoveLanguage(){
    var input_tags = document.getElementById('language-rows').getElementsByTagName('input');
    var select_tags = document.getElementById('language-rows').getElementsByTagName('select');
    if(input_tags.length > 1 && select_tags.length > 1) {
      document.getElementById('language-rows').removeChild(input_tags[(input_tags.length) - 1]);
      document.getElementById('language-rows').removeChild(select_tags[(select_tags.length) - 1]);
    }
    languagesCount--;
  }
  
  //End of Languages

  function done(){
    //Education:
    var eduVar="";
    for(var i=1;i<=educationCount;i++){
      eduVar += document.getElementById("edu-"+i).value+" - "+document.getElementById("degree-"+i).value+", ";
    }
    document.getElementById("edu-"+educationCount).value = eduVar;
        
    //Skills:
    var skillVar="";
    for(var i=1;i<=skillsCount;i++){
      skillVar += document.getElementById("skill-"+i).value+" - "+document.getElementById("skill-level-"+i).value+", ";
    }
    document.getElementById("skill-"+skillsCount).value = skillVar;

    //Work Experiences:
    var expertVar="";
    for(var i=1;i<=experiencesCount;i++){
      expertVar += document.getElementById("expert-"+i).value+" - "+document.getElementById("expert-date-"+i).value+", ";
    }
    document.getElementById("expert-"+experiencesCount).value = expertVar;

    //Certificates:
    var certVar="";
    for(var i=1;i<=certificatesCount;i++){
      certVar += document.getElementById("certificate-"+i).value+", ";
    }
    document.getElementById("certificate-"+certificatesCount).value = certVar;
    
    //Languages:
    var langVar="";
    for(var i=1;i<=languagesCount;i++){
      langVar += document.getElementById("language-"+i).value+" - "+document.getElementById("language-level-"+i).value+", ";
    }
    document.getElementById("language-"+languagesCount).value = langVar;

//send data to google sheets
    // var form = document.getElementById('sheetdb-form');      
    // e.preventDefault();
    // fetch(form.action, {
    //     method : "POST",
    //     body: new FormData(document.getElementById("sheetdb-form")),
    // }).then(
    //     response => response.json()
    // ).then(
    //     alert("success تم ارسال البيانات بنجاح ")
    // );
    

  }
  