// 配置 Tailwind CSS
tailwind.config = { theme: { extend: { colors: { 'starlux-dark': '#0d1a26', 'starlux-gold': '#d9a74a' } } } }

// --- 核心資料結構 ---
const TITLES = ['Mr.', 'Ms.', 'Mrs.', 'Dr.', 'Prof.'];
const MODES = { ORDER_MODE: 'ORDER MODE', SERVICE_MODE: 'SERVICE MODE' };
const TAGS = {
    'sitc': { icon: 'user', color: 'text-slate-400', label: 'SITC' },
    'titc': { icon: 'mountain', color: 'text-amber-400', label: 'TITC' },
    'aitc': { icon: 'compass', color: 'text-sky-400', label: 'AITC' },
    'ritc': { icon: 'CROWN', color: 'text-amber-400', label: 'RITC' },
   
   
    'vip': { icon: 'crown', color: 'text-yellow-400', label: 'VIP' },
    'birthday': { icon: 'cake', color: 'text-pink-400', label: 'Birthday' },
    'allergic': { icon: 'shield-alert', color: 'text-red-400', label: 'Allergy' },
    'help': { icon: 'hand', color: 'text-blue-400', label: 'Needs Assistance' }
};

// [NEW] ICAO SPML Codes
const ICAO_SPML_CODES = {
    'BBML': 'Baby Meal (BBML)',
    'CHML': 'Child Meal (CHML)',
    'VGML': 'Vegetarian Vegan Meal (VGML)',
    'VJML': 'Vegetarian Jain Meal (VJML)',
    'VOML': 'Vegetarian Oriental Meal (VOML)',
    'VLML': 'Vegetarian Lacto-Ovo Meal (VLML)',
    'RVML': 'Raw Vegetarian Meal (RVML)',
    'AVML': 'Vegetarian Hindu Meal (AVML)',
    'KSML': 'Kosher Meal (KSML)',
    'MOML': 'Muslim Meal (MOML)',
    'HNML': 'Hindu Non-Vegetarian Meal (HNML)',
    'DBML': 'Diabetic Meal (DBML)',
    'LCML': 'Low-Calorie Meal (LCML)',
    'LFML': 'Low-Fat Meal (LFML)',
    'GFML': 'Gluten-Free Meal (GFML)',
    'LSML': 'Low-Sodium Meal (LSML)',
    'NLML': 'Non-Lactose Meal (NLML)',
    'SFML': 'Seafood Meal (SFML)',
    'FPML': 'Fruit Platter Meal (FPML)',
    'KSML': 'Kosher Meal (KSML)',
    'MOML': 'Muslim Meal (MOML)',
    'HNML': 'Hindu Non-Vegetarian Meal (HNML)',
    'OTHER': 'Other (Please Specify)'
};

const MENUS = {
    'TPE-NRT': {
        meal_1: [
            { code: 'MHT1', name: 'Grilled Prime Beef Short Ribs', chinese: '胡同醬燒Prime牛小排', dessert: 'HT-dessert' },
            { code: 'MPK1', name: 'Spiced Roast Pork Shoulder', chinese: '香料烤豬肩義式寬麵', dessert: 'INT dessert' },
            { code:'MFI1', name: 'Seared Halibut w/ Truffle Potatoes', chinese: '炙烤比目魚松露洋芋', dessert: 'INT dessert' },
            { code: 'MBF1', name: 'Wafu Style Braised Beef Strips', chinese: '和風大跟燉牛肉條', dessert: 'ASIAN dessert' },
        ],
        
    },
    'TPE-SIN': {
        meal_1: [
            { code: 'MCK1', name: 'Herb Roasted Pork Shoulder Chop, Fettuccine, Creamy Tomato Caper Sauce', chinese: '香料烤豬肩排、義式燉菜、番茄酸豆奶油醬', dessert: 'INT dessert' },
            { code: 'MSF1', name: 'Grilled Halibut, Truffle Potato, Wild Mushroom Cream Sauce', chinese: '炙烤比目魚、松露洋芋、野菇奶油醬', dessert: 'INT dessert' },
            { code: 'MCF1', name: 'Abalone and Peeled Chili Pepper Chicken Millet Congee', chinese: '鮑魚剝皮辣椒雞粥/小米飯', dessert: 'AS dessert' },
            { code: 'MHT1', name: 'HUTONG Barbeque Prime Beef Short Rib and Chicken Thigh Donburi', chinese: '胡同燒烤 Prime 牛小排與雞腿雙丼', dessert: 'HT dessert' },
        ],
       
    },
    'TPE-HKG': {
        meal_1: [
            { code: 'MPK1', name: 'Spiced Roast Pork Shoulder', chinese: '香料烤豬肩義式寬麵', dessert: 'ONE TRAY SERVICE' },
            { code: 'MFI1', name: 'Seared Halibut w/ Truffle Potatoes', chinese: '炙烤比目魚松露洋芋', dessert: 'ONE TRAY SERVICE' },
            { code: 'MSE1', name: 'STARLUX Edition', chinese: '星宇精選佳餚', dessert: 'ONE TRAY SERVICE' },
        ],
    },
    'TPE-SHI': {
        meal_1: [
            { code: 'MFI1', name: 'Seared Halibut w/ Truffle Potatoes', chinese: '燻鮭魚法式三明治 ', dessert: 'ONE TRAY SERVICE' },
        ],
        
    },
    'TPE-OKA': {
        meal_1: [
            { code: 'MPK1', name: 'Spiced Roast Pork Shoulder', chinese: '香料烤豬肩義式寬麵', dessert: 'ONE TRAY SERVICE' },
            { code: 'MFI1', name: 'Seared Halibut w/ Truffle Potatoes', chinese: '炙烤比目魚松露洋芋', dessert: 'ONE TRAY SERVICE' },
            { code: 'MSE1', name: 'STARLUX Edition', chinese: '星宇精選佳餚', dessert: 'ONE TRAY SERVICE' },
        ],
      
    },
    'TPE-LAX': {
        meal_1: [
            { code: 'LOB1', name: 'Lobster Thermidor', chinese: '法式龍蝦', dessert: 'INT dessert' },
            { code: 'WAG1', name: 'Wagyu Beef Steak', chinese: '和牛牛排', dessert: 'INT dessert' },
            { code: 'SOU1', name: 'Chicken Soup w/ Noodles', chinese: '元盅雞湯麵', dessert: 'AS dessert' },
        ],
        meal_2: [ 
            { code: 'BFN1', name: 'Breakfast Noodle Soup', chinese: '清燉牛肉麵', dessert: 'Breakfast Fruit' },
            { code: 'CRO1', name: 'Croissant w/ Scrambled Eggs', chinese: '可頌佐炒蛋', dessert: 'Breakfast Fruit' },
            { code: 'CON1', name: 'Congee w/ Abalone', chinese: '鮑魚雞肉粥', dessert: 'Breakfast Fruit' },
        ]
    },
    'HKG-TPE': {
        meal_1: [
            { code: 'MSF1', name: 'Pan-Seared Scallop, Dried Scallop Egg White Fried Rice', chinese: '嫩煎干貝、瑤柱蛋白炒飯', dessert: 'ONE TRAY SERVICE' },
            { code: 'MCK1', name: 'Pan Fried Chicken, Truffle Cream Linguine', chinese: '香煎雞腿、奶油松露醬義大利寬麵', dessert: 'ONE TRAY SERVICE' },
            { code: 'MSE1', name: 'STARLUX Edition', chinese: '星宇精選佳餚', dessert: 'ONE TRAY SERVICE' },
        ],
       
    },
};

const AIRCRAFT_CONFIGS = {
    'A321neo': { 
        name: 'Airbus A321neo',
        gridCols: 'grid-template-columns: repeat(2, 1fr) 50px repeat(2, 1fr);',
        rows: ['2', '3'],
        seatMap: {'A': 1, 'C': 2, 'H': 4, 'K': 5 },
        seatLetters: ['A', 'C', 'H', 'K']
    },
    'A330-900neo': {
        name: 'Airbus A330-900neo',
        gridCols: 'grid-template-columns: 1fr 50px 1fr 1fr 50px 1fr;',
        rows: ['2','3','4','5','6','7','8'],
        seatMap: {'A': 1, 'D': 3, 'G': 4, 'K': 6},
        seatLetters: ['A', 'D', 'G', 'K']
    },
    'A350-900': { 
        name: 'Airbus A350-900',
        gridCols: 'grid-template-columns: 1fr 50px 1fr 1fr 50px 1fr;',
        rows: ['2','3','4','5','6','7', '8'],
        seatMap: {'A': 1, 'D': 3, 'G': 4, 'K': 6},
        seatLetters: ['A', 'D', 'G', 'K']
    },
     'A350-1000': {
        name: 'Airbus A350-1000',
        gridCols: 'grid-template-columns: 1fr 50px 1fr 1fr 50px 1fr;',
        rows: ['2','3','4','5','6','7','8', '9', '10', '11'],
        seatMap: {'A': 1, 'D': 3, 'G': 4, 'K': 6},
        seatLetters: ['A', 'D', 'G', 'K']
    },
};

const ROUTES = [
    { id: 'TPE-NRT', name: 'Taipei - NRT/KIX/SDJ/NGO/UKB' },
    { id: 'TPE-SHI', name: 'Taipei - SHI' },
    { id: 'TPE-HKG', name: 'Taipei - HKG/MFM/CRK/MNL' },
    { id: 'TPE-OKA', name: 'Taipei - OKA/FUK/KMJ' },
    { id: 'TPE-LAX', name: 'Taipei - LAX (Long Haul)' },
    { id: 'HKG-TPE', name: 'HKG-TPE' },
        { id: 'TPE-SIN', name:'Taipei-SIN/KUL'},
];

// [MODIFIED] Replaced with user's new BEVERAGE_CATEGORIES
const BEVERAGE_CATEGORIES = {
    'WATER': [
        { full: 'Water', short: 'Water', type: 'ice' },
        { full: 'Sparkling Water', short: 'Spark.', type: 'ice' },
    ],
    'Specialty Cocktails': [
        { full: 'Sci-Fi Cosmos', short: 'Sci-Fi' },
        { full: 'Star Mojito', short: 'Mojito' },
        { full: 'Citrus Mist', short: 'C.Mist' },
        { full: 'Bi Luo Chun Galaxy', short: 'Galaxy' },
    ],
     'Cocktails': [
        { full: 'Screwdriver', short: 'Screwdriver' },
        { full: 'Gin Tonic', short: 'Gin Tonic' },
        { full: 'Martini', short: 'Martini' },
        { full: 'Whiskey Coke', short: 'Whiskey Coke' },
    ],
    'Mocktails (Non-alcoholic)': [
        { full: 'Apple Sparkling', short: 'Apple Sparkling', type:'Juice' },
        { full: 'Peach Sparkling', short: 'Peach Sparkling', type:'Juice' },
        { full: 'Orange Fizz', short: 'Orange Fizz', type:'Juice' },
        { full: 'Green Tea Special', short: 'Green Tea Special', type:'Juice' },
        { full: 'Virgin Mary', short: 'V.Mary' },
    ],
    'Champagne & White Wine': [
        { full: 'Laurent-Perrier La Cuvée', short: 'Champ.' },
        { full: 'Masi Masianco Pinot Grigio (Italy W.W.)', short: 'P.Grigio (Italy W.W.)' },
        { full: 'Albert Bichot Chablis 1er Cru (French W.W. )', short: 'Chablis (French W.W.)' },
    ],
    'Red Wine & Port': [
        { full: 'CHATEAU CROIZET-BAGES 2018(French R.W.)', short: 'F.R.Wine' },
        { full: 'Penfolds Koonunga Hill Shiraz Cabernet (Australian R.W.)', short: 'AUS.R.Wine' },
        { full: 'Dow\'s Fine Tawny Port', short: 'Port' },
    ],
    'Whisky': [
        { full: 'Talisker Storm Single Malt', short: 'Talisker', type: 'whisky' },
        { full: 'Kavalan Classic Single Malt', short: 'Kavalan', type: 'whisky' },
        { full: 'Jack Daniel\'s No.7', short: 'Jack D.', type: 'whisky' },
        { full: 'Mars Maltage "COSMO" Blend Malt Japanese Whisky', short: 'Mars Maltage "COSMO"', type: 'whisky' },
    ],
    'Spirits & Liqueurs': [
        { full: 'Rémy Martin X.O.', short: 'XO' , type: 'whisky'},
        { full: 'Baileys Irish Cream', short: 'Baileys' , type: 'whisky'},
        { full: 'Choya Top Grade Umeshu', short: 'Umeshu', type:'ice' , type: 'whisky'},
        { full: 'Bacardi Rum', short: 'Rum' , type: 'whisky'},
        { full: 'Grey Goose Vodka', short: 'Vodka', type: 'whisky' },
        { full: 'Hendrick\'s Gin', short: 'Gin' , type: 'whisky'},
    ],
    'Beer': [
        { full: 'Mikkeller IPA', short: 'Mikkeller', type: 'juice' },
        { full: 'Taiwan Gold Medal Beer', short: 'TW Beer', type: 'juice' },
        { full: 'Heineken Lager', short: 'Heineken', type: 'juice' },
        { full: 'Asahi Super Dry', short: 'Asahi', type: 'juice' },
    ],
    'Soda & Soft Dr.': [
        { full: 'Coke-Cola', short: 'Coke', type: 'soda_ice' },
        { full: 'Coke-Cola Zero', short: 'Coke Zero', type: 'soda_ice' }, 
        { full: 'Sprite', short: 'Sprite', type: 'soda_ice' },
        { full: 'Ginger Ale', short: 'Ginger Ale', type: 'soda_ice' },
        { full: 'Soda Water', short: 'Soda', type: 'soda_ice' },
        { full: 'Tonic Water', short: 'Tonic', type: 'soda_ice' },
        { full: 'Iced Green Tea', short: 'GT.', type: 'soda_ice' }, 
        { full: 'Calpis Water', short: 'Calpis', type: 'soda_ice' },
    ],
    'Juices & Milks': [
        { full: 'Apple Juice', short: 'AJ', type: 'juice' },
        { full: 'Orange Juice', short: 'OJ', type: 'juice' },
        { full: 'Peach Juice', short: 'PJ', type: 'juice' },
        { full: 'Tomato Juice', short: 'TJ', type: 'juice' },
        { full: 'Carrot Juice (VDS)', short: 'VDS', type: 'juice' },
        { full: 'Cold Brew Juice', short: 'Cold Brew Juice', type: 'Juice' },
        { full: 'Whole Milk', short: 'Milk', type: 'temp' },
        { full: 'Low Fat Milk', short: 'LF-Milk', type: 'temp' }, 
        { full: 'Oat Milk', short: 'Oat Milk', type: 'temp' },
    ],
    'Coffee, Teas & Others': [
        { full: 'Espresso', short: 'Espresso'},
        { full: 'Black Coffee', short: 'Black Coffee', type: 'temp' }, 
        { full: 'Latte', short: 'Latte', type: 'temp' }, 
        { full: 'Cappuccino', short: 'Cappuccino', type: 'temp' },
        { full: 'Decaffeinated Coffee', short: 'Decaff. Coffee', },
        { full: 'Baileys Coffee Latte', short: 'Baileys Latte', type: 'temp' },
        { full: 'Bi Luo Chun Tea', short: 'BLC Tea', type: 'temp' },
        { full: 'Dong Ding Oolong Tea', short: 'Oolong', type: 'temp' },
        { full: 'Sun Moon Assam Black Tea', short: 'Sun Moon Assam', type: 'temp' },
        { full: 'English Breakfast Tea', short: 'Breakfast', type: 'temp' },
        { full: 'Earl Grey Tea', short: 'Earl Grey', type: 'temp' },
        { full: 'Sleepy Tea', short: 'Sleepy Tea', type: 'temp' },
        { full: 'Apple & Elderflower Tea', short: 'Apple Eldr', type: 'temp' },
        { full: 'Hot Chocolate', short: 'Hot Coco' },
    ],
    'STARLUX Limited': [
        { full: 'Boba Tea Latte', short: 'Boba', type: 'soda_ice' },
        { full: 'Hojicha Latte', short: 'Hojicha', type: 'soda_ice' }, 
        { full: 'Hot Red Bean Water', short: 'Red Bean Water',},
    ],
};

