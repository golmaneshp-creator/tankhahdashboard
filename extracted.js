// سرفصل‌های هزینه و مجوزهای آنها
        const expenseCategories = {
            'ایاب و ذهاب': ['S', 'F', 'TS', 'TF'],
            'آبدارخانه‌ (قند و چای)': ['S', 'F', 'TS', 'TF'],
            'حمل و باربری': ['S', 'F', 'TS', 'TF'],
            'ابزار فني‌ مصرفي‌ (تائید فنی)': ['S', 'F', 'TS', 'TF'],
            'قبض آب': ['S', 'F', 'TS', 'TF'],
            'قبض برق': ['S', 'F', 'TS', 'TF'],
            'قبض تلفن': ['S', 'F', 'TS', 'TF'],
            'قبض گاز و گازوئیل': ['S', 'F', 'TS', 'TF'],
            'پذیرایی': ['S', 'F', 'TS', 'TF'],
            'تنظيفات‌': ['S', 'F', 'TS', 'TF'],
            'بنزین و روغن وسایط نقلیه': ['S', 'F', 'TS', 'TF'],
            'فتوکپی و زیراکس': ['S', 'F', 'TS', 'TF'],
            'کارمزد بانکی': ['S', 'F', 'TS', 'TF'],
            'نایلکس (فاکتور رسمی)': ['F', 'TS', 'TF'],
            'نوشت‌افزار': ['S', 'F', 'TS', 'TF'],
            'لوازم مصرفی': ['S', 'F', 'TS', 'TF'],
            'تعمیر اثاثه اداری (پرینتر و ...)': ['S', 'F', 'TS', 'TF'],
            'تعمیر تاسیسات (تائید فنی)': ['S', 'F', 'TS', 'TF'],
            'تعمیر ساختمان (تائید فنی)': ['S', 'F', 'TS', 'TF'],
            'تعمیر وسایط نقلیه': ['S', 'F', 'TS', 'TF'],
            'دستمزد کارگران': ['S', 'F', 'TS', 'TF'],
            'نرم افزار': ['S', 'F', 'TS', 'TF'],
            'بهداشت و درمان': ['S', 'F', 'TS', 'TF'],
            'ورزش': ['S', 'F', 'TS', 'TF'],
            'برچسب بارکد': ['S', 'F', 'TS', 'TF'],
            'پیامک': ['F', 'TS', 'TF'],
            'شبکه اینترنت': ['S', 'F', 'TS', 'TF'],
            'پست': ['S', 'F', 'TS', 'TF'],
            'عوارض': ['S', 'TS', 'TF'],
            'نشریات': ['S', 'TS', 'TF'],
            'خرید/الحاق اموال اثاثیه اداری': ['S', 'TS', 'TF'],
            'خرید/الحاق اموال تاسیسات': ['S', 'TS', 'TF'],
            'خرید/الحاق اموال ساختمان': ['S', 'TS', 'TF'],
            'خرید/الحاق اموال ماشین آلات': ['S', 'TS', 'TF'],
            'خرید/الحاق اموال ابزار کار': ['S', 'TS', 'TF'],
            'بیمه وسایط نقلیه': ['S', 'TS', 'TF'],
            'ثبت شرکتها': ['S', 'TS', 'TF'],
            'ثبتی و دفترخانه ای': ['S', 'TS', 'TF'],
            'سخت افزار': ['S', 'TS', 'TF'],
            'کارشناسی': ['S', 'TS', 'TF'],
            'موبایل': ['S', 'TS', 'TF']
        };

// -------------------------
// مدیریت اطلاعات پایه (نسخه جدا)
// -------------------------

function toggleBaseDataPanel() {
  const panel = document.getElementById("baseDataPanel");
  panel.classList.toggle("hidden");

  if (!panel.classList.contains("hidden")) {
    renderUsersTable();
    renderExpensesTable();
    renderCentersTable();
  }
}

function renderUsersTable() {
  const tbody = document.getElementById("usersTableBody");
  tbody.innerHTML = "";
  Object.keys(realUsers).forEach(u => {
    const user = realUsers[u];
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td class="border px-3 py-2">${u}</td>
      <td class="border px-3 py-2">${user.center}</td>
      <td class="border px-3 py-2">${user.hazinemojaz}</td>
      <td class="border px-3 py-2 text-center"><input type="checkbox" ${user.multiCenter ? "checked": ""}></td>
    `;
    tbody.appendChild(tr);
  });
}

function renderExpensesTable() {
  const tbody = document.getElementById("expensesTableBody");
  tbody.innerHTML = "";
  Object.keys(expenseCategories).forEach(group => {
    expenseCategories[group].forEach(exp => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td class="border px-3 py-2">${group}</td>
        <td class="border px-3 py-2">${exp}</td>
        <td class="border px-3 py-2 text-center"><input type="checkbox" checked></td>
      `;
      tbody.appendChild(tr);
    });
  });
}

function renderCentersTable() {
  const tbody = document.getElementById("centersTableBody");
  tbody.innerHTML = "";
  let centers = new Set(Object.values(realUsers).map(u=>u.center));
  centers.forEach(c => {
    const tr = document.createElement("tr");
    tr.innerHTML = `<td class="border px-3 py-2">${c}</td><td class="border px-3 py-2">مرکز ${c}</td>`;
    tbody.appendChild(tr);
  });
}

function addExpenseGroup() { alert("ایجاد گروه هزینه جدید (نیاز به توسعه بیشتر)"); }
function addExpenseItem() { alert("ایجاد هزینه جدید (نیاز به توسعه بیشتر)"); }
function addCenter() { alert("ایجاد مرکز جدید (نیاز به توسعه بیشتر)"); }


// -------------------------
// مدیریت اطلاعات پایه
// -------------------------

function renderUsersTable() {
  const tbody = document.getElementById("usersTableBody");
  tbody.innerHTML = "";
  Object.keys(realUsers).forEach(u => {
    const user = realUsers[u];
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td class="border px-3 py-2">${u}</td>
      <td class="border px-3 py-2"><input type="text" value="${user.center}" onchange="realUsers['${u}'].center=this.value"></td>
      <td class="border px-3 py-2"><input type="text" value="${user.hazinemojaz}" onchange="realUsers['${u}'].hazinemojaz=this.value"></td>
      <td class="border px-3 py-2 text-center"><input type="checkbox" ${user.multiCenter ? "checked": ""} onchange="realUsers['${u}'].multiCenter=this.checked"></td>
    `;
    tbody.appendChild(tr);
  });
}

function renderExpensesTable() {
  const tbody = document.getElementById("expensesTableBody");
  tbody.innerHTML = "";
  Object.keys(expenseCategories).forEach(group => {
    expenseCategories[group].forEach(exp => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td class="border px-3 py-2">${group}</td>
        <td class="border px-3 py-2">${exp}</td>
        <td class="border px-3 py-2 text-center"><input type="checkbox" checked></td>
      `;
      tbody.appendChild(tr);
    });
  });
}

function renderCentersTable() {
  const tbody = document.getElementById("centersTableBody");
  tbody.innerHTML = "";
  let centers = new Set(Object.values(realUsers).map(u=>u.center));
  centers.forEach(c => {
    const tr = document.createElement("tr");
    tr.innerHTML = `<td class="border px-3 py-2">${c}</td><td class="border px-3 py-2">مرکز ${c}</td>`;
    tbody.appendChild(tr);
  });
}

function addExpenseGroup() { alert("ایجاد گروه هزینه جدید (نیاز به توسعه بیشتر)"); }
function addExpenseItem() { alert("ایجاد هزینه جدید (نیاز به توسعه بیشتر)"); }
function addCenter() { alert("ایجاد مرکز جدید (نیاز به توسعه بیشتر)"); }

// موقع ورود به پنل مدیریت اطلاعات پایه
function showBaseDataManagement() {
  renderUsersTable();
  renderExpensesTable();
  renderCentersTable();
  alert("مدیریت اطلاعات پایه آماده شد ✅ (جدول‌ها رندر شدند)");
}


// -------------------------
// مدیریت فرم‌های جدید
// -------------------------

// ذخیره کاربر جدید
document.getElementById("createUserForm")?.addEventListener("submit", e => {
  e.preventDefault();
  const username = document.getElementById("newUserUsername").value;
  const pass = document.getElementById("newUserPassword").value;
  const center = document.getElementById("newUserCenter").value;

  realUsers[username] = {
    pass,
    code: Date.now().toString().slice(-3),
    center,
    name: "کاربر جدید",
    account: "",
    bankCode: "",
    total: "0",
    hazinemojaz: "F"
  };

// -------------------------
// مدیریت اطلاعات پایه (نسخه جدا)
// -------------------------

function toggleBaseDataPanel() {
  const panel = document.getElementById("baseDataPanel");
  panel.classList.toggle("hidden");

  if (!panel.classList.contains("hidden")) {
    renderUsersTable();
    renderExpensesTable();
    renderCentersTable();
  }
}

function renderUsersTable() {
  const tbody = document.getElementById("usersTableBody");
  tbody.innerHTML = "";
  Object.keys(realUsers).forEach(u => {
    const user = realUsers[u];
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td class="border px-3 py-2">${u}</td>
      <td class="border px-3 py-2">${user.center}</td>
      <td class="border px-3 py-2">${user.hazinemojaz}</td>
      <td class="border px-3 py-2 text-center"><input type="checkbox" ${user.multiCenter ? "checked": ""}></td>
    `;
    tbody.appendChild(tr);
  });
}

function renderExpensesTable() {
  const tbody = document.getElementById("expensesTableBody");
  tbody.innerHTML = "";
  Object.keys(expenseCategories).forEach(group => {
    expenseCategories[group].forEach(exp => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td class="border px-3 py-2">${group}</td>
        <td class="border px-3 py-2">${exp}</td>
        <td class="border px-3 py-2 text-center"><input type="checkbox" checked></td>
      `;
      tbody.appendChild(tr);
    });
  });
}

function renderCentersTable() {
  const tbody = document.getElementById("centersTableBody");
  tbody.innerHTML = "";
  let centers = new Set(Object.values(realUsers).map(u=>u.center));
  centers.forEach(c => {
    const tr = document.createElement("tr");
    tr.innerHTML = `<td class="border px-3 py-2">${c}</td><td class="border px-3 py-2">مرکز ${c}</td>`;
    tbody.appendChild(tr);
  });
}

function addExpenseGroup() { alert("ایجاد گروه هزینه جدید (نیاز به توسعه بیشتر)"); }
function addExpenseItem() { alert("ایجاد هزینه جدید (نیاز به توسعه بیشتر)"); }
function addCenter() { alert("ایجاد مرکز جدید (نیاز به توسعه بیشتر)"); }


// -------------------------
// مدیریت اطلاعات پایه
// -------------------------

function renderUsersTable() {
  const tbody = document.getElementById("usersTableBody");
  tbody.innerHTML = "";
  Object.keys(realUsers).forEach(u => {
    const user = realUsers[u];
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td class="border px-3 py-2">${u}</td>
      <td class="border px-3 py-2"><input type="text" value="${user.center}" onchange="realUsers['${u}'].center=this.value"></td>
      <td class="border px-3 py-2"><input type="text" value="${user.hazinemojaz}" onchange="realUsers['${u}'].hazinemojaz=this.value"></td>
      <td class="border px-3 py-2 text-center"><input type="checkbox" ${user.multiCenter ? "checked": ""} onchange="realUsers['${u}'].multiCenter=this.checked"></td>
    `;
    tbody.appendChild(tr);
  });
}

function renderExpensesTable() {
  const tbody = document.getElementById("expensesTableBody");
  tbody.innerHTML = "";
  Object.keys(expenseCategories).forEach(group => {
    expenseCategories[group].forEach(exp => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td class="border px-3 py-2">${group}</td>
        <td class="border px-3 py-2">${exp}</td>
        <td class="border px-3 py-2 text-center"><input type="checkbox" checked></td>
      `;
      tbody.appendChild(tr);
    });
  });
}

function renderCentersTable() {
  const tbody = document.getElementById("centersTableBody");
  tbody.innerHTML = "";
  let centers = new Set(Object.values(realUsers).map(u=>u.center));
  centers.forEach(c => {
    const tr = document.createElement("tr");
    tr.innerHTML = `<td class="border px-3 py-2">${c}</td><td class="border px-3 py-2">مرکز ${c}</td>`;
    tbody.appendChild(tr);
  });
}

function addExpenseGroup() { alert("ایجاد گروه هزینه جدید (نیاز به توسعه بیشتر)"); }
function addExpenseItem() { alert("ایجاد هزینه جدید (نیاز به توسعه بیشتر)"); }
function addCenter() { alert("ایجاد مرکز جدید (نیاز به توسعه بیشتر)"); }

// موقع ورود به پنل مدیریت اطلاعات پایه
function showBaseDataManagement() {
  renderUsersTable();
  renderExpensesTable();
  renderCentersTable();
  alert("مدیریت اطلاعات پایه آماده شد ✅ (جدول‌ها رندر شدند)");
}

  alert("کاربر جدید ثبت شد ✅");
});

// ذخیره مرکز جدید
document.getElementById("createCenterForm")?.addEventListener("submit", e => {
  e.preventDefault();
  const code = document.getElementById("newCenterCode").value;
  const name = document.getElementById("newCenterName").value;
  alert(`مرکز ${name} با کد ${code} ثبت شد ✅`);
});

// دسترسی به کاربر
document.getElementById("userAccessForm")?.addEventListener("submit", e => {
  e.preventDefault();
  const user = document.getElementById("accessUsername").value;
  const expense = document.getElementById("accessExpense").value;
  const center = document.getElementById("accessCenter").value;

  if (realUsers[user]) {
    realUsers[user].hazinemojaz = expense || "F";
    realUsers[user].center = center || realUsers[user].center;
    alert("دسترسی بروزرسانی شد ✅");
  } else {
    alert("کاربر یافت نشد ❌");
  }
});

// ذخیره هزینه جدید
document.getElementById("createExpenseForm")?.addEventListener("submit", e => {
  e.preventDefault();
  const title = document.getElementById("newExpenseTitle").value;
  if (title) {
    expenseCategories[title] = ["S", "F", "TS", "TF"];
    alert("هزینه جدید اضافه شد ✅");
  }
});


