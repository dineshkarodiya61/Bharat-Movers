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