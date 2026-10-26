const {lite}=require("./lib");
const C=s=>s.replace(/^\n/,"").replace(/\n$/,"").split("\n");
const ARR="Array / String",HM="Hash Map / Set",STK="Stack / Monotonic Stack",BT="Binary Tree",GR="Graph",HP="Heap",DP="Dynamic Programming",GD="Greedy",MB="Math / Bit Manipulation",BS="Binary Search",SRT="Sorting",SW="Sliding Window",MX="Matrix",UF="Union Find / Segment Tree",TP="Two Pointers",IV="Intervals",BTK="Backtracking",DS="Design",LL="Linked List",TR="Trie",PS="Prefix Sum";
// ---- TikTok
lite({id:1405,slug:"longest-happy-string",title:"Longest Happy String",level:"Medium",topic:HP,name:"Greedy with a heap: biggest pile unless it would make three in a row",
w:"a=1, b=1, c=7: 'ccaccbcc' uses every letter without ever writing three equal letters in a row.",k:"Always append the letter with the most remaining copies, but if the last two letters are already that letter take the next most common one instead. Use a max-heap of (count, letter) and stop when no letter can be added.",
i:"a = 1, b = 1, c = 7",o:"\"ccaccbcc\"",time:"O(n log 3)",space:"O(1)",
code:C(`
class Solution:
    def longestDiverseString(self, a, b, c):
        heap = [(-n, ch) for n, ch in ((a, 'a'), (b, 'b'), (c, 'c')) if n]
        heapify(heap)
        res = []
        while heap:
            n, ch = heappop(heap)
            if len(res) >= 2 and res[-1] == res[-2] == ch:
                if not heap:
                    break
                n2, ch2 = heappop(heap)
                res.append(ch2)
                if n2 + 1:
                    heappush(heap, (n2 + 1, ch2))
                heappush(heap, (n, ch))
            else:
                res.append(ch)
                if n + 1:
                    heappush(heap, (n + 1, ch))
        return ''.join(res)
`)});
lite({id:3389,slug:"minimum-operations-to-make-character-frequencies-equal",title:"Minimum Operations to Make Character Frequencies Equal",level:"Hard",topic:DP,name:"Try every target frequency; DP over letters with a carry",
w:"'aaabc': change one 'a' to 'b' and insert a 'c' so every letter appears twice → 2.",k:"Pick the common frequency f (1 … n). Walk the letters a…z. A letter can end with f copies or with 0. Extra copies cost 1 each whether deleted or turned into the next letter, but turning them into the next letter can fill that letter's deficit for free later. Keep a small DP (Dynamic Programming) over the 'carry' of extra copies passed to the next letter (carry 0 or exactly what the next letter needs); a deficit costs one insertion per missing copy. Take the best over all f.",
i:"s = \"aaabc\"",o:"2",time:"O(n·26)",space:"O(26)",
code:C(`
class Solution:
    def makeStringGood(self, s):
        cnt = Counter(s)
        c = [cnt.get(chr(97 + i), 0) for i in range(26)]
        n = len(s)
        best = n
        for f in range(1, n + 1):
            dp = {0: 0}
            for i in range(26):
                need = max(0, f - c[i + 1]) if i < 25 else 0
                new = {}
                for x, cost in dp.items():
                    t = c[i] + x
                    if t >= f:
                        ex = t - f
                        for carry in {0, min(ex, need)}:
                            if i == 25 and carry:
                                continue
                            v = cost + ex
                            if v < new.get(carry, 10**9):
                                new[carry] = v
                    else:
                        v = cost + f - t
                        if v < new.get(0, 10**9):
                            new[0] = v
                    for carry in {0, min(t, need)}:
                        if i == 25 and carry:
                            continue
                        v = cost + t
                        if v < new.get(carry, 10**9):
                            new[carry] = v
                dp = new
            best = min(best, dp.get(0, 10**9))
        return best
`)});
lite({id:3441,slug:"minimum-cost-good-caption",title:"Minimum Cost Good Caption",level:"Hard",topic:DP,name:"Suffix DP over (letter, run length 1/2/3+), rebuild greedily",
w:"'cdcd' → 'cccc' (two operations) is the cheapest, smallest good caption.",k:"A good caption has every letter in runs of at least 3. Each change costs the alphabet distance. Compute from the right h[i][c][k] = cheapest way to finish positions after i when position i holds letter c at the end of a run of length k (1, 2 or 3+). A run can be continued with the same letter, or — once it has length 3+ — switched to any other letter. The minimum starts at position 0; rebuild left to right choosing the smallest letter that keeps the optimal total (that makes the answer lexicographically smallest). Captions shorter than 3 are impossible.",
i:"caption = \"cdcd\"",o:"\"cccc\"",time:"O(n·26·26)",space:"O(n·26)",
code:C(`
class Solution:
    def minCostGoodCaption(self, caption):
        n = len(caption)
        if n < 3:
            return ""
        INF = 10**9
        a = [ord(ch) - 97 for ch in caption]
        h = [[[INF] * 4 for _ in range(26)] for _ in range(n)]
        for c in range(26):
            h[n - 1][c][3] = 0
        for i in range(n - 2, -1, -1):
            for c in range(26):
                for k in (1, 2, 3):
                    best = abs(a[i + 1] - c) + h[i + 1][c][min(3, k + 1)]
                    if k == 3:
                        for d in range(26):
                            if d != c:
                                best = min(best, abs(a[i + 1] - d) + h[i + 1][d][1])
                    h[i][c][k] = best
        total = min(abs(a[0] - c) + h[0][c][1] for c in range(26))
        if total >= INF:
            return ""
        first = next(c for c in range(26) if abs(a[0] - c) + h[0][c][1] == total)
        res = [first]
        c, k = first, 1
        rem = h[0][c][1]
        for i in range(1, n):
            for d in range(26):
                if d == c:
                    nk = min(3, k + 1)
                elif k == 3:
                    nk = 1
                else:
                    continue
                if abs(a[i] - d) + h[i][d][nk] == rem:
                    res.append(d)
                    c, k = d, nk
                    rem = h[i][d][nk]
                    break
        return ''.join(chr(97 + x) for x in res)
`)});
lite({id:3474,slug:"lexicographically-smallest-generated-string",title:"Lexicographically Smallest Generated String",level:"Hard",topic:GD,name:"Force the T windows, fill with 'a', repair the F windows",
w:"str1 'TFTF', str2 'ab' → 'ababa'.",k:"The word has length n + m − 1. Every 'T' position i forces word[i…i+m−1] = str2 (a conflict means impossible). Fill every unforced slot with 'a' (smallest). Then check each 'F' window: if it accidentally equals str2, change the rightmost unforced slot in that window to 'b' (the smallest change that breaks the match with the least lexicographic damage); if no slot is free the answer is empty.",
i:"str1 = \"TFTF\", str2 = \"ab\"",o:"\"ababa\"",time:"O(n·m)",space:"O(n + m)",
code:C(`
class Solution:
    def generateString(self, str1, str2):
        n, m = len(str1), len(str2)
        w = [None] * (n + m - 1)
        for i, c in enumerate(str1):
            if c == 'T':
                for j in range(m):
                    if w[i + j] is not None and w[i + j] != str2[j]:
                        return ""
                    w[i + j] = str2[j]
        forced = [x is not None for x in w]
        w = [x if x is not None else 'a' for x in w]
        for i, c in enumerate(str1):
            if c == 'F' and ''.join(w[i:i + m]) == str2:
                for j in range(i + m - 1, i - 1, -1):
                    if not forced[j]:
                        w[j] = 'b'
                        break
                else:
                    return ""
        return ''.join(w)
`)});
lite({id:2145,slug:"count-the-hidden-sequences",title:"Count the Hidden Sequences",level:"Medium",topic:PS,name:"Range of the prefix sums",
w:"differences [1,-3,4], lower 1, upper 6: the first value can be 3 or 4 → 2 sequences.",k:"The hidden sequence is the first value x plus the running sum of differences. Track the lowest and highest running sums. All values stay within [lower, upper] when lower ≤ x + low and x + high ≤ upper, so the number of valid x is (upper − lower) − (high − low) + 1, or 0 if negative.",
i:"differences = [1,-3,4], lower = 1, upper = 6",o:"2",time:"O(n)",space:"O(1)",
code:C(`
class Solution:
    def numberOfArrays(self, differences, lower, upper):
        cur = lo = hi = 0
        for d in differences:
            cur += d
            lo = min(lo, cur)
            hi = max(hi, cur)
        return max(0, (upper - lower) - (hi - lo) + 1)
`)});
lite({id:2456,slug:"most-popular-video-creator",title:"Most Popular Video Creator",level:"Medium",topic:HM,name:"Total views per creator, best video per creator",
w:"alice has videos with 5 and 5 views (total 10), bob has one with 10 → both tie at 10; alice's best id is 'one' (smaller id).",k:"For each creator keep their total views and their best video (most views, smallest id on ties). The most popular creators are those with the maximum total; return each with their best video id.",
i:"creators = [\"alice\",\"bob\",\"alice\",\"chris\"], ids = [\"one\",\"two\",\"three\",\"four\"], views = [5,10,5,4]",o:"[['alice', 'one'], ['bob', 'two']]",time:"O(n)",space:"O(n)",
code:C(`
class Solution:
    def mostPopularCreator(self, creators, ids, views):
        total = Counter()
        best = {}
        for c, i, v in zip(creators, ids, views):
            total[c] += v
            if c not in best or v > best[c][0] or (v == best[c][0] and i < best[c][1]):
                best[c] = (v, i)
        top = max(total.values())
        return sorted([c, best[c][1]] for c in total if total[c] == top)
`)});
lite({id:2523,slug:"closest-prime-numbers-in-range",title:"Closest Prime Numbers in Range",level:"Medium",topic:MB,name:"Sieve, then the closest consecutive primes",
w:"Between 10 and 19 the primes are 11, 13, 17, 19; the closest pair is 11 and 13.",k:"List the primes in [left, right] with a sieve. The closest pair must be consecutive primes, so scan neighbours and keep the pair with the smallest gap (the earliest on ties). Return [−1, −1] if there are fewer than two primes.",
i:"left = 10, right = 19",o:"[11, 13]",time:"O(R log log R)",space:"O(R)",
code:C(`
class Solution:
    def closestPrimes(self, left, right):
        sieve = bytearray([1]) * (right + 1)
        sieve[0:2] = b'\\x00\\x00'[:min(2, right + 1)]
        for i in range(2, int(right ** 0.5) + 1):
            if sieve[i]:
                sieve[i * i::i] = bytearray(len(sieve[i * i::i]))
        primes = [p for p in range(max(2, left), right + 1) if sieve[p]]
        best = [-1, -1]
        gap = float('inf')
        for a, b in zip(primes, primes[1:]):
            if b - a < gap:
                gap = b - a
                best = [a, b]
        return best
`)});
lite({id:2640,slug:"find-the-score-of-all-prefixes-of-an-array",title:"Find the Score of All Prefixes of an Array",level:"Medium",topic:PS,name:"Running maximum, running total",
w:"[2,3,7,5,10]: conversion values 4, 10, 24, 12→ (5 + max 7 = 12), 20; prefix scores 4, 10, 24, 36, 56.",k:"The conversion value of an element is itself plus the largest value seen so far (including itself). The score of a prefix is the sum of conversion values, so keep a running maximum and a running total.",
i:"nums = [2,3,7,5,10]",o:"[4, 10, 24, 36, 56]",time:"O(n)",space:"O(n)",
code:C(`
class Solution:
    def findPrefixScore(self, nums):
        mx = total = 0
        res = []
        for x in nums:
            mx = max(mx, x)
            total += x + mx
            res.append(total)
        return res
`)});
lite({id:2799,slug:"count-complete-subarrays-in-an-array",title:"Count Complete Subarrays in an Array",level:"Medium",topic:SW,name:"Window with all distinct values",
w:"[1,3,1,2,2] has 3 distinct values; subarrays containing 1, 2 and 3 number 4.",k:"A subarray is complete if it has as many distinct values as the whole array. For each right end, shrink the window from the left while it is still complete; the number of valid starts is then left (all earlier starts are also complete). Add up.",
i:"nums = [1,3,1,2,2]",o:"4",time:"O(n)",space:"O(n)",
code:C(`
class Solution:
    def countCompleteSubarrays(self, nums):
        total = len(set(nums))
        cnt = Counter()
        left = res = 0
        for x in nums:
            cnt[x] += 1
            while len(cnt) == total:
                cnt[nums[left]] -= 1
                if cnt[nums[left]] == 0:
                    del cnt[nums[left]]
                left += 1
            res += left
        return res
`)});
lite({id:3086,slug:"minimum-moves-to-pick-k-ones",title:"Minimum Moves to Pick K Ones",level:"Hard",topic:GD,name:"Cheap nearby ones, 2-move changes, then a median window",
w:"nums [1,1,0,0,0,1,1,0,0,1], k=3, maxChanges=1 → pick the neighbouring ones for free/1 move and one created one for 2 moves → 3.",k:"Standing at index i: its own one is free, an adjacent one costs 1 move, a created one (set a nearby zero, then swap it in) costs 2 moves, and a one at distance d costs d moves. Case A: use the ones around the best index and changes for the rest: cost = (adjacent ones used) + 2 × (k − picked) if enough changes. Case B: use all maxChanges (2 moves each) and fetch k − maxChanges real ones from the best window of ones, whose cost is the sum of distances to the window's median. The answer is the cheaper case.",
i:"nums = [1,1,0,0,0,1,1,0,0,1], k = 3, maxChanges = 1",o:"3",time:"O(n)",space:"O(n)",
code:C(`
class Solution:
    def minimumMoves(self, nums, k, maxChanges):
        n = len(nums)
        ones = [i for i, v in enumerate(nums) if v]
        best = float('inf')
        for i in range(n):
            own = nums[i]
            adj = (nums[i - 1] if i else 0) + (nums[i + 1] if i + 1 < n else 0)
            u = min(k, own + adj)
            if k - u <= maxChanges:
                best = min(best, max(0, u - own) + 2 * (k - u))
        need = k - maxChanges
        if 1 <= need <= len(ones):
            pre = [0]
            for p in ones:
                pre.append(pre[-1] + p)
            for l in range(len(ones) - need + 1):
                r = l + need
                m = (l + r - 1) // 2
                left = ones[m] * (m - l) - (pre[m] - pre[l])
                right = (pre[r] - pre[m + 1]) - ones[m] * (r - m - 1)
                best = min(best, left + right + 2 * maxChanges)
        return best
`)});
lite({id:1860,slug:"incremental-memory-leak",title:"Incremental Memory Leak",level:"Medium",topic:MB,name:"Simulate second by second",
w:"memory1=2, memory2=2: second 1 takes 1 from the first stick, second 2 takes 2 from the second → crash at second 3 with [1, 0].",k:"At second i the program needs i bits and takes them from the stick with more free memory (the first on ties). Keep subtracting until the next demand does not fit in either stick. The loop runs about √(memory) times.",
i:"memory1 = 2, memory2 = 2",o:"[3, 1, 0]",time:"O(√(m1+m2))",space:"O(1)",
code:C(`
class Solution:
    def memLeak(self, memory1, memory2):
        t = 1
        while max(memory1, memory2) >= t:
            if memory1 >= memory2:
                memory1 -= t
            else:
                memory2 -= t
            t += 1
        return [t, memory1, memory2]
`)});
lite({id:887,slug:"super-egg-drop",title:"Super Egg Drop",level:"Hard",topic:DP,name:"How many floors can m moves with k eggs cover?",
w:"2 eggs, 6 floors: 3 moves are enough (and 2 are not) → 3.",k:"Flip the question: with m moves and k eggs, how many floors can we distinguish? f(m, k) = f(m−1, k−1) + f(m−1, k) + 1 (drop from a floor: if the egg breaks we continue with one egg fewer, otherwise with the same eggs above). Increase m until f(m, k) ≥ n.",
i:"k = 2, n = 6",o:"3",time:"O(k·answer)",space:"O(k)",
code:C(`
class Solution:
    def superEggDrop(self, k, n):
        dp = [0] * (k + 1)
        moves = 0
        while dp[k] < n:
            moves += 1
            for e in range(k, 0, -1):
                dp[e] = dp[e] + dp[e - 1] + 1
        return moves
`)});
lite({id:902,slug:"numbers-at-most-n-given-digit-set",title:"Numbers At Most N Given Digit Set",level:"Hard",topic:MB,name:"Count shorter lengths, then walk the digits of N",
w:"digits {1,3,5,7}, n=100: 4 one-digit + 16 two-digit numbers = 20.",k:"Numbers shorter than N's length can use any digit at each place: Σ d^len. For numbers with the same length as N walk its digits left to right: for each position add (number of allowed digits smaller than N's digit) × d^(remaining positions); continue only if N's digit itself is allowed; if every digit is allowed, N itself counts +1.",
i:"digits = [\"1\",\"3\",\"5\",\"7\"], n = 100",o:"20",time:"O(len · d)",space:"O(1)",
code:C(`
class Solution:
    def atMostNGivenDigitSet(self, digits, n):
        s = str(n)
        L = len(s)
        d = len(digits)
        res = sum(d ** i for i in range(1, L))
        for i, ch in enumerate(s):
            smaller = sum(x < ch for x in digits)
            res += smaller * d ** (L - i - 1)
            if ch not in digits:
                return res
        return res + 1
`)});
lite({id:298,slug:"binary-tree-longest-consecutive-sequence",title:"Binary Tree Longest Consecutive Sequence",level:"Medium",topic:BT,name:"DFS carrying the current run length",
w:"[1,null,3,2,4,null,null,null,5]: 3 → 4 → 5 is a run of 3.",k:"Walk down from the root passing the run length ending at the parent. A child extends the run when its value is the parent's value + 1, otherwise a new run of length 1 starts. Track the maximum over all nodes.",
i:"root = [1,null,3,2,4,null,null,null,5]",o:"3",time:"O(n)",space:"O(h)",
code:C(`
class Solution:
    def longestConsecutive(self, root):
        best = 0
        def dfs(node, parent_val, run):
            nonlocal best
            if not node:
                return
            run = run + 1 if node.val == parent_val + 1 else 1
            best = max(best, run)
            dfs(node.left, node.val, run)
            dfs(node.right, node.val, run)
        dfs(root, float('-inf'), 0)
        return best
`)});
lite({id:581,slug:"shortest-unsorted-continuous-subarray",title:"Shortest Unsorted Continuous Subarray",level:"Medium",topic:SRT,name:"Compare with the sorted array",
w:"[2,6,4,8,10,9,15]: sorting positions 1…5 puts everything in order → 5.",k:"Sort a copy. The first and last positions where the arrays differ bound the subarray that must be sorted. Return the length between them (0 if equal).",
i:"nums = [2,6,4,8,10,9,15]",o:"5",time:"O(n log n)",space:"O(n)",
code:C(`
class Solution:
    def findUnsortedSubarray(self, nums):
        diff = [i for i, (a, b) in enumerate(zip(nums, sorted(nums))) if a != b]
        return diff[-1] - diff[0] + 1 if diff else 0
`)});
lite({id:395,slug:"longest-substring-with-at-least-k-repeating-characters",title:"Longest Substring with At Least K Repeating Characters",level:"Medium",topic:SW,name:"Split at letters that appear fewer than k times",
w:"'ababbc', k=2: 'c' appears once, so split there → 'ababb' of length 5.",k:"Any letter with total count < k can never be in a valid substring, so split the string at every such letter and solve the pieces recursively. A piece in which all letters appear at least k times is itself the answer for that piece.",
i:"s = \"ababbc\", k = 2",o:"5",time:"O(n·26)",space:"O(n)",
code:C(`
class Solution:
    def longestSubstring(self, s, k):
        if len(s) < k:
            return 0
        cnt = Counter(s)
        for ch, c in cnt.items():
            if c < k:
                return max(self.longestSubstring(part, k) for part in s.split(ch))
        return len(s)
`)});
lite({id:1813,slug:"sentence-similarity-iii",title:"Sentence Similarity III",level:"Medium",topic:TP,name:"Match words from the front and from the back",
w:"'My name is Haley' vs 'My Haley': 'My' matches in front and 'Haley' at the back; 'name is' is the inserted middle → true.",k:"Two sentences are similar if one can be made from the other by inserting a sentence in the middle (possibly at the ends). Split into words, count how many words match from the start and how many from the end; if the two counts together cover the shorter sentence it is similar.",
i:"sentence1 = \"My name is Haley\", sentence2 = \"My Haley\"",o:"true",time:"O(n)",space:"O(n)",
code:C(`
class Solution:
    def areSentencesSimilar(self, sentence1, sentence2):
        a, b = sentence1.split(), sentence2.split()
        if len(a) > len(b):
            a, b = b, a
        i = 0
        while i < len(a) and a[i] == b[i]:
            i += 1
        j = 0
        while j < len(a) - i and a[-1 - j] == b[-1 - j]:
            j += 1
        return i + j == len(a)
`)});
lite({id:2673,slug:"make-costs-of-paths-equal-in-a-binary-tree",title:"Make Costs of Paths Equal in a Binary Tree",level:"Medium",topic:BT,name:"Bottom-up: raise the smaller child path",
w:"n=7, cost [1,5,2,2,3,3,1]: raise 1→... total 6 increments equalise all root-to-leaf paths.",k:"The tree is perfect with nodes numbered like a heap (children of i are 2i and 2i+1, 1-indexed). Go bottom-up: at a node, the two child paths must be equal, so add the difference to the smaller one (count it as increments) and pass the larger path cost up by adding it to the node's cost.",
i:"n = 7, cost = [1,5,2,2,3,3,1]",o:"6",time:"O(n)",space:"O(1)",
code:C(`
class Solution:
    def minIncrements(self, n, cost):
        cost = cost[:]
        ops = 0
        for i in range(n // 2, 0, -1):
            l, r = cost[2 * i - 1], cost[2 * i]
            ops += abs(l - r)
            cost[i - 1] += max(l, r)
        return ops
`)});
lite({id:799,slug:"champagne-tower",title:"Champagne Tower",level:"Medium",topic:DP,name:"Simulate the overflow row by row",
w:"2 cups poured: the top cup holds 1, the overflow of 1 splits into two cups at 0.5 each → query (1,1) is 0.5.",k:"Pour into the top glass. Any amount above 1 overflows and splits equally into the two glasses below it. Simulate row by row up to the query row and return min(1, amount) for the queried glass.",
i:"poured = 2, query_row = 1, query_glass = 1",o:"0.5",time:"O(rows²)",space:"O(rows)",
code:C(`
class Solution:
    def champagneTower(self, poured, query_row, query_glass):
        row = [float(poured)]
        for r in range(query_row):
            nxt = [0.0] * (len(row) + 1)
            for i, v in enumerate(row):
                if v > 1:
                    over = (v - 1) / 2
                    nxt[i] += over
                    nxt[i + 1] += over
            row = nxt
        return min(1.0, row[query_glass])
`)});
lite({id:1530,slug:"number-of-good-leaf-nodes-pairs",title:"Number of Good Leaf Nodes Pairs",level:"Medium",topic:BT,name:"Return counts of leaves by depth from each subtree",
w:"[1,2,3,null,4], distance 3: leaves 3 and 4 are 3 edges apart → 1 pair.",k:"For each node compute how many leaves lie at each depth below it in the left and right subtrees. A leaf pair whose lowest common ancestor is this node is good if depth_left + depth_right ≤ distance, so multiply the counts for every compatible pair of depths. Return the combined (depth+1) counts upwards.",
i:"root = [1,2,3,null,4], distance = 3",o:"1",time:"O(n·distance²)",space:"O(h·distance)",
code:C(`
class Solution:
    def countPairs(self, root, distance):
        res = 0
        def dfs(node):
            nonlocal res
            if not node:
                return [0] * (distance + 1)
            if not node.left and not node.right:
                out = [0] * (distance + 1)
                out[1] = 1
                return out
            L, R = dfs(node.left), dfs(node.right)
            for i in range(1, distance + 1):
                for j in range(1, distance + 1):
                    if i + j <= distance:
                        res += L[i] * R[j]
            out = [0] * (distance + 1)
            for i in range(1, distance):
                out[i + 1] = L[i] + R[i]
            return out
        dfs(root)
        return res
`)});
lite({id:616,slug:"add-bold-tag-in-string",title:"Add Bold Tag in String",level:"Medium",topic:IV,name:"Mark covered positions, merge into bold runs",
w:"s 'abcxyz123' with words ['abc','123'] → '<b>abc</b>xyz<b>123</b>'.",k:"Mark every character covered by an occurrence of any word. Maximal runs of marked characters (which automatically merges overlapping and touching matches) are wrapped in <b>…</b>.",
i:"s = \"abcxyz123\", words = [\"abc\",\"123\"]",o:"\"<b>abc</b>xyz<b>123</b>\"",time:"O(n·w·L)",space:"O(n)",
code:C(`
class Solution:
    def addBoldTag(self, s, words):
        bold = [False] * len(s)
        for w in words:
            start = s.find(w)
            while start != -1:
                for i in range(start, start + len(w)):
                    bold[i] = True
                start = s.find(w, start + 1)
        res = []
        for i, ch in enumerate(s):
            if bold[i] and (i == 0 or not bold[i - 1]):
                res.append('<b>')
            res.append(ch)
            if bold[i] and (i == len(s) - 1 or not bold[i + 1]):
                res.append('</b>')
        return ''.join(res)
`)});
lite({id:1302,slug:"deepest-leaves-sum",title:"Deepest Leaves Sum",level:"Medium",topic:BT,name:"Sum the last BFS level",
w:"[1,2,3,4,5,null,6,7,null,null,null,null,8]: the deepest level holds 7 and 8 → 15.",k:"Do a level-order traversal and keep the sum of the level you just finished; the last level's sum is the answer.",
i:"root = [1,2,3,4,5,null,6,7,null,null,null,null,8]",o:"15",time:"O(n)",space:"O(w)",
code:C(`
class Solution:
    def deepestLeavesSum(self, root):
        q = deque([root])
        total = 0
        while q:
            total = 0
            for _ in range(len(q)):
                node = q.popleft()
                total += node.val
                if node.left:
                    q.append(node.left)
                if node.right:
                    q.append(node.right)
        return total
`)});
lite({id:99,slug:"recover-binary-search-tree",title:"Recover Binary Search Tree",level:"Medium",topic:"Binary Search Tree",name:"In-order walk, swap the two out-of-order nodes",
w:"[1,3,null,null,2] has 3 and 1 swapped → fixed tree [3,1,null,null,2].",k:"An in-order traversal of a BST (Binary Search Tree) is increasing. Two swapped nodes show up as one or two places where the order goes down. The first violation's larger node and the last violation's smaller node are the swapped pair — swap their values.",
i:"root = [1,3,null,null,2]",o:"[3, 1, None, None, 2]",time:"O(n)",space:"O(h)",
code:C(`
class Solution:
    def recoverTree(self, root):
        first = second = prev = None
        stack = []
        node = root
        while stack or node:
            while node:
                stack.append(node)
                node = node.left
            node = stack.pop()
            if prev and prev.val > node.val:
                if not first:
                    first = prev
                second = node
            prev = node
            node = node.right
        first.val, second.val = second.val, first.val
`)});
lite({id:691,slug:"stickers-to-spell-word",title:"Stickers to Spell Word",level:"Hard",topic:DP,name:"Bitmask of target letters covered",
w:"stickers ['with','example','science'], target 'thehat' → 3 stickers.",k:"State = bitmask of target letters already covered. From a state take the first uncovered letter and try every sticker that contains it, covering as many remaining target letters as it can. dp[mask] = fewest stickers to reach the mask; the answer is dp[full] or −1.",
i:"stickers = [\"with\",\"example\",\"science\"], target = \"thehat\"",o:"3",time:"O(2ᵗ·s·t)",space:"O(2ᵗ)",
code:C(`
class Solution:
    def minStickers(self, stickers, target):
        n = len(target)
        INF = float('inf')
        dp = [INF] * (1 << n)
        dp[0] = 0
        for mask in range(1 << n):
            if dp[mask] == INF:
                continue
            first = next((i for i in range(n) if not (mask >> i) & 1), None)
            if first is None:
                continue
            for st in stickers:
                if target[first] not in st:
                    continue
                avail = Counter(st)
                nm = mask
                for i in range(n):
                    if not (nm >> i) & 1 and avail[target[i]] > 0:
                        avail[target[i]] -= 1
                        nm |= 1 << i
                if dp[mask] + 1 < dp[nm]:
                    dp[nm] = dp[mask] + 1
        return dp[-1] if dp[-1] < INF else -1
`)});
lite({id:2850,slug:"minimum-moves-to-spread-stones-over-grid",title:"Minimum Moves to Spread Stones Over Grid",level:"Medium",topic:BTK,name:"Match surplus stones to empty cells",
w:"The 3×3 sample has one cell with 2 stones and one empty cell: moving a stone there costs the distance → total 3.",k:"There are exactly nine stones. List the cells with extra stones (one entry per extra stone) and the empty cells; both lists have the same length. Every extra stone must go to a distinct empty cell at cost = Manhattan distance, so try all assignments (permutations) and take the cheapest.",
i:"grid = [[1,1,0],[1,1,1],[1,2,1]]",o:"3",time:"O(k!)",space:"O(k)",
code:C(`
class Solution:
    def minimumMoves(self, grid):
        extra, empty = [], []
        for i in range(3):
            for j in range(3):
                if grid[i][j] == 0:
                    empty.append((i, j))
                for _ in range(grid[i][j] - 1):
                    extra.append((i, j))
        best = float('inf')
        for perm in permutations(empty):
            total = sum(abs(a[0] - b[0]) + abs(a[1] - b[1]) for a, b in zip(extra, perm))
            best = min(best, total)
        return best
`)});
lite({id:1151,slug:"minimum-swaps-to-group-all-1s-together",title:"Minimum Swaps to Group All 1's Together",level:"Medium",topic:SW,name:"Window of size = number of ones, fewest zeros inside",
w:"[1,0,1,0,1] has three 1s; the best window of length 3 has one 0 → 1 swap.",k:"All 1s must end in a window whose length equals the total number of ones. Slide such a window across the array; the swaps needed equal the zeros inside it. Return the minimum.",
i:"data = [1,0,1,0,1]",o:"1",time:"O(n)",space:"O(1)",
code:C(`
class Solution:
    def minSwaps(self, data):
        w = sum(data)
        if w == 0:
            return 0
        zeros = data[:w].count(0)
        best = zeros
        for i in range(w, len(data)):
            zeros += (data[i] == 0) - (data[i - w] == 0)
            best = min(best, zeros)
        return best
`)});
lite({id:473,slug:"matchsticks-to-square",title:"Matchsticks to Square",level:"Medium",topic:BTK,name:"Backtrack sticks into four sides",
w:"[1,1,2,2,2]: sides {2}, {2}, {2}, {1,1} → every side is 2... total 8 = 4×2 → true.",k:"The total length must be divisible by 4. Sort sticks descending and try to place each into one of four sides without exceeding the target side length, skipping sides with the same current length (symmetry). Success if all sticks are placed.",
i:"matchsticks = [1,1,2,2,2]",o:"true",time:"O(4ⁿ) with pruning",space:"O(n)",
code:C(`
class Solution:
    def makesquare(self, matchsticks):
        total = sum(matchsticks)
        if total % 4:
            return False
        side = total // 4
        sticks = sorted(matchsticks, reverse=True)
        if sticks[0] > side:
            return False
        sides = [0] * 4
        def go(i):
            if i == len(sticks):
                return True
            seen = set()
            for s in range(4):
                if sides[s] in seen or sides[s] + sticks[i] > side:
                    continue
                seen.add(sides[s])
                sides[s] += sticks[i]
                if go(i + 1):
                    return True
                sides[s] -= sticks[i]
            return False
        return go(0)
`)});
lite({id:962,slug:"maximum-width-ramp",title:"Maximum Width Ramp",level:"Medium",topic:STK,name:"Decreasing stack of left ends, scan from the right",
w:"[6,0,8,2,1,5]: ramp from index 1 (value 0) to index 5 (value 5) has width 4.",k:"A ramp is i < j with nums[i] ≤ nums[j]. Candidate left ends are the positions of strictly new prefix minimums (a decreasing stack). Scan j from the right and pop every candidate i with nums[i] ≤ nums[j], recording j − i; the earliest valid i gives the widest ramp for that j.",
i:"nums = [6,0,8,2,1,5]",o:"4",time:"O(n)",space:"O(n)",
code:C(`
class Solution:
    def maxWidthRamp(self, nums):
        st = []
        for i, x in enumerate(nums):
            if not st or x < nums[st[-1]]:
                st.append(i)
        best = 0
        for j in range(len(nums) - 1, -1, -1):
            while st and nums[st[-1]] <= nums[j]:
                best = max(best, j - st.pop())
        return best
`)});
lite({id:2931,slug:"maximum-spending-after-buying-items",title:"Maximum Spending After Buying Items",level:"Hard",topic:GD,name:"Buy the cheapest items first (they must be bought in increasing price order each day)",
w:"values [[8,5,2],[6,4,1],[9,7,3]]: buying all items in increasing order over 9 days spends 285.",k:"Each shop's items are sorted non-increasing; every day you may buy the rightmost (cheapest remaining) item of one shop, paying value × day. To spend as much as possible you want the large values to be bought late, so overall buy the items in globally increasing price order: sort all values ascending and multiply the i-th by (i+1).",
i:"values = [[8,5,2],[6,4,1],[9,7,3]]",o:"285",time:"O(mn log(mn))",space:"O(mn)",
code:C(`
class Solution:
    def maxSpending(self, values):
        items = sorted(v for row in values for v in row)
        return sum(v * (i + 1) for i, v in enumerate(items))
`)});
lite({id:440,slug:"k-th-smallest-in-lexicographical-order",title:"K-th Smallest in Lexicographical Order",level:"Hard",topic:TR,name:"Skip whole prefixes by counting their subtree sizes",
w:"n=13: order is 1, 10, 11, 12, 13, 2, 3 … so the 2nd is 10.",k:"Think of the numbers as a 10-ary trie. Start at prefix 1 with k−1 steps left. For the current prefix count how many numbers ≤ n lie in its subtree; if that count is ≤ the steps left, skip the entire subtree (move to prefix+1), otherwise go one level down (prefix × 10, one step used).",
i:"n = 13, k = 2",o:"10",time:"O(log²n)",space:"O(1)",
code:C(`
class Solution:
    def findKthNumber(self, n, k):
        cur = 1
        k -= 1
        while k > 0:
            count, a, b = 0, cur, cur + 1
            while a <= n:
                count += min(n + 1, b) - a
                a *= 10
                b *= 10
            if count <= k:
                cur += 1
                k -= count
            else:
                cur *= 10
                k -= 1
        return cur
`)});
lite({id:1383,slug:"maximum-performance-of-a-team",title:"Maximum Performance of a Team",level:"Hard",topic:HP,name:"Sort by efficiency, keep the k fastest in a heap",
w:"speeds [2,10,3,1,5,8], efficiency [5,4,3,9,7,2], k=2: pick engineers 2 and 5 → (10+5)·4... best performance 60.",k:"Performance = (sum of speeds) × (minimum efficiency). Sort engineers by efficiency descending and treat each as the minimum efficiency of the team: everyone processed before has efficiency ≥ it. Keep a min-heap of the k largest speeds seen so far and their sum; the candidate is sum × current efficiency.",
i:"n = 6, speed = [2,10,3,1,5,8], efficiency = [5,4,3,9,7,2], k = 2",o:"60",time:"O(n log n)",space:"O(k)",
code:C(`
class Solution:
    def maxPerformance(self, n, speed, efficiency, k):
        best = total = 0
        heap = []
        for e, s in sorted(zip(efficiency, speed), reverse=True):
            heappush(heap, s)
            total += s
            if len(heap) > k:
                total -= heappop(heap)
            best = max(best, total * e)
        return best % (10**9 + 7)
`)});
lite({id:593,slug:"valid-square",title:"Valid Square",level:"Medium",topic:MB,name:"Six distances: four equal sides, two equal diagonals",
w:"(0,0), (1,1), (1,0), (0,1) form a unit square → true.",k:"Compute the six squared distances between the four points. In a square four of them are equal and positive (the sides) and the two largest are equal (the diagonals, twice the side squared). So sort them: the first four equal, the last two equal and bigger, and the smallest is non-zero.",
i:"p1 = [0,0], p2 = [1,1], p3 = [1,0], p4 = [0,1]",o:"true",time:"O(1)",space:"O(1)",
code:C(`
class Solution:
    def validSquare(self, p1, p2, p3, p4):
        pts = [p1, p2, p3, p4]
        d = sorted((a[0] - b[0]) ** 2 + (a[1] - b[1]) ** 2 for a, b in combinations(pts, 2))
        return d[0] > 0 and d[0] == d[1] == d[2] == d[3] and d[4] == d[5] and d[4] == 2 * d[0]
`)});
lite({id:2945,slug:"find-maximum-non-decreasing-array-length",title:"Find Maximum Non-decreasing Array Length",level:"Hard",topic:DP,name:"DP with a monotonic queue over prefix sums",
w:"[4,3,2,6]: replace [3,2] by 5 → [4,5,6] length 3.",k:"Replacing a subarray by its sum means splitting the array into blocks whose sums are non-decreasing; maximise the number of blocks. dp[i] is the best block count for the prefix i, with last[i] the smallest possible sum of the last block. A cut at j is allowed when pre[i] − pre[j] ≥ last[j], i.e. pre[j] + last[j] ≤ pre[i]. Keep candidates j in a deque ordered by pre[j] + last[j] so the best (latest) allowed j is found at the front.",
i:"nums = [4,3,2,6]",o:"3",time:"O(n)",space:"O(n)",
code:C(`
class Solution:
    def findMaximumLength(self, nums):
        n = len(nums)
        pre = [0]
        for x in nums:
            pre.append(pre[-1] + x)
        dp = [0] * (n + 1)
        last = [0] * (n + 1)
        q = deque([0])
        for i in range(1, n + 1):
            while len(q) >= 2 and pre[q[1]] + last[q[1]] <= pre[i]:
                q.popleft()
            j = q[0]
            dp[i] = dp[j] + 1
            last[i] = pre[i] - pre[j]
            while q and pre[q[-1]] + last[q[-1]] >= pre[i] + last[i]:
                q.pop()
            q.append(i)
        return dp[n]
`)});
lite({id:280,slug:"wiggle-sort",title:"Wiggle Sort",level:"Medium",topic:SRT,name:"One pass: fix each neighbouring pair",
w:"[3,5,2,1,6,4] → [3,5,1,6,2,4] satisfies nums[0] ≤ nums[1] ≥ nums[2] ≤ nums[3] ≥ …",k:"For every index i ≥ 1: if i is odd we need nums[i−1] ≤ nums[i], if i is even we need nums[i−1] ≥ nums[i]. When the pair is out of order swap them; swapping never breaks the earlier pairs.",
i:"nums = [3,5,2,1,6,4]",o:"[3, 5, 1, 6, 2, 4]",time:"O(n)",space:"O(1)",
code:C(`
class Solution:
    def wiggleSort(self, nums):
        for i in range(1, len(nums)):
            if (i % 2 == 1 and nums[i] < nums[i - 1]) or (i % 2 == 0 and nums[i] > nums[i - 1]):
                nums[i], nums[i - 1] = nums[i - 1], nums[i]
        return nums
`)});
lite({id:1827,slug:"minimum-operations-to-make-the-array-increasing",title:"Minimum Operations to Make the Array Increasing",level:"Easy",topic:ARR,name:"Raise each element above the previous",
w:"[1,1,1] → [1,2,3] costs 0 + 1 + 2 = 3.",k:"Walk left to right. If nums[i] is not larger than the previous (already adjusted) value, raise it to previous + 1 and add the difference to the count.",
i:"nums = [1,1,1]",o:"3",time:"O(n)",space:"O(1)",
code:C(`
class Solution:
    def minOperations(self, nums):
        ops = 0
        prev = nums[0]
        for x in nums[1:]:
            if x <= prev:
                ops += prev + 1 - x
                prev += 1
            else:
                prev = x
        return ops
`)});
lite({id:1162,slug:"as-far-from-land-as-possible",title:"As Far from Land as Possible",level:"Medium",topic:GR,name:"Multi-source BFS from every land cell",
w:"The 3×3 grid with land in the corners: the centre water cell is 2 steps from the nearest land → 2.",k:"Start a BFS (Breadth-First Search) from all land cells at once. Each wave moves one step into water; the number of waves needed to reach the last water cell is the largest distance to land. If the grid is all land or all water, return −1.",
i:"grid = [[1,0,1],[0,0,0],[1,0,1]]",o:"2",time:"O(n²)",space:"O(n²)",
code:C(`
class Solution:
    def maxDistance(self, grid):
        n = len(grid)
        q = deque((i, j) for i in range(n) for j in range(n) if grid[i][j])
        if len(q) in (0, n * n):
            return -1
        dist = -1
        while q:
            dist += 1
            for _ in range(len(q)):
                i, j = q.popleft()
                for a, b in ((i + 1, j), (i - 1, j), (i, j + 1), (i, j - 1)):
                    if 0 <= a < n and 0 <= b < n and grid[a][b] == 0:
                        grid[a][b] = 1
                        q.append((a, b))
        return dist
`)});
lite({id:1029,slug:"two-city-scheduling",title:"Two City Scheduling",level:"Medium",topic:GD,name:"Send the people with the biggest saving to A",
w:"costs [[10,20],[30,200],[400,50],[30,20]]: send the first two to A and the last two to B → 110.",k:"Half the people go to each city. Start by sending everyone to A; switching person i to B changes the cost by costB − costA. Sort by that difference and send the n people with the smallest difference (biggest saving) to B.",
i:"costs = [[10,20],[30,200],[400,50],[30,20]]",o:"110",time:"O(n log n)",space:"O(1)",
code:C(`
class Solution:
    def twoCitySchedCost(self, costs):
        costs = sorted(costs, key=lambda c: c[0] - c[1])
        n = len(costs) // 2
        return sum(c[0] for c in costs[:n]) + sum(c[1] for c in costs[n:])
`)});
lite({id:1345,slug:"jump-game-iv",title:"Jump Game IV",level:"Hard",topic:GR,name:"BFS with a value → indices map",
w:"[100,-23,-23,404,100,23,23,23,3,404]: 0 → 4 → 3 → 9 takes 3 jumps.",k:"From index i you can step to i±1 or to any index with the same value. BFS (Breadth-First Search) from index 0. Group indices by value; the first time a value is used, jump to all its indices at once and clear that list so each value is expanded only once.",
i:"arr = [100,-23,-23,404,100,23,23,23,3,404]",o:"3",time:"O(n)",space:"O(n)",
code:C(`
class Solution:
    def minJumps(self, arr):
        n = len(arr)
        same = defaultdict(list)
        for i, v in enumerate(arr):
            same[v].append(i)
        seen = {0}
        q = deque([0])
        steps = 0
        while q:
            for _ in range(len(q)):
                i = q.popleft()
                if i == n - 1:
                    return steps
                for j in same[arr[i]] + [i - 1, i + 1]:
                    if 0 <= j < n and j not in seen:
                        seen.add(j)
                        q.append(j)
                same[arr[i]] = []
            steps += 1
        return steps
`)});