const ALL_BEVERAGES = Object.values(BEVERAGE_CATEGORIES).flat();

// [MODIFIED] Added beverages_2
const createInitialOrder = (id) => ({
    id: id, lastName: '', title: 'Mr.', status: 'PENDING', 
    
    // 1st Meal
    mealCode: '', mealName: 'N/A', isSPML: false,
    mealServed: false, mealSkipped: false,
    dessertServed: false, dessertSkipped: false,
    
    // 2nd Meal
    mealCode_2: '', mealName_2: 'N/A', isSPML_2: false,
    mealServed_2: false, mealSkipped_2: false,
    
    beverages: [],
    beverages_2: [], // [NEW] 2nd meal beverages
    
    delayUntil: 0, delayDuration: 0,
    serviceClosed: false,
    remark: '',
    tags: [],
    notificationShown: false,
});

let orders = [];
let mealInventory_1 = {}, mealInventory_2 = {}, flightNumber = '', currentSeatId = null, currentMode = MODES.ORDER_MODE;
let isEditingInventory = false;
let countdownInterval = null, serviceTarget = null, currentServiceItemIndex = null;
let activeMeals_1 = [], activeMeals_2 = [], activeAircraftConfig = {};
let currentRoute = '', audioCtx;
let currentAircraftType = '';
let currentServicePhase = 'MEAL_1'; // 'MEAL_1' or 'MEAL_2'
let currentAisleView = 'ALL'; // [NEW] State for aisle view: 'ALL', 'L_SIDE', 'R_SIDE'
let beverageSummaryDoneState = {}; // [NEW] 紀錄飲料備餐完成狀態


// --- DOM 元素快取 ---
const appElements = {
    serviceModeActions: document.getElementById('service-mode-actions'),
    btnAddBeverage: document.getElementById('btn-add-beverage'),
    seatLayoutContainer: document.getElementById('seat-layout-container'), 
    seatLayout: document.getElementById('seat-layout'), 
    summarySection: document.getElementById('summary-section'),
    orderModal: document.getElementById('order-modal'), closeModalBtn: document.getElementById('close-modal-btn'),
    submitOrderBtn: document.getElementById('submit-order-btn'), modalSeatIdDisplay: document.getElementById('modal-seat-id'),
    mealOptionsContainer: document.getElementById('meal-options-container'),
    beverageOptionsContainer: document.getElementById('beverage-options-container'),
    summaryList: document.getElementById('summary-list'), emptySummaryMessage: document.getElementById('empty-summary-message'),
    inventoryModal: document.getElementById('inventory-modal'), inventoryInputsContainer: document.getElementById('inventory-inputs-container'),
    saveInventoryBtn: document.getElementById('save-inventory-btn'), 
    editInventoryBtn: document.getElementById('edit-inventory-btn'),
    inventoryModalTitle: document.getElementById('inventory-modal-title'), 
    flightNumberInput: document.getElementById('flight-number-input'),
    aircraftSelect: document.getElementById('aircraft-select'),
    routeSelect: document.getElementById('route-select'),
    aircraftDisplay: document.getElementById('aircraft-display'),
    aircraftTypeDisplay: document.getElementById('aircraft-type-display'),
    displayFlightNo: document.getElementById('display-flight-no'), displayMode: document.getElementById('display-mode'),
    modeToggleBtn: document.getElementById('mode-toggle-btn'), controlPanel: document.getElementById('control-panel'),
    lastNameInput: document.getElementById('last-name-input'), titleSelect: document.getElementById('title-select'),
    remarkInput: document.getElementById('remark-input'),
    remarkTagsContainer: document.getElementById('remark-tags-container'),
    serviceStatusRadios: document.querySelectorAll('input[name="service-status"]'), mealBeverageSelection: document.getElementById('meal-beverage-selection'),
    delayTimeInputContainer: document.getElementById('delay-time-input-container'), delayTimeSelect: document.getElementById('delay-time-select'),
    currentTimeDisplay: document.getElementById('current-time-display'), serviceActionModal: document.getElementById('service-action-modal'),
    messageDisplay: document.getElementById('message-display'), endFlightBtn: document.getElementById('end-flight-btn'),
    saveFlightBtn: document.getElementById('save-flight-btn'),
    loadFlightInput: document.getElementById('load-flight-input'),
    passengerInfoSection: document.getElementById('passenger-info-section'), serviceStatusSection: document.getElementById('service-status-section'),
    mealOptionsWrapper: document.getElementById('meal-options-wrapper'), 
    delayActionModal: document.getElementById('delay-action-modal'),
    delayModalSeatId: document.getElementById('delay-modal-seat-id'),
    dndActionModal: document.getElementById('dnd-action-modal'),
    dndModalSeatId: document.getElementById('dnd-modal-seat-id'),
    dessertDisplay: document.getElementById('dessert-display'), dessertType: document.getElementById('dessert-type'),
    closeServiceContainer: document.getElementById('close-service-container'),
    closeServiceBtn: document.getElementById('close-service-btn'),
    spmlSection: document.getElementById('spml-section'),
    spmlCheckbox: document.getElementById('spml-checkbox'),
    spmlInputContainer: document.getElementById('spml-input-container'),
    spmlSelect: document.getElementById('spml-select'),
    spmlInputOther: document.getElementById('spml-input-other'),
    swapSeatsModal: document.getElementById('swap-seats-modal'),
    openSwapModalBtn: document.getElementById('open-swap-modal-btn'),
    cancelSwapBtn: document.getElementById('cancel-swap-btn'),
    confirmSwapBtn: document.getElementById('confirm-swap-btn'),
    swapSeat1: document.getElementById('swap-seat-1'),
    swapSeat2: document.getElementById('swap-seat-2'),
    dueServiceAlertModal: document.getElementById('due-service-alert-modal'),
    dueServiceAlertMessage: document.getElementById('due-service-alert-message'),
    dismissDueServiceAlertBtn: document.getElementById('dismiss-due-service-alert-btn'),
    phaseToggleBtn: document.getElementById('phase-toggle-btn'),
    orderPhaseTabs: document.getElementById('order-phase-tabs'),
    orderTab1: document.getElementById('order-tab-1'),
    orderTab2: document.getElementById('order-tab-2'),
    orderTabContent1: document.getElementById('order-tab-content-1'),
    orderTabContent2: document.getElementById('order-tab-content-2'),
    spmlSection2: document.getElementById('spml-section-2'),
    spmlCheckbox2: document.getElementById('spml-checkbox-2'),
    spmlInputContainer2: document.getElementById('spml-input-container-2'),
    spmlSelect2: document.getElementById('spml-select-2'),
    spmlInputOther2: document.getElementById('spml-input-other-2'),
    mealOptionsWrapper2: document.getElementById('meal-options-wrapper-2'),
    mealOptionsContainer2: document.getElementById('meal-options-container-2'),
    beverageOptionsWrapper: document.getElementById('beverage-options-wrapper'),
    beverageOptionsWrapper2: document.getElementById('beverage-options-wrapper-2'),
    beverageOptionsContainer2: document.getElementById('beverage-options-container-2'),
    // [NEW] Aisle view buttons
    aisleViewControls: document.getElementById('aisle-view-controls'),
    viewLBtn: document.getElementById('view-l-btn'),
    viewAllBtn: document.getElementById('view-all-btn'),
    viewRBtn: document.getElementById('view-r-btn'),
};

// --- 輔助函數 ---
const showMessage = (text, isError = false) => {
    appElements.messageDisplay.textContent = text;
    appElements.messageDisplay.classList.remove('hidden', isError ? 'bg-green-600' : 'bg-red-600');
    appElements.messageDisplay.classList.add(isError ? 'bg-red-600' : 'bg-green-600');
    setTimeout(() => appElements.messageDisplay.classList.add('hidden'), 3000);
};
const getOrder = seatId => orders.find(order => order.id === seatId);
const getMeal1 = code => activeMeals_1.find(m => m.code === code);
const getMeal2 = code => activeMeals_2.find(m => m.code === code);
const getBeverageShort = full => (ALL_BEVERAGES.find(b => b.full === full) || {short: full}).short;

function playNotificationSound() {
    if (!audioCtx) return;
    const oscillator = audioCtx.createOscillator();
    oscillator.type = 'sine';
    oscillator.frequency.setValueAtTime(880, audioCtx.currentTime);
    oscillator.connect(audioCtx.destination);
    oscillator.start();
    oscillator.stop(audioCtx.currentTime + 0.3);
}

function showDueServiceAlert(seatId) {
    appElements.dueServiceAlertMessage.textContent = `Service for seat ${seatId} is now due.`;
    appElements.dueServiceAlertModal.classList.replace('hidden', 'flex');
    lucide.createIcons();
}

// --- 模式切換與倒數計時 ---
function toggleServiceMode() {
    if (currentMode === MODES.ORDER_MODE) {
        currentMode = MODES.SERVICE_MODE;
        currentServicePhase = 'MEAL_1'; // Always reset to Meal 1 when entering service mode
        appElements.modeToggleBtn.textContent = 'Switch to ORDER MODE';
        appElements.displayMode.textContent = 'SERVICE MODE (Meal 1)';
        appElements.displayMode.classList.replace('text-green-400', 'text-red-400');
        appElements.endFlightBtn.classList.remove('hidden');
        
        // Show phase toggle button only if 2nd meal exists
        if (activeMeals_2.length > 0) {
            appElements.phaseToggleBtn.classList.remove('hidden');
            appElements.phaseToggleBtn.textContent = 'Switch to MEAL 2 SERVICE';
        }

        orders.forEach(order => {
            if (order.status === 'DELAYED' && order.delayDuration > 0 && order.delayUntil === 0) {
                order.delayUntil = Date.now() + (order.delayDuration * 60000);
            }
        });
        startCountdown();
        showMessage('Switched to SERVICE MODE (Meal 1)', false);
    } else {
        currentMode = MODES.ORDER_MODE;
        appElements.modeToggleBtn.textContent = 'Switch to SERVICE MODE';
        appElements.displayMode.textContent = MODES.ORDER_MODE;
        appElements.displayMode.classList.replace('text-red-400', 'text-green-400');
        appElements.endFlightBtn.classList.add('hidden');
        appElements.phaseToggleBtn.classList.add('hidden'); // Hide phase button
        stopCountdown();
        showMessage('Switched to ORDER MODE', false);
    }
    renderSeatLayout();
}

function toggleServicePhase() {
    if (currentServicePhase === 'MEAL_1') {
        currentServicePhase = 'MEAL_2';
        appElements.phaseToggleBtn.textContent = 'Switch to MEAL 1 SERVICE';
        appElements.displayMode.textContent = 'SERVICE MODE (Meal 2)';
        showMessage('Switched to Meal 2 Service Phase', false);
    } else {
        currentServicePhase = 'MEAL_1';
        appElements.phaseToggleBtn.textContent = 'Switch to MEAL 2 SERVICE';
        appElements.displayMode.textContent = 'SERVICE MODE (Meal 1)';
        showMessage('Switched to Meal 1 Service Phase', false);
    }
    renderSeatLayout();
}

function startCountdown() {
    if (countdownInterval) clearInterval(countdownInterval);
    countdownInterval = setInterval(renderSeatLayout, 1000);
};
function stopCountdown() {
    if (countdownInterval) { clearInterval(countdownInterval); countdownInterval = null; }
};

