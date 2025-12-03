document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menuToggle");
  const navList = document.getElementById("navList");
  menuToggle.addEventListener("click", () => {
    navList.classList.toggle("active");
  });
  const pickupCity = document.getElementById("pickupCity");
  const deliveryCity = document.getElementById("deliveryCity");
  const bookingBtn = document.getElementById("bookingBtn");
  const bookingModal = document.getElementById("bookingModal");

  const fullName = document.getElementById("fullName");
  const mobile = document.getElementById("mobile");
  const altMobile = document.getElementById("altMobile");
  const bvehicleetype = document.getElementById("bvehicleetype");

  const itemtype = document.getElementById("itemtype");
  const idType = document.getElementById("idType");
  const idNumber = document.getElementById("idNumber");
  const idLabel = document.querySelector('label[for="idNumber"]');
  const dateSelect = document.getElementById("dateSelect");
  const idUpload = document.getElementById("idUpload");
  const imgUpload = document.getElementById("imgUpload");

  const finalMobile = document.getElementById("finalMobile");
  const sendOtp = document.getElementById("sendOtp");
  const otpContainer = document.querySelector(".otp-container");
  const otpInputs = document.querySelectorAll(".otp-input");

  const bstep1 = document.getElementById("bstep1");
  const bstep2 = document.getElementById("bstep2");
  const bstep3 = document.getElementById("bstep3");
  const bstep4 = document.getElementById("bstep4");

  const barStep1 = document.getElementById("barStep1");
  const barStep2 = document.getElementById("barStep2");
  const barStep3 = document.getElementById("barStep3");

  const next1 = document.getElementById("next1");
  const next2 = document.getElementById("next2");
  const back1 = document.getElementById("back1");
  const back2 = document.getElementById("back2");
  const back3 = document.getElementById("back3");
  const bsubmitBtn = document.getElementById("bsubmitBtn");
  const closebtn = document.getElementById("closebtn");

  bookingBtn.addEventListener("click", () => {
    if (pickupCity.value.trim() === "" || deliveryCity.value.trim() === "") {
      alert("Please enter Pickup & Delivery cities!");
      return;
    }
    bookingModal.style.display = "flex";
    resetBooking();
  });
  function resetBooking() {
    showStep(bstep1);
    activateBar(barStep1);
    document.querySelectorAll("#bookingModal input").forEach(i => {
      i.value = "";
      i.style.border = "";
    });
    otpContainer.style.display = "none";
    otpInputs.forEach(i => {
      i.value = "";
      i.disabled = true;
      i.style.border = "";
    });
    pickupCity.value = "";
    deliveryCity.value = "";
  }

  const placeholders = {
    "aadhaa": "1234-5678-9123",
    "pan": "AFZPK7190K",
    "voter": "ABC1234567",
    "dl": "MH0120181234567"
  };
 const labels = {
   "aadhaa": "Aadhaar Card",
   "pan": "PAN Card",
   "voter": "Voter ID",
   "dl": "Driving License"
 };
 idType.addEventListener("change", () => {
   const type = idType.value;
   idNumber.value = "";
   idNumber.style.border = "";
   if (placeholders[type]) {
     idNumber.placeholder = placeholders[type];
     idLabel.textContent = "Enter " + labels[type] + " Number";
    } else {
     idNumber.placeholder = "Enter ID Number";
     idLabel.textContent = "Enter ID Number";
    }
  });

  function validateIDFormat(type, number) {
   number = number.trim().toUpperCase();
   switch (type) {
     case "aadhaa":
      return /^\d{4}-\d{4}-\d{4}$/.test(number);  
     case "pan":
      return /^[A-Z]{5}[0-9]{4}[A-Z]$/.test(number);
     case "voter":
      return /^[A-Z]{3}[0-9]{7}$/.test(number);
     case "dl":
      return /^[A-Z]{2}[0-9]{13,14}$/.test(number);
     default:
      return false;
    }
  }
  idNumber.addEventListener("input", () => {
  let isValid = validateIDFormat(idType.value, idNumber.value);

  if (isValid) {
    idNumber.style.border = "2px solid #65b042ff"; 
  } else {
    idNumber.style.border = "2px solid red";
  }
});


  function showStep(step) {
    [bstep1, bstep2, bstep3, bstep4].forEach(e => (e.style.display = "none"));
    step.style.display = "block";
  }
  function activateBar(step) {
    [barStep1, barStep2, barStep3].forEach(e => e.classList.remove("active"));
    step.classList.add("active");
  }

  next1.addEventListener("click", (e) => {
    e.preventDefault();
    if (fullName.value.trim() === "") return fullName.focus();
    if (mobile.value.trim().length !== 10) return mobile.focus();
    if (bvehicleetype.value === "") return bvehicleetype.focus();
    showStep(bstep2);
    activateBar(barStep2);
  });

  back1.addEventListener("click", () => {
    bookingModal.style.display = "none";
    resetBooking();
  });

  function scrollModalTop() {
    const modalContainer = document.querySelector('.bmodel');
    modalContainer.scrollTop = 0; 
  }
  next2.addEventListener("click", (e) => {
    e.preventDefault();
    if (itemtype.value === "") return itemtype.focus();
    if (idType.value === "") return idType.focus();
    if (!validateIDFormat(idType.value, idNumber.value)) {
      alert("Invalid " + idType.value + " Number Format!");
      idNumber.style.border = "2px solid red";
      idNumber.focus();
      return;
    }
    if (dateSelect.value === "") return dateSelect.focus();
    if (idUpload.files.length === 0) return idUpload.focus();
    if (imgUpload.files.length === 0) return imgUpload.focus();
    showStep(bstep3);
    activateBar(barStep3);
    scrollModalTop();
  });

  back2.addEventListener("click", () => {
    showStep(bstep1);
    activateBar(barStep1);
    scrollModalTop();
  });

  const REAL_OTP = "123456";
  finalMobile.addEventListener("input", () => {
   if (finalMobile.value.trim() === mobile.value.trim()) {
     finalMobile.style.border = "2px solid #00c853"; 
    } else {
      finalMobile.style.border = "2px solid red";
    }
  });
  sendOtp.addEventListener("click", () => {
    if (finalMobile.value.trim() !== mobile.value.trim()) {
      alert("Mobile number not matching Basic Details");
      finalMobile.style.border = "2px solid red";
      return;
    }
    if (finalMobile.value.trim().length !== 10) {
      alert("Please enter a valid 10-digit mobile number");
      return;
    }
    finalMobile.style.border = "";
    otpContainer.style.display = "flex";
    otpInputs.forEach(i => {
      i.value = "";
      i.disabled = false;
      i.style.border = "";
   });
   otpInputs[0].focus();
   alert("OTP Sent Successfully!");
  });

  otpInputs.forEach((input, index) => {
    input.addEventListener("input", () => {
      if (input.value.length === 1 && index < otpInputs.length - 1) {
        otpInputs[index + 1].focus();
      }
    });
    input.addEventListener("keydown", (e) => {
      if (e.key === "Backspace") {
        if (input.value === "" && index > 0) {
          otpInputs[index - 1].focus();
        }
      }
    });
 });

  bsubmitBtn.addEventListener("click", () => {
    let typedOTP = "";
    otpInputs.forEach(inp => typedOTP += inp.value);
    if (typedOTP.length !== 6) {
      alert("Please enter complete 6-digit OTP");
      return;
    }
    if (typedOTP === REAL_OTP) {
      alert("✔ OTP Verified Successfully!");
      document.getElementById("bstep3").style.display = "none";
      document.getElementById("bstep4").style.display = "block";
      document.getElementById("barStep3").classList.add("active");
    } else {
      alert("Wrong OTP");
      otpInputs.forEach(box => {
        box.style.border = "2px solid red";
        setTimeout(() => (box.style.border = ""), 1000);
      });
    }
 });

  back3.addEventListener("click", () => {
    showStep(bstep2);
    activateBar(barStep2);
  });

  bsubmitBtn.addEventListener("click", () => {
    let otpFilled = true;
    document.querySelectorAll(".otp-input").forEach((input) => {
      if (input.value.trim() === "") otpFilled = false;
    });
    if (!otpFilled) {
      alert("Please enter complete OTP!");
      return;
    }
    showStep(bstep4);
  });

  closebtn.addEventListener("click", () => {
    bookingModal.style.display = "none";
    resetBooking(); 
  });

  document.getElementById("bookScrollBtn").addEventListener("click", function () {
    document.getElementById("bookingBox").scrollIntoView({
      behavior: "smooth",
      block: "center"
   });
   setTimeout(() => {
      document.getElementById("pickupCity").focus();
    }, 700); 
  });

});

