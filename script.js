document.addEventListener('DOMContentLoaded', () => {

  const hamburger = document.getElementById('hamburger');
  const navList = document.getElementById('navList');
  const vehicleLink = document.getElementById('vehicleLink');
  const locationLink = document.getElementById('locationLink');
  const vehicleModal = document.getElementById('vehicleModal');
  const closeVehicle = document.getElementById('closeVehicle');
  const vehicleTypesContainer = document.getElementById('vehicleTypesContainer');
  const vehicleDetailModal = document.getElementById('vehicleDetailModal');
  const closeVehicleDetail = document.getElementById('closeVehicleDetail');
  const vehicleTitle = document.getElementById('vehicleTitle');
  const vehicleDescription = document.getElementById('vehicleDescription');
  const vehicleSpecList = document.getElementById('vehicleSpecList');
  const bookThisVehicle = document.getElementById('bookThisVehicle');
  const locationModal = document.getElementById('locationModal');
  const closeLocation = document.getElementById('closeLocation');
  const stateButtons = document.getElementById('stateButtons');
  const cityList = document.getElementById('cityList');
  const selectedStateEl = document.getElementById('selectedState');
  const citiesContainer = document.getElementById('citiesContainer');

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

  const stateCityData = {
   "Andhra Pradesh": ["Visakhapatnam","Vijayawada","Guntur","Tirupati","Kurnool","Rajahmundry","Kakinada","Anantapur","Nellore",
  "Chittoor","Eluru","Kadapa","Ongole","Machilipatnam","Tenali","Proddatur","Hindupur","Nandyal","Bhimavaram","Adoni","Madanapalle","Srikakulam","Tadepalligudem","Chilakaluripet","Gudivada","Narasaraopet",
  "Anakapalle","Tuni","Dharmavaram","Amalapuram","Vinukonda","Markapur","Kadiri","Rayachoti","Kovvur","Palakollu","Tanuku","Repalle","Mandapeta","Peddapuram","Samalkot","Ravulapalem","Bapatla","Pithapuram",
  "Narsapur","Jaggayyapeta","Macherla","Addanki","Penukonda","Punganur","Nagari","Sullurupeta","Venkatagiri","Naidupeta","Gudur","Atmakur","Yerraguntla","Mydukur","Badvel","Jammalamadugu","Pulivendula","Rajampet",
  "Venkatagirikota","Kuppam","Pileru","Palamaner","Chandragiri","Renigunta","Tiruchanur","Puttur","Satyavedu","Chodavaram","Yelamanchili","Payakaraopeta","Narsipatnam","Kotabommali","Palasa","Tekkali","Itchapuram",
  "Amadalavalasa","Narasannapeta","Rajam","Cheepurupalle","Bobbili","Parvathipuram","Salur","Vizianagaram","Srungavarapukota","Kothavalasa","Pendurthi","Anandapuram","Bheemunipatnam","Paderu","Chintapalle",
  "Araku Valley","Rampachodavaram","Koyyalagudem","Buttayagudem","Polavaram","Elamanchili","Penugonda","Undrajavaram","Chagallu","Nidadavole","Tallapudi","Kovvuru","Tadepalligudem","Undi","Achanta","Poduru",
  "Mogalthur","Palakollu","Narsapuram","Bhattiprolu","Kolluru","Cherukupalli","Amruthalur","Karlapalem","Tenali","Repalle","Avanigadda","Machilipatnam","Nagayalanka","Pedana","Vuyyuru","Gudivada","Pamarru",
  "Kaikaluru","Mandavalli","Mudinepalli","Bantumilli","Koduru","Challapalli","Ghantasala","Movva","Kankipadu","Gannavaram","Nuzvid","Mylavaram","Ibrahimpatnam","Jaggayyapet","Vissannapet","Chandarlapadu"],

  "Arunachal Pradesh": ["Itanagar","Naharlagun","Pasighat","Ziro","Tawang","Bomdila","Seppa","Along","Aalo","Roing","Tezu","Changlang","Khonsa","Namsai","Yingkiong","Daporijo","Basar","Anini","Hayuliang",
  "Koloriang","Pangin","Pakke Kessang","Miao","Jairampur","Bordumsa","Deomali","Kanubari","Longding","Lohitpur","Hawai","Manmao","Mahadevpur","Chongkham","Wakro","Sunpura","Lekang","Namsang","Kharsang",
  "Namphai","Bhalukpong","Dirang","Rupa","Shergaon","Kalaktang","Singchung","Thembang","Tawang Town","Lumla","Jang","Thingbu","Mukto","Nafra","Bomdila Town","Thungri","Senge Dzong","Papu Nallah","Kimin",
  "Doimukh","Banderdewa","Sagalee","Leporiang","Mengio","Balijan","Poma","Poma Village","Midpu","Chiputa","Ganga Village","Hollongi","Nirjuli","Yachuli","Raga","Ziro-II","Old Ziro","Hong Village","Hari Village",
  "Bulla","Talle Camp","Pangin","Koyu","Boleng","Rebo-Perging","Mariyang","Mebo","Ruksin","Bilat","Nari","Seram","Koronu","Iduli","Hunli","Desali","Etalin","Mipi","Anelih","Tuting","Gelling","Migging","Paling",
  "Monigong","Mechuka","Tato","Payum","Geku","Katan","Kebo","Sille","Namsai Town","Lathao","Nongtaw","Empong","Lathau","Chongkham H.Q.","Manmao Circle","Diyun","Khusung","Namphake","New Mohong","Old Mohong",
  "Kherem","Mahadevpur Circle","Nampong","Pangsu Pass"],
  
  "Assam": ["Guwahati","Dispur","Jorhat","Dibrugarh","Silchar","Tinsukia","Tezpur","Nagaon","Sivasagar","Golaghat","Dhemaji","North Lakhimpur","Karimganj","Hailakandi","Barpeta","Bongaigaon","Goalpara",
  "Kokrajhar","Dhubri","Morigaon","Nalbari","Sonitpur","Udalguri","Baksa","Chirang","Hojai","Biswanath Chariali","Majuli","Darrang","Tamulpur","Pathsala","Rangia","Marigaon","Gohpur","Dergaon","Titabar",
  "Nazira","Amguri","Namrup","Digboi","Duliajan","Margherita","Sadiya","Doom Dooma","Tengakhat","Chabua","Moran","Naharkatia","Bilasipara","Gauripur","Abhayapuri","Bijni","Howly","Bengtol","Gossaigaon",
  "Tamulpur","Barama","Baganpara","Goreswar","Tangla","Kalaigaon","Udalguri Town","Mazbat","Panery","Mangaldoi","Kharupetia","Dalgaon","Kakopathar","Makum","Mariani","Bokakhat","Numaligarh","Bokajan",
  "Diphu","Donkamokam","Howraghat","Haflong","Maibang","Umrangso","Lala","Badarpur","Kalain","Patharkandi","Ratabari","Nilambazar","Ramkrishna Nagar","Bihpuria","Dhakuakhana","Jonai","Gogamukh","Sadiya",
  "Saikhowa","Jagun","Pengeri","Bordubi","Namti","Demow","Sonari","Sapekhati","Rajmai","Bokakhat","Kaziranga","Numaligarh Refinery","Jakhalabandha","Samaguri","Kampur","Hojai Town","Doboka","Lanka","Lumding",
  "Jamunamukh","Dhing","Raha","Kaliabor","Teok","Mariani","Bhogamukh","Jalukbari","Beltola","Azara","Palashbari","Mirza","Chaygaon","Sualkuchi","Rangia","Hajo","Sonapur","Khetri","Goreswar","Goalpara Town",
  "Krishnai","Lakhipur","Dudhnoi","Matia","Barpeta Road","Sarthebari","Baghbar","Bhabanipur","Kayakuchi","Jalah","Tihu","Nalbari Town","Kumarikata","Mushalpur","Salbari","Bhowraguri","Kokrajhar Town","Dotma","Serfanguri","Chirang"],

 "Bihar": ["Patna","Gaya","Bhagalpur","Muzaffarpur","Purnia","Darbhanga","Arrah","Begusarai","Katihar","Munger","Chapra","Bettiah","Sasaram","Hajipur","Siwan","Motihari","Nawada","Sitamarhi","Dehri","Buxar",
 "Kishanganj","Jehanabad","Aurangabad","Lakhisarai","Samastipur","Madhepura","Supaul","Araria","Nalanda","Khagaria","Banka","Jamui","Sheikhpura","Vaishali","Sheohar","Kaimur","Gopalganj",
 "Bhagalpur Rural","Maner","Barh","Bikramganj","Naugachia","Forbesganj","Raxaul","Motipur","Barauli","Mahnar","Dalsinghsarai","Rosera","Hilsa","Islampur","Bakhtiyarpur","Fatuha","Masaurhi","Danapur",
 "Bihta","Paliganj","Punpun","Phulwari Sharif","Barhampur","Koilwar","Piro","Bhabua","Mohania","Nokha","Dehri-on-Sone","Tilouthu","Rajpur","Akorhi Gola","Shahpur","Simri","Barhara","Jagdishpur",
 "Behea","Amarpur","Belhar","Dhuraiya","Katoria","Chanan","Sono","Sultanganj","Kahalgaon","Naugachia","Sabour","Banka Town","Sikandara","Jamui Town","Jhajha","Lakhisarai Town","Halsi",
 "Barahiya","Bihar Sharif","Rajgir","Pawapuri","Ekangarsarai","Asthawan","Islampur","Nawada Town","Rajauli","Warsaliganj","Hisua","Warisaliganj","Pipra","Purnea City","Banmankhi","Dhamdaha","Kasba",
 "Rupauli","Baisi","Araria Town","Raniganj","Forbesganj","Narpatganj","Kursakanta","Sikti","Supaul Town","Triveniganj","Raghopur","Chhatapur","Basantpur","Madhepura Town","Udakishanganj","Shankarpur","Kumarkhand",
 "Laukahi","Jhanjharpur","Benipatti","Biraul","Madhubani","Phulparas","Rajnagar","Jainagar","Harlakhi","Sakri","Biraul","Saharsa","Mahishi","Simri Bakhtiyarpur","Sonbarsa","Salkhua","Patraghat","Banma Itahari",
 "Amnour","Maker","Parsa","Ekma","Siwan Town","Gopalganj Town","Hathua","Barauli","Bhorey","Baikunthpur","Bettiah Town","Chanpatia","Ramnagar","Sikta","Narkatiaganj","Lauria","Bagaha","Thakrahan","Piprasi",
 "Bairia","Majhaulia","Gaunaha","Mainatand","Motihari Town","Kesaria","Areraj","Chakia","Kalyanpur","Patahi","Raxaul","Sugauli","Pakridayal","Turkaulia","Piprakothi","Dhaka","Sitamarhi Town","Riga","Bathnaha",
 "Majorganj","Parihar","Sursand","Bajpatti","Belsand","Pupri","Nanpur","Runisaidpur","Mehsi","Baruraj"],

  "Chhattisgarh": ["Raipur","Bhilai","Durg","Bilaspur","Korba","Raigarh","Rajnandgaon","Jagdalpur","Ambikapur","Dhamtari","Mahasamund","Kanker","Kondagaon","Dantewada","Bijapur","Narayanpur","Sukma","Balod","Baloda Bazar",
  "Bemetara","Gariaband","Balrampur","Surajpur","Jashpur","Kawardha","Mungeli","Pendra","Pathalgaon","Kota","Takhatpur","Lormi","Katghora","Pali","Champa","Sakti","Janjgir","Naila","Akaltara","Pamgarh",
  "Kharsia","Sarangarh","Lailunga","Gharghoda","Tamnar","Baramkela","Ambikapur Rural","Udaipur","Lundra","Mainpat","Sitapur","Batouli","Rajpur","Pratappur","Surajpur Town","Bhaiyathan","Balrampur Town","Ramanujganj",
  "Shankargarh","Kusmi","Jashpur Nagar","Kunkuri","Duldula","Pathalgaon","Farsabahar","Manora","Bagicha","Kawardha Town","Pandariya","Bodla","Sahaspur Lohara","Chilfi","Mungeli Town","Pathariya","Lormi Town",
  "Takhatpur Town","Seorinarayan","Janjgir Town","Akaltara Town","Champa Town","Raigarh Town","Tamnar Block","Sarangarh Town","Raipur Rural","Arang","Abhanpur","Tilda Newra","Simga","Baloda Bazar Town","Bhatapara",
  "Palari","Kasdol","Kharora","Bemetara Town","Saja","Than Khamharia","Dondi","Dondi Lohara","Gunderdehi","Balod Town","Dhamtari Town","Kurud","Magarlod","Nagri","Raipur City","Birgaon","Naya Raipur (Atal Nagar)",
  "Kanker Town","Charama","Narharpur","Bhanupratappur","Antagarh","Kondagaon Town","Makdi","Farasgaon","Bade Rajpur","Narayanpur Town","Orchha","Bijapur Town","Bhairamgarh","Usur","Basaguda","Sukma Town",
  "Chhindgarh","Konta","Dornapal","Jagdalpur Town","Bastanar","Bakawand","Tokapal","Lohandiguda","Bastar","Darbha","Netanar","Raoghat","Tirathgarh","Chitrakote","Barsur","Chhura","Mainpur","Deobhog",
  "Rajim","Mahasamund Town","Saraipali","Bagbahra","Pithora","Gariaband Town","Chhura Town","Basna"],

  "Goa": ["Panaji","Margao","Vasco da Gama","Mapusa","Ponda","Bicholim","Curchorem","Sanquelim","Valpoi","Quepem","Sanguem","Canacona","Cuncolim","Calangute","Candolim","Benaulim","Colva","Varca","Cavelossim","Betalbatim",
  "Assagao","Anjuna","Arpora","Siolim","Morjim","Ashvem","Mandrem","Pernem","Aldona","Saligao","Parra","Nerul","Reis Magos","Caranzalem","Miramar","Dona Paula","Taleigao","St Cruz","Chimbel","Old Goa",
  "Corlim","Kundai","Loutolim","Nuvem","Curtorim","Raia","Fatorda","Navelim","Aquem","Borda","Bambolim", "Cortalim","Sancoale","Dabolim","Bogmalo","Sada","Chicalim","Verna","Utorda","Majorda","Betalbatim",
  "Colomb","Agonda","Palolem","Chaudi","Poinguinim","Khola","Galgibaga","Cuncolim Town","Balli","Loliem","Assolna","Velim","Chandor","Davorlim","Margao City","Nuvem Village","Raia Village","Curtorim Village",
  "Verna Village","Cansaulim","Velsao","Bogmalo Beach","Sancoale Village","Zuari Nagar","Chicalim Village","Nagoa","Arpora Village","Saligao Village","Anjuna Village","Siolim Village","Morjim Village","Ashvem Village",
  "Mandrem Village","Parra Village","Nerul Village","Reis Magos Village","Candolim Village","Calangute Village","Baga","Chapora","Vagator","Pernem Town","Tuem","Dhargal","Colvale","Bardez","Tivim","Mapusa City",
  "Bicholim Town","Mayem","Sanquelim Town","Valpoi Town","Ponda City","Farmagudi","Bandora","Mardol","Shiroda","Kundaim","Borim","Curti","Keri","Mollem","Usgao","Dharbandora","Khandepar","Nirankal","Bethora","Quepem Town",
  "Sanguem Town","Canacona Town","Curchorem Town","Balli Village","Tilamol","Xeldem","Fatorpa","Ambaulim","Assolna Village","Velim Village","Varca Village","Orlim","Colva Village","Benaulim Village","Cavelossim Village",
  "Mobor","Betul","Naqueri","Polem","Cotigao","Galgibaga Village","Poinguinim Village","Agonda Village","Khola Village","Patnem","Palolem Village","Chaudi Town"],
  
  "Gujarat": ["Ahmedabad","Surat","Vadodara","Rajkot","Bhavnagar","Jamnagar","Gandhinagar","Junagadh","Anand","Navsari","Vapi","Morbi","Surendranagar","Nadiad","Mehsana","Patan","Palanpur","Godhra","Bharuch","Veraval",
  "Porbandar","Valsad","Botad","Amreli","Bhuj","Mandvi","Anjar","Kandla","Dholka","Sanand","Viramgam","Kalol","Modasa","Idar","Himmatnagar","Deesa","Unjha","Visnagar","Siddhpur","Bayad","Prantij",
  "Dahegam","Mansa","Halol","Padra","Karjan","Dabhoi","Chhota Udepur","Rajpipla","Narmada","Kevadia","Vyara","Songadh","Ahwa","Dang","Bardoli","Olpad","Kamrej","Choryasi","Udhna","Hazira","Palsana",
  "Mandvi Kachchh","Mundra","Gandhidham","Rapar","Bhachau","Samakhiali","Morbi Town","Wankaner","Tankara","Jetpur","Gondal","Upleta","Dhoraji","Manavadar","Keshod","Mangrol","Talala","Mendarda",
  "Bantwa","Bhesan","Dhrol","Kalavad","Jodiya","Khambhalia","Dwarka","Bhanvad","Kutiyana","Visavadar","Kodinar","Una","Talaja","Mahuva","Palitana","Sihor","Gadhada","Lathi","Savarkundla","Bagasara",
  "Dhari","Rajula","Jafrabad","Damnagar","Barwala","Vallabhipur","Borsad","Petlad","Sojitra","Tarapur","Khambhat","Cambay","Umreth","Anklav","Bhadran","Vinchhiya","Chotila","Sayla","Wadhwan","Limbdi",
  "Lakhtar","Dhrangadhra","Halvad","Patdi","Dasada","Viramgam Rural","Bareja","Dholera","Bavla","Kheda","Matar","Kathlal","Kapadvanj","Balasinor","Lunawada","Kadana","Santrampur","Khanpur",
  "Godhra Town","Halol Town","Kalol Panchmahals","Jambughoda","Morva Hadaf","Jhalod","Dahod", "Limkheda","Zalod","Devgadh Baria","Panchmahal","Chhotaudepur Town","Naswadi","Bodeli","Pavi Jetpur",
  "Sankheda","Rajpipla Town","Nandod","Dediapada","Sagbara","Tilakwada","Ankleshwar","Panoli","Dahej","Hansot","Jambusar","Amod","Vagra","Bharuch City","Netrang","Valia","Vansda","Gandevi",
  "Bilimora","Chikhli","Khergam","Jalalpore","Navsari City","Vapi Town","Umbergaon","Pardi","Sanjan","Daman Border","Silvassa","Tithal","Valsad City","Dharampur","Kaprada","Ahwa Dang","Subir",
  "Pindval","Vansda Town","Ukai","Vyara Town","Songadh Town","Nizar","Kukarmunda","Mandvi Surat","Olpad Town","Kamrej Town","Bardoli Town","Chalthan","Palsana Town","Lajpore","Sayan","Hazira Port",
  "Surat City","Adajan","Katargam","Varachha","Athwa Lines","Ghod Dod Road","Bhestan","Parvat Patiya","Udhna Town","Sachin","Pandesara","Amroli","Kosamba","Mangrol Junagadh","Maliya Hatina","Vanthali",
  "Visavadar Town","Bhesan Junagadh","Bagasara Town","Savarkundla Town","Mahuva Town","Palitana Town","Talaja Town","Sihor Town","Botad Town","Gadhada Town","Barwala Town","Ranpur","Dhandhuka","Dholka Town",
  "Bavla Town","Sanand Town","Ghuma","Bopal","Thaltej","Maninagar","Ellisbridge","Nikol","Odhav","Vatva","Naroda","Chandkheda","Sabarmati","Kalol Gandhinagar","Adalaj","Koba","Randheja","Chiloda",
  "Vavol","Sector 21 Gandhinagar","Sector 30 Gandhinagar","Pethapur","Sargasan","Kudasan"],

  "Haryana": ["Chandigarh","Gurugram","Faridabad","Panipat","Ambala","Karnal","Hisar","Rohtak","Yamunanagar","Sonipat","Panchkula","Rewari","Bhiwani","Sirsa","Jind","Kaithal","Kurukshetra","Fatehabad","Mahendragarh","Palwal",
  "Nuh","Jhajjar","Charkhi Dadri","Tohana","Ratia","Hansi","Narnaul","Kosli","Bahadurgarh","Sohna","Pataudi","Tauru","Punhana","Ferozepur Jhirka","Hodal","Hathin","Gohana","Ganaur","Kharkhoda","Sampla","Kalanaur",
  "Meham","Beri","Bahmanwas","Ladwa","Shahbad","Pehowa","Thanesar","Radaur","Bilaspur","Sadhaura","Jagadhri","Kanina","Ateli","Mahendragarh Town","Nangal Chaudhary","Bawal","Dharuhera","Rewari Town","Kosli Town",
  "Jatusana","Kharkhara","Bawani Khera","Siwani","Loharu","Dadri","Charkhi Town","Badhra","Kalanwali","Rania","Ellenabad","Dabwali","Mandi Dabwali","Barwala","Uklana","Narnaund","Hansi Town","Adampur","Hisar City",
  "Balsamand","Siwani Town","Fatehabad Town","Jakhal","Bhuna","Bhauna","Kalayat","Kaithal Town","Pundri","Rajound","Cheeka","Guhla","Pehowa Town","Ladwa Town","Shahabad Markanda","Kurukshetra Town","Pipli",
  "Thanesar Town","Nilokheri","Assandh","Karnal City","Gharaunda","Taraori","Indri","Panipat City","Samalkha","Israna","Madlauda","Bapauli","Gohana Town","Sonipat City","Ganaur Town","Kharkhoda Town",
  "Rai","Murthal","Kundli","Bahalgarh","Rohtak City","Kalanaur Town","Sampla Town","Meham Town","Ladrawan","Jhajjar Town","Berla","Matanhail","Dighal","Beri Town","Bahadurgarh City","Faridabad City","Ballabgarh",
  "Palwal City","Hodal Town","Hathin Town","Punhana Town","Nuh Town","Tauru Town","Sohna Town","Pataudi Town","Manesar","Bilaspur Chowk","Gurugram City","Wazirabad","Badshahpur","Sikanderpur","Dundahera","MG Road",
  "Sector 56 Gurugram","Sohna Road","Sultanpur","Basai","Garhi Harsaru","Farrukhnagar","Panchgaon","Kasan","Panchkula City","Kalka","Pinjore","Raipur Rani","Barwala Panchkula","Morni Hills","Ambala City",
  "Ambala Cantt","Naraingarh","Mullana","Shahzadpur","Saha","Babain","Jagadhri Town","Yamunanagar City","Mustafabad","Chhachhrauli","Bilaspur Yamunanagar","Kanalsi","Sarsawa Border","Fatehabad City","Ratia Town",
  "Bhattu Kalan","Jakhal Mandi","Tohana Town","Uklana Mandi","Sirsa City","Rania Town","Kalanwali Town","Ellenabad Town","Dabwali Town","Kagdana","Odhan","Mithi Surera","Beri Kalan","Siwani Khera","Dadri Town",
  "Charkhi Dadri City","Kheri","Bond Kalan","Sanjarwas","Chuli Bagrian","Jind City","Narwana","Julana","Safidon","Pillu Khera","Rajgarh Jind","Baroda","Alewa","Hansi Block","Narnaund Block","Uchana",
  "Kalayat Block","Kalka Town","Pinjore Town","Nuh City","Hodal Block","Palwal Block","Rewari City","Dharuhera Town","Bawal Town","Kosli Block","Mahendragarh Block","Kanina Block"],


  "Himachal Pradesh": ["Shimla","Dharamshala","Manali","Solan","Mandi","Kullu","Hamirpur","Bilaspur","Chamba","Una","Nahan","Paonta Sahib","Kangra","Palampur","Dalhousie","Keylong","Kaza","Reckong Peo","Rampur Bushahr",
  "Karsog","Joginder Nagar","Sundernagar","Banjar","Aut","Bajaura","Bhuntar","Naggar","Ani","Nirmand","Chowari","Churah","Bhattiyat","Tissa","Salooni","Rajgarh","Haripurdhar","Shillai","Sangrah","Renuka",
  "Dadahu","Jamta","Chopal","Kotkhai","Jubbal","Rohru","Theog","Narkanda","Kumarsain","Rampur","Sarahan","Jeori","Suni","Mashobra","Fagu","Kufri","Naldehra","Tattapani","Shoghi","Taradevi","Chail","Kandaghat",
  "Nalagarh","Arki","Kunihar","Darlaghat","Solan City","Parwanoo","Baddi","Barotiwala","Waknaghat","Dagshai","Subathu","Mandi City","Ner Chowk","Rewalsar","Sarkaghat","Sandhole","Baldwara","Jogindernagar",
  "Chauntra","Padhar","Kotli","Sundernagar Town","Bhangrotu","Tihra","Hamirpur City","Barsar","Nadaun","Bhoranj","Tira Sujanpur","Bijhari","Badsar","Una City","Gagret","Daulatpur Chowk","Amb","Haroli",
  "Bangana","Chintpurni","Santokhgarh","Mehatpur Basdehra","Kangra Town","Nagrota Bagwan","Shahpur","Nurpur","Indora","Fatehpur","Jawali","Jaisinghpur","Baijnath","Paprola","Bir","Barot","Palampur Town",
  "Maranda","Andreta","Thural","Panchrukhi","Khatiar","Mcleodganj","Dharamkot","Bhagsunag","Naddi","Yol Cantt","Nagrota Surian","Guler","Jwali","Haripur","Lanj","Kheri","Kandbari","Chakki","Dalhousie Town",
  "Khajjiar","Banikhet","Bathri","Tunnuhatti","Saho","Banikhet","Chamba Town","Chowgan","Bharmour","Holi","Killar","Pangi","Killar Town","Udaipur Lahaul","Keylong Town","Jispa","Darcha","Sissu","Gondhla",
  "Tandi","Gemur","Kaza Town","Tabo","Dankar","Lossar","Pin Valley","Nako","Sumdo","Chango","Kalpa","Sangla","Rakchham","Chitkul","Recong Peo Town","Nichar","Tapri","Powari","Wangtu","Bhaba Nagar",
  "Shongtong","Karchham","Sarahan Bushahr","Ribba","Morang","Rarang","Spillo","Lippa","Ropa","Asrang","Thangi","Labrang","Kothi","Batseri","Rogi","Kamalpur","Rampur Town","Jhakri","Dodra Kwar","Kharapathar",
  "Kotkhai Town","Rohru Town","Hatkoti","Jubbal Town","Nerwa","Chopal Town","Kupvi","Khara Pathar","Pachhad","Sangrah Town","Shillai Town","Renuka Town","Paonta Sahib Town","Puruwala","Majra","Kala Amb"],

  "Jharkhand": ["Ranchi","Jamshedpur","Dhanbad","Bokaro","Hazaribagh","Deoghar","Giridih","Ramgarh","Chaibasa","Gumla","Lohardaga","Simdega","Latehar","Palamu","Garhwa","Chatra","Koderma","Pakur","Dumka","Godda",
  "Sahebganj","Jamtara","Khunti","Saraikela","Chakradharpur","Mango","Chandil","Ghatshila","Adityapur","Tatanagar","Tundi","Topchanchi","Nirsa","Katras","Sindri","Bermo","Phusro","Chandrapura","Tenughat",
  "Gomia","Chas","Chandankiary","Kasmar","Peterwar","Jaridih","Nawadih","Gola","Angara","Ormanjhi","Kanke","Bundu","Tamar","Itki","Bero","Ratu","Khelari","Mandar","Lapung","Burmu","Chanho","Namkum",
  "Silli","Khunti Town","Torpa","Murhu","Karra","Bandgaon","Chaibasa Town","Manoharpur","Jagannathpur","Goilkera","Noamundi","Tonto","Sonua","Chakradharpur Town","Hatgamharia","Jhinkpani","Kharsawan",
  "Saraikela Town","Rajnagar","Ichagarh","Kukru","Gamharia","Dhalbhumgarh","Musabani","Potka","Patamda","Ghatshila Town","Baharagora","Baharagora","Jadugoda","Narwa Pahar","Kiriburu","Meghahatuburu",
  "Manoharpur Town","Gua","Chiria","Barajamda","Kiriburu Town","Noamundi Town","Dumka Town","Masalia","Jarmundi","Kathikund","Ranishwar","Ramgarh Town","Patratu","Mandu","Barkakana","Chitarpur","Rajrappa",
  "Bhadaninagar","Lohardaga Town","Kuru","Bhandra","Senha","Kisko","Gumla Town","Sisai","Bharno","Chainpur","Bishunpur","Raidih","Albert Ekka","Simdega Town","Bolba","Kolebira","Thethaitangar","Kurdeg","Bano",
  "Latehar Town","Balumath","Barwadih","Mahuadanr","Netarhat","Garhwa Town","Dandai","Ranka","Ramkanda","Bhawnathpur","Nagar Untari","Meral","Bhandaria","Palamu Town","Daltonganj","Hussainabad","Haidernagar",
  "Nawadiha","Bishrampur","Chhatarpur","Chainpur Palamu","Panki","Patan","Lesliganj","Kandi","Manatu","Chatra Town","Pratappur","Hunterganj","Itkhori","Kunda","Lawalong","Mayurhand","Gidhaur","Pathalgada",
  "Koderma Town","Domchanch","Satgawan","Markacho","Jainagar","Chandwara","Dhanwar","Tisri","Bagodar","Bengabad","Jamua","Birni","Deoghar Town","Sarath","Madhupur","Devipur","Karon","Mohanpur","Palojori",
  "Godda Town","Pathargama","Sundarpahari","Mahagama","Basantrai","Boarijor","Sahibganj Town","Barharwa","Borio","Rajmahal","Mandro","Udhwa","Jamtara Town","Kundhit","Nala","Narayanpur","Karma Tanr",
  "Chandankiyari","Bermo","Tisri","Bhandra","Jairagi","Ichak","Barkagaon","Katkamsandi","Padma","Barkatha","Churchu","Pelawal","Gorhar","Chouparan","Barhi","Dumri","Pirtand","Tisri","Sariya",
  "Giridih Town","Dhanwar Town","Jamua Town","Madhuban","Parasnath Hill","Isri Bazar","Topchanchi","Baliapur","Gobindpur","Jharia","Sindri Town","Katras Town","Chirkunda","Nirsa Town","Saraidhela",
  "Dhansar","Bhuli","Kusunda","Tetulmari","Putki","Govindpur","Hirapur","Bank More","Bartand","Jharia Basti","Bariyatu","Kokar","Harmu","Kantatoli","Morabadi","Doranda","Namkum","Tatisilwai",
  "Ormanjhi Town","Tupudana","Hatia","Kanke Dam","Piska More","Argora","Itki Road","Bundu Town","Tamar Town","Silli Town","Khunti Road","Piska","Nagri","Khelari Town","Bero Town","Lapung Town","Ratu Town","Burmu Town"],

  "Karnataka": ["Bengaluru","Mysuru","Mangalore","Hubli","Belagavi","Ballari","Davanagere","Vijayapura","Kalaburagi","Udupi","Tumakuru","Shivamogga","Raichur","Hassan","Bagalkot","Bidar","Chikkamagaluru","Mandya","Chitradurga","Kolar",
  "Karwar","Gadag","Yadgir","Haveri","Kodagu","Ramanagara","Chamarajanagar","Sirsi","Bhadravati","Dandeli","Hospet","Koppal","Sagara","Madikeri","Sira","Nanjangud","Basavakalyan","Sedam","Sindagi","Mudhol",
  "Jamkhandi","Tiptur","Sakleshpur","Gokak","Bhatkal","Honnavar","Kumta","Byndoor","Puttur","Bantwal","Moodbidri","Karkala","Mulki","Sullia","Belthangady","Dharmasthala","Kundapura","Gangavathi","Sindhanur",
  "Manvi","Lingsugur","Ilkal","Ron","Nargund","Mundargi","Hangal","Savanur","Shiggaon","Ranebennur","Hirekerur","Honnali","Nyamati","Holalkere","Hosadurga","Tarikere","Birur","Kadur","Arsikere","Belur","Sakleshpur Town",
  "Alur","Shravanabelagola","Pandavapura","Nagamangala","Srirangapatna","Malavalli","Maddur","KR Pet","Turuvekere","Kunigal","Gubbi","Tiptur Town","Koratagere","Pavagada","Challakere","Molakalmuru","Hiriyur","Holalkere Town",
  "Holenarasipura","Arakalagud","Kushalnagar","Somwarpet","Virajpet","Madikeri Town","Madapura","Piriyapatna","Hunsur","Saragur","T Narsipura","HD Kote","Periyapatna","KR Nagar","Chamarajanagar Town","Gundlupet",
  "Yelandur","Kollegal","Hanur","Kanakapura","Channapatna","Magadi","Ramanagara Town","Anekal","Devanahalli","Doddaballapur","Nelamangala","Hosakote","Chikkaballapur","Bagepalli","Gauribidanur","Sidlaghatta","Chintamani",
  "Mulbagal","Bangarpet","Kolar Gold Fields","Malur","Srinivasapura","Kolar Town","Bhadravati Town","Tarikere Town","Thirthahalli","Hosanagara","Ayanur","Sagara Town","Jog Falls","Siddapur","Yellapur","Sirsi Town","Karwar Town",
  "Ankola","Bhatkal Town","Kumta Town","Honnavar Town","Haliyal","Joida","Dandeli Town","Navalgund","Nargund Town","Mundargi Town","Lakshmeshwar","Hubballi Town","Dharwad Town","Kalghatgi","Kundgol","Kittur","Belagavi Town",
  "Bailhongal","Khanapur","Saundatti","Athani","Chikodi","Nipani","Raibag","Gokak Town","Ramdurg","Mudhol Town","Jamkhandi Town","Bagalkot Town","Bilagi","Hungund","Badami","Ron Town","Haveri Town","Savanur Town","Hangal Town",
  "Ranebennur Town","Shiggaon Town","Byadgi","Hirekerur Town","Gadag Town","Mundargi Town","Shirhatti","Nargund Town","Koppal Town","Gangavathi Town","Yelbarga","Kushtagi","Kanakagiri","Hosapete Town","Sandur","Kudligi","Siruguppa",
  "Ballari Town","Hampi","Toranagallu","Hospet Town","Sindhanur Town","Raichur Town","Deodurg","Maski","Manvi Town","Lingsugur Town","Yadgir Town","Gurumitkal","Shorapur","Chincholi","Afzalpur","Aland","Chittapur","Kalaburagi Town",
  "Sedam Town","Jewargi","Basavakalyan Town","Bidar Town","Humnabad","Bhalki","Aurad","Chikkamagaluru Town","Mudigere","Kadur Town","Tarikere Town","Birur Town","Sringeri","Koppa","Narve","Chikkamagaluru Village",
  "Hassan Town","Sakleshpur Town","Arsikere Town","Belur Town","Holenarasipura Town","Channarayapatna","Tiptur Town","Tumakuru Town","Gubbi Town","Madhugiri","Sira Town","Pavagada Town","Kunigal Town"],

  "Kerala": ["Thiruvananthapuram","Kochi","Kozhikode","Kollam","Thrissur","Alappuzha","Palakkad","Kannur","Kottayam","Malappuram","Pathanamthitta","Idukki","Wayanad","Ernakulam","Chengannur","Kayamkulam","Mavelikara","Changanassery","Pala","Vaikom",
  "Cherthala","Thodupuzha","Muvattupuzha","Perumbavoor","Kothamangalam","Kalamassery","Aluva","Nedumbassery","Angamaly","North Paravur","Piravom","Koothattukulam","Thrippunithura","Mattancherry","Fort Kochi","Edappally","Kalpetta","Mananthavady",
  "Sulthan Bathery","Nedumangad","Attingal","Varkala","Neyyattinkara","Poovar","Kattakkada","Punalur","Pathanapuram","Adoor","Ranni","Kozhencherry","Pandalam","Thiruvalla","Haripad","Ambalappuzha","Cherthala Town","Arthunkal","Mararikulam",
  "Mannancherry","Kayamkulam Town","Oachira","Karunagappally","Kottarakkara","Punalur Town","Kundara","Chavara","Paravur","Varkala Town","Anjengo","Attingal Town","Kilimanoor","Kallambalam","Chirayinkeezhu","Vamanapuram","Kadinamkulam","Balaramapuram",
  "Vizhinjam","Poovar Town","Thiruvananthapuram City","Vattappara","Venjaramoodu","Karamana","Pappanamcode","Poonthura","Nemom","Peroorkada","Kazhakkoottam","Sreekaryam","Ulloor","Kottayam Town","Ettumanoor","Pala Town","Erattupetta","Changanassery Town",
  "Vaikom Town","Kuravilangad","Kaduthuruthy","Piravom Town","Koothattukulam Town","Mundakayam","Kanjirappally","Erattupetta Town","Ponkunnam","Manimala","Puthuppally","Ayarkunnam","Puthenangady","Kumarakom","Aymanam","Puliyannoor","Kidangoor","Idukki Town",
  "Thodupuzha Town","Moolamattom","Painavu","Cheruthoni","Adimali","Nedumkandam","Kattappana","Kumily","Vandiperiyar","Peermade","Elappara","Murinjapuzha","Rajakkad","Rajakumari","Munnar","Devikulam","Marayoor","Kanthalloor","Vattavada","Kollam Town",
  "Chavara Town","Paravur Town","Karunagappally Town","Punalur Town","Anchal","Pathanapuram Town","Ezhukone","Kundara Town","Kottarakkara Town","Oachira Town","Sasthamcotta","Adoor Town","Pandalam Town","Kozhikode City","Feroke","Kappad","Beypore",
  "Kunnamangalam","Perambra","Koduvally","Ramanattukara","Koyilandy","Vatakara","Thalassery","Kannur Town","Payyannur","Mattannur","Iritty","Panoor","Koothuparamba","Taliparamba","Kuthuparamba","Kasargod","Kanhangad","Bekal","Nileshwar","Chengala","Manjeshwar",
  "Puthur","Udma","Hosdurg","Cheruvathur","Udma Town","Trikaripur","Periya","Mulleria","Delampady","Madhur","Paivalike","Kumbla","Palakkad Town","Chittur","Alathur","Ottappalam","Shoranur","Cherpulassery","Mannarkkad","Pattambi","Nemmara","Kollengode",
  "Koduvayur","Kottayi","Parli","Thenkurissi","Walayar","Malampuzha","Attappady","Agali","Pudur","Anakkatti","Erattakulam","Pathanamthitta Town","Ranni Town","Thiruvalla Town","Kozhencherry Town","Pandalam Town","Adoor Town","Mallappally","Konni","Seethathode","Perunad",
  "Angamoozhy","Sabarimala","Ernakulam City","Kochi City","Maradu","Vyttila","Edakochi","Palluruthy","Kadavanthra","Tripunithura","Kalamassery","Aluva Town","Perumbavoor Town","North Paravur Town","Muvattupuzha Town","Kothamangalam Town","Piravom Town",
  "Koothattukulam Town"],

  "Madhya Pradesh": ["Bhopal","Indore","Gwalior","Jabalpur","Ujjain","Sagar","Rewa","Satna","Dewas","Chhindwara","Ratlam","Murwara (Katni)","Singrauli","Burhanpur","Khandwa","Bhind","Shivpuri","Guna","Vidisha",
  "Chhatarpur","Damoh","Mandsaur","Neemuch","Sehore","Hoshangabad (Narmadapuram)","Betul","Raisen","Rajgarh","Seoni","Mandla","Balaghat","Dindori","Shahdol","Umaria","Sidhi","Anuppur","Morena",
  "Sheopur","Datia","Panna","Tikamgarh","Ashoknagar","Agar","Shajapur","Badnawar","Dhar","Khargone","Barwani","Jhabua","Alirajpur","Burhar","Nowrozabad","Beohari","Maihar","Nagod","Amarpatan",
  "Rampur Baghelan","Pawai","Hatta","Patharia","Bina","Khurai","Garhakota","Deori","Rehli","Berasia","Itarsi","Pipariya","Sohagpur","Harda","Timarni","Khategaon","Kannod","Bagli","Hatpipliya",
  "Sonkatch","Badnagar","Maheshwar","Sanawad","Kasrawad","Pandhana","Punasa","Mundi","Amla","Multai","Chicholi","Sarni","Pathakhera","Betul Bazar","Shahpura","Sihora","Panagar","Patan","Majholi",
  "Bareli","Mandideep","Obedullaganj","Bhojpur","Budhni","Rehti","Nasrullaganj","Seoni Malwa","Banapura","Sanchi","Gairatganj","Kurwai","Basoda","Lateri","Sironj","Ashta","Ichhawar","Kannod",
  "Shujalpur","Agar Malwa","Susner","Nalkheda","Tarana","Ghatiya","Mahidpur","Badnagar","Depalpur","Sanwer","Mhow","Manpur","Hatod","Betma","Khategaon","Ashta","Shajapur Town","Pachore","Khilchipur",
  "Narsinghgarh","Biaora","Rajgarh Town","Sarangpur","Khujner","Talen","Kolaras","Pohari","Karera","Narwar","Pichhore","Datia Town","Bhander","Seondha","Morena Town","Ambah","Porsa","Joura",
  "Sabalgarh","Sheopur Town","Baroda","Karahal","Bijawar","Laundi","Rajnagar","Bamitha","Garhi-Malhara","Nowgong","Harpalpur","Orchha","Prithvipur","Niwas","Bichhiya","Ghughri","Nainpur","Narayanganj",
  "Tendukheda","Kareli","Gotegaon","Gadarwara","Pachmarhi","Shahpura Town","Dindori Town","Pendra","Jaithari","Pushprajgarh","Kotma","Singrauli City","Waidhan","Churhat","Rampur Naikin","Mauganj",
  "Devtalab","Kotar","Nagod","Panna Town","Ajaigarh","Devendra Nagar","Pawai Town","Amanganj","Ajaygarh","Khajuraho","Buxwaha","Hatta Town","Patharia Town","Gaurihar","Chandla","Bamitha Town",
  "Guna Town","Maksi","Shamgarh","Bhanpura","Sitamau","Malhargarh","Jawad","Neemuch Town","Mandsaur Town","Suwasara","Piploda","Jaora","Ratlam Town","Sailana","Alot","Piploda Town","Dhar Town","Manawar",
  "Kukshi","Dahi","Sardarpur","Rajgarh-Dhar","Khargone Town","Bhikangaon","Barwaha","Sanawad Town","Kasrawad Town","Mandleshwar","Maheshwar Town","Burhanpur Town","Nepanagar","Khaknar","Asirgarh"],

  "Maharashtra": ["Mumbai","Pune","Nagpur","Nashik","Aurangabad","Solapur","Kolhapur","Amravati","Nanded","Sangli","Latur","Ahmednagar","Chandrapur","Parbhani","Akola","Jalgaon","Buldhana","Beed","Wardha","Ratnagiri",
  "Osmanabad","Yavatmal","Hingoli","Gondia","Bhandara","Washim","Gadchiroli","Nandurbar","Dhule","Raigad","Thane","Palghar","Satara","Sangamner","Baramati","Karad","Pandharpur","Miraj","Ichalkaranji","Kalyan",
  "Dombivli","Ulhasnagar","Ambarnath","Badlapur","Murbad","Bhiwandi","Vasai","Virar","Navi Mumbai","Panvel","Alibag","Pen","Uran","Roha","Murud","Shrivardhan","Mangaon","Mahad","Poladpur","Khed","Chiplun","Ratnagiri Town",
  "Sangameshwar","Rajapur","Lanja","Kankavli","Malvan","Sawantwadi","Vengurla","Deogad","Sindhudurg","Kolhapur Town","Gaganbavda","Ajara","Gadhinglaj","Radhanagari","Panhala","Shahuwadi","Karveer","Hatkanangale","Shirol","Patan",
  "Koregaon","Wai","Mahabaleshwar","Khandala","Phaltan","Man","Khatav","Barshi","Akkalkot","Mohol","Madha","Karmala","Pandharpur Town","Malshiras","Tuljapur","Lohara","Umarga","Paranda","Kalamb","Ambajogai","Kaij",
  "Georai","Ashti","Patoda","Majalgaon","Shirur-Kasar","Pathardi","Kopargaon","Rahata","Sangamner Town","Shrirampur","Rahuri","Shevgaon","Jamkhed","Nevasa","Shrigonda","Karjat","Daund","Indapur","Bhor","Velhe",
  "Mulshi","Maval","Khed","Ambegaon","Junnar","Shirur","Haveli","Purandar","Baramati Town","Pimpri-Chinchwad","Alandi","Dehu","Lonavala","Talegaon","Rajgurunagar","Nigdi","Chinchwad","Pimpri","Wakad","Kothrud","Hinjewadi",
  "Baner","Bavdhan","Hadapsar","Kondhwa","Viman Nagar","Kalyani Nagar","Magarpatta","Katraj","Dhankawadi","Sinhgad Road","Karjat Town","Matheran","Khopoli","Uran Town","Pen Town","Panvel City","Neral","Karjat Rural","Badlapur Town","Ambarnath Town",
  "Bhiwandi Town","Kalyan City","Ulhasnagar Town","Dombivli Town","Vasai Town","Virar City","Palghar Town","Dahanu","Boisar","Jawhar","Talasari","Wada","Mokhada","Vikramgad","Shahapur","Murbad Town","Khopoli Town","Kasara","Igatpuri","Sinnar",
  "Malegaon","Nandgaon","Chandwad","Deola","Baglan","Kalwan","Peint","Trimbak","Niphad","Yeola","Satana","Dindori","Nashik Road","Ojhar","Pimpalgaon Baswant","Lasalgaon","Vinchur","Manmad","Vaijapur","Kannad","Paithan","Gangapur",
  "Sillod","Soygaon","Phulambri","Khuldabad","Vaijapur Town","Jalna","Ambad","Badnapur","Bhokardan","Partur","Ghansawangi","Buldhana Town","Chikhli","Khamgaon","Shegaon","Malkapur","Motala","Nandura","Mehkar","Deulgaon Raja","Lonar","Sangrampur",
  "Jalgaon Town","Bhusawal","Yawal","Raver","Bodwad","Chalisgaon","Pachora","Erandol","Parola","Amalner","Dharangaon","Savda","Dhule Town","Sakri","Shirpur","Sindkheda","Nandurbar Town","Shahada","Taloda","Akkalkuwa","Dhadgaon","Navapur","Torna",
  "Dondaicha","Shirpur-Warwade","Pimpalner","Gondia Town","Tiroda","Amgaon","Arjuni Morgaon","Deori","Salekasa","Sakoli","Lakhani","Pauni","Tumsar","Bhandara Town","Mohadi","Lakhandur","Gondpipri","Warora","Ballarpur","Rajura","Korpana",
  "Mul","Brahmapuri","Nagbhid","Sindewahi","Chimur","Bhadravati","Saoner","Kalmeshwar","Katol","Umred","Kuhi","Ramtek","Parseoni","Mouda","Nagpur Rural","Wardha Town","Hinganghat","Arvi","Deoli","Seloo","Samudrapur","Ashti Wardha","Karanja Ghadge",
  "Washim Town","Mangrulpir","Malegaon Washim","Risod","Manora","Karanja Lad","Pusad","Umarkhed","Darwha","Digras","Arni","Ner","Kelapur","Pandharkawada","Wani","Ghatanji","Yavatmal Town","Ghatanji","Babhulgaon","Ralegaon","Mahagaon","Kalamnuri",
  "Aundha Nagnath","Basmat","Hingoli Town","Sengaon","Basmath","Nanded Town","Mukhed","Deglur","Kandhar","Hadgaon","Kinwat","Bhokar","Loha","Naigaon","Umri","Nanded Waghala","Parbhani Town","Gangakhed","Manwat","Pathri","Purna","Jintur","Selu",
  "Sonpeth","Basmath Town","Beed Town","Majalgaon Town","Ambejogai Town","Kaij Town","Ashti Town","Patoda Town","Georai Town","Latur Town","Nilanga","Ausa","Renapur","Ahmadpur","Chakur","Shirur-Anantpal","Deoni","Udgir","Sangli Town","Miraj Town",
  "Tasgaon","Kavathe Mahankal","Jat","Palus","Khanapur","Atpadi","Walwa","Islampur","Kupwad","Kolhapur City","Ichalkaranji Town"],

  "Manipur": ["Imphal","Thoubal","Churachandpur","Kakching","Ukhrul","Senapati","Tamenglong","Bishnupur","Chandel","Jiribam","Moreh","Moirang","Lilong","Nambol","Wangjing","Heirok","Yairipok","Sugnu","Khongjom","Khurai","Andro","Mayang Imphal","Hiyanglam",
  "Samurou","Kumbi","Kangpokpi","Noney","Pherzawl","Tamei","Oinam","Thongju","Sagolband","Wangkhei","Sekmai","Porompat","Khurkhul","Lamlai","Lamsang","Irengbam","Naorem","Kwakta","Kakching Khunou","Uchiwa","Keirao","Chajing","Mongshangei","Lisham","Phayeng",
  "Uripok","Kairang","Ningthoukhong","Ngairangbam","Lourembam","Bishenpur Bazar","Kha Potshangbam","Wangoi","Samaram","Top Khongnangkhong","Thongju Part-II","Irabotnagar","Mongsangei","Bamon Leikai","Lairenjam","Singjamei","Chingmeirong","Tera","Lamphelpat",
  "Langjing","Heirangoithong","Kshetrigao","Thangmeiband","Pishumthong","Kwakeithel","Keishamthong","Naoremthong","Uripok Achom Leikai","Uripok Tourangbam Leikai","Porompat Leikai","Lamlong","Wangkhei Ayangpalli Road","Bamon Leikai Kongba","Khongman","Thongju Part-I",
  "Laipham Khunou","Khurai Sajor Leikai","Ningombam","Khurai Thangjam Leikai","Khurai Kongpal","Khurai Chingangbam Leikai","Khurai Heirangoithong","Keirao Makting","Waithou","Haokha","Umathel","Yairipok Tulihal","Tentha","Leishangthem","Pallel","Sangaiyumpham",
  "Ningel","Thoubal Wangmataba","Thoubal Athokpam","Thoubal Ningombam","Wangkhem","Khangabok","Kshetrileikai","Bengoon","Yairipok Bishnunaha","Kairembikhok","Langmeidong","Sugnu Khunou","Serou","Chakpikarong","Machi","Molcham","Terakhongshangbi","Kumbi Bazar",
  "Komlathabi","Moreh Ward 1","Moreh Ward 2","Moreh Ward 3","Moreh Ward 4","Moreh Ward 5","Moreh Ward 6","Behiang","Singngat","Sangaikot","Tuibong","Saikot","Mualdan","New Lamka","Lamka","Muallum","Lailoiphai","Vengnuam","Thingkangphai","Sielmat","Langthabal",
  "Pearsonmun","Zoveng","Hiangtam Lamka","Rengkai","Salam Patong","Churachandpur Town","Tangpijang","Mualpheng","Gangpijang","Khominthang","Ngariyan","Ukhrul Town","Hunphun","Phungcham","Jessami","Lungchong Maiphei","Shangshak","Kamjong","Kasom Khullen","Ngainga",
  "Sinakeithei","Yaingangpokpi","Nungbi","Sirarakhong","Tolloi","Teinem","Tadubi","Mao","Senapati Town","Maram","Kangpokpi Town","Motbung","Saparmeina","Saikul","Tujang Waichong","Liyai","Karong","Mayangkhang","Makhan","Maram Khunou","Ngaikhong Khunou",
  "Phaibung","Tamenglong Town","Noney Town","Tamei Town","Oinamlong","Duiluan","Longmai","Puiluan","Kandibung","Gaidimjang","Kuilong","Luangchum","Tousem","Phaibung Khunou","Tousem Subdivision","Pherzawl Town","Parbung","Tipaimukh","Suangdoh","Ngopa",
  "Thingkhangphai","Kangvai","Leijangphai","Saichang","Khawmawi","New Zoveng","Khaizang","Lungthulien","Ngariyan Village","Laisang","Khumji","Thanlon","Leijangphai","Tuilaphai","Churachandpur Sub-Division","Bishnupur Sub-Division","Kumbi Sub-Division",
  "Khoijuman","Nachou","Phoijing","Irengbam Village","Ishok","Leimapokpam","Leimapokpam Khunou","Nachou Khunou","Kwakta Khunou","Ngaikhong Khullen","Top Naoria","Toubul","Keibul","Phoubakchao","Khordak","Saiton","Thongkhong Laxmi Bazar","Phoijing Khunou",
  "Khoijuman Khullen","Ithing","Sendra","Wabagai","Sagolband Tera","Sangaiprou","Kumbi Khunou","Oinam Bazar","Ishok Khunou","Tera Khongnangkhong","Nambol Sabal","Khonghampat","Langol","Khumbong","Konthoujam","Ningombam Khunou"],

  "Meghalaya": ["Shillong","Tura","Nongpoh","Jowai","Baghmara","Williamnagar","Resubelpara","Mairang","Nongstoin","Mawkyrwat","Sohra","Pynursla","Mawlynnong","Dawki","Umsning","Mendipathar","Ampati","Ranikor","Shella","Amlarem","Khliehumstem",
  "Khliehriat","Mookyndur","Sutnga","Lumshnong","Rymbai","Narwan","Ladrymbai","Khliehriat West","Sakhain","Mutong","Wapung","Thadlaskein","Mukhla","Jowai Town","Jowai West","Moodymmai","Pynthorumkhrah","Laitkor","Nongmynsong","Laban","Marok",
  "Laitumkhrah","Lummawbah","Madanrting","Rynjah","Polo","Mawlai Mawroh","Mawlai Nonglum","Mawlai Mawdatbaki","Mawlai Mawtawar","Mawlai Umjaiur","Nongthymmai","Mawprem","Mawpat","Nongrah","Mawiong","Nongmensong","Lawsohtun","Umpling","Malki",
  "Umsaw","Mawphlang","Mawngap","Mawsynram","Mawkyrwat Town","Ranikor Town","Domiasiat","Phlangdiloin","Phlangmawsyrpat","Marngar", "Nongpoh Town","Umden","Patharkhmah","Mawhati","Jirang","Nonglyer","Umsawmat","Paham","Mawlasnai","Saiden","Rongrong",
  "Mawrong","Khanduli","Amsoi","Lumdiengjri","Umling","Pynursla Town","Nongjri","Nohwet","Mawkisyiem","Riwai","Sohbar","Nongwar","Laitkynsew","Khadarshnong","Khadarshnong Sohra","Sohra Market","Kshaid","Mawsmai","Mawkma","Laitryngew","Pynthorumkhrah Block",
  "Mawsmai Village","Nohkalikai","Nohsngithiang","Dawki Town","Amlarem Town","Narpuh","Borghat","Sutnga Elaka","Moolamylliang","Wahiajer","Nartiang","Laskein","Chutwakhu","Panaliar","Ialong","Moodymmai North","Mukhap","Thadmuthlong","Mukhla Village",
  "Saitsama","Mupyut","Saphai","Shangpung","Mynso","Mihmyntdu","Chnongrim","Sumer","Madanriting","Madanriting Village","Mawkyrwat Village","Ranikor River","Dawki Border","Borsora","Ranikor Bazar","Mawkyrwat Bazar","Pyndengumiong","Mawthawpaw","Nongnah",
  "Siju","Rongram","Dalu","Garobadha","Tikrikilla","Phulbari","Rajabala","Dadenggre","Dainadubi","Bajengdoba","Resubelpara Town","Songsak","Samanda","Rongjeng","Williamnagar Town","Bansamgre","Simsanggre","Chokpot","Rongara","Baghmara Town","Selsella Bazar",
  "Karukol","Mahadeo","Kalupara","Emangre","Boldamgre","Rongdinggre","Ampati Town","Zikzak","Mahendraganj","Garobadha Town","Betasing","Bhallat","Selsella","Nongalbibra","Nokrek","Songsakgre","Chidimit","Nokchi","Asanang","Tura Town","Jengjal","Chisobibra",
  "Dobasipara","Dakopgre","Araimile","Ringrey","Walbakgre","Bajengdoba Town","Mendipathar Town","Resu","Damas","Manikganj","Kharkutta","Adokgre","Nongalbibra","Nengkhra","Williamnagar Bazar","Bhaitbari","Rajabala Bazar","Garobadha Bazar","Rongram Bazar",
  "Chandmari Tura","Chandmary","Danakgre","Upper Chandmary","Rongrenggiri","Chibagre","Tura Peak","Sasatgre","Rongramgre","Asananggre","Rongkhon","Dalu Bazar","Mahendraganj Bazar","Bhaitbari Village","Tikrikilla Bazar","Chandmary Colony","Danakgre Colony",
  "Balading","Nongthymmai Lumsohpah","Madanheh","Nongrim Hills","Laitumkhrah Lummawbah","Lumparing","Polo Hills","Mawkhar","Riat Laban","Laban Hill"],

  "Mizoram": ["Aizawl","Lunglei","Serchhip","Champhai","Kolasib","Saiha","Lawngtlai","Mamit","Saitual","Hnahthial","Khawzawl","North Vanlaiphai","Biate","Thenzawl","Khawhai","Keifang","Thingsulthliah","Seling","Tlangnuam","Darlawn",
  "Reiek","West Phaileng","Zawlnuam","Kawrthah","Vairengte","Bilkhawthlir","Saiphai","Saipum","N. Thingdawl","Bukpui","Lengpui","Sairang","Phullen","Phuaibuang","Suangpuilawn","Thingsulthliah East","Khawrihnim","Kanghmun","Marpara","Tuidam",
  "Rawpuichhip","Tuipuibari","Chhipphir","East Lungdar","Haulawng","Pangzawl","Darzo","Hualngphung","Thiltlang","Chaltlang","Durtlang","Zemabawk","Tanhril","Ramrikawn","Sairang Village","Selesih","Samlukhai","Kelsih","Lungleng","Muallungthu",
  "Sateek","Aibawk","Hmuifang","Sialsuk","Ailawng","Reiek Village","Aibawk Village","N. Lungleng","Chhinga Veng","Bawngkawn","Vaivakawn","Luangmual","Ramthar","Zonuam","Khatla","Tuikual","Bungkawn","Chandmari","Mission Vengthlang","Hunthar",
  "Kulikawn","Dawrpui","Electric Veng","Tuikual North","Tuikual South","Vaivakawn North","Saron","Zemabawk North","Durtlang Leitan","Durtlang Venghlun","Lunglei Town","Ramthar North","Ramthar South","Chanmari Lunglei","Hauruang","Zohnuai",
  "Theiriat","Sazaikawn","Venglai Lunglei","Saron Lunglei","Serkawn","Lunglawn","Salem Veng","Chandmary Lunglei","Rahsi Veng","Zobawk","Hualngohmun","Sairep","Lungdar","Buarpui","Sialsir","Chalfilh","Khawlek","East Phaileng","Nghalchawm",
  "Kawnpui","N. Kawnpui","Bilkhawthlir Village","Saiphai Village","Vairengte Town","Sihphir","Bawngkawn South","Durtlang North","Chanmari West","Ramnagar","Zarkawt","Chhinga Veng North","Tuikual Central","Mission Veng","Electric Veng South",
  "Champhai Town","Zokhawthar","Khawbung","Mualkawi","Hnahlan","Vaphai","Farkawn","Sialhawk","Selam","Khuangleng","Khuangthing","Khankawn","Khuangpui","Ngopa","Saitual Town","Lamzawl","Sialhawk Village","Hualtu","Khawruhlian","Khawhai Village",
  "Kanghmun South","Marpara South","Phuldungsei","Kanhmun","Zamuang","West Phaileng Town","Marpara North","N. West Phaileng","Lallen","Damparengpui","Lawngtlai Town","Bualpui","Lungtian","Lungpher","Kawlchaw","Sangau","Tuipang","Vathuampui",
  "Theiriat Lawngtlai","Chawngte","Siaha Town","Tuipang South","Tipa","Phura","Lungpuitlang","Niawhtlang","Zyhno","Chakhang","Lungbun","Chhingchhip","Thenzawl Town","Zobawk Village","Khawzawl Town","Khawzawl North","Hnahthial Town","Hnahthial North",
  "Hnahthial South","Chhipphir Village","Thingsai","Sailam","Biate Town","North Vanlaiphai Village","East Lungdar South","Thiltlang Village","Aizawl City","Lunglei City","Serchhip Town","Champhai City","Saiha City","Mamit Town"],

  "Nagaland": ["Kohima","Dimapur","Mokokchung","Wokha","Zunheboto","Tuensang","Mon","Phek","Longleng","Kiphire","Peren","Chumukedima","Tseminyu","Medziphema","Jharnapani","Kuda Village","Ruzaphema","Niuland","Sakhabama","Jotsoma",
  "Viswema","Khonoma","Pfutsero","Chizami","Meluri","Chetheba","Chozuba","Razeba","Kikruma","Phek Town","Chakhesang","Pfütsero Town","Khezhakeno","Zhavame","Porba","Sümi","Zunheboto Town","Aghunato","Satakha","Suruhoto",
  "Atoizu","Akuluto","Asukhomi","Lumami","Mokokchung Town","Changtongya","Tuli","Longkhum","Impur","Ungma","Aliba","Mopungchuket","Süngratsü","Longsa","Khar","Alongkima","Chuchuyimlang","Merangkong","Chandmari","Longmisa","Yimyu","Kohima Village","Lerie",
  "Bayavü Hill","P.R. Hill","Agri Colony","Jail Colony","Daklane","New Ministers’ Hill","Forest Colony","Zubza","Sechu Zubza","Phezha","Jakhama","Khuzama","Kidima","Mima","Dzüleke","Tuophema","Tseminyu Town","Meriema","Tsiesema","Phesama","Kigwema",
  "Tseminyu Old Town","Khenyu","Tsiephrie Basa","Ruma","Kongon","Wokha Town","Baghty","Sanis","Bhandari","Englan","Okotso","Ralan","Wozhuro","Lotsu","Lakhuti","Longsa Wokha","Tseminyu New Town","Benreu","Peren Town","Jalukie","Phomching Town",
  "Ahthibung","Nsong","Khelma","Ngwalwa","Tening","Beisumpuikam","Nchangram","Nsong Village","Heningkunglwa","Old Peren","New Peren","Dimapur City","Purana Bazaar","Thahekhu","Naharbari","Zadima","Chekiye","Burma Camp","Signal Basti","Duncan Basti",
  "Nagarjan","Sovima","Padumpukhuri","Kuda Village East","Kuda Village West","Chümoukedima Town","Medziphema Town","Kukidolong","Seithekema","Razaphema Village","Niuland Town","Shoxuvi","Kiyevi","Aoyimkum","Kiheki","Kohima Science College Jotsoma",
  "Khuzama Village","Kijumetouma","Kharu","Zhadima","Pfuchama","Mesulumi","Chizami Village","Chozuba Village","Runguzu","Pholami","Thenyizu","Lasumi","Razeba Village","Noklak","Chendang Saddle","Choklangan","Nokhu","Thonoknyu","Panso","Shamatore",
  "Sitimi","Longmatra","Pungro","Longkhim","Chare","Chungliyimsen","Mangmetong","Chungtia","Longkhum Village","Satsuk Village","Mon Town","Tizit","Aboi","Naginimora","Chenmoho","Longwa","Wasa","Angjangyang","Wanching","Phomching","Sangsangnyu Village",
  "Tobu","Mopongchuket","Tuensang Town","Longkhim Town","Yongphang","Sangsangnyu","Chingmei","Tuensang Village","Chare Town","Longkhim Village","Chungtor","Yongphang Village","Hakchang","Thonoknyu Village","Sangsa","Chendang","Shamator Town","Noklak Town",
  "Kiphire Town","Sitimi Village","Pungro Town","Khongsa","Amahator","Kiutsuki","Longmatra Village","Anatongre","Tsatongre","Longsa Village"],

  "Odisha": ["Bhubaneswar", "Cuttack", "Rourkela", "Puri", "Sambalpur", "Balasore", "Berhampur", "Baripada", "Jharsuguda", "Jajpur","Bhadrak", "Angul", "Dhenkanal", "Kendrapara", "Kalahandi", "Rayagada", "Koraput", "Bargarh", "Jagatsinghpur",
  "Nayagarh", "Nuapada", "Malkangiri", "Sundargarh", "Deogarh", "Kandhamal", "Gajapati", "Balangir", "Sonepur","Kendujhar", "Mayurbhanj", "Nabarangpur", "Paradip", "Talcher", "Phulbani", "Titlagarh", "Chandbali", "Pattamundai",
  "Athagarh", "Boudh", "Kantabanji", "Joda", "Rajgangpur", "Barbil", "Rairangpur", "Jhumpura", "Belpahar", "Kesinga","Bhawanipatna", "Banspal", "Kaptipada", "Daspalla", "Gopalpur", "Kujang", "Banapur", "Khordha", "Tangi", "Pipili",
  "Konark", "Buguda", "Birmaharajpur", "Loisingha", "Binka", "Sonepur Town", "Padampur", "Burla", "Brajrajnagar","Rengali", "Laikera", "Hemgiri", "Tensa", "Tarbha", "Khalikote", "Bhanjanagar", "Polasara", "Asika", "Kodala",
  "Rambha", "Hinjilicut", "Digapahandi", "Chhatrapur", "Ganjam", "Berhampur City", "Chandipur", "Remuna", "Nilgiri","Jaleswar", "Soro", "Balasore Town", "Bhograi", "Simulia", "Karanjia", "Raruan", "Thakurmunda", "Udala", "Baripada Town",
  "Betnoti", "Bahalda", "Tiring", "Rairangpur Town", "Keonjhar", "Champua", "Anandapur", "Joda Town", "Harichandanpur","Telkoi", "Ghatgaon", "Pallahara", "Angul Town", "Chhendipada", "Athmallik", "Kaniha", "Banarpal"],

  "Punjab": ["Chandigarh", "Amritsar", "Ludhiana", "Jalandhar", "Patiala", "Bathinda", "Hoshiarpur", "Moga", "Firozpur","Pathankot", "Barnala", "Faridkot", "Sangrur", "Mansa", "Muktsar", "Kapurthala", "Nawanshahr", "Fatehgarh Sahib",
  "Rupnagar", "Tarn Taran", "Gurdaspur", "Khanna", "Gobindgarh", "Malerkotla", "Rajpura", "Sunam", "Dhuri","Longowal", "Zirakpur", "Dera Bassi", "Sirhind", "Morinda", "Bassi Pathana", "Kharar", "Rahon", "Nangal", "Anandpur Sahib",
  "Balachaur", "Bhulath", "Sultanpur Lodhi", "Phagwara", "Nakodar", "Shahkot", "Kartarpur", "Adampur", "Dasuya", "Tanda","Garhshankar", "Mukerian", "Batala", "Qadian", "Dina Nagar", "Dera Baba Nanak", "Ajnala", "Majitha", "Rayya",
  "Jandiala Guru", "Khem Karan", "Patti", "Zira", "Guru Har Sahai", "Talwandi Bhai", "Kotkapura", "Jaitu", "Rampura Phul","Maur", "Budhlada", "Lehra Gaga", "Bhadaur", "Barnala City", "Tapa", "Dhuri Town", "Sangrur Town", "Cheema", "Mansa Town",
  "Sardulgarh", "Bareta", "Bhikhi", "Malout", "Gidderbaha", "Muktsar Town", "Abohar", "Fazilka", "Jalalabad", "Mamdot","Ferozepur Cantt", "Makhu", "Zira Town", "Moga Town", "Baghapurana", "Nihal Singh Wala", "Kot Ise Khan", "Dharamkot",
  "Jagraon", "Raikot", "Payal", "Samrala", "Khanna Town", "Doraha", "Machhiwara", "Phillaur", "Nakodar Town", "Nurmahal","Lohian", "Shahkot Town", "Goraya", "Alawalpur", "Rurka Kalan", "Bilga", "Phagwara Town", "Hussainpur", "Bholath Town"],

  "Rajasthan": ["Beawar","Nathdwara","Mount Abu","Kishangarh","Pushkar","Makrana","Sujangarh","Didwana","Ladnun","Nawa","Merta City","Degana","Parbatsar","Kuchaman City","Bilara","Osian","Phalodi",
  "Pokhran","Balotra","Siwana","Sheoganj","Abu Road","Pindwara","Bali","Sojat","Jaitaran","Sumerpur","Sadri","Gulabpura","Asind","Mandal","Bijolia","Gangapur City","Hindaun City","Mahwa","Lalsot",
  "Chomu","Jobner","Shahpura","Viratnagar","Kotputli","Neem Ka Thana","Reengus","Fatehpur","Laxmangarh","Nawalgarh","Chirawa","Pilani","Surajgarh","Bissau","Rajgarh","Taranagar","Ratangarh","Sardarshahar",
  "Bhadra","Nohar","Pilibanga","Tibi","Suratgarh","Padampur","Raisinghnagar","Karanpur","Rawatsar","Bari","Baseri","Sapotra","Todabhim","Bonli","Gangapur","Bagidora","Garhi","Kushalgarh","Simalwara","Sagwara",
  "Bichhiwara","Jhalrapatan","Pirawa","Khanpur","Manohar Thana","Aklera","Bari Sadri","Nimbahera","Kapasan","Begun","Salumber","Gogunda","Kherwara","Bhim","Deogarh","Kumbhalgarh","Amet","Rajnagar"],

  "Sikkim": ["Gangtok", "Namchi", "Geyzing", "Mangan", "Rangpo", "Singtam", "Jorethang", "Soreng", "Yuksom", "Pelling","Ravangla", "Dentam", "Temi", "Nayabazar", "Rinchenpong", "Sombaria", "Chungthang", "Dzongu", "Lachen", "Lachung",
  "Legship", "Sakyong", "Sungdung", "Pakyong", "Tadong", "Rumtek", "Assam Lingzey", "Makha", "Rhenock", "Aritar","Zuluk", "Phadamchen", "Gnathang", "Rolep", "Chujachen", "Khamdong", "Duga", "Lingdok", "Samdong", "Sirwani",
  "Yangang", "Nandok", "Gelling", "Sakyong-Pentong", "Upper Dzongu", "Lower Dzongu", "Hee-Bermiok", "Tingchim","Lingthem", "Tingvong", "Tholung", "Lachung Monastery", "Lingmoo", "Pabong", "Tashiding", "Kaluk", "Chumbung",
  "Singtam Town", "Majitar", "Mamring", "Tumin", "Kabi", "Phensang", "Phodong", "Tumin-Lingee", "Sokpey", "Lungthu","Rakdong", "Nandok", "Chandmari", "Arithang", "Deorali", "Sichey", "Samdur", "Tadong", "Chungthang", "Rakdong Tintek",
  "Lingdok Namphing", "Khamdong Kamrang", "Temi Tarku", "Yangang Rangang", "Sikip", "Bermiok", "Daramdin", "Soreng Town","Dentam Village", "Okhrey", "Kewzing", "Namthang", "Rateypani", "Kamrang", "Kitam", "Phareng", "Melli", "Majhitar",
  "Kaluk Bermiok", "Biksthang", "Soreng Bazar", "Lingchom", "Malbasey", "Tharpu", "Ribdi", "Marey", "Buriakhop", "Nambu","Gyalshing Town", "Legship Town", "Darap", "Suldung", "Pabong Village", "Rongli", "Chujachen Village", "Tarku"],

  "Tamil Nadu": ["Chennai", "Coimbatore", "Madurai", "Tiruchirappalli", "Salem", "Tirunelveli", "Erode", "Vellore", "Tiruppur","Thoothukudi", "Dindigul", "Thanjavur", "Nagercoil", "Cuddalore", "Kanchipuram", "Karaikudi", "Rajapalayam",
  "Tiruvannamalai", "Namakkal", "Pudukkottai", "Krishnagiri", "Nagapattinam", "Ariyalur", "Perambalur", "Ramanathapuram","Dharmapuri", "Virudhunagar", "Theni", "Sivaganga", "Villupuram", "Tenkasi", "Karur", "Chengalpattu", "Tiruvarur",
  "Mayiladuthurai", "Ranipet", "Tirupathur", "Avadi", "Ambattur", "Tambaram", "Pallavaram", "Chromepet", "Arakkonam","Ambur", "Vaniyambadi", "Gudiyatham", "Polur", "Cheyyar", "Arani", "Thiruvallur", "Ponneri", "Gummidipoondi",
  "Uthiramerur", "Sriperumbudur", "Chidambaram", "Panruti", "Vridhachalam", "Tittagudi", "Jayankondam", "Sendurai","Lalgudi", "Manapparai", "Musiri", "Srirangam", "Thuraiyur", "Pattukottai", "Orathanadu", "Kumbakonam", "Thiruvidaimarudur",
  "Needamangalam", "Mannargudi", "Peravurani", "Tiruchendur", "Kovilpatti", "Sankarankovil", "Vallioor", "Ambasamudram","Nanguneri", "Radhapuram", "Kadayanallur", "Tenkasi Town", "Puliyangudi", "Vikramasingapuram", "Srivaikuntam",
  "Cheranmahadevi", "Palayamkottai", "Kanyakumari", "Marthandam", "Colachel", "Palliyadi", "Padmanabhapuram", "Suchindram","Aruppukottai", "Sattur", "Rajapalayam", "Srivilliputhur", "Kovilpatti", "Virudhunagar Town", "Kallakurichi",
  "Ulundurpet", "Sankarapuram", "Chengam", "Vandavasi", "Melur", "Usilampatti", "Thirumangalam", "Vadipatti","Peraiyur", "Alanganallur", "Batlagundu", "Nilakottai", "Oddanchatram", "Palani", "Vedasandur", "Natham", "Sivakasi",
  "Aruppukottai", "Srivilliputhur", "Kumarapalayam", "Bhavani", "Gobichettipalayam", "Perundurai", "Sathyamangalam","Kodumudi", "Pollachi", "Udumalaipettai", "Kinathukadavu", "Valparai", "Mettupalayam", "Avinashi", "Karamadai",
  "Sulur", "Annur", "Palladam", "Dharapuram", "Vellakoil", "Kangeyam", "Mulanur", "Manachanallur", "Kulithalai","Karur Town", "Paramathi Velur", "Tiruchengode", "Rasipuram", "Namakkal Town", "Attur", "Omalur", "Mettur",
  "Edappadi", "Sankagiri", "Gangavalli", "Pennagaram", "Harur", "Palacode", "Hosur", "Denkanikottai", "Kelamangalam","Krishnagiri Town", "Uthangarai", "Bargur", "Pochampalli", "Dharmapuri Town", "Pappireddipatti", "Pennagaram",
  "Tirupattur Town", "Ambur", "Vaniyambadi", "Natrampalli", "Alangayam", "Gudiyattam", "Katpadi", "Ranipet Town","Arcot", "Walajapet", "Sholingur", "Kancheepuram Town", "Chengalpattu Town", "Madhuranthakam", "Thirukazhukundram",
  "Kalpakkam", "Mahabalipuram", "Cheyyur", "Tindivanam", "Gingee", "Marakkanam", "Vanur", "Viluppuram Town","Kallakurichi Town", "Tirukkoyilur", "Ulundurpet Town", "Thiruvennainallur", "Vikravandi", "Panruti Town", "Cuddalore Town"],

  "Telangana": ["Hyderabad", "Warangal", "Nizamabad", "Karimnagar", "Khammam", "Ramagundam", "Mahbubnagar", "Nalgonda","Adilabad", "Siddipet", "Mancherial", "Suryapet", "Miryalaguda", "Jagitial", "Kamareddy", "Vikarabad",
  "Jangaon", "Medak", "Nirmal", "Wanaparthy", "Kothagudem", "Sangareddy", "Zaheerabad", "Gadwal", "Bhupalpally","Mahabubabad", "Bhongir", "Yadadri", "Narayanpet", "Bhadrachalam", "Patancheru", "Shadnagar", "Tandur","Sircilla", 
  "Bellampalli", "Mandamarri", "Manthani", "Metpally", "Kagaznagar", "Asifabad", "Utnoor", "Khanapur","Luxettipet", "Chennur", "Sirpur", "Boath", "Mudhole", "Basar", "Nirmal Town", "Bhainsa", "Banswada", "Bichkunda","Armur", "Bodhan", 
  "Kamareddy Town", "Yellareddy", "Banjerupet", "Medchal", "Shamirpet", "Malkajgiri","Uppal", "Keesara", "Hayathnagar", "Ibrahimpatnam", "Chevella", "Shankarpalli", "Kodangal", "Pargi","Tandur Town", "Vikarabad Town", "Dharur", "Kulkacharla",
  "Doulatabad", "Marpalli", "Mominpet", "Sadasivpet","Sangareddy Town", "Patancheru Town", "Narayankhed", "Zaheerabad Town", "Jogipet", "Andole", "Kangti","Regode", "Manoor", "Medak Town", "Narsapur", "Gajwel", "Toopran", "Dubbaka", 
  "Siddipet Town", "Husnabad","Cheryal", "Jangaon Town", "Station Ghanpur", "Narmetta", "Raghunathpalle", "Kodakandla", "Palakurthy","Ghanpur", "Devaruppula", "Lingalaghanpur", "Warangal Town", "Hanamkonda", "Kazipet", "Narsampet", "Parkal",
  "Bhupalpally Town", "Mulugu", "Eturunagaram", "Govindaraopet", "Cherial", "Mahabubabad Town", "Nekkonda","Maripeda", "Dornakal", "Thorrur", "Kesamudram", "Kothagudem Town", "Palwancha", "Yellandu", "Manuguru",
  "Aswapuram", "Bhadrachalam Town", "Burgampahad", "Cherla", "Dummugudem", "Kukunoor", "Nizamabad Town","Nandipet", "Armoor", "Velpur", "Morthad", "Bheemgal", "Makloor", "Navipet", "Balkonda", "Jakranpalle",
  "Kammarpally", "Mortad", "Varni", "Kotagiri", "Kamareddy Town", "Bibipet", "Madnoor", "Bichkunda Town","Pitlam", "Yellareddy Town", "Machareddy", "Lingampet", "Tadwai", "Domakonda", "Nizam Sagar", "Medchal Town",
  "Kukatpally", "Serilingampally", "Rajendranagar", "Gachibowli", "Kondapur", "Miyapur", "Uppal Kalan","LB Nagar", "Dilsukhnagar", "Ameerpet", "Begumpet", "Secunderabad", "Mehdipatnam", "Golconda", "Shaikpet",
  "Chandanagar", "Kothapet", "Alwal", "Balanagar", "Quthbullapur", "Shamirpet", "Thumkunta", "Keesara Town","Kapra", "Nagaram", "Boduppal", "Peerzadiguda", "Pocharam", "Ghatkesar", "Abdullapurmet", "Hayathnagar Town",
  "Ibrahimpatnam Town", "Manneguda", "Yacharam", "Kandukur", "Kothur", "Shadnagar Town", "Farooqnagar","Balanagar Town", "Kondurg", "Maddur", "Mahbubnagar Town", "Gadwal Town", "Wanaparthy Town", "Nagarkurnool",
  "Achampet", "Kalwakurthy", "Amangal", "Kodair", "Jadcherla", "Boothpur", "Addakal", "Devarakadra", "Makthal","Atmakur", "Narayanpet Town", "Kosgi", "Utkoor", "Damaragidda", "Dhanwada", "Tandur Village", "Narayankhed Village"],

  "Tripura": ["Agartala", "Udaipur", "Dharmanagar", "Ambassa", "Kailashahar", "Belonia", "Khowai", "Teliamura","Sonamura", "Bishalgarh", "Melaghar", "Sabroom", "Amarpur", "Santirbazar", "Kamalpur", "Jirania",
  "Ranirbazar", "Mohanpur", "Kalyanpur", "Boxanagar", "Panisagar", "Churaibari", "Pecharthal", "Gakulnagar","Gakulpara", "Bagafa", "Hrishyamukh", "Karbari", "Satchand", "Manubazar", "Rajnagar", "Jolaibari", "Kachigang",
  "Bagma", "Kunjaban", "Simna", "Hezamara", "Takarjala", "Mungiakami", "Teliamura Town", "Khowai Town","Sonatala", "Champaknagar", "Bishramganj", "Bamutia", "Radhanagar", "Golaghati", "Jampuijala", "Chebri",
  "Nalkata", "Kumarghat", "Fatikroy", "Tilakpara", "Chandipur", "Radhakishorepur", "Garjee", "Rangamati","Bagma Town", "Birganj", "Rajnagar Village", "Manikbhandar", "Bishnupur", "Bamutia Village", "Kalacherra",
  "Chandrapur", "Lankamura", "Lalchhara", "Kanchanpur", "Anandabazar", "Jampui Hills", "Bejoynagar", "Kalsi","Dhalabil", "Kachucherra", "Chailengta", "Chandighat", "Kanchanbari", "Machmara", "Ratacherra", "Unakoti",
  "Pecharthal Village", "Deotamura", "Melaghar Town", "Rangauti", "Bairagi", "North Maheshpur", "South Maheshpur","Bashpukur", "Madhupur", "Paschim Noagaon", "Dukli", "Gandhigram", "Joynagar", "Narsingarh", "Abhoynagar",
  "Indranagar", "Krishnanagar", "Lichubagan", "Aralia", "Jogendranagar", "Pratapgarh", "Khayerpur", "Amtali","Badharghat", "Barjala", "Kamrangat", "Ramnagar", "Siddhi Ashram", "Nayapara", "Kunjaban Colony", "Gakulnagar",
  "Bishramganj Town", "Teliamura Village", "Kumarghat Town", "Sabroom Town", "Jolaibari Village"],

  "Uttar Pradesh": ["Lucknow", "Kanpur", "Varanasi", "Agra", "Prayagraj", "Ghaziabad", "Meerut", "Noida", "Aligarh", "Moradabad","Bareilly", "Saharanpur", "Gorakhpur", "Jhansi", "Firozabad", "Muzaffarnagar", "Mathura", "Ayodhya", "Shahjahanpur",
  "Rampur", "Budaun", "Faizabad", "Etawah", "Sitapur", "Bulandshahr", "Unnao", "Hardoi", "Mirzapur", "Raebareli","Farrukhabad", "Mau", "Azamgarh", "Ballia", "Jaunpur", "Bijnor", "Barabanki", "Deoria", "Etah", "Mainpuri", "Ghazipur",
  "Sultanpur", "Basti", "Amroha", "Bahraich", "Lakhimpur Kheri", "Hapur", "Sambhal", "Fatehpur", "Gonda", "Kasganj","Chandauli", "Ambedkar Nagar", "Bhadohi", "Balrampur", "Shrawasti", "Sant Kabir Nagar", "Kushinagar", "Sonbhadra",
  "Maharajganj", "Pilibhit", "Lalitpur", "Auraiya", "Kannauj", "Kaushambi", "Pratapgarh", "Jalaun", "Amethi","Chitrakoot", "Hamirpur", "Mahoba", "Banda", "Baghpat", "Hathras", "Morena", "Tundla", "Akbarpur", "Renukoot",
  "Obra", "Modinagar", "Khatauli", "Gangoh", "Shamli", "Sikandra Rao", "Khair", "Sikandarpur", "Bilari", "Nawabganj","Sandila", "Gursahaiganj", "Bilhaur", "Khurja", "Sardhana", "Mughalsarai", "Purwa", "Lalganj", "Rudauli", "Nagina",
  "Baberu", "Tilhar", "Bah", "Sirsaganj", "Naraura", "Kulpahar", "Musafirkhana", "Mahoba Town", "Charkhari","Baberu Village", "Khairabad", "Chunar", "Handia", "Manikpur", "Fatehpur Sikri", "Gosainganj", "Malihabad",
  "Bakshi Ka Talab", "Mohammadabad", "Kundarki", "Bilgram", "Pihani", "Katra", "Atrauli", "Sahjanwa", "Bithoor","Baberu", "Tanda", "Nawabganj Bareilly", "Faridpur", "Iglas", "Debai", "Kairana", "Behat", "Jansath", "Amraudha",
  "Aurangabad Bangar", "Ujhani", "Hasayan", "Sikandra", "Mandhana", "Bilsi", "Tilhar Town", "Ghatampur", "Machhali Shahar","Dalmau", "Mau Aima", "Nautanwa", "Phaphamau", "Jalalpur", "Mussoorie", "Khaga", "Rajapur", "Babina", "Orai",
  "Rath", "Bindki", "Manjhanpur", "Sirathu", "Naraini", "Atarra", "Chakia", "Ghorawal", "Robertsganj", "Anpara","Pipri", "Dudhi", "Renusagar", "Pali", "Sirsaganj Village", "Bansgaon", "Khadda", "Tamkuhi", "Hata", "Padrauna",
  "Sikta", "Dudahi", "Naugarh", "Bansi", "Itwa", "Shohratgarh", "Domariaganj"],

  "Uttarakhand": ["Dehradun", "Haridwar", "Nainital", "Haldwani", "Rishikesh", "Roorkee", "Kashipur", "Rudrapur", "Almora", "Pithoragarh", "Bageshwar", "Champawat", "Tehri", "New Tehri",
  "Srinagar", "Pauri", "Kotdwar", "Mussoorie", "Doiwala", "Ranikhet","Bhimtal", "Tanakpur", "Kichha", "Sitarganj", "Bazpur", "Jaspur", "Manglaur", "Laksar", "Vikasnagar", "Herbertpur","Narendranagar", "Yamkeshwar", "Dwarahat", "Lohaghat", 
  "Didihat", "Dharchula", "Munsiyari", "Gangolihat", "Someshwar","Kausani", "Naugaon", "Purola", "Chakrata", "Devprayag", "Guptkashi", "Ukhimath", "Joshimath", "Gopeshwar", "Chamoli","Pipalkoti", "Karnaprayag", "Ranikhet Cantt", "Mukteshwar", 
  "Ramgarh", "Kaladhungi", "Betalghat", "Okhalkanda","Dhari", "Nainidanda", "Bironkhal", "Dhumakot", "Jainti", "Dwarikhal", "Kaljikhal", "Pabau", "Thalisain", "Khirsu","Pokhra", "Ekeshwar", "Satpuli", "Naugaon Tehsil", "Barkot", "Nandgaon", "Chamba",
  "Jakholi", "Ghansali", "Narayanbagar","Deval", "Karanprayag", "Tharali", "Chopta", "Pandukeshwar", "Badrinath", "Mana", "Tungnath", "Agastmuni", "Kedarnath","Ghat", "Bhawali", "Lohaghat Village", "Barakot", "Pithoragarh Village",
  "Didihat Village", "Gangolihat Village","Jauljibi", "Askot", "Chaukori", "Berinag", "Reema", "Lamgarha", "Dhaulchina", "Sult", "Bhikiyasain", "Dwarahat Village","Basot", "Someshwar Village", "Takula", "Syalde", "Gairsain",
  "Mehalchauri", "Tharali Village", "Narainbagar","Kund", "Okhimath", "Phata", "Sonprayag", "Triyuginarayan", "Kalpeshwar", "Helang", "Joshimath Village", "Tapovan","Rini", "Lata", "Tolma", "Suraithota", "Niti", "Malari", "Mana Village"],

  "West Bengal": ["Kolkata", "Darjeeling", "Siliguri", "Durgapur", "Asansol", "Howrah", "Kalyani", "Bardhaman", "Shantipur", "Haldia","Baharampur", "Krishnanagar", "Kharagpur", "Purulia", "Raiganj", "Balurghat", "Cooch Behar", "Alipurduar", "Malda",
  "North 24 Parganas", "South 24 Parganas", "Jalpaiguri", "Bankura", "Diamond Harbour", "Baruipur", "Habra", "Bangaon","Basirhat", "Bagnan", "Uluberia", "Shyamnagar", "Barrackpore", "Rajpur Sonarpur", "Naihati", "Rishra", "Serampore",
  "Dankuni", "Konnagar", "Champdani", "Bandel", "Chinsurah", "Hooghly", "Arambag", "Srirampore", "Pujali", "Rajpur","Belgharia", "Panihati", "Kamarhati", "Titagarh", "Bhatpara", "Barrackpore Cantonment", "Barasat", "Bongaon", "Gaighata",
  "Deganga", "Habra Town", "Ashoknagar", "Basirhat Town", "Baduria", "Sankrail", "Domjur", "Bagnan Town", "Amta","Uluberia Town", "Kalyanpur", "Chandannagar", "Serampore Town", "Halisahar", "Naihati Town", "Barrackpore Town",
  "Bandel Town", "Chinsurah Town", "Arambag Town", "Panchla", "Jagatballavpur", "Jagatdal", "Mogra", "Champdani Town","Bandel Village", "Furfura Sharif", "Tarakeswar", "Boinchi", "Pandua", "Chanditala", "Balagarh", "Jangipara",
  "Haripal", "Pursurah", "Chinsurah-Mogra", "Bandel-Mogra", "Goghat", "Arambag Village", "Kolkata Village", "Siliguri Village","Darjeeling Village", "Durgapur Village", "Asansol Village", "Haldia Village", "Malda Village", "Raiganj Village",
  "Balurghat Village", "Purulia Village", "Kharagpur Village", "Krishnanagar Village", "Bardhaman Village", "Shantipur Village","Cooch Behar Village", "Alipurduar Village", "Diamond Harbour Village", "Baruipur Village", "Bangaon Village", "Basirhat Village",
  "Champdani Village", "Bandel Village", "Serampore Village", "Barrackpore Village", "Hooghly Village", "Arambag Village","Jagatballavpur Village", "Furfura Sharif Village", "Tarakeswar Village", "Boinchi Village", "Pandua Village", "Chanditala Village",
  "Balagarh Village", "Jangipara Village", "Haripal Village", "Pursurah Village", "Goghat Village", "Bandel-Mogra Village"],
  };

  hamburger.addEventListener('click', () => {
    const expanded = hamburger.getAttribute('aria-expanded') === 'true';
    hamburger.setAttribute('aria-expanded', String(!expanded));
    navList.classList.toggle('show');
  });

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

  Object.keys(stateCityData).forEach(state => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.textContent = state;
    btn.addEventListener('click', () => showCitiesForState(state));
    stateButtons.appendChild(btn);
  });

  function showCitiesForState(state) {
    selectedStateEl.textContent = state;
    citiesContainer.innerHTML = '';
    stateCityData[state].forEach(city => {
      const cbtn = document.createElement('button');
      cbtn.type = 'button';
      cbtn.className = 'v-item';
      cbtn.textContent = city;
      cbtn.addEventListener('click', () => {
        const pickup = document.getElementById('pickup');
        const delivery = document.getElementById('delivery');
        if (!pickup.value) {
          pickup.value = `${city}, ${state}`;
        } else if (!delivery.value) {
          delivery.value = `${city}, ${state}`;
        } else {
          delivery.value = `${city}, ${state}`;
        }
        closeModal(locationModal);
      });
      citiesContainer.appendChild(cbtn);
    });
    cityList.classList.remove('hidden');
  }

  locationLink.addEventListener('click', (e) => {
    e.preventDefault();
    openModal(locationModal);
  });
  closeLocation.addEventListener('click', () => closeModal(locationModal));

  document.querySelectorAll('.vehicle-modal').forEach(modal => {
    modal.addEventListener('click', (evt) => {
      if (evt.target === modal) closeModal(modal);
    });
  });

  function initPlaces() {
    try {
      const pickup = document.getElementById('pickup');
      const delivery = document.getElementById('delivery');
      if (window.google && window.google.maps && window.google.maps.places) {
        new google.maps.places.Autocomplete(pickup, { types: ['(cities)'] });
        new google.maps.places.Autocomplete(delivery, { types: ['(cities)'] });
      }
    } catch (e) {}
  }

  window.addEventListener('load', initPlaces);

  const bookNowBtn = document.getElementById('bookNowBtn');
  bookNowBtn.addEventListener('click', () => {
    const p = document.getElementById('pickup').value.trim();
    const d = document.getElementById('delivery').value.trim();
    if (!p || !d) {
      alert('Please enter pickup and delivery locations or choose locations from the Location picker.');
      return;
    }
    alert(`Booking requested:\nPickup: ${p}\nDelivery: ${d}\n(Implement backend to complete booking)`);
  });

});