// --- [NEW] Aisle View Control Function ---
function setAisleView(view) {
    currentAisleView = view;
    
    // Add/remove class to body to trigger CSS font size changes
    document.body.classList.toggle('aisle-view-active', view !== 'ALL');
    
    // Update button active states
    appElements.viewLBtn.classList.toggle('active', view === 'L_SIDE');
    appElements.viewAllBtn.classList.toggle('active', view === 'ALL');
    appElements.viewRBtn.classList.toggle('active', view === 'R_SIDE');
    
    // Re-render the layout
    renderSeatLayout();
}

// --- 渲染函數 ---
// [MODIFIED] renderSeatLayout (Core logic for aisle filtering)
function renderSeatLayout() {
    appElements.seatLayout.innerHTML = '';
    if (!activeAircraftConfig.rows) return;

    // [NEW] Check if aircraft is wide-body
    const isWideBody = activeAircraftConfig.seatLetters.length > 2;
    const currentFlightAircraftName = activeAircraftConfig.name;

    activeAircraftConfig.rows.forEach(row => {
        const rowContainer = document.createElement('div');
        rowContainer.className = 'grid gap-4 w-full';
        
        // [MODIFICATION 1: START]
        // Adjust grid layout based on view
        if (isWideBody && currentAisleView === 'L_SIDE') {
            // L-Side layout: 1fr (for A), 50px (aisle), 1fr (for D)
            rowContainer.style.cssText = 'grid-template-columns: 1fr 50px 1fr;';
        } else if (isWideBody && currentAisleView === 'R_SIDE') {
            // R-Side layout: 1fr (for G), 50px (aisle), 1fr (for K)
            rowContainer.style.cssText = 'grid-template-columns: 1fr 50px 1fr;';
        } else {
            // Default layout
            rowContainer.style.cssText = activeAircraftConfig.gridCols;
        }
        // [MODIFICATION 1: END]

        activeAircraftConfig.seatLetters.forEach(letter => {
            // [NEW] Filter seats based on aisle view
            if (isWideBody) {
                 if (currentAisleView === 'L_SIDE' && (letter !== 'A' && letter !== 'D')) return;
                 if (currentAisleView === 'R_SIDE' && (letter !== 'G' && letter !== 'K')) return;
            }

            if (currentFlightAircraftName === 'A350-900' && row === '8' && (letter === 'A' || letter === 'K')) {
                return;
            }

            const seatId = `${row}${letter}`;
            const order = getOrder(seatId);
            if(!order) return; 

            const { 
                status, title, lastName, 
                mealCode, mealServed, mealSkipped, isSPML, dessertServed, dessertSkipped,
                mealCode_2, mealServed_2, mealSkipped_2, isSPML_2,
                beverages, beverages_2, // Added beverages_2
                delayUntil, serviceClosed, remark, tags 
            } = order;
            const isOrdered = status === 'ORDERED', isDelayed = status === 'DELAYED', isDND = status === 'DND';
            
            let bgClass = 'bg-gray-700 hover:bg-gray-600 border-gray-600', textClass = 'text-gray-400';
            if (serviceClosed) { bgClass = 'bg-gray-800/80 border-gray-700'; textClass = 'text-gray-500'; }
            else if (isOrdered) { bgClass = 'bg-green-700/80 hover:bg-green-600 border-green-500'; textClass = 'text-gray-100'; }
            else if (isDND) { bgClass = 'bg-red-700/80 hover:bg-red-600 border-red-500'; textClass = 'text-gray-100'; }
            else if (isDelayed) { bgClass = 'bg-blue-700/80 hover:bg-blue-600 border-blue-500'; textClass = 'text-gray-100'; }
            
            const seatCard = document.createElement('div');
            
            // [MODIFICATION 2: START]
            // Set grid column start based on view
            if (isWideBody && currentAisleView === 'L_SIDE') {
                // New layout is: 1(A), 2(aisle), 3(D)
                if (letter === 'A') seatCard.style.gridColumnStart = 1;
                else if (letter === 'D') seatCard.style.gridColumnStart = 3;
            } else if (isWideBody && currentAisleView === 'R_SIDE') {
                // New layout is: 1(G), 2(aisle), 3(K)
                if (letter === 'G') seatCard.style.gridColumnStart = 1;
                else if (letter === 'K') seatCard.style.gridColumnStart = 3;
            } else {
                // Default 'ALL' view
                seatCard.style.gridColumnStart = activeAircraftConfig.seatMap[letter];
            }
            // [MODIFICATION 2: END]

            seatCard.className = `seat-card p-3 rounded-xl text-center shadow-lg border transition-all ${bgClass}`;
            
            const topRow = document.createElement('div');
            topRow.className = 'flex justify-between items-start';

            const seatIdEl = document.createElement('p');
            seatIdEl.className = `text-2xl font-extrabold ${isOrdered || isDelayed || (isDND && (mealCode || mealCode_2)) ? 'text-white' : 'text-amber-300'}`;
            if(serviceClosed) seatIdEl.className += ' text-gray-500';
            seatIdEl.textContent = seatId;
            if(currentMode === MODES.SERVICE_MODE && (isOrdered || isDelayed || isDND)) {
                seatIdEl.style.cursor = 'pointer';
                seatIdEl.onclick = (e) => { e.stopPropagation(); openOrderModal(seatId); };
            }

            const tagsContainer = document.createElement('div');
            tagsContainer.className = 'flex gap-1.5';
            if (tags && tags.length > 0) {
                tags.forEach(tagId => {
                    const tagInfo = TAGS[tagId];
                    if (tagInfo) {
                        tagsContainer.innerHTML += `<i data-lucide="${tagInfo.icon}" class="w-5 h-5 ${tagInfo.color}"></i>`;
                    }
                });
            }

            topRow.appendChild(seatIdEl);
            topRow.appendChild(tagsContainer);
            seatCard.appendChild(topRow);
            
            const passengerEl = document.createElement('p');
            passengerEl.className = `text-base font-bold my-1 h-6 flex items-center justify-center ${textClass}`;
            passengerEl.textContent = `${title} ${lastName || 'N/A'}`;

            seatCard.appendChild(passengerEl);
             if (remark) {
                const remarkEl = document.createElement('p');
                remarkEl.className = 'text-xs text-yellow-300 italic truncate h-4';
                remarkEl.textContent = remark;
                seatCard.appendChild(remarkEl);
            } else {
                const spacer = document.createElement('div');
                spacer.className = 'h-4';
                seatCard.appendChild(spacer);
            }

            if (currentMode === MODES.SERVICE_MODE && status === 'DND') {
                seatCard.onclick = () => openDndActionModal(seatId);
            } else if (currentMode === MODES.SERVICE_MODE && status === 'DELAYED') {
                seatCard.onclick = () => openDelayActionModal(seatId);
            } else {
                seatCard.onclick = () => {
                    if (serviceClosed && currentMode === MODES.SERVICE_MODE) return;
                    openOrderModal(seatId);
                };
            }
            
            const itemsContainer = document.createElement('div');
            itemsContainer.className = 'space-y-1 mt-2';

            if (isDND) {
                itemsContainer.insertAdjacentHTML('beforeend', '<p class="text-lg font-bold text-red-300 mt-1">DND</p>');
            }
            else if (isDelayed) {
                 if (order.delayUntil > 0) {
                    const remainingMs = order.delayUntil - Date.now();
                    
                    if (remainingMs <= 0 && !order.notificationShown) {
                        order.notificationShown = true;
                        playNotificationSound();
                        showDueServiceAlert(order.id);
                    }

                    const timeText = (remainingMs > 0)
                        ? `DELAY: ${Math.floor(remainingMs / 60000)}m ${Math.floor((remainingMs % 60000) / 1000)}s`
                        : 'READY TO SERVE!';
                    const timeColor = (remainingMs > 0) ? 'text-blue-300' : 'text-yellow-300 animate-pulse';
                    itemsContainer.insertAdjacentHTML('beforeend', `<p class="text-lg font-bold mt-1 ${timeColor}">${timeText}</p>`);
                } else { 
                    const delayText = order.delayDuration > 0 ? `DELAY (${order.delayDuration}m)` : 'DELAY (ON REQ)';
                    itemsContainer.insertAdjacentHTML('beforeend', `<p class="text-lg font-bold mt-1 text-blue-300">${delayText}</p>`);
                }
            } 
            
            if ((mealCode || mealCode_2) && (isOrdered || isDelayed || isDND)) {
                const meal = getMeal1(mealCode);
                const isOneTrayService = (meal && meal.dessert === 'ONE TRAY SERVICE') || (isSPML && ['TPE-HKG', 'TPE-SHI', 'TPE-OKA'].includes(currentRoute));

                const isMeal1Done = mealServed || mealSkipped;
                const isMeal2Done = mealServed_2 || mealSkipped_2 || !mealCode_2;
                const pendingBeverages = beverages.filter(b => !b.served && !b.skipped);
                const pendingBeverages_2 = (beverages_2 || []).filter(b => !b.served && !b.skipped); // Added _2
                const allBeveragesDone = pendingBeverages.length === 0;
                const allBeveragesDone_2 = pendingBeverages_2.length === 0; // Added _2
                const isDessertDone = dessertServed || dessertSkipped;
                
                const isFullyStatic = (currentMode === MODES.ORDER_MODE && isOrdered) || (isMeal1Done && isMeal2Done && allBeveragesDone && allBeveragesDone_2 && isDessertDone) || serviceClosed;
                const serviceItemsClickable = currentMode === MODES.SERVICE_MODE && status === 'ORDERED' && !serviceClosed;
                
                if (isFullyStatic) {
                   // Static view (Order Mode or fully completed service)
                    itemsContainer.innerHTML = ''; 
                    if(isDND) itemsContainer.insertAdjacentHTML('beforeend', '<p class="text-lg font-bold text-red-300 mt-1">DND</p>');
                    
                    // Meal 1: 維持 text-base (標準大小)
                    if (mealCode) {
                        itemsContainer.innerHTML += `<div class="text-base font-semibold mt-1 ${textClass} ${mealSkipped ? 'text-yellow-400' : ''} ${mealServed ? 'strikethrough' : ''}">M1: ${mealCode}</div>`;
                    }
                    // Meal 2: 維持 text-base
                    if (mealCode_2) {
                        itemsContainer.innerHTML += `<div class="text-base font-semibold mt-1 ${textClass} ${mealSkipped_2 ? 'text-yellow-400' : ''} ${mealServed_2 ? 'strikethrough' : ''}">M2: ${mealCode_2}</div>`;
                    }

                    // Drinks 1: 改回 text-sm (原本的大小)，保留 DR1 縮寫
                    const allDrinks = beverages.map(b => `<span class="${b.skipped ? 'text-yellow-400' : ''} ${b.served ? 'strikethrough' : ''}">${getBeverageShort(b.name)}${b.style ? `(${b.style})` : ''}</span>`).join(', ');
                    if(beverages.length > 0) itemsContainer.innerHTML += `<div class="text-sm mt-1 ${textClass}">DR1: ${allDrinks || 'None'}</div>`;
                    
                    // Drinks 2: 改回 text-sm，保留 DR2 縮寫
                    const allDrinks_2 = (beverages_2 || []).map(b => `<span class="${b.skipped ? 'text-yellow-400' : ''} ${b.served ? 'strikethrough' : ''}">${getBeverageShort(b.name)}${b.style ? `(${b.style})` : ''}</span>`).join(', ');
                    if(beverages_2 && beverages_2.length > 0) itemsContainer.innerHTML += `<div class="text-sm mt-1 ${textClass}">DR2: ${allDrinks_2 || 'None'}</div>`;
                    
                    // Dessert: 改回 text-sm，保留 Dst 縮寫
                    if (!isOneTrayService && order.mealCode !== 'NO MEAL') {
                        let dessertText;
                        if (isSPML) dessertText = order.mealCode;
                        else dessertText = meal ? meal.dessert : 'N/A';
                        itemsContainer.innerHTML += `<div class="text-sm mt-1 ${textClass} ${dessertSkipped ? 'text-yellow-400' : ''} ${dessertServed ? 'strikethrough' : ''}">Dst: ${dessertText}</div>`;
                    }

               } else { 
                    // [MODIFIED] Service Mode In Progress (Phase-dependent view)
                    // 這裡處理還有項目沒送完的狀態 (如 2K)
                    
                    if (currentServicePhase === 'MEAL_1') {
                        // Show Meal 1, Drinks 1, Dessert
                        if (mealCode && !isMeal1Done) {
                            const el = document.createElement('div');
                            el.className = `text-base font-semibold ${textClass}`;
                            // [修改] Meal 1 -> M1
                            el.innerHTML = `<span class="${serviceItemsClickable ? 'service-item-btn block' : 'block opacity-70'}">M1: ${mealCode}</span>`;
                            if(serviceItemsClickable) el.querySelector('span').onclick = e => handleServiceClick(e, seatId, 'meal_1'); 
                            itemsContainer.appendChild(el);
                        }
                        
                        if (!allBeveragesDone) {
                            pendingBeverages.forEach(bev => {
                                const bevIndex = beverages.findIndex(b => b === bev);
                                const el = document.createElement('div');
                                el.className = `text-sm ${textClass}`; // 維持 text-sm
                                let styleText = bev.style ? `(${bev.style})` : ''; // 去除括號前空格
                                // [修改] Drink 1 -> DR1
                                el.innerHTML = `<span class="${serviceItemsClickable ? 'service-item-btn block' : 'block opacity-70'}">DR1: ${getBeverageShort(bev.name)}${styleText}</span>`;
                                if(serviceItemsClickable) el.querySelector('span').onclick = e => handleServiceClick(e, seatId, 'drink_1', bevIndex);
                                itemsContainer.appendChild(el);
                            });
                        }

                        if (isMeal1Done && allBeveragesDone && !isDessertDone && !isOneTrayService && order.mealCode !== 'NO MEAL') {
                            const el = document.createElement('div');
                            el.className = `text-base font-semibold ${textClass}`; // 維持 text-base
                            let dessertText = ''; // [修改] Dessert -> Dst
                            if (isSPML) dessertText += `${mealCode}`;
                            else if(meal) dessertText += `${meal.dessert}`;
                            // [修改] Label 改為 Dst
                            el.innerHTML = `<span class="${serviceItemsClickable ? 'service-item-btn block' : 'block opacity-70'}">Dst: ${dessertText}</span>`;
                            if(serviceItemsClickable) el.querySelector('span').onclick = e => handleServiceClick(e, seatId, 'dessert');
                            itemsContainer.appendChild(el);
                        }

                    } else { 
                        // Show Meal 2, Drinks 2
                        if (mealCode_2 && !isMeal2Done) {
                            const el = document.createElement('div');
                            el.className = `text-base font-semibold ${textClass}`;
                            // [修改] Meal 2 -> M2
                            el.innerHTML = `<span class="${serviceItemsClickable ? 'service-item-btn block' : 'block opacity-70'}">M2: ${mealCode_2}</span>`;
                            if(serviceItemsClickable) el.querySelector('span').onclick = e => handleServiceClick(e, seatId, 'meal_2'); 
                            itemsContainer.appendChild(el);
                        }
                        
                        if (!allBeveragesDone_2) {
                            pendingBeverages_2.forEach(bev => {
                                const bevIndex = beverages_2.findIndex(b => b === bev);
                                const el = document.createElement('div');
                                el.className = `text-sm ${textClass}`;
                                let styleText = bev.style ? `(${bev.style})` : '';
                                // [修改] Drink 2 -> DR2
                                el.innerHTML = `<span class="${serviceItemsClickable ? 'service-item-btn block' : 'block opacity-70'}">DR2: ${getBeverageShort(bev.name)}${styleText}</span>`;
                                if(serviceItemsClickable) el.querySelector('span').onclick = e => handleServiceClick(e, seatId, 'drink_2', bevIndex);
                                itemsContainer.appendChild(el);
                            });
                        }
                    }
                }
            }
            seatCard.appendChild(itemsContainer);
            rowContainer.appendChild(seatCard);
        });

        // [MODIFICATION 3: START]
        // Conditionally add aisle labels
        if (!isWideBody || currentAisleView === 'ALL') {
            if (activeAircraftConfig.seatLetters.length > 2) {
                 const aisle1 = document.createElement('div');
                 aisle1.className = 'flex items-center justify-center text-xs text-gray-500 italic';
                 aisle1.style.gridColumnStart = 2;
                 rowContainer.appendChild(aisle1);
                 const aisle2 = document.createElement('div');
                 aisle2.className = 'flex items-center justify-center text-xs text-gray-500 italic';
                 aisle2.style.gridColumnStart = 5;
                 rowContainer.appendChild(aisle2);
            } else if (activeAircraftConfig.seatLetters.length > 0) {
                const aisle = document.createElement('div');
                aisle.className = 'flex items-center justify-center text-xs text-gray-500 italic';
                aisle.style.gridColumnStart = 3; 
                rowContainer.appendChild(aisle);
            }
        } else if (isWideBody && (currentAisleView === 'L_SIDE' || currentAisleView === 'R_SIDE')) {
            // L-Side or R-Side view (which use 1fr 50px 1fr layout)
            // Add a single aisle text in column 2
            const aisle = document.createElement('div');
            aisle.className = 'flex items-center justify-center text-xs text-gray-500 italic';
            aisle.style.gridColumnStart = 2; 
            rowContainer.appendChild(aisle);
        }
        // [MODIFICATION 3: END]

        appElements.seatLayout.appendChild(rowContainer);
    });
    lucide.createIcons();
    renderOrderSummaryAggregate();
}

