document.addEventListener('DOMContentLoaded', () => {
  const vehicleTypes = [
    { name: 'Tempo', capacity: 'Up to 800 kg', desc: 'Small tempo for light loads and intercity courier.' },
    { name: 'Mini Truck (Tata Ace)', capacity: 'Up to 1,000 kg', desc: 'Compact mini truck suitable for last-mile deliveries.' },
    { name: 'Bolero Pickup', capacity: 'Up to 800 kg', desc: 'Robust pickup, good for shorter hauls with rough roads.' },
    { name: 'Pickup Van', capacity: 'Up to 1,200 kg', desc: 'Enclosed pickup van for protected cargo.' },
    { name: 'Canter Truck', capacity: 'Up to 3,000 kg', desc: 'Medium-duty truck for larger loads.' },
    { name: '12-Feet Truck', capacity: '~3,500 kg', desc: 'Short wheelbase truck for household and small commercial moves.' },
    { name: '32-Feet Trailer', capacity: 'Heavy loads', desc: 'Large trailer for industrial shipments.' },
    { name: 'Tanker Truck', capacity: 'Liquid cargo', desc: 'Specialized tanker for liquid transportation.' },
    { name: 'Tipper', capacity: 'Construction material', desc: 'For sand, gravel, and construction debris.' }
  ];
  
  function openModal(modal) {
    modal.classList.remove('hidden');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }
  function closeModal(modal) {
    modal.classList.add('hidden');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }
  vehicleTypes.forEach(v => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'v-item';
    btn.textContent = v.name;
    btn.dataset.name = v.name;
    btn.addEventListener('click', () => openVehicleDetail(v));
    vehicleTypesContainer.appendChild(btn);
  });

  vehicleLink.addEventListener('click', (e) => {
    e.preventDefault();
    openModal(vehicleModal);
  });
  closeVehicle.addEventListener('click', () => closeModal(vehicleModal));
  function openVehicleDetail(vehicle) {
    vehicleTitle.textContent = vehicle.name;
    vehicleDescription.textContent = vehicle.desc || '';
    vehicleSpecList.innerHTML = '';
    const specs = [
      `Capacity: ${vehicle.capacity || 'N/A'}`,
      `Type: ${vehicle.name.includes('Trailer') ? 'Trailer / Heavy' : 'Truck / Light'}`,
      'Driver & permit included',
      'Insurance options available'
    ];
    specs.forEach(s => {
      const li = document.createElement('li');
      li.textContent = s;
      vehicleSpecList.appendChild(li);
    });
    closeModal(vehicleModal);
    openModal(vehicleDetailModal);
  }

  closeVehicleDetail.addEventListener('click', () => closeModal(vehicleDetailModal));
  bookThisVehicle.addEventListener('click', () => {
    alert(`${vehicleTitle.textContent} selected. Proceed to booking flow (implement backend).`);
    closeModal(vehicleDetailModal);
  });

  const menuToggle = document.getElementById("menuToggle");
  const navList = document.getElementById("navList");
  menuToggle.addEventListener("click", () => {
  navList.classList.toggle("active");
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

const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('nav-links');
menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

function togglePass(id, eye) {
  let input = document.getElementById(id);

  if (input.type === "password") {
    input.type = "text";
    eye.textContent = "🙈"; 
  } else {
    input.type = "password";
    eye.textContent = "👁️"; 
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
