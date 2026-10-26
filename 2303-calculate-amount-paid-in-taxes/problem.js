window.PROBLEM = {
 "id": "2303",
 "title": "Calculate Amount Paid in Taxes",
 "level": "Easy",
 "topic": "Array / String",
 "question": "",
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
   "frames": []
  }
 ]
};
