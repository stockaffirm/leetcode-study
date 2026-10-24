const {lite}=require("./lib");
const C=s=>s.replace(/^\n/,"").replace(/\n$/,"").split("\n");
const ARR="Array / String",HM="Hash Map / Set",STK="Stack / Monotonic Stack",BT="Binary Tree",GR="Graph",HP="Heap",DP="Dynamic Programming",GD="Greedy",MB="Math / Bit Manipulation",BS="Binary Search",SRT="Sorting",SW="Sliding Window",MX="Matrix",UF="Union Find / Segment Tree",TP="Two Pointers",IV="Intervals",BTK="Backtracking",DS="Design",LL="Linked List",TR="Trie";
// ---- Meta (5/8)
lite({id:3371,slug:"identify-the-largest-outlier-in-an-array",title:"Identify the Largest Outlier in an Array",level:"Medium",topic:HM,name:"Try every value as the sum element",
w:"[2,3,5,10]: if 5 is the sum of the specials 2 and 3, the outlier is 10. The total is 20 = 2·5 + 10.",k:"If s is the sum element and o the outlier, the total of the array is (special numbers) + s + o = 2s + o. So for every candidate s the outlier must be total − 2s. Check that this number exists (at a different position) and keep the biggest.",
i:"nums = [2,3,5,10]",o:"10",time:"O(n)",space:"O(n)",
code:C(`
class Solution:
    def getLargestOutlier(self, nums):
        total = sum(nums)
        cnt = Counter(nums)
        best = -inf
        for s in cnt:
            o = total - 2 * s
            if o in cnt and (o != s or cnt[s] > 1):
                best = max(best, o)
        return best
`)});
lite({id:3527,slug:"find-the-most-common-response",title:"Find the Most Common Response",level:"Medium",topic:HM,name:"Count each response once per day",
w:"'good' appears on 3 different days, 'ok' and 'bad' on 2 → 'good'. If there is a tie the alphabetically smaller response wins.",k:"Turn every day's list into a set (duplicates within a day count once), count the responses over all days, and take the highest count, breaking ties by the smaller string.",
i:'responses = [["good","ok","good","ok"],["ok","bad","good","ok","ok"],["good"],["bad"]]',o:'"good"',time:"O(total responses)",space:"O(total responses)",
code:C(`
class Solution:
    def findCommonResponse(self, responses):
        cnt = Counter(r for day in responses for r in set(day))
        best = max(cnt.values())
        return min(r for r, c in cnt.items() if c == best)
`)});
lite({id:3545,slug:"minimum-deletions-for-at-most-k-distinct-characters",title:"Minimum Deletions for At Most K Distinct Characters",level:"Easy",topic:GD,name:"Delete the rarest letters completely",
w:"'abc' with k = 2: three different letters, only two allowed → delete one whole letter (they all appear once) → 1 deletion.",k:"To lower the number of distinct letters you must delete ALL copies of some letters. It is cheapest to remove the letters with the smallest counts, so sort the counts and add up the smallest (distinct − k) of them.",
i:'s = "abc", k = 2',o:"1",time:"O(n)",space:"O(1)",
code:C(`
class Solution:
    def minDeletion(self, s, k):
        freq = sorted(Counter(s).values())
        return sum(freq[:max(0, len(freq) - k)])
`)});
lite({id:3477,slug:"fruits-into-baskets-ii",title:"Fruits Into Baskets II",level:"Easy",topic:ARR,name:"Place each fruit in the leftmost fitting basket",
w:"Fruits [4,2,5], baskets [3,5,4]: 4 → basket 5, 2 → basket 3, 5 finds no free basket of size ≥ 5 → 1 fruit type stays unplaced.",k:"Simulate it: for every fruit scan the baskets from the left and take the first unused one that is big enough; otherwise count the fruit as unplaced.",
i:"fruits = [4,2,5], baskets = [3,5,4]",o:"1",time:"O(n²)",space:"O(n)",
code:C(`
class Solution:
    def numOfUnplacedFruits(self, fruits, baskets):
        used = [False] * len(baskets)
        unplaced = 0
        for f in fruits:
            for j, b in enumerate(baskets):
                if not used[j] and b >= f:
                    used[j] = True
                    break
            else:
                unplaced += 1
        return unplaced
`)});
lite({id:3688,slug:"bitwise-or-of-even-numbers-in-an-array",title:"Bitwise OR of Even Numbers in an Array",level:"Easy",topic:MB,name:"OR the even numbers",
w:"The even numbers are 2, 4 and 6: 2 | 4 | 6 = 6.",k:"Start from 0 and OR in every even number.",
i:"nums = [1,2,3,4,5,6]",o:"6",time:"O(n)",space:"O(1)",
code:C(`
class Solution:
    def evenNumberBitwiseORs(self, nums):
        res = 0
        for x in nums:
            if x % 2 == 0:
                res |= x
        return res
`)});
lite({id:3862,slug:"find-the-smallest-balanced-index",title:"Find the Smallest Balanced Index",level:"Medium",topic:"Prefix Sum",name:"Running sum vs. suffix products",
w:"[2,1,2]: at index 1 the left sum is 2 and the product of the right side is 2 → balanced, and it is the smallest such index.",k:"Precompute the product of every suffix. The left sum is at most the total sum, so a suffix product larger than that can never match; cap it to keep the numbers small. Sweep from the left with a running sum and return the first index where the sum equals the product of what remains.",
i:"nums = [2,1,2]",o:"1",time:"O(n)",space:"O(n)",
code:C(`
class Solution:
    def smallestBalancedIndex(self, nums):
        n = len(nums)
        cap = sum(nums) + 1
        suf = [1] * (n + 1)
        for i in range(n - 1, -1, -1):
            suf[i] = min(cap, suf[i + 1] * nums[i])
        left = 0
        for i in range(n):
            if left == suf[i + 1]:
                return i
            left += nums[i]
        return -1
`)});
lite({id:3507,slug:"minimum-pair-removal-to-sort-array-i",title:"Minimum Pair Removal to Sort Array I",level:"Easy",topic:ARR,name:"Simulate the merges",
w:"[5,2,3,1]: merge the cheapest pair 3+1 → [5,2,4]; merge 2+4 → [5,6]. Two operations, and the array is non-decreasing.",k:"Do exactly what the statement says: while the array is not sorted, find the leftmost adjacent pair with the smallest sum, replace it by that sum and count one operation.",
i:"nums = [5,2,3,1]",o:"2",time:"O(n²)",space:"O(n)",
code:C(`
class Solution:
    def minimumPairRemoval(self, nums):
        a = list(nums)
        ops = 0
        while any(a[i] > a[i + 1] for i in range(len(a) - 1)):
            idx = min(range(len(a) - 1), key=lambda i: a[i] + a[i + 1])
            a[idx:idx + 2] = [a[idx] + a[idx + 1]]
            ops += 1
        return ops
`)});
lite({id:3650,slug:"minimum-cost-path-with-edge-reversals",title:"Minimum Cost Path with Edge Reversals",level:"Medium",topic:GR,name:"Dijkstra with extra reversed edges",
w:"0→1 costs 3. At node 1 the edge 3→1 can be reversed to 1→3 for twice its weight (2): total 5.",k:"Using a switch to reverse an incoming edge is the same as being allowed to walk any edge backwards at double cost. So add, for every edge u→v of weight w, an extra edge v→u of weight 2w and run Dijkstra from 0 to n − 1.",
i:"n=4, edges=[[0,1,3],[3,1,1],[2,3,4],[0,2,2]]",o:"5",time:"O(E log E)",space:"O(n + E)",
code:C(`
class Solution:
    def minCost(self, n, edges):
        g = defaultdict(list)
        for u, v, w in edges:
            g[u].append((v, w))
            g[v].append((u, 2 * w))
        dist = [inf] * n
        dist[0] = 0
        h = [(0, 0)]
        while h:
            d, u = heappop(h)
            if d > dist[u]:
                continue
            if u == n - 1:
                return d
            for v, w in g[u]:
                if d + w < dist[v]:
                    dist[v] = d + w
                    heappush(h, (d + w, v))
        return -1
`)});
lite({id:3829,slug:"design-ride-sharing-system",title:"Design Ride Sharing System",level:"Medium",topic:DS,name:"Two queues + lazy cancel",
w:"Rider 3 and driver 2 are first in line, so the first match is [2,3]. Rider 1 then cancels, so the next match finds nobody: [-1,-1].",k:"Keep one queue of waiting riders and one of available drivers. A match takes the front of both. For a cancel, remember the id in a set and skip cancelled riders when they reach the front.",
i:"addRider(3), addDriver(2), addRider(1), match, cancelRider(1), match",o:"[2,3], then [-1,-1]",time:"O(1) amortised",space:"O(n)",
code:C(`
class RideSharingSystem:
    def __init__(self):
        self.riders = deque()
        self.drivers = deque()
        self.cancelled = set()
    def addRider(self, riderId):
        self.riders.append(riderId)
    def addDriver(self, driverId):
        self.drivers.append(driverId)
    def matchDriverWithRider(self):
        while self.riders and self.riders[0] in self.cancelled:
            self.riders.popleft()
        if not self.riders or not self.drivers:
            return [-1, -1]
        return [self.drivers.popleft(), self.riders.popleft()]
    def cancelRider(self, riderId):
        self.cancelled.add(riderId)
`)});
lite({id:4025,slug:"minimize-the-maximum-waiting-time-at-synchronized-traffic-lights",title:"Minimize the Maximum Waiting Time at Synchronized Traffic Lights",level:"Medium",topic:GD,name:"Everybody uses the longest green light",
w:"period 8, greens [2,3]: use the light with 3 green seconds for everyone. A car at r = 2 or 0 waits 0; r = 5 waits 8 − 5 = 3; r = 3 waits 8 − 3 = 5 → the worst wait is 5.",k:"Cars may share a light, and a longer green phase never hurts. So every car uses the light with the longest green time g. A car arriving at r = t % period waits 0 if r < g, otherwise period − r. The answer is the largest wait.",
i:"period = 8, lights = [2,3], arrivalTime = [2,5,8,11]",o:"5",time:"O(n + m)",space:"O(1)",
code:C(`
class Solution:
    def minPenalty(self, period, lights, arrivalTime):
        g = max(lights)
        worst = 0
        for t in arrivalTime:
            r = t % period
            if r >= g:
                worst = max(worst, period - r)
        return worst
`)});
lite({id:1522,slug:"diameter-of-n-ary-tree",title:"Diameter of N-Ary Tree",level:"Medium",topic:GR,name:"Two deepest child depths",
w:"The longest path is 5 → 3 → 1 → 2 (or 4): 3 edges.",k:"For every node take the two deepest child subtrees. The longest path through the node is top1 + top2 edges. Return top1 + 1 to the parent, and keep the best path seen.",
i:"root = [1,null,3,2,4,null,5,6]",o:"3",time:"O(n)",space:"O(h)",
code:C(`
class Solution:
    def diameter(self, root):
        best = 0
        def depth(n):
            nonlocal best
            top1 = top2 = 0
            for c in n.children:
                d = depth(c)
                if d > top1:
                    top1, top2 = d, top1
                elif d > top2:
                    top2 = d
            best = max(best, top1 + top2)
            return top1 + 1
        depth(root)
        return best
`)});
lite({id:166,slug:"fraction-to-recurring-decimal",title:"Fraction to Recurring Decimal",level:"Medium",topic:MB,name:"Long division with a remainder map",
w:"4 ÷ 333 = 0.012012012… → '0.(012)'.",k:"Do long division by hand. The digits repeat as soon as a remainder appears for the second time. Store the position where each remainder first appeared and put the brackets around the repeating part.",
i:"numerator = 4, denominator = 333",o:'"0.(012)"',time:"O(d)",space:"O(d)",
code:C(`
class Solution:
    def fractionToDecimal(self, numerator, denominator):
        if numerator == 0:
            return "0"
        sign = "-" if (numerator < 0) != (denominator < 0) else ""
        n, d = abs(numerator), abs(denominator)
        res = [sign + str(n // d)]
        rem = n % d
        if rem == 0:
            return res[0]
        res.append(".")
        seen = {}
        while rem:
            if rem in seen:
                res.insert(seen[rem], "(")
                res.append(")")
                break
            seen[rem] = len(res)
            rem *= 10
            res.append(str(rem // d))
            rem %= d
        return "".join(res)
`)});
lite({id:1295,slug:"find-numbers-with-even-number-of-digits",title:"Find Numbers with Even Number of Digits",level:"Easy",topic:ARR,name:"Count the digits",
w:"12 (2 digits) and 7896 (4 digits) have an even number of digits → 2.",k:"Turn each number into text, take its length and count the even lengths.",
i:"nums = [12,345,2,6,7896]",o:"2",time:"O(n)",space:"O(1)",
code:C(`
class Solution:
    def findNumbers(self, nums):
        return sum(len(str(x)) % 2 == 0 for x in nums)
`)});
lite({id:111,slug:"minimum-depth-of-binary-tree",title:"Minimum Depth of Binary Tree",level:"Easy",topic:BT,name:"BFS to the first leaf",
w:"The closest leaf is 9, two nodes from the root → depth 2.",k:"Level-order search: the first leaf we meet is the closest one, so its level is the minimum depth.",
i:"root = [3,9,20,null,null,15,7]",o:"2",time:"O(n)",space:"O(n)",
code:C(`
class Solution:
    def minDepth(self, root):
        if not root:
            return 0
        q = deque([(root, 1)])
        while q:
            node, d = q.popleft()
            if not node.left and not node.right:
                return d
            if node.left:
                q.append((node.left, d + 1))
            if node.right:
                q.append((node.right, d + 1))
`)});
lite({id:405,slug:"convert-a-number-to-hexadecimal",title:"Convert a Number to Hexadecimal",level:"Easy",topic:MB,name:"Take 4 bits at a time",
w:"26 = 0x1a: the lowest 4 bits are 1010 (a) and the next 4 bits are 0001 (1).",k:"Negative numbers use 32-bit two's complement, so mask them with 0xFFFFFFFF first. Then repeatedly take the lowest 4 bits as a hex digit and shift right by 4.",
i:"num = 26",o:'"1a"',time:"O(1)",space:"O(1)",
code:C(`
class Solution:
    def toHex(self, num):
        if num == 0:
            return "0"
        num &= 0xFFFFFFFF
        digits = "0123456789abcdef"
        res = []
        while num:
            res.append(digits[num & 15])
            num >>= 4
        return "".join(reversed(res))
`)});
lite({id:409,slug:"longest-palindrome",title:"Longest Palindrome",level:"Easy",topic:HM,name:"Use all pairs, plus one middle letter",
w:"'abccccdd' has letters c×4, d×2, a×1, b×1: pairs give 4 + 2 = 6 letters, and one single letter can sit in the middle → 7 (e.g. 'dccaccd').",k:"Count the letters. Every pair of equal letters can go on both sides of the palindrome. If any letter is left over, one of them can be the centre.",
i:'s = "abccccdd"',o:"7",time:"O(n)",space:"O(1)",
code:C(`
class Solution:
    def longestPalindrome(self, s):
        cnt = Counter(s)
        res = sum(c // 2 * 2 for c in cnt.values())
        return res + (1 if any(c % 2 for c in cnt.values()) else 0)
`)});
lite({id:662,slug:"maximum-width-of-binary-tree",title:"Maximum Width of Binary Tree",level:"Medium",topic:BT,name:"BFS with heap-style indices",
w:"The widest level is the third one: positions 0 and 3 (counting the empty slot between) → width 4.",k:"Number the nodes like a heap (children of i are 2i and 2i+1), as if the tree were complete. The width of a level is last index − first index + 1. Subtract the first index of the level to keep numbers small.",
i:"root = [1,3,2,5,3,null,9]",o:"4",time:"O(n)",space:"O(n)",
code:C(`
class Solution:
    def widthOfBinaryTree(self, root):
        best = 0
        q = deque([(root, 0)])
        while q:
            first = q[0][1]
            last = 0
            for _ in range(len(q)):
                node, i = q.popleft()
                i -= first
                last = i
                if node.left:
                    q.append((node.left, 2 * i))
                if node.right:
                    q.append((node.right, 2 * i + 1))
            best = max(best, last + 1)
        return best
`)});
lite({id:745,slug:"prefix-and-suffix-search",title:"Prefix and Suffix Search",level:"Hard",topic:TR,name:"Index every 'suffix#prefix' combination",
w:"WordFilter(['apple']).f('a','e') → 0: the word 'apple' starts with 'a' and ends with 'e'.",k:"Words are short, so precompute every (suffix, prefix) pair of every word as the key 'suffix#prefix' and store the largest word index. A query is then one dictionary lookup of 'suff#pref'.",
i:'WordFilter(["apple"]); f("a","e")',o:"0",time:"query O(1)",space:"O(n · L²)",
code:C(`
class WordFilter:
    def __init__(self, words):
        self.d = {}
        for idx, w in enumerate(words):
            for i in range(len(w) + 1):
                for j in range(len(w) + 1):
                    self.d[w[i:] + "#" + w[:j]] = idx
    def f(self, pref, suff):
        return self.d.get(suff + "#" + pref, -1)
`)});
lite({id:1043,slug:"partition-array-for-maximum-sum",title:"Partition Array for Maximum Sum",level:"Medium",topic:DP,name:"DP over the last block",
w:"[1,15,7,9,2,5,10], k=3: blocks [1,15,7] → 15×3 = 45, [9] → 9, [2,5,10] → 10×3 = 30: total 84.",k:"Cut the array into blocks of length at most k; every block turns into its maximum repeated. dp[i] is the best sum for the first i numbers: try every last block length j ≤ k and take dp[i−j] + j × (max of that block).",
i:"arr = [1,15,7,9,2,5,10], k = 3",o:"84",time:"O(n·k)",space:"O(n)",
code:C(`
class Solution:
    def maxSumAfterPartitioning(self, arr, k):
        n = len(arr)
        dp = [0] * (n + 1)
        for i in range(1, n + 1):
            mx = 0
            for j in range(1, min(k, i) + 1):
                mx = max(mx, arr[i - j])
                dp[i] = max(dp[i], dp[i - j] + mx * j)
        return dp[n]
`)});
lite({id:1287,slug:"element-appearing-more-than-25-in-sorted-array",title:"Element Appearing More Than 25% In Sorted Array",level:"Easy",topic:ARR,name:"Compare with the element n/4 steps ahead",
w:"[1,2,2,6,6,6,6,7,10]: 6 appears 4 times out of 9 (more than a quarter).",k:"The array is sorted, so equal numbers sit together. A value covering more than 25% of the array must also be at distance n/4 from itself: check arr[i] == arr[i + n//4].",
i:"arr = [1,2,2,6,6,6,6,7,10]",o:"6",time:"O(n)",space:"O(1)",
code:C(`
class Solution:
    def findSpecialInteger(self, arr):
        n = len(arr)
        step = n // 4
        for i in range(n - step):
            if arr[i] == arr[i + step]:
                return arr[i]
`)});
lite({id:1382,slug:"balance-a-binary-search-tree",title:"Balance a Binary Search Tree",level:"Medium",topic:BT,name:"In-order list, rebuild from the middle",
w:"A BST that is a straight line 1→2→3→4 becomes a balanced tree rooted at the middle value.",k:"The in-order walk of a BST is sorted. Collect it, then build a new tree: the middle value becomes the root and the left and right halves become the subtrees (recursively).",
i:"root = [1,null,2,null,3,null,4]",o:"a balanced tree such as [3,2,4,1]",time:"O(n)",space:"O(n)",
code:C(`
class Solution:
    def balanceBST(self, root):
        vals = []
        def inorder(n):
            if n:
                inorder(n.left)
                vals.append(n.val)
                inorder(n.right)
        inorder(root)
        def build(l, r):
            if l > r:
                return None
            mid = (l + r + 1) // 2
            return TreeNode(vals[mid], build(l, mid - 1), build(mid + 1, r))
        return build(0, len(vals) - 1)
`)});
lite({id:1357,slug:"apply-discount-every-n-orders",title:"Apply Discount Every n Orders",level:"Medium",topic:DS,name:"Price map + customer counter",
w:"Every 3rd customer gets a 50% discount: the 1st bill 100 + 2·200 = 500 has no discount, the 3rd customer's bill is halved.",k:"Keep a dictionary product → price and a customer counter. A bill is the sum of price × amount; if the counter is a multiple of n apply the percentage discount.",
i:"Cashier(3,50,...); getBill([1,2],[1,2])",o:"500.0",time:"O(items) per bill",space:"O(products)",
code:C(`
class Cashier:
    def __init__(self, n, discount, products, prices):
        self.n = n
        self.discount = discount
        self.price = dict(zip(products, prices))
        self.count = 0
    def getBill(self, product, amount):
        self.count += 1
        total = sum(self.price[p] * a for p, a in zip(product, amount))
        if self.count % self.n == 0:
            total = total * (100 - self.discount) / 100
        return float(total)
`)});
lite({id:1358,slug:"number-of-substrings-containing-all-three-characters",title:"Number of Substrings Containing All Three Characters",level:"Medium",topic:SW,name:"Last position of a, b and c",
w:"'abcabc': there are 10 substrings containing a, b and c.",k:"Walk through the string and remember the last position of 'a', 'b' and 'c'. For a substring ending at i to contain all three, it must start at or before the smallest of the three last positions — that is min(last) + 1 choices.",
i:'s = "abcabc"',o:"10",time:"O(n)",space:"O(1)",
code:C(`
class Solution:
    def numberOfSubstrings(self, s):
        last = [-1, -1, -1]
        res = 0
        for i, ch in enumerate(s):
            last["abc".index(ch)] = i
            res += min(last) + 1
        return res
`)});
lite({id:1439,slug:"find-the-kth-smallest-sum-of-a-matrix-with-sorted-rows",title:"Find the Kth Smallest Sum of a Matrix With Sorted Rows",level:"Hard",topic:HP,name:"Merge rows keeping the k smallest sums",
w:"Pick one number from each row: with rows [1,3,11] and [2,4,6] the sums sorted are 3, 5, 5, 7, 7, 9 … the 5th is 7.",k:"Combine the rows one at a time. After merging the first i rows keep only the k smallest sums — a larger sum can never be among the k smallest overall. Adding the next row to those k sums gives at most k·n candidates; sort and cut again.",
i:"mat = [[1,3,11],[2,4,6]], k = 5",o:"7",time:"O(m · k·n log(k·n))",space:"O(k·n)",
code:C(`
class Solution:
    def kthSmallest(self, mat, k):
        cur = [0]
        for row in mat:
            cur = sorted(a + b for a in cur for b in row)[:k]
        return cur[k - 1]
`)});
lite({id:1586,slug:"binary-search-tree-iterator-ii",title:"Binary Search Tree Iterator II",level:"Medium",topic:DS,name:"In-order array and a pointer",
w:"next() walks the sorted values 3, 7, 9, 15, 20; prev() steps back to the previous one.",k:"The in-order walk of a BST is sorted. Store it in a list with a pointer: next moves forward, prev moves back, and hasNext / hasPrev only check the pointer.",
i:"BSTIterator([7,3,15,null,null,9,20]); next, next, prev, next",o:"3, 7, 3, 7",time:"O(1) per call",space:"O(n)",
code:C(`
class BSTIterator:
    def __init__(self, root):
        self.vals = []
        def inorder(n):
            if n:
                inorder(n.left)
                self.vals.append(n.val)
                inorder(n.right)
        inorder(root)
        self.i = -1
    def hasNext(self):
        return self.i + 1 < len(self.vals)
    def next(self):
        self.i += 1
        return self.vals[self.i]
    def hasPrev(self):
        return self.i > 0
    def prev(self):
        self.i -= 1
        return self.vals[self.i]
`)});
lite({id:1718,slug:"construct-the-lexicographically-largest-valid-sequence",title:"Construct the Lexicographically Largest Valid Sequence",level:"Medium",topic:BTK,name:"Backtracking, biggest number first",
w:"n = 3 → [3,1,2,3,2]: 1 appears once, 2 twice with two positions between them, 3 twice with three positions between them.",k:"Fill the sequence left to right. At the first empty slot try the numbers from n down to 1: a number v > 1 also takes slot i + v, number 1 takes only one slot. Trying big numbers first makes the first complete sequence the largest one.",
i:"n = 3",o:"[3,1,2,3,2]",time:"O(n!)",space:"O(n)",
code:C(`
class Solution:
    def constructDistancedSequence(self, n):
        size = 2 * n - 1
        res = [0] * size
        used = [False] * (n + 1)
        def go(i):
            if i == size:
                return True
            if res[i]:
                return go(i + 1)
            for v in range(n, 0, -1):
                if used[v]:
                    continue
                j = i + v if v > 1 else i
                if j >= size or res[j]:
                    continue
                used[v] = True
                res[i] = res[j] = v
                if go(i + 1):
                    return True
                used[v] = False
                res[i] = res[j] = 0
            return False
        go(0)
        return res
`)});