// کاربرانی که می‌تونن برای مراکز دیگه هزینه ثبت کنن
const multiCenterUsers = [
    "7134917", "7134350", "7134278", "7133866", "7132865", 
    "7132822", "7134844", "7132303", "7134937", "7132456", "7131668"
];


        // اطلاعات واقعی کاربران
        const realUsers = {
            '123': { pass: '123', code: '001', center: 'بیهقی', name: 'حمید غیبی-حسن رحیمی', account: '4001002983832', bankCode: '34563', total: '1500000000', hazinemojaz: 'F' },
            '7133060': { pass: '3060', code: '001', center: 'بیهقی', name: 'حمید غیبی-حسن رحیمی', account: '4001002983832', bankCode: '34563', total: '1500000000', hazinemojaz: 'F' },
            '7134949': { pass: '4949', code: '002', center: 'بهاران', name: 'محمد عبدی خان', account: '4001005653909', bankCode: '34592', total: '400000000', hazinemojaz: 'F' },
            '7134305': { pass: '4305', code: '003', center: 'بهرود', name: 'حبیب اله نادری-سجاد فرهادی نیا', account: '4001004785064', bankCode: '34578', total: '700000000', hazinemojaz: 'F' },
            '7133612': { pass: '3612', code: '004', center: 'بوستان', name: 'علی محمدی-ذلیخا نوروزیان', account: '4001004804929', bankCode: '34637', total: '700000000', hazinemojaz: 'F' },
            '7134644': { pass: '4644', code: '005', center: 'آزادی', name: 'مهشید یوسفی-فاطمه آذرمی', account: '4001005080647', bankCode: '34583', total: '200000000', hazinemojaz: 'F' },
            '7134689': { pass: '4689', code: '006', center: 'آل احمد', name: 'مهری علی پور-اعظم مفردی کلوخی', account: '4001005189046', bankCode: '34628', total: '400000000', hazinemojaz: 'F' },
            '7131027': { pass: '1027', code: '008', center: 'صادقیه', name: 'رضa بابائی دوست اکبرآباد', account: '4001005608267', bankCode: '34566', total: '400000000', hazinemojaz: 'F' },
            '7132095': { pass: '2095', code: '009', center: 'آزادگان', name: 'زهرا سمیع نیا-سیدحجت حسینی نسب', account: '4001004814789', bankCode: '34591', total: '400000000', hazinemojaz: 'F' },
            '7133141': { pass: '3141', code: '011', center: 'المپیک', name: 'مهری هدایتی صدیق-فیروزه شاهمرادی', account: '4001002790169', bankCode: '34551', total: '400000000', hazinemojaz: 'F' },
            '7132835': { pass: '2835', code: '012', center: 'حکیمیه', name: 'زینب حنائی-فاطمه یزدی', account: '4001005437729', bankCode: '34598', total: '400000000', hazinemojaz: 'F' },
            '7132607': { pass: '2607', code: '013', center: 'شهرری', name: 'عیسی زارعی-احمد آزادی', account: '4001002775086', bankCode: '34555', total: '400000000', hazinemojaz: 'F' },
            '7133140': { pass: '3140', code: '014', center: 'مترو صادقیه', name: 'مهلقا موسوی-پروانه انصاری', account: '4001003004323', bankCode: '34590', total: '200000000', hazinemojaz: 'F' },
            '7132741': { pass: '2741', code: '016', center: 'فروش عمده', name: 'mژگان کاظمی-سمانه یوسفی نیکو', account: '4001005274449', bankCode: '34623', total: '2000000000', hazinemojaz: 'F' },
            '7134648': { pass: '4648', code: '017', center: 'لواسان', name: 'اسمعیل گودرزی-روح الله دریکوند', account: '4001002951115', bankCode: '34567', total: '200000000', hazinemojaz: 'F' },
            '7133646': { pass: '3646', code: '018', center: 'کاشانک', name: 'مریم قادری', account: '4001002925415', bankCode: '34553', total: '200000000', hazinemojaz: 'F' },
            '7133636': { pass: '3636', code: '019', center: 'خانی آباد', name: 'محسن کرجی-ریحانه زند', account: '4001005544970', bankCode: '34605', total: '400000000', hazinemojaz: 'F' },
            '7134948': { pass: '4948', code: '020', center: 'چیذر', name: 'عباس کاظمیان-معصومه حصاری شراهی', account: '4001003023189', bankCode: '34587', total: '250000000', hazinemojaz: 'F' },
            '7134479': { pass: '4479', code: '022', center: 'نبرد', name: 'مصطفی خسروی-میرجعفر میرمحمدی', account: '4001004173469', bankCode: '34629', total: '250000000', hazinemojaz: 'F' },
            '7133260': { pass: '3260', code: '024', center: 'تهران نو', name: 'مریم قمری نوده-سمیه محمدی هامانه', account: '4001005284843', bankCode: '34554', total: '250000000', hazinemojaz: 'F' },
            '7135062': { pass: '5062', code: '025', center: 'مجیدیه', name: 'مرتضی صادقی-نیما فیروزبخش', account: '4001003010789', bankCode: '34576', total: '300000000', hazinemojaz: 'F' },
            '7133267': { pass: '3267', code: '027', center: 'ترکمنستان', name: 'مهری مولائی-برات kاظمی طاسکوه', account: '4001003513924', bankCode: '34618', total: '300000000', hazinemojaz: 'F' },
            '7132091': { pass: '2091', code: '028', center: 'لویزان', name: 'مرتضی نقوی-سحر پیش بر', account: '4001002933256', bankCode: '34569', total: '400000000', hazinemojaz: 'F' },
            '7134804': { pass: '4804', code: '030', center: 'مدیریت توسعه تجارت الکترونیک', name: 'احمد ونائی-محمد جاویدمند', account: '4001003055190', bankCode: '34595', total: '600000000', hazinemojaz: 'S' },
            '7133675': { pass: '3675', code: '032', center: 'ایران زمین', name: 'مجید مانده گاری-مریم نوروزی', account: '4001004936632', bankCode: '34370', total: '800000000', hazinemojaz: 'F' },
            '7134742': { pass: '4742', code: '033', center: 'دارآباد', name: 'مهدی غفران-لیلا ولی زاده', account: '4001005089251', bankCode: '34581', total: '250000000', hazinemojaz: 'F' },
            '7131680': { pass: '1680', code: '034', center: 'خاوران- طیب', name: 'بهروز محمدنیa-مجتبی قمی اویلی', account: '4001005334568', bankCode: '34586', total: '200000000', hazinemojaz: 'F' },
            '7133137': { pass: '3137', code: '037', center: 'نفت', name: 'علی بهزادیان-مریم تیموری', account: '4001004960098', bankCode: '34597', total: '200000000', hazinemojaz: 'F' },
            '7133271': { pass: '3271', code: '038', center: 'هفت حوض', name: 'زهرا کندی داینی', account: '4001005587203', bankCode: '34632', total: '400000000', hazinemojaz: 'F' },
            '7133373': { pass: '3373', code: '039', center: 'راه آهن', name: 'اعظم اقامحمدعارف-زهرا طباخ گر', account: '4001004589006', bankCode: '34577', total: '250000000', hazinemojaz: 'F' },
            '7134423': { pass: '4423', code: '040', center: 'فجر', name: 'سحر همتی', account: '4001002435472', bankCode: '34602', total: '200000000', hazinemojaz: 'F' },
            '7134968': { pass: '4968', code: '041', center: 'مبعث', name: 'اصغر میرزائی باروجی-زینت نوائی لورون', account: '4001003266694', bankCode: '34611', total: '250000000', hazinemojaz: 'F' },
            '7132211': { pass: '2211', code: '042', center: 'هفده شهریور', name: 'علیرضا صدری-حسن حلاجیان مفردکاشانی', account: '4001003932983', bankCode: '34626', total: '400000000', hazinemojaz: 'F' },
            '7132755': { pass: '2755', code: '044', center: 'جنت آباد', name: 'رحیم شایقی-مجید رشتاک', account: '4001005079671', bankCode: '34647', total: '250000000', hazinemojaz: 'F' },
            '7134914': { pass: '4914', code: '045', center: 'تهرانسر', name: 'فاطمه صادقی آقباش-مهتاب اصغری همپا', account: '4001002956748', bankCode: '34571', total: '250000000', hazinemojaz: 'F' },
            '7135158': { pass: '5158', code: '046', center: 'پرند', name: 'رمضان بابائی-میثم صارمی', account: '4001002952394', bankCode: '34561', total: '250000000', hazinemojaz: 'F' },
            '7133169': { pass: '3169', code: '047', center: 'عدل', name: 'غزاله علی پور-علی داروغه زاده', account: '4001004932210', bankCode: '34582', total: '200000000', hazinemojaz: 'F' },
            '7133772': { pass: '3772', code: '048', center: 'سهروردی ', name: 'مسعود عنبرستانی-عباس ابره دری', account: '4001003065338', bankCode: '34599', total: '300000000', hazinemojaz: 'F' },
            '7134561': { pass: '4561', code: '049', center: 'مارلیk', name: 'اکرم بدرلو-دانیال روزبهانی', account: '4001005008999', bankCode: '34645', total: '250000000', hazinemojaz: 'F' },
            '7131885': { pass: '1885', code: '050', center: 'نارسیس', name: 'حمیدرضا کاظمی خواه-سمانه شجاعی', account: '4001003212524', bankCode: '34609', total: '300000000', hazinemojaz: 'F' },
            '7133211': { pass: '3211', code: '056', center: 'دروس', name: 'محمدتقی ابراهیمی-شهروز کاظمی نادکر', account: '4001005315258', bankCode: '34640', total: '250000000', hazinemojaz: 'F' },
            '7132804': { pass: '2804', code: '057', center: 'مهرشهر', name: 'رضا مشهدی فراهانی-مجید ممانی', account: '4001002945494', bankCode: '34562', total: '600000000', hazinemojaz: 'F' },
            '7133502': { pass: '3502', code: '058', center: 'شمیران سنتر', name: 'زهره علیزاده-شهاب الدین مختاری', account: '4001005439886', bankCode: '34560', total: '250000000', hazinemojaz: 'F' },
            '7135188': { pass: '5188', code: '059', center: 'نبرد جنوبی', name: 'محمدرضا سلامی', account: '', bankCode: '', total: '300000000', hazinemojaz: 'F' },
            '7133529': { pass: '3529', code: '060', center: 'بهشت ', name: 'فاطمه امیرحسنی-سیده گیتی صدری جوکندان', account: '4001003171312', bankCode: '34606', total: '200000000', hazinemojaz: 'F' },
            '7134912': { pass: '4912', code: '062', center: 'تماس ', name: 'الناز احدی-حسن رشیدی پور', account: '4001004869521', bankCode: '34636', total: '300000000', hazinemojaz: 'F' },
            '7134948': { pass: '4948', code: '063', center: 'وزارت راه وشهرسازی', name: 'عباس کاظمیان-رضا عبدالملکی', account: '4001005093882', bankCode: '34633', total: '150000000', hazinemojaz: 'F' },
            '7134518': { pass: '4518', code: '064', center: 'لاله ', name: 'جعفر خانزادی-سمیرا یوسفی', account: '4001002977437', bankCode: '34575', total: '200000000', hazinemojaz: 'F' },
            '7135154': { pass: '5154', code: '065', center: 'یافت آباد', name: 'سیده آمنه میران-زهره محمدی', account: '4001005528077', bankCode: '34624', total: '200000000', hazinemojaz: 'F' },
            '7131038': { pass: '1038', code: '066', center: 'سرو', name: 'عبدالرضا افشار-فاطمه کوه نورد', account: '4001005527805', bankCode: '34608', total: '200000000', hazinemojaz: 'F' },
            '7132708': { pass: '2708', code: '067', center: 'البرز ', name: 'اسماعیل علی توکلی-میثم نوابی', account: '4001004981357', bankCode: '34610', total: '300000000', hazinemojaz: 'F' },
            '7133473': { pass: '3473', code: '068', center: 'عباسی', name: 'زهره طباخ گر-فرشته شیخی', account: '4001004462001', bankCode: '34630', total: '200000000', hazinemojaz: 'F' },
            '7134784': { pass: '4784', code: '070', center: 'صفا دشت ', name: 'حمیدرضa شمس ناتری-سمانه افزونی', account: '4001003007850', bankCode: '34574', total: '200000000', hazinemojaz: 'F' },
            '7134380': { pass: '4380', code: '072', center: 'وزارت کشور', name: 'حسین خادم مؤید-میترا اصغرزاده حسنارودی', account: '4001005314281', bankCode: '34622', total: '250000000', hazinemojaz: 'F' },
            '7134903': { pass: '4903', code: '073', center: 'حسابرسان', name: 'بهاره جعفری-شیما حیدری نوروز', account: '4001005378053', bankCode: '34639', total: '200000000', hazinemojaz: 'F' },
            '7135199': { pass: '5199', code: '076', center: 'اندیشه', name: 'سیدطاها حسینی-سیدمحمدرضا محمودی خوانساری', account: '4001004992129', bankCode: '34616', total: '300000000', hazinemojaz: 'F' },
            '7134370': { pass: '4370', code: '078', center: 'شهریار', name: 'مهدی بقائی-مسلم فرج پور', account: '4001004902279', bankCode: '34638', total: '300000000', hazinemojaz: 'F' },
            '7134917': { pass: '4917', code: '102', center: 'مدیریت پشتیبانی', name: 'محسن شیری-علی اکبر محمدی', account: '4001005065430', bankCode: '34627', total: '5000000000', hazinemojaz: 'S' },
            '7134350': { pass: '4350', code: '104', center: 'معاونت مالی', name: 'امیر رضائی حق-پوریا صدرائی', account: '4001004801962', bankCode: '34634', total: '800000000', hazinemojaz: 'S' },
            '7134278': { pass: '4278', code: '106', center: 'مدیریت فناوری اطلاعات ', name: 'طیبه حیدری-فرزام احمدی', account: '4001003564403', bankCode: '34620', total: '1000000000', hazinemojaz: 'S' },
            '7133866': { pass: '3866', code: '108', center: 'مدیریت فنی ومهندسی ', name: 'مهدی بختیارشهمیرزادی-محمد حاجتی چپه زادی', account: '4001003102458', bankCode: '34604', total: '5000000000', hazinemojaz: 'TS' },
            '7132865': { pass: '2865', code: '109', center: 'مدیریت مهندسی توسعه', name: 'علی عسگری-مونا رفیع پور', account: '4001005476356', bankCode: '34653', total: '300000000', hazinemojaz: 'S' },
            '7132822': { pass: '2822', code: '112', center: 'مدیریت تبلیغات ', name: 'سمیه میرزائی-عاطفه نام آور', account: '4001004657928', bankCode: '34631', total: '400000000', hazinemojaz: 'S' },
            '7134844': { pass: '4844', code: '212', center: 'معaونت توسعه فروشگاهی', name: 'سیدحامد آل داود-میلاد شمسی', account: '4001003528273', bankCode: '34619', total: '250000000', hazinemojaz: 'S' },
            '7132303': { pass: '2303', code: '214', center: 'معاونت منابع انسانی', name: 'مهدی رفیع پor-مهران اکبری', account: '4001001167020', bankCode: '34526', total: '500000000', hazinemojaz: 'S' },
            '7134937': { pass: '4937', code: '449', center: 'بازرسی ', name: 'محسن فرخی پور-عارف سلطانی', account: '4001003085173', bankCode: '34600', total: '250000000', hazinemojaz: 'S' },
            '7132456': { pass: '2456', code: '991', center: 'پایگاه مقاومت بسیج', name: 'امیرحسین فرهانی-مهدی فرح زادی', account: '4001003445590', bankCode: '700544', total: '3000000000', hazinemojaz: 'S' },
            '7131668': { pass: '1668', code: '998', center: 'اداره اموال', name: 'محمود سحری', account: '4001003558378', bankCode: '30007', total: '200000000', hazinemojaz: 'S' },
        };

// -------------------------
// مدیریت اطلاعات پایه (نسخه جدا)
// -------------------------

function toggleBaseDataPanel() {
  const panel = document.getElementById("baseDataPanel");
  panel.classList.toggle("hidden");

  if (!panel.classList.contains("hidden")) {
    renderUsersTable();
    renderExpensesTable();
    renderCentersTable();
  }
}

function renderUsersTable() {
  const tbody = document.getElementById("usersTableBody");
  tbody.innerHTML = "";
  Object.keys(realUsers).forEach(u => {
    const user = realUsers[u];
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td class="border px-3 py-2">${u}</td>
      <td class="border px-3 py-2">${user.center}</td>
      <td class="border px-3 py-2">${user.hazinemojaz}</td>
      <td class="border px-3 py-2 text-center"><input type="checkbox" ${user.multiCenter ? "checked": ""}></td>
    `;
    tbody.appendChild(tr);
  });
}

function renderExpensesTable() {
  const tbody = document.getElementById("expensesTableBody");
  tbody.innerHTML = "";
  Object.keys(expenseCategories).forEach(group => {
    expenseCategories[group].forEach(exp => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td class="border px-3 py-2">${group}</td>
        <td class="border px-3 py-2">${exp}</td>
        <td class="border px-3 py-2 text-center"><input type="checkbox" checked></td>
      `;
      tbody.appendChild(tr);
    });
  });
}

function renderCentersTable() {
  const tbody = document.getElementById("centersTableBody");
  tbody.innerHTML = "";
  let centers = new Set(Object.values(realUsers).map(u=>u.center));
  centers.forEach(c => {
    const tr = document.createElement("tr");
    tr.innerHTML = `<td class="border px-3 py-2">${c}</td><td class="border px-3 py-2">مرکز ${c}</td>`;
    tbody.appendChild(tr);
  });
}

function addExpenseGroup() { alert("ایجاد گروه هزینه جدید (نیاز به توسعه بیشتر)"); }
function addExpenseItem() { alert("ایجاد هزینه جدید (نیاز به توسعه بیشتر)"); }
function addCenter() { alert("ایجاد مرکز جدید (نیاز به توسعه بیشتر)"); }


// -------------------------
// مدیریت اطلاعات پایه
// -------------------------

function renderUsersTable() {
  const tbody = document.getElementById("usersTableBody");
  tbody.innerHTML = "";
  Object.keys(realUsers).forEach(u => {
    const user = realUsers[u];
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td class="border px-3 py-2">${u}</td>
      <td class="border px-3 py-2"><input type="text" value="${user.center}" onchange="realUsers['${u}'].center=this.value"></td>
      <td class="border px-3 py-2"><input type="text" value="${user.hazinemojaz}" onchange="realUsers['${u}'].hazinemojaz=this.value"></td>
      <td class="border px-3 py-2 text-center"><input type="checkbox" ${user.multiCenter ? "checked": ""} onchange="realUsers['${u}'].multiCenter=this.checked"></td>
    `;
    tbody.appendChild(tr);
  });
}

function renderExpensesTable() {
  const tbody = document.getElementById("expensesTableBody");
  tbody.innerHTML = "";
  Object.keys(expenseCategories).forEach(group => {
    expenseCategories[group].forEach(exp => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td class="border px-3 py-2">${group}</td>
        <td class="border px-3 py-2">${exp}</td>
        <td class="border px-3 py-2 text-center"><input type="checkbox" checked></td>
      `;
      tbody.appendChild(tr);
    });
  });
}

function renderCentersTable() {
  const tbody = document.getElementById("centersTableBody");
  tbody.innerHTML = "";
  let centers = new Set(Object.values(realUsers).map(u=>u.center));
  centers.forEach(c => {
    const tr = document.createElement("tr");
    tr.innerHTML = `<td class="border px-3 py-2">${c}</td><td class="border px-3 py-2">مرکز ${c}</td>`;
    tbody.appendChild(tr);
  });
}

function addExpenseGroup() { alert("ایجاد گروه هزینه جدید (نیاز به توسعه بیشتر)"); }
function addExpenseItem() { alert("ایجاد هزینه جدید (نیاز به توسعه بیشتر)"); }
function addCenter() { alert("ایجاد مرکز جدید (نیاز به توسعه بیشتر)"); }

// موقع ورود به پنل مدیریت اطلاعات پایه
function showBaseDataManagement() {
  renderUsersTable();
  renderExpensesTable();
  renderCentersTable();
  alert("مدیریت اطلاعات پایه آماده شد ✅ (جدول‌ها رندر شدند)");
}


// -------------------------
// مدیریت فرم‌های جدید
// -------------------------

// ذخیره کاربر جدید
document.getElementById("createUserForm")?.addEventListener("submit", e => {
  e.preventDefault();
  const username = document.getElementById("newUserUsername").value;
  const pass = document.getElementById("newUserPassword").value;
  const center = document.getElementById("newUserCenter").value;

  realUsers[username] = {
    pass,
    code: Date.now().toString().slice(-3),
    center,
    name: "کاربر جدید",
    account: "",
    bankCode: "",
    total: "0",
    hazinemojaz: "F"
  };

// -------------------------
// مدیریت اطلاعات پایه (نسخه جدا)
// -------------------------

function toggleBaseDataPanel() {
  const panel = document.getElementById("baseDataPanel");
  panel.classList.toggle("hidden");

  if (!panel.classList.contains("hidden")) {
    renderUsersTable();
    renderExpensesTable();
    renderCentersTable();
  }
}

function renderUsersTable() {
  const tbody = document.getElementById("usersTableBody");
  tbody.innerHTML = "";
  Object.keys(realUsers).forEach(u => {
    const user = realUsers[u];
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td class="border px-3 py-2">${u}</td>
      <td class="border px-3 py-2">${user.center}</td>
      <td class="border px-3 py-2">${user.hazinemojaz}</td>
      <td class="border px-3 py-2 text-center"><input type="checkbox" ${user.multiCenter ? "checked": ""}></td>
    `;
    tbody.appendChild(tr);
  });
}

function renderExpensesTable() {
  const tbody = document.getElementById("expensesTableBody");
  tbody.innerHTML = "";
  Object.keys(expenseCategories).forEach(group => {
    expenseCategories[group].forEach(exp => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td class="border px-3 py-2">${group}</td>
        <td class="border px-3 py-2">${exp}</td>
        <td class="border px-3 py-2 text-center"><input type="checkbox" checked></td>
      `;
      tbody.appendChild(tr);
    });
  });
}

function renderCentersTable() {
  const tbody = document.getElementById("centersTableBody");
  tbody.innerHTML = "";
  let centers = new Set(Object.values(realUsers).map(u=>u.center));
  centers.forEach(c => {
    const tr = document.createElement("tr");
    tr.innerHTML = `<td class="border px-3 py-2">${c}</td><td class="border px-3 py-2">مرکز ${c}</td>`;
    tbody.appendChild(tr);
  });
}

function addExpenseGroup() { alert("ایجاد گروه هزینه جدید (نیاز به توسعه بیشتر)"); }
function addExpenseItem() { alert("ایجاد هزینه جدید (نیاز به توسعه بیشتر)"); }
function addCenter() { alert("ایجاد مرکز جدید (نیاز به توسعه بیشتر)"); }


// -------------------------
// مدیریت اطلاعات پایه
// -------------------------

function renderUsersTable() {
  const tbody = document.getElementById("usersTableBody");
  tbody.innerHTML = "";
  Object.keys(realUsers).forEach(u => {
    const user = realUsers[u];
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td class="border px-3 py-2">${u}</td>
      <td class="border px-3 py-2"><input type="text" value="${user.center}" onchange="realUsers['${u}'].center=this.value"></td>
      <td class="border px-3 py-2"><input type="text" value="${user.hazinemojaz}" onchange="realUsers['${u}'].hazinemojaz=this.value"></td>
      <td class="border px-3 py-2 text-center"><input type="checkbox" ${user.multiCenter ? "checked": ""} onchange="realUsers['${u}'].multiCenter=this.checked"></td>
    `;
    tbody.appendChild(tr);
  });
}

function renderExpensesTable() {
  const tbody = document.getElementById("expensesTableBody");
  tbody.innerHTML = "";
  Object.keys(expenseCategories).forEach(group => {
    expenseCategories[group].forEach(exp => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td class="border px-3 py-2">${group}</td>
        <td class="border px-3 py-2">${exp}</td>
        <td class="border px-3 py-2 text-center"><input type="checkbox" checked></td>
      `;
      tbody.appendChild(tr);
    });
  });
}

function renderCentersTable() {
  const tbody = document.getElementById("centersTableBody");
  tbody.innerHTML = "";
  let centers = new Set(Object.values(realUsers).map(u=>u.center));
  centers.forEach(c => {
    const tr = document.createElement("tr");
    tr.innerHTML = `<td class="border px-3 py-2">${c}</td><td class="border px-3 py-2">مرکز ${c}</td>`;
    tbody.appendChild(tr);
  });
}

function addExpenseGroup() { alert("ایجاد گروه هزینه جدید (نیاز به توسعه بیشتر)"); }
function addExpenseItem() { alert("ایجاد هزینه جدید (نیاز به توسعه بیشتر)"); }
function addCenter() { alert("ایجاد مرکز جدید (نیاز به توسعه بیشتر)"); }

// موقع ورود به پنل مدیریت اطلاعات پایه
function showBaseDataManagement() {
  renderUsersTable();
  renderExpensesTable();
  renderCentersTable();
  alert("مدیریت اطلاعات پایه آماده شد ✅ (جدول‌ها رندر شدند)");
}

  alert("کاربر جدید ثبت شد ✅");
});

// ذخیره مرکز جدید
document.getElementById("createCenterForm")?.addEventListener("submit", e => {
  e.preventDefault();
  const code = document.getElementById("newCenterCode").value;
  const name = document.getElementById("newCenterName").value;
  alert(`مرکز ${name} با کد ${code} ثبت شد ✅`);
});

// دسترسی به کاربر
document.getElementById("userAccessForm")?.addEventListener("submit", e => {
  e.preventDefault();
  const user = document.getElementById("accessUsername").value;
  const expense = document.getElementById("accessExpense").value;
  const center = document.getElementById("accessCenter").value;

  if (realUsers[user]) {
    realUsers[user].hazinemojaz = expense || "F";
    realUsers[user].center = center || realUsers[user].center;
    alert("دسترسی بروزرسانی شد ✅");
  } else {
    alert("کاربر یافت نشد ❌");
  }
});

// ذخیره هزینه جدید
document.getElementById("createExpenseForm")?.addEventListener("submit", e => {
  e.preventDefault();
  const title = document.getElementById("newExpenseTitle").value;
  if (title) {
    expenseCategories[title] = ["S", "F", "TS", "TF"];
    alert("هزینه جدید اضافه شد ✅");
  }
});

        // اطلاعات مدیر
        const adminUsers = {
            '7134289': '4289',
            'admin': 'admin123'
        };

// -------------------------
// مدیریت اطلاعات پایه (نسخه جدا)
// -------------------------

function toggleBaseDataPanel() {
  const panel = document.getElementById("baseDataPanel");
  panel.classList.toggle("hidden");

  if (!panel.classList.contains("hidden")) {
    renderUsersTable();
    renderExpensesTable();
    renderCentersTable();
  }
}

function renderUsersTable() {
  const tbody = document.getElementById("usersTableBody");
  tbody.innerHTML = "";
  Object.keys(realUsers).forEach(u => {
    const user = realUsers[u];
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td class="border px-3 py-2">${u}</td>
      <td class="border px-3 py-2">${user.center}</td>
      <td class="border px-3 py-2">${user.hazinemojaz}</td>
      <td class="border px-3 py-2 text-center"><input type="checkbox" ${user.multiCenter ? "checked": ""}></td>
    `;
    tbody.appendChild(tr);
  });
}

function renderExpensesTable() {
  const tbody = document.getElementById("expensesTableBody");
  tbody.innerHTML = "";
  Object.keys(expenseCategories).forEach(group => {
    expenseCategories[group].forEach(exp => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td class="border px-3 py-2">${group}</td>
        <td class="border px-3 py-2">${exp}</td>
        <td class="border px-3 py-2 text-center"><input type="checkbox" checked></td>
      `;
      tbody.appendChild(tr);
    });
  });
}