function renderOrderSummaryAggregate() {
    appElements.summaryList.innerHTML = '';
    const mealCounts = {};
    const beverageCounts = {};
    let totalOrderedSeats = 0;
    let seatsWithOrders = new Set();

    // 1. 統計數量
    orders.forEach(order => {
        if (order.status === 'ORDERED' || order.status === 'DELAYED' || order.status === 'DND') {
            if (order.mealCode || order.mealCode_2 || order.beverages.length > 0 || (order.beverages_2 && order.beverages_2.length > 0)) {
                seatsWithOrders.add(order.id);
            }
            
            if (order.mealCode) {
                const mealIdentifier = order.isSPML ? `SPML-1 (${order.mealCode})` : order.mealCode;
                mealCounts[mealIdentifier] = (mealCounts[mealIdentifier] || 0) + 1;
            }
            if (order.mealCode_2) {
                const mealIdentifier = order.isSPML_2 ? `SPML-2 (${order.mealCode_2})` : order.mealCode_2;
                mealCounts[mealIdentifier] = (mealCounts[mealIdentifier] || 0) + 1;
            }

            order.beverages.forEach(bev => {
                beverageCounts[bev.name] = (beverageCounts[bev.name] || 0) + 1;
            });
            if(order.beverages_2) {
                order.beverages_2.forEach(bev => {
                    beverageCounts[bev.name] = (beverageCounts[bev.name] || 0) + 1;
                });
            }
        }
    });
    
    totalOrderedSeats = seatsWithOrders.size;

    if (totalOrderedSeats === 0) {
        appElements.emptySummaryMessage.style.display = 'block';
        return;
    }
    appElements.emptySummaryMessage.style.display = 'none';

    // --- Meals Summary (保持不變) ---
    const mealSummaryDiv = document.createElement('div');
    mealSummaryDiv.className = 'p-3 bg-gray-700 rounded-lg border-l-4 border-amber-500';
    mealSummaryDiv.innerHTML = `<h3 class="font-bold text-lg text-amber-300 mb-2">Meals Summary (${totalOrderedSeats} seats)</h3>`;
    const mealUl = document.createElement('ul');
    mealUl.className = 'space-y-1 text-gray-200 text-sm';
    
    const mealSummaryItems = [];
    if (activeMeals_1.length > 0) mealSummaryItems.push(`<li class="font-semibold text-amber-200 mt-1">1st Meal:</li>`);
    activeMeals_1.forEach(meal => {
        if (mealCounts[meal.code]) {
            mealSummaryItems.push(`<li>${meal.code}: ${mealCounts[meal.code]}</li>`);
            delete mealCounts[meal.code];
        }
    });
    if (activeMeals_2.length > 0) mealSummaryItems.push(`<li class="font-semibold text-amber-200 mt-1">2nd Meal:</li>`);
    activeMeals_2.forEach(meal => {
        if (mealCounts[meal.code]) {
            mealSummaryItems.push(`<li>${meal.code}: ${mealCounts[meal.code]}</li>`);
            delete mealCounts[meal.code];
        }
    });
    if (Object.keys(mealCounts).length > 0) mealSummaryItems.push(`<li class="font-semibold text-amber-200 mt-1">Special/Other:</li>`);
    for (const mealIdentifier in mealCounts) {
        mealSummaryItems.push(`<li>${mealIdentifier}: ${mealCounts[mealIdentifier]}</li>`);
    }
    mealUl.innerHTML = mealSummaryItems.join('');
    mealSummaryDiv.appendChild(mealUl);
    appElements.summaryList.appendChild(mealSummaryDiv);


    // --- Beverages Summary (新增功能：分類排序 + 打勾) ---
    const beverageSummaryDiv = document.createElement('div');
    beverageSummaryDiv.className = 'p-3 bg-gray-700 rounded-lg border-l-4 border-amber-500';
    beverageSummaryDiv.innerHTML = `<h3 class="font-bold text-lg text-amber-300 mb-2">Beverages Summary</h3>`;
    
    const beverageUl = document.createElement('ul');
    beverageUl.className = 'space-y-2 text-gray-200 text-sm';

    // [SORTING LOGIC] 依照 BEVERAGE_CATEGORIES 的原始順序遍歷
    // 這樣 Water 就會因為在設定檔的第一個而排在最上面，其他類別也會被歸類在一起
    for (const [category, items] of Object.entries(BEVERAGE_CATEGORIES)) {
        // 檢查該類別是否有被點到的飲料
        const activeItems = items.filter(b => beverageCounts[b.full]);
        
        if (activeItems.length > 0) {
            // 加入類別標題 (讓分類更清楚)
            const catHeader = document.createElement('li');
            catHeader.className = 'text-xs font-bold text-gray-400 uppercase mt-3 mb-1 border-b border-gray-600 pb-1';
            catHeader.textContent = category;
            beverageUl.appendChild(catHeader);

            // 顯示該類別下的飲料
            activeItems.forEach(b => {
                const count = beverageCounts[b.full];
                const isDone = beverageSummaryDoneState[b.full] || false;
                
                const li = document.createElement('li');
                li.className = 'flex items-center justify-between p-2 rounded hover:bg-gray-600 transition cursor-pointer select-none';
                
                // 根據狀態設定樣式 (打勾 vs 未完成)
                const textClass = isDone ? 'text-gray-500 line-through' : 'text-gray-100 font-medium';
                const iconClass = isDone ? 'text-green-400' : 'text-gray-500';
                const iconName = isDone ? 'check-circle-2' : 'circle';
                const bgClass = isDone ? 'bg-gray-800' : '';

                li.className += ` ${bgClass}`;
                li.innerHTML = `
                    <span class="${textClass}">${b.full}: ${count}</span>
                    <button class="focus:outline-none">
                        <i data-lucide="${iconName}" class="w-5 h-5 ${iconClass}"></i>
                    </button>
                `;

                // 點擊事件：切換狀態
                li.onclick = () => {
                    beverageSummaryDoneState[b.full] = !beverageSummaryDoneState[b.full];
                    renderOrderSummaryAggregate(); // 重新渲染以更新狀態
                    lucide.createIcons();
                };

                beverageUl.appendChild(li);
            });
        }
    }

    beverageSummaryDiv.appendChild(beverageUl);
    appElements.summaryList.appendChild(beverageSummaryDiv);
    
    // 確保圖示重新生成
    setTimeout(() => lucide.createIcons(), 0);
}

// [NEW] Renders a service summary in the modal
function renderServiceSummary(order) {
    let html = '<div class="space-y-3 p-4 bg-gray-50 rounded-lg">';
    html += `<h4 class="text-lg font-semibold text-gray-800">Service Summary for ${order.id}</h4>`;
    
    // Meal 1
    if (order.mealCode) {
        const status = order.mealServed ? 'Served' : (order.mealSkipped ? 'Skipped' : 'Pending');
        html += `<p class="border-b pb-2"><strong>Meal 1:</strong> ${order.mealCode} (<span class="${status === 'Served' ? 'text-green-600' : 'text-yellow-600'}">${status}</span>)</p>`;
    }
    
    // Dessert
    const meal1 = getMeal1(order.mealCode);
    const isOneTray = (meal1 && meal1.dessert === 'ONE TRAY SERVICE') || (order.isSPML && ['TPE-HKG', 'TPE-SHI', 'TPE-OKA'].includes(currentRoute));
    if (!isOneTray && order.mealCode !== 'NO MEAL') {
            const status = order.dessertServed ? 'Served' : (order.dessertSkipped ? 'Skipped' : 'Pending');
            const dessertName = meal1 ? meal1.dessert : (order.isSPML ? 'SPML Dessert' : 'N/A');
            html += `<p class="border-b pb-2"><strong>Dessert:</strong> ${dessertName} (<span class="${status === 'Served' ? 'text-green-600' : 'text-yellow-600'}">${status}</span>)</p>`;
    }

    // Beverages 1
    if (order.beverages.length > 0) {
        html += '<p><strong>Beverages (1st):</strong></p><ul class="list-disc list-inside pl-4 text-sm">';
        order.beverages.forEach(b => {
            const status = b.served ? 'Served' : (b.skipped ? 'Skipped' : 'Pending');
            html += `<li>${b.name}${b.style ? ` (${b.style})` : ''} - <span class="${status === 'Served' ? 'text-green-600' : 'text-yellow-600'}">${status}</span></li>`;
        });
        html += '</ul>';
    }
    
    // Meal 2
    if (order.mealCode_2) {
        const status = order.mealServed_2 ? 'Served' : (order.mealSkipped_2 ? 'Skipped' : 'Pending');
        html += `<p class="border-t pt-2 mt-2"><strong>Meal 2:</strong> ${order.mealCode_2} (<span class="${status === 'Served' ? 'text-green-600' : 'text-yellow-600'}">${status}</span>)</p>`;
    }

    // Beverages 2
    if (order.beverages_2 && order.beverages_2.length > 0) {
        html += '<p><strong>Beverages (2nd):</strong></p><ul class="list-disc list-inside pl-4 text-sm">';
        order.beverages_2.forEach(b => {
            const status = b.served ? 'Served' : (b.skipped ? 'Skipped' : 'Pending');
            html += `<li>${b.name}${b.style ? ` (${b.style})` : ''} - <span class="${status === 'Served' ? 'text-green-6An-600' : 'text-yellow-600'}">${status}</span></li>`;
        });
        html += '</ul>';
    }

    html += '</div>';
    return html;
}

// --- Inventory and Modal Logic (Setup, Open, Close, Submit) ---
function setupInitialSelectors() {
    appElements.aircraftSelect.innerHTML = Object.keys(AIRCRAFT_CONFIGS).map(key => `<option value="${key}">${AIRCRAFT_CONFIGS[key].name}</option>`).join('');
    appElements.routeSelect.innerHTML = ROUTES.map(r => `<option value="${r.id}">${r.name}</option>`).join('');
    
    // [NEW] Populate SPML dropdowns
    const spmlOptions = Object.keys(ICAO_SPML_CODES).map(code => `<option value="${code}">${ICAO_SPML_CODES[code]}</option>`).join('');
    appElements.spmlSelect.innerHTML = spmlOptions;
    appElements.spmlSelect2.innerHTML = spmlOptions;
}

