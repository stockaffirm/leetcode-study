window.PROBLEM = {
 "id": "457",
 "title": "Circular Array Loop",
 "level": "Medium",
 "topic": "Two Pointers",
 "question": "nums is a circular array where nums[i] says how many steps to jump forward (positive) or backward (negative). A cycle must have length greater than 1 and all jumps in the same direction. Return true if the array contains such a cycle. Example: [2,-1,1,2,2] → true.",
 "why": "[2,-1,1,2,2]: 0 → 2 → 3 → 0 is a cycle of length 3 where every jump is forward → true.",
 "idea": "Each element tells how far to jump (mod n). A valid cycle has length > 1 and all jumps in the same direction. From every start follow the jumps while the direction stays the same and the jump is not a self-loop; revisiting a node on this walk means a cycle. Otherwise mark the visited nodes as 0 (dead) so they are never explored again.",
 "input": "nums = [2,-1,1,2,2]",
 "output": "true",
 "notes": [],
 "best": "Each element tells how far to jump (mod n). A valid cycle has length > 1 and all jumps in the same direction. From every start follow the jumps while the direction stays the same and the jump is not a self-loop; revisiting a node on this walk means a cycle. Otherwise mark the visited nodes as 0 (dead) so they are never explored again.",
 "variants": [
  {
   "name": "Follow same-direction jumps, mark dead ends",
   "code": "class Solution:\n    def circularArrayLoop(self, nums):\n        n = len(nums)\n        for i in range(n):\n            if nums[i] == 0:\n                continue\n            forward = nums[i] > 0\n            seen = set()\n            j = i\n            while nums[j] != 0 and (nums[j] > 0) == forward:\n                nj = (j + nums[j]) % n\n                if nj == j:\n                    break\n                if j in seen:\n                    return True\n                seen.add(j)\n                j = nj\n            for p in seen:\n                nums[p] = 0\n        return False",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "Each element tells how far to jump (mod n). A valid cycle has length > 1 and all jumps in the same direction. From every start follow the jumps while the direction stays the same and the jump is not a self-loop; revisiting a node on this walk means a cycle. Otherwise mark the visited nodes as 0 (dead) so they are never explored again.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Fast and slow pointers",
   "tag": "Alternative",
   "code": "class Solution:\n    def circularArrayLoop(self, nums):\n        n = len(nums)\n        def nxt(i):\n            return (i + nums[i]) % n\n        for i in range(n):\n            if nums[i] == 0:\n                continue\n            slow = fast = i\n            sign = nums[i] > 0\n            while True:\n                s2 = nxt(slow)\n                if nums[s2] == 0 or (nums[s2] > 0) != sign:\n                    break\n                f1 = nxt(fast)\n                if nums[f1] == 0 or (nums[f1] > 0) != sign:\n                    break\n                f2 = nxt(f1)\n                if nums[f2] == 0 or (nums[f2] > 0) != sign:\n                    break\n                slow, fast = s2, f2\n                if slow == fast:\n                    if slow == nxt(slow):\n                        break\n                    return True\n            j = i\n            while nums[j] != 0 and (nums[j] > 0) == sign:\n                nj = nxt(j)\n                nums[j] = 0\n                j = nj\n        return False",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "Floyd's cycle detection restricted to same-direction jumps; visited nodes are set to 0.",
   "frames": [],
   "alt": true
  }
 ]
};