function renderCentersTable() {
  const tbody = document.getElementById("centersTableBody");
  tbody.innerHTML = "";
  let centers = new Set(Object.values(realUsers).map(u=>u.center));
  centers.forEach(c => {
    const tr = document.createElement("tr");
    tr.innerHTML = `<td class="border px-3 py-2">${c}</td><td class="border px-3 py-2">مرکز ${c}</td>`;
    tbody.appendChild(tr);
  });
}

function addExpenseGroup() { alert("ایجاد گروه هزینه جدید (نیاز به توسعه بیشتر)"); }
function addExpenseItem() { alert("ایجاد هزینه جدید (نیاز به توسعه بیشتر)"); }
function addCenter() { alert("ایجاد مرکز جدید (نیاز به توسعه بیشتر)"); }


// -------------------------
// مدیریت اطلاعات پایه
// -------------------------

function renderUsersTable() {
  const tbody = document.getElementById("usersTableBody");
  tbody.innerHTML = "";
  Object.keys(realUsers).forEach(u => {
    const user = realUsers[u];
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td class="border px-3 py-2">${u}</td>
      <td class="border px-3 py-2"><input type="text" value="${user.center}" onchange="realUsers['${u}'].center=this.value"></td>
      <td class="border px-3 py-2"><input type="text" value="${user.hazinemojaz}" onchange="realUsers['${u}'].hazinemojaz=this.value"></td>
      <td class="border px-3 py-2 text-center"><input type="checkbox" ${user.multiCenter ? "checked": ""} onchange="realUsers['${u}'].multiCenter=this.checked"></td>
    `;
    tbody.appendChild(tr);
  });
}

function renderExpensesTable() {
  const tbody = document.getElementById("expensesTableBody");
  tbody.innerHTML = "";
  Object.keys(expenseCategories).forEach(group => {
    expenseCategories[group].forEach(exp => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td class="border px-3 py-2">${group}</td>
        <td class="border px-3 py-2">${exp}</td>
        <td class="border px-3 py-2 text-center"><input type="checkbox" checked></td>
      `;
      tbody.appendChild(tr);
    });
  });
}

function renderCentersTable() {
  const tbody = document.getElementById("centersTableBody");
  tbody.innerHTML = "";
  let centers = new Set(Object.values(realUsers).map(u=>u.center));
  centers.forEach(c => {
    const tr = document.createElement("tr");
    tr.innerHTML = `<td class="border px-3 py-2">${c}</td><td class="border px-3 py-2">مرکز ${c}</td>`;
    tbody.appendChild(tr);
  });
}

function addExpenseGroup() { alert("ایجاد گروه هزینه جدید (نیاز به توسعه بیشتر)"); }
function addExpenseItem() { alert("ایجاد هزینه جدید (نیاز به توسعه بیشتر)"); }
function addCenter() { alert("ایجاد مرکز جدید (نیاز به توسعه بیشتر)"); }

// موقع ورود به پنل مدیریت اطلاعات پایه
function showBaseDataManagement() {
  renderUsersTable();
  renderExpensesTable();
  renderCentersTable();
  alert("مدیریت اطلاعات پایه آماده شد ✅ (جدول‌ها رندر شدند)");
}


// -------------------------
// مدیریت فرم‌های جدید
// -------------------------

// ذخیره کاربر جدید
document.getElementById("createUserForm")?.addEventListener("submit", e => {
  e.preventDefault();
  const username = document.getElementById("newUserUsername").value;
  const pass = document.getElementById("newUserPassword").value;
  const center = document.getElementById("newUserCenter").value;

  realUsers[username] = {
    pass,
    code: Date.now().toString().slice(-3),
    center,
    name: "کاربر جدید",
    account: "",
    bankCode: "",
    total: "0",
    hazinemojaz: "F"
  };

// -------------------------
// مدیریت اطلاعات پایه (نسخه جدا)
// -------------------------

function toggleBaseDataPanel() {
  const panel = document.getElementById("baseDataPanel");
  panel.classList.toggle("hidden");

  if (!panel.classList.contains("hidden")) {
    renderUsersTable();
    renderExpensesTable();
    renderCentersTable();
  }
}

function renderUsersTable() {
  const tbody = document.getElementById("usersTableBody");
  tbody.innerHTML = "";
  Object.keys(realUsers).forEach(u => {
    const user = realUsers[u];
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td class="border px-3 py-2">${u}</td>
      <td class="border px-3 py-2">${user.center}</td>
      <td class="border px-3 py-2">${user.hazinemojaz}</td>
      <td class="border px-3 py-2 text-center"><input type="checkbox" ${user.multiCenter ? "checked": ""}></td>
    `;
    tbody.appendChild(tr);
  });
}

function renderExpensesTable() {
  const tbody = document.getElementById("expensesTableBody");
  tbody.innerHTML = "";
  Object.keys(expenseCategories).forEach(group => {
    expenseCategories[group].forEach(exp => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td class="border px-3 py-2">${group}</td>
        <td class="border px-3 py-2">${exp}</td>
        <td class="border px-3 py-2 text-center"><input type="checkbox" checked></td>
      `;
      tbody.appendChild(tr);
    });
  });
}

function renderCentersTable() {
  const tbody = document.getElementById("centersTableBody");
  tbody.innerHTML = "";
  let centers = new Set(Object.values(realUsers).map(u=>u.center));
  centers.forEach(c => {
    const tr = document.createElement("tr");
    tr.innerHTML = `<td class="border px-3 py-2">${c}</td><td class="border px-3 py-2">مرکز ${c}</td>`;
    tbody.appendChild(tr);
  });
}

function addExpenseGroup() { alert("ایجاد گروه هزینه جدید (نیاز به توسعه بیشتر)"); }
function addExpenseItem() { alert("ایجاد هزینه جدید (نیاز به توسعه بیشتر)"); }
function addCenter() { alert("ایجاد مرکز جدید (نیاز به توسعه بیشتر)"); }


// -------------------------
// مدیریت اطلاعات پایه
// -------------------------

function renderUsersTable() {
  const tbody = document.getElementById("usersTableBody");
  tbody.innerHTML = "";
  Object.keys(realUsers).forEach(u => {
    const user = realUsers[u];
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td class="border px-3 py-2">${u}</td>
      <td class="border px-3 py-2"><input type="text" value="${user.center}" onchange="realUsers['${u}'].center=this.value"></td>
      <td class="border px-3 py-2"><input type="text" value="${user.hazinemojaz}" onchange="realUsers['${u}'].hazinemojaz=this.value"></td>
      <td class="border px-3 py-2 text-center"><input type="checkbox" ${user.multiCenter ? "checked": ""} onchange="realUsers['${u}'].multiCenter=this.checked"></td>
    `;
    tbody.appendChild(tr);
  });
}

function renderExpensesTable() {
  const tbody = document.getElementById("expensesTableBody");
  tbody.innerHTML = "";
  Object.keys(expenseCategories).forEach(group => {
    expenseCategories[group].forEach(exp => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td class="border px-3 py-2">${group}</td>
        <td class="border px-3 py-2">${exp}</td>
        <td class="border px-3 py-2 text-center"><input type="checkbox" checked></td>
      `;
      tbody.appendChild(tr);
    });
  });
}

function renderCentersTable() {
  const tbody = document.getElementById("centersTableBody");
  tbody.innerHTML = "";
  let centers = new Set(Object.values(realUsers).map(u=>u.center));
  centers.forEach(c => {
    const tr = document.createElement("tr");
    tr.innerHTML = `<td class="border px-3 py-2">${c}</td><td class="border px-3 py-2">مرکز ${c}</td>`;
    tbody.appendChild(tr);
  });
}

function addExpenseGroup() { alert("ایجاد گروه هزینه جدید (نیاز به توسعه بیشتر)"); }
function addExpenseItem() { alert("ایجاد هزینه جدید (نیاز به توسعه بیشتر)"); }
function addCenter() { alert("ایجاد مرکز جدید (نیاز به توسعه بیشتر)"); }

// موقع ورود به پنل مدیریت اطلاعات پایه
function showBaseDataManagement() {
  renderUsersTable();
  renderExpensesTable();
  renderCentersTable();
  alert("مدیریت اطلاعات پایه آماده شد ✅ (جدول‌ها رندر شدند)");
}

  alert("کاربر جدید ثبت شد ✅");
});

// ذخیره مرکز جدید
document.getElementById("createCenterForm")?.addEventListener("submit", e => {
  e.preventDefault();
  const code = document.getElementById("newCenterCode").value;
  const name = document.getElementById("newCenterName").value;
  alert(`مرکز ${name} با کد ${code} ثبت شد ✅`);
});

// دسترسی به کاربر
document.getElementById("userAccessForm")?.addEventListener("submit", e => {
  e.preventDefault();
  const user = document.getElementById("accessUsername").value;
  const expense = document.getElementById("accessExpense").value;
  const center = document.getElementById("accessCenter").value;

  if (realUsers[user]) {
    realUsers[user].hazinemojaz = expense || "F";
    realUsers[user].center = center || realUsers[user].center;
    alert("دسترسی بروزرسانی شد ✅");
  } else {
    alert("کاربر یافت نشد ❌");
  }
});

// ذخیره هزینه جدید
document.getElementById("createExpenseForm")?.addEventListener("submit", e => {
  e.preventDefault();
  const title = document.getElementById("newExpenseTitle").value;
  if (title) {
    expenseCategories[title] = ["S", "F", "TS", "TF"];
    alert("هزینه جدید اضافه شد ✅");
  }
});


        // متغیرهای سراسری برای مدیریت هزینه‌ها
        let currentExpenses = [];
        let expenseRowCount = 0;
        let allConfirmedExpenses = [];
        let currentCategoryIndex = 0;
        
        // متغیرهای سراسری برای پنل مدیریت
        let allPettyCashRequests = [];
        let requestCounter = 1004;
        let usedTravelCodes = new Set();
        let currentUser = null;
        let requestBeingEdited = null; // آی‌دی درخواستی که در حال ویرایش هست
        let adminPanelLoaded = false;


        // ورود کاربر
        document.addEventListener('DOMContentLoaded', function() {
            setupLoginForms();
        });

        function setupLoginForms() {
            const userForm = document.getElementById('userForm');
            if (userForm) {
                userForm.addEventListener('submit', function(e) {
                    e.preventDefault();
                    const username = document.getElementById('userUsername').value;
                    const password = document.getElementById('userPassword').value;

                    if (realUsers[username] && realUsers[username].pass === password) {
                        currentUser = realUsers[username];
                        currentUser.username = username;
                        showUserDashboard();
                    } else {
                        alert('نام کاربری یا رمز عبور اشتباه است');
                    }
                });
            }

            const adminForm = document.getElementById('adminForm');
            if (adminForm) {
                adminForm.addEventListener('submit', function(e) {
                    e.preventDefault();
                    const username = document.getElementById('adminUsername').value;
                    const password = document.getElementById('adminPassword').value;

                    if (adminUsers[username] && adminUsers[username] === password) {
                        showAdminPanel();
                    } else {
                        alert('نام کاربری یا رمز عبور مدیر اشتباه است');
                    }
                });
            }
        }

        // نمایش داشبورد کاربر با اطلاعات واقعی
        function showUserDashboard() {
            // مخفی کردن صفحه اصلی و نمایش پنل کاربری
            document.querySelector('.container.mx-auto.px-4.py-8').style.display = 'none';
            document.getElementById('userPanel').classList.remove('hidden');

// اگر کاربر جزو multiCenterUsers بود، انتخاب مرکز رو فعال کن
if (multiCenterUsers.includes(currentUser.username)) {
    const centerContainer = document.getElementById('centerSelectionContainer');
    centerContainer.classList.remove('hidden');

    const centerSelect = document.getElementById('expenseCenter');
    centerSelect.innerHTML = '<option value="">انتخاب مرکز هزینه</option>';

    // پر کردن لیست مراکز از realUsers
    Object.keys(realUsers).forEach(userKey => {
        const center = realUsers[userKey].center;
        if (center) {
            const option = document.createElement('option');
            option.value = realUsers[userKey].code;
            option.textContent = center;
            centerSelect.appendChild(option);
        }
    });
}

            
            // به‌روزرسانی اطلاعات کاربر در داشبورد
            document.getElementById('userCode').textContent = currentUser.username;
            document.getElementById('centerName').textContent = currentUser.center;
            document.getElementById('accountNumber').textContent = currentUser.account;
            document.getElementById('bankCode').textContent = currentUser.bankCode;
            document.getElementById('name').textContent = currentUser.name;
            
            // محاسبه آمار تنخواه
            updatePendingRequestsStats();
            
            // پر کردن لیست سرفصل‌های هزینه بر اساس مجوز کاربر
            populateExpenseCategories();
            
            // راه‌اندازی فرم تنخواه
            setupPettyCashForm();
            
            // بارگذاری لیست درخواست‌ها
            loadPettyCashList();
        }

        // به‌روزرسانی آمار درخواست‌های پرداخت نشده
        function updatePendingRequestsStats() {
            const pendingRequests = allPettyCashRequests.filter(req => 
                req.user === currentUser.username && !req.paid
            );
            
            const totalPendingAmount = pendingRequests.reduce((sum, req) => sum + req.amount, 0);
            
            document.getElementById('pendingRequestsCount').textContent = pendingRequests.length;
            document.getElementById('pendingRequestsAmount').textContent = totalPendingAmount.toLocaleString() + ' ریال';
        }

        // بارگذاری لیست تنخواه‌های قبلی
        function loadPettyCashList() {
            const tbody = document.getElementById('pettyCashList');
            tbody.innerHTML = '';
            
            const userRequests = allPettyCashRequests.filter(req => req.user === currentUser.username);
            
            userRequests.forEach(request => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">${request.id}</td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">${request.title}</td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">${request.amount.toLocaleString()} ریال</td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">${request.date}</td>
                    <td class="px-6 py-4 whitespace-nowrap">
                        <span class="px-2 py-1 text-xs font-semibold rounded-full ${getStatusClass(request.status)}">${request.status}</span>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        <input type="checkbox" ${request.paid ? 'checked' : ''} 
                               onchange="togglePaymentStatus(${request.id}, this.checked)"
                               ${request.paid ? '' : 'id="payCheckbox_' + request.id + '"'}>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm">
                        <button onclick="editRequest(${request.id})" 
                                class="text-blue-600 hover:text-blue-900 ${request.paid ? 'hidden' : ''}"
                                id="editBtn_${request.id}">
                            ویرایش
                        </button>
                    </td>
                `;
                tbody.appendChild(row);
            });
        }

        // قسمت مربوط به پنل مدیر
         function loadAdminPettyCashList() {
    const tbody = document.getElementById('adminPettyCashList');
    tbody.innerHTML = '';

    allPettyCashRequests.forEach(request => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td class="px-6 py-4">${request.id}</td>
            <td class="px-6 py-4">${request.user}</td>
            <td class="px-6 py-4">${request.center}</td>
            <td class="px-6 py-4">${request.amount.toLocaleString()} ریال</td>
            <td class="px-6 py-4">${request.date}</td>
            <td class="px-6 py-4">${request.status}</td>
            <td class="px-6 py-4">
                <input type="checkbox" ${request.paid ? 'checked' : ''} 
                       onchange="togglePaymentStatus(${request.id}, this.checked)">
            </td>
            <td class="px-6 py-4">
                <button class="text-blue-600 hover:text-blue-900" 
                        onclick="showAdminExpenseDetails(${request.id})">
                    مشاهده ریز
                </button>
            </td>
        `;
        tbody.appendChild(row);
    });
}

function showAdminExpenseDetails(requestId) {
    const request = allPettyCashRequests.find(r => r.id === requestId);
    if (!request) return;

    let detailsHtml = '';
    request.details.expenses.forEach((exp, i) => {
        detailsHtml += `
            <div class="flex justify-between items-center border-b py-2">
                <span class="${exp.rejected ? 'line-through text-red-600' : ''}">
                    ${exp.category} - ${exp.total.toLocaleString()} ریال
                </span>
                <button onclick="toggleRejectExpense(${requestId}, ${i})" 
                        class="px-2 py-1 text-xs rounded ${exp.rejected ? 'bg-red-200' : 'bg-green-200'}">
                    ${exp.rejected ? 'رد شده' : 'قبول'}
                </button>
            </div>
        `;
    });

    const modal = document.createElement('div');
    modal.className = "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50";
    modal.innerHTML = `
        <div class="bg-white rounded-lg p-6 w-96">
            <h3 class="text-lg font-bold mb-4">ریز هزینه‌های تنخواه ${requestId}</h3>
            <div class="space-y-2">${detailsHtml}</div>
            <div class="mt-4 flex justify-end">
                <button onclick="this.closest('.fixed').remove()" class="bg-gray-500 text-white px-4 py-2 rounded">بستن</button>
            </div>
        </div>
    `;
    document.body.appendChild(modal);
}

function toggleRejectExpense(requestId, expenseIndex) {
    const request = allPettyCashRequests.find(r => r.id === requestId);
    if (!request) return;

    const exp = request.details.expenses[expenseIndex];
    exp.rejected = !exp.rejected;

    // محاسبه مجدد مبلغ کل
    const newTotal = request.details.expenses
        .filter(e => !e.rejected)
        .reduce((sum, e) => sum + e.total, 0);

    request.amount = newTotal;

    // آپدیت لیست
    loadAdminPettyCashList();

    // بستن مودال قدیمی و باز کردن دوباره
    document.querySelector('.fixed').remove();
    showAdminExpenseDetails(requestId);
}

        
        // دریافت کلاس CSS برای وضعیت
        function getStatusClass(status) {
            switch(status) {
                case 'تایید شده': return 'bg-green-100 text-green-800';
                case 'رد شده': return 'bg-red-100 text-red-800';
                case 'در انتظار': return 'bg-yellow-100 text-yellow-800';
                default: return 'bg-gray-100 text-gray-800';
            }
        }
        
        // تغییر وضعیت پرداخت
        function togglePaymentStatus(requestId, isPaid) {
            const request = allPettyCashRequests.find(req => req.id === requestId);
            if (request) {
                request.paid = isPaid;
                
                // غیرفعال کردن دکمه ویرایش اگر پرداخت شده
                const editBtn = document.getElementById('editBtn_' + requestId);
                if (editBtn) {
                    editBtn.classList.toggle('hidden', isPaid);
                }
                
                // به‌روزرسانی آمار
                updatePendingRequestsStats();
                
                // نمایش پیام
                alert(`وضعیت پرداخت درخواست شماره ${requestId} ${isPaid ? 'تایید' : 'لغو'} شد`);
            }
        }
        
        // ویرایش درخواست