function setupInventoryInputs() {
    const selectedRoute = appElements.routeSelect.value;
    const routeMenus = MENUS[selectedRoute] || { meal_1: [], meal_2: [] };
    
    activeMeals_1 = routeMenus.meal_1 || [];
    activeMeals_2 = routeMenus.meal_2 || [];
    
    appElements.inventoryInputsContainer.innerHTML = '';
    activeMeals_1.forEach(meal => {
        const inventoryItem = document.createElement('div');
        inventoryItem.className = 'flex items-center space-x-3';
        inventoryItem.innerHTML = `
            <label class="w-2/3 text-gray-700 font-medium truncate" title="${meal.name}">${meal.code} - ${meal.chinese}</label>
            <input type="number" id="qty-1-${meal.code}" min="0" value="0" class="w-1/3 p-2 border border-gray-300 rounded-lg text-center">
        `;
        appElements.inventoryInputsContainer.appendChild(inventoryItem);
    });

    const container2 = document.getElementById('inventory-inputs-container-2');
    container2.innerHTML = '';
    if (activeMeals_2.length > 0) {
        activeMeals_2.forEach(meal => {
            const inventoryItem = document.createElement('div');
            inventoryItem.className = 'flex items-center space-x-3';
            inventoryItem.innerHTML = `
                <label class="w-2/3 text-gray-700 font-medium truncate" title="${meal.name}">${meal.code} - ${meal.chinese}</label>
                <input type="number" id="qty-2-${meal.code}" min="0" value="0" class="w-1/3 p-2 border border-gray-300 rounded-lg text-center">
            `;
            container2.appendChild(inventoryItem);
        });
        container2.classList.remove('hidden');
    } else {
        container2.classList.add('hidden');
    }
}

// [MODIFIED] handleSaveInventory
function handleSaveInventory() {
    flightNumber = appElements.flightNumberInput.value.trim().toUpperCase();
    currentAircraftType = appElements.aircraftSelect.value;
    currentRoute = appElements.routeSelect.value;

    if (!flightNumber) { showMessage('Flight Number is required.', true); return; }
    
    activeAircraftConfig = AIRCRAFT_CONFIGS[currentAircraftType];
    const routeMenus = MENUS[currentRoute] || { meal_1: [], meal_2: [] };
    activeMeals_1 = routeMenus.meal_1 || [];
    activeMeals_2 = routeMenus.meal_2 || [];
    
    appElements.aircraftTypeDisplay.textContent = `Business Class Meal & Beverage Selection (${activeAircraftConfig.name})`;

    // [NEW] Show/Hide aisle view controls based on aircraft type
    if (activeAircraftConfig.seatLetters.length > 2) {
        appElements.aisleViewControls.classList.remove('hidden');
    } else {
        appElements.aisleViewControls.classList.add('hidden');
    }
    setAisleView('ALL'); // Reset to 'ALL' view

    let seatIds = [];
    const config = activeAircraftConfig;
    config.rows.forEach(row => {
        config.seatLetters.forEach(letter => {
             if (currentAircraftType === 'A350-900' && row === '8' && (letter === 'A' || letter === 'K')) {
                return; 
            }
            seatIds.push(`${row}${letter}`);
        });
    });
    orders = seatIds.map(createInitialOrder);

    let allValid = true;
    mealInventory_1 = {};
    activeMeals_1.forEach(meal => {
        const input = document.getElementById(`qty-1-${meal.code}`);
        const value = parseInt(input.value, 10);
        if (isNaN(value) || value < 0) allValid = false;
        mealInventory_1[meal.code] = value;
    });
    
    mealInventory_2 = {};
    activeMeals_2.forEach(meal => {
        const input = document.getElementById(`qty-2-${meal.code}`);
        const value = parseInt(input.value, 10);
        if (isNaN(value) || value < 0) allValid = false;
        mealInventory_2[meal.code] = value;
    });

    if (allValid) {
        appElements.displayFlightNo.textContent = flightNumber;
        appElements.inventoryModal.classList.replace('flex', 'hidden');
        if (appElements.editInventoryBtn) appElements.editInventoryBtn.classList.remove('hidden');
        ['seatLayoutContainer', 'summarySection', 'controlPanel'].forEach(el => appElements[el].classList.remove('hidden'));
        if (!audioCtx) {
            try {
                audioCtx = new (window.AudioContext || window.webkitAudioContext)();
            } catch (e) {
                console.error("Web Audio API is not supported in this browser");
            }
        }
        renderSeatLayout();
        showMessage('System ready! Starting in ORDER MODE.', false);
    } else { showMessage("Please ensure all quantities are valid non-negative numbers.", true); }
}

function toggleMealBeverageVisibility() {
    const selectedStatus = document.querySelector('input[name="service-status"]:checked').value;
    const isMealStatus = selectedStatus === 'ORDERED' || selectedStatus === 'DELAYED' || selectedStatus === 'DND';
    appElements.mealBeverageSelection.classList.toggle('hidden', !isMealStatus);
    appElements.delayTimeInputContainer.classList.toggle('hidden', selectedStatus !== 'DELAYED');
}

function setupMealOptions(container, mealList, inventory, radioName, currentMealCode, orderStatus) {
    container.innerHTML = '';
    mealList.forEach(meal => {
        const totalOrdered = orders.filter(o => 
            (radioName === 'meal_1' && o.mealCode === meal.code && (o.status === 'ORDERED' || o.status === 'DELAYED') && !o.isSPML) ||
            (radioName === 'meal_2' && o.mealCode_2 === meal.code && (o.status === 'ORDERED' || o.status === 'DELAYED') && !o.isSPML_2)
        ).length;
        
        const remaining = (inventory[meal.code] || 0) - totalOrdered;
        const isCurrentlySelected = meal.code === currentMealCode;
        const isDisabled = remaining <= 0 && !isCurrentlySelected;
        const label = document.createElement('label');
        label.className = `flex items-center p-3 border rounded-lg transition cursor-pointer shadow-sm ${isDisabled ? 'disabled-option bg-gray-100' : 'hover:bg-gray-50'}`;
        label.innerHTML = `
            <input type="radio" name="${radioName}" value="${meal.code}" class="form-radio h-5 w-5 text-amber-500" ${isDisabled ? 'disabled' : ''}>
            <span class="ml-3 font-medium ${isDisabled ? 'text-gray-500' : 'text-gray-800'}">
                ${meal.code} - ${meal.name} (Qty: <span class="font-bold ${remaining <= 0 && !isCurrentlySelected ? 'text-red-500' : 'text-green-600'}">${remaining}</span>)
                <span class="text-xs text-gray-500 block">(${meal.chinese})</span>
            </span>`;
        container.appendChild(label);
    });

    const noMealLabel = document.createElement('label');
    noMealLabel.className = 'flex items-center p-3 border rounded-lg transition cursor-pointer shadow-sm hover:bg-gray-50';
    noMealLabel.innerHTML = `
        <input type="radio" name="${radioName}" value="NO MEAL" class="form-radio h-5 w-5 text-gray-500">
        <span class="ml-3 font-medium text-gray-800">NO MEAL (不需主餐)</span>
    `;
    container.appendChild(noMealLabel);
    if (currentMealCode === 'NO MEAL') {
        noMealLabel.querySelector('input').checked = true;
    }
    const existingRadio = container.querySelector(`input[name="${radioName}"][value="${currentMealCode}"]`);
    if (existingRadio) {
        existingRadio.checked = true;
    }
}

// [MODIFIED] setupBeverageOptions
function setupBeverageOptions(container, selectedBeverages = [], checkboxName = 'beverage') {
    container.innerHTML = '';
    container.className = 'space-y-4';

    for (const category in BEVERAGE_CATEGORIES) {
        const categoryContainer = document.createElement('div');
        const title = document.createElement('h4');
        title.className = 'font-semibold text-gray-600 border-b pb-1 mb-2';
        title.textContent = category;
        categoryContainer.appendChild(title);
        const itemsGrid = document.createElement('div');
        itemsGrid.className = 'grid grid-cols-2 gap-2';

        BEVERAGE_CATEGORIES[category].forEach(bev => {
            const existing = selectedBeverages.find(b => b.name === bev.full);
            const isChecked = !!existing;
            const container = document.createElement('div');
            
            let content = `<label class="beverage-checkbox-label">
                <input type="checkbox" name="${checkboxName}" value="${bev.full}" class="form-checkbox h-5 w-5 text-amber-600 rounded" ${isChecked ? 'checked' : ''}>
                <span class="ml-2 text-sm text-gray-700">${bev.full}</span>
            </label>`;

            // [MODIFIED] Replaced local const with user's new const
            const styleSelects = {
                        'whisky': { options: ['Neat', 'On the rock', 'Mizuwari'], default: 'Neat'},
                        'ice': { options: ['Normal','With Ice','Warm','Hot','Add Lemon','Ice + Lemon','Warm + Lemon','Hot + Lemon'], default: 'No Ice'},
                        'soda_ice': { options: ['Normal', 'Less Ice', 'No Ice','Ice with Lemon','Less ice with lemon','No ice with lemon'], default: 'Normal'},
                        'temp': { options: ['Hot', 'Iced'], default: 'Hot'},
                        'Juice': { options: ['Normal', 'Ice','Less Ice'], default: 'Normal'},
                        'Sparkling': { options: ['Normal', 'Iced','Add Lemon','Ice + Lemon'], default: 'Normal'},
                    };

            if(bev.type && styleSelects[bev.type]) {
                const style = existing ? existing.style : styleSelects[bev.type].default;
                let optionsHTML = styleSelects[bev.type].options.map(opt => `<option value="${opt}" ${style === opt ? 'selected' : ''}>${opt}</option>`).join('');
                content += `<select class="beverage-style w-full text-xs p-1 border rounded mt-1 ${!isChecked && 'hidden'}" data-beverage-group="${checkboxName}" data-beverage="${bev.full}">${optionsHTML}</select>`;
            } else if (bev.type === 'Juice' && styleSelects['Juice']) { // Handle 'Juice' vs 'juice'
                const style = existing ? existing.style : styleSelects['Juice'].default;
                let optionsHTML = styleSelects['Juice'].options.map(opt => `<option value="${opt}" ${style === opt ? 'selected' : ''}>${opt}</option>`).join('');
                content += `<select class="beverage-style w-full text-xs p-1 border rounded mt-1 ${!isChecked && 'hidden'}" data-beverage-group="${checkboxName}" data-beverage="${bev.full}">${optionsHTML}</select>`;
            }

            container.innerHTML = content;
            itemsGrid.appendChild(container);
        });
        categoryContainer.appendChild(itemsGrid);
        container.appendChild(categoryContainer);
    }
    
    container.querySelectorAll(`input[name="${checkboxName}"]`).forEach(checkbox => {
        const styleSelect = container.querySelector(`.beverage-style[data-beverage-group="${checkboxName}"][data-beverage="${checkbox.value}"]`);
        if(styleSelect) {
            checkbox.addEventListener('change', () => {
                styleSelect.classList.toggle('hidden', !checkbox.checked);
            });
        }
    });
}

