window.PROBLEM = {
 "id": "2303",
 "title": "Calculate Amount Paid in Taxes",
 "level": "Easy",
 "topic": "Array / String",
 "question": "Income is taxed in slices. brackets[i] = [upper, percent]: the part of the income up to `upper` (and above the previous bracket's upper limit) is taxed at that percent. Brackets are in increasing order of upper. Given the income, return the total tax (decimals allowed). Example: brackets [[3,50],[7,10],[12,25]], income 10 → first 3 at 50% = 1.5, next 4 at 10% = 0.4, last 3 at 25% = 0.75 → 2.65.",
 "why": "Income is taxed in slices: the first slice at one percent, the next slice at another, and so on. How much tax in total?",
 "idea": "For each bracket, the taxable part is min(income, upper limit) − previous limit; multiply by the rate and add. Stop once income is used up.",
 "input": "brackets [[3,50],[7,10],[12,25]], income 10",
 "output": "2.65",
 "notes": [],
 "best": "For each bracket, the taxable part is min(income, upper limit) − previous limit; multiply by the rate and add. Stop once income is used up.",
 "variants": [
  {
   "name": "Walk the tax brackets",
   "code": "class Solution:\n    def calculateTax(self, brackets, income):\n        tax, prev = 0.0, 0\n        for upper, pct in brackets:\n            if income <= prev: break\n            taxable = min(income, upper) - prev\n            tax += taxable * pct / 100\n            prev = upper\n        return tax",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "For each bracket, the taxable part is min(income, upper limit) − previous limit; multiply by the rate and add. Stop once income is used up.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "One expression",
   "tag": "Pythonic",
   "code": "class Solution:\n    def calculateTax(self, brackets, income):\n        prevs = [0] + [b[0] for b in brackets]\n        return sum((min(income, upper) - prev) * pct / 100 for (upper, pct), prev in zip(brackets, prevs) if income > prev)",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Pair each bracket with the previous limit and sum the slices.",
   "frames": [],
   "alt": true
  }
 ]
};
