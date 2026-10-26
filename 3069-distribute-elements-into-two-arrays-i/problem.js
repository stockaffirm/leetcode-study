window.PROBLEM = {
 "id": "3069",
 "title": "Distribute Elements Into Two Arrays I",
 "level": "Easy",
 "topic": "Array / String",
 "question": "",
 "why": "[2,1,3]: arr1=[2], arr2=[1], then 2 > 1 so 3 goes to arr1 → [2,3,1].",
 "idea": "The first element goes to arr1 and the second to arr2. For each later element, put it into arr1 if the last element of arr1 is larger than the last of arr2, else into arr2. The answer is arr1 followed by arr2.",
 "input": "nums = [2,1,3]",
 "output": "[2, 3, 1]",
 "notes": [],
 "best": "The first element goes to arr1 and the second to arr2. For each later element, put it into arr1 if the last element of arr1 is larger than the last of arr2, else into arr2. The answer is arr1 followed by arr2.",
 "variants": [
  {
   "name": "Simulate the rule",
   "code": "class Solution:\n    def resultArray(self, nums):\n        a, b = [nums[0]], [nums[1]]\n        for x in nums[2:]:\n            if a[-1] > b[-1]:\n                a.append(x)\n            else:\n                b.append(x)\n        return a + b",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "The first element goes to arr1 and the second to arr2. For each later element, put it into arr1 if the last element of arr1 is larger than the last of arr2, else into arr2. The answer is arr1 followed by arr2.",
   "frames": []
  }
 ]
};