function editRequest(requestId) {
    const request = allPettyCashRequests.find(req => req.id === requestId);
    if (request && !request.paid) {
        // نمایش فرم
        showNewPettyCashForm();

        // پر کردن توضیحات
        document.getElementById('requestDescription').value = request.details?.description || '';

        // پر کردن هزینه‌ها
        allConfirmedExpenses = request.details?.expenses || [];
        document.getElementById('confirmedExpensesContainer').innerHTML = '';
        allConfirmedExpenses.forEach((exp, index) => {
            displayConfirmedExpense(exp, index);
        });

        // آپدیت جمع
        updateGrandTotal();

        // نگه داشتن آی‌دی
        requestBeingEdited = requestId;

        alert('درخواست برای ویرایش بارگذاری شد. تغییرات را اعمال کنید.');
    } else {
        alert('امکان ویرایش درخواست پرداخت شده وجود ندارد.');
    }
}


        // پر کردن لیست سرفصل‌های هزینه
        function populateExpenseCategories() {
            const select = document.getElementById('expenseCategory');
            if (!select) return;
            
            const userPermission = currentUser.hazinemojaz;
            
            // پاک کردن گزینه‌های قبلی
            select.innerHTML = '<option value="">انتخاب سرفصل هزینه</option>';
            
            // اضافه کردن سرفصل‌هایی که کاربر مجوز دارد
            Object.keys(expenseCategories).forEach(category => {
                const permissions = expenseCategories[category];
                if (permissions.includes(userPermission)) {
                    const option = document.createElement('option');
                    option.value = category;
                    option.textContent = category;
                    select.appendChild(option);
                }
            });
            
            // اضافه کردن event listener برای انتخاب سرفصل
            select.addEventListener('change', function() {
                if (this.value) {
                    showExpenseDetailsSection();
                } else {
                    hideExpenseDetailsSection();
                }
            });
        }

        // نمایش بخش جزئیات هزینه‌ها
        function showExpenseDetailsSection() {
            const selectedCategory = document.getElementById('expenseCategory').value;
            document.getElementById('currentCategoryTitle').textContent = selectedCategory;
            document.getElementById('expenseDetailsSection').classList.remove('hidden');
            
            currentExpenses = [];
            expenseRowCount = 0;
            addExpenseRows(5); // اضافه کردن 5 ردیف اولیه
        }

        // مخفی کردن بخش جزئیات هزینه‌ها
        function hideExpenseDetailsSection() {
            document.getElementById('expenseDetailsSection').classList.add('hidden');
            document.getElementById('expenseRows').innerHTML = '';
            currentExpenses = [];
            expenseRowCount = 0;
        }

        // اضافه کردن ردیف‌های هزینه
        function addExpenseRows(count) {
            const container = document.getElementById('expenseRows');
            const selectedCategory = document.getElementById('expenseCategory').value;
            
            // لیست هزینه‌های تعمیر که کسورات دارند
            const repairCategories = [
                'تعمیر اثاثه اداری (پرینتر و ...)',
                'تعمیر تاسیسات (تائید فنی)',
                'تعمیر ساختمان (تائید فنی)',
                'تعمیر وسایط نقلیه'
            ];
            
            for (let i = 0; i < count; i++) {
                const rowDiv = document.createElement('div');
                
                if (selectedCategory === 'ایاب و ذهاب') {
                    rowDiv.className = 'grid grid-cols-4 gap-2 mb-2';
                    rowDiv.innerHTML = `
                        <input type="number" placeholder="مبلغ" class="px-2 py-1 border border-gray-300 rounded text-sm expense-amount" onchange="updateTotalAmount()">
                        <input type="text" placeholder="کد سفر" class="px-2 py-1 border border-gray-300 rounded text-sm travel-code" onblur="checkTravelCode(this)">
                        <input type="text" placeholder="توضیحات" class="px-2 py-1 border border-gray-300 rounded text-sm expense-note">
                        <label class="flex items-center text-xs">
                            <input type="checkbox" class="other-travel ml-1" onchange="toggleTravelCodeForRow(this)">
                            سایر
                        </label>
                    `;
                } else if (repairCategories.includes(selectedCategory) && (currentUser.hazinemojaz === 'TS' || currentUser.hazinemojaz === 'TF')) {
                    // برای کسورات تعمیرات (فقط برای TS و TF)
                    rowDiv.className = 'grid grid-cols-6 gap-2 mb-2';
                    rowDiv.innerHTML = `
                        <input type="number" placeholder="مبلغ فاکتور" class="px-2 py-1 border border-gray-300 rounded text-sm invoice-amount" onchange="updateRepairRow(this)">
                        <input type="number" placeholder="مبلغ مشمول کسورات" class="px-2 py-1 border border-gray-300 rounded text-sm taxable-amount" onchange="updateRepairRow(this)">
                        <select class="px-2 py-1 border border-gray-300 rounded text-sm deduction-rate" onchange="updateRepairRow(this)">
                            <option value="0">بدون کسورات</option>
                            <option value="16.67">۱۶.۶۷٪</option>
                            <option value="7.8">۷.۸٪</option>
                        </select>
                        <input type="number" placeholder="کسورات" class="px-2 py-1 border border-gray-300 rounded text-sm expense-deduction" readonly>
                        <input type="number" placeholder="جمع مبلغ" class="px-2 py-1 border border-gray-300 rounded text-sm net-amount" readonly>
                        <input type="text" placeholder="توضیحات" class="px-2 py-1 border border-gray-300 rounded text-sm expense-note">
                    `;
                } else {
                    rowDiv.className = 'grid grid-cols-2 gap-2 mb-2';
                    rowDiv.innerHTML = `
                        <input type="number" placeholder="مبلغ" class="px-2 py-1 border border-gray-300 rounded text-sm expense-amount" onchange="updateTotalAmount()">
                        <input type="text" placeholder="توضیحات" class="px-2 py-1 border border-gray-300 rounded text-sm expense-note">
                    `;
                }
                
                container.appendChild(rowDiv);
                expenseRowCount++;
            }
            
            // اضافه کردن event listener برای آخرین ردیف
            const lastAmountInput = container.lastElementChild.querySelector('.expense-amount');
            if (lastAmountInput) {
                lastAmountInput.addEventListener('input', function() {
                    // اگر آخرین ردیف پر شد، 5 ردیف جدید اضافه کن
                    if (this.value && expenseRowCount % 5 === 0) {
                        addExpenseRows(5);
                    }
                });
            }
        }

        // به‌روزرسانی ردیف تعمیرات
        function updateRepairRow(element) {
            const row = element.closest('div');
            const invoiceAmount = parseInt(row.querySelector('.invoice-amount').value) || 0;
            const taxableAmount = parseInt(row.querySelector('.taxable-amount').value) || 0;
            const deductionRate = parseFloat(row.querySelector('.deduction-rate').value) || 0;
            
            let deduction = 0;
            if (deductionRate > 0 && taxableAmount > 0) {
                deduction = Math.round(taxableAmount * (deductionRate / 100));
            }
            
            const netAmount = invoiceAmount - deduction;
            
            row.querySelector('.expense-deduction').value = deduction;
            row.querySelector('.net-amount').value = netAmount;
            
            updateTotalAmount();
        }

        // بررسی کد سفر
        function checkTravelCode(input) {
            const travelCode = input.value.trim();
            if (travelCode && usedTravelCodes.has(travelCode)) {
                alert(`کد سفر ${travelCode} قبلاً استفاده شده است. لطفا کد دیگری وارد کنید.`);
                input.value = '';
                input.focus();
            }
        }

        // به‌روزرسانی مجموع مبلغ
        function updateTotalAmount() {
            const rows = document.querySelectorAll('#expenseRows > div');
            let total = 0;
            let count = 0;
            
            rows.forEach(row => {
                // برای ردیف‌های معمولی
                const amountInput = row.querySelector('.expense-amount');
                // برای ردیف‌های تعمیرات
                const netAmountInput = row.querySelector('.net-amount');
                
                if (amountInput && amountInput.value && amountInput.value > 0) {
                    total += parseInt(amountInput.value);
                    count++;
                }
                
                if (netAmountInput && netAmountInput.value && netAmountInput.value > 0) {
                    total += parseInt(netAmountInput.value);
                    count++;
                }
            });
            
            document.getElementById('expenseCount').textContent = count;
            document.getElementById('totalAmount').textContent = total.toLocaleString();
            
            // محاسبه جمع کل و مانده
            updateGrandTotal();
        }
        
        // محاسبه جمع کل تنخواه و مانده
        function updateGrandTotal() {
            // جمع همه هزینه‌های تایید شده
            let confirmedTotal = allConfirmedExpenses.reduce((sum, category) => sum + category.total, 0);
            
            // جمع هزینه فعلی
            const currentTotal = parseInt(document.getElementById('totalAmount').textContent.replace(/,/g, '')) || 0;
            
            const grandTotal = confirmedTotal + currentTotal;
            
            // مانده از بودجه کل کاربر
            const userBudget = parseInt(currentUser.total.replace(/,/g, ''));
            const remaining = userBudget - grandTotal;
            
            document.getElementById('grandTotalAmount').textContent = grandTotal.toLocaleString() + ' ریال';
            document.getElementById('remainingAmount').textContent = remaining.toLocaleString() + ' ریال';
            
            // تغییر رنگ مانده بر اساس مقدار
            const remainingElement = document.getElementById('remainingAmount');
            if (remaining < 0) {
                remainingElement.className = 'font-semibold text-red-600';
            } else if (remaining < userBudget * 0.1) {
                remainingElement.className = 'font-semibold text-yellow-600';
            } else {
                remainingElement.className = 'font-semibold text-green-600';
            }
        }

        // تایید هزینه فعلی
        function confirmCurrentExpense() {
            const rows = document.querySelectorAll('#expenseRows > div');
            const selectedCategory = document.getElementById('expenseCategory').value;
            
            currentExpenses = [];
            let total = 0;
            
            // لیست هزینه‌های تعمیر که کسورات دارند
            const repairCategories = [
                'تعمیر اثاثه اداری (پرینتر و ...)',
                'تعمیر تاسیسات (تائید فنی)',
                'تعمیر ساختمان (تائید فنی)',
                'تعمیر وسایط نقلیه'
            ];
            
            rows.forEach(row => {
                if (repairCategories.includes(selectedCategory) && (currentUser.hazinemojaz === 'TS' || currentUser.hazinemojaz === 'TF')) {
                    // برای کسورات تعمیرات (فقط برای TS و TF)
                    const invoiceAmount = row.querySelector('.invoice-amount').value;
                    const taxableAmount = row.querySelector('.taxable-amount').value;
                    const deductionRate = row.querySelector('.deduction-rate').value;
                    const deduction = row.querySelector('.expense-deduction').value;
                    const netAmount = row.querySelector('.net-amount').value;
                    const note = row.querySelector('.expense-note').value;
                    
                    if (invoiceAmount && invoiceAmount > 0) {
                        const expenseItem = {
                            invoiceAmount: parseInt(invoiceAmount),
                            taxableAmount: parseInt(taxableAmount) || 0,
                            deductionRate: deductionRate,
                            deduction: parseInt(deduction) || 0,
                            netAmount: parseInt(netAmount),
                            note: note || ''
                        };

// -------------------------
// مدیریت اطلاعات پایه (نسخه جدا)
// -------------------------

function toggleBaseDataPanel() {
  const panel = document.getElementById("baseDataPanel");
  panel.classList.toggle("hidden");

  if (!panel.classList.contains("hidden")) {
    renderUsersTable();
    renderExpensesTable();
    renderCentersTable();
  }
}

function renderUsersTable() {
  const tbody = document.getElementById("usersTableBody");
  tbody.innerHTML = "";
  Object.keys(realUsers).forEach(u => {
    const user = realUsers[u];
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td class="border px-3 py-2">${u}</td>
      <td class="border px-3 py-2">${user.center}</td>
      <td class="border px-3 py-2">${user.hazinemojaz}</td>
      <td class="border px-3 py-2 text-center"><input type="checkbox" ${user.multiCenter ? "checked": ""}></td>
    `;
    tbody.appendChild(tr);
  });
}

function renderExpensesTable() {
  const tbody = document.getElementById("expensesTableBody");
  tbody.innerHTML = "";
  Object.keys(expenseCategories).forEach(group => {
    expenseCategories[group].forEach(exp => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td class="border px-3 py-2">${group}</td>
        <td class="border px-3 py-2">${exp}</td>
        <td class="border px-3 py-2 text-center"><input type="checkbox" checked></td>
      `;
      tbody.appendChild(tr);
    });
  });
}

function renderCentersTable() {
  const tbody = document.getElementById("centersTableBody");
  tbody.innerHTML = "";
  let centers = new Set(Object.values(realUsers).map(u=>u.center));
  centers.forEach(c => {
    const tr = document.createElement("tr");
    tr.innerHTML = `<td class="border px-3 py-2">${c}</td><td class="border px-3 py-2">مرکز ${c}</td>`;
    tbody.appendChild(tr);
  });
}

function addExpenseGroup() { alert("ایجاد گروه هزینه جدید (نیاز به توسعه بیشتر)"); }
function addExpenseItem() { alert("ایجاد هزینه جدید (نیاز به توسعه بیشتر)"); }
function addCenter() { alert("ایجاد مرکز جدید (نیاز به توسعه بیشتر)"); }


// -------------------------
// مدیریت اطلاعات پایه
// -------------------------

function renderUsersTable() {
  const tbody = document.getElementById("usersTableBody");
  tbody.innerHTML = "";
  Object.keys(realUsers).forEach(u => {
    const user = realUsers[u];
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td class="border px-3 py-2">${u}</td>
      <td class="border px-3 py-2"><input type="text" value="${user.center}" onchange="realUsers['${u}'].center=this.value"></td>
      <td class="border px-3 py-2"><input type="text" value="${user.hazinemojaz}" onchange="realUsers['${u}'].hazinemojaz=this.value"></td>
      <td class="border px-3 py-2 text-center"><input type="checkbox" ${user.multiCenter ? "checked": ""} onchange="realUsers['${u}'].multiCenter=this.checked"></td>
    `;
    tbody.appendChild(tr);
  });
}

function renderExpensesTable() {
  const tbody = document.getElementById("expensesTableBody");
  tbody.innerHTML = "";
  Object.keys(expenseCategories).forEach(group => {
    expenseCategories[group].forEach(exp => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td class="border px-3 py-2">${group}</td>
        <td class="border px-3 py-2">${exp}</td>
        <td class="border px-3 py-2 text-center"><input type="checkbox" checked></td>
      `;
      tbody.appendChild(tr);
    });
  });
}

function renderCentersTable() {
  const tbody = document.getElementById("centersTableBody");
  tbody.innerHTML = "";
  let centers = new Set(Object.values(realUsers).map(u=>u.center));
  centers.forEach(c => {
    const tr = document.createElement("tr");
    tr.innerHTML = `<td class="border px-3 py-2">${c}</td><td class="border px-3 py-2">مرکز ${c}</td>`;
    tbody.appendChild(tr);
  });
}

function addExpenseGroup() { alert("ایجاد گروه هزینه جدید (نیاز به توسعه بیشتر)"); }
function addExpenseItem() { alert("ایجاد هزینه جدید (نیاز به توسعه بیشتر)"); }
function addCenter() { alert("ایجاد مرکز جدید (نیاز به توسعه بیشتر)"); }

// موقع ورود به پنل مدیریت اطلاعات پایه
function showBaseDataManagement() {
  renderUsersTable();
  renderExpensesTable();
  renderCentersTable();
  alert("مدیریت اطلاعات پایه آماده شد ✅ (جدول‌ها رندر شدند)");
}


// -------------------------
// مدیریت فرم‌های جدید
// -------------------------

// ذخیره کاربر جدید
document.getElementById("createUserForm")?.addEventListener("submit", e => {
  e.preventDefault();
  const username = document.getElementById("newUserUsername").value;
  const pass = document.getElementById("newUserPassword").value;
  const center = document.getElementById("newUserCenter").value;

  realUsers[username] = {
    pass,
    code: Date.now().toString().slice(-3),
    center,
    name: "کاربر جدید",
    account: "",
    bankCode: "",
    total: "0",
    hazinemojaz: "F"
  };

// -------------------------
// مدیریت اطلاعات پایه (نسخه جدا)
// -------------------------

function toggleBaseDataPanel() {
  const panel = document.getElementById("baseDataPanel");
  panel.classList.toggle("hidden");

  if (!panel.classList.contains("hidden")) {
    renderUsersTable();
    renderExpensesTable();
    renderCentersTable();
  }
}

function renderUsersTable() {
  const tbody = document.getElementById("usersTableBody");
  tbody.innerHTML = "";
  Object.keys(realUsers).forEach(u => {
    const user = realUsers[u];
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td class="border px-3 py-2">${u}</td>
      <td class="border px-3 py-2">${user.center}</td>
      <td class="border px-3 py-2">${user.hazinemojaz}</td>
      <td class="border px-3 py-2 text-center"><input type="checkbox" ${user.multiCenter ? "checked": ""}></td>
    `;
    tbody.appendChild(tr);
  });
}

function renderExpensesTable() {
  const tbody = document.getElementById("expensesTableBody");
  tbody.innerHTML = "";
  Object.keys(expenseCategories).forEach(group => {
    expenseCategories[group].forEach(exp => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td class="border px-3 py-2">${group}</td>
        <td class="border px-3 py-2">${exp}</td>
        <td class="border px-3 py-2 text-center"><input type="checkbox" checked></td>
      `;
      tbody.appendChild(tr);
    });
  });
}

function renderCentersTable() {
  const tbody = document.getElementById("centersTableBody");
  tbody.innerHTML = "";
  let centers = new Set(Object.values(realUsers).map(u=>u.center));
  centers.forEach(c => {
    const tr = document.createElement("tr");
    tr.innerHTML = `<td class="border px-3 py-2">${c}</td><td class="border px-3 py-2">مرکز ${c}</td>`;
    tbody.appendChild(tr);
  });
}

function addExpenseGroup() { alert("ایجاد گروه هزینه جدید (نیاز به توسعه بیشتر)"); }
function addExpenseItem() { alert("ایجاد هزینه جدید (نیاز به توسعه بیشتر)"); }
function addCenter() { alert("ایجاد مرکز جدید (نیاز به توسعه بیشتر)"); }


// -------------------------
// مدیریت اطلاعات پایه
// -------------------------

function renderUsersTable() {
  const tbody = document.getElementById("usersTableBody");
  tbody.innerHTML = "";
  Object.keys(realUsers).forEach(u => {
    const user = realUsers[u];
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td class="border px-3 py-2">${u}</td>
      <td class="border px-3 py-2"><input type="text" value="${user.center}" onchange="realUsers['${u}'].center=this.value"></td>
      <td class="border px-3 py-2"><input type="text" value="${user.hazinemojaz}" onchange="realUsers['${u}'].hazinemojaz=this.value"></td>
      <td class="border px-3 py-2 text-center"><input type="checkbox" ${user.multiCenter ? "checked": ""} onchange="realUsers['${u}'].multiCenter=this.checked"></td>
    `;
    tbody.appendChild(tr);
  });
}

function renderExpensesTable() {
  const tbody = document.getElementById("expensesTableBody");
  tbody.innerHTML = "";
  Object.keys(expenseCategories).forEach(group => {
    expenseCategories[group].forEach(exp => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td class="border px-3 py-2">${group}</td>
        <td class="border px-3 py-2">${exp}</td>
        <td class="border px-3 py-2 text-center"><input type="checkbox" checked></td>
      `;
      tbody.appendChild(tr);
    });
  });
}

function renderCentersTable() {
  const tbody = document.getElementById("centersTableBody");
  tbody.innerHTML = "";
  let centers = new Set(Object.values(realUsers).map(u=>u.center));
  centers.forEach(c => {
    const tr = document.createElement("tr");
    tr.innerHTML = `<td class="border px-3 py-2">${c}</td><td class="border px-3 py-2">مرکز ${c}</td>`;
    tbody.appendChild(tr);
  });
}

function addExpenseGroup() { alert("ایجاد گروه هزینه جدید (نیاز به توسعه بیشتر)"); }
function addExpenseItem() { alert("ایجاد هزینه جدید (نیاز به توسعه بیشتر)"); }
function addCenter() { alert("ایجاد مرکز جدید (نیاز به توسعه بیشتر)"); }

// موقع ورود به پنل مدیریت اطلاعات پایه
function showBaseDataManagement() {
  renderUsersTable();
  renderExpensesTable();
  renderCentersTable();
  alert("مدیریت اطلاعات پایه آماده شد ✅ (جدول‌ها رندر شدند)");
}

  alert("کاربر جدید ثبت شد ✅");
});

// ذخیره مرکز جدید
document.getElementById("createCenterForm")?.addEventListener("submit", e => {
  e.preventDefault();
  const code = document.getElementById("newCenterCode").value;
  const name = document.getElementById("newCenterName").value;
  alert(`مرکز ${name} با کد ${code} ثبت شد ✅`);
});

// دسترسی به کاربر
document.getElementById("userAccessForm")?.addEventListener("submit", e => {
  e.preventDefault();
  const user = document.getElementById("accessUsername").value;
  const expense = document.getElementById("accessExpense").value;
  const center = document.getElementById("accessCenter").value;

  if (realUsers[user]) {
    realUsers[user].hazinemojaz = expense || "F";
    realUsers[user].center = center || realUsers[user].center;
    alert("دسترسی بروزرسانی شد ✅");
  } else {
    alert("کاربر یافت نشد ❌");
  }
});

// ذخیره هزینه جدید
document.getElementById("createExpenseForm")?.addEventListener("submit", e => {
  e.preventDefault();
  const title = document.getElementById("newExpenseTitle").value;
  if (title) {
    expenseCategories[title] = ["S", "F", "TS", "TF"];
    alert("هزینه جدید اضافه شد ✅");
  }
});

                        
                        currentExpenses.push(expenseItem);
                        total += expenseItem.netAmount;
                    }
                } else if (selectedCategory === 'ایاب و ذهاب') {
                    // برای ایاب و ذهاب
                    const amount = row.querySelector('.expense-amount').value;
                    const travelCodeInput = row.querySelector('.travel-code');
                    const otherCheckbox = row.querySelector('.other-travel');
                    const note = row.querySelector('.expense-note').value;
                    
                    if (amount && amount > 0) {
                        let travelCode = '';
                        
                        if (otherCheckbox && otherCheckbox.checked) {
                            travelCode = 'سایر';
                        } else if (travelCodeInput && travelCodeInput.value.trim()) {
                            travelCode = travelCodeInput.value.trim();
                            
                            // بررسی تکراری نبودن کد سفر
                            if (usedTravelCodes.has(travelCode)) {
                                alert(`کد سفر ${travelCode} قبلاً استفاده شده است. لطفا کد دیگری وارد کنید.`);
                                return;
                            }
                            usedTravelCodes.add(travelCode);
                        } else {
                            alert('لطفا کد سفر را وارد کنید یا گزینه سایر را انتخاب کنید');
                            return;
                        }
                        
                        const expenseItem = {
                            amount: parseInt(amount),
                            deduction: 0,
                            netAmount: parseInt(amount),
                            note: note || '',
                            travelCode: travelCode
                        };

// -------------------------
// مدیریت اطلاعات پایه (نسخه جدا)
// -------------------------

function toggleBaseDataPanel() {
  const panel = document.getElementById("baseDataPanel");
  panel.classList.toggle("hidden");

  if (!panel.classList.contains("hidden")) {
    renderUsersTable();
    renderExpensesTable();
    renderCentersTable();
  }
}

function renderUsersTable() {
  const tbody = document.getElementById("usersTableBody");
  tbody.innerHTML = "";
  Object.keys(realUsers).forEach(u => {
    const user = realUsers[u];
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td class="border px-3 py-2">${u}</td>
      <td class="border px-3 py-2">${user.center}</td>
      <td class="border px-3 py-2">${user.hazinemojaz}</td>
      <td class="border px-3 py-2 text-center"><input type="checkbox" ${user.multiCenter ? "checked": ""}></td>
    `;
    tbody.appendChild(tr);
  });
}

function renderExpensesTable() {
  const tbody = document.getElementById("expensesTableBody");
  tbody.innerHTML = "";
  Object.keys(expenseCategories).forEach(group => {
    expenseCategories[group].forEach(exp => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td class="border px-3 py-2">${group}</td>
        <td class="border px-3 py-2">${exp}</td>
        <td class="border px-3 py-2 text-center"><input type="checkbox" checked></td>
      `;
      tbody.appendChild(tr);
    });
  });
}