const accountModal = document.getElementById('accountModal');
const loginModal = document.getElementById('loginModal');
const forgotModal = document.getElementById('forgotModal');
const createAccountBtn = document.getElementById('createAccountBtn');
const loginModalBtn = document.getElementById('loginModalBtn');
const goLoginBtn = document.getElementById('goLogin');
const backBtn = document.getElementById('backBtn');
const backLoginBtn = document.getElementById('backLogin');
const forgotBtn = document.getElementById('forgotBtn');
const backForgotBtn = document.getElementById('backForgot');
const closeAccountModal = document.getElementById('closeAccountModal');
const closeLoginModal = document.getElementById('closeLoginModal');
const closeForgotModal = document.getElementById('closeForgotModal');

createAccountBtn.onclick = () => {
  accountModal.style.display = 'flex';
  document.body.style.overflow = "hidden"; 
};
loginModalBtn.onclick = () => {
  loginModal.style.display = 'flex';
  document.body.style.overflow = "hidden"; 
};
goLoginBtn.onclick = () => {
  accountModal.style.display = 'none';
  loginModal.style.display = 'flex';
};

backBtn.onclick = () => {
  accountModal.style.display = 'none';
  document.body.style.overflow = "auto";
};
backLoginBtn.onclick = () => {
  loginModal.style.display = 'none';
  document.body.style.overflow = "auto"; 
};
forgotBtn.onclick = () => {
  loginModal.style.display = 'none';
  forgotModal.style.display = 'flex';
};
backForgotBtn.onclick = () => {
  forgotModal.style.display = 'none';
  loginModal.style.display = 'flex';
};
closeAccountModal.onclick = () => {
  accountModal.style.display = 'none';
  document.body.style.overflow = "auto";
};
closeLoginModal.onclick = () => {
  loginModal.style.display = 'none';
  document.body.style.overflow = "auto";
};
closeForgotModal.onclick = () => {
  forgotModal.style.display = 'none';
  document.body.style.overflow = "auto";
};

