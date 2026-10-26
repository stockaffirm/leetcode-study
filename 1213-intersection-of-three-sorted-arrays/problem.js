window.PROBLEM = {
 "id": "1213",
 "title": "Intersection of Three Sorted Arrays",
 "level": "Easy",
 "topic": "Two Pointers",
 "question": "",
 "why": "1 and 5 appear in all three arrays → [1, 5].",
 "idea": "Keep one pointer per array. If the three current numbers are equal, record it and move all pointers; otherwise move the pointer(s) holding the smallest number.",
 "input": "arr1=[1,2,3,4,5], arr2=[1,2,5,7,9], arr3=[1,3,4,5,8]",
 "output": "[1, 5]",
 "notes": [],
 "best": "Keep one pointer per array. If the three current numbers are equal, record it and move all pointers; otherwise move the pointer(s) holding the smallest number.",
 "variants": [
  {
   "name": "Three pointers",
   "code": "class Solution:\n    def arraysIntersection(self, arr1, arr2, arr3):\n        i = j = k = 0\n        res = []\n        while i < len(arr1) and j < len(arr2) and k < len(arr3):\n            a, b, c = arr1[i], arr2[j], arr3[k]\n            if a == b == c:\n                res.append(a)\n                i += 1\n                j += 1\n                k += 1\n            else:\n                m = min(a, b, c)\n                if a == m:\n                    i += 1\n                if b == m:\n                    j += 1\n                if c == m:\n                    k += 1\n        return res",
   "time": "O(a+b+c)",
   "space": "O(1)",
   "explain": "Keep one pointer per array. If the three current numbers are equal, record it and move all pointers; otherwise move the pointer(s) holding the smallest number.",
   "frames": []
  }
 ]
};