function renderCentersTable() {
  const tbody = document.getElementById("centersTableBody");
  tbody.innerHTML = "";
  let centers = new Set(Object.values(realUsers).map(u=>u.center));
  centers.forEach(c => {
    const tr = document.createElement("tr");
    tr.innerHTML = `<td class="border px-3 py-2">${c}</td><td class="border px-3 py-2">مرکز ${c}</td>`;
    tbody.appendChild(tr);
  });
}

function addExpenseGroup() { alert("ایجاد گروه هزینه جدید (نیاز به توسعه بیشتر)"); }
function addExpenseItem() { alert("ایجاد هزینه جدید (نیاز به توسعه بیشتر)"); }
function addCenter() { alert("ایجاد مرکز جدید (نیاز به توسعه بیشتر)"); }


// -------------------------
// مدیریت اطلاعات پایه
// -------------------------

function renderUsersTable() {
  const tbody = document.getElementById("usersTableBody");
  tbody.innerHTML = "";
  Object.keys(realUsers).forEach(u => {
    const user = realUsers[u];
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td class="border px-3 py-2">${u}</td>
      <td class="border px-3 py-2"><input type="text" value="${user.center}" onchange="realUsers['${u}'].center=this.value"></td>
      <td class="border px-3 py-2"><input type="text" value="${user.hazinemojaz}" onchange="realUsers['${u}'].hazinemojaz=this.value"></td>
      <td class="border px-3 py-2 text-center"><input type="checkbox" ${user.multiCenter ? "checked": ""} onchange="realUsers['${u}'].multiCenter=this.checked"></td>
    `;
    tbody.appendChild(tr);
  });
}

function renderExpensesTable() {
  const tbody = document.getElementById("expensesTableBody");
  tbody.innerHTML = "";
  Object.keys(expenseCategories).forEach(group => {
    expenseCategories[group].forEach(exp => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td class="border px-3 py-2">${group}</td>
        <td class="border px-3 py-2">${exp}</td>
        <td class="border px-3 py-2 text-center"><input type="checkbox" checked></td>
      `;
      tbody.appendChild(tr);
    });
  });
}

function renderCentersTable() {
  const tbody = document.getElementById("centersTableBody");
  tbody.innerHTML = "";
  let centers = new Set(Object.values(realUsers).map(u=>u.center));
  centers.forEach(c => {
    const tr = document.createElement("tr");
    tr.innerHTML = `<td class="border px-3 py-2">${c}</td><td class="border px-3 py-2">مرکز ${c}</td>`;
    tbody.appendChild(tr);
  });
}

function addExpenseGroup() { alert("ایجاد گروه هزینه جدید (نیاز به توسعه بیشتر)"); }
function addExpenseItem() { alert("ایجاد هزینه جدید (نیاز به توسعه بیشتر)"); }
function addCenter() { alert("ایجاد مرکز جدید (نیاز به توسعه بیشتر)"); }

// موقع ورود به پنل مدیریت اطلاعات پایه
function showBaseDataManagement() {
  renderUsersTable();
  renderExpensesTable();
  renderCentersTable();
  alert("مدیریت اطلاعات پایه آماده شد ✅ (جدول‌ها رندر شدند)");
}


// -------------------------
// مدیریت فرم‌های جدید
// -------------------------

// ذخیره کاربر جدید
document.getElementById("createUserForm")?.addEventListener("submit", e => {
  e.preventDefault();
  const username = document.getElementById("newUserUsername").value;
  const pass = document.getElementById("newUserPassword").value;
  const center = document.getElementById("newUserCenter").value;

  realUsers[username] = {
    pass,
    code: Date.now().toString().slice(-3),
    center,
    name: "کاربر جدید",
    account: "",
    bankCode: "",
    total: "0",
    hazinemojaz: "F"
  };

// -------------------------
// مدیریت اطلاعات پایه (نسخه جدا)
// -------------------------

function toggleBaseDataPanel() {
  const panel = document.getElementById("baseDataPanel");
  panel.classList.toggle("hidden");

  if (!panel.classList.contains("hidden")) {
    renderUsersTable();
    renderExpensesTable();
    renderCentersTable();
  }
}

function renderUsersTable() {
  const tbody = document.getElementById("usersTableBody");
  tbody.innerHTML = "";
  Object.keys(realUsers).forEach(u => {
    const user = realUsers[u];
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td class="border px-3 py-2">${u}</td>
      <td class="border px-3 py-2">${user.center}</td>
      <td class="border px-3 py-2">${user.hazinemojaz}</td>
      <td class="border px-3 py-2 text-center"><input type="checkbox" ${user.multiCenter ? "checked": ""}></td>
    `;
    tbody.appendChild(tr);
  });
}

function renderExpensesTable() {
  const tbody = document.getElementById("expensesTableBody");
  tbody.innerHTML = "";
  Object.keys(expenseCategories).forEach(group => {
    expenseCategories[group].forEach(exp => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td class="border px-3 py-2">${group}</td>
        <td class="border px-3 py-2">${exp}</td>
        <td class="border px-3 py-2 text-center"><input type="checkbox" checked></td>
      `;
      tbody.appendChild(tr);
    });
  });
}

function renderCentersTable() {
  const tbody = document.getElementById("centersTableBody");
  tbody.innerHTML = "";
  let centers = new Set(Object.values(realUsers).map(u=>u.center));
  centers.forEach(c => {
    const tr = document.createElement("tr");
    tr.innerHTML = `<td class="border px-3 py-2">${c}</td><td class="border px-3 py-2">مرکز ${c}</td>`;
    tbody.appendChild(tr);
  });
}

function addExpenseGroup() { alert("ایجاد گروه هزینه جدید (نیاز به توسعه بیشتر)"); }
function addExpenseItem() { alert("ایجاد هزینه جدید (نیاز به توسعه بیشتر)"); }
function addCenter() { alert("ایجاد مرکز جدید (نیاز به توسعه بیشتر)"); }


// -------------------------
// مدیریت اطلاعات پایه
// -------------------------

function renderUsersTable() {
  const tbody = document.getElementById("usersTableBody");
  tbody.innerHTML = "";
  Object.keys(realUsers).forEach(u => {
    const user = realUsers[u];
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td class="border px-3 py-2">${u}</td>
      <td class="border px-3 py-2"><input type="text" value="${user.center}" onchange="realUsers['${u}'].center=this.value"></td>
      <td class="border px-3 py-2"><input type="text" value="${user.hazinemojaz}" onchange="realUsers['${u}'].hazinemojaz=this.value"></td>
      <td class="border px-3 py-2 text-center"><input type="checkbox" ${user.multiCenter ? "checked": ""} onchange="realUsers['${u}'].multiCenter=this.checked"></td>
    `;
    tbody.appendChild(tr);
  });
}

function renderExpensesTable() {
  const tbody = document.getElementById("expensesTableBody");
  tbody.innerHTML = "";
  Object.keys(expenseCategories).forEach(group => {
    expenseCategories[group].forEach(exp => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td class="border px-3 py-2">${group}</td>
        <td class="border px-3 py-2">${exp}</td>
        <td class="border px-3 py-2 text-center"><input type="checkbox" checked></td>
      `;
      tbody.appendChild(tr);
    });
  });
}

function renderCentersTable() {
  const tbody = document.getElementById("centersTableBody");
  tbody.innerHTML = "";
  let centers = new Set(Object.values(realUsers).map(u=>u.center));
  centers.forEach(c => {
    const tr = document.createElement("tr");
    tr.innerHTML = `<td class="border px-3 py-2">${c}</td><td class="border px-3 py-2">مرکز ${c}</td>`;
    tbody.appendChild(tr);
  });
}

function addExpenseGroup() { alert("ایجاد گروه هزینه جدید (نیاز به توسعه بیشتر)"); }
function addExpenseItem() { alert("ایجاد هزینه جدید (نیاز به توسعه بیشتر)"); }
function addCenter() { alert("ایجاد مرکز جدید (نیاز به توسعه بیشتر)"); }

// موقع ورود به پنل مدیریت اطلاعات پایه
function showBaseDataManagement() {
  renderUsersTable();
  renderExpensesTable();
  renderCentersTable();
  alert("مدیریت اطلاعات پایه آماده شد ✅ (جدول‌ها رندر شدند)");
}

  alert("کاربر جدید ثبت شد ✅");
});

// ذخیره مرکز جدید
document.getElementById("createCenterForm")?.addEventListener("submit", e => {
  e.preventDefault();
  const code = document.getElementById("newCenterCode").value;
  const name = document.getElementById("newCenterName").value;
  alert(`مرکز ${name} با کد ${code} ثبت شد ✅`);
});

// دسترسی به کاربر
document.getElementById("userAccessForm")?.addEventListener("submit", e => {
  e.preventDefault();
  const user = document.getElementById("accessUsername").value;
  const expense = document.getElementById("accessExpense").value;
  const center = document.getElementById("accessCenter").value;

  if (realUsers[user]) {
    realUsers[user].hazinemojaz = expense || "F";
    realUsers[user].center = center || realUsers[user].center;
    alert("دسترسی بروزرسانی شد ✅");
  } else {
    alert("کاربر یافت نشد ❌");
  }
});

// ذخیره هزینه جدید
document.getElementById("createExpenseForm")?.addEventListener("submit", e => {
  e.preventDefault();
  const title = document.getElementById("newExpenseTitle").value;
  if (title) {
    expenseCategories[title] = ["S", "F", "TS", "TF"];
    alert("هزینه جدید اضافه شد ✅");
  }
});

                        
                        currentExpenses.push(expenseItem);
                        total += expenseItem.netAmount;
                    }
                } else {
                    // برای سایر سرفصل‌ها
                    const amount = row.querySelector('.expense-amount').value;
                    const note = row.querySelector('.expense-note').value;
                    
                    if (amount && amount > 0) {
                        const expenseItem = {
                            amount: parseInt(amount),
                            deduction: 0,
                            netAmount: parseInt(amount),
                            note: note || ''
                        };

// -------------------------
// مدیریت اطلاعات پایه (نسخه جدا)
// -------------------------

function toggleBaseDataPanel() {
  const panel = document.getElementById("baseDataPanel");
  panel.classList.toggle("hidden");

  if (!panel.classList.contains("hidden")) {
    renderUsersTable();
    renderExpensesTable();
    renderCentersTable();
  }
}

function renderUsersTable() {
  const tbody = document.getElementById("usersTableBody");
  tbody.innerHTML = "";
  Object.keys(realUsers).forEach(u => {
    const user = realUsers[u];
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td class="border px-3 py-2">${u}</td>
      <td class="border px-3 py-2">${user.center}</td>
      <td class="border px-3 py-2">${user.hazinemojaz}</td>
      <td class="border px-3 py-2 text-center"><input type="checkbox" ${user.multiCenter ? "checked": ""}></td>
    `;
    tbody.appendChild(tr);
  });
}

function renderExpensesTable() {
  const tbody = document.getElementById("expensesTableBody");
  tbody.innerHTML = "";
  Object.keys(expenseCategories).forEach(group => {
    expenseCategories[group].forEach(exp => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td class="border px-3 py-2">${group}</td>
        <td class="border px-3 py-2">${exp}</td>
        <td class="border px-3 py-2 text-center"><input type="checkbox" checked></td>
      `;
      tbody.appendChild(tr);
    });
  });
}

function renderCentersTable() {
  const tbody = document.getElementById("centersTableBody");
  tbody.innerHTML = "";
  let centers = new Set(Object.values(realUsers).map(u=>u.center));
  centers.forEach(c => {
    const tr = document.createElement("tr");
    tr.innerHTML = `<td class="border px-3 py-2">${c}</td><td class="border px-3 py-2">مرکز ${c}</td>`;
    tbody.appendChild(tr);
  });
}

function addExpenseGroup() { alert("ایجاد گروه هزینه جدید (نیاز به توسعه بیشتر)"); }
function addExpenseItem() { alert("ایجاد هزینه جدید (نیاز به توسعه بیشتر)"); }
function addCenter() { alert("ایجاد مرکز جدید (نیاز به توسعه بیشتر)"); }


// -------------------------
// مدیریت اطلاعات پایه
// -------------------------

function renderUsersTable() {
  const tbody = document.getElementById("usersTableBody");
  tbody.innerHTML = "";
  Object.keys(realUsers).forEach(u => {
    const user = realUsers[u];
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td class="border px-3 py-2">${u}</td>
      <td class="border px-3 py-2"><input type="text" value="${user.center}" onchange="realUsers['${u}'].center=this.value"></td>
      <td class="border px-3 py-2"><input type="text" value="${user.hazinemojaz}" onchange="realUsers['${u}'].hazinemojaz=this.value"></td>
      <td class="border px-3 py-2 text-center"><input type="checkbox" ${user.multiCenter ? "checked": ""} onchange="realUsers['${u}'].multiCenter=this.checked"></td>
    `;
    tbody.appendChild(tr);
  });
}

function renderExpensesTable() {
  const tbody = document.getElementById("expensesTableBody");
  tbody.innerHTML = "";
  Object.keys(expenseCategories).forEach(group => {
    expenseCategories[group].forEach(exp => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td class="border px-3 py-2">${group}</td>
        <td class="border px-3 py-2">${exp}</td>
        <td class="border px-3 py-2 text-center"><input type="checkbox" checked></td>
      `;
      tbody.appendChild(tr);
    });
  });
}

function renderCentersTable() {
  const tbody = document.getElementById("centersTableBody");
  tbody.innerHTML = "";
  let centers = new Set(Object.values(realUsers).map(u=>u.center));
  centers.forEach(c => {
    const tr = document.createElement("tr");
    tr.innerHTML = `<td class="border px-3 py-2">${c}</td><td class="border px-3 py-2">مرکز ${c}</td>`;
    tbody.appendChild(tr);
  });
}

function addExpenseGroup() { alert("ایجاد گروه هزینه جدید (نیاز به توسعه بیشتر)"); }
function addExpenseItem() { alert("ایجاد هزینه جدید (نیاز به توسعه بیشتر)"); }
function addCenter() { alert("ایجاد مرکز جدید (نیاز به توسعه بیشتر)"); }

// موقع ورود به پنل مدیریت اطلاعات پایه
function showBaseDataManagement() {
  renderUsersTable();
  renderExpensesTable();
  renderCentersTable();
  alert("مدیریت اطلاعات پایه آماده شد ✅ (جدول‌ها رندر شدند)");
}


// -------------------------
// مدیریت فرم‌های جدید
// -------------------------

// ذخیره کاربر جدید
document.getElementById("createUserForm")?.addEventListener("submit", e => {
  e.preventDefault();
  const username = document.getElementById("newUserUsername").value;
  const pass = document.getElementById("newUserPassword").value;
  const center = document.getElementById("newUserCenter").value;

  realUsers[username] = {
    pass,
    code: Date.now().toString().slice(-3),
    center,
    name: "کاربر جدید",
    account: "",
    bankCode: "",
    total: "0",
    hazinemojaz: "F"
  };

// -------------------------
// مدیریت اطلاعات پایه (نسخه جدا)
// -------------------------

function toggleBaseDataPanel() {
  const panel = document.getElementById("baseDataPanel");
  panel.classList.toggle("hidden");

  if (!panel.classList.contains("hidden")) {
    renderUsersTable();
    renderExpensesTable();
    renderCentersTable();
  }
}

function renderUsersTable() {
  const tbody = document.getElementById("usersTableBody");
  tbody.innerHTML = "";
  Object.keys(realUsers).forEach(u => {
    const user = realUsers[u];
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td class="border px-3 py-2">${u}</td>
      <td class="border px-3 py-2">${user.center}</td>
      <td class="border px-3 py-2">${user.hazinemojaz}</td>
      <td class="border px-3 py-2 text-center"><input type="checkbox" ${user.multiCenter ? "checked": ""}></td>
    `;
    tbody.appendChild(tr);
  });
}

function renderExpensesTable() {
  const tbody = document.getElementById("expensesTableBody");
  tbody.innerHTML = "";
  Object.keys(expenseCategories).forEach(group => {
    expenseCategories[group].forEach(exp => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td class="border px-3 py-2">${group}</td>
        <td class="border px-3 py-2">${exp}</td>
        <td class="border px-3 py-2 text-center"><input type="checkbox" checked></td>
      `;
      tbody.appendChild(tr);
    });
  });
}

function renderCentersTable() {
  const tbody = document.getElementById("centersTableBody");
  tbody.innerHTML = "";
  let centers = new Set(Object.values(realUsers).map(u=>u.center));
  centers.forEach(c => {
    const tr = document.createElement("tr");
    tr.innerHTML = `<td class="border px-3 py-2">${c}</td><td class="border px-3 py-2">مرکز ${c}</td>`;
    tbody.appendChild(tr);
  });
}

function addExpenseGroup() { alert("ایجاد گروه هزینه جدید (نیاز به توسعه بیشتر)"); }
function addExpenseItem() { alert("ایجاد هزینه جدید (نیاز به توسعه بیشتر)"); }
function addCenter() { alert("ایجاد مرکز جدید (نیاز به توسعه بیشتر)"); }


// -------------------------
// مدیریت اطلاعات پایه
// -------------------------

function renderUsersTable() {
  const tbody = document.getElementById("usersTableBody");
  tbody.innerHTML = "";
  Object.keys(realUsers).forEach(u => {
    const user = realUsers[u];
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td class="border px-3 py-2">${u}</td>
      <td class="border px-3 py-2"><input type="text" value="${user.center}" onchange="realUsers['${u}'].center=this.value"></td>
      <td class="border px-3 py-2"><input type="text" value="${user.hazinemojaz}" onchange="realUsers['${u}'].hazinemojaz=this.value"></td>
      <td class="border px-3 py-2 text-center"><input type="checkbox" ${user.multiCenter ? "checked": ""} onchange="realUsers['${u}'].multiCenter=this.checked"></td>
    `;
    tbody.appendChild(tr);
  });
}

function renderExpensesTable() {
  const tbody = document.getElementById("expensesTableBody");
  tbody.innerHTML = "";
  Object.keys(expenseCategories).forEach(group => {
    expenseCategories[group].forEach(exp => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td class="border px-3 py-2">${group}</td>
        <td class="border px-3 py-2">${exp}</td>
        <td class="border px-3 py-2 text-center"><input type="checkbox" checked></td>
      `;
      tbody.appendChild(tr);
    });
  });
}

function renderCentersTable() {
  const tbody = document.getElementById("centersTableBody");
  tbody.innerHTML = "";
  let centers = new Set(Object.values(realUsers).map(u=>u.center));
  centers.forEach(c => {
    const tr = document.createElement("tr");
    tr.innerHTML = `<td class="border px-3 py-2">${c}</td><td class="border px-3 py-2">مرکز ${c}</td>`;
    tbody.appendChild(tr);
  });
}

function addExpenseGroup() { alert("ایجاد گروه هزینه جدید (نیاز به توسعه بیشتر)"); }
function addExpenseItem() { alert("ایجاد هزینه جدید (نیاز به توسعه بیشتر)"); }
function addCenter() { alert("ایجاد مرکز جدید (نیاز به توسعه بیشتر)"); }

// موقع ورود به پنل مدیریت اطلاعات پایه
function showBaseDataManagement() {
  renderUsersTable();
  renderExpensesTable();
  renderCentersTable();
  alert("مدیریت اطلاعات پایه آماده شد ✅ (جدول‌ها رندر شدند)");
}

  alert("کاربر جدید ثبت شد ✅");
});

// ذخیره مرکز جدید
document.getElementById("createCenterForm")?.addEventListener("submit", e => {
  e.preventDefault();
  const code = document.getElementById("newCenterCode").value;
  const name = document.getElementById("newCenterName").value;
  alert(`مرکز ${name} با کد ${code} ثبت شد ✅`);
});

// دسترسی به کاربر
document.getElementById("userAccessForm")?.addEventListener("submit", e => {
  e.preventDefault();
  const user = document.getElementById("accessUsername").value;
  const expense = document.getElementById("accessExpense").value;
  const center = document.getElementById("accessCenter").value;

  if (realUsers[user]) {
    realUsers[user].hazinemojaz = expense || "F";
    realUsers[user].center = center || realUsers[user].center;
    alert("دسترسی بروزرسانی شد ✅");
  } else {
    alert("کاربر یافت نشد ❌");
  }
});

// ذخیره هزینه جدید
document.getElementById("createExpenseForm")?.addEventListener("submit", e => {
  e.preventDefault();
  const title = document.getElementById("newExpenseTitle").value;
  if (title) {
    expenseCategories[title] = ["S", "F", "TS", "TF"];
    alert("هزینه جدید اضافه شد ✅");
  }
});

                        
                        currentExpenses.push(expenseItem);
                        total += expenseItem.netAmount;
                    }
                }
            });
            
            // اضافه کردن هزینه تایید شده به لیست کل

