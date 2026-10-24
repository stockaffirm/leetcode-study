const {lite}=require("./lib");
const C=s=>s.replace(/^\n/,"").replace(/\n$/,"").split("\n");
const ARR="Array / String",HM="Hash Map / Set",STK="Stack / Monotonic Stack",BT="Binary Tree",GR="Graph",HP="Heap",DP="Dynamic Programming",GD="Greedy",MB="Math / Bit Manipulation",BS="Binary Search",SRT="Sorting",SW="Sliding Window",MX="Matrix",UF="Union Find / Segment Tree",TP="Two Pointers",IV="Intervals",BTK="Backtracking",DS="Design",LL="Linked List",TR="Trie";
// ---- Meta (8/8)
lite({id:2099,slug:"find-subsequence-of-length-k-with-the-largest-sum",title:"Find Subsequence of Length K With the Largest Sum",level:"Easy",topic:SRT,name:"Take the k biggest, keep their order",
w:"[2,1,3,3], k=2: the two largest numbers are the 3s → [3,3].",k:"The k numbers with the largest values give the largest sum. Find their indices and read the numbers in index order so the subsequence keeps the original order.",
i:"nums = [2,1,3,3], k = 2",o:"[3, 3]",time:"O(n log n)",space:"O(n)",
code:C(`
class Solution:
    def maxSubsequence(self, nums, k):
        idx = sorted(range(len(nums)), key=lambda i: -nums[i])[:k]
        return [nums[i] for i in sorted(idx)]
`)});
lite({id:1394,slug:"find-lucky-integer-in-an-array",title:"Find Lucky Integer in an Array",level:"Easy",topic:HM,name:"Count, then compare value with count",
w:"[2,2,3,4]: 2 appears twice, so 2 is lucky (value = frequency). 3 and 4 appear once → the answer is 2.",k:"Count how often each number appears; a number is lucky if its value equals its count. Return the largest lucky number, or −1.",
i:"arr = [2,2,3,4]",o:"2",time:"O(n)",space:"O(n)",
code:C(`
class Solution:
    def findLucky(self, arr):
        cnt = Counter(arr)
        return max((x for x, c in cnt.items() if x == c), default=-1)
`)});
lite({id:1672,slug:"richest-customer-wealth",title:"Richest Customer Wealth",level:"Easy",topic:ARR,name:"Row sums",
w:"Both customers have 1 + 2 + 3 = 6 → 6.",k:"A customer's wealth is the sum of their row. Return the largest row sum.",
i:"accounts = [[1,2,3],[3,2,1]]",o:"6",time:"O(m·n)",space:"O(1)",
code:C(`
class Solution:
    def maximumWealth(self, accounts):
        return max(sum(row) for row in accounts)
`)});
lite({id:877,slug:"stone-game",title:"Stone Game",level:"Medium",topic:DP,name:"Interval DP on the score difference",
w:"Piles [5,3,4,5]: Alice takes the first 5, Bob takes 5 or 4 … Alice can always end ahead → true.",k:"dp[i][j] is the best score difference (current player minus the other) for the piles i…j. The current player takes the left pile or the right pile and then faces the opponent's best difference on the rest: dp[i][j] = max(piles[i] − dp[i+1][j], piles[j] − dp[i][j−1]). Alice wins if dp[0][n−1] > 0.",
i:"piles = [5,3,4,5]",o:"true",time:"O(n²)",space:"O(n²)",
code:C(`
class Solution:
    def stoneGame(self, piles):
        n = len(piles)
        dp = [[0] * n for _ in range(n)]
        for i in range(n):
            dp[i][i] = piles[i]
        for length in range(2, n + 1):
            for i in range(n - length + 1):
                j = i + length - 1
                dp[i][j] = max(piles[i] - dp[i + 1][j], piles[j] - dp[i][j - 1])
        return dp[0][n - 1] > 0
`)});
lite({id:350,slug:"intersection-of-two-arrays-ii",title:"Intersection of Two Arrays II",level:"Easy",topic:HM,name:"Count one array, consume with the other",
w:"[1,2,2,1] and [2,2]: 2 appears twice in both → [2,2].",k:"Count the numbers of the first array. Walk through the second array; when a number still has a positive count, add it to the answer and decrease the count — so each number is used as often as it appears in both.",
i:"nums1 = [1,2,2,1], nums2 = [2,2]",o:"[2, 2]",time:"O(m + n)",space:"O(min(m, n))",
code:C(`
class Solution:
    def intersect(self, nums1, nums2):
        cnt = Counter(nums1)
        res = []
        for x in nums2:
            if cnt[x] > 0:
                res.append(x)
                cnt[x] -= 1
        return res
`)});
lite({id:448,slug:"find-all-numbers-disappeared-in-an-array",title:"Find All Numbers Disappeared in an Array",level:"Easy",topic:ARR,name:"Mark seen positions by negating",
w:"[4,3,2,7,8,2,3,1]: 5 and 6 never appear.",k:"Values are between 1 and n, so a value can mark its own position: make nums[value − 1] negative. In the end the positions that are still positive belong to missing numbers.",
i:"nums = [4,3,2,7,8,2,3,1]",o:"[5, 6]",time:"O(n)",space:"O(1)",
code:C(`
class Solution:
    def findDisappearedNumbers(self, nums):
        for x in nums:
            i = abs(x) - 1
            nums[i] = -abs(nums[i])
        return [i + 1 for i, x in enumerate(nums) if x > 0]
`)});
lite({id:771,slug:"jewels-and-stones",title:"Jewels and Stones",level:"Easy",topic:HM,name:"Set lookup",
w:"Jewels 'aA': the stones 'aAAbbbb' contain a, A, A → 3 jewels.",k:"Put the jewel types in a set and count the stones that are in it.",
i:'jewels = "aA", stones = "aAAbbbb"',o:"3",time:"O(n + m)",space:"O(m)",
code:C(`
class Solution:
    def numJewelsInStones(self, jewels, stones):
        js = set(jewels)
        return sum(s in js for s in stones)
`)});
lite({id:862,slug:"shortest-subarray-with-sum-at-least-k",title:"Shortest Subarray with Sum at Least K",level:"Hard",topic:STK,name:"Monotonic deque on prefix sums",
w:"[2,-1,2] with k=3: the whole array adds up to 3 → length 3.",k:"With prefix sums, a subarray (i, j] has sum pre[j] − pre[i]. Keep a deque of candidate start indices with INCREASING prefix sums. For each j pop from the front while the sum is at least k (record the length), and pop from the back every start whose prefix sum is not smaller than pre[j] (it can never be a better start).",
i:"nums = [2,-1,2], k = 3",o:"3",time:"O(n)",space:"O(n)",
code:C(`
class Solution:
    def shortestSubarray(self, nums, k):
        pre = [0]
        for x in nums:
            pre.append(pre[-1] + x)
        dq = deque()
        best = inf
        for i, p in enumerate(pre):
            while dq and p - pre[dq[0]] >= k:
                best = min(best, i - dq.popleft())
            while dq and pre[dq[-1]] >= p:
                dq.pop()
            dq.append(i)
        return best if best < inf else -1
`)});
lite({id:1008,slug:"construct-binary-search-tree-from-preorder-traversal",title:"Construct Binary Search Tree from Preorder Traversal",level:"Medium",topic:BT,name:"Recursion with an upper bound",
w:"Preorder 8, 5, 1, 7, 10, 12: 8 is the root; 5, 1, 7 are smaller (left), 10, 12 larger (right).",k:"Read the preorder list once with a shared index. build(bound) makes the next number the root as long as it is below the bound; its left child uses the root's value as bound, the right child uses the parent's bound.",
i:"preorder = [8,5,1,7,10,12]",o:"[8,5,10,1,7,null,12]",time:"O(n)",space:"O(h)",
code:C(`
class Solution:
    def bstFromPreorder(self, preorder):
        i = 0
        def build(bound):
            nonlocal i
            if i == len(preorder) or preorder[i] > bound:
                return None
            root = TreeNode(preorder[i])
            i += 1
            root.left = build(root.val)
            root.right = build(bound)
            return root
        return build(inf)
`)});
lite({id:1541,slug:"minimum-insertions-to-balance-a-parentheses-string",title:"Minimum Insertions to Balance a Parentheses String",level:"Medium",topic:STK,name:"Count the closing brackets still needed",
w:"'(()))': the first '(' needs '))', the second '(' needs '))' — we have '))' and one more ')'. One more ')' for the first '(' is missing → 1 insertion.",k:"Every '(' needs TWO ')'. Track how many ')' are still owed (need). A '(' adds 2; if need is odd when a '(' arrives, insert one ')' first. A ')' reduces need; if need would go negative insert a '(' (count 1, and now one more ')' is owed). At the end the owed ')' must be inserted.",
i:'s = "(()))"',o:"1",time:"O(n)",space:"O(1)",
code:C(`
class Solution:
    def minInsertions(self, s):
        need = res = 0
        for ch in s:
            if ch == "(":
                if need % 2 == 1:
                    res += 1
                    need -= 1
                need += 2
            else:
                need -= 1
                if need < 0:
                    res += 1
                    need += 2
        return res + need
`)});
lite({id:814,slug:"binary-tree-pruning",title:"Binary Tree Pruning",level:"Medium",topic:BT,name:"Post-order cutting",
w:"The right-most 0 has no 1 below it, so it is removed; the other branches contain a 1 and stay.",k:"Prune the children first. Then a node is removed (return None) if it is 0 and has no children left; otherwise it stays.",
i:"root = [1,null,0,0,1]",o:"[1,null,0,null,1]",time:"O(n)",space:"O(h)",
code:C(`
class Solution:
    def pruneTree(self, root):
        if not root:
            return None
        root.left = self.pruneTree(root.left)
        root.right = self.pruneTree(root.right)
        if not root.left and not root.right and root.val == 0:
            return None
        return root
`)});
lite({id:1652,slug:"defuse-the-bomb",title:"Defuse the Bomb",level:"Easy",topic:SW,name:"Circular sliding window",
w:"k = 3: every number is replaced by the sum of the next 3 (circularly): 5 → 7+1+4 = 12, 7 → 1+4+5 = 10 …",k:"For k > 0 sum the next k numbers, for k < 0 the previous |k| numbers, for k = 0 all zeros. Instead of re-adding k numbers for each position, slide a window: subtract the number that leaves and add the one that enters (indices modulo n).",
i:"code = [5,7,1,4], k = 3",o:"[12,10,16,13]",time:"O(n)",space:"O(1)",
code:C(`
class Solution:
    def decrypt(self, code, k):
        n = len(code)
        res = [0] * n
        if k == 0:
            return res
        start, end = (1, k) if k > 0 else (n + k, n - 1)
        window = sum(code[i % n] for i in range(start, end + 1))
        for i in range(n):
            res[i] = window
            window -= code[start % n]
            window += code[(end + 1) % n]
            start += 1
            end += 1
        return res
`)});
lite({id:1291,slug:"sequential-digits",title:"Sequential Digits",level:"Medium",topic:MB,name:"Slice the string 123456789",
w:"Between 100 and 300 the numbers whose digits go up by one are 123 and 234.",k:"Sequential-digit numbers are slices of '123456789'. For every length between the lengths of low and high take every slice of that length and keep those inside the range — they come out in increasing order.",
i:"low = 100, high = 300",o:"[123, 234]",time:"O(1)",space:"O(1)",
code:C(`
class Solution:
    def sequentialDigits(self, low, high):
        res = []
        digits = "123456789"
        for length in range(len(str(low)), len(str(high)) + 1):
            for start in range(0, 10 - length):
                num = int(digits[start:start + length])
                if low <= num <= high:
                    res.append(num)
        return res
`)});
lite({id:1025,slug:"divisor-game",title:"Divisor Game",level:"Easy",topic:DP,name:"Win/lose DP over n",
w:"n = 2: Alice picks 1, Bob has n = 1 and cannot move → Alice wins.",k:"dp[i] is true if the player to move wins with the number i. They win if some divisor x (0 < x < i) leaves the opponent in a losing position: not dp[i − x]. dp[1] is false. (It turns out Alice wins exactly for even n.)",
i:"n = 2",o:"true",time:"O(n²)",space:"O(n)",
code:C(`
class Solution:
    def divisorGame(self, n):
        dp = [False] * (n + 1)
        for i in range(2, n + 1):
            dp[i] = any(i % x == 0 and not dp[i - x] for x in range(1, i))
        return dp[n]
`)});
lite({id:1769,slug:"minimum-number-of-operations-to-move-all-balls-to-each-box",title:"Minimum Number of Operations to Move All Balls to Each Box",level:"Medium",topic:"Prefix Sum",name:"Two sweeps carrying a ball count",
w:"Boxes '110': moving all balls to box 0 costs 1, to box 1 costs 1, to box 2 costs 2 + 1 = 3.",k:"Sweep left to right keeping the number of balls seen (cnt) and the cost to move them to the current box (ops): each step every ball needs one more move, so ops += cnt. Do the same from the right and add both sweeps for every box.",
i:'boxes = "110"',o:"[1,1,3]",time:"O(n)",space:"O(n)",
code:C(`
class Solution:
    def minOperations(self, boxes):
        n = len(boxes)
        res = [0] * n
        cnt = ops = 0
        for i in range(n):
            res[i] += ops
            cnt += int(boxes[i])
            ops += cnt
        cnt = ops = 0
        for i in range(n - 1, -1, -1):
            res[i] += ops
            cnt += int(boxes[i])
            ops += cnt
        return res
`)});
lite({id:2657,slug:"find-the-prefix-common-array-of-two-arrays",title:"Find the Prefix Common Array of Two Arrays",level:"Medium",topic:HM,name:"Count numbers seen in both",
w:"A = [1,3,2,4], B = [3,1,2,4]: after 2 numbers both prefixes hold {1,3} → 2 common; after 3 → 3; after 4 → 4.",k:"Count how often each number has appeared in either prefix. When a number's count reaches 2 it is present in both prefixes, so the running common total goes up. Record the total after each position.",
i:"A = [1,3,2,4], B = [3,1,2,4]",o:"[0,2,3,4]",time:"O(n)",space:"O(n)",
code:C(`
class Solution:
    def findThePrefixCommonArray(self, A, B):
        cnt = Counter()
        common = 0
        res = []
        for a, b in zip(A, B):
            cnt[a] += 1
            if cnt[a] == 2:
                common += 1
            cnt[b] += 1
            if cnt[b] == 2:
                common += 1
            res.append(common)
        return res
`)});
lite({id:594,slug:"longest-harmonious-subsequence",title:"Longest Harmonious Subsequence",level:"Easy",topic:HM,name:"Count x and x + 1",
w:"[1,3,2,2,5,2,3,7]: the numbers 2 (×3) and 3 (×2) differ by exactly 1 → 5.",k:"A harmonious subsequence uses just two values that differ by 1, and the order does not matter. Count the numbers; for every x add count[x] + count[x + 1] when both exist and keep the largest.",
i:"nums = [1,3,2,2,5,2,3,7]",o:"5",time:"O(n)",space:"O(n)",
code:C(`
class Solution:
    def findLHS(self, nums):
        cnt = Counter(nums)
        return max((c + cnt[x + 1] for x, c in cnt.items() if x + 1 in cnt), default=0)
`)});
lite({id:781,slug:"rabbits-in-forest",title:"Rabbits in Forest",level:"Medium",topic:HM,name:"Group the same answers",
w:"[1,1,2]: two rabbits say '1' (they are a pair of the same colour) and one says '2' (needs two more of its colour) → at least 2 + 3 = 5 rabbits.",k:"A rabbit answering a belongs to a colour group of size a + 1. All rabbits answering a can share groups of that size, so with c such rabbits we need ceil(c / (a + 1)) groups, i.e. ceil(c / (a + 1)) · (a + 1) rabbits. Add this over all answers.",
i:"answers = [1,1,2]",o:"5",time:"O(n)",space:"O(n)",
code:C(`
class Solution:
    def numRabbits(self, answers):
        cnt = Counter(answers)
        return sum((c + a) // (a + 1) * (a + 1) for a, c in cnt.items())
`)});
lite({id:2566,slug:"maximum-difference-by-remapping-a-digit",title:"Maximum Difference by Remapping a Digit",level:"Easy",topic:GD,name:"Make it biggest and smallest",
w:"11891: map 1 → 9 gives 99899 (biggest); map 1 → 0 gives 00890 = 890 (smallest); the difference is 99009.",k:"For the largest value replace every copy of the first digit that is not 9 by 9. For the smallest value replace every copy of the first digit by 0. Subtract.",
i:"num = 11891",o:"99009",time:"O(n)",space:"O(n)",
code:C(`
class Solution:
    def minMaxDifference(self, num):
        s = str(num)
        hi = s
        for ch in s:
            if ch != "9":
                hi = s.replace(ch, "9")
                break
        lo = s.replace(s[0], "0")
        return int(hi) - int(lo)
`)});
lite({id:1502,slug:"can-make-arithmetic-progression-from-sequence",title:"Can Make Arithmetic Progression From Sequence",level:"Easy",topic:SRT,name:"Sort and compare the gaps",
w:"[3,5,1] sorted is 1,3,5 — every gap is 2 → true.",k:"Sort the numbers and check that all neighbouring differences are equal.",
i:"arr = [3,5,1]",o:"true",time:"O(n log n)",space:"O(1)",
code:C(`
class Solution:
    def canMakeArithmeticProgression(self, arr):
        a = sorted(arr)
        d = a[1] - a[0]
        return all(a[i + 1] - a[i] == d for i in range(len(a) - 1))
`)});
lite({id:3090,slug:"maximum-length-substring-with-two-occurrences",title:"Maximum Length Substring With Two Occurrences",level:"Easy",topic:SW,name:"Sliding window, each letter at most twice",
w:"'bcbbbcba': the longest piece in which no letter appears more than twice has length 4 (for example 'bcbb').",k:"Grow the window to the right. If the new letter now appears three times, move the left edge forward until it appears at most twice again. Track the longest window.",
i:'s = "bcbbbcba"',o:"4",time:"O(n)",space:"O(1)",
code:C(`
class Solution:
    def maximumLengthSubstring(self, s):
        cnt = Counter()
        left = best = 0
        for right, ch in enumerate(s):
            cnt[ch] += 1
            while cnt[ch] > 2:
                cnt[s[left]] -= 1
                left += 1
            best = max(best, right - left + 1)
        return best
`)});
