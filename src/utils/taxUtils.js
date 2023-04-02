const PERSONAL_ALLOWANCE = 12570;
const BASIC_RATE_THRESHOLD = 50270;
const HIGHER_RATE_THRESHOLD = 150000;
const INCOME_TAX_RATE_BASIC = 0.2;
const INCOME_TAX_RATE_HIGHER = 0.4;
const INCOME_TAX_RATE_ADDITIONAL = 0.45;
const NI_RATE_SECONDARY = 0.12;
const NI_RATE_ADDITIONAL = 0.02;

export function calculateGrossIncome(salary) {
  return salary;
}

function calculatePersonalAllowance(salary) {
  const pa =
    salary <= 100000
      ? PERSONAL_ALLOWANCE
      : salary > 100000 && salary < 125140
      ? PERSONAL_ALLOWANCE - (salary - 100000) * 0.5
      : 0;

  return pa;
}

export function calculateTaxableIncome(salary, pensionPercentage) {
  const personalAllowance = calculatePersonalAllowance(salary);
  const pensionDeductions = calculatePensionDeductions(
    salary,
    pensionPercentage
  );
  return Math.max(salary - personalAllowance - pensionDeductions, 0);
}

// employer pension scheme (no tax on this, income tax salary reduced by this amount)
export function calculatePensionDeductions(salary, pensionPercentage) {
  const a = salary * pensionPercentage;
  return a;
}

export function calculateIncomeTax(salary, pensionPercentage) {
  let income = salary - calculatePensionDeductions(salary, pensionPercentage);
  let tax = 0;

  if (income <= PERSONAL_ALLOWANCE) {
    return tax;
  }
  if (income > HIGHER_RATE_THRESHOLD) {
    tax += (income - HIGHER_RATE_THRESHOLD) * INCOME_TAX_RATE_ADDITIONAL;
    income = HIGHER_RATE_THRESHOLD;
  }
  if (income > BASIC_RATE_THRESHOLD) {
    tax += (income - BASIC_RATE_THRESHOLD) * INCOME_TAX_RATE_HIGHER;
    income = BASIC_RATE_THRESHOLD;
  }
  if (income > PERSONAL_ALLOWANCE) {
    tax += (income - PERSONAL_ALLOWANCE) * INCOME_TAX_RATE_BASIC;
    income = PERSONAL_ALLOWANCE;
  }
  if (income > 0) {
    const personalAllowance = calculatePersonalAllowance(salary);
    tax += (income - personalAllowance) * INCOME_TAX_RATE_HIGHER;
  }

  return tax;
}
