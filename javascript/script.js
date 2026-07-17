/* =====================================================
   SECTION 02 : HERO

   STATUS : COMPLETE

   JavaScript is currently not required.

   Future Enhancements:
   - Scroll Reveal Animation
   - Floating Hero Image
   - Counter Animation
   - Parallax Effects
===================================================== */

/* ===================================================== */
/* SECTION 10 - FAQ ACCORDION */
/* ===================================================== */

console.log("Script Loaded");


const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {

    const question = item.querySelector(".faq-question");

    question.addEventListener("click", () => {

        // Close all other FAQ items
        faqItems.forEach(otherItem => {

            if (otherItem !== item) {

                otherItem.classList.remove("active");
                otherItem.querySelector(".faq-answer").style.maxHeight = null;

            }

        });

        // Toggle current FAQ
        item.classList.toggle("active");

        const answer = item.querySelector(".faq-answer");

        if (item.classList.contains("active")) {

            answer.style.maxHeight = answer.scrollHeight + "px";

        } else {

            answer.style.maxHeight = null;

        }

    });

});

/* ===================================================== */
/* END OF SECTION 10 */
/* ===================================================== */
/* ======================================================
   NAVBAR V2.0
====================================================== */

const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");
const menuIcon = document.querySelector(".menu-icon");
const navLinks = document.querySelectorAll(".nav-link");

if (menuToggle && navMenu) {

    // Open / Close Menu
    menuToggle.addEventListener("click", () => {

        const isOpen = navMenu.classList.toggle("active");

        menuToggle.setAttribute("aria-expanded", isOpen);

        document.body.classList.toggle("menu-open", isOpen);

        if (menuIcon) {

            menuIcon.src = isOpen
                ? "images/icons/x.svg"
                : "images/icons/menu.svg";

        }

    });

    // Close menu after clicking a navigation link
    navLinks.forEach(link => {

        link.addEventListener("click", () => {

            navMenu.classList.remove("active");

            menuToggle.setAttribute("aria-expanded", "false");

            document.body.classList.remove("menu-open");

            if (menuIcon) {

                menuIcon.src = "images/icons/menu.svg";

            }

        });

    });

    // Close menu when clicking outside
    document.addEventListener("click", (event) => {

        const isInsideNav = event.target.closest(".main-nav");

        if (!isInsideNav && navMenu.classList.contains("active")) {

            navMenu.classList.remove("active");

            menuToggle.setAttribute("aria-expanded", "false");

            document.body.classList.remove("menu-open");

            if (menuIcon) {

                menuIcon.src = "images/icons/menu.svg";

            }

        }

    });

}

/* ==========================================================
   BMI CALCULATOR
========================================================== */

const bmiButton = document.getElementById("calculateBMI");

console.log(bmiButton);

if (bmiButton) {

   bmiButton.addEventListener("click", calculateBMI);

}



function calculateBMI() {

    const heightInput = document.getElementById("height");
    const weightInput = document.getElementById("weight");

    const bmiValue = document.getElementById("bmiValue");
    const bmiStatus = document.getElementById("bmiStatus");
    const idealWeight = document.getElementById("idealWeight");

    const height = Number(heightInput.value);
    const weight = Number(weightInput.value);

    /* -----------------------------
       Validation
    ------------------------------ */

    if (height <= 0 || weight <= 0) {

        bmiValue.textContent = "--";
        bmiStatus.textContent = "Please enter valid values";
        idealWeight.textContent = "--";

        bmiStatus.style.background = "#dc2626";

        return;

    }

    /* -----------------------------
       BMI Formula
    ------------------------------ */

    const bmi = weight / ((height / 100) * (height / 100));

    bmiValue.textContent = bmi.toFixed(1);

    /* -----------------------------
       BMI Category
    ------------------------------ */

    if (bmi < 18.5) {

        bmiStatus.textContent = "Underweight";
        bmiStatus.style.background = "#2563eb";

    }

    else if (bmi < 25) {

        bmiStatus.textContent = "Healthy";
        bmiStatus.style.background = "#16a34a";

    }

    else if (bmi < 30) {

        bmiStatus.textContent = "Overweight";
        bmiStatus.style.background = "#f59e0b";

    }

    else {

        bmiStatus.textContent = "Obese";
        bmiStatus.style.background = "#dc2626";

    }

    /* -----------------------------
       Ideal Weight
    ------------------------------ */

    const minWeight = (18.5 * ((height / 100) ** 2)).toFixed(1);

    const maxWeight = (24.9 * ((height / 100) ** 2)).toFixed(1);

    idealWeight.textContent = `${minWeight} kg - ${maxWeight} kg`;

}
/* ==========================================================
   PROTEIN CALCULATOR
========================================================== */

