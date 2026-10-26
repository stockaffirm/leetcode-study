window.PROBLEM = {
 "id": "457",
 "title": "Circular Array Loop",
 "level": "Medium",
 "topic": "Two Pointers",
 "question": "",
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
   "frames": []
  }
 ]
};
