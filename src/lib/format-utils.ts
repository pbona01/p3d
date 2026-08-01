export function formatNaira(amount: number | null): string {
  if (amount === null || isNaN(amount)) {
    return 'Price on Consultation';
  }
  return new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
    maximumFractionDigits: 0
  }).format(amount).replace('NGN', '₦');
}