const selectedCenter = document.getElementById('expenseCenter') ? document.getElementById('expenseCenter').value : currentUser.code;

const expenseData = {
    category: selectedCategory,
    expenses: currentExpenses,
    total: total,
    center: selectedCenter  // مرکز هزینه
};

// -------------------------
// مدیریت اطلاعات پایه (نسخه جدا)
// -------------------------

function toggleBaseDataPanel() {
  const panel = document.getElementById("baseDataPanel");
  panel.classList.toggle("hidden");

  if (!panel.classList.contains("hidden")) {
    renderUsersTable();
    renderExpensesTable();
    renderCentersTable();
  }
}

function renderUsersTable() {
  const tbody = document.getElementById("usersTableBody");
  tbody.innerHTML = "";
  Object.keys(realUsers).forEach(u => {
    const user = realUsers[u];
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td class="border px-3 py-2">${u}</td>
      <td class="border px-3 py-2">${user.center}</td>
      <td class="border px-3 py-2">${user.hazinemojaz}</td>
      <td class="border px-3 py-2 text-center"><input type="checkbox" ${user.multiCenter ? "checked": ""}></td>
    `;
    tbody.appendChild(tr);
  });
}

function renderExpensesTable() {
  const tbody = document.getElementById("expensesTableBody");
  tbody.innerHTML = "";
  Object.keys(expenseCategories).forEach(group => {
    expenseCategories[group].forEach(exp => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td class="border px-3 py-2">${group}</td>
        <td class="border px-3 py-2">${exp}</td>
        <td class="border px-3 py-2 text-center"><input type="checkbox" checked></td>
      `;
      tbody.appendChild(tr);
    });
  });
}

function renderCentersTable() {
  const tbody = document.getElementById("centersTableBody");
  tbody.innerHTML = "";
  let centers = new Set(Object.values(realUsers).map(u=>u.center));
  centers.forEach(c => {
    const tr = document.createElement("tr");
    tr.innerHTML = `<td class="border px-3 py-2">${c}</td><td class="border px-3 py-2">مرکز ${c}</td>`;
    tbody.appendChild(tr);
  });
}

function addExpenseGroup() { alert("ایجاد گروه هزینه جدید (نیاز به توسعه بیشتر)"); }
function addExpenseItem() { alert("ایجاد هزینه جدید (نیاز به توسعه بیشتر)"); }
function addCenter() { alert("ایجاد مرکز جدید (نیاز به توسعه بیشتر)"); }


// -------------------------
// مدیریت اطلاعات پایه
// -------------------------

function renderUsersTable() {
  const tbody = document.getElementById("usersTableBody");
  tbody.innerHTML = "";
  Object.keys(realUsers).forEach(u => {
    const user = realUsers[u];
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td class="border px-3 py-2">${u}</td>
      <td class="border px-3 py-2"><input type="text" value="${user.center}" onchange="realUsers['${u}'].center=this.value"></td>
      <td class="border px-3 py-2"><input type="text" value="${user.hazinemojaz}" onchange="realUsers['${u}'].hazinemojaz=this.value"></td>
      <td class="border px-3 py-2 text-center"><input type="checkbox" ${user.multiCenter ? "checked": ""} onchange="realUsers['${u}'].multiCenter=this.checked"></td>
    `;
    tbody.appendChild(tr);
  });
}

function renderExpensesTable() {
  const tbody = document.getElementById("expensesTableBody");
  tbody.innerHTML = "";
  Object.keys(expenseCategories).forEach(group => {
    expenseCategories[group].forEach(exp => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td class="border px-3 py-2">${group}</td>
        <td class="border px-3 py-2">${exp}</td>
        <td class="border px-3 py-2 text-center"><input type="checkbox" checked></td>
      `;
      tbody.appendChild(tr);
    });
  });
}

function renderCentersTable() {
  const tbody = document.getElementById("centersTableBody");
  tbody.innerHTML = "";
  let centers = new Set(Object.values(realUsers).map(u=>u.center));
  centers.forEach(c => {
    const tr = document.createElement("tr");
    tr.innerHTML = `<td class="border px-3 py-2">${c}</td><td class="border px-3 py-2">مرکز ${c}</td>`;
    tbody.appendChild(tr);
  });
}

function addExpenseGroup() { alert("ایجاد گروه هزینه جدید (نیاز به توسعه بیشتر)"); }
function addExpenseItem() { alert("ایجاد هزینه جدید (نیاز به توسعه بیشتر)"); }
function addCenter() { alert("ایجاد مرکز جدید (نیاز به توسعه بیشتر)"); }

// موقع ورود به پنل مدیریت اطلاعات پایه
function showBaseDataManagement() {
  renderUsersTable();
  renderExpensesTable();
  renderCentersTable();
  alert("مدیریت اطلاعات پایه آماده شد ✅ (جدول‌ها رندر شدند)");
}


// -------------------------
// مدیریت فرم‌های جدید
// -------------------------

// ذخیره کاربر جدید
document.getElementById("createUserForm")?.addEventListener("submit", e => {
  e.preventDefault();
  const username = document.getElementById("newUserUsername").value;
  const pass = document.getElementById("newUserPassword").value;
  const center = document.getElementById("newUserCenter").value;

  realUsers[username] = {
    pass,
    code: Date.now().toString().slice(-3),
    center,
    name: "کاربر جدید",
    account: "",
    bankCode: "",
    total: "0",
    hazinemojaz: "F"
  };

// -------------------------
// مدیریت اطلاعات پایه (نسخه جدا)
// -------------------------

function toggleBaseDataPanel() {
  const panel = document.getElementById("baseDataPanel");
  panel.classList.toggle("hidden");

  if (!panel.classList.contains("hidden")) {
    renderUsersTable();
    renderExpensesTable();
    renderCentersTable();
  }
}

function renderUsersTable() {
  const tbody = document.getElementById("usersTableBody");
  tbody.innerHTML = "";
  Object.keys(realUsers).forEach(u => {
    const user = realUsers[u];
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td class="border px-3 py-2">${u}</td>
      <td class="border px-3 py-2">${user.center}</td>
      <td class="border px-3 py-2">${user.hazinemojaz}</td>
      <td class="border px-3 py-2 text-center"><input type="checkbox" ${user.multiCenter ? "checked": ""}></td>
    `;
    tbody.appendChild(tr);
  });
}

function renderExpensesTable() {
  const tbody = document.getElementById("expensesTableBody");
  tbody.innerHTML = "";
  Object.keys(expenseCategories).forEach(group => {
    expenseCategories[group].forEach(exp => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td class="border px-3 py-2">${group}</td>
        <td class="border px-3 py-2">${exp}</td>
        <td class="border px-3 py-2 text-center"><input type="checkbox" checked></td>
      `;
      tbody.appendChild(tr);
    });
  });
}

function renderCentersTable() {
  const tbody = document.getElementById("centersTableBody");
  tbody.innerHTML = "";
  let centers = new Set(Object.values(realUsers).map(u=>u.center));
  centers.forEach(c => {
    const tr = document.createElement("tr");
    tr.innerHTML = `<td class="border px-3 py-2">${c}</td><td class="border px-3 py-2">مرکز ${c}</td>`;
    tbody.appendChild(tr);
  });
}

function addExpenseGroup() { alert("ایجاد گروه هزینه جدید (نیاز به توسعه بیشتر)"); }
function addExpenseItem() { alert("ایجاد هزینه جدید (نیاز به توسعه بیشتر)"); }
function addCenter() { alert("ایجاد مرکز جدید (نیاز به توسعه بیشتر)"); }


// -------------------------
// مدیریت اطلاعات پایه
// -------------------------

function renderUsersTable() {
  const tbody = document.getElementById("usersTableBody");
  tbody.innerHTML = "";
  Object.keys(realUsers).forEach(u => {
    const user = realUsers[u];
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td class="border px-3 py-2">${u}</td>
      <td class="border px-3 py-2"><input type="text" value="${user.center}" onchange="realUsers['${u}'].center=this.value"></td>
      <td class="border px-3 py-2"><input type="text" value="${user.hazinemojaz}" onchange="realUsers['${u}'].hazinemojaz=this.value"></td>
      <td class="border px-3 py-2 text-center"><input type="checkbox" ${user.multiCenter ? "checked": ""} onchange="realUsers['${u}'].multiCenter=this.checked"></td>
    `;
    tbody.appendChild(tr);
  });
}

function renderExpensesTable() {
  const tbody = document.getElementById("expensesTableBody");
  tbody.innerHTML = "";
  Object.keys(expenseCategories).forEach(group => {
    expenseCategories[group].forEach(exp => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td class="border px-3 py-2">${group}</td>
        <td class="border px-3 py-2">${exp}</td>
        <td class="border px-3 py-2 text-center"><input type="checkbox" checked></td>
      `;
      tbody.appendChild(tr);
    });
  });
}

function renderCentersTable() {
  const tbody = document.getElementById("centersTableBody");
  tbody.innerHTML = "";
  let centers = new Set(Object.values(realUsers).map(u=>u.center));
  centers.forEach(c => {
    const tr = document.createElement("tr");
    tr.innerHTML = `<td class="border px-3 py-2">${c}</td><td class="border px-3 py-2">مرکز ${c}</td>`;
    tbody.appendChild(tr);
  });
}

function addExpenseGroup() { alert("ایجاد گروه هزینه جدید (نیاز به توسعه بیشتر)"); }
function addExpenseItem() { alert("ایجاد هزینه جدید (نیاز به توسعه بیشتر)"); }
function addCenter() { alert("ایجاد مرکز جدید (نیاز به توسعه بیشتر)"); }

// موقع ورود به پنل مدیریت اطلاعات پایه
function showBaseDataManagement() {
  renderUsersTable();
  renderExpensesTable();
  renderCentersTable();
  alert("مدیریت اطلاعات پایه آماده شد ✅ (جدول‌ها رندر شدند)");
}

  alert("کاربر جدید ثبت شد ✅");
});

// ذخیره مرکز جدید
document.getElementById("createCenterForm")?.addEventListener("submit", e => {
  e.preventDefault();
  const code = document.getElementById("newCenterCode").value;
  const name = document.getElementById("newCenterName").value;
  alert(`مرکز ${name} با کد ${code} ثبت شد ✅`);
});

// دسترسی به کاربر
document.getElementById("userAccessForm")?.addEventListener("submit", e => {
  e.preventDefault();
  const user = document.getElementById("accessUsername").value;
  const expense = document.getElementById("accessExpense").value;
  const center = document.getElementById("accessCenter").value;

  if (realUsers[user]) {
    realUsers[user].hazinemojaz = expense || "F";
    realUsers[user].center = center || realUsers[user].center;
    alert("دسترسی بروزرسانی شد ✅");
  } else {
    alert("کاربر یافت نشد ❌");
  }
});

// ذخیره هزینه جدید
document.getElementById("createExpenseForm")?.addEventListener("submit", e => {
  e.preventDefault();
  const title = document.getElementById("newExpenseTitle").value;
  if (title) {
    expenseCategories[title] = ["S", "F", "TS", "TF"];
    alert("هزینه جدید اضافه شد ✅");
  }
});


            
            allConfirmedExpenses.push(expenseData);
            
            // نمایش هزینه تایید شده
            displayConfirmedExpense(expenseData, allConfirmedExpenses.length - 1);
            
            // مخفی کردن بخش جزئیات و نمایش دکمه هزینه جدید
            document.getElementById('expenseDetailsSection').classList.add('hidden');
            document.getElementById('addNewExpenseBtn').classList.remove('hidden');
            
            // ریست کردن فرم
            document.getElementById('expenseCategory').value = '';
            document.getElementById('expenseRows').innerHTML = '';
            expenseRowCount = 0;
            
            // به‌روزرسانی جمع کل
            updateGrandTotal();
        }
        
        // نمایش هزینه تایید شده
        function displayConfirmedExpense(expenseData, index) {
            const container = document.getElementById('confirmedExpensesContainer');
            const expenseDiv = document.createElement('div');
            expenseDiv.className = 'bg-green-50 p-4 rounded-lg border border-green-200 mb-3';
            expenseDiv.innerHTML = `
                <div class="flex justify-between items-start">
                    <div>
                        <h5 class="font-semibold text-green-700">${expenseData.category}</h5>
                        <p class="text-sm text-gray-600">تعداد آیتم: ${expenseData.expenses.length} | مجموع: ${expenseData.total.toLocaleString()} ریال</p>
                        <div class="text-xs text-gray-500 mt-1">
                            ${expenseData.expenses.map(exp => {
                                let text = '';
                                
                                if (exp.invoiceAmount) {
                                    // برای هزینه‌های تعمیر
                                    text = `• فاکتور: ${exp.invoiceAmount.toLocaleString()} ریال`;
                                    if (exp.taxableAmount > 0) {
                                        text += ` | مشمول: ${exp.taxableAmount.toLocaleString()} ریال`;
                                    }
                                    if (exp.deduction > 0) {
                                        text += ` | کسورات ${exp.deductionRate}%: ${exp.deduction.toLocaleString()} ریال`;
                                    }
                                    text += ` | خالص: ${exp.netAmount.toLocaleString()} ریال`;
                                } else {
                                    // برای سایر هزینه‌ها
                                    text = `• ${exp.amount.toLocaleString()} ریال`;
                                    if (exp.deduction && exp.deduction > 0) {
                                        text += ` - کسورات: ${exp.deduction.toLocaleString()} = ${exp.netAmount.toLocaleString()} ریال`;
                                    }
                                }
                                
                                if (exp.note) text += ` (${exp.note})`;
                                if (exp.travelCode) text += ` - کد سفر: ${exp.travelCode}`;
                                return text;
                            }).join('<br>')}
                        </div>
                    </div>
                    <div class="flex gap-2">
                        <button onclick="editConfirmedExpense(${index})" class="text-blue-500 hover:text-blue-700 text-sm">
                            ویرایش
                        </button>
                        <button onclick="removeConfirmedExpense(${index})" class="text-red-500 hover:text-red-700 text-sm">
                            حذف
                        </button>
                    </div>
                </div>
            `;
            container.appendChild(expenseDiv);
        }

	function renderPrintSummaryTable() {
    const tbody = document.getElementById('printSummaryBody');
    if (!tbody) return;

    tbody.innerHTML = '';

    allConfirmedExpenses.forEach(expense => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td class="px-4 py-2 border">${expense.category}</td>
            <td class="px-4 py-2 border">${expense.expenses.length}</td>
            <td class="px-4 py-2 border">${expense.total.toLocaleString()}</td>
        `;
        tbody.appendChild(row);
    });
}

        
        // حذف هزینه تایید شده
        function removeConfirmedExpense(index) {
            const expenseData = allConfirmedExpenses[index];
            
            // اگر این هزینه مربوط به ایاب و ذهاب است، کدهای سفر آن را از مجموعه حذف کن
            if (expenseData.category === 'ایاب و ذهاب') {
                expenseData.expenses.forEach(expense => {
                    if (expense.travelCode && expense.travelCode !== 'سایر') {
                        usedTravelCodes.delete(expense.travelCode);
                    }
                });
            }
            
            allConfirmedExpenses.splice(index, 1);
            refreshConfirmedExpensesDisplay();
            updateGrandTotal();
        }
        
        // ویرایش هزینه تایید شده
        function editConfirmedExpense(index) {
            const expenseData = allConfirmedExpenses[index];
            
            // اگر این هزینه مربوط به ایاب و ذهاب است، کدهای سفر آن را از مجموعه حذف کن
            if (expenseData.category === 'ایاب و ذهاب') {
                expenseData.expenses.forEach(expense => {
                    if (expense.travelCode && expense.travelCode !== 'سایر') {
                        usedTravelCodes.delete(expense.travelCode);
                    }
                });
            }
            
            // پر کردن فرم با اطلاعات موجود
            document.getElementById('expenseCategory').value = expenseData.category;
            showExpenseDetailsSection();
            
            // پر کردن ردیف‌ها با اطلاعات موجود
            const container = document.getElementById('expenseRows');
            container.innerHTML = '';
            expenseRowCount = 0;
            
            expenseData.expenses.forEach((expense, i) => {
                addExpenseRows(1);
                const lastRow = container.lastElementChild;
                
                if (expense.invoiceAmount) {
                    // برای هزینه‌های تعمیر
                    lastRow.querySelector('.invoice-amount').value = expense.invoiceAmount;
                    lastRow.querySelector('.taxable-amount').value = expense.taxableAmount || '';
                    lastRow.querySelector('.deduction-rate').value = expense.deductionRate || '0';
                    lastRow.querySelector('.expense-deduction').value = expense.deduction || '';
                    lastRow.querySelector('.net-amount').value = expense.netAmount || '';
                    lastRow.querySelector('.expense-note').value = expense.note || '';
                    
                    // محاسبه مجدد برای نمایش مقادیر
                    updateRepairRow(lastRow.querySelector('.invoice-amount'));
                } else {
                    // برای سایر هزینه‌ها
                    lastRow.querySelector('.expense-amount').value = expense.amount;
                    lastRow.querySelector('.expense-note').value = expense.note || '';
                    
                    if (expenseData.category === 'ایاب و ذهاب' && expense.travelCode) {
                        if (expense.travelCode === 'سایر') {
                            lastRow.querySelector('.other-travel').checked = true;
                            lastRow.querySelector('.travel-code').disabled = true;
                        } else {
                            lastRow.querySelector('.travel-code').value = expense.travelCode;
                        }
                    }
                }
            });
            
            // اضافه کردن چند ردیف خالی
            addExpenseRows(3);
            updateTotalAmount();
            
            // حذف هزینه قدیمی از لیست
            allConfirmedExpenses.splice(index, 1);
            refreshConfirmedExpensesDisplay();
        }
        
        // تابع برای toggle کردن کد سفر در هر ردیف
        function toggleTravelCodeForRow(checkbox) {
            const row = checkbox.closest('div');
            const travelCodeInput = row.querySelector('.travel-code');
            if (checkbox.checked) {
                travelCodeInput.disabled = true;
                travelCodeInput.value = '';
                travelCodeInput.style.backgroundColor = '#f3f4f6';
            } else {
                travelCodeInput.disabled = false;
                travelCodeInput.style.backgroundColor = 'white';
            }
        }
        
        // به‌روزرسانی نمایش هزینه‌های تایید شده
        function refreshConfirmedExpensesDisplay() {
            const container = document.getElementById('confirmedExpensesContainer');
            container.innerHTML = '';
            allConfirmedExpenses.forEach((expense, index) => {
                displayConfirmedExpense(expense, index);
            });
            
            if (allConfirmedExpenses.length === 0) {
                document.getElementById('addNewExpenseBtn').classList.add('hidden');
            }
        }
        
        // اضافه کردن سرفصل هزینه جدید
        function addNewExpenseCategory() {
            document.getElementById('addNewExpenseBtn').classList.add('hidden');
            // ریست کردن dropdown برای انتخاب مجدد
            document.getElementById('expenseCategory').value = '';
        }

        // خروج
function logout() {
    // نمایش صفحه اصلی و مخفی کردن تمام پنل‌ها
    document.querySelector('.container.mx-auto.px-4.py-8').style.display = 'block';
    document.getElementById('userPanel').classList.add('hidden');
    document.getElementById('printSummaryPage').classList.add('hidden');
    document.getElementById('adminPanel').classList.add('hidden'); // اضافه کردن این خط
    
    // ریست کردن فرم‌ها
    document.getElementById('userForm').reset();
    document.getElementById('adminForm').reset();
    
    // ریست کردن متغیرهای سراسری
    currentUser = null;
    allConfirmedExpenses = [];
    currentExpenses = [];
    usedTravelCodes.clear();
}

function showAdminPanel() {
    document.querySelector('.container.mx-auto.px-4.py-8').style.display = 'none'; // این خط رو اضافه کردم
    document.getElementById('userPanel').classList.add('hidden');
    document.getElementById('printSummaryPage').classList.add('hidden');

    const adminPanel = document.getElementById('adminPanel');
    if (adminPanel) adminPanel.classList.remove('hidden');

    loadAdminPettyCashList();
}
        // نمایش فرم تنخواه جدید
        function showNewPettyCashForm() {
            document.getElementById('newPettyCashForm').classList.remove('hidden');
        }

        // مخفی کردن فرم تنخواه جدید
        function hideNewPettyCashForm() {
            document.getElementById('newPettyCashForm').classList.add('hidden');
            document.getElementById('pettyCashForm').reset();
            hideExpenseDetailsSection();
            
            // ریست کردن متغیرهای سراسری
            allConfirmedExpenses = [];
            currentExpenses = [];
            document.getElementById('confirmedExpensesContainer').innerHTML = '';
            document.getElementById('addNewExpenseBtn').classList.add('hidden');
        }

        // ثبت درخواست تنخواه جدید
        function setupPettyCashForm() {
            const pettyCashForm = document.getElementById('pettyCashForm');
            if (pettyCashForm) {
pettyCashForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const description = document.getElementById('requestDescription').value;
    
    if (allConfirmedExpenses.length === 0) {
        alert('لطفا حداقل یک سرفصل هزینه اضافه کنید');
        return;
    }
    
    // محاسبه مجموع مبلغ از همه هزینه‌های تایید شده
    const totalAmount = allConfirmedExpenses.reduce((sum, category) => sum + category.total, 0);

    if (requestBeingEdited) {
        // 🔹 حالت ویرایش
        const existingRequest = allPettyCashRequests.find(req => req.id === requestBeingEdited);
        if (existingRequest) {
            existingRequest.amount = totalAmount;
            existingRequest.details = {
                expenses: allConfirmedExpenses,
                description: description
            };

// -------------------------
// مدیریت اطلاعات پایه (نسخه جدا)
// -------------------------

function toggleBaseDataPanel() {
  const panel = document.getElementById("baseDataPanel");
  panel.classList.toggle("hidden");

  if (!panel.classList.contains("hidden")) {
    renderUsersTable();
    renderExpensesTable();
    renderCentersTable();
  }
}

function renderUsersTable() {
  const tbody = document.getElementById("usersTableBody");
  tbody.innerHTML = "";
  Object.keys(realUsers).forEach(u => {
    const user = realUsers[u];
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td class="border px-3 py-2">${u}</td>
      <td class="border px-3 py-2">${user.center}</td>
      <td class="border px-3 py-2">${user.hazinemojaz}</td>
      <td class="border px-3 py-2 text-center"><input type="checkbox" ${user.multiCenter ? "checked": ""}></td>
    `;
    tbody.appendChild(tr);
  });
}

