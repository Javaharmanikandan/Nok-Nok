export function emailValidator(email) {
  try {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (email.length == 0) {
      return {
        status: false,
        msg: "please enter your email",
      };
    } else if (reg.test(email) === false) {
      return {
        status: false,
        msg: "we didn't recognize this email",
      };
    } else {
      return {
        status: true,
        msg: "Email Address Valid!",
      };
    }
  } catch (err) {
    return {
      status: false,
      msg: err,
    };
  }
}

export function passwordValidator(password) {
  try {
    if (password.length == 0) {
      return {
        status: false,
        msg: "please enter your password",
      };
    } else if (password.length < 6) {
      return {
        status: false,
        msg: "minimum 6 characters",
      };
    } else if (password.indexOf(" ") >= 0) {
      return {
        status: false,
        msg: "can't contain white spaces",
      };
    } else {
      return {
        status: true,
        msg: "Password Valid!",
      };
    }
  } catch (err) {
    return {
      status: false,
      msg: err,
    };
  }
}
export function fisrtnameValidator(name,type){

    try {
    let reg = /^[A-Za-z]+$/;
    console.log(reg.test(name))
    if (name.length == 0) {
      return {
        status: false,
        msg: type +" is Required! ",
      };
    } else if (reg.test(name) === false) {
      return {
        status: false,
        msg: "Enter valid name or remove spaces!",
      };
    } else {
      return {
        status: true,
        msg: "First Name Valid!",
      };
    }
  } catch (err) {
    return {
      status: false,
      msg: err,
    };
  }
}

export function LastnameValidator(name,type){

    try {
    let reg = /^[A-Za-z]+$/;
    console.log(reg.test(name))
    if (name.length == 0) {
      return {
        status: false,
        msg: type +" is Required! ",
      };
    } else if (reg.test(name) === false) {
      return {
        status: false,
        msg: "Enter valid name or remove spaces!",
      };
    } else {
      return {
        status: true,
        msg: "Last Name Valid!",
      };
    }
  } catch (err) {
    return {
      status: false,
      msg: err,
    };
  }
}


export function MobileValidator(mobile) {
  try {
    if (mobile.length == 0) {
      return {
        status: false,
        msg: "Mobile Number is required!",
      };
    } else if (mobile.length <= 9) {
      return {
        status: false,
        msg: "Check Your Mobile!",
      };
    } else if (mobile.indexOf(" ") >= 0) {
      return {
        status: false,
        msg: "Can't contain spaces!",
      };
    } else {
      return {
        status: true,
        msg: "Mobile Valid!",
      };
    }
  } catch (err) {
    return {
      status: false,
      msg: err,
    };
  }
}


export function ExperienceValidator(experience) {
  try {
    if (experience.length == 0) {
      return {
        status: false,
        msg: "Experience is required!",
      };
    } 
    else if (experience.indexOf(" ") >= 0) {
      return {
        status: false,
        msg: "Can't contain spaces!",
      };
    } else {
      return {
        status: true,
        msg: "Experience Valid!",
      };
    }
  } catch (err) {
    return {
      status: false,
      msg: err,
    };
  }
}