// [MODIFIED] openOrderModal
function openOrderModal(seatId) {
    currentSeatId = seatId;
    const order = getOrder(seatId);
    appElements.modalSeatIdDisplay.textContent = seatId;
    appElements.orderModal.classList.replace('hidden', 'flex');
    appElements.orderModal.querySelector('.bg-white').scrollTop = 0;
    
    const show = (el, visible) => el.classList.toggle('hidden', !visible);
    const isLongHaul = activeMeals_2.length > 0;

    // --- [BUG FIX: 請加入這兩行] ---
    // 強制清空容器，防止上一個座位 (如 2K) 的 Service Summary 文字殘留
    appElements.orderTabContent1.innerHTML = '';
    appElements.orderTabContent2.innerHTML = '';
    // --- [BUG FIX 結束] ---

    // Restore elements to their default containers (in case they were moved)
    // This ensures a clean state every time the modal opens
    appElements.orderTabContent1.appendChild(appElements.spmlSection);
    appElements.orderTabContent1.appendChild(appElements.mealOptionsWrapper);
    appElements.orderTabContent1.appendChild(appElements.dessertDisplay);
    appElements.orderTabContent1.appendChild(appElements.beverageOptionsWrapper);
    appElements.orderTabContent2.appendChild(appElements.spmlSection2);
    appElements.orderTabContent2.appendChild(appElements.mealOptionsWrapper2);
    appElements.orderTabContent2.appendChild(appElements.beverageOptionsWrapper2);

    const isFullOrderMode = currentMode === MODES.ORDER_MODE || order.status === 'DND' || order.status === 'PENDING';
    
    const isMeal1Done = order.mealServed || order.mealSkipped;
    const allBeveragesDone = order.beverages.filter(b => !b.served && !b.skipped).length === 0;
    const isDessertDone = order.dessertServed || order.dessertSkipped;
    
    const isMeal2Done = order.mealServed_2 || order.mealSkipped_2 || !isLongHaul;
    const allBeveragesDone_2 = (order.beverages_2 || []).filter(b => !b.served && !b.skipped).length === 0;
    
    const isServiceComplete = isMeal1Done && isMeal2Done && allBeveragesDone && allBeveragesDone_2 && isDessertDone && order.status !== 'PENDING';
    
    show(appElements.passengerInfoSection, isFullOrderMode);
    show(appElements.serviceStatusSection, isFullOrderMode);
    show(appElements.closeServiceContainer, !isFullOrderMode && isServiceComplete && !order.serviceClosed);
    show(appElements.mealBeverageSelection, true);

    if (!isFullOrderMode && isServiceComplete) {
        // Case 1: Service Mode, All Done -> Show Summary & Close Button
        show(appElements.orderPhaseTabs, false);
        show(appElements.orderTabContent1, true);
        appElements.orderTabContent1.innerHTML = renderServiceSummary(order); // Inject summary
        show(appElements.orderTabContent2, false);
        show(appElements.submitOrderBtn, false);

    } else if (!isFullOrderMode && !isServiceComplete) {
        // Case 2: Service Mode (In Progress) -> Show Detail Status Dashboard
        
        // 1. 隱藏分頁籤
        show(appElements.orderPhaseTabs, false);
        
        // 2. 顯示第一頁內容容器 (用來放 Summary)
        show(appElements.orderTabContent1, true);
        show(appElements.orderTabContent2, false);
        
        // 3. 渲染詳細狀態 (Summary)
        appElements.orderTabContent1.innerHTML = renderServiceSummary(order);
        
        // 4. 控制按鈕顯示：隱藏「確認訂單」，顯示「加點飲料」
        show(appElements.submitOrderBtn, false);
        show(appElements.serviceModeActions, true);
        appElements.serviceModeActions.classList.replace('hidden', 'grid'); // 確保是 grid 排版

    } else {
        // ... Case 3 (Order Mode) ...
        // Case 3: Order Mode (or DND/Pending edit) -> Full Order Form
        show(appElements.orderPhaseTabs, isLongHaul);
        appElements.orderTab1.classList.add('active');
        appElements.orderTab2.classList.remove('active');
        show(appElements.orderTabContent1, true);
        show(appElements.orderTabContent2, false);

        appElements.remarkInput.value = order.remark || '';
        
        // --- SPML 1 ---
        appElements.spmlCheckbox.checked = order.isSPML;
        show(appElements.spmlInputContainer, order.isSPML);
        show(appElements.mealOptionsWrapper, !order.isSPML);
        if(order.isSPML) {
            const spmlCode = order.mealCode;
            if(ICAO_SPML_CODES[spmlCode]) {
                appElements.spmlSelect.value = spmlCode;
                show(appElements.spmlInputOther, false);
            } else {
                appElements.spmlSelect.value = 'OTHER';
                appElements.spmlInputOther.value = spmlCode;
                show(appElements.spmlInputOther, true);
            }
        } else {
            appElements.spmlSelect.value = 'AVML'; // Reset
            show(appElements.spmlInputOther, false);
        }

        // --- SPML 2 (Linked) ---
        appElements.spmlCheckbox2.checked = order.isSPML_2;
        show(appElements.spmlInputContainer2, order.isSPML_2);
        show(appElements.mealOptionsWrapper2, !order.isSPML_2);
        if(order.isSPML_2) {
            const spmlCode2 = order.mealCode_2;
            if(ICAO_SPML_CODES[spmlCode2]) {
                appElements.spmlSelect2.value = spmlCode2;
                show(appElements.spmlInputOther2, false);
            } else {
                appElements.spmlSelect2.value = 'OTHER';
                appElements.spmlInputOther2.value = spmlCode2;
                show(appElements.spmlInputOther2, true);
            }
        } else {
            appElements.spmlSelect2.value = 'AVML'; // Reset
            show(appElements.spmlInputOther2, false);
        }
        
        // Sync SPML 1 to 2
        syncSPML(order.isSPML);

        const statusRadio = document.querySelector(`input[name="service-status"][value="${order.status}"]`);
        if (statusRadio) statusRadio.checked = true;
        toggleMealBeverageVisibility();
        appElements.titleSelect.innerHTML = TITLES.map(t => `<option value="${t}">${t}</option>`).join('');
        appElements.titleSelect.value = order.title;
        appElements.lastNameInput.value = order.lastName;
        appElements.delayTimeSelect.value = order.delayDuration || '30';
        
        setupMealOptions(appElements.mealOptionsContainer, activeMeals_1, mealInventory_1, 'meal_1', order.mealCode, order.status);
        setupBeverageOptions(appElements.beverageOptionsContainer, order.beverages, 'beverage_1');

        if (isLongHaul) {
            setupMealOptions(appElements.mealOptionsContainer2, activeMeals_2, mealInventory_2, 'meal_2', order.mealCode_2, order.status);
            setupBeverageOptions(appElements.beverageOptionsContainer2, order.beverages_2, 'beverage_2');
            show(appElements.beverageOptionsWrapper2, true);
        } else {
            show(appElements.beverageOptionsWrapper2, false);
        }

        appElements.remarkTagsContainer.innerHTML = '';
        Object.keys(TAGS).forEach(tagId => {
            const tag = TAGS[tagId];
            const btn = document.createElement('button');
            btn.className = `tag-btn flex items-center gap-1.5 px-3 py-1 border rounded-full text-sm font-medium ${order.tags.includes(tagId) ? 'selected' : 'bg-gray-100'}`;
            btn.dataset.tagId = tagId;
            btn.innerHTML = `<i data-lucide="${tag.icon}" class="w-5 h-5"></i> ${tag.label}`;
            btn.onclick = () => {
                btn.classList.toggle('selected');
                btn.classList.toggle('bg-gray-100');
            };
            appElements.remarkTagsContainer.appendChild(btn);
        });
        lucide.createIcons();
        
        appElements.submitOrderBtn.textContent = 'Confirm Order';
        show(appElements.submitOrderBtn, true);
    }

}

function closeModal() {
    appElements.orderModal.classList.replace('flex', 'hidden');
    currentSeatId = null;
}

// [NEW] Helper function to get SPML code from inputs
function getSPMLCode(selectEl, inputEl) {
    const selected = selectEl.value;
    if (selected === 'OTHER') {
        return inputEl.value.trim().toUpperCase();
    }
    return selected;
}

// [NEW] Helper function to sync SPML 1 to SPML 2
function syncSPML(isSPML) {
    const show = (el, visible) => el.classList.toggle('hidden', !visible);
    
    appElements.spmlCheckbox2.checked = isSPML;
    appElements.spmlCheckbox2.disabled = isSPML;
    
    show(appElements.spmlInputContainer2, isSPML);
    show(appElements.mealOptionsWrapper2, !isSPML);

    if(isSPML) {
        const spmlCode = getSPMLCode(appElements.spmlSelect, appElements.spmlInputOther);
        if(ICAO_SPML_CODES[spmlCode]) {
            appElements.spmlSelect2.value = spmlCode;
            show(appElements.spmlInputOther2, false);
        } else {
            appElements.spmlSelect2.value = 'OTHER';
            appElements.spmlInputOther2.value = spmlCode;
            show(appElements.spmlInputOther2, true);
        }
        appElements.spmlSelect2.disabled = true;
        appElements.spmlInputOther2.disabled = true;
    } else {
        appElements.spmlSelect2.disabled = false;
        appElements.spmlInputOther2.disabled = false;
    }
}

// [MODIFIED] handleSubmitOrder - Refactored to fix SPML/Tab bug
function handleSubmitOrder() {
    const orderToUpdate = getOrder(currentSeatId);
    if (!orderToUpdate) {
        showMessage('Error: No seat selected. Please try again.', true);
        closeModal();
        return;
    }
    
    const isTab1Active = appElements.orderTab1.classList.contains('active');
    const isLongHaul = activeMeals_2.length > 0;
    const isFullOrderMode = appElements.submitOrderBtn.textContent.includes('Confirm');
    const show = (el, visible) => el.classList.toggle('hidden', !visible);

    if (!isFullOrderMode) {
        // Service Mode - Add Beverages
        const phase = currentServicePhase;
        const container = (phase === 'MEAL_1') ? appElements.beverageOptionsContainer : appElements.beverageOptionsContainer2;
        const checkboxName = (phase === 'MEAL_1') ? 'beverage_1' : 'beverage_2';

        const selectedBeverageNodes = container.querySelectorAll(`input[name="${checkboxName}"]:checked`);
        const newBeverages = Array.from(selectedBeverageNodes).map(node => {
            const beverage = { name: node.value, served: false, skipped: false };
            const styleSelect = container.querySelector(`.beverage-style[data-beverage-group="${checkboxName}"][data-beverage="${node.value}"]`);
            if (styleSelect && !styleSelect.classList.contains('hidden')) {
                beverage.style = styleSelect.value;
            }
            return beverage;
        });
        
        if (newBeverages.length === 0) { showMessage('No new beverages selected.', true); return; }
        
        if (phase === 'MEAL_1') {
            orderToUpdate.beverages.push(...newBeverages);
        } else {
            orderToUpdate.beverages_2.push(...newBeverages);
        }
        showMessage(`${newBeverages.length} beverage(s) added for seat ${currentSeatId} (${phase}).`, false);
    
    } else {
        // Order Mode - Confirming Order
        const selectedStatus = document.querySelector('input[name="service-status"]:checked').value;
        const passengerLastName = appElements.lastNameInput.value.trim();
        if (!passengerLastName && selectedStatus !== 'DND' && selectedStatus !== 'PENDING') { 
            showMessage('Passenger Last Name is required.', true); return; 
        }

        // Save universal info (name, status, etc.)
        orderToUpdate.status = selectedStatus;
        orderToUpdate.lastName = passengerLastName;
        orderToUpdate.title = appElements.titleSelect.value;
        orderToUpdate.remark = appElements.remarkInput.value;
        orderToUpdate.tags = Array.from(appElements.remarkTagsContainer.querySelectorAll('.tag-btn.selected')).map(btn => btn.dataset.tagId);
        if (selectedStatus === 'DELAYED') {
            orderToUpdate.delayDuration = parseInt(appElements.delayTimeSelect.value, 10);
            orderToUpdate.notificationShown = false; 
            if(orderToUpdate.delayDuration === 0) orderToUpdate.delayUntil = 0;
        }

        if (selectedStatus === 'ORDERED' || selectedStatus === 'DELAYED' || selectedStatus === 'DND') {
            
            // [FIXED] Unified save logic. Always save data from both tabs.
            
            // --- Save Meal 1 ---
            const isSPML = appElements.spmlCheckbox.checked;
            orderToUpdate.isSPML = isSPML;
            
            if(isSPML) {
                const spmlCode = getSPMLCode(appElements.spmlSelect, appElements.spmlInputOther);
                if(!spmlCode) { showMessage('SPML Code (1st Meal) is required.', true); return; }
                orderToUpdate.mealCode = spmlCode;
                orderToUpdate.mealName = 'Special Meal';
                // [NEW] Auto-set SPML 2
                orderToUpdate.isSPML_2 = true;
                orderToUpdate.mealCode_2 = spmlCode;
                orderToUpdate.mealName_2 = 'Special Meal';

            } else {
                const selectedMealRadio = document.querySelector('input[name="meal_1"]:checked');
                if (selectedMealRadio) {
                    if (selectedMealRadio.value === 'NO MEAL') {
                        orderToUpdate.mealCode = 'NO MEAL'; orderToUpdate.mealName = 'No Meal';
                        orderToUpdate.mealServed = true; orderToUpdate.mealSkipped = true; orderToUpdate.dessertSkipped = true;
                    } else {
                        const mealDetails = getMeal1(selectedMealRadio.value);
                        orderToUpdate.mealCode = selectedMealRadio.value;
                        orderToUpdate.mealName = mealDetails ? mealDetails.name : 'N/A';
                        orderToUpdate.mealServed = false; orderToUpdate.mealSkipped = false; orderToUpdate.dessertSkipped = false;
                    }
                } else if(selectedStatus === 'ORDERED' && !orderToUpdate.mealCode) { // Only default if not set
                    orderToUpdate.mealCode = 'NO MEAL'; orderToUpdate.mealName = 'No Meal';
                    orderToUpdate.mealServed = true; orderToUpdate.mealSkipped = true; orderToUpdate.dessertSkipped = true;
                }
                // [NEW] Unset SPML 2 if Meal 1 is not SPML
                orderToUpdate.isSPML_2 = false;
            }
            
            // --- Save Beverages 1 ---
            const selectedBeverageNodes = appElements.orderModal.querySelectorAll('input[name="beverage_1"]:checked');
            orderToUpdate.beverages = Array.from(selectedBeverageNodes).map(node => {
                const beverage = { name: node.value, served: false, skipped: false };
                const styleSelect = appElements.orderModal.querySelector(`.beverage-style[data-beverage-group="beverage_1"][data-beverage="${node.value}"]`);
                if (styleSelect && !styleSelect.classList.contains('hidden')) {
                    beverage.style = styleSelect.value;
                }
                return beverage;
            });
            
            // --- Save Meal 2 & Beverages 2 (if long haul) ---
            if (isLongHaul) {
                // Save Meal 2 *only if* Meal 1 was not SPML (which auto-sets Meal 2)
                if (!orderToUpdate.isSPML) {
                     const isSPML2 = appElements.spmlCheckbox2.checked;
                     orderToUpdate.isSPML_2 = isSPML2;
                    if(isSPML2) {
                        const spmlCode2 = getSPMLCode(appElements.spmlSelect2, appElements.spmlInputOther2);
                        if(!spmlCode2) { showMessage('SPML Code (2nd Meal) is required.', true); return; }
                        orderToUpdate.mealCode_2 = spmlCode2;
                        orderToUpdate.mealName_2 = 'Special Meal';
                    } else {
                        const selectedMealRadio2 = document.querySelector('input[name="meal_2"]:checked');
                        if (selectedMealRadio2) {
                            if (selectedMealRadio2.value === 'NO MEAL') {
                                orderToUpdate.mealCode_2 = 'NO MEAL'; orderToUpdate.mealName_2 = 'No Meal';
                                orderToUpdate.mealServed_2 = true; orderToUpdate.mealSkipped_2 = true;
                            } else {
                                const mealDetails = getMeal2(selectedMealRadio2.value);
                                orderToUpdate.mealCode_2 = selectedMealRadio2.value;
                                orderToUpdate.mealName_2 = mealDetails ? mealDetails.name : 'N/A';
                                orderToUpdate.mealServed_2 = false; orderToUpdate.mealSkipped_2 = false;
                            }
                        } else if(selectedStatus === 'ORDERED' && !orderToUpdate.mealCode_2) { // Only default if not set
                            orderToUpdate.mealCode_2 = 'NO MEAL'; orderToUpdate.mealName_2 = 'No Meal';
                            orderToUpdate.mealServed_2 = true; orderToUpdate.mealSkipped_2 = true;
                        }
                    }
                }
                
                // Save Beverages 2 (always save this, regardless of SPML)
                const selectedBeverageNodes2 = appElements.orderModal.querySelectorAll('input[name="beverage_2"]:checked');
                orderToUpdate.beverages_2 = Array.from(selectedBeverageNodes2).map(node => {
                    const beverage = { name: node.value, served: false, skipped: false };
                    const styleSelect = appElements.orderModal.querySelector(`.beverage-style[data-beverage-group="beverage_2"][data-beverage="${node.value}"]`);
                    if (styleSelect && !styleSelect.classList.contains('hidden')) {
                        beverage.style = styleSelect.value;
                    }
                    return beverage;
                });
                
                showMessage(`Order for ${currentSeatId} (Meal 1 & 2) confirmed.`, false);

            } else {
                // Not long haul
                showMessage(`Order for ${currentSeatId} confirmed.`, false);
            }
        }
    }
    renderSeatLayout(); 
    
    // Refined modal closing logic
    if (!isFullOrderMode) { // Service mode
        closeModal();
    } else if (isLongHaul && isTab1Active && !orderToUpdate.isSPML) {
       // Order mode, long haul, tab 1, non-SPML -> switch to tab 2
        
        // 1. 切換分頁樣式
        appElements.orderTab1.classList.remove('active');
        appElements.orderTab2.classList.add('active');
        
        // 2. 切換顯示內容
        show(appElements.orderTabContent1, false);
        show(appElements.orderTabContent2, true);
        
        // [新增這行] 強制視窗捲動回到最上方 (表頭)
        appElements.orderModal.querySelector('.bg-white').scrollTop = 0;
    } else {
        // All other cases (order mode short haul, or tab 2, or SPML) -> close
        closeModal();
    }
}