const proteinButton = document.getElementById("calculateProtein");

if (proteinButton) {

    proteinButton.addEventListener("click", calculateProtein);

}

function calculateProtein() {

    const weight = Number(document.getElementById("proteinWeight").value);

    const goal = Number(document.getElementById("proteinGoal").value);

    const meals = Number(document.getElementById("mealCount").value);

    const proteinValue = document.getElementById("proteinValue");

    const proteinStatus = document.getElementById("proteinStatus");

    const proteinMeal = document.getElementById("proteinMeal");

    const proteinTip = document.getElementById("proteinTip");


    /* ==========================
       Validation
    ========================== */

    if (weight <= 0) {

        proteinValue.textContent = "--";

        proteinStatus.textContent = "Enter valid weight";

        proteinMeal.textContent = "--";

        proteinTip.textContent = "Please enter your body weight.";

        proteinStatus.style.background = "#dc2626";

        return;

    }


    /* ==========================
       Calculation
    ========================== */

    const totalProtein = (weight * goal).toFixed(1);

    const mealProtein = (totalProtein / meals).toFixed(1);


    /* ==========================
       Display Result
    ========================== */

    proteinValue.textContent = totalProtein + " g";

    proteinMeal.textContent = mealProtein + " g / meal";


    /* ==========================
       Goal Message
    ========================== */

    if (goal === 1.2) {

        proteinStatus.textContent = "Maintenance";

        proteinStatus.style.background = "#2563eb";

        proteinTip.textContent =
        "Maintain your weight with balanced meals and quality protein sources.";

    }

    else if (goal === 1.6) {

        proteinStatus.textContent = "Fat Loss";

        proteinStatus.style.background = "#16a34a";

        proteinTip.textContent =
        "Increase protein intake to help preserve muscle while losing fat.";

    }

    else if (goal === 2.0) {

        proteinStatus.textContent = "Muscle Gain";

        proteinStatus.style.background = "#f59e0b";

        proteinTip.textContent =
        "Aim to spread your protein evenly across all meals for better muscle growth.";

    }

    else {

        proteinStatus.textContent = "Bodybuilding";

        proteinStatus.style.background = "#7c3aed";

        proteinTip.textContent =
        "Consume high-quality protein every 3–4 hours and combine it with progressive strength training.";

    }

}
/* ==========================================================
   TDEE CALCULATOR
========================================================== */

const calorieButton = document.getElementById("calculateCalories");

if (calorieButton) {

    calorieButton.addEventListener("click", calculateCalories);

}

