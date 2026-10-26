window.PROBLEM = {
 "id": "1534",
 "title": "Count Good Triplets",
 "level": "Easy",
 "topic": "Array / String",
 "question": "",
 "why": "arr [3,0,1,1,9,7], a=7, b=2, c=3 → 4 good triplets.",
 "idea": "A triplet i<j<k is good if |arr[i]−arr[j]| ≤ a, |arr[j]−arr[k]| ≤ b and |arr[i]−arr[k]| ≤ c. With n ≤ 100 just test all triples.",
 "input": "arr = [3,0,1,1,9,7], a = 7, b = 2, c = 3",
 "output": "4",
 "notes": [],
 "best": "A triplet i<j<k is good if |arr[i]−arr[j]| ≤ a, |arr[j]−arr[k]| ≤ b and |arr[i]−arr[k]| ≤ c. With n ≤ 100 just test all triples.",
 "variants": [
  {
   "name": "Check every triple",
   "code": "class Solution:\n    def countGoodTriplets(self, arr, a, b, c):\n        return sum(1 for i, j, k in combinations(range(len(arr)), 3)\n                   if abs(arr[i] - arr[j]) <= a and abs(arr[j] - arr[k]) <= b and abs(arr[i] - arr[k]) <= c)",
   "time": "O(n³)",
   "space": "O(1)",
   "explain": "A triplet i<j<k is good if |arr[i]−arr[j]| ≤ a, |arr[j]−arr[k]| ≤ b and |arr[i]−arr[k]| ≤ c. With n ≤ 100 just test all triples.",
   "frames": []
  }
 ]
};
