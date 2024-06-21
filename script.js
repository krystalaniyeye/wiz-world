const nameinput=document.getElementById(name);
const emailinput=document.getElementById(emial);
const namerules = {required : true,
minlength: 1,
maxlength: 12,
};
 
 if(namerules.required && nameinput.value ==='') {
    nameinput.classList.add(error);
 }
 else if ( namerules.required && nameinput.value.lenght< namerules.
    minlength);
    {nameinput.classList.add(error);
    }
 if (nameinput.required && nameinput.value.lenght > namerules.minlength)
 {nameinput.classList.add(error);}
 else
{(nameinput.classList.remove(error));}

if (emailrules.required && emailinput.values==='') {
    emailinput.classList.add(error);
}
else if (emailrules.emial && !validateemail(emailinput.values))
    {emailinput.classList.add(error);}
else{emailinput.classList.remove(error);}

{ const isValid = !nameInput.classList.contains('error') && !emailInput.classList.contains('error');
    return isValid;
  }
  const isValid = !nameInput.classList.contains('error') && !emailInput.classList.contains('error');
  return isValid;


