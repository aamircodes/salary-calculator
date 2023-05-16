const PERSONAL_ALLOWANCE = 12570;
const BASIC_RATE_THRESHOLD = 50270;
const HIGHER_RATE_THRESHOLD = 150000;
const INCOME_TAX_RATE_BASIC = 0.2;
const INCOME_TAX_RATE_HIGHER = 0.4;
const INCOME_TAX_RATE_ADDITIONAL = 0.45;
const NI_RATE_SECONDARY = 0.12;
const NI_RATE_ADDITIONAL = 0.02;
const planOneThreshold = 22015;
const planTwoThreshold = 27295;
const pgThreshold = 21000;

export function calculateGrossIncome(salary) {
  return salary;
}

// employer pension scheme (no tax on this, income tax salary reduced by this amount)
export function calculatePensionDeductions(salary, pensionPercentage) {
  const a = salary * pensionPercentage;
  return a;
}

function calculatePersonalAllowance(salary, pensionPercentage) {
  const salaryAfterPensionDeduction = salary - salary * pensionPercentage;

  const pa =
    salaryAfterPensionDeduction <= 100000
      ? PERSONAL_ALLOWANCE
      : salaryAfterPensionDeduction > 100000 &&
        salaryAfterPensionDeduction < 125140
      ? PERSONAL_ALLOWANCE - (salaryAfterPensionDeduction - 100000) * 0.5
      : 0;
  return pa;
}

export function calculateTaxableIncome(salary, pensionPercentage) {
  const personalAllowance = calculatePersonalAllowance(
    salary,
    pensionPercentage
  );

  const pensionDeductions = calculatePensionDeductions(
    salary,
    pensionPercentage
  );

  return Math.max(salary - personalAllowance - pensionDeductions, 0);
}

export function calculateIncomeTax(salary, pensionPercentage) {
  let income = calculateTaxableIncome(salary, pensionPercentage);
  console.log(income);
  let tax = 0;

  if (income >= 112570) {
    tax += (income - 112570) * INCOME_TAX_RATE_ADDITIONAL;
    income = 112570;
  }
  if (income >= 37700) {
    tax += (income - 37700) * INCOME_TAX_RATE_HIGHER;
    income = 37700;
  }
  if (income > 0) {
    tax += income * INCOME_TAX_RATE_BASIC;
  }

  return tax;
}

export function calculateNiTax(salary) {
  let ni = 0;

  if (salary > BASIC_RATE_THRESHOLD) {
    const additionalNI = salary - BASIC_RATE_THRESHOLD;
    ni += additionalNI * NI_RATE_ADDITIONAL;
    salary = BASIC_RATE_THRESHOLD;
  }

  if (salary > PERSONAL_ALLOWANCE) {
    const primaryNI = salary - PERSONAL_ALLOWANCE;
    ni += primaryNI * NI_RATE_SECONDARY;
  }

  return ni;
}

// need to confirm accuracy, govt website is obfuscated re: what source this is calculated on
export function calculatePlanOneLoan(salary, isPlan2Checked) {
  let loan = 0;

  if (salary > planOneThreshold) {
    if (salary > 27295 && isPlan2Checked) {
      loan = (27295 - planOneThreshold) * 0.09;
    } else if (!isPlan2Checked) {
      loan = (salary - planOneThreshold) * 0.09;
    }
  }
  return loan;
}

// need to confirm accuracy, govt website is obfuscated re: what source this is calculated on
export function calculatePlanTwoLoan(salary) {
  let loan = 0;
  if (salary > planTwoThreshold) {
    const taxableIncome = salary - planTwoThreshold;
    loan = taxableIncome * 0.09;
  }
  return loan;
}

export function calculatePgLoan(salary) {
  let tax = 0;
  if (salary > pgThreshold) {
    const taxableIncome = salary - pgThreshold;
    tax = taxableIncome * 0.06;
  }
  return tax;
}

export function calculateTakehome(
  salary,
  pensionPercentage,
  isPlanOneChecked,
  isPlan2Checked,
  isPgChecked
) {
  return (
    salary -
    calculatePensionDeductions(salary, pensionPercentage) -
    calculateIncomeTax(salary, pensionPercentage) -
    calculateNiTax(salary) -
    (isPlanOneChecked ? calculatePlanOneLoan(salary, isPlan2Checked) : 0) -
    (isPlan2Checked ? calculatePlanTwoLoan(salary) : 0) -
    (isPgChecked ? calculatePgLoan(salary) : 0)
  );
}