function calculateCalories() {

    /* ==========================
       INPUTS
    ========================== */

    const gender = document.getElementById("gender").value;

    const age = Number(document.getElementById("age").value);

    const height = Number(document.getElementById("tdeeHeight").value);

    const weight = Number(document.getElementById("tdeeWeight").value);

    const activity = Number(document.getElementById("activity").value);

    /* ==========================
       OUTPUTS
    ========================== */

    const maintenanceCalories =
        document.getElementById("maintenanceCalories");

    const calorieStatus =
        document.getElementById("calorieStatus");

    const bmrResult =
        document.getElementById("bmrResult");

    const fatLossCalories =
        document.getElementById("fatLossCalories");

    const maintainCalories =
        document.getElementById("maintainCalories");

    const muscleGainCalories =
        document.getElementById("muscleGainCalories");


    /* ==========================
       VALIDATION
    ========================== */

    if (age <= 0 || height <= 0 || weight <= 0) {

        maintenanceCalories.textContent = "--";

        calorieStatus.textContent = "Enter valid details";

        bmrResult.textContent = "--";

        fatLossCalories.textContent = "--";

        maintainCalories.textContent = "--";

        muscleGainCalories.textContent = "--";

        calorieStatus.style.background = "#dc2626";

        return;

    }

    /* ==========================
       BMR
       Mifflin-St Jeor Formula
    ========================== */

    let bmr;

    if (gender === "male") {

        bmr = (10 * weight) +
              (6.25 * height) -
              (5 * age) + 5;

    }

    else {

        bmr = (10 * weight) +
              (6.25 * height) -
              (5 * age) - 161;

    }

    /* ==========================
       TDEE
    ========================== */

    const maintenance = Math.round(bmr * activity);

    const fatLoss = Math.round(maintenance - 500);

    const muscleGain = Math.round(maintenance + 300);

    /* ==========================
       DISPLAY
    ========================== */

    maintenanceCalories.textContent =
        maintenance + " kcal";

    calorieStatus.textContent =
        "Calories Calculated";

    calorieStatus.style.background =
        "#16a34a";

    bmrResult.textContent =
        Math.round(bmr) + " kcal";

    fatLossCalories.textContent =
        fatLoss + " kcal";

    maintainCalories.textContent =
        maintenance + " kcal";

    muscleGainCalories.textContent =
        muscleGain + " kcal";

}
/* ==========================================================
   WATER INTAKE CALCULATOR
========================================================== */

const waterButton = document.getElementById("calculateWater");

if (waterButton) {

    waterButton.addEventListener("click", calculateWater);

}

function calculateWater() {

    /* ==========================
       INPUTS
    ========================== */

    const weight = Number(document.getElementById("waterWeight").value);

    const activity = Number(document.getElementById("waterActivity").value);

    /* ==========================
       OUTPUTS
    ========================== */

    const waterValue = document.getElementById("waterValue");

    const waterStatus = document.getElementById("waterStatus");

    const waterTip = document.getElementById("waterTip");

    /* ==========================
       VALIDATION
    ========================== */

    if (weight <= 0) {

        waterValue.textContent = "--";

        waterStatus.textContent = "Enter valid weight";

        waterStatus.style.background = "#dc2626";

        waterTip.textContent = "Please enter your body weight.";

        return;

    }

    /* ==========================
       CALCULATION

       Formula:
       35 mL × Body Weight
    ========================== */

    const waterML = (weight * 35) + activity;

    const waterLiters = (waterML / 1000).toFixed(1);

    /* ==========================
       DISPLAY
    ========================== */

    waterValue.textContent = waterLiters + " L";

    /* ==========================
       HYDRATION STATUS
    ========================== */

    if (waterLiters < 2.5) {

        waterStatus.textContent = "Basic Hydration";

        waterStatus.style.background = "#2563eb";

        waterTip.textContent =
        "Drink water consistently throughout the day and carry a water bottle.";

    }

    else if (waterLiters < 3.5) {

        waterStatus.textContent = "Good Hydration";

        waterStatus.style.background = "#16a34a";

        waterTip.textContent =
        "Excellent! Spread your water intake evenly during the day and around workouts.";

    }

    else {

        waterStatus.textContent = "High Hydration";

        waterStatus.style.background = "#0891b2";

        waterTip.textContent =
        "Your activity level requires extra fluids. Replace water lost through sweat during exercise.";

    }

}
/* ==========================================================
   BODY FAT CALCULATOR
========================================================== */

const bodyFatButton = document.getElementById("calculateBodyFat");

if (bodyFatButton) {
    bodyFatButton.addEventListener("click", calculateBodyFat);
}