function renderExpensesTable() {
  const tbody = document.getElementById("expensesTableBody");
  tbody.innerHTML = "";
  Object.keys(expenseCategories).forEach(group => {
    expenseCategories[group].forEach(exp => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td class="border px-3 py-2">${group}</td>
        <td class="border px-3 py-2">${exp}</td>
        <td class="border px-3 py-2 text-center"><input type="checkbox" checked></td>
      `;
      tbody.appendChild(tr);
    });
  });
}

function renderCentersTable() {
  const tbody = document.getElementById("centersTableBody");
  tbody.innerHTML = "";
  let centers = new Set(Object.values(realUsers).map(u=>u.center));
  centers.forEach(c => {
    const tr = document.createElement("tr");
    tr.innerHTML = `<td class="border px-3 py-2">${c}</td><td class="border px-3 py-2">مرکز ${c}</td>`;
    tbody.appendChild(tr);
  });
}

function addExpenseGroup() { alert("ایجاد گروه هزینه جدید (نیاز به توسعه بیشتر)"); }
function addExpenseItem() { alert("ایجاد هزینه جدید (نیاز به توسعه بیشتر)"); }
function addCenter() { alert("ایجاد مرکز جدید (نیاز به توسعه بیشتر)"); }


// -------------------------
// مدیریت اطلاعات پایه
// -------------------------

function renderUsersTable() {
  const tbody = document.getElementById("usersTableBody");
  tbody.innerHTML = "";
  Object.keys(realUsers).forEach(u => {
    const user = realUsers[u];
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td class="border px-3 py-2">${u}</td>
      <td class="border px-3 py-2"><input type="text" value="${user.center}" onchange="realUsers['${u}'].center=this.value"></td>
      <td class="border px-3 py-2"><input type="text" value="${user.hazinemojaz}" onchange="realUsers['${u}'].hazinemojaz=this.value"></td>
      <td class="border px-3 py-2 text-center"><input type="checkbox" ${user.multiCenter ? "checked": ""} onchange="realUsers['${u}'].multiCenter=this.checked"></td>
    `;
    tbody.appendChild(tr);
  });
}

function renderExpensesTable() {
  const tbody = document.getElementById("expensesTableBody");
  tbody.innerHTML = "";
  Object.keys(expenseCategories).forEach(group => {
    expenseCategories[group].forEach(exp => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td class="border px-3 py-2">${group}</td>
        <td class="border px-3 py-2">${exp}</td>
        <td class="border px-3 py-2 text-center"><input type="checkbox" checked></td>
      `;
      tbody.appendChild(tr);
    });
  });
}

function renderCentersTable() {
  const tbody = document.getElementById("centersTableBody");
  tbody.innerHTML = "";
  let centers = new Set(Object.values(realUsers).map(u=>u.center));
  centers.forEach(c => {
    const tr = document.createElement("tr");
    tr.innerHTML = `<td class="border px-3 py-2">${c}</td><td class="border px-3 py-2">مرکز ${c}</td>`;
    tbody.appendChild(tr);
  });
}

function addExpenseGroup() { alert("ایجاد گروه هزینه جدید (نیاز به توسعه بیشتر)"); }
function addExpenseItem() { alert("ایجاد هزینه جدید (نیاز به توسعه بیشتر)"); }
function addCenter() { alert("ایجاد مرکز جدید (نیاز به توسعه بیشتر)"); }

// موقع ورود به پنل مدیریت اطلاعات پایه
function showBaseDataManagement() {
  renderUsersTable();
  renderExpensesTable();
  renderCentersTable();
  alert("مدیریت اطلاعات پایه آماده شد ✅ (جدول‌ها رندر شدند)");
}


// -------------------------
// مدیریت فرم‌های جدید
// -------------------------

// ذخیره کاربر جدید
document.getElementById("createUserForm")?.addEventListener("submit", e => {
  e.preventDefault();
  const username = document.getElementById("newUserUsername").value;
  const pass = document.getElementById("newUserPassword").value;
  const center = document.getElementById("newUserCenter").value;

  realUsers[username] = {
    pass,
    code: Date.now().toString().slice(-3),
    center,
    name: "کاربر جدید",
    account: "",
    bankCode: "",
    total: "0",
    hazinemojaz: "F"
  };

// -------------------------
// مدیریت اطلاعات پایه (نسخه جدا)
// -------------------------

function toggleBaseDataPanel() {
  const panel = document.getElementById("baseDataPanel");
  panel.classList.toggle("hidden");

  if (!panel.classList.contains("hidden")) {
    renderUsersTable();
    renderExpensesTable();
    renderCentersTable();
  }
}

function renderUsersTable() {
  const tbody = document.getElementById("usersTableBody");
  tbody.innerHTML = "";
  Object.keys(realUsers).forEach(u => {
    const user = realUsers[u];
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td class="border px-3 py-2">${u}</td>
      <td class="border px-3 py-2">${user.center}</td>
      <td class="border px-3 py-2">${user.hazinemojaz}</td>
      <td class="border px-3 py-2 text-center"><input type="checkbox" ${user.multiCenter ? "checked": ""}></td>
    `;
    tbody.appendChild(tr);
  });
}

function renderExpensesTable() {
  const tbody = document.getElementById("expensesTableBody");
  tbody.innerHTML = "";
  Object.keys(expenseCategories).forEach(group => {
    expenseCategories[group].forEach(exp => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td class="border px-3 py-2">${group}</td>
        <td class="border px-3 py-2">${exp}</td>
        <td class="border px-3 py-2 text-center"><input type="checkbox" checked></td>
      `;
      tbody.appendChild(tr);
    });
  });
}

function renderCentersTable() {
  const tbody = document.getElementById("centersTableBody");
  tbody.innerHTML = "";
  let centers = new Set(Object.values(realUsers).map(u=>u.center));
  centers.forEach(c => {
    const tr = document.createElement("tr");
    tr.innerHTML = `<td class="border px-3 py-2">${c}</td><td class="border px-3 py-2">مرکز ${c}</td>`;
    tbody.appendChild(tr);
  });
}

function addExpenseGroup() { alert("ایجاد گروه هزینه جدید (نیاز به توسعه بیشتر)"); }
function addExpenseItem() { alert("ایجاد هزینه جدید (نیاز به توسعه بیشتر)"); }
function addCenter() { alert("ایجاد مرکز جدید (نیاز به توسعه بیشتر)"); }


// -------------------------
// مدیریت اطلاعات پایه
// -------------------------

function renderUsersTable() {
  const tbody = document.getElementById("usersTableBody");
  tbody.innerHTML = "";
  Object.keys(realUsers).forEach(u => {
    const user = realUsers[u];
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td class="border px-3 py-2">${u}</td>
      <td class="border px-3 py-2"><input type="text" value="${user.center}" onchange="realUsers['${u}'].center=this.value"></td>
      <td class="border px-3 py-2"><input type="text" value="${user.hazinemojaz}" onchange="realUsers['${u}'].hazinemojaz=this.value"></td>
      <td class="border px-3 py-2 text-center"><input type="checkbox" ${user.multiCenter ? "checked": ""} onchange="realUsers['${u}'].multiCenter=this.checked"></td>
    `;
    tbody.appendChild(tr);
  });
}

function renderExpensesTable() {
  const tbody = document.getElementById("expensesTableBody");
  tbody.innerHTML = "";
  Object.keys(expenseCategories).forEach(group => {
    expenseCategories[group].forEach(exp => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td class="border px-3 py-2">${group}</td>
        <td class="border px-3 py-2">${exp}</td>
        <td class="border px-3 py-2 text-center"><input type="checkbox" checked></td>
      `;
      tbody.appendChild(tr);
    });
  });
}

function renderCentersTable() {
  const tbody = document.getElementById("centersTableBody");
  tbody.innerHTML = "";
  let centers = new Set(Object.values(realUsers).map(u=>u.center));
  centers.forEach(c => {
    const tr = document.createElement("tr");
    tr.innerHTML = `<td class="border px-3 py-2">${c}</td><td class="border px-3 py-2">مرکز ${c}</td>`;
    tbody.appendChild(tr);
  });
}

function addExpenseGroup() { alert("ایجاد گروه هزینه جدید (نیاز به توسعه بیشتر)"); }
function addExpenseItem() { alert("ایجاد هزینه جدید (نیاز به توسعه بیشتر)"); }
function addCenter() { alert("ایجاد مرکز جدید (نیاز به توسعه بیشتر)"); }

// موقع ورود به پنل مدیریت اطلاعات پایه
function showBaseDataManagement() {
  renderUsersTable();
  renderExpensesTable();
  renderCentersTable();
  alert("مدیریت اطلاعات پایه آماده شد ✅ (جدول‌ها رندر شدند)");
}

  alert("کاربر جدید ثبت شد ✅");
});

// ذخیره مرکز جدید
document.getElementById("createCenterForm")?.addEventListener("submit", e => {
  e.preventDefault();
  const code = document.getElementById("newCenterCode").value;
  const name = document.getElementById("newCenterName").value;
  alert(`مرکز ${name} با کد ${code} ثبت شد ✅`);
});

// دسترسی به کاربر
document.getElementById("userAccessForm")?.addEventListener("submit", e => {
  e.preventDefault();
  const user = document.getElementById("accessUsername").value;
  const expense = document.getElementById("accessExpense").value;
  const center = document.getElementById("accessCenter").value;

  if (realUsers[user]) {
    realUsers[user].hazinemojaz = expense || "F";
    realUsers[user].center = center || realUsers[user].center;
    alert("دسترسی بروزرسانی شد ✅");
  } else {
    alert("کاربر یافت نشد ❌");
  }
});

// ذخیره هزینه جدید
document.getElementById("createExpenseForm")?.addEventListener("submit", e => {
  e.preventDefault();
  const title = document.getElementById("newExpenseTitle").value;
  if (title) {
    expenseCategories[title] = ["S", "F", "TS", "TF"];
    alert("هزینه جدید اضافه شد ✅");
  }
});

            existingRequest.date = new Date().toLocaleDateString("fa-IR");
        }
        requestBeingEdited = null; // ریست کردن حالت ویرایش
        alert("درخواست با موفقیت ویرایش شد.");
    } else {
        // 🔹 حالت ثبت جدید
        // ایجاد شماره درخواست جدید
        const existingRows = document.querySelectorAll('#pettyCashList tr');
        let lastNumber = 1003;
        if (existingRows.length > 0) {
            const firstRowNumber = existingRows[0].querySelector('td').textContent;
            lastNumber = parseInt(firstRowNumber);
        }
        const requestNumber = lastNumber + 1;
        
        // ایجاد عنوان درخواست
        const title = `تنخواه شماره ${requestNumber}`;
        
        // گرفتن تاریخ امروز
        const today = new Date();
        const persianDate = `${today.getFullYear()}/${String(today.getMonth() + 1).padStart(2, '0')}/${String(today.getDate()).padStart(2, '0')}`;
        
        // اضافه کردن درخواست جدید
        const newRequest = {
            id: requestNumber,
            title: title,
            center: currentUser.center,
            user: currentUser.username,
            amount: totalAmount,
            date: persianDate,
            status: 'در انتظار',
            paid: false,
            details: {
                expenses: allConfirmedExpenses,
                description: description
            }
        };

// -------------------------
// مدیریت اطلاعات پایه (نسخه جدا)
// -------------------------

function toggleBaseDataPanel() {
  const panel = document.getElementById("baseDataPanel");
  panel.classList.toggle("hidden");

  if (!panel.classList.contains("hidden")) {
    renderUsersTable();
    renderExpensesTable();
    renderCentersTable();
  }
}

function renderUsersTable() {
  const tbody = document.getElementById("usersTableBody");
  tbody.innerHTML = "";
  Object.keys(realUsers).forEach(u => {
    const user = realUsers[u];
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td class="border px-3 py-2">${u}</td>
      <td class="border px-3 py-2">${user.center}</td>
      <td class="border px-3 py-2">${user.hazinemojaz}</td>
      <td class="border px-3 py-2 text-center"><input type="checkbox" ${user.multiCenter ? "checked": ""}></td>
    `;
    tbody.appendChild(tr);
  });
}

function renderExpensesTable() {
  const tbody = document.getElementById("expensesTableBody");
  tbody.innerHTML = "";
  Object.keys(expenseCategories).forEach(group => {
    expenseCategories[group].forEach(exp => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td class="border px-3 py-2">${group}</td>
        <td class="border px-3 py-2">${exp}</td>
        <td class="border px-3 py-2 text-center"><input type="checkbox" checked></td>
      `;
      tbody.appendChild(tr);
    });
  });
}

function renderCentersTable() {
  const tbody = document.getElementById("centersTableBody");
  tbody.innerHTML = "";
  let centers = new Set(Object.values(realUsers).map(u=>u.center));
  centers.forEach(c => {
    const tr = document.createElement("tr");
    tr.innerHTML = `<td class="border px-3 py-2">${c}</td><td class="border px-3 py-2">مرکز ${c}</td>`;
    tbody.appendChild(tr);
  });
}

function addExpenseGroup() { alert("ایجاد گروه هزینه جدید (نیاز به توسعه بیشتر)"); }
function addExpenseItem() { alert("ایجاد هزینه جدید (نیاز به توسعه بیشتر)"); }
function addCenter() { alert("ایجاد مرکز جدید (نیاز به توسعه بیشتر)"); }


// -------------------------
// مدیریت اطلاعات پایه
// -------------------------

function renderUsersTable() {
  const tbody = document.getElementById("usersTableBody");
  tbody.innerHTML = "";
  Object.keys(realUsers).forEach(u => {
    const user = realUsers[u];
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td class="border px-3 py-2">${u}</td>
      <td class="border px-3 py-2"><input type="text" value="${user.center}" onchange="realUsers['${u}'].center=this.value"></td>
      <td class="border px-3 py-2"><input type="text" value="${user.hazinemojaz}" onchange="realUsers['${u}'].hazinemojaz=this.value"></td>
      <td class="border px-3 py-2 text-center"><input type="checkbox" ${user.multiCenter ? "checked": ""} onchange="realUsers['${u}'].multiCenter=this.checked"></td>
    `;
    tbody.appendChild(tr);
  });
}

function renderExpensesTable() {
  const tbody = document.getElementById("expensesTableBody");
  tbody.innerHTML = "";
  Object.keys(expenseCategories).forEach(group => {
    expenseCategories[group].forEach(exp => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td class="border px-3 py-2">${group}</td>
        <td class="border px-3 py-2">${exp}</td>
        <td class="border px-3 py-2 text-center"><input type="checkbox" checked></td>
      `;
      tbody.appendChild(tr);
    });
  });
}

function renderCentersTable() {
  const tbody = document.getElementById("centersTableBody");
  tbody.innerHTML = "";
  let centers = new Set(Object.values(realUsers).map(u=>u.center));
  centers.forEach(c => {
    const tr = document.createElement("tr");
    tr.innerHTML = `<td class="border px-3 py-2">${c}</td><td class="border px-3 py-2">مرکز ${c}</td>`;
    tbody.appendChild(tr);
  });
}

function addExpenseGroup() { alert("ایجاد گروه هزینه جدید (نیاز به توسعه بیشتر)"); }
function addExpenseItem() { alert("ایجاد هزینه جدید (نیاز به توسعه بیشتر)"); }
function addCenter() { alert("ایجاد مرکز جدید (نیاز به توسعه بیشتر)"); }

// موقع ورود به پنل مدیریت اطلاعات پایه
function showBaseDataManagement() {
  renderUsersTable();
  renderExpensesTable();
  renderCentersTable();
  alert("مدیریت اطلاعات پایه آماده شد ✅ (جدول‌ها رندر شدند)");
}


// -------------------------
// مدیریت فرم‌های جدید
// -------------------------

// ذخیره کاربر جدید
document.getElementById("createUserForm")?.addEventListener("submit", e => {
  e.preventDefault();
  const username = document.getElementById("newUserUsername").value;
  const pass = document.getElementById("newUserPassword").value;
  const center = document.getElementById("newUserCenter").value;

  realUsers[username] = {
    pass,
    code: Date.now().toString().slice(-3),
    center,
    name: "کاربر جدید",
    account: "",
    bankCode: "",
    total: "0",
    hazinemojaz: "F"
  };

// -------------------------
// مدیریت اطلاعات پایه (نسخه جدا)
// -------------------------

function toggleBaseDataPanel() {
  const panel = document.getElementById("baseDataPanel");
  panel.classList.toggle("hidden");

  if (!panel.classList.contains("hidden")) {
    renderUsersTable();
    renderExpensesTable();
    renderCentersTable();
  }
}

function renderUsersTable() {
  const tbody = document.getElementById("usersTableBody");
  tbody.innerHTML = "";
  Object.keys(realUsers).forEach(u => {
    const user = realUsers[u];
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td class="border px-3 py-2">${u}</td>
      <td class="border px-3 py-2">${user.center}</td>
      <td class="border px-3 py-2">${user.hazinemojaz}</td>
      <td class="border px-3 py-2 text-center"><input type="checkbox" ${user.multiCenter ? "checked": ""}></td>
    `;
    tbody.appendChild(tr);
  });
}

function renderExpensesTable() {
  const tbody = document.getElementById("expensesTableBody");
  tbody.innerHTML = "";
  Object.keys(expenseCategories).forEach(group => {
    expenseCategories[group].forEach(exp => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td class="border px-3 py-2">${group}</td>
        <td class="border px-3 py-2">${exp}</td>
        <td class="border px-3 py-2 text-center"><input type="checkbox" checked></td>
      `;
      tbody.appendChild(tr);
    });
  });
}

function renderCentersTable() {
  const tbody = document.getElementById("centersTableBody");
  tbody.innerHTML = "";
  let centers = new Set(Object.values(realUsers).map(u=>u.center));
  centers.forEach(c => {
    const tr = document.createElement("tr");
    tr.innerHTML = `<td class="border px-3 py-2">${c}</td><td class="border px-3 py-2">مرکز ${c}</td>`;
    tbody.appendChild(tr);
  });
}

function addExpenseGroup() { alert("ایجاد گروه هزینه جدید (نیاز به توسعه بیشتر)"); }
function addExpenseItem() { alert("ایجاد هزینه جدید (نیاز به توسعه بیشتر)"); }
function addCenter() { alert("ایجاد مرکز جدید (نیاز به توسعه بیشتر)"); }


// -------------------------
// مدیریت اطلاعات پایه
// -------------------------

function renderUsersTable() {
  const tbody = document.getElementById("usersTableBody");
  tbody.innerHTML = "";
  Object.keys(realUsers).forEach(u => {
    const user = realUsers[u];
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td class="border px-3 py-2">${u}</td>
      <td class="border px-3 py-2"><input type="text" value="${user.center}" onchange="realUsers['${u}'].center=this.value"></td>
      <td class="border px-3 py-2"><input type="text" value="${user.hazinemojaz}" onchange="realUsers['${u}'].hazinemojaz=this.value"></td>
      <td class="border px-3 py-2 text-center"><input type="checkbox" ${user.multiCenter ? "checked": ""} onchange="realUsers['${u}'].multiCenter=this.checked"></td>
    `;
    tbody.appendChild(tr);
  });
}

function renderExpensesTable() {
  const tbody = document.getElementById("expensesTableBody");
  tbody.innerHTML = "";
  Object.keys(expenseCategories).forEach(group => {
    expenseCategories[group].forEach(exp => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td class="border px-3 py-2">${group}</td>
        <td class="border px-3 py-2">${exp}</td>
        <td class="border px-3 py-2 text-center"><input type="checkbox" checked></td>
      `;
      tbody.appendChild(tr);
    });
  });
}

function renderCentersTable() {
  const tbody = document.getElementById("centersTableBody");
  tbody.innerHTML = "";
  let centers = new Set(Object.values(realUsers).map(u=>u.center));
  centers.forEach(c => {
    const tr = document.createElement("tr");
    tr.innerHTML = `<td class="border px-3 py-2">${c}</td><td class="border px-3 py-2">مرکز ${c}</td>`;
    tbody.appendChild(tr);
  });
}

function addExpenseGroup() { alert("ایجاد گروه هزینه جدید (نیاز به توسعه بیشتر)"); }
function addExpenseItem() { alert("ایجاد هزینه جدید (نیاز به توسعه بیشتر)"); }
function addCenter() { alert("ایجاد مرکز جدید (نیاز به توسعه بیشتر)"); }

// موقع ورود به پنل مدیریت اطلاعات پایه
function showBaseDataManagement() {
  renderUsersTable();
  renderExpensesTable();
  renderCentersTable();
  alert("مدیریت اطلاعات پایه آماده شد ✅ (جدول‌ها رندر شدند)");
}

  alert("کاربر جدید ثبت شد ✅");
});

// ذخیره مرکز جدید
document.getElementById("createCenterForm")?.addEventListener("submit", e => {
  e.preventDefault();
  const code = document.getElementById("newCenterCode").value;
  const name = document.getElementById("newCenterName").value;
  alert(`مرکز ${name} با کد ${code} ثبت شد ✅`);
});

// دسترسی به کاربر
document.getElementById("userAccessForm")?.addEventListener("submit", e => {
  e.preventDefault();
  const user = document.getElementById("accessUsername").value;
  const expense = document.getElementById("accessExpense").value;
  const center = document.getElementById("accessCenter").value;

  if (realUsers[user]) {
    realUsers[user].hazinemojaz = expense || "F";
    realUsers[user].center = center || realUsers[user].center;
    alert("دسترسی بروزرسانی شد ✅");
  } else {
    alert("کاربر یافت نشد ❌");
  }
});

// ذخیره هزینه جدید
document.getElementById("createExpenseForm")?.addEventListener("submit", e => {
  e.preventDefault();
  const title = document.getElementById("newExpenseTitle").value;
  if (title) {
    expenseCategories[title] = ["S", "F", "TS", "TF"];
    alert("هزینه جدید اضافه شد ✅");
  }
});

        allPettyCashRequests.push(newRequest);
        alert("درخواست جدید با موفقیت ثبت شد.");
    }

    // بستن فرم و آپدیت لیست
    hideNewPettyCashForm();
    loadPettyCashList();
    updatePendingRequestsStats();
});
                    
                    // اضافه کردن ردیف جدید به جدول
                    const tableBody = document.getElementById('pettyCashList');
                    const newRow = document.createElement('tr');
                    newRow.innerHTML = `
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">${requestNumber}</td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">${title}</td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">${totalAmount.toLocaleString()} ریال</td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">${persianDate}</td>
                        <td class="px-6 py-4 whitespace-nowrap">
                            <span class="px-2 py-1 text-xs font-semibold rounded-full bg-yellow-100 text-yellow-800">در انتظار</span>
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            <input type="checkbox" onchange="togglePaymentStatus(${requestNumber}, this.checked)" id="payCheckbox_${requestNumber}">
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm">
                            <button onclick="editRequest(${requestNumber})" class="text-blue-600 hover:text-blue-900" id="editBtn_${requestNumber}">
                                ویرایش
                            </button>
                        </td>
                    `;
                    tableBody.insertBefore(newRow, tableBody.firstChild);
                    
                    // به‌روزرسانی آمار پرداخت نشده
                    updatePendingRequestsStats();
                    
                    // نمایش صفحه پرینت و خلاصه
                    showPrintSummaryPage(requestNumber, title, totalAmount, description, allConfirmedExpenses);
                    
                    // مخفی کردن فرم
                    hideNewPettyCashForm();
            }
        }
        
        // نمایش صفحه پرینت و خلاصه
        function showPrintSummaryPage(requestNumber, title, totalAmount, description, expenses) {
            // مخفی کردن پنل کاربری و نمایش صفحه پرینت
            document.getElementById('userPanel').classList.add('hidden');
            document.getElementById('printSummaryPage').classList.remove('hidden');
            
            // پر کردن اطلاعات صفحه پرینت
            document.getElementById('printRequestNumber').textContent = requestNumber;
            document.getElementById('printUserCode').textContent = currentUser.username;
            document.getElementById('printCenterName').textContent = currentUser.center;
            document.getElementById('printDate').textContent = new Date().toLocaleDateString('fa-IR');
            document.getElementById('printTotalAmount').textContent = totalAmount.toLocaleString() + ' ریال';
            document.getElementById('printDescription').textContent = description || 'بدون توضیحات';
	renderPrintSummaryTable();

            
            // پر کردن نام‌های امضا
            document.getElementById('signaturePettyCashHolder').textContent = currentUser.name;
            document.getElementById('signatureCenterManager').textContent = 'مدیر مرکز ' + currentUser.center;
            
            // پر کردن خلاصه هزینه‌ها
            const expenseDetailsContainer = document.getElementById('printExpenseDetails');
            let summaryHTML = '<div class="mb-6"><h3 class="text-lg font-semibold text-gray-800 mb-3">خلاصه هزینه‌ها:</h3>';
            
            expenses.forEach((categoryData, index) => {
                summaryHTML += `
                    <div class="mb-3 p-3 bg-gray-50 rounded">
                        <p class="font-medium">ردیف ${index + 1}: ${categoryData.category}</p>
                        <p>تعداد آیتم: ${categoryData.expenses.length} | جمع: ${categoryData.total.toLocaleString()} ریال</p>
                        <div class="text-sm mt-2">
                `;
                
                categoryData.expenses.forEach((expense, i) => {
                    if (expense.invoiceAmount) {
                        // برای هزینه‌های تعمیر
                        summaryHTML += `<p>${i+1}. فاکتور: ${expense.invoiceAmount.toLocaleString()} ریال`;
                        if (expense.taxableAmount > 0) {
                            summaryHTML += ` | مشمول: ${expense.taxableAmount.toLocaleString()} ریال`;
                        }
                        if (expense.deduction > 0) {
                            summaryHTML += ` | کسورات: ${expense.deduction.toLocaleString()} ریال`;
                        }
                        summaryHTML += ` | خالص: ${expense.netAmount.toLocaleString()} ریال`;
                    } else {
                        // برای سایر هزینه‌ها
                        summaryHTML += `<p>${i+1}. ${expense.amount.toLocaleString()} ریال`;
                        if (expense.deduction > 0) {
                            summaryHTML += ` - کسورات: ${expense.deduction.toLocaleString()} = ${expense.netAmount.toLocaleString()} ریال`;
                        }
                    }
                    
                    if (expense.note) summaryHTML += ` (${expense.note})`;
                    if (expense.travelCode) summaryHTML += ` - کد سفر: ${expense.travelCode}`;
                    summaryHTML += '</p>';
                });
                
                summaryHTML += `
                        </div>
                    </div>
                `;
            });
            
            summaryHTML += '</div>';
            expenseDetailsContainer.innerHTML = summaryHTML;
        }
        
        // بازگشت به داشبورد کاربری
        function backToUserPanel() {
            document.getElementById('printSummaryPage').classList.add('hidden');
            document.getElementById('userPanel').classList.remove('hidden');
        }
        
        // نمایش پنل مدیریت



    
function showAdminPanel() {
    document.querySelector('.container.mx-auto.px-4.py-8').style.display = 'none';
    document.getElementById('userPanel').classList.add('hidden');
    document.getElementById('printSummaryPage').classList.add('hidden');

    const adminPanel = document.getElementById('adminPanel');
    if (adminPanel) adminPanel.classList.remove('hidden');

    loadAdminPettyCashList();
}

function loadAdminPettyCashList() {
    const tbody = document.getElementById('adminPettyCashList');
    tbody.innerHTML = '';

    allPettyCashRequests.forEach(request => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td class="px-6 py-4">${request.id}</td>
            <td class="px-6 py-4">${request.user}</td>
            <td class="px-6 py-4">${request.center}</td>
            <td class="px-6 py-4">${request.amount.toLocaleString()} ریال</td>
            <td class="px-6 py-4">${request.date}</td>
            <td class="px-6 py-4">${request.status}</td>
            <td class="px-6 py-4">
                <input type="checkbox" ${request.paid ? 'checked' : ''} 
                       onchange="togglePaymentStatus(${request.id}, this.checked)">
            </td>
            <td class="px-6 py-4">
                <button class="text-blue-600 hover:text-blue-900" 
                        onclick="showAdminExpenseDetails(${request.id})">
                    مشاهده ریز
                </button>
            </td>
        `;
        tbody.appendChild(row);
    });
}

function showAdminExpenseDetails(requestId) {
    const request = allPettyCashRequests.find(r => r.id === requestId);
    if (!request) return;

    let detailsHtml = '';
    request.details.expenses.forEach((exp, i) => {
        detailsHtml += `
            <div class="border rounded p-2 mb-2">
                <div class="font-bold mb-2">${exp.category} (جمع: ${exp.total.toLocaleString()} ریال)</div>
                <div class="space-y-1">
                    ${exp.expenses.map((item, j) => {
                        const itemAmount = (item.netAmount ?? item.amount ?? item.invoiceAmount ?? 0);
                        const itemLabelParts = [];
                        if (item.invoiceAmount) itemLabelParts.push('فاکتور: ' + item.invoiceAmount.toLocaleString());
                        if (item.amount) itemLabelParts.push(item.amount.toLocaleString() + ' ریال');
                        if (item.note) itemLabelParts.push(item.note);
                        if (item.travelCode) itemLabelParts.push('کد سفر: ' + item.travelCode);
                        const label = itemLabelParts.join(' - ');
                        return `
                            <div class="flex justify-between items-center py-1">
                                <span class="${item.rejected ? 'line-through text-red-600' : ''}">${label}</span>
                                <button onclick="toggleRejectExpense(${requestId}, ${i}, ${j})"
                                        class="px-2 py-1 text-xs rounded ${item.rejected ? 'bg-red-200' : 'bg-green-200'}">
                                    ${item.rejected ? 'رد شده' : 'قبول'}
                                </button>
                            </div>
                        `;
                    }).join('')}
                </div>
            </div>
        `;
    });

    const modal = document.createElement('div');
    modal.className = "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 fixed-modal";
    modal.innerHTML = `
        <div class="bg-white rounded-lg p-6 w-96 max-h-[80vh] overflow-y-auto">
            <h3 class="text-lg font-bold mb-4">ریز هزینه‌های تنخواه ${requestId}</h3>
            <div class="space-y-2">${detailsHtml}</div>
            <div class="mt-4 flex justify-end">
                <button onclick="this.closest('.fixed-modal').remove()" class="bg-gray-500 text-white px-4 py-2 rounded">بستن</button>
            </div>
        </div>
    `;
    document.body.appendChild(modal);
}

function toggleRejectExpense(requestId, expenseIndex, itemIndex) {
    const request = allPettyCashRequests.find(r => r.id === requestId);
    if (!request) return;

    const item = request.details.expenses[expenseIndex].expenses[itemIndex];
    item.rejected = !item.rejected;

    const exp = request.details.expenses[expenseIndex];
    exp.total = exp.expenses
        .filter(it => !it.rejected)
        .reduce((sum, it) => sum + (it.netAmount ?? it.amount ?? it.invoiceAmount ?? 0), 0);

    request.amount = request.details.expenses
        .reduce((sum, e) => sum + (e.total || 0), 0);

    loadAdminPettyCashList();

    const existingModal = document.querySelector('.fixed-modal');
    if (existingModal) existingModal.remove();
    showAdminExpenseDetails(requestId);
}



// Persistence helpers
function saveToStorage(key, value) { localStorage.setItem(key, JSON.stringify(value)); }
function loadFromStorage(key) { try { const v = localStorage.getItem(key); return v ? JSON.parse(v) : null; } catch(e) { return null; } }

// Default multiCenter list is already declared in file; reuse if available
const DEFAULT_MULTI = (typeof multiCenterUsers !== 'undefined') ? multiCenterUsers : [];

// ===== Users editable table =====
function buildUserRow(userObj) {
    const tr = document.createElement('tr');
    function cell(val){ const td=document.createElement('td'); td.className='border px-2 py-1'; const inp=document.createElement('input'); inp.className='w-full px-2 py-1 border rounded text-sm'; inp.value=val||''; td.appendChild(inp); return {td, inp}; }
    const user = cell(userObj.username||''); const pass = cell(userObj.pass||''); const code = cell(userObj.code||''); const center = cell(userObj.center||''); const name = cell(userObj.name||''); const account = cell(userObj.account||''); const bankcode = cell(userObj.bankCode||''); const total = cell(userObj.total||''); const hazinemojaz = cell(userObj.hazinemojaz||'');
    const multiTd = document.createElement('td'); multiTd.className='border px-2 py-1 text-center'; const multiInp = document.createElement('input'); multiInp.type='checkbox'; multiTd.appendChild(multiInp);
    if(userObj.username && DEFAULT_MULTI.includes(userObj.username)) multiInp.checked = true;
    const opsTd = document.createElement('td'); opsTd.className='border px-2 py-1 text-center'; const del=document.createElement('button'); del.className='bg-red-500 text-white px-2 py-1 rounded text-xs'; del.textContent='حذف'; del.onclick=()=>tr.remove(); opsTd.appendChild(del);
    // Append in order so title appears on the right (RTL)
    tr.appendChild(user.td); tr.appendChild(pass.td); tr.appendChild(code.td); tr.appendChild(center.td); tr.appendChild(name.td); tr.appendChild(account.td); tr.appendChild(bankcode.td); tr.appendChild(total.td); tr.appendChild(hazinemojaz.td); tr.appendChild(multiTd); tr.appendChild(opsTd);
    tr._inputs = { user:user.inp, pass:pass.inp, code:code.inp, center:center.inp, name:name.inp, account:account.inp, bankCode:bankcode.inp, total:total.inp, hazinemojaz:hazinemojaz.inp, multi:multiInp };
    return tr;
}

function loadUsers() {
    const tbody = document.getElementById('usersTableBody');
    if(!tbody) return;
    tbody.innerHTML='';
    const stored = loadFromStorage('usersData');
    if(stored && Array.isArray(stored)) {
        stored.forEach(u=>tbody.appendChild(buildUserRow(u)));
        return;
    }
    // fallback to realUsers defined in page
    if(typeof realUsers === 'object') {
        Object.keys(realUsers).forEach(username => {
            const u = Object.assign({}, realUsers[username], { username: username });
            tbody.appendChild(buildUserRow(u));
        });
        return;
    }
    // otherwise, empty row
    tbody.appendChild(buildUserRow({}));
}

function addUserRow(prefill){ const tbody=document.getElementById('usersTableBody'); if(!tbody) return; const r=buildUserRow(prefill||{}); tbody.appendChild(r); r.scrollIntoView({behavior:'smooth', block:'center'}); }

function saveUsers(){ const tbody=document.getElementById('usersTableBody'); if(!tbody) return; const rows=Array.from(tbody.querySelectorAll('tr')); const users = rows.map(r=>{ const i=r._inputs; return { username:i.user.value.trim(), pass:i.pass.value.trim(), code:i.code.value.trim(), center:i.center.value.trim(), name:i.name.value.trim(), account:i.account.value.trim(), bankCode:i.bankCode.value.trim(), total:i.total.value.trim(), hazinemojaz:i.hazinemojaz.value.trim(), multiCenter: !!i.multi.checked }; }).filter(u=>u.username); saveToStorage('usersData', users); alert('تغییرات کاربران ذخیره شد.'); }

function resetUsers(){ if(confirm('آیا می‌خواهید لیست کاربران از ابتدا بارگذاری شود؟')) { localStorage.removeItem('usersData'); loadUsers(); } }

function exportUsers(){ const data = loadFromStorage('usersData') || []; const blob = new Blob([JSON.stringify(data, null, 2)], {type:'application/json;charset=utf-8'}); const url = URL.createObjectURL(blob); const a = document.createElement('a'); a.href=url; a.download='users_export.json'; document.body.appendChild(a); a.click(); a.remove(); URL.revokeObjectURL(url); }

// ===== Expenses editable table =====
function buildExpenseRow(title, stateObj) {
    const tr = document.createElement('tr');
    const titleTd = document.createElement('td'); titleTd.className='border px-3 py-2 text-right'; const titleInp = document.createElement('input'); titleInp.className='w-full px-2 py-1 border rounded text-sm'; titleInp.value = title || ''; titleTd.appendChild(titleInp);
    function cb(checked){ const td=document.createElement('td'); td.className='border px-3 py-2 text-center'; const inp=document.createElement('input'); inp.type='checkbox'; inp.checked=!!checked; td.appendChild(inp); return {td, inp}; }
    const f = cb(stateObj?.F); const s = cb(stateObj?.S); const tf = cb(stateObj?.TF); const ts = cb(stateObj?.TS);
    tr.appendChild(titleTd); tr.appendChild(f.td); tr.appendChild(s.td); tr.appendChild(tf.td); tr.appendChild(ts.td);
    tr._inputs = { title: titleInp, F: f.inp, S: s.inp, TF: tf.inp, TS: ts.inp };
    return tr;
}

function loadExpenses() {
    const tbody = document.getElementById('expensesTableBody');
    if(!tbody) return;
    tbody.innerHTML='';
    const stored = loadFromStorage('expensesData');
    if(stored && typeof stored === 'object') {
        Object.keys(stored).forEach(title=>tbody.appendChild(buildExpenseRow(title, stored[title])));
        return;
    }
    if(typeof expenseCategories === 'object') {
        Object.keys(expenseCategories).forEach(title => {
            const allowed = expenseCategories[title] || [];
            const state = { F:false, S:false, TF:false, TS:false };
            allowed.forEach(k=>{ state[k] = true; });
            tbody.appendChild(buildExpenseRow(title, state));
        });
        return;
    }
    tbody.appendChild(buildExpenseRow('', {}));
}

function saveExpenses() {
    const tbody = document.getElementById('expensesTableBody');
    if(!tbody) return;
    const rows = Array.from(tbody.querySelectorAll('tr'));
    const out = {};
    rows.forEach(r=>{
        const t = r._inputs.title.value.trim(); if(!t) return;
        out[t] = { F:!!r._inputs.F.checked, S:!!r._inputs.S.checked, TF:!!r._inputs.TF.checked, TS:!!r._inputs.TS.checked };
    });
    saveToStorage('expensesData', out);
    alert('تغییرات هزینه‌ها ذخیره شد.');
}

function resetExpenses(){ if(confirm('آیا می‌خواهید تنظیمات هزینه‌ها بازنشانی شود؟')) { localStorage.removeItem('expensesData'); loadExpenses(); } }

function exportExpenses(){ const data = loadFromStorage('expensesData') || {}; const blob = new Blob([JSON.stringify(data, null, 2)], {type:'application/json;charset=utf-8'}); const url = URL.createObjectURL(blob); const a = document.createElement('a'); a.href=url; a.download='expenses_export.json'; document.body.appendChild(a); a.click(); a.remove(); URL.revokeObjectURL(url); }

// Ensure that when admin tabs are opened the updated loaders run
// showAdminTab in the page should already call loadUsers/loadExpenses; but if not, hook tab buttons
document.addEventListener('DOMContentLoaded', function(){
    // Attach listeners to admin tab buttons if present
    document.querySelectorAll('.admin-tab-btn').forEach(btn=>{
        btn.addEventListener('click', ()=>{
            const id = btn.id; // e.g., 'usersTab'
            if(id === 'usersTab') loadUsers();
            if(id === 'expensesTab') { loadExpenses(); /* also centers */ try { renderCentersTable(); } catch(e) {} }
            if(id === 'requestsTab') try { loadAdminPettyCashList(); } catch(e) {}
        });
    });
    // Preload users/expenses for convenience if admin panel visible
    if(document.getElementById('usersTabContent') && !document.getElementById('usersTableBody').innerHTML) loadUsers();
    if(document.getElementById('expensesTabContent') && !document.getElementById('expensesTableBody').innerHTML) loadExpenses();
});




function showAdminTab(tabId) {
  // همه تب‌ها رو مخفی کن
  document.querySelectorAll(".admin-tab-content").forEach(el => el.classList.add("hidden"));

  // همه دکمه‌ها رو از حالت فعال دربیار
  document.querySelectorAll(".admin-tab-btn").forEach(btn => btn.classList.remove("bg-blue-500","text-white"));

  // تب انتخابی رو نشون بده
  const contentEl = document.getElementById(tabId + "Content");
  if(contentEl) contentEl.classList.remove("hidden");

  // دکمه فعال رو مشخص کن
  const btnEl = document.getElementById(tabId);
  if(btnEl) btnEl.classList.add("bg-blue-500","text-white");

  // بارگذاری داده مخصوص هر تب
  if(tabId === "usersTab") {
    if(typeof loadUsers === "function") loadUsers();
  } else if(tabId === "expensesTab") {
    if(typeof loadExpenses === "function") loadExpenses();
    try { if(typeof renderCentersTable === "function") renderCentersTable(); } catch(e) {}
  } else if(tabId === "requestsTab") {
    try { if(typeof loadAdminPettyCashList === "function") loadAdminPettyCashList(); } catch(e) {}
  }
}