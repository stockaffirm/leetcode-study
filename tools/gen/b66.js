const {lite}=require("./lib");
const C=s=>s.replace(/^\n/,"").replace(/\n$/,"").split("\n");
const ARR="Array / String",HM="Hash Map / Set",STK="Stack / Monotonic Stack",BT="Binary Tree",GR="Graph",HP="Heap",DP="Dynamic Programming",GD="Greedy",MB="Math / Bit Manipulation",BS="Binary Search",SRT="Sorting",SW="Sliding Window",MX="Matrix",UF="Union Find / Segment Tree",TP="Two Pointers",IV="Intervals",BTK="Backtracking",DS="Design",LL="Linked List",TR="Trie",PS="Prefix Sum";
// ---- Bloomberg (2)
lite({id:1255,slug:"maximum-score-words-formed-by-letters",title:"Maximum Score Words Formed by Letters",level:"Hard",topic:BTK,name:"Backtrack over subsets of words with a letter budget",
w:"words ['dog','cat','dad','good'] with the given letters: choose 'dad' and 'good' → score 23.",k:"Each letter can be used only as many times as it appears in letters. Try every subset of words with DFS (take or skip each word), subtracting the letter counts when taking it and abandoning the branch if a letter runs out. Score = sum of letter scores of the chosen words; keep the best.",
i:"words = [\"dog\",\"cat\",\"dad\",\"good\"], letters = [\"a\",\"a\",\"c\",\"d\",\"d\",\"d\",\"g\",\"o\",\"o\"], score = [1,0,9,5,0,0,3,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0]",o:"23",time:"O(2ⁿ·L)",space:"O(n)",
code:C(`
class Solution:
    def maxScoreWords(self, words, letters, score):
        avail = Counter(letters)
        def value(w):
            return sum(score[ord(c) - 97] for c in w)
        def go(i):
            if i == len(words):
                return 0
            best = go(i + 1)
            need = Counter(words[i])
            if all(avail[c] >= n for c, n in need.items()):
                for c, n in need.items():
                    avail[c] -= n
                best = max(best, value(words[i]) + go(i + 1))
                for c, n in need.items():
                    avail[c] += n
            return best
        return go(0)
`)});
lite({id:3105,slug:"longest-strictly-increasing-or-strictly-decreasing-subarray",title:"Longest Strictly Increasing or Strictly Decreasing Subarray",level:"Easy",topic:ARR,name:"Track the current increasing and decreasing runs",
w:"[1,4,3,3,2]: longest run is 1,4 (2) or 4,3 (2) → 2.",k:"Walk through the array keeping the length of the current strictly increasing run and the current strictly decreasing run; reset the one that breaks. The answer is the longest run seen.",
i:"nums = [1,4,3,3,2]",o:"2",time:"O(n)",space:"O(1)",
code:C(`
class Solution:
    def longestMonotonicSubarray(self, nums):
        inc = dec = best = 1
        for a, b in zip(nums, nums[1:]):
            inc = inc + 1 if b > a else 1
            dec = dec + 1 if b < a else 1
            best = max(best, inc, dec)
        return best
`)});
lite({id:1019,slug:"next-greater-node-in-linked-list",title:"Next Greater Node In Linked List",level:"Medium",topic:STK,name:"Monotonic stack over the list values",
w:"2 → 1 → 5: the next greater values are [5, 5, 0].",k:"Copy the values into an array and use a decreasing stack of indices: when a value is bigger than the one at the top of the stack, it is the next greater value of that index. Indices left on the stack get 0.",
i:"head = [2,1,5]",o:"[5, 5, 0]",time:"O(n)",space:"O(n)",
code:C(`
class Solution:
    def nextLargerNodes(self, head):
        vals = []
        while head:
            vals.append(head.val)
            head = head.next
        res = [0] * len(vals)
        st = []
        for i, v in enumerate(vals):
            while st and vals[st[-1]] < v:
                res[st.pop()] = v
            st.append(i)
        return res
`)});
lite({id:2698,slug:"find-the-punishment-number-of-an-integer",title:"Find the Punishment Number of an Integer",level:"Medium",topic:BTK,name:"Check whether i² splits into parts summing to i",
w:"n=10: 1, 9 (9² = 81 → 8+1) and 10 (100 → 10+0) qualify → 1 + 81 + 100 = 182.",k:"For each i from 1 to n test whether the decimal digits of i² can be cut into contiguous pieces whose values add up to i (backtracking over cut positions). Add i² for each i that works.",
i:"n = 10",o:"182",time:"O(n·2^digits)",space:"O(digits)",
code:C(`
class Solution:
    def punishmentNumber(self, n):
        def can(s, target):
            if not s:
                return target == 0
            for k in range(1, len(s) + 1):
                v = int(s[:k])
                if v > target:
                    break
                if can(s[k:], target - v):
                    return True
            return False
        return sum(i * i for i in range(1, n + 1) if can(str(i * i), i))
`)});
lite({id:1415,slug:"the-k-th-lexicographical-string-of-all-happy-strings-of-length-n",title:"The k-th Lexicographical String of All Happy Strings of Length n",level:"Medium",topic:BTK,name:"Count branches to skip",
w:"n=3: the happy strings in order start 'aba', 'abc', 'aca' … the 3rd is 'aca'.",k:"A happy string uses a, b, c with no two equal neighbours. For length n there are 3·2^(n−1) of them: after choosing the first letter each remaining position has 2 choices. Pick each letter greedily: the number of strings beginning with a given prefix is 2^(remaining), so subtract blocks until k falls into one.",
i:"n = 3, k = 3",o:"\"aca\"",time:"O(n)",space:"O(n)",
code:C(`
class Solution:
    def getHappyString(self, n, k):
        total = 3 * 2 ** (n - 1)
        if k > total:
            return ""
        k -= 1
        res = []
        block = total // 3
        for i in range(n):
            choices = [c for c in 'abc' if not res or c != res[-1]]
            idx, k = divmod(k, block)
            res.append(choices[idx])
            if i + 1 < n:
                block //= 2
        return ''.join(res)
`)});
lite({id:1217,slug:"minimum-cost-to-move-chips-to-the-same-position",title:"Minimum Cost to Move Chips to The Same Position",level:"Easy",topic:GD,name:"Only parity matters",
w:"positions [2,2,2,3,3]: move the two chips on 3 to 2 (cost 1 each) → 2.",k:"Moving a chip by 2 is free and by 1 costs 1. So every chip can reach any position with the same parity for free; the answer is the smaller of the count of chips on even positions and on odd positions.",
i:"position = [2,2,2,3,3]",o:"2",time:"O(n)",space:"O(1)",
code:C(`
class Solution:
    def minCostToMoveChips(self, position):
        odd = sum(p % 2 for p in position)
        return min(odd, len(position) - odd)
`)});
lite({id:520,slug:"detect-capital",title:"Detect Capital",level:"Easy",topic:ARR,name:"All caps, no caps or only the first capital",
w:"'USA' ✓, 'leetcode' ✓, 'Google' ✓, 'FlaG' ✗.",k:"The usage is right if the word is all uppercase, all lowercase, or only the first letter is uppercase — exactly what isupper, islower and istitle check.",
i:"word = \"USA\"",o:"true",time:"O(n)",space:"O(1)",
code:C(`
class Solution:
    def detectCapitalUse(self, word):
        return word.isupper() or word.islower() or word.istitle()
`)});
lite({id:1979,slug:"find-greatest-common-divisor-of-array",title:"Find Greatest Common Divisor of Array",level:"Easy",topic:MB,name:"gcd(min, max)",
w:"[2,5,6,9,10]: gcd(2, 10) = 2.",k:"The common divisors of the smallest and largest numbers are the common divisors of all of them for this problem's definition; return gcd(min, max).",
i:"nums = [2,5,6,9,10]",o:"2",time:"O(n)",space:"O(1)",
code:C(`
class Solution:
    def findGCD(self, nums):
        return gcd(min(nums), max(nums))
`)});
lite({id:3355,slug:"zero-array-transformation-i",title:"Zero Array Transformation I",level:"Medium",topic:PS,name:"Difference array of how many times each index can be reduced",
w:"nums [1,0,1], query [0,2] can reduce every index by 1 → all zero → true.",k:"Each query lets you subtract 1 (or nothing) from every index in its range. So index i can be reduced at most as many times as there are queries covering it. Count the coverage with a difference array and check coverage[i] ≥ nums[i] for all i.",
i:"nums = [1,0,1], queries = [[0,2]]",o:"true",time:"O(n + q)",space:"O(n)",
code:C(`
class Solution:
    def isZeroArray(self, nums, queries):
        diff = [0] * (len(nums) + 1)
        for l, r in queries:
            diff[l] += 1
            diff[r + 1] -= 1
        cover = 0
        for i, x in enumerate(nums):
            cover += diff[i]
            if cover < x:
                return False
        return True
`)});
lite({id:2200,slug:"find-all-k-distant-indices-in-an-array",title:"Find All K-Distant Indices in an Array",level:"Easy",topic:ARR,name:"Mark every index within k of a key",
w:"[3,4,9,1,3,9,5], key 9, k=1 → indices 1–6.",k:"For each position j where nums[j] == key mark all i with |i − j| ≤ k. Collect the marked indices in increasing order.",
i:"nums = [3,4,9,1,3,9,5], key = 9, k = 1",o:"[1, 2, 3, 4, 5, 6]",time:"O(n)",space:"O(n)",
code:C(`
class Solution:
    def findKDistantIndices(self, nums, key, k):
        n = len(nums)
        marked = set()
        for j, v in enumerate(nums):
            if v == key:
                marked.update(range(max(0, j - k), min(n, j + k + 1)))
        return sorted(marked)
`)});
lite({id:2311,slug:"longest-binary-subsequence-less-than-or-equal-to-k",title:"Longest Binary Subsequence Less Than or Equal to K",level:"Medium",topic:GD,name:"Keep all zeros; add ones from the right while they fit",
w:"'1001010', k=5: take all zeros and the low-order ones that keep the value ≤ 5 → length 5.",k:"Leading zeros are free, so keep every 0. Scan from the right: add a 1 only while the value built so far (the bit's weight 2^position) still keeps the number ≤ k.",
i:"s = \"1001010\", k = 5",o:"5",time:"O(n)",space:"O(1)",
code:C(`
class Solution:
    def longestSubsequence(self, s, k):
        value = 0
        length = 0
        weight = 1
        for ch in reversed(s):
            if ch == '0':
                length += 1
            elif value + weight <= k:
                value += weight
                length += 1
            weight *= 2
            if weight > k:
                weight = k + 1
        return length
`)});
lite({id:421,slug:"maximum-xor-of-two-numbers-in-an-array",title:"Maximum XOR of Two Numbers in an Array",level:"Medium",topic:TR,name:"Greedy bit by bit with prefix sets",
w:"[3,10,5,25,2,8] → 5 XOR (exclusive OR) 25 = 28.",k:"Build the answer from the highest bit down. At each bit take the set of all prefixes (numbers shifted right) and test whether the candidate answer with this bit set is achievable: there are prefixes a, b with a XOR (exclusive OR) b = candidate (check candidate XOR a in the set).",
i:"nums = [3,10,5,25,2,8]",o:"28",time:"O(32·n)",space:"O(n)",
code:C(`
class Solution:
    def findMaximumXOR(self, nums):
        ans = 0
        for bit in range(max(nums).bit_length() - 1, -1, -1):
            ans <<= 1
            prefixes = {x >> bit for x in nums}
            ans |= any((ans | 1) ^ p in prefixes for p in prefixes)
        return ans
`)});
lite({id:898,slug:"bitwise-ors-of-subarrays",title:"Bitwise ORs of Subarrays",level:"Medium",topic:MB,name:"Few distinct ORs end at each index",
w:"[1,1,2] → ORs 1, 1, 2, 1, 3, 3 → distinct {1,2,3} → 3.",k:"For subarrays ending at i keep the set of their OR values; it has at most ~30 elements because OR only adds bits. Extend each by arr[i] and add arr[i] itself. Collect all values in a global set.",
i:"arr = [1,1,2]",o:"3",time:"O(n log max)",space:"O(n log max)",
code:C(`
class Solution:
    def subarrayBitwiseORs(self, arr):
        res = set()
        cur = set()
        for x in arr:
            cur = {x | y for y in cur} | {x}
            res |= cur
        return len(res)
`)});
lite({id:2787,slug:"ways-to-express-an-integer-as-sum-of-powers",title:"Ways to Express an Integer as Sum of Powers",level:"Medium",topic:DP,name:"0/1 knapsack with i^x items",
w:"n=10, x=2: 1² + 3² = 10 is the only way → 1.",k:"Use each positive integer at most once, contributing i^x. dp[s] = number of ways to reach sum s; process each i with i^x ≤ n and update sums from high to low. Modulo 1e9+7.",
i:"n = 10, x = 2",o:"1",time:"O(n·n^(1/x))",space:"O(n)",
code:C(`
class Solution:
    def numberOfWays(self, n, x):
        MOD = 10**9 + 7
        dp = [1] + [0] * n
        i = 1
        while i ** x <= n:
            p = i ** x
            for s in range(n, p - 1, -1):
                dp[s] = (dp[s] + dp[s - p]) % MOD
            i += 1
        return dp[n]
`)});
lite({id:837,slug:"new-21-game",title:"New 21 Game",level:"Medium",topic:DP,name:"Sliding window of probabilities",
w:"n=6, k=1, maxPts=10: Alice draws once; the chance of ending ≤ 6 is 0.6.",k:"dp[s] = probability of ever having s points. Alice stops once she has ≥ k points. dp[s] = (sum of dp[s − j] for j = 1…maxPts over states < k) / maxPts, kept with a sliding window sum. The answer is the sum of dp[s] for k ≤ s ≤ n.",
i:"n = 6, k = 1, maxPts = 10",o:"0.6",time:"O(n)",space:"O(n)",
code:C(`
class Solution:
    def new21Game(self, n, k, maxPts):
        if k == 0 or n >= k + maxPts - 1:
            return 1.0
        dp = [0.0] * (n + 1)
        dp[0] = 1.0
        window = 1.0
        for s in range(1, n + 1):
            dp[s] = window / maxPts
            if s < k:
                window += dp[s]
            if s - maxPts >= 0 and s - maxPts < k:
                window -= dp[s - maxPts]
        return sum(dp[k:])
`)});
lite({id:1504,slug:"count-submatrices-with-all-ones",title:"Count Submatrices With All Ones",level:"Medium",topic:MX,name:"Histogram heights per row",
w:"[[1,0,1],[1,1,0],[1,1,0]] contains 13 all-ones submatrices.",k:"Let h[j] be the number of consecutive ones above (and including) the current row in column j. For each row and each column j count the rectangles whose bottom-right corner is (row, j): extend leftwards keeping the minimum height and add it up.",
i:"mat = [[1,0,1],[1,1,0],[1,1,0]]",o:"13",time:"O(m·n²)",space:"O(n)",
code:C(`
class Solution:
    def numSubmat(self, mat):
        m, n = len(mat), len(mat[0])
        h = [0] * n
        total = 0
        for i in range(m):
            for j in range(n):
                h[j] = h[j] + 1 if mat[i][j] else 0
            for j in range(n):
                low = h[j]
                for k in range(j, -1, -1):
                    low = min(low, h[k])
                    if low == 0:
                        break
                    total += low
        return total
`)});
lite({id:2327,slug:"number-of-people-aware-of-a-secret",title:"Number of People Aware of a Secret",level:"Medium",topic:DP,name:"Daily DP with a sliding sum of sharers",
w:"n=6, delay=2, forget=4 → 5 people know the secret on day 6.",k:"Let new[d] be the people who learn the secret on day d. A person starts sharing delay days later and stops forget days after learning. new[d] = sum of new[d − forget + 1 … d − delay] (those currently allowed to share). The answer is the sum of new over the last `forget` days. Modulo 1e9+7.",
i:"n = 6, delay = 2, forget = 4",o:"5",time:"O(n)",space:"O(n)",
code:C(`
class Solution:
    def peopleAwareOfSecret(self, n, delay, forget):
        MOD = 10**9 + 7
        new = [0] * (n + 1)
        new[1] = 1
        sharing = 0
        for d in range(2, n + 1):
            if d - delay >= 1:
                sharing += new[d - delay]
            if d - forget >= 1:
                sharing -= new[d - forget]
            new[d] = sharing % MOD
        return sum(new[max(1, n - forget + 1):]) % MOD
`)});
lite({id:3005,slug:"count-elements-with-maximum-frequency",title:"Count Elements With Maximum Frequency",level:"Easy",topic:HM,name:"Sum the counts equal to the maximum",
w:"[1,2,2,3,1,4]: 1 and 2 both appear twice → 4 elements.",k:"Count each value; the answer is (max frequency) × (how many values have that frequency).",
i:"nums = [1,2,2,3,1,4]",o:"4",time:"O(n)",space:"O(n)",
code:C(`
class Solution:
    def maxFrequencyElements(self, nums):
        cnt = Counter(nums)
        top = max(cnt.values())
        return top * sum(1 for v in cnt.values() if v == top)
`)});
lite({id:3217,slug:"delete-nodes-from-linked-list-present-in-array",title:"Delete Nodes From Linked List Present in Array",level:"Medium",topic:LL,name:"Skip nodes whose value is in a set",
w:"nums {1,2,3}, list 1→2→3→4→5 → 4→5.",k:"Put nums in a set and walk the list with a dummy head, linking only nodes whose value is not in the set.",
i:"nums = [1,2,3], head = [1,2,3,4,5]",o:"[4, 5]",time:"O(n + m)",space:"O(m)",
code:C(`
class Solution:
    def modifiedList(self, nums, head):
        bad = set(nums)
        dummy = tail = ListNode()
        while head:
            if head.val not in bad:
                tail.next = head
                tail = head
            head = head.next
        tail.next = None
        return dummy.next
`)});
lite({id:3010,slug:"divide-an-array-into-subarrays-with-minimum-cost-i",title:"Divide an Array into Subarrays With Minimum Cost I",level:"Easy",topic:SRT,name:"First element plus the two smallest others",
w:"[1,2,3,12]: split [1],[2],[3,12] → 1 + 2 + 3 = 6.",k:"The cost of a subarray is its first element. Three subarrays always include nums[0] as a first element; the other two first elements can be any two later elements, so take the two smallest of nums[1:].",
i:"nums = [1,2,3,12]",o:"6",time:"O(n log n)",space:"O(n)",
code:C(`
class Solution:
    def minimumCost(self, nums):
        return nums[0] + sum(sorted(nums[1:])[:2])
`)});
lite({id:396,slug:"rotate-function",title:"Rotate Function",level:"Medium",topic:MB,name:"Update F(k) from F(k−1) in O(1)",
w:"[4,3,2,6]: F(0)=25, F(1)=16, F(2)=23, F(3)=26 → 26.",k:"F(k) = Σ i · arr_k[i] for the array rotated k times. Going from F(k−1) to F(k): F(k) = F(k−1) + sum(nums) − n · nums[n − k]. Compute F(0), update n−1 times and keep the maximum.",
i:"nums = [4,3,2,6]",o:"26",time:"O(n)",space:"O(1)",
code:C(`
class Solution:
    def maxRotateFunction(self, nums):
        n, total = len(nums), sum(nums)
        f = sum(i * x for i, x in enumerate(nums))
        best = f
        for k in range(1, n):
            f += total - n * nums[n - k]
            best = max(best, f)
        return best
`)});
lite({id:3302,slug:"find-the-lexicographically-smallest-valid-sequence",title:"Find the Lexicographically Smallest Valid Sequence",level:"Medium",topic:GD,name:"Greedy with a suffix feasibility check",
w:"word1 'vbcca', word2 'abc': indices [0,1,2] (v differs once, the rest match) is the smallest valid sequence.",k:"We need indices i₀<i₁<… so that word1 at those indices equals word2 with at most one mismatch, lexicographically smallest. Precompute suf[j]: the latest start in word1 from which word2[j:] can still be matched exactly as a subsequence. Greedily take the earliest matching index for each letter; if it mismatches, spend the single skip only when the rest can still be matched exactly after that index.",
i:"word1 = \"vbcca\", word2 = \"abc\"",o:"[0, 1, 2]",time:"O(n + m)",space:"O(m)",
code:C(`
class Solution:
    def validSequence(self, word1, word2):
        n, m = len(word1), len(word2)
        suf = [-1] * (m + 1)
        j = m - 1
        for i in range(n - 1, -1, -1):
            if j >= 0 and word1[i] == word2[j]:
                suf[j] = i
                j -= 1
        res = []
        j = 0
        skipped = False
        for i in range(n):
            if j == m:
                break
            if word1[i] == word2[j]:
                res.append(i)
                j += 1
            elif not skipped and (j + 1 == m or suf[j + 1] > i):
                res.append(i)
                j += 1
                skipped = True
        return res if j == m else []
`)});
lite({id:3718,slug:"smallest-missing-multiple-of-k",title:"Smallest Missing Multiple of K",level:"Easy",topic:HM,name:"Walk through k, 2k, 3k …",
w:"[8,2,3,4,6], k=2: 2, 4, 6, 8 are present; 10 is missing → 10.",k:"Put nums in a set and test k, 2k, 3k … in order; the first multiple not present is the answer.",
i:"nums = [8,2,3,4,6], k = 2",o:"10",time:"O(n)",space:"O(n)",
code:C(`
class Solution:
    def missingMultiple(self, nums, k):
        s = set(nums)
        m = k
        while m in s:
            m += k
        return m
`)});
lite({id:836,slug:"rectangle-overlap",title:"Rectangle Overlap",level:"Easy",topic:MB,name:"The projections must overlap on both axes",
w:"[0,0,2,2] and [1,1,3,3] overlap in a 1×1 square → true; touching edges do not count.",k:"Two axis-aligned rectangles overlap with positive area exactly when their x-intervals overlap and their y-intervals overlap (strictly): min(x2) > max(x1) and min(y2) > max(y1).",
i:"rec1 = [0,0,2,2], rec2 = [1,1,3,3]",o:"true",time:"O(1)",space:"O(1)",
code:C(`
class Solution:
    def isRectangleOverlap(self, rec1, rec2):
        return min(rec1[2], rec2[2]) > max(rec1[0], rec2[0]) and min(rec1[3], rec2[3]) > max(rec1[1], rec2[1])
`)});
lite({id:506,slug:"relative-ranks",title:"Relative Ranks",level:"Easy",topic:SRT,name:"Sort scores, map to medals",
w:"[5,4,3,2,1] → ['Gold Medal','Silver Medal','Bronze Medal','4','5'].",k:"Sort the scores in descending order and give the first three medals and the rest their place number. Map every score back to its label.",
i:"score = [5,4,3,2,1]",o:"['Gold Medal', 'Silver Medal', 'Bronze Medal', '4', '5']",time:"O(n log n)",space:"O(n)",
code:C(`
class Solution:
    def findRelativeRanks(self, score):
        labels = {}
        medals = ["Gold Medal", "Silver Medal", "Bronze Medal"]
        for rank, s in enumerate(sorted(score, reverse=True)):
            labels[s] = medals[rank] if rank < 3 else str(rank + 1)
        return [labels[s] for s in score]
`)});
lite({id:513,slug:"find-bottom-left-tree-value",title:"Find Bottom Left Tree Value",level:"Medium",topic:BT,name:"BFS right-to-left; the last node is the answer",
w:"[2,1,3] → the bottom row's leftmost value is 1.",k:"Do a level-order traversal pushing the right child before the left child. The last node taken from the queue is the leftmost node of the last level.",
i:"root = [2,1,3]",o:"1",time:"O(n)",space:"O(w)",
code:C(`
class Solution:
    def findBottomLeftValue(self, root):
        q = deque([root])
        node = root
        while q:
            node = q.popleft()
            if node.right:
                q.append(node.right)
            if node.left:
                q.append(node.left)
        return node.val
`)});
lite({id:997,slug:"find-the-town-judge",title:"Find the Town Judge",level:"Easy",topic:GR,name:"Trust balance: in-degree minus out-degree",
w:"n=2, trust [[1,2]] → person 2 is trusted by 1 and trusts nobody → 2.",k:"The judge is trusted by everyone else (n−1) and trusts nobody. Keep a score per person: +1 when trusted, −1 when trusting someone. The judge's score is n−1.",
i:"n = 2, trust = [[1,2]]",o:"2",time:"O(n + t)",space:"O(n)",
code:C(`
class Solution:
    def findJudge(self, n, trust):
        score = [0] * (n + 1)
        for a, b in trust:
            score[a] -= 1
            score[b] += 1
        for i in range(1, n + 1):
            if score[i] == n - 1:
                return i
        return -1
`)});
lite({id:1002,slug:"find-common-characters",title:"Find Common Characters",level:"Easy",topic:HM,name:"Intersect the letter counters",
w:"['bella','label','roller'] share e, l, l → ['e','l','l'].",k:"Intersect the Counters of all words (minimum count per letter) and expand the result.",
i:"words = [\"bella\",\"label\",\"roller\"]",o:"['e', 'l', 'l']",time:"O(total length)",space:"O(1)",
code:C(`
class Solution:
    def commonChars(self, words):
        common = Counter(words[0])
        for w in words[1:]:
            common &= Counter(w)
        return sorted(common.elements())
`)});
lite({id:1089,slug:"duplicate-zeros",title:"Duplicate Zeros",level:"Easy",topic:TP,name:"Count the zeros, fill from the back",
w:"[1,0,2,3,0,4,5,0] → [1,0,0,2,3,0,0,4].",k:"Count how many zeros will be duplicated so we know how far elements shift. Walk from the end writing each element to its final position (and a second 0 for zeros), skipping writes beyond the array.",
i:"arr = [1,0,2,3,0,4,5,0]",o:"[1, 0, 0, 2, 3, 0, 0, 4]",time:"O(n)",space:"O(1)",
code:C(`
class Solution:
    def duplicateZeros(self, arr):
        n = len(arr)
        zeros = arr.count(0)
        i = n - 1
        j = n + zeros - 1
        while i >= 0 and j >= 0:
            if j < n:
                arr[j] = arr[i]
            if arr[i] == 0:
                j -= 1
                if j < n:
                    arr[j] = 0
            i -= 1
            j -= 1
        return arr
`)});
lite({id:1653,slug:"minimum-deletions-to-make-string-balanced",title:"Minimum Deletions to Make String Balanced",level:"Medium",topic:DP,name:"One pass: delete an 'a' or a 'b' at each 'a'",
w:"'aababbab' → delete two characters to get 'aaabbb'-style order → 2.",k:"A string is balanced when no 'b' comes before an 'a'. Scan left to right keeping the number of 'b's seen and the best deletion count: at an 'a' either delete it (cost+1) or delete all earlier 'b's (cost = count of b); keep the smaller.",
i:"s = \"aababbab\"",o:"2",time:"O(n)",space:"O(1)",
code:C(`
class Solution:
    def minimumDeletions(self, s):
        res = bees = 0
        for c in s:
            if c == 'b':
                bees += 1
            else:
                res = min(res + 1, bees)
        return res
`)});
lite({id:2574,slug:"left-and-right-sum-differences",title:"Left and Right Sum Differences",level:"Easy",topic:PS,name:"|left sum − right sum| at each index",
w:"[10,4,8,3] → [15,1,11,22].",k:"Keep a running left sum; the right sum is total − left − nums[i]. The answer at i is their absolute difference.",
i:"nums = [10,4,8,3]",o:"[15, 1, 11, 22]",time:"O(n)",space:"O(n)",
code:C(`
class Solution:
    def leftRightDifference(self, nums):
        total = sum(nums)
        left = 0
        res = []
        for x in nums:
            res.append(abs(left - (total - left - x)))
            left += x
        return res
`)});
lite({id:3110,slug:"score-of-a-string",title:"Score of a String",level:"Easy",topic:ARR,name:"Sum of neighbouring ASCII differences",
w:"'hello' → |h−e| + |e−l| + |l−l| + |l−o| = 13.",k:"Add up the absolute difference of the ASCII (American Standard Code for Information Interchange) codes of every two neighbouring characters.",
i:"s = \"hello\"",o:"13",time:"O(n)",space:"O(1)",
code:C(`
class Solution:
    def scoreOfString(self, s):
        return sum(abs(ord(a) - ord(b)) for a, b in zip(s, s[1:]))
`)});
lite({id:942,slug:"di-string-match",title:"DI String Match",level:"Easy",topic:TP,name:"Take from the ends of 0…n",
w:"'IDID' → [0,4,1,3,2].",k:"Keep the smallest and largest unused numbers. For an 'I' place the smallest (so the next is larger), for a 'D' place the largest; the last position gets the remaining number.",
i:"s = \"IDID\"",o:"[0, 4, 1, 3, 2]",time:"O(n)",space:"O(n)",
code:C(`
class Solution:
    def diStringMatch(self, s):
        lo, hi = 0, len(s)
        res = []
        for c in s:
            if c == 'I':
                res.append(lo)
                lo += 1
            else:
                res.append(hi)
                hi -= 1
        res.append(lo)
        return res
`)});
lite({id:3381,slug:"maximum-subarray-sum-with-length-divisible-by-k",title:"Maximum Subarray Sum With Length Divisible by K",level:"Medium",topic:PS,name:"Prefix sums grouped by index mod k",
w:"[1,2], k=1 → the whole array (length 2 divisible by 1) sums to 3.",k:"A subarray (i, j] has length divisible by k exactly when i ≡ j (mod k). Keep, for each remainder, the smallest prefix sum seen so far; at each j the best subarray ending there is prefix[j] − min prefix with the same remainder.",
i:"nums = [1,2], k = 1",o:"3",time:"O(n)",space:"O(k)",
code:C(`
class Solution:
    def maxSubarraySum(self, nums, k):
        INF = float('inf')
        best_prefix = [INF] * k
        best_prefix[0] = 0
        pre = 0
        ans = -INF
        for j, x in enumerate(nums, 1):
            pre += x
            r = j % k
            if best_prefix[r] != INF:
                ans = max(ans, pre - best_prefix[r])
            best_prefix[r] = min(best_prefix[r], pre)
        return ans
`)});
lite({id:1408,slug:"string-matching-in-an-array",title:"String Matching in an Array",level:"Easy",topic:ARR,name:"A word contained in another word",
w:"['mass','as','hero','superhero'] → 'as' is in 'mass' and 'hero' is in 'superhero'.",k:"For every word check whether it occurs inside any other word.",
i:"words = [\"mass\",\"as\",\"hero\",\"superhero\"]",o:"['as', 'hero']",time:"O(n²·L)",space:"O(1)",
code:C(`
class Solution:
    def stringMatching(self, words):
        return [w for w in words if any(w != o and w in o for o in words)]
`)});
lite({id:1726,slug:"tuple-with-same-product",title:"Tuple with Same Product",level:"Medium",topic:HM,name:"Count pairs with the same product",
w:"[2,3,4,6]: 2·6 = 3·4 = 12 → 8 tuples.",k:"Count how many pairs (a, b) give each product. A product that arises from c pairs gives c(c−1)/2 ways to choose two pairs, and each choice yields 8 tuples (orderings).",
i:"nums = [2,3,4,6]",o:"8",time:"O(n²)",space:"O(n²)",
code:C(`
class Solution:
    def tupleSameProduct(self, nums):
        cnt = Counter()
        for i in range(len(nums)):
            for j in range(i + 1, len(nums)):
                cnt[nums[i] * nums[j]] += 1
        return 8 * sum(c * (c - 1) // 2 for c in cnt.values())
`)});
lite({id:310,slug:"minimum-height-trees",title:"Minimum Height Trees",level:"Medium",topic:GR,name:"Peel leaves until one or two nodes remain",
w:"A star with centre 1 and leaves 0, 2, 3: the centre is the only minimum-height root → [1].",k:"The roots of minimum height trees are the centre(s) of the tree. Repeatedly remove all current leaves (degree 1) like peeling an onion; when at most two nodes remain, they are the answer.",
i:"n = 4, edges = [[1,0],[1,2],[1,3]]",o:"[1]",time:"O(n)",space:"O(n)",
code:C(`
class Solution:
    def findMinHeightTrees(self, n, edges):
        if n <= 2:
            return list(range(n))
        g = [set() for _ in range(n)]
        for a, b in edges:
            g[a].add(b)
            g[b].add(a)
        leaves = [i for i in range(n) if len(g[i]) == 1]
        remaining = n
        while remaining > 2:
            remaining -= len(leaves)
            nxt = []
            for leaf in leaves:
                nb = g[leaf].pop()
                g[nb].discard(leaf)
                if len(g[nb]) == 1:
                    nxt.append(nb)
            leaves = nxt
        return sorted(leaves)
`)});
lite({id:575,slug:"distribute-candies",title:"Distribute Candies",level:"Easy",topic:HM,name:"min(n/2, number of kinds)",
w:"[1,1,2,2,3,3]: 3 kinds, may eat 3 candies → 3.",k:"Alice can eat n/2 candies. She gets the most types by eating different ones: min(number of distinct types, n/2).",
i:"candyType = [1,1,2,2,3,3]",o:"3",time:"O(n)",space:"O(n)",
code:C(`
class Solution:
    def distributeCandies(self, candyType):
        return min(len(set(candyType)), len(candyType) // 2)
`)});
lite({id:1749,slug:"maximum-absolute-sum-of-any-subarray",title:"Maximum Absolute Sum of Any Subarray",level:"Medium",topic:PS,name:"Largest prefix sum minus smallest prefix sum",
w:"[1,-3,2,3,-4]: best subarray [2,3] = 5 → 5.",k:"A subarray sum is prefix[j] − prefix[i]. The largest absolute value is therefore (max prefix − min prefix), including the empty prefix 0.",
i:"nums = [1,-3,2,3,-4]",o:"5",time:"O(n)",space:"O(1)",
code:C(`
class Solution:
    def maxAbsoluteSum(self, nums):
        run = hi = lo = 0
        for x in nums:
            run += x
            hi = max(hi, run)
            lo = min(lo, run)
        return hi - lo
`)});
lite({id:2401,slug:"longest-nice-subarray",title:"Longest Nice Subarray",level:"Medium",topic:SW,name:"Window whose elements have disjoint bits",
w:"[1,3,8,48,10]: 3, 8, 48 have pairwise AND 0 → length 3.",k:"A nice subarray has pairwise AND = 0, i.e. no bit appears in two elements. Keep the OR of the window; when the new number overlaps with it, remove elements from the left (XOR (exclusive OR) them out) until it does not.",
i:"nums = [1,3,8,48,10]",o:"3",time:"O(n)",space:"O(1)",
code:C(`
class Solution:
    def longestNiceSubarray(self, nums):
        used = left = best = 0
        for r, x in enumerate(nums):
            while used & x:
                used ^= nums[left]
                left += 1
            used |= x
            best = max(best, r - left + 1)
        return best
`)});
lite({id:3394,slug:"check-if-grid-can-be-cut-into-sections",title:"Check if Grid can be Cut into Sections",level:"Medium",topic:IV,name:"Two cuts along one axis: count merged intervals",
w:"Four rectangles that separate cleanly into three groups by two horizontal cuts → true.",k:"Two parallel cuts (both horizontal or both vertical) must split the rectangles into three non-empty groups with none crossing a cut. Project the rectangles on one axis, sort and merge overlapping intervals; if at least three merged groups remain you can cut between them. Try both axes.",
i:"n = 5, rectangles = [[1,0,5,2],[0,2,2,4],[3,2,5,3],[0,4,4,5]]",o:"true",time:"O(r log r)",space:"O(r)",
code:C(`
class Solution:
    def checkValidCuts(self, n, rectangles):
        def groups(lo_idx, hi_idx):
            ivs = sorted((r[lo_idx], r[hi_idx]) for r in rectangles)
            count = 0
            end = -1
            for a, b in ivs:
                if a >= end:
                    count += 1
                end = max(end, b)
            return count
        return groups(0, 2) >= 3 or groups(1, 3) >= 3
`)});
lite({id:2874,slug:"maximum-value-of-an-ordered-triplet-ii",title:"Maximum Value of an Ordered Triplet II",level:"Medium",topic:PS,name:"Best (nums[i] − nums[j]) so far, times nums[k]",
w:"[12,6,1,2,7]: (12 − 1) · 7 = 77.",k:"Maximise (nums[i] − nums[j]) · nums[k] for i<j<k. Scan k from left to right keeping the maximum prefix value and the maximum difference (max prefix − current) seen so far; the candidate is best_diff × nums[k]. The answer is at least 0.",
i:"nums = [12,6,1,2,7]",o:"77",time:"O(n)",space:"O(1)",
code:C(`
class Solution:
    def maximumTripletValue(self, nums):
        best = 0
        top = 0
        diff = 0
        for x in nums:
            best = max(best, diff * x)
            diff = max(diff, top - x)
            top = max(top, x)
        return best
`)});
lite({id:2843,slug:"count-symmetric-integers",title:"Count Symmetric Integers",level:"Easy",topic:MB,name:"Compare half sums of even-length numbers",
w:"Between 1 and 100 the symmetric integers are 11, 22, …, 99 → 9.",k:"An integer with an even number of digits is symmetric if the sum of the first half equals the sum of the second half. Check every number in the range.",
i:"low = 1, high = 100",o:"9",time:"O(range·digits)",space:"O(1)",
code:C(`
class Solution:
    def countSymmetricIntegers(self, low, high):
        res = 0
        for x in range(low, high + 1):
            s = str(x)
            h = len(s) // 2
            if len(s) % 2 == 0 and sum(map(int, s[:h])) == sum(map(int, s[h:])):
                res += 1
        return res
`)});
lite({id:2404,slug:"most-frequent-even-element",title:"Most Frequent Even Element",level:"Easy",topic:HM,name:"Count evens; most frequent, smallest on ties",
w:"[0,1,2,2,4,4,1] → 2 and 4 both appear twice → smaller is 2.",k:"Count only the even numbers and pick the one with the highest count (smallest value on ties); return −1 if there is no even number.",
i:"nums = [0,1,2,2,4,4,1]",o:"2",time:"O(n)",space:"O(n)",
code:C(`
class Solution:
    def mostFrequentEven(self, nums):
        cnt = Counter(x for x in nums if x % 2 == 0)
        if not cnt:
            return -1
        return min(cnt, key=lambda x: (-cnt[x], x))
`)});
lite({id:838,slug:"push-dominoes",title:"Push Dominoes",level:"Medium",topic:TP,name:"Look at the nearest push on each side",
w:"'.L.R...LR..L..' → 'LL.RR.LLRRLL..'.",k:"For each upright domino the force comes from the nearest 'R' to its left and the nearest 'L' to its right. Compute the distance to the nearest pushing domino from each side (an 'L' blocks an earlier 'R' and vice versa); the nearer push wins, equal distances cancel.",
i:"dominoes = \".L.R...LR..L..\"",o:"\"LL.RR.LLRRLL..\"",time:"O(n)",space:"O(n)",
code:C(`
class Solution:
    def pushDominoes(self, dominoes):
        n = len(dominoes)
        force = [0] * n
        f = 0
        for i in range(n):
            if dominoes[i] == 'R':
                f = n
            elif dominoes[i] == 'L':
                f = 0
            else:
                f = max(f - 1, 0)
            force[i] += f
        f = 0
        for i in range(n - 1, -1, -1):
            if dominoes[i] == 'L':
                f = n
            elif dominoes[i] == 'R':
                f = 0
            else:
                f = max(f - 1, 0)
            force[i] -= f
        return ''.join('R' if x > 0 else 'L' if x < 0 else '.' for x in force)
`)});
lite({id:3362,slug:"zero-array-transformation-iii",title:"Zero Array Transformation III",level:"Medium",topic:HP,name:"Sweep with a heap of query end points",
w:"nums [2,0,2], queries [[0,2],[0,2],[1,1]]: two queries are enough, so one can be removed → 1.",k:"Sweep i from left to right. Queries starting at i go into a max-heap keyed by end. If the number of active (applied) queries covering i is less than nums[i], apply more queries from the heap choosing those that reach farthest (largest end ≥ i); if the heap runs dry return −1. Unused queries can be removed: answer = total − used.",
i:"nums = [2,0,2], queries = [[0,2],[0,2],[1,1]]",o:"1",time:"O((n + q) log q)",space:"O(q)",
code:C(`
class Solution:
    def maxRemoval(self, nums, queries):
        queries.sort()
        heap = []
        ends = []
        j = used = 0
        for i, need in enumerate(nums):
            while j < len(queries) and queries[j][0] <= i:
                heappush(heap, -queries[j][1])
                j += 1
            while ends and ends[0] < i:
                heappop(ends)
            while len(ends) < need:
                if not heap or -heap[0] < i:
                    return -1
                heappush(ends, -heappop(heap))
                used += 1
        return len(queries) - used
`)});
lite({id:1544,slug:"make-the-string-great",title:"Make The String Great",level:"Easy",topic:STK,name:"Stack: cancel adjacent aA / Aa pairs",
w:"'leEeetcode' → 'leetcode'.",k:"Push characters on a stack; if the new character is the same letter in the other case as the top, pop instead.",
i:"s = \"leEeetcode\"",o:"\"leetcode\"",time:"O(n)",space:"O(n)",
code:C(`
class Solution:
    def makeGood(self, s):
        st = []
        for c in s:
            if st and abs(ord(st[-1]) - ord(c)) == 32:
                st.pop()
            else:
                st.append(c)
        return ''.join(st)
`)});
lite({id:2460,slug:"apply-operations-to-an-array",title:"Apply Operations to an Array",level:"Easy",topic:TP,name:"Merge equal neighbours, then move zeros to the end",
w:"[1,2,2,1,1,0] → merge → [1,4,0,2,0,0] → shift zeros → [1,4,2,0,0,0].",k:"For i from 0: if nums[i] == nums[i+1], double nums[i] and set nums[i+1] = 0. Afterwards move all zeros to the end keeping the order of non-zero numbers.",
i:"nums = [1,2,2,1,1,0]",o:"[1, 4, 2, 0, 0, 0]",time:"O(n)",space:"O(n)",
code:C(`
class Solution:
    def applyOperations(self, nums):
        for i in range(len(nums) - 1):
            if nums[i] == nums[i + 1]:
                nums[i] *= 2
                nums[i + 1] = 0
        nonzero = [x for x in nums if x]
        return nonzero + [0] * (len(nums) - len(nonzero))
`)});
lite({id:2643,slug:"row-with-maximum-ones",title:"Row With Maximum Ones",level:"Easy",topic:MX,name:"Count ones per row; smallest index on ties",
w:"[[0,1],[1,0]] → both rows have one 1 → [0, 1].",k:"Count the ones in each row and return [row index, count] for the row with the most ones (the smallest index on ties).",
i:"mat = [[0,1],[1,0]]",o:"[0, 1]",time:"O(m·n)",space:"O(1)",
code:C(`
class Solution:
    def rowAndMaximumOnes(self, mat):
        best = max(range(len(mat)), key=lambda i: (sum(mat[i]), -i))
        return [best, sum(mat[best])]
`)});
lite({id:2411,slug:"smallest-subarrays-with-maximum-bitwise-or",title:"Smallest Subarrays With Maximum Bitwise OR",level:"Medium",topic:MB,name:"Last position of each bit, scanning from the right",
w:"[1,0,2,1,3] → [3,3,2,2,1].",k:"For each start i the maximum OR over subarrays starting at i equals the OR of nums[i:]. The shortest subarray achieving it must reach the latest 'first occurrence' of every bit: keep last[b] = nearest index ≥ i containing bit b (scanning from the right) and take max(last) − i + 1.",
i:"nums = [1,0,2,1,3]",o:"[3, 3, 2, 2, 1]",time:"O(n·30)",space:"O(30)",
code:C(`
class Solution:
    def smallestSubarrays(self, nums):
        n = len(nums)
        last = [0] * 31
        res = [1] * n
        for i in range(n - 1, -1, -1):
            for b in range(31):
                if (nums[i] >> b) & 1:
                    last[b] = i
            res[i] = max(1, max(last) - i + 1)
        return res
`)});
lite({id:2264,slug:"largest-3-same-digit-number-in-string",title:"Largest 3-Same-Digit Number in String",level:"Easy",topic:ARR,name:"Find triples of equal digits, take the largest",
w:"'6777133339' → '777' and '333': the largest is '777'.",k:"Check each window of three characters; if they are equal it is a candidate. Return the largest candidate (or an empty string).",
i:"num = \"6777133339\"",o:"\"777\"",time:"O(n)",space:"O(1)",
code:C(`
class Solution:
    def largestGoodInteger(self, num):
        best = ""
        for i in range(len(num) - 2):
            if num[i] == num[i + 1] == num[i + 2]:
                best = max(best, num[i:i + 3])
        return best
`)});
lite({id:342,slug:"power-of-four",title:"Power of Four",level:"Easy",topic:MB,name:"Single set bit at an even position",
w:"16 = 4² → true; 8 is a power of two but not four → false.",k:"A power of four has exactly one set bit, and that bit is at an even position. So n > 0, n & (n−1) == 0 and n & 0x55555555 != 0.",
i:"n = 16",o:"true",time:"O(1)",space:"O(1)",
code:C(`
class Solution:
    def isPowerOfFour(self, n):
        return n > 0 and n & (n - 1) == 0 and n & 0x55555555 != 0
`)});
lite({id:1323,slug:"maximum-69-number",title:"Maximum 69 Number",level:"Easy",topic:MB,name:"Change the first 6 to a 9",
w:"9669 → change the first 6: 9969.",k:"Changing a digit from 6 to 9 gains the most when done at the highest position. Replace the first '6' in the number by '9' (nothing changes if there is none).",
i:"num = 9669",o:"9969",time:"O(d)",space:"O(d)",
code:C(`
class Solution:
    def maximum69Number(self, num):
        return int(str(num).replace('6', '9', 1))
`)});
lite({id:1300,slug:"sum-of-mutated-array-closest-to-target",title:"Sum of Mutated Array Closest to Target",level:"Medium",topic:BS,name:"Binary search the cap value",
w:"arr [4,9,3], target 10: capping values at 3 gives 3 + 3 + 3 = 9 and at 4 gives 4 + 4 + 3 = 11; both are 1 away, pick the smaller value 3.",k:"Replace every number larger than value by value. The sum increases with value, so binary search the value in [0, max(arr)]; compare the two values around the target and pick the one with the smaller difference (smaller value on ties).",
i:"arr = [4,9,3], target = 10",o:"3",time:"O(n log max)",space:"O(1)",
code:C(`
class Solution:
    def findBestValue(self, arr, target):
        def total(v):
            return sum(min(x, v) for x in arr)
        lo, hi = 0, max(arr)
        while lo < hi:
            mid = (lo + hi) // 2
            if total(mid) >= target:
                hi = mid
            else:
                lo = mid + 1
        if lo > 0 and abs(total(lo - 1) - target) <= abs(total(lo) - target):
            return lo - 1
        return lo
`)});