function calculateBodyFat() {

    /* ==========================================
       INPUTS
    ========================================== */

    const gender = document.getElementById("bodyGender").value;

    const height = Number(document.getElementById("bodyHeight").value);
    const neck = Number(document.getElementById("neck").value);
    const waist = Number(document.getElementById("waist").value);

    const hipGroup = document.getElementById("hip");
    const hip = hipGroup ? Number(hipGroup.value) : 0;


    /* ==========================================
       RESULT ELEMENTS
    ========================================== */

    const bodyFatValue = document.getElementById("bodyFatValue");
    const bodyFatStatus = document.getElementById("bodyFatStatus");
    const fatCategory = document.getElementById("fatCategory");
    const idealFat = document.getElementById("idealFat");
    const meterPercentage = document.getElementById("meterPercentage");
    const pointer = document.getElementById("bodyFatPointer");


    /* ==========================================
       VALIDATION
    ========================================== */

    if (height <= 0 || neck <= 0 || waist <= 0) {

        bodyFatValue.textContent = "--";
        bodyFatStatus.textContent = "Invalid Input";

        bodyFatStatus.style.background = "#dc2626";

        fatCategory.textContent = "--";
        idealFat.textContent = "--";
        meterPercentage.textContent = "-- %";

        pointer.style.transition = "left 0.8s ease";

pointer.style.left = pointerPosition + "%";

        return;

    }


    /* ==========================================
       BODY FAT FORMULA
    ========================================== */

    let bodyFat;

    if (gender === "male") {

        if (waist <= neck) {
            alert("Waist circumference must be greater than neck circumference.");
            return;
        }

        bodyFat =
            495 /
            (
                1.0324
                -
                (0.19077 * Math.log10(waist - neck))
                +
                (0.15456 * Math.log10(height))
            )
            - 450;

    }

    else {

        if (hip <= 0) {

            alert("Please enter Hip Circumference.");

            return;

        }

        bodyFat =
            495 /
            (
                1.29579
                -
                (0.35004 * Math.log10(waist + hip - neck))
                +
                (0.22100 * Math.log10(height))
            )
            - 450;

    }

    bodyFat = Number(bodyFat.toFixed(1));


    /* ==========================================
       SHOW BODY FAT %
    ========================================== */


  function animateBodyFat(target) {

    let current = 0;

    const timer = setInterval(function () {

        current += 0.2;

        if (current >= target) {

            current = target;

            clearInterval(timer);

        }

        document.getElementById("bodyFatValue").textContent =
            current.toFixed(1) + "%";

        document.getElementById("meterPercentage").textContent =
            current.toFixed(1) + "%";

    }, 15);

}

   animateBodyFat(bodyFat);


    /* ==========================================
       CATEGORY
    ========================================== */

    let category = "";
    let badgeColor = "";
    let idealRange = "";



    if (gender === "male") {

        if (bodyFat < 6) {

            category = "Essential";
            badgeColor = "#ef4444";
            idealRange = "10% - 20%";

        }

        else if (bodyFat < 14) {

            category = "Athletic";
            badgeColor = "#22c55e";
            idealRange = "10% - 20%";

        }

        else if (bodyFat < 18) {

            category = "Fitness";
            badgeColor = "#3b82f6";
            idealRange = "10% - 20%";

        }

        else if (bodyFat < 25) {

            category = "Average";
            badgeColor = "#f59e0b";
            idealRange = "10% - 20%";

        }

        else {

            category = "Obese";
            badgeColor = "#dc2626";
            idealRange = "10% - 20%";

        }

    }

    else {

        if (bodyFat < 14) {

            category = "Essential";
            badgeColor = "#ef4444";
            idealRange = "18% - 28%";

        }

        else if (bodyFat < 21) {

            category = "Athletic";
            badgeColor = "#22c55e";
            idealRange = "18% - 28%";

        }

        else if (bodyFat < 25) {

            category = "Fitness";
            badgeColor = "#3b82f6";
            idealRange = "18% - 28%";

        }

        else if (bodyFat < 32) {

            category = "Average";
            badgeColor = "#f59e0b";
            idealRange = "18% - 28%";

        }

        else {

            category = "Obese";
            badgeColor = "#dc2626";
            idealRange = "18% - 28%";

        }

    }


    /* ==========================================
       UPDATE RESULT CARD
    ========================================== */

    bodyFatStatus.textContent = category;

    bodyFatStatus.style.background = badgeColor;

    bodyFatStatus.style.transform = "scale(1.1)";

setTimeout(function(){

    bodyFatStatus.style.transform = "scale(1)";

},300);

    fatCategory.textContent = category;

    idealFat.textContent = idealRange;

    bodyFatValue.style.color = badgeColor;
meterPercentage.style.color = badgeColor;
fatCategory.style.color = badgeColor;

    /* ==========================================
       POINTER POSITION
    ========================================== */

    let pointerPosition;

    if (gender === "male") {

        pointerPosition = Math.min(
            Math.max(bodyFat * 4, 5),
            95
        );

    }

    else {

        pointerPosition = Math.min(
            Math.max(bodyFat * 3, 5),
            95
        );

    }

    pointer.style.left = pointerPosition + "%";

}