window.onclick = (e) => {
  if (e.target === accountModal) {
    accountModal.style.display = 'none';
    document.body.style.overflow = "auto";  
  }
  if (e.target === loginModal) {
    loginModal.style.display = 'none';
    document.body.style.overflow = "auto";   
  }
  if (e.target === forgotModal) {
    forgotModal.style.display = 'none';
    document.body.style.overflow = "auto";  
  }
};

function togglePass(id, el) {
  const input = document.getElementById(id);
  if (input.type === "password") {
    input.type = "text";
    el.textContent = "🙈";   
  } else {
    input.type = "password";
    el.textContent = "👁️"; 
  }
}

function validatePasswords(id1, id2, errorId) {
  let p = document.getElementById(id1);
  let cp = document.getElementById(id2);
  let msg = document.getElementById(errorId);

  const passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[%^&*()\-_\+={}|\;:"<>,./?$~!@#]).{8,16}$/;

  if (p.value.trim() === "" || cp.value.trim() === "") {
    msg.innerText = "";
    return false;
  }
  if (!passRegex.test(p.value)) {
    msg.innerText = "Password must be 8–16 chars, include UPPERCASE, lowercase, number & special char.";
    msg.style.color = "red";
    return false;
  }
  if (p.value !== cp.value) {
    msg.innerText = " Password and Confirm Password must match!";
    msg.style.color = "red";
    return false;
  }
  msg.innerText = "Password valid!";
  msg.style.color = "green";
  return true;
}
document.getElementById("password").addEventListener("input", function () {
  validatePasswords("password", "cpassword", "passError");
});
document.getElementById("cpassword").addEventListener("input", function () {
  validatePasswords("password", "cpassword", "passError");
});
function togglePass(id, eye) {
  let input = document.getElementById(id);

  if (input.type === "password") {
    input.type = "text";
    eye.textContent = "👁️";  
  } else {
    input.type = "password";
    eye.textContent = "👁️‍🗨️/"; 
  }
}


