const {lite}=require("./lib");
const C=s=>s.replace(/^\n/,"").replace(/\n$/,"").split("\n");
const ARR="Array / String",HM="Hash Map / Set",STK="Stack / Monotonic Stack",BT="Binary Tree",GR="Graph",HP="Heap",DP="Dynamic Programming",GD="Greedy",MB="Math / Bit Manipulation",BS="Binary Search",SRT="Sorting",SW="Sliding Window",MX="Matrix",UF="Union Find / Segment Tree",TP="Two Pointers",IV="Intervals",BTK="Backtracking",DS="Design",LL="Linked List",TR="Trie",PS="Prefix Sum";
// ---- Adobe
lite({id:910,slug:"smallest-range-ii",title:"Smallest Range II",level:"Medium",topic:SRT,name:"Sort, then choose where to switch from +k to −k",
w:"[1,3,6], k=3: 1→4, 3→6, 6→3 gives [4,6,3], range 3 (the original range is 5).",k:"Sort the numbers. Small numbers should go up (+k) and large numbers down (−k); the switch happens at some split i: nums[0..i] get +k, the rest get −k. For each split the max is max(nums[i]+k, nums[-1]−k) and the min is min(nums[0]+k, nums[i+1]−k). Take the smallest range, starting from the no-split value nums[-1] − nums[0].",
i:"nums = [1,3,6], k = 3",o:"3",time:"O(n log n)",space:"O(1)",
code:C(`
class Solution:
    def smallestRangeII(self, nums, k):
        nums.sort()
        best = nums[-1] - nums[0]
        for i in range(len(nums) - 1):
            hi = max(nums[i] + k, nums[-1] - k)
            lo = min(nums[0] + k, nums[i + 1] - k)
            best = min(best, hi - lo)
        return best
`)});
lite({id:2328,slug:"number-of-increasing-paths-in-a-grid",title:"Number of Increasing Paths in a Grid",level:"Hard",topic:DP,name:"Memoised DFS: paths starting at each cell",
w:"[[1,1],[3,4]]: single cells 4, plus 1→3, 1→4, 3→4, 1→3→4 → 8.",k:"Let paths(i,j) be the number of strictly increasing paths that start at cell (i,j): 1 (the cell alone) plus paths(neighbour) for each neighbour with a larger value. Values only increase, so there are no cycles and memoisation makes it linear. Sum over all cells.",
i:"grid = [[1,1],[3,4]]",o:"8",time:"O(m·n)",space:"O(m·n)",
code:C(`
class Solution:
    def countPaths(self, grid):
        MOD = 10**9 + 7
        m, n = len(grid), len(grid[0])
        @lru_cache(None)
        def go(i, j):
            r = 1
            for a, b in ((i + 1, j), (i - 1, j), (i, j + 1), (i, j - 1)):
                if 0 <= a < m and 0 <= b < n and grid[a][b] > grid[i][j]:
                    r += go(a, b)
            return r % MOD
        return sum(go(i, j) for i in range(m) for j in range(n)) % MOD
`)});
lite({id:292,slug:"nim-game",title:"Nim Game",level:"Easy",topic:MB,name:"You lose exactly when n is a multiple of 4",
w:"n=4: whatever you take (1-3), your friend takes the rest → you lose → false.",k:"Taking 1–3 stones each turn, if n is a multiple of 4 the opponent can always answer so that 4 stones disappear per round, and you take the last-but-never. Otherwise take n mod 4 first and keep that up. So you win iff n % 4 != 0.",
i:"n = 4",o:"false",time:"O(1)",space:"O(1)",
code:C(`
class Solution:
    def canWinNim(self, n):
        return n % 4 != 0
`)});
lite({id:793,slug:"preimage-size-of-factorial-zeroes-function",title:"Preimage Size of Factorial Zeroes Function",level:"Hard",topic:BS,name:"Binary search the first x with k zeros",
w:"k=5: no factorial has exactly 5 trailing zeros (24! has 4, 25! has 6) → 0.",k:"f(x) = number of trailing zeros of x! = x//5 + x//25 + … and it never decreases. Binary search the smallest x with f(x) ≥ k. The answer is 5 if f(x) == k (x … x+4 all share it) and 0 otherwise.",
i:"k = 5",o:"0",time:"O(log² k)",space:"O(1)",
code:C(`
class Solution:
    def preimageSizeFZF(self, k):
        def f(x):
            r = 0
            while x:
                x //= 5
                r += x
            return r
        lo, hi = 0, 5 * (k + 1)
        while lo < hi:
            mid = (lo + hi) // 2
            if f(mid) >= k:
                hi = mid
            else:
                lo = mid + 1
        return 5 if f(lo) == k else 0
`)});
lite({id:908,slug:"smallest-range-i",title:"Smallest Range I",level:"Easy",topic:MB,name:"Shrink the gap by 2k",
w:"[0,10], k=2: raise 0 by 2 and lower 10 by 2 → [2,8], range 6.",k:"Every number can move by up to k either way, so the max and the min can approach each other by 2k in total. The answer is max(0, max − min − 2k).",
i:"nums = [0,10], k = 2",o:"6",time:"O(n)",space:"O(1)",
code:C(`
class Solution:
    def smallestRangeI(self, nums, k):
        return max(0, max(nums) - min(nums) - 2 * k)
`)});
lite({id:1190,slug:"reverse-substrings-between-each-pair-of-parentheses",title:"Reverse Substrings Between Each Pair of Parentheses",level:"Medium",topic:STK,name:"Stack of partial strings",
w:"'(u(love)i)': inner 'love' → 'evol', then 'uevoli' reversed → 'iloveu'.",k:"Keep a stack of lists. '(' starts a new list; letters go on the current list; ')' pops the list, reverses it and appends it to the list below.",
i:"s = \"(u(love)i)\"",o:"\"iloveu\"",time:"O(n²)",space:"O(n)",
code:C(`
class Solution:
    def reverseParentheses(self, s):
        st = [[]]
        for c in s:
            if c == '(':
                st.append([])
            elif c == ')':
                t = st.pop()
                st[-1].extend(reversed(t))
            else:
                st[-1].append(c)
        return ''.join(st[0])
`)});
lite({id:1916,slug:"count-ways-to-build-rooms-in-an-ant-colony",title:"Count Ways to Build Rooms in an Ant Colony",level:"Hard",topic:BT,name:"n! divided by the product of subtree sizes",
w:"prevRoom [-1,0,0,1,2]: room 1 and 2 after 0, 3 after 1, 4 after 2 → 6 valid orders.",k:"The rooms form a tree rooted at 0 and a valid build order is a topological order. The number of orders of a rooted tree is n! / ∏(size of each subtree). Compute subtree sizes bottom-up and use modular inverses.",
i:"prevRoom = [-1,0,0,1,2]",o:"6",time:"O(n)",space:"O(n)",
code:C(`
class Solution:
    def waysToBuildRooms(self, prevRoom):
        MOD = 10**9 + 7
        n = len(prevRoom)
        children = [[] for _ in range(n)]
        for i in range(1, n):
            children[prevRoom[i]].append(i)
        order = [0]
        for u in order:
            order.extend(children[u])
        size = [1] * n
        for u in reversed(order):
            for v in children[u]:
                size[u] += size[v]
        res = 1
        for i in range(1, n + 1):
            res = res * i % MOD
        for s in size:
            res = res * pow(s, MOD - 2, MOD) % MOD
        return res
`)});
lite({id:2055,slug:"plates-between-candles",title:"Plates Between Candles",level:"Medium",topic:PS,name:"Prefix plates plus nearest candles",
w:"'**|**|***|', query [2,5]: candles at 2 and 5 enclose 2 plates → 2.",k:"A plate counts only if a candle is on both sides inside the query range. For each position store the nearest candle to its right and to its left. Shrink [l, r] to [next candle ≥ l, previous candle ≤ r] and count plates with a prefix sum.",
i:"s = \"**|**|***|\", queries = [[2,5],[5,9]]",o:"[2, 3]",time:"O(n + q)",space:"O(n)",
code:C(`
class Solution:
    def platesBetweenCandles(self, s, queries):
        n = len(s)
        pre = [0] * (n + 1)
        for i, c in enumerate(s):
            pre[i + 1] = pre[i] + (c == '*')
        nxt = [n] * (n + 1)
        for i in range(n - 1, -1, -1):
            nxt[i] = i if s[i] == '|' else nxt[i + 1]
        prv = [-1] * n
        for i in range(n):
            prv[i] = i if s[i] == '|' else (prv[i - 1] if i else -1)
        res = []
        for l, r in queries:
            a, b = nxt[l], prv[r]
            res.append(pre[b] - pre[a + 1] if a < b else 0)
        return res
`)});
lite({id:2143,slug:"choose-numbers-from-two-arrays-in-range",title:"Choose Numbers From Two Arrays in Range",level:"Hard",topic:DP,name:"Count balances of sum1 − sum2 ending here",
w:"nums1=[1,2,5], nums2=[2,6,3]: three balanced ways exist → 3.",k:"Track the balance (sum of picks from nums1 minus sum of picks from nums2) for a range ending at i. Each range either starts at i or extends one ending at i−1, and at i it adds +nums1[i] or −nums2[i]. Keep a dictionary balance → ways; every way with balance 0 is a valid balanced choice.",
i:"nums1 = [1,2,5], nums2 = [2,6,3]",o:"3",time:"O(n · S)",space:"O(S)",
code:C(`
class Solution:
    def countSubranges(self, nums1, nums2):
        MOD = 10**9 + 7
        cur = defaultdict(int)
        res = 0
        for a, b in zip(nums1, nums2):
            new = defaultdict(int)
            new[a] += 1
            new[-b] += 1
            for d, c in cur.items():
                new[d + a] = (new[d + a] + c) % MOD
                new[d - b] = (new[d - b] + c) % MOD
            cur = new
            res = (res + cur[0]) % MOD
        return res
`)});
lite({id:2406,slug:"divide-intervals-into-minimum-number-of-groups",title:"Divide Intervals Into Minimum Number of Groups",level:"Medium",topic:IV,name:"Heap of group end times",
w:"[[5,10],[6,8],[1,5],[2,3],[1,10]]: three intervals overlap at time 5 or 6 → 3 groups.",k:"Intervals that share a point must be in different groups, so the answer is the maximum overlap. Sort by start and keep a min-heap of group end times: if the earliest-ending group ended before this start, reuse it, otherwise open a new group.",
i:"intervals = [[5,10],[6,8],[1,5],[2,3],[1,10]]",o:"3",time:"O(n log n)",space:"O(n)",
code:C(`
class Solution:
    def minGroups(self, intervals):
        heap = []
        for s, e in sorted(intervals):
            if heap and heap[0] < s:
                heapreplace(heap, e)
            else:
                heappush(heap, e)
        return len(heap)
`)});
lite({id:2429,slug:"minimize-xor",title:"Minimize XOR",level:"Medium",topic:MB,name:"Copy num1's high bits, fill low bits",
w:"num1=1 (0001), num2=12 (1100 has two 1s): x needs two set bits; 0011 = 3 gives XOR 2, the smallest.",k:"x must have as many set bits as num2. To make x XOR num1 small, match the highest set bits of num1 first; if bits are left over, set the lowest unset bits of x.",
i:"num1 = 1, num2 = 12",o:"3",time:"O(log n)",space:"O(1)",
code:C(`
class Solution:
    def minimizeXor(self, num1, num2):
        cnt = bin(num2).count('1')
        x = 0
        for b in range(30, -1, -1):
            if cnt and (num1 >> b) & 1:
                x |= 1 << b
                cnt -= 1
        b = 0
        while cnt:
            if not (x >> b) & 1:
                x |= 1 << b
                cnt -= 1
            b += 1
        return x
`)});
lite({id:2422,slug:"merge-operations-to-turn-array-into-a-palindrome",title:"Merge Operations to Turn Array into a Palindrome",level:"Medium",topic:TP,name:"Two pointers: merge the smaller side",
w:"[4,3,2,1,2,3,1]: merge 3+1 on the right, then 1+2 → [4,3,3,4]-style palindrome after 2 merges.",k:"Compare both ends. If equal, move inward. If the left value is smaller, merge it with its right neighbour (cost 1); otherwise merge the right end with its left neighbour. Merging the smaller side is always the only way to ever make the ends equal.",
i:"nums = [4,3,2,1,2,3,1]",o:"2",time:"O(n)",space:"O(1)",
code:C(`
class Solution:
    def minimumOperations(self, nums):
        l, r = 0, len(nums) - 1
        ops = 0
        while l < r:
            if nums[l] == nums[r]:
                l += 1
                r -= 1
            elif nums[l] < nums[r]:
                l += 1
                nums[l] += nums[l - 1]
                ops += 1
            else:
                r -= 1
                nums[r] += nums[r + 1]
                ops += 1
        return ops
`)});
lite({id:2892,slug:"minimizing-array-after-replacing-pairs-with-their-product",title:"Minimizing Array After Replacing Pairs With Their Product",level:"Medium",topic:GD,name:"Greedily merge while the product stays ≤ k",
w:"[2,3,3,7,3,5], k=20: [2·3·3=18],[7·3=21 too big → 7],[3·5=15] → 3 groups.",k:"A zero makes everything collapse to one number. Otherwise scan left to right keeping the running product; extend it while the product stays ≤ k, else start a new group. Merging as early as possible never hurts.",
i:"nums = [2,3,3,7,3,5], k = 20",o:"3",time:"O(n)",space:"O(1)",
code:C(`
class Solution:
    def minArrayLength(self, nums, k):
        if 0 in nums:
            return 1
        groups = 1
        cur = nums[0]
        for x in nums[1:]:
            if cur * x <= k:
                cur *= x
            else:
                groups += 1
                cur = x
        return groups
`)});
lite({id:2962,slug:"count-subarrays-where-max-element-appears-at-least-k-times",title:"Count Subarrays Where Max Element Appears at Least K Times",level:"Medium",topic:SW,name:"Window shrinks while it still has k maxima",
w:"[1,3,2,3,3], k=2: subarrays with at least two 3s: 6.",k:"Let M be the array's maximum. Move the right end; once the window holds k copies of M, move the left end forward until it holds only k−1. Every start before the new left gives a valid subarray ending here, so add l.",
i:"nums = [1,3,2,3,3], k = 2",o:"6",time:"O(n)",space:"O(1)",
code:C(`
class Solution:
    def countSubarrays(self, nums, k):
        M = max(nums)
        l = cnt = res = 0
        for x in nums:
            if x == M:
                cnt += 1
            while cnt >= k:
                if nums[l] == M:
                    cnt -= 1
                l += 1
            res += l
        return res
`)});
lite({id:3173,slug:"bitwise-or-of-adjacent-elements",title:"Bitwise OR of Adjacent Elements",level:"Easy",topic:ARR,name:"OR each neighbour pair",
w:"[1,3,7,15] → 1|3=3, 3|7=7, 7|15=15 → [3,7,15].",k:"The answer has n−1 entries: entry i is nums[i] OR nums[i+1].",
i:"nums = [1,3,7,15]",o:"[3, 7, 15]",time:"O(n)",space:"O(n)",
code:C(`
class Solution:
    def orArray(self, nums):
        return [a | b for a, b in zip(nums, nums[1:])]
`)});
lite({id:3636,slug:"threshold-majority-queries",title:"Threshold Majority Queries",level:"Hard",topic:UF,name:"Block-decomposition range mode",
w:"[1,1,2,2,1,1], range 0-5 needs frequency ≥ 4: 1 appears 4 times → 1; range 0-3 needs ≥ 3: none → −1.",k:"Each query asks for the range's mode (highest frequency, smallest value on ties) and checks it reaches the threshold. Split the array into blocks and precompute the mode of every block range. For a query, candidates are the mode of the full middle blocks plus every value in the two partial ends; count each candidate with binary search on its position list.",
i:"nums = [1,1,2,2,1,1], queries = [[0,5,4],[0,3,3],[2,3,2]]",o:"[1, -1, 2]",time:"O((n + q)·√n·log n)",space:"O(n·√n)",
code:C(`
class Solution:
    def subarrayMajority(self, nums, queries):
        n = len(nums)
        B = max(1, int(n ** 0.5))
        nb = (n + B - 1) // B
        pos = defaultdict(list)
        for i, x in enumerate(nums):
            pos[x].append(i)
        mode = [[None] * nb for _ in range(nb)]
        for bi in range(nb):
            cnt = Counter()
            best = (0, 0)
            for bj in range(bi, nb):
                for x in nums[bj * B:(bj + 1) * B]:
                    cnt[x] += 1
                    if (cnt[x], -x) > best:
                        best = (cnt[x], -x)
                mode[bi][bj] = -best[1]
        def freq(v, l, r):
            return bisect_right(pos[v], r) - bisect_left(pos[v], l)
        res = []
        for l, r, t in queries:
            bl, br = l // B, r // B
            if br - bl <= 1:
                cand = set(nums[l:r + 1])
            else:
                cand = set(nums[l:(bl + 1) * B]) | set(nums[br * B:r + 1])
                cand.add(mode[bl + 1][br - 1])
            best = max((freq(v, l, r), -v) for v in cand)
            res.append(-best[1] if best[0] >= t else -1)
        return res
`)});
lite({id:3736,slug:"minimum-moves-to-equal-array-elements-iii",title:"Minimum Moves to Equal Array Elements III",level:"Easy",topic:MB,name:"Raise everything to the maximum",
w:"[2,1,3] → raise 2 by 1 and 1 by 2 → 3 moves.",k:"Each move adds 1 to one element, so the common value is at least the maximum, and raising everything to the maximum is optimal. Moves = n × max − sum.",
i:"nums = [2,1,3]",o:"3",time:"O(n)",space:"O(1)",
code:C(`
class Solution:
    def minMoves(self, nums):
        return max(nums) * len(nums) - sum(nums)
`)});
lite({id:1636,slug:"sort-array-by-increasing-frequency",title:"Sort Array by Increasing Frequency",level:"Easy",topic:SRT,name:"Sort by (count, −value)",
w:"[1,1,2,2,2,3]: 3 once, 1 twice, 2 three times → [3,1,1,2,2,2].",k:"Sort with a key of (frequency ascending, value descending) so equal-frequency values come out biggest first.",
i:"nums = [1,1,2,2,2,3]",o:"[3, 1, 1, 2, 2, 2]",time:"O(n log n)",space:"O(n)",
code:C(`
class Solution:
    def frequencySort(self, nums):
        cnt = Counter(nums)
        return sorted(nums, key=lambda x: (cnt[x], -x))
`)});
lite({id:2506,slug:"count-pairs-of-similar-strings",title:"Count Pairs Of Similar Strings",level:"Easy",topic:HM,name:"Group words by their letter set",
w:"['aba','aabb','abcd','bac','aabc']: 'aba' & 'aabb' share {a,b}; 'bac' & 'aabc' share {a,b,c} → 2.",k:"Two words are similar when they use the same set of letters. Turn each word into a bitmask of its letters, count equal masks, and add c·(c−1)/2 for each group.",
i:"words = [\"aba\",\"aabb\",\"abcd\",\"bac\",\"aabc\"]",o:"2",time:"O(total length)",space:"O(n)",
code:C(`
class Solution:
    def similarPairs(self, words):
        cnt = Counter()
        res = 0
        for w in words:
            mask = 0
            for c in w:
                mask |= 1 << (ord(c) - 97)
            res += cnt[mask]
            cnt[mask] += 1
        return res
`)});
lite({id:1863,slug:"sum-of-all-subset-xor-totals",title:"Sum of All Subset XOR Totals",level:"Easy",topic:MB,name:"OR of all numbers times 2^(n−1)",
w:"[5,1,6]: OR = 7, 7 × 2² = 28.",k:"Look at one bit: if some number has it set, exactly half of the 2ⁿ subsets have it set in their XOR (2ⁿ⁻¹ of them). So the total is (OR of all numbers) × 2ⁿ⁻¹.",
i:"nums = [5,1,6]",o:"28",time:"O(n)",space:"O(1)",
code:C(`
class Solution:
    def subsetXORSum(self, nums):
        acc = 0
        for x in nums:
            acc |= x
        return acc << (len(nums) - 1)
`)});
lite({id:3528,slug:"unit-conversion-i",title:"Unit Conversion I",level:"Medium",topic:GR,name:"BFS multiplying the conversion factors",
w:"1 unit0 = 2 unit1 and 1 unit1 = 3 unit2 → unit counts [1, 2, 6].",k:"The conversions form a tree rooted at unit 0. Walk it from 0 and multiply the factors along the path (modulo 1e9+7): base[target] = base[source] × factor.",
i:"conversions = [[0,1,2],[1,2,3]]",o:"[1, 2, 6]",time:"O(n)",space:"O(n)",
code:C(`
class Solution:
    def baseUnitConversions(self, conversions):
        MOD = 10**9 + 7
        n = len(conversions) + 1
        g = [[] for _ in range(n)]
        for a, b, f in conversions:
            g[a].append((b, f))
        res = [0] * n
        res[0] = 1
        q = deque([0])
        while q:
            u = q.popleft()
            for v, f in g[u]:
                res[v] = res[u] * f % MOD
                q.append(v)
        return res
`)});
lite({id:475,slug:"heaters",title:"Heaters",level:"Medium",topic:BS,name:"Nearest heater for every house",
w:"houses [1,2,3], heater at 2: the farthest house is 1 away → radius 1.",k:"Each house needs the nearest heater within the radius, and the radius must cover the worst house. Sort the heaters and binary search the closest one on either side of each house; the answer is the largest of these distances.",
i:"houses = [1,2,3], heaters = [2]",o:"1",time:"O((n + m) log m)",space:"O(1)",
code:C(`
class Solution:
    def findRadius(self, houses, heaters):
        heaters.sort()
        res = 0
        for h in houses:
            i = bisect_left(heaters, h)
            d = float('inf')
            if i < len(heaters):
                d = heaters[i] - h
            if i > 0:
                d = min(d, h - heaters[i - 1])
            res = max(res, d)
        return res
`)});
lite({id:430,slug:"flatten-a-multilevel-doubly-linked-list",title:"Flatten a Multilevel Doubly Linked List",level:"Medium",topic:LL,name:"Stack of saved next pointers",
w:"1-2-3-4 with child list 7-8 under 3: result 1-2-3-7-8-4.",k:"Walk the list. When a node has a child, push its next onto a stack, splice the child list in as its next (fix prev, clear child). When the end of a list is reached, pop the saved node and link it after the tail.",
i:"head = 1-2-3-4-5-6, child of 3 = 7-8-9-10, child of 8 = 11-12",o:"[1, 2, 3, 7, 8, 11, 12, 9, 10, 4, 5, 6]",time:"O(n)",space:"O(depth)",
code:C(`
class Solution:
    def flatten(self, head):
        cur = head
        st = []
        while cur:
            if cur.child:
                if cur.next:
                    st.append(cur.next)
                cur.next = cur.child
                cur.next.prev = cur
                cur.child = None
            elif not cur.next and st:
                nx = st.pop()
                cur.next = nx
                nx.prev = cur
            cur = cur.next
        return head
`)});
lite({id:1739,slug:"building-boxes",title:"Building Boxes",level:"Hard",topic:MB,name:"Fill a triangular pyramid, then add floor boxes",
w:"n=10 boxes: a 3-level stair pyramid uses 1 + 3 + 6 = 10 boxes and touches the floor with 6 → 6.",k:"The best shape is a staircase pyramid in a corner. Complete layers need 1, 1+3, 1+3+6 … boxes and touch the floor with 1, 3, 6 … boxes. Add the largest complete pyramid that fits, then add floor boxes one by one: the j-th extra floor box allows j more boxes on top.",
i:"n = 10",o:"6",time:"O(n^(1/3))",space:"O(1)",
code:C(`
class Solution:
    def minimumBoxes(self, n):
        total = k = 0
        while total + (k + 1) * (k + 2) // 2 <= n:
            k += 1
            total += k * (k + 1) // 2
        floor = k * (k + 1) // 2
        extra = 1
        while total < n:
            total += extra
            floor += 1
            extra += 1
        return floor
`)});
lite({id:993,slug:"cousins-in-binary-tree",title:"Cousins in Binary Tree",level:"Easy",topic:BT,name:"Same depth, different parent",
w:"[1,2,3,4]: 4's parent is 2, 3's parent is 1 and both are not at the same depth → false.",k:"Cousins have the same depth but different parents. Walk the tree (BFS or DFS) recording depth and parent of x and y, then compare.",
i:"root = [1,2,3,4], x = 4, y = 3",o:"false",time:"O(n)",space:"O(n)",
code:C(`
class Solution:
    def isCousins(self, root, x, y):
        info = {}
        q = deque([(root, None, 0)])
        while q:
            node, parent, depth = q.popleft()
            if node.val in (x, y):
                info[node.val] = (parent, depth)
            if node.left:
                q.append((node.left, node, depth + 1))
            if node.right:
                q.append((node.right, node, depth + 1))
        (px, dx), (py, dy) = info[x], info[y]
        return dx == dy and px is not py
`)});
lite({id:307,slug:"range-sum-query-mutable",title:"Range Sum Query - Mutable",level:"Medium",topic:DS,name:"Fenwick tree (binary indexed tree)",
w:"[1,3,5]: sum(0,2)=9; set index 1 to 2; sum(0,2)=8.",k:"A Fenwick tree stores partial sums so both a point update and a prefix-sum query touch only O(log n) cells (jump by the lowest set bit). Range sum = prefix(right) − prefix(left−1).",
i:"NumArray([1,3,5]); sumRange(0,2); update(1,2); sumRange(0,2)",o:"[9, None, 8]",time:"O(log n) per call",space:"O(n)",
code:C(`
class NumArray:
    def __init__(self, nums):
        self.n = len(nums)
        self.nums = [0] * self.n
        self.tree = [0] * (self.n + 1)
        for i, v in enumerate(nums):
            self.update(i, v)

    def update(self, index, val):
        delta = val - self.nums[index]
        self.nums[index] = val
        i = index + 1
        while i <= self.n:
            self.tree[i] += delta
            i += i & -i

    def _prefix(self, i):
        s = 0
        while i > 0:
            s += self.tree[i]
            i -= i & -i
        return s

    def sumRange(self, left, right):
        return self._prefix(right + 1) - self._prefix(left)
`)});
lite({id:3046,slug:"split-the-array",title:"Split the Array",level:"Easy",topic:HM,name:"No value may appear more than twice",
w:"[1,1,2,2,3,4] can be split into [1,2,3] and [1,2,4] → true.",k:"Both halves need distinct values, so each value can appear at most twice (once in each half). With an even length, that condition is also enough.",
i:"nums = [1,1,2,2,3,4]",o:"true",time:"O(n)",space:"O(n)",
code:C(`
class Solution:
    def isPossibleToSplit(self, nums):
        return max(Counter(nums).values()) <= 2
`)});
lite({id:2536,slug:"increment-submatrices-by-one",title:"Increment Submatrices by One",level:"Medium",topic:MX,name:"2D difference array",
w:"n=3 with two rectangle additions gives [[1,1,0],[1,2,1],[0,1,1]].",k:"Instead of touching every cell of each rectangle, mark only its four corners in a difference grid (+1 top-left, −1 just right, −1 just below, +1 diagonal). A final 2D prefix sum turns the marks into the real counts.",
i:"n = 3, queries = [[1,1,2,2],[0,0,1,1]]",o:"[[1, 1, 0], [1, 2, 1], [0, 1, 1]]",time:"O(n² + q)",space:"O(n²)",
code:C(`
class Solution:
    def rangeAddQueries(self, n, queries):
        d = [[0] * (n + 1) for _ in range(n + 1)]
        for r1, c1, r2, c2 in queries:
            d[r1][c1] += 1
            d[r1][c2 + 1] -= 1
            d[r2 + 1][c1] -= 1
            d[r2 + 1][c2 + 1] += 1
        for i in range(n + 1):
            for j in range(n + 1):
                if i:
                    d[i][j] += d[i - 1][j]
                if j:
                    d[i][j] += d[i][j - 1]
                if i and j:
                    d[i][j] -= d[i - 1][j - 1]
        return [row[:n] for row in d[:n]]
`)});
lite({id:669,slug:"trim-a-binary-search-tree",title:"Trim a Binary Search Tree",level:"Medium",topic:BT,name:"Recursive trim using BST order",
w:"[1,0,2], keep 1..2: node 0 is too small, drop it and keep its right side → [1,null,2].",k:"If a node is below low, its whole left subtree is too small too, so the answer is the trimmed right subtree. If it is above high, take the trimmed left subtree. Otherwise keep the node and trim both children.",
i:"root = [1,0,2], low = 1, high = 2",o:"[1, None, 2]",time:"O(n)",space:"O(h)",
code:C(`
class Solution:
    def trimBST(self, root, low, high):
        if not root:
            return None
        if root.val < low:
            return self.trimBST(root.right, low, high)
        if root.val > high:
            return self.trimBST(root.left, low, high)
        root.left = self.trimBST(root.left, low, high)
        root.right = self.trimBST(root.right, low, high)
        return root
`)});
lite({id:2275,slug:"largest-combination-with-bitwise-and-greater-than-zero",title:"Largest Combination With Bitwise AND Greater Than Zero",level:"Medium",topic:MB,name:"Most numbers sharing one bit",
w:"[16,17,71,62,12,24,14]: four of them have bit 2 set, and their AND is > 0 → 4.",k:"The AND of a group is non-zero exactly when all of them share at least one set bit. So count, for each bit position, how many numbers have it, and take the largest count.",
i:"candidates = [16,17,71,62,12,24,14]",o:"4",time:"O(n log max)",space:"O(1)",
code:C(`
class Solution:
    def largestCombination(self, candidates):
        return max(sum((x >> b) & 1 for x in candidates) for b in range(25))
`)});
lite({id:1507,slug:"reformat-date",title:"Reformat Date",level:"Easy",topic:ARR,name:"Split and map the month name",
w:"'20th Oct 2052' → '2052-10-20'.",k:"Split into day, month name and year. Strip the two-letter suffix from the day, look the month up in a list, and zero-pad both to two digits.",
i:"date = \"20th Oct 2052\"",o:"\"2052-10-20\"",time:"O(1)",space:"O(1)",
code:C(`
class Solution:
    def reformatDate(self, date):
        months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
        d, m, y = date.split()
        return "%s-%02d-%02d" % (y, months.index(m) + 1, int(d[:-2]))
`)});
lite({id:1823,slug:"find-the-winner-of-the-circular-game",title:"Find the Winner of the Circular Game",level:"Medium",topic:MB,name:"Josephus recurrence",
w:"n=5, k=2: friends leave in order 2, 4, 1, 5 → friend 3 wins.",k:"With i friends the survivor's index f(i) satisfies f(i) = (f(i−1) + k) mod i, starting from f(1) = 0. The answer is f(n) + 1.",
i:"n = 5, k = 2",o:"3",time:"O(n)",space:"O(1)",
code:C(`
class Solution:
    def findTheWinner(self, n, k):
        pos = 0
        for i in range(2, n + 1):
            pos = (pos + k) % i
        return pos + 1
`)});