const genderSelect = document.getElementById("bodyGender");
const hipGroup = document.getElementById("hipGroup");
const hipInput = document.getElementById("hip");

function toggleHipField() {

    if (!genderSelect || !hipGroup) return;

    if (genderSelect.value === "male") {

        hipGroup.style.display = "none";

        if (hipInput) {

            hipInput.value = "";

        }

    } else {

        hipGroup.style.display = "block";

    }

}

if (genderSelect && hipGroup) {

    genderSelect.addEventListener("change", toggleHipField);

    toggleHipField();

}
/* ==========================================================
   LEAN BODY MASS CALCULATOR
========================================================== */

const lbmButton = document.getElementById("calculateLBM");

if (lbmButton) {

    lbmButton.addEventListener("click", calculateLBM);

}

function calculateLBM() {

    /* ==========================================
       INPUTS
    ========================================== */

    const weight = Number(document.getElementById("lbmWeight").value);

    const bodyFat = Number(document.getElementById("lbmBodyFat").value);

    /* ==========================================
       RESULT ELEMENTS
    ========================================== */

    const lbmValue = document.getElementById("lbmValue");
    const lbmStatus = document.getElementById("lbmStatus");

    const leanMass = document.getElementById("leanMass");
    const fatMass = document.getElementById("fatMass");
    const bodyFatResult = document.getElementById("lbmBodyFatResult");

    /* ==========================================
       VALIDATION
    ========================================== */

    if (weight <= 0 || bodyFat < 0 || bodyFat > 60) {

        lbmValue.textContent = "--";

        lbmStatus.textContent = "Invalid Input";

        lbmStatus.style.background = "#dc2626";

        leanMass.textContent = "--";

        fatMass.textContent = "--";

        bodyFatResult.textContent = "--";

        return;

    }

    /* ==========================================
       CALCULATIONS
    ========================================== */

    const lean = weight * (1 - bodyFat / 100);

    const fat = weight - lean;

    /* ==========================================
       DISPLAY VALUES
    ========================================== */

    lbmValue.textContent = lean.toFixed(1) + " kg";

    leanMass.textContent = lean.toFixed(1) + " kg";

    fatMass.textContent = fat.toFixed(1) + " kg";

    bodyFatResult.textContent = bodyFat.toFixed(1) + "%";

    /* ==========================================
       STATUS
    ========================================== */

    let status = "";
    let color = "";

    if (bodyFat < 10) {

        status = "Very Lean";
        color = "#22c55e";

    }

    else if (bodyFat < 20) {

        status = "Healthy";
        color = "#3b82f6";

    }

    else if (bodyFat < 30) {

        status = "Average";
        color = "#f59e0b";

    }

    else {

        status = "High Body Fat";
        color = "#ef4444";

    }

    lbmStatus.textContent = status;

    lbmStatus.style.background = color;

    lbmValue.style.color = color;

    leanMass.style.color = color;

    /* ==========================================
       BADGE ANIMATION
    ========================================== */

    lbmStatus.style.transform = "scale(1.1)";

    setTimeout(function () {

        lbmStatus.style.transform = "scale(1)";

    }, 300);

}
/* ==========================================================
   MACRO CALCULATOR
========================================================== */