// --- Service & Delay Action Logic ---
function handleServiceClick(event, seatId, itemType, itemIndex = null) {
    event.stopPropagation();
    currentSeatId = seatId; serviceTarget = itemType; currentServiceItemIndex = itemIndex;
    const rect = event.currentTarget.getBoundingClientRect();
    Object.assign(appElements.serviceActionModal.style, { 
        top: `${window.scrollY + rect.bottom + 5}px`, 
        left: `${window.scrollX + rect.left}px`
    });
    appElements.serviceActionModal.classList.remove('hidden');
    document.addEventListener('click', () => appElements.serviceActionModal.classList.add('hidden'), { once: true });
}

// [NEW] 負責將畫面從「狀態檢視」切換成「加點飲料模式」
function renderServiceBeverageMenu() {
    const isLongHaul = activeMeals_2.length > 0;
    const show = (el, visible) => el.classList.toggle('hidden', !visible);
    
    // 隱藏狀態按鈕，顯示確認按鈕
    show(appElements.serviceModeActions, false);
    show(appElements.submitOrderBtn, true);
    appElements.submitOrderBtn.textContent = 'Add Beverage(s)';

    // 依照目前的 Phase 顯示對應內容 (無分頁)
    show(appElements.orderPhaseTabs, false);

    if (currentServicePhase === 'MEAL_1') {
        show(appElements.orderTabContent1, true);
        show(appElements.orderTabContent2, false);
    } else {
        show(appElements.orderTabContent1, false);
        show(appElements.orderTabContent2, true);
    }

    // 清空並重建飲料選單
    appElements.orderTabContent1.innerHTML = '';
    appElements.orderTabContent1.appendChild(appElements.beverageOptionsWrapper);
    appElements.orderTabContent2.innerHTML = '';
    appElements.orderTabContent2.appendChild(appElements.beverageOptionsWrapper2);

    setupBeverageOptions(appElements.beverageOptionsContainer, [], 'beverage_1');
    setupBeverageOptions(appElements.beverageOptionsContainer2, [], 'beverage_2');
    
    // 只顯示飲料區塊
    show(appElements.spmlSection, false); show(appElements.mealOptionsWrapper, false); show(appElements.dessertDisplay, false); show(appElements.beverageOptionsWrapper, true);
    show(appElements.spmlSection2, false); show(appElements.mealOptionsWrapper2, false); show(appElements.beverageOptionsWrapper2, true);
}

// [MODIFIED] handleServiceAction
function handleServiceAction(action) {
    const order = getOrder(currentSeatId);
    if (!order) return;
    appElements.serviceActionModal.classList.add('hidden');
    
    if (action === 'Served' || action === 'Skip') {
        if (serviceTarget === 'meal_1') {
            order.mealServed = action === 'Served';
            order.mealSkipped = action === 'Skip';
            const meal = getMeal1(order.mealCode);
            const isOneTrayService = (meal && meal.dessert === 'ONE TRAY SERVICE') || (order.isSPML && ['TPE-HKG', 'TPE-SHI', 'TPE-OKA'].includes(currentRoute));
            if (isOneTrayService) {
                order.dessertServed = action === 'Served';
                order.dessertSkipped = action === 'Skip';
            }
        } else if (serviceTarget === 'meal_2') {
            order.mealServed_2 = action === 'Served';
            order.mealSkipped_2 = action === 'Skip';
        } else if (serviceTarget === 'drink_1' && currentServiceItemIndex !== null) {
            order.beverages[currentServiceItemIndex].served = action === 'Served';
            order.beverages[currentServiceItemIndex].skipped = action === 'Skip';
        } else if (serviceTarget === 'drink_2' && currentServiceItemIndex !== null) {
            order.beverages_2[currentServiceItemIndex].served = action === 'Served';
            order.beverages_2[currentServiceItemIndex].skipped = action === 'Skip';
        } else if (serviceTarget === 'dessert') {
            order.dessertServed = action === 'Served';
            order.dessertSkipped = action === 'Skip';
        }
    } else if (action === 'Cancel') {
         if (serviceTarget === 'meal_1') {
            // Cancel Meal 1 (resets whole order for simplicity)
            const lastName = order.lastName, title = order.title;
            Object.assign(order, createInitialOrder(order.id), { lastName, title });
            showMessage(`Order for ${order.id} has been Cancelled.`, false);
            if (currentMode === MODES.SERVICE_MODE) setTimeout(() => openOrderModal(order.id), 100);
         } else if (serviceTarget === 'meal_2') {
            // Cancel Meal 2
            order.mealCode_2 = ''; order.mealName_2 = 'N/A';
            order.isSPML_2 = false;
            order.mealServed_2 = false; order.mealSkipped_2 = false;
            showMessage(`2nd Meal for ${order.id} has been removed.`, false);
         } else if (serviceTarget === 'drink_1' && currentServiceItemIndex !== null) {
            order.beverages.splice(currentServiceItemIndex, 1);
            showMessage(`Beverage (1st) for ${order.id} has been removed.`, false);
         } else if (serviceTarget === 'drink_2' && currentServiceItemIndex !== null) {
            order.beverages_2.splice(currentServiceItemIndex, 1);
            showMessage(`Beverage (2nd) for ${order.id} has been removed.`, false);
         }
    }
    showMessage(`${order.id}'s ${serviceTarget} marked as ${action}.`, false);
    renderSeatLayout();
}

function handleCloseService() {
    const order = getOrder(currentSeatId);
    if (order) {
        order.serviceClosed = true;
        showMessage(`Service for seat ${currentSeatId} has been closed.`, false);
    }
    closeModal();
    renderSeatLayout();
}

function openDelayActionModal(seatId) {
    currentSeatId = seatId;
    appElements.delayModalSeatId.textContent = seatId;
    appElements.delayActionModal.classList.replace('hidden', 'flex');
}
function closeDelayActionModal() {
    appElements.delayActionModal.classList.replace('flex', 'hidden');
    currentSeatId = null;
}
function handleDelayAction(action, value = 0) {
    const order = getOrder(currentSeatId);
    if (!order) return;
    if (action === 'start_now') {
        order.status = 'ORDERED';
        order.delayUntil = 0;
        order.delayDuration = 0;
        showMessage(`Service for seat ${order.id} will start now.`, false);
    } else if (action === 'delay') {
        order.delayUntil = Date.now() + (value * 60000);
        order.notificationShown = false;
        showMessage(`Service for seat ${order.id} delayed by ${value} minutes.`, false);
    }
    closeDelayActionModal();
    renderSeatLayout();
}

function openDndActionModal(seatId) {
    currentSeatId = seatId;
    appElements.dndModalSeatId.textContent = seatId;
    appElements.dndActionModal.classList.replace('hidden', 'flex');
}
function closeDndActionModal() {
    appElements.dndActionModal.classList.replace('flex', 'hidden');
    currentSeatId = null;
}
function handleDndAction(action) {
    const order = getOrder(currentSeatId);
    if (!order) {
        closeDndActionModal();
        return;
    }
    if (action === 'start_service') {
        order.status = 'ORDERED';
        showMessage(`Service for seat ${order.id} will start now (DND cancelled).`, false);
        renderSeatLayout();
        closeDndActionModal();
    } else if (action === 'edit_order') {
        appElements.dndActionModal.classList.replace('flex', 'hidden'); 
        openOrderModal(order.id);
    } else if (action === 'close') {
        closeDndActionModal();
    }
}

function openSwapModal() {
    const seatOptions = orders.map(o => `<option value="${o.id}">${o.id}</option>`).join('');
    appElements.swapSeat1.innerHTML = seatOptions;
    appElements.swapSeat2.innerHTML = seatOptions;
    appElements.swapSeatsModal.classList.replace('hidden', 'flex');
}

function closeSwapModal() {
     appElements.swapSeatsModal.classList.replace('flex', 'hidden');
}

function handleSwapSeats() {
    const seatId1 = appElements.swapSeat1.value;
    const seatId2 = appElements.swapSeat2.value;
    if(seatId1 === seatId2) {
        showMessage('Please select two different seats to swap.', true);
        return;
    }
    const order1 = getOrder(seatId1);
    const order2 = getOrder(seatId2);
    
    const tempOrder = {...order1, id: 'temp'};
    Object.assign(order1, {...order2, id: seatId1 });
    Object.assign(order2, {...tempOrder, id: seatId2 });

    showMessage(`Seats ${seatId1} and ${seatId2} have been swapped.`, false);
    closeSwapModal();
    renderSeatLayout();
}

