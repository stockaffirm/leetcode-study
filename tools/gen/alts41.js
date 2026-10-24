module.exports=({alt})=>{
const C=s=>s.replace(/^\n/,"").replace(/\n$/,"").split("\n");
// ---- Meta (8/8)
alt(2099,{name:"Threshold value",tag:"Alternative",time:"O(n log n)",space:"O(n)",explain:"Find the k-th largest value t, keep every number above t and just enough numbers equal to t, in the original order.",code:C(`
class Solution:
    def maxSubsequence(self, nums, k):
        t = sorted(nums, reverse=True)[k - 1]
        need = k - sum(x > t for x in nums)
        res = []
        for x in nums:
            if x > t:
                res.append(x)
            elif x == t and need > 0:
                res.append(x)
                need -= 1
        return res
`)});
alt(1394,{name:"Sort and count the runs",tag:"Alternative",time:"O(n log n)",space:"O(1)",explain:"After sorting, equal numbers sit together; compare each run's length with its value, from the largest.",code:C(`
class Solution:
    def findLucky(self, arr):
        best = -1
        for x, g in groupby(sorted(arr)):
            if x == len(list(g)):
                best = x
        return best
`)});
alt(1672,{name:"Loop with a running maximum",tag:"Alternative",time:"O(m·n)",space:"O(1)",explain:"Add up each customer's accounts and remember the biggest total.",code:C(`
class Solution:
    def maximumWealth(self, accounts):
        best = 0
        for row in accounts:
            total = 0
            for x in row:
                total += x
            best = max(best, total)
        return best
`)});
alt(877,{name:"Alice always wins",tag:"Math",time:"O(1)",space:"O(1)",explain:"With an even number of piles and an odd total Alice can choose to take all odd-position piles or all even-position piles, so she can always win.",code:C(`
class Solution:
    def stoneGame(self, piles):
        return True
`)});
alt(350,{name:"Sort and two pointers",tag:"Alternative",time:"O(n log n)",space:"O(1)",explain:"Sort both arrays and walk them together, keeping equal numbers.",code:C(`
class Solution:
    def intersect(self, nums1, nums2):
        a, b = sorted(nums1), sorted(nums2)
        i = j = 0
        res = []
        while i < len(a) and j < len(b):
            if a[i] < b[j]:
                i += 1
            elif a[i] > b[j]:
                j += 1
            else:
                res.append(a[i])
                i += 1
                j += 1
        return res
`)});
alt(448,{name:"Set difference",tag:"Pythonic",time:"O(n)",space:"O(n)",explain:"Subtract the numbers that exist from the full range 1…n.",code:C(`
class Solution:
    def findDisappearedNumbers(self, nums):
        return sorted(set(range(1, len(nums) + 1)) - set(nums))
`)});
alt(771,{name:"Count every stone letter",tag:"Alternative",time:"O(n + m)",space:"O(n)",explain:"Count the letters of the stones and add the counts of the jewel letters.",code:C(`
class Solution:
    def numJewelsInStones(self, jewels, stones):
        cnt = Counter(stones)
        return sum(cnt[j] for j in jewels)
`)});
alt(862,{name:"Check every subarray",tag:"Brute force",time:"O(n²)",space:"O(n)",explain:"For each start extend the end until the sum reaches k.",code:C(`
class Solution:
    def shortestSubarray(self, nums, k):
        best = inf
        for i in range(len(nums)):
            s = 0
            for j in range(i, len(nums)):
                s += nums[j]
                if s >= k:
                    best = min(best, j - i + 1)
                    break
        return best if best < inf else -1
`)});
alt(1008,{name:"Insert one by one",tag:"Alternative",time:"O(n²)",space:"O(h)",explain:"Insert the numbers in preorder order into an ordinary BST.",code:C(`
class Solution:
    def bstFromPreorder(self, preorder):
        root = TreeNode(preorder[0])
        for x in preorder[1:]:
            cur = root
            while True:
                if x < cur.val:
                    if cur.left is None:
                        cur.left = TreeNode(x)
                        break
                    cur = cur.left
                else:
                    if cur.right is None:
                        cur.right = TreeNode(x)
                        break
                    cur = cur.right
        return root
`)});
alt(1541,{name:"Walk through, treating '))' as one token",tag:"Alternative",time:"O(n)",space:"O(1)",explain:"Read ')' signs in pairs; a single ')' costs one insertion. A closing token cancels an open '(' or costs an inserted '('. Each '(' still open at the end needs 2 inserted ')'.",code:C(`
class Solution:
    def minInsertions(self, s):
        res = open_ = i = 0
        while i < len(s):
            if s[i] == "(":
                open_ += 1
                i += 1
            else:
                if i + 1 < len(s) and s[i + 1] == ")":
                    i += 2
                else:
                    res += 1
                    i += 1
                if open_ > 0:
                    open_ -= 1
                else:
                    res += 1
        return res + open_ * 2
`)});
alt(814,{name:"Ask 'does this subtree contain a 1'",tag:"Alternative",time:"O(n)",space:"O(h)",explain:"A helper tells whether a subtree has a 1; subtrees without one are cut off.",code:C(`
class Solution:
    def pruneTree(self, root):
        def has_one(node):
            if not node:
                return False
            l, r = has_one(node.left), has_one(node.right)
            if not l:
                node.left = None
            if not r:
                node.right = None
            return node.val == 1 or l or r
        return root if has_one(root) else None
`)});
alt(1652,{name:"Add the k neighbours for every position",tag:"Brute force",time:"O(n·k)",space:"O(1)",explain:"Sum the next (or previous) |k| numbers with modulo indexing, for each position.",code:C(`
class Solution:
    def decrypt(self, code, k):
        n = len(code)
        if k == 0:
            return [0] * n
        res = []
        for i in range(n):
            if k > 0:
                res.append(sum(code[(i + j) % n] for j in range(1, k + 1)))
            else:
                res.append(sum(code[(i - j) % n] for j in range(1, -k + 1)))
        return res
`)});
alt(1291,{name:"Extend numbers digit by digit",tag:"Alternative",time:"O(1)",space:"O(1)",explain:"Start from every single digit and keep adding the next digit, collecting numbers in range.",code:C(`
class Solution:
    def sequentialDigits(self, low, high):
        res = []
        for start in range(1, 10):
            num = last = start
            while last < 9 and num <= high:
                last += 1
                num = num * 10 + last
                if low <= num <= high:
                    res.append(num)
        return sorted(res)
`)});
alt(1025,{name:"Even n wins",tag:"Math",time:"O(1)",space:"O(1)",explain:"Alice can always subtract 1 on an even number, leaving an odd number from which every move gives back an even one.",code:C(`
class Solution:
    def divisorGame(self, n):
        return n % 2 == 0
`)});
alt(1769,{name:"Add up the distances for each box",tag:"Brute force",time:"O(n²)",space:"O(n)",explain:"For every target box sum the distances of all boxes holding a ball.",code:C(`
class Solution:
    def minOperations(self, boxes):
        n = len(boxes)
        return [sum(abs(i - j) for j in range(n) if boxes[j] == "1") for i in range(n)]
`)});
alt(2657,{name:"Intersect the prefix sets",tag:"Brute force",time:"O(n²)",space:"O(n)",explain:"For each prefix intersect the two sets of numbers.",code:C(`
class Solution:
    def findThePrefixCommonArray(self, A, B):
        return [len(set(A[:i + 1]) & set(B[:i + 1])) for i in range(len(A))]
`)});
alt(594,{name:"Sort and slide a window",tag:"Alternative",time:"O(n log n)",space:"O(1)",explain:"After sorting, a window whose last and first values differ by exactly 1 is a harmonious subsequence.",code:C(`
class Solution:
    def findLHS(self, nums):
        a = sorted(nums)
        best = left = 0
        for right in range(len(a)):
            while a[right] - a[left] > 1:
                left += 1
            if a[right] - a[left] == 1:
                best = max(best, right - left + 1)
        return best
`)});
alt(781,{name:"Hand out free seats in colour groups",tag:"Alternative",time:"O(n)",space:"O(n)",explain:"A rabbit answering a joins an open group of its kind if one has room; otherwise it starts a new group of a + 1 rabbits.",code:C(`
class Solution:
    def numRabbits(self, answers):
        slots = {}
        res = 0
        for a in answers:
            if slots.get(a, 0) > 0:
                slots[a] -= 1
            else:
                res += a + 1
                slots[a] = a
        return res
`)});
alt(2566,{name:"Try every remapping",tag:"Brute force",time:"O(100 · n)",space:"O(n)",explain:"Replace each digit a by each digit b and take the largest and smallest results.",code:C(`
class Solution:
    def minMaxDifference(self, num):
        s = str(num)
        vals = [int(s.replace(str(a), str(b))) for a in range(10) for b in range(10)]
        return max(vals) - min(vals)
`)});
alt(1502,{name:"Use min, max and a set",tag:"Alternative",time:"O(n)",space:"O(n)",explain:"The step must be (max − min) / (n − 1); check that every value of that progression is present.",code:C(`
class Solution:
    def canMakeArithmeticProgression(self, arr):
        n = len(arr)
        mn, mx = min(arr), max(arr)
        if mn == mx:
            return True
        if (mx - mn) % (n - 1):
            return False
        d = (mx - mn) // (n - 1)
        return set(range(mn, mx + 1, d)) == set(arr)
`)});
alt(3090,{name:"Check every substring",tag:"Brute force",time:"O(n³)",space:"O(1)",explain:"Look at all substrings and keep the longest in which every letter appears at most twice.",code:C(`
class Solution:
    def maximumLengthSubstring(self, s):
        best = 0
        for i in range(len(s)):
            for j in range(i + 1, len(s) + 1):
                if max(Counter(s[i:j]).values()) <= 2:
                    best = max(best, j - i)
        return best
`)});
};
