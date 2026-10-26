window.PROBLEM = {
 "id": "321",
 "title": "Create Maximum Number",
 "level": "Hard",
 "topic": "Stack / Monotonic Stack",
 "question": "From the digit arrays nums1 and nums2 create the largest possible number of length k by taking digits from both while keeping the relative order inside each array. Return it as an array of digits. Example: nums1 [3,4,6,5], nums2 [9,1,2,5,8,3], k=5 → [9,8,6,5,3].",
 "why": "nums1=[3,4,6,5], nums2=[9,1,2,5,8,3], k=5 → [9,8,6,5,3].",
 "idea": "Try every split: i digits from nums1 and k−i from nums2. The best i digits of an array (keeping order) come from a monotonic stack that can drop smaller digits while it still has enough left. Merge two sequences into the largest by always taking from the one that is lexicographically larger from the current position. Keep the best result over all splits.",
 "input": "nums1 = [3,4,6,5], nums2 = [9,1,2,5,8,3], k = 5",
 "output": "[9, 8, 6, 5, 3]",
 "notes": [],
 "best": "Try every split: i digits from nums1 and k−i from nums2. The best i digits of an array (keeping order) come from a monotonic stack that can drop smaller digits while it still has enough left. Merge two sequences into the largest by always taking from the one that is lexicographically larger from the current position. Keep the best result over all splits.",
 "variants": [
  {
   "name": "Best i from one, k−i from the other, then merge",
   "code": "class Solution:\n    def maxNumber(self, nums1, nums2, k):\n        def pick(nums, t):\n            drop = len(nums) - t\n            st = []\n            for x in nums:\n                while drop and st and st[-1] < x:\n                    st.pop()\n                    drop -= 1\n                st.append(x)\n            return st[:t]\n        def merge(a, b):\n            res = []\n            while a or b:\n                big = a if a > b else b\n                res.append(big.pop(0))\n            return res\n        best = []\n        for i in range(max(0, k - len(nums2)), min(k, len(nums1)) + 1):\n            cand = merge(pick(nums1, i), pick(nums2, k - i))\n            best = max(best, cand)\n        return best",
   "time": "O(k·(m + n + k²))",
   "space": "O(k)",
   "explain": "Try every split: i digits from nums1 and k−i from nums2. The best i digits of an array (keeping order) come from a monotonic stack that can drop smaller digits while it still has enough left. Merge two sequences into the largest by always taking from the one that is lexicographically larger from the current position. Keep the best result over all splits.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Pick with window maxima",
   "tag": "Alternative",
   "code": "class Solution:\n    def maxNumber(self, nums1, nums2, k):\n        def pick(nums, t):\n            res = []\n            start = 0\n            for j in range(t):\n                end = len(nums) - (t - j)\n                best = start\n                for i in range(start, end + 1):\n                    if nums[i] > nums[best]:\n                        best = i\n                res.append(nums[best])\n                start = best + 1\n            return res\n        def merge(a, b):\n            res = []\n            i = j = 0\n            while i < len(a) or j < len(b):\n                if a[i:] > b[j:]:\n                    res.append(a[i])\n                    i += 1\n                else:\n                    res.append(b[j])\n                    j += 1\n            return res\n        best = []\n        for i in range(max(0, k - len(nums2)), min(k, len(nums1)) + 1):\n            best = max(best, merge(pick(nums1, i), pick(nums2, k - i)))\n        return best",
   "time": "O(k·(m + n + k²))",
   "space": "O(k)",
   "explain": "Choose the best t digits by repeatedly taking the leftmost maximum in the window that still leaves enough digits.",
   "frames": [],
   "alt": true
  }
 ]
};