// --- Save/Load and Reporting Functions ---
function handleSaveFlight() {
    const flightData = {
        flightNumber,
        currentAircraftType,
        activeAircraftConfig,
        currentRoute,
        mealInventory_1,
        mealInventory_2,
        orders
    };
    const jsonString = JSON.stringify(flightData, null, 2);
    const blob = new Blob([jsonString], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `starlux-flight-${flightNumber}-${new Date().toISOString().slice(0, 10)}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    showMessage('Flight data saved!', false);
}

// [MODIFIED] handleLoadFlight
function handleLoadFlight(event) {
    const file = event.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = function(e) {
        try {
            const loadedData = JSON.parse(e.target.result);
            
            flightNumber = loadedData.flightNumber;
            currentAircraftType = loadedData.currentAircraftType;
            activeAircraftConfig = loadedData.activeAircraftConfig;
            currentRoute = loadedData.currentRoute;
            mealInventory_1 = loadedData.mealInventory_1 || loadedData.mealInventory || {}; 
            mealInventory_2 = loadedData.mealInventory_2 || {};
            orders = loadedData.orders;
            
            // [NEW] Ensure loaded orders have the new beverages_2 array
            orders.forEach(order => {
                if (!order.beverages_2) {
                    order.beverages_2 = [];
                }
            });
            
            const routeMenus = MENUS[currentRoute] || { meal_1: [], meal_2: [] };
            activeMeals_1 = routeMenus.meal_1 || [];
            activeMeals_2 = routeMenus.meal_2 || [];
            
            appElements.displayFlightNo.textContent = flightNumber;
            appElements.aircraftTypeDisplay.textContent = `Business Class Meal & Beverage Selection (${activeAircraftConfig.name})`;
            appElements.inventoryModal.classList.replace('flex', 'hidden');
        if (appElements.editInventoryBtn) appElements.editInventoryBtn.classList.remove('hidden');
            ['seatLayoutContainer', 'summarySection', 'controlPanel'].forEach(el => appElements[el].classList.remove('hidden'));
            
            // [NEW] Show/Hide aisle view controls based on loaded aircraft type
            if (activeAircraftConfig.seatLetters.length > 2) {
                appElements.aisleViewControls.classList.remove('hidden');
            } else {
                appElements.aisleViewControls.classList.add('hidden');
            }
            setAisleView('ALL'); // Reset to 'ALL' view
            
            renderSeatLayout();
            showMessage('Flight data loaded successfully!', false);
        } catch (err) {
            console.error("Failed to load flight data:", err);
            showMessage('Error reading or parsing file. Please ensure it is a valid flight data file.', true);
        }
    };
    reader.readAsText(file);
    event.target.value = ''; // Reset file input
}

function generatePDFReport() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    const today = new Date().toLocaleDateString();

    doc.setFontSize(22);
    doc.text("STARLUX Business Class Service Report", 105, 20, { align: "center" });
    doc.setFontSize(16);
    doc.text(`Flight: ${flightNumber}`, 105, 40, { align: "center" });
    doc.text(`Aircraft: ${activeAircraftConfig.name}`, 105, 50, { align: "center" });
    doc.text(`Date: ${today}`, 105, 60, { align: "center" });

    doc.addPage();
    doc.setFontSize(18);
    doc.text("Meal Summary", 14, 22);
    
    const mealCounts = {};
     orders.forEach(order => {
        if (order.status !== 'PENDING') {
           if (order.mealCode) {
                const id = order.isSPML ? `SPML-1 (${order.mealCode})` : order.mealCode;
                mealCounts[id] = (mealCounts[id] || 0) + 1;
            }
            if (order.mealCode_2) {
                const id = order.isSPML_2 ? `SPML-2 (${order.mealCode_2})` : order.mealCode_2;
                mealCounts[id] = (mealCounts[id] || 0) + 1;
            }
        }
    });

    let yPos = 35;
    doc.setFontSize(12);
    doc.text("Meal Code", 14, yPos);
    doc.text("Initial", 80, yPos);
    doc.text("Ordered", 110, yPos);
    doc.text("Remaining", 140, yPos);
    yPos += 10;
    
    if (activeMeals_1.length > 0) {
        doc.setFontSize(14);
        doc.text("1st Meal Service", 14, yPos);
        yPos += 7;
        doc.setFontSize(12);
        activeMeals_1.forEach(meal => {
            const ordered = mealCounts[meal.code] || 0;
            const initial = mealInventory_1[meal.code] || 0;
            doc.text(meal.code, 14, yPos);
            doc.text(initial.toString(), 80, yPos);
            doc.text(ordered.toString(), 110, yPos);
            doc.text((initial - ordered).toString(), 140, yPos);
            yPos += 7;
            delete mealCounts[meal.code];
        });
    }

    if (activeMeals_2.length > 0) {
        yPos += 5;
        doc.setFontSize(14);
        doc.text("2nd Meal Service", 14, yPos);
        yPos += 7;
        doc.setFontSize(12);
        activeMeals_2.forEach(meal => {
            const ordered = mealCounts[meal.code] || 0;
            const initial = mealInventory_2[meal.code] || 0;
            doc.text(meal.code, 14, yPos);
            doc.text(initial.toString(), 80, yPos);
            doc.text(ordered.toString(), 110, yPos);
            doc.text((initial - ordered).toString(), 140, yPos);
            yPos += 7;
            delete mealCounts[meal.code];
        });
    }
    
    yPos += 5;
    doc.setFontSize(14);
    doc.text("Special Meals (SPML)", 14, yPos);
    yPos += 7;
    doc.setFontSize(12);
     Object.keys(mealCounts).filter(k => k.startsWith('SPML')).forEach(spmlCode => {
        doc.text(spmlCode, 14, yPos);
        doc.text("N/A", 80, yPos);
        doc.text(mealCounts[spmlCode].toString(), 110, yPos);
        doc.text("N/A", 140, yPos);
        yPos += 7;
     });

    if (yPos > 240) { doc.addPage(); yPos = 20; }
    yPos += 10;
    doc.setFontSize(18);
    doc.text("Beverage Summary", 14, yPos);
    yPos += 10;
    doc.setFontSize(12);

    const beverageCounts = {};
    orders.forEach(o => {
        o.beverages.forEach(b => beverageCounts[b.name] = (beverageCounts[b.name] || 0) + 1)
        if(o.beverages_2) o.beverages_2.forEach(b => beverageCounts[b.name] = (beverageCounts[b.name] || 0) + 1)
    });
    Object.keys(beverageCounts).forEach(bevName => {
        doc.text(`${bevName}: ${beverageCounts[bevName]}`, 14, yPos);
        yPos += 7;
        if (yPos > 280) { doc.addPage(); yPos = 20; }
    });

    doc.addPage();
    doc.setFontSize(18);
    doc.text("Special Remarks & Tags", 14, 22);
    yPos = 30;
    doc.setFontSize(12);

    orders.filter(o => o.remark || o.tags.length > 0).forEach(order => {
        const tagsText = order.tags.map(tId => TAGS[tId].label).join(', ');
        doc.text(`Seat ${order.id} (${order.lastName || 'N/A'}):`, 14, yPos);
        yPos += 7;
        if (tagsText) {
            doc.text(`  Tags: ${tagsText}`, 20, yPos);
            yPos += 7;
        }
        if (order.remark) {
            doc.text(`  Remark: ${order.remark}`, 20, yPos);
            yPos += 7;
        }
        yPos += 3; 
        if (yPos > 280) { doc.addPage(); yPos = 20; }
    });
    
    doc.save(`Flight-Report-${flightNumber}-${today}.pdf`);
}

function resetSystem() {
    location.reload();
}

async function handleEndOfFlight() {
    showMessage('Generating PDF report...', false);
    try {
        generatePDFReport();
    } catch(e) {
        console.error("PDF generation failed:", e);
        showMessage('Error generating PDF report.', true);
    }
    setTimeout(resetSystem, 1000);
}

function updateClock() {
    appElements.currentTimeDisplay.textContent = new Date().toLocaleString('en-US', {
        weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', 
        hour: 'numeric', minute: 'numeric', timeZoneName: 'short'
    });
}

// [NEW] SPML Input Listeners
function setupSPMLListeners() {
    const show = (el, visible) => el.classList.toggle('hidden', !visible);

    appElements.spmlCheckbox.addEventListener('change', () => {
        const isChecked = appElements.spmlCheckbox.checked;
        show(appElements.spmlInputContainer, isChecked);
        show(appElements.mealOptionsWrapper, !isChecked);
        if(!isChecked) show(appElements.spmlInputOther, false);
        syncSPML(isChecked);
    });
    
    appElements.spmlSelect.addEventListener('change', () => {
        const isOther = appElements.spmlSelect.value === 'OTHER';
        show(appElements.spmlInputOther, isOther);
        syncSPML(appElements.spmlCheckbox.checked);
    });

    appElements.spmlInputOther.addEventListener('input', () => {
         syncSPML(appElements.spmlCheckbox.checked);
    });
    
    // Listeners for SPML 2 (in case SPML 1 is unchecked)
     appElements.spmlCheckbox2.addEventListener('change', () => {
        const isChecked = appElements.spmlCheckbox2.checked;
        show(appElements.spmlInputContainer2, isChecked);
        show(appElements.mealOptionsWrapper2, !isChecked);
        if(!isChecked) show(appElements.spmlInputOther2, false);
    });
    
    appElements.spmlSelect2.addEventListener('change', () => {
        const isOther = appElements.spmlSelect2.value === 'OTHER';
        show(appElements.spmlInputOther2, isOther);
    });
}

// [MODIFIED] init

// --- [NEW] Edit Inventory Feature ---
function openEditInventory() {
    // Ensure there is an active flight
    if (!flightNumber || !activeAircraftConfig || !currentRoute) {
        showMessage('Please finish Setup first before editing inventory.', true);
        return;
    }
    isEditingInventory = true;
    // Pre-fill selectors and lock them
    appElements.flightNumberInput.value = flightNumber;
    appElements.aircraftSelect.value = currentAircraftType;
    appElements.routeSelect.value = currentRoute;
    appElements.flightNumberInput.disabled = true;
    appElements.aircraftSelect.disabled = true;
    appElements.routeSelect.disabled = true;

    // Adjust modal titles/buttons
    if (appElements.inventoryModalTitle) appElements.inventoryModalTitle.textContent = 'Edit Meal Inventory';
    appElements.saveInventoryBtn.textContent = 'Save Inventory';
    appElements.saveInventoryBtn.dataset.mode = 'edit';

    // Build inputs using current inventories
    setupInventoryInputs();

    // Show modal
    appElements.inventoryModal.classList.replace('hidden', 'flex');
}

function handleSaveInventoryEdit() {
    // Read values from inputs and update mealInventory_1/_2 only
    let allValid = true;
    const routeMenus = MENUS[currentRoute] || { meal_1: [], meal_2: [] };
    activeMeals_1 = routeMenus.meal_1 || [];
    activeMeals_2 = routeMenus.meal_2 || [];

    const inv1 = {};
    activeMeals_1.forEach(meal => {
        const input = document.getElementById(`qty-1-${meal.code}`);
        const value = parseInt(input && input.value, 10);
        if (isNaN(value) || value < 0) allValid = false;
        inv1[meal.code] = value || 0;
    });
    const inv2 = {};
    activeMeals_2.forEach(meal => {
        const input = document.getElementById(`qty-2-${meal.code}`);
        const value = parseInt(input && input.value, 10);
        if (isNaN(value) || value < 0) allValid = false;
        inv2[meal.code] = value || 0;
    });

    if (!allValid) { showMessage('Please ensure all quantities are valid non-negative numbers.', true); return; }

    mealInventory_1 = inv1;
    mealInventory_2 = inv2;

    // Refresh UI
    renderSeatLayout();
    if (!appElements.orderModal.classList.contains('hidden') && currentSeatId) {
        openOrderModal(currentSeatId);
    }
    showMessage('Inventory updated.', false);

    // Close modal and restore controls/button texts
    appElements.inventoryModal.classList.replace('flex', 'hidden');
        if (appElements.editInventoryBtn) appElements.editInventoryBtn.classList.remove('hidden');
    appElements.flightNumberInput.disabled = false;
    appElements.aircraftSelect.disabled = false;
    appElements.routeSelect.disabled = false;
    if (appElements.inventoryModalTitle) appElements.inventoryModalTitle.textContent = 'Setup Flight & Meal Inventory';
    appElements.saveInventoryBtn.textContent = 'Confirm Setup';
    appElements.saveInventoryBtn.dataset.mode = '';
    isEditingInventory = false;
}

function init() {
    setupInitialSelectors();
    setupInventoryInputs();
    setupSPMLListeners(); // [NEW] Add SPML listeners
    appElements.btnAddBeverage.addEventListener('click', renderServiceBeverageMenu);
    appElements.routeSelect.addEventListener('change', setupInventoryInputs);
    appElements.aircraftSelect.addEventListener('change', ()=>{});
    appElements.saveInventoryBtn.addEventListener('click', (e) => {
        if (appElements.saveInventoryBtn.dataset.mode === 'edit') { handleSaveInventoryEdit(); } else { handleSaveInventory(); }
    });
    appElements.loadFlightInput.addEventListener('change', handleLoadFlight);
    if (appElements.editInventoryBtn) appElements.editInventoryBtn.addEventListener('click', openEditInventory);
    appElements.saveFlightBtn.addEventListener('click', handleSaveFlight);
    appElements.closeModalBtn.addEventListener('click', closeModal);
    appElements.submitOrderBtn.addEventListener('click', handleSubmitOrder);
    appElements.modeToggleBtn.addEventListener('click', toggleServiceMode);
    appElements.phaseToggleBtn.addEventListener('click', toggleServicePhase);
    appElements.endFlightBtn.addEventListener('click', handleEndOfFlight);
    appElements.closeServiceBtn.addEventListener('click', handleCloseService);
    appElements.openSwapModalBtn.addEventListener('click', openSwapModal);
    appElements.cancelSwapBtn.addEventListener('click', closeSwapModal);
    appElements.confirmSwapBtn.addEventListener('click', handleSwapSeats);
    appElements.dismissDueServiceAlertBtn.addEventListener('click', () => {
        appElements.dueServiceAlertModal.classList.replace('flex', 'hidden');
    });
    
    appElements.serviceActionModal.querySelectorAll('button').forEach(btn => 
        btn.onclick = () => handleServiceAction(btn.getAttribute('data-action')));
    
    appElements.delayActionModal.querySelectorAll('.delay-action-btn').forEach(btn => 
        btn.onclick = () => {
            const action = btn.dataset.action;
            if (action === 'cancel_delay') closeDelayActionModal();
            else handleDelayAction(action, parseInt(btn.dataset.value, 10));
        });
    
    appElements.dndActionModal.querySelectorAll('.dnd-action-btn').forEach(btn => 
        btn.onclick = () => handleDndAction(btn.dataset.action));

    appElements.serviceStatusRadios.forEach(radio => 
        radio.addEventListener('change', toggleMealBeverageVisibility));

    // [NEW] Listeners for Order Tabs
    appElements.orderTab1.addEventListener('click', () => {
        appElements.orderTab1.classList.add('active');
        appElements.orderTab2.classList.remove('active');
        appElements.orderTabContent1.classList.remove('hidden');
        appElements.orderTabContent2.classList.add('hidden');
    });
    appElements.orderTab2.addEventListener('click', () => {
        appElements.orderTab1.classList.remove('active');
        appElements.orderTab2.classList.add('active');
        appElements.orderTabContent1.classList.add('hidden');
        appElements.orderTabContent2.classList.remove('hidden');
    });
    
    // [NEW] Listeners for Aisle View Buttons
    appElements.viewLBtn.addEventListener('click', () => setAisleView('L_SIDE'));
    appElements.viewAllBtn.addEventListener('click', () => setAisleView('ALL'));
    appElements.viewRBtn.addEventListener('click', () => setAisleView('R_SIDE'));
    
    appElements.orderModal.addEventListener('click', e => { if (e.target === appElements.orderModal) closeModal(); });
    appElements.delayActionModal.addEventListener('click', e => { if (e.target === appElements.delayActionModal) closeDelayActionModal(); });
    appElements.dndActionModal.addEventListener('click', e => { if (e.target === appElements.dndActionModal) closeDndActionModal(); });
    appElements.swapSeatsModal.addEventListener('click', e => { if (e.target === appElements.swapSeatsModal) closeSwapModal(); });
    
    setInterval(updateClock, 1000);
    updateClock();
    lucide.createIcons();
    }
    window.onload = init;