const macroButton = document.getElementById("calculateMacros");

if (macroButton) {

    macroButton.addEventListener("click", calculateMacros);

}

function calculateMacros() {

    /* ==========================================
       INPUTS
    ========================================== */

    const gender = document.getElementById("macroGender").value;

    const age = Number(document.getElementById("macroAge").value);

    const height = Number(document.getElementById("macroHeight").value);

    const weight = Number(document.getElementById("macroWeight").value);

    const activity = Number(document.getElementById("macroActivity").value);

    const goal = document.getElementById("macroGoal").value;

    /* ==========================================
       RESULT ELEMENTS
    ========================================== */

    const macroCalories = document.getElementById("macroCalories");

    const macroStatus = document.getElementById("macroStatus");

    const proteinGrams = document.getElementById("proteinGrams");

    const carbGrams = document.getElementById("carbGrams");

    const fatGrams = document.getElementById("fatGrams");

    const proteinCalories = document.getElementById("proteinCalories");

    const carbCalories = document.getElementById("carbCalories");

    const fatCalories = document.getElementById("fatCalories");

    /* ==========================================
       VALIDATION
    ========================================== */

    if (
        age <= 0 ||
        height <= 0 ||
        weight <= 0
    ) {

        macroCalories.textContent = "--";

        macroStatus.textContent = "Invalid Input";

        macroStatus.style.background = "#dc2626";

        proteinGrams.textContent = "--";

        carbGrams.textContent = "--";

        fatGrams.textContent = "--";

        proteinCalories.textContent = "--";

        carbCalories.textContent = "--";

        fatCalories.textContent = "--";

        return;

    }

    /* ==========================================
       BMR
    ========================================== */

    let bmr;

    if (gender === "male") {

        bmr =
            10 * weight +
            6.25 * height -
            5 * age +
            5;

    }

    else {

        bmr =
            10 * weight +
            6.25 * height -
            5 * age -
            161;

    }

    /* ==========================================
       TDEE
    ========================================== */

    let calories = bmr * activity;

    /* ==========================================
       GOAL
    ========================================== */

    let status = "";

    let badgeColor = "";

    if (goal === "fatloss") {

        calories -= 500;

        status = "Lose Fat";

        badgeColor = "#ef4444";

    }

    else if (goal === "maintain") {

        status = "Maintain";

        badgeColor = "#22c55e";

    }

    else {

        calories += 300;

        status = "Build Muscle";

        badgeColor = "#3b82f6";

    }

    calories = Math.round(calories);

    /* ==========================================
       MACROS
    ========================================== */

    const protein = Math.round(weight * 2);

    const fat = Math.round(weight * 0.8);

    const proteinCal = protein * 4;

    const fatCal = fat * 9;

    const carbCal = calories - proteinCal - fatCal;

    const carbs = Math.round(carbCal / 4);

    /* ==========================================
       DISPLAY
    ========================================== */

    macroCalories.textContent = calories + " kcal";

    macroStatus.textContent = status;

    macroStatus.style.background = badgeColor;

    macroCalories.style.color = badgeColor;

    proteinGrams.textContent = protein + " g";

    carbGrams.textContent = carbs + " g";

    fatGrams.textContent = fat + " g";

    proteinCalories.textContent = proteinCal + " kcal";

    carbCalories.textContent = carbCal + " kcal";

    fatCalories.textContent = fatCal + " kcal";

    /* ==========================================
       ANIMATION
    ========================================== */

    macroStatus.style.transform = "scale(1.1)";

    setTimeout(function () {

        macroStatus.style.transform = "scale(1)";

    }, 300);

}
