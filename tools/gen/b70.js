const {lite}=require("./lib");
const C=s=>s.replace(/^\n/,"").replace(/\n$/,"").split("\n");
const ARR="Array / String",HM="Hash Map / Set",STK="Stack / Monotonic Stack",BT="Binary Tree",GR="Graph",HP="Heap",DP="Dynamic Programming",GD="Greedy",MB="Math / Bit Manipulation",BS="Binary Search",SRT="Sorting",SW="Sliding Window",MX="Matrix",UF="Union Find / Segment Tree",TP="Two Pointers",IV="Intervals",BTK="Backtracking",DS="Design",LL="Linked List",TR="Trie",PS="Prefix Sum";
// ---- Bloomberg (6)
lite({id:832,slug:"flipping-an-image",title:"Flipping an Image",level:"Easy",topic:MX,name:"Reverse each row and invert in one pass",
w:"[[1,1,0],[1,0,1],[0,0,0]] → flip rows → [[0,1,1],[1,0,1],[0,0,0]] → invert → [[1,0,0],[0,1,0],[1,1,1]].",k:"Flipping a row reverses it, inverting turns 0 into 1 and 1 into 0. Doing both: output cell j of a row is 1 − input cell (n−1−j).",
i:"image = [[1,1,0],[1,0,1],[0,0,0]]",o:"[[1, 0, 0], [0, 1, 0], [1, 1, 1]]",time:"O(n²)",space:"O(n²)",
code:C(`
class Solution:
    def flipAndInvertImage(self, image):
        return [[1 - v for v in reversed(row)] for row in image]
`)});
lite({id:2845,slug:"count-of-interesting-subarrays",title:"Count of Interesting Subarrays",level:"Medium",topic:PS,name:"Prefix count modulo, with a hash map of earlier remainders",
w:"[3,2,4], modulo 2, k 1: the subarrays with an odd number of odd-remainder elements.",k:"Mark an element 1 if nums[i] % modulo == k. A subarray is interesting if its number of marked elements c satisfies c % modulo == k. With prefix counts p, we need p[r] − p[l] ≡ k (mod modulo), i.e. p[l] ≡ p[r] − k. Keep a Counter of earlier prefix remainders.",
i:"nums = [3,2,4], modulo = 2, k = 1",o:"3",time:"O(n)",space:"O(n)",
code:C(`
class Solution:
    def countInterestingSubarrays(self, nums, modulo, k):
        seen = Counter({0: 1})
        pref = 0
        res = 0
        for x in nums:
            if x % modulo == k:
                pref += 1
            res += seen[(pref - k) % modulo]
            seen[pref % modulo] += 1
        return res
`)});
lite({id:2259,slug:"remove-digit-from-number-to-maximize-result",title:"Remove Digit From Number to Maximize Result",level:"Easy",topic:GD,name:"Try each occurrence, keep the largest",
w:"number '123', digit '3' → '12'.",k:"The digit appears at a few positions. Remove each in turn and keep the largest resulting string (all candidates have the same length, so string comparison works).",
i:"number = \"1231\", digit = \"1\"",o:"\"231\"",time:"O(n²)",space:"O(n)",
code:C(`
class Solution:
    def removeDigit(self, number, digit):
        return max(number[:i] + number[i + 1:] for i, c in enumerate(number) if c == digit)
`)});
lite({id:2337,slug:"move-pieces-to-obtain-a-string",title:"Move Pieces to Obtain a String",level:"Medium",topic:TP,name:"Two pointers over the pieces",
w:"'_L__R__R_' → 'L______RR': L moves left, R moves right: true.",k:"'L' can only move left and 'R' only right, and pieces never pass each other. Skip blanks with two pointers; the next piece must be the same letter in both strings, and an L must not end up to the right of where it started, an R not to the left.",
i:"start = \"_L__R__R_\", target = \"L______RR\"",o:"true",time:"O(n)",space:"O(1)",
code:C(`
class Solution:
    def canChange(self, start, target):
        n = len(start)
        i = j = 0
        while i < n or j < n:
            while i < n and start[i] == '_':
                i += 1
            while j < n and target[j] == '_':
                j += 1
            if i == n or j == n:
                return i == n and j == n
            if start[i] != target[j]:
                return False
            if start[i] == 'L' and i < j:
                return False
            if start[i] == 'R' and i > j:
                return False
            i += 1
            j += 1
        return True
`)});
lite({id:1128,slug:"number-of-equivalent-domino-pairs",title:"Number of Equivalent Domino Pairs",level:"Easy",topic:HM,name:"Count normalised dominoes, add C(c, 2)",
w:"[[1,2],[2,1],[3,4],[5,6]] → [1,2] and [2,1] are equivalent → 1.",k:"Two dominoes are equivalent when one is a rotation of the other. Normalise each to (min, max) and count; a group of c equal dominoes gives c·(c−1)/2 pairs.",
i:"dominoes = [[1,2],[2,1],[3,4],[5,6]]",o:"1",time:"O(n)",space:"O(n)",
code:C(`
class Solution:
    def numEquivDominoPairs(self, dominoes):
        cnt = Counter(tuple(sorted(d)) for d in dominoes)
        return sum(c * (c - 1) // 2 for c in cnt.values())
`)});
lite({id:2071,slug:"maximum-number-of-tasks-you-can-assign",title:"Maximum Number of Tasks You Can Assign",level:"Hard",topic:BS,name:"Binary search the answer + deque greedy check",
w:"tasks [3,2,1], workers [0,3,3], pills 1, strength 1 → 3.",k:"If k tasks can be done, so can fewer: binary search k. To check k, take the k easiest tasks and k strongest workers. Go through the workers from weakest to strongest keeping a deque of tasks they could do with a pill: if the easiest task fits without a pill take it, otherwise spend a pill on the hardest task the worker can reach.",
i:"tasks = [3,2,1], workers = [0,3,3], pills = 1, strength = 1",o:"3",time:"O(n log n)",space:"O(n)",
code:C(`
class Solution:
    def maxTaskAssign(self, tasks, workers, pills, strength):
        tasks.sort()
        workers.sort()
        def can(k):
            ts = tasks[:k]
            dq = deque()
            p = pills
            ptr = 0
            for w in workers[len(workers) - k:]:
                while ptr < k and ts[ptr] <= w + strength:
                    dq.append(ts[ptr])
                    ptr += 1
                if not dq:
                    return False
                if dq[0] <= w:
                    dq.popleft()
                else:
                    if p == 0:
                        return False
                    p -= 1
                    dq.pop()
            return True
        lo, hi = 0, min(len(tasks), len(workers))
        while lo < hi:
            mid = (lo + hi + 1) // 2
            if can(mid):
                lo = mid
            else:
                hi = mid - 1
        return lo
`)});
lite({id:3557,slug:"find-maximum-number-of-non-intersecting-substrings",title:"Find Maximum Number of Non Intersecting Substrings",level:"Medium",topic:DP,name:"dp over prefixes with the latest eligible earlier equal letter",
w:"'abcdeafdef' → 'abcdea' and 'fdef' → 2.",k:"dp[i] = the most substrings in the first i letters. Either skip letter i−1 (dp[i−1]) or end a substring there: it must start at an earlier equal letter at distance ≥ 3. Since dp never decreases, the latest such start is best: dp[start] + 1.",
i:"word = \"abcdeafdef\"",o:"2",time:"O(n)",space:"O(n)",
code:C(`
class Solution:
    def maxSubstrings(self, word):
        n = len(word)
        dp = [0] * (n + 1)
        last = {}
        for i in range(n):
            if i >= 3:
                last[word[i - 3]] = i - 3
            dp[i + 1] = dp[i]
            if word[i] in last:
                dp[i + 1] = max(dp[i + 1], dp[last[word[i]]] + 1)
        return dp[n]
`)});
lite({id:3547,slug:"maximum-sum-of-edge-values-in-a-graph",title:"Maximum Sum of Edge Values in a Graph",level:"Hard",topic:GD,name:"Big numbers in the middle: spread values outwards",
w:"n=4 path 0-1-2-3 → values 1,3,4,2 → 3 + 12 + 8 = 23.",k:"Every node has degree ≤ 2, so the connected graph is a path or a cycle. To maximise the sum of products, big numbers must be neighbours: line the values up with n in the middle, n−1 to its right, n−2 to its left, n−3 on the right … The arrangement is the same for a path; a cycle also joins the two ends (the values 1 and 2).",
i:"n = 4, edges = [[0,1],[1,2],[2,3]]",o:"23",time:"O(n)",space:"O(n)",
code:C(`
class Solution:
    def maxScore(self, n, edges):
        line = deque([n])
        for v in range(n - 1, 0, -1):
            if (n - v) % 2:
                line.append(v)
            else:
                line.appendleft(v)
        line = list(line)
        total = sum(a * b for a, b in zip(line, line[1:]))
        if len(edges) == n:
            total += line[0] * line[-1]
        return total
`)});
lite({id:3403,slug:"find-the-lexicographically-largest-string-from-the-box-i",title:"Find the Lexicographically Largest String From the Box I",level:"Medium",topic:ARR,name:"Best start index, longest allowed length",
w:"'dbca' with 2 friends → splits give 'd','bca' / 'db','ca' / 'dbc','a' → largest is 'dbc'.",k:"With f friends, a piece can have at most n − f + 1 letters. Any piece is a substring starting at some index, so try every start and take the longest allowed piece from it; the answer is the maximum of those. For one friend the whole word is the only split.",
i:"word = \"dbca\", numFriends = 2",o:"\"dbc\"",time:"O(n²)",space:"O(n)",
code:C(`
class Solution:
    def answerString(self, word, numFriends):
        if numFriends == 1:
            return word
        n = len(word)
        m = n - numFriends + 1
        return max(word[i:i + m] for i in range(n))
`)});
lite({id:2170,slug:"minimum-operations-to-make-the-array-alternating",title:"Minimum Operations to Make the Array Alternating",level:"Medium",topic:HM,name:"Top-2 frequencies at even and odd positions",
w:"[3,1,3,2,4,3]: even positions hold 3,3,4 and odd ones 1,2,3; keeping 3 and 1 changes 3 elements → 3.",k:"Alternating means all even positions share one value a, all odd positions share another value b ≠ a. For each parity find the most and second most frequent value. If the two best differ take both; if they coincide take the best of the pair (best + second of the other parity). The cost is n minus the kept count.",
i:"nums = [3,1,3,2,4,3]",o:"3",time:"O(n)",space:"O(n)",
code:C(`
class Solution:
    def minimumOperations(self, nums):
        def top2(arr):
            c = Counter(arr).most_common(2)
            c += [(None, 0)] * (2 - len(c))
            return c
        (a1, ca1), (a2, ca2) = top2(nums[0::2])
        (b1, cb1), (b2, cb2) = top2(nums[1::2])
        if a1 != b1:
            keep = ca1 + cb1
        else:
            keep = max(ca1 + cb2, ca2 + cb1)
        return len(nums) - keep
`)});
lite({id:2000,slug:"reverse-prefix-of-word",title:"Reverse Prefix of Word",level:"Easy",topic:ARR,name:"Find the first ch, reverse up to it",
w:"'abcdefd', ch 'd' → 'dcbaefd'.",k:"Find the first index of ch. If there is none return the word; otherwise reverse the slice up to and including that index.",
i:"word = \"abcdefd\", ch = \"d\"",o:"\"dcbaefd\"",time:"O(n)",space:"O(n)",
code:C(`
class Solution:
    def reversePrefix(self, word, ch):
        i = word.find(ch)
        return word[:i + 1][::-1] + word[i + 1:]
`)});
lite({id:3445,slug:"maximum-difference-between-even-and-odd-frequency-ii",title:"Maximum Difference Between Even and Odd Frequency II",level:"Hard",topic:PS,name:"Per digit pair: prefix counts with parity-state minima",
w:"'1122211', k=3: the window '11222' has 2 three times and 1 twice → 3 − 2 = 1.",k:"The digits are 0–4, so try every ordered pair (a, b). With prefix counts ca, cb, a window (l, r] needs ca odd, cb even and non-zero, and length ≥ k. Keep the minimum of ca[l] − cb[l] for each parity pair (ca%2, cb%2) over left ends that are far enough (r − l ≥ k) and leave at least two b's; the best window at r pairs with the state that flips ca's parity.",
i:"s = \"1122211\", k = 3",o:"1",time:"O(25·n)",space:"O(n)",
code:C(`
class Solution:
    def maxDifference(self, s, k):
        n = len(s)
        best = float('-inf')
        for a in '01234':
            for b in '01234':
                if a == b:
                    continue
                ca = [0] * (n + 1)
                cb = [0] * (n + 1)
                for i, c in enumerate(s):
                    ca[i + 1] = ca[i] + (c == a)
                    cb[i + 1] = cb[i] + (c == b)
                low = [float('inf')] * 4
                l = 0
                for r in range(k, n + 1):
                    while r - l >= k and cb[r] - cb[l] >= 2:
                        st = (ca[l] % 2) * 2 + cb[l] % 2
                        low[st] = min(low[st], ca[l] - cb[l])
                        l += 1
                    st = (1 - ca[r] % 2) * 2 + cb[r] % 2
                    if low[st] < float('inf'):
                        best = max(best, ca[r] - cb[r] - low[st])
        return best
`)});
lite({id:3423,slug:"maximum-difference-between-adjacent-elements-in-a-circular-array",title:"Maximum Difference Between Adjacent Elements in a Circular Array",level:"Easy",topic:ARR,name:"Check every neighbouring pair, wrapping around",
w:"[1,2,4] → |1−2|, |2−4|, |4−1| → 3.",k:"In a circular array the last element is next to the first. Take the maximum of |nums[i] − nums[(i+1) % n]| over all i.",
i:"nums = [1,2,4]",o:"3",time:"O(n)",space:"O(1)",
code:C(`
class Solution:
    def maxAdjacentDistance(self, nums):
        n = len(nums)
        return max(abs(nums[i] - nums[(i + 1) % n]) for i in range(n))
`)});
lite({id:2359,slug:"find-closest-node-to-given-two-nodes",title:"Find Closest Node to Given Two Nodes",level:"Medium",topic:GR,name:"Walk the chain from both nodes",
w:"edges [2,2,3,-1], node1 0, node2 1 → both reach node 2 → 2.",k:"Each node has at most one outgoing edge, so from a node you just follow the chain. Record the distance from node1 and node2 to every node they reach; among nodes reached by both, pick the one with the smallest larger distance (smallest index on ties).",
i:"edges = [2,2,3,-1], node1 = 0, node2 = 1",o:"2",time:"O(n)",space:"O(n)",
code:C(`
class Solution:
    def closestMeetingNode(self, edges, node1, node2):
        def dist(start):
            d = {}
            cur, steps = start, 0
            while cur != -1 and cur not in d:
                d[cur] = steps
                cur = edges[cur]
                steps += 1
            return d
        d1, d2 = dist(node1), dist(node2)
        best, ans = float('inf'), -1
        for v in sorted(set(d1) & set(d2)):
            m = max(d1[v], d2[v])
            if m < best:
                best, ans = m, v
        return ans
`)});
lite({id:3582,slug:"generate-tag-for-video-caption",title:"Generate Tag for Video Caption",level:"Easy",topic:ARR,name:"Camel-case the words, keep letters, cut at 100",
w:"'Leetcode daily streak achieved' → '#leetcodeDailyStreakAchieved'.",k:"Split on spaces. The first word is all lowercase, each later word has a capital first letter and lowercase rest. Drop every character that is not a letter, prefix '#', and keep at most 100 characters.",
i:"caption = \"Leetcode daily streak achieved\"",o:"\"#leetcodeDailyStreakAchieved\"",time:"O(n)",space:"O(n)",
code:C(`
class Solution:
    def generateTag(self, caption):
        words = caption.split()
        out = ""
        for i, w in enumerate(words):
            w = ''.join(c for c in w if c.isalpha())
            out += w.lower() if i == 0 else w.capitalize()
        return ("#" + out)[:100]
`)});
lite({id:2807,slug:"insert-greatest-common-divisors-in-linked-list",title:"Insert Greatest Common Divisors in Linked List",level:"Medium",topic:LL,name:"Insert a node between each neighbouring pair",
w:"[18,6,10,3] → [18,6,6,2,10,1,3].",k:"For each adjacent pair (a, b) insert a node holding gcd(a, b) between them. Walk with one pointer, create the node, link it, and jump past it.",
i:"head = [18,6,10,3]",o:"[18, 6, 6, 2, 10, 1, 3]",time:"O(n log V)",space:"O(1)",
code:C(`
class Solution:
    def insertGreatestCommonDivisors(self, head):
        cur = head
        while cur and cur.next:
            g = ListNode(gcd(cur.val, cur.next.val), cur.next)
            cur.next = g
            cur = g.next
        return head
`)});
lite({id:87,slug:"scramble-string",title:"Scramble String",level:"Hard",topic:DP,name:"Memoised split: swapped or not swapped",
w:"s1 'great', s2 'rgeat' → true.",k:"s2 is a scramble of s1 if some split point i gives either (s1[:i] ~ s2[:i] and s1[i:] ~ s2[i:]) or the swapped version (s1[:i] ~ s2[-i:] and s1[i:] ~ s2[:-i]). Strings with different letter counts can never match, which prunes the search. Memoise on (s1, s2).",
i:"s1 = \"great\", s2 = \"rgeat\"",o:"true",time:"O(n⁴)",space:"O(n³)",
code:C(`
class Solution:
    def isScramble(self, s1, s2):
        @lru_cache(None)
        def go(a, b):
            if a == b:
                return True
            if sorted(a) != sorted(b):
                return False
            n = len(a)
            for i in range(1, n):
                if go(a[:i], b[:i]) and go(a[i:], b[i:]):
                    return True
                if go(a[:i], b[n - i:]) and go(a[i:], b[:n - i]):
                    return True
            return False
        return go(s1, s2)
`)});
lite({id:3333,slug:"find-the-original-typed-string-ii",title:"Find the Original Typed String II",level:"Hard",topic:DP,name:"All ways minus the too-short ones (prefix-sum DP)",
w:"'aabbccdd', k=7 → 5 originals of length ≥ 7.",k:"Group equal consecutive letters; each group of length g can come from 1…g typed letters, so there are the product of g's originals in total. Subtract those shorter than k: if there are at least k groups, none are shorter. Otherwise count length-<k originals with a DP (Dynamic Programming) over groups using prefix sums, modulo 1e9+7.",
i:"word = \"aabbccdd\", k = 7",o:"5",time:"O(k · groups)",space:"O(k)",
code:C(`
class Solution:
    def possibleStringCount(self, word, k):
        MOD = 10**9 + 7
        groups = [len(list(g)) for _, g in groupby(word)]
        total = 1
        for g in groups:
            total = total * g % MOD
        if len(groups) >= k:
            return total
        dp = [0] * k
        dp[0] = 1
        for g in groups:
            new = [0] * k
            pref = [0] * (k + 1)
            for j in range(k):
                pref[j + 1] = (pref[j] + dp[j]) % MOD
            for j in range(1, k):
                lo = max(0, j - g)
                new[j] = (pref[j] - pref[lo]) % MOD
            dp = new
        return (total - sum(dp)) % MOD
`)});
lite({id:3307,slug:"find-the-k-th-character-in-string-game-ii",title:"Find the K-th Character in String Game II",level:"Hard",topic:MB,name:"Undo the operations from the last one back",
w:"k=5, ops [0,0,0] → word becomes 'aaaaaaaa' → 'a'.",k:"After each operation the word doubles; the second half is a copy of the first (shifted by one letter for an operation of type 1). Work backwards: if k lies in the second half, move it to the first half and add the shift of that operation. The count of shifts mod 26 gives the letter.",
i:"k = 10, operations = [0,1,0,1]",o:"\"b\"",time:"O(log k)",space:"O(1)",
code:C(`
class Solution:
    def kthCharacter(self, k, operations):
        shift = 0
        k -= 1
        for i in range(len(operations) - 1, -1, -1):
            half = 1 << i
            if k >= half:
                k -= half
                shift += operations[i]
        return chr(ord('a') + shift % 26)
`)});
lite({id:551,slug:"student-attendance-record-i",title:"Student Attendance Record I",level:"Easy",topic:ARR,name:"At most one 'A' and no 'LLL'",
w:"'PPALLP' → true; 'PPALLL' → false.",k:"The student is eligible when the string has fewer than two 'A's and does not contain three 'L's in a row.",
i:"s = \"PPALLP\"",o:"true",time:"O(n)",space:"O(1)",
code:C(`
class Solution:
    def checkRecord(self, s):
        return s.count('A') < 2 and 'LLL' not in s
`)});
lite({id:3439,slug:"reschedule-meetings-for-maximum-free-time-i",title:"Reschedule Meetings for Maximum Free Time I",level:"Medium",topic:SW,name:"Sliding window of k+1 gaps",
w:"eventTime 5, k=1, meetings [1,2],[3,5] → move [1,2] to [2,3] → free time 2.",k:"Free time sits in the n+1 gaps between meetings (including before the first and after the last). Moving k meetings merges k+1 consecutive gaps into one. So the answer is the largest sum of k+1 consecutive gaps.",
i:"eventTime = 5, k = 1, startTime = [1,3], endTime = [2,5]",o:"2",time:"O(n)",space:"O(n)",
code:C(`
class Solution:
    def maxFreeTime(self, eventTime, k, startTime, endTime):
        n = len(startTime)
        gaps = [startTime[0]]
        for i in range(1, n):
            gaps.append(startTime[i] - endTime[i - 1])
        gaps.append(eventTime - endTime[-1])
        window = sum(gaps[:k + 1])
        best = window
        for i in range(k + 1, len(gaps)):
            window += gaps[i] - gaps[i - k - 1]
            best = max(best, window)
        return best
`)});
lite({id:1900,slug:"the-earliest-and-latest-rounds-where-players-compete",title:"The Earliest and Latest Rounds Where Players Compete",level:"Hard",topic:DP,name:"Memoised recursion on (players, position of first, position of second)",
w:"n=11, first 2, second 4 → they can meet as early as round 3 and as late as round 4.",k:"Only the positions of the two special players matter. If they are mirror images (positions add to n+1) they meet this round. Otherwise reflect so the pair is in the left part, then try every way the other players can win: how many survivors land before the first, and between the two. Recurse on the halved row.",
i:"n = 11, firstPlayer = 2, secondPlayer = 4",o:"[3, 4]",time:"O(n⁴)",space:"O(n³)",
code:C(`
class Solution:
    def earliestAndLatest(self, n, firstPlayer, secondPlayer):
        @lru_cache(None)
        def dp(n, f, s):
            if f + s == n + 1:
                return (1, 1)
            if f + s > n + 1:
                return dp(n, n + 1 - s, n + 1 - f)
            half = (n + 1) // 2
            lo, hi = float('inf'), 0
            if s <= n + 1 - s:
                for a in range(f):
                    for b in range(s - f):
                        r = dp(half, a + 1, a + b + 2)
                        lo, hi = min(lo, r[0] + 1), max(hi, r[1] + 1)
            else:
                o = n + 1 - s
                for a in range(f):
                    for b in range(o - f):
                        r = dp(half, a + 1, a + b + (s - o) // 2 + 2)
                        lo, hi = min(lo, r[0] + 1), max(hi, r[1] + 1)
            return (lo, hi)
        return list(dp(n, firstPlayer, secondPlayer))
`)});
lite({id:899,slug:"orderly-queue",title:"Orderly Queue",level:"Hard",topic:ARR,name:"k = 1: best rotation; k ≥ 2: just sort",
w:"s 'cba', k=1 → rotations: 'cba','bac','acb' → 'acb'.",k:"With k = 1 you can only rotate the string, so try all rotations and take the smallest. With k ≥ 2 you can reorder arbitrarily (adjacent swaps are possible), so the answer is the sorted string.",
i:"s = \"cba\", k = 1",o:"\"acb\"",time:"O(n²)",space:"O(n)",
code:C(`
class Solution:
    def orderlyQueue(self, s, k):
        if k == 1:
            return min(s[i:] + s[:i] for i in range(len(s)))
        return ''.join(sorted(s))
`)});
lite({id:1695,slug:"maximum-erasure-value",title:"Maximum Erasure Value",level:"Medium",topic:SW,name:"Sliding window of distinct values",
w:"[4,2,4,5,6] → best window 2,4,5,6 → 17.",k:"Keep a window with no repeated values and its running sum. When the new value is already inside, shrink from the left until it is gone. Track the best sum.",
i:"nums = [4,2,4,5,6]",o:"17",time:"O(n)",space:"O(n)",
code:C(`
class Solution:
    def maximumUniqueSubarray(self, nums):
        seen = set()
        left = total = best = 0
        for x in nums:
            while x in seen:
                seen.remove(nums[left])
                total -= nums[left]
                left += 1
            seen.add(x)
            total += x
            best = max(best, total)
        return best
`)});
lite({id:3274,slug:"check-if-two-chessboard-squares-have-the-same-color",title:"Check if Two Chessboard Squares Have the Same Color",level:"Easy",topic:MB,name:"Parity of column + row",
w:"'a1' and 'c3' are both dark → true.",k:"A square's colour is decided by the parity of (column index + row number). Compare the two parities.",
i:"coordinate1 = \"a1\", coordinate2 = \"c3\"",o:"true",time:"O(1)",space:"O(1)",
code:C(`
class Solution:
    def checkTwoChessboards(self, coordinate1, coordinate2):
        def parity(c):
            return (ord(c[0]) - ord('a') + int(c[1])) % 2
        return parity(coordinate1) == parity(coordinate2)
`)});
lite({id:2044,slug:"count-number-of-maximum-bitwise-or-subsets",title:"Count Number of Maximum Bitwise-OR Subsets",level:"Medium",topic:BTK,name:"DFS over include / skip",
w:"[3,1] → maximum OR 3 reached by {3} and {3,1} → 2.",k:"The largest possible OR is the OR of all numbers. Count the subsets whose OR reaches it with a DFS (Depth-First Search) that either includes or skips each number.",
i:"nums = [3,1]",o:"2",time:"O(2ⁿ)",space:"O(n)",
code:C(`
class Solution:
    def countMaxOrSubsets(self, nums):
        target = 0
        for x in nums:
            target |= x
        def dfs(i, cur):
            if i == len(nums):
                return 1 if cur == target else 0
            return dfs(i + 1, cur) + dfs(i + 1, cur | nums[i])
        return dfs(0, 0)
`)});
lite({id:991,slug:"broken-calculator",title:"Broken Calculator",level:"Medium",topic:GD,name:"Work backwards from the target",
w:"start 2, target 3: reverse 3 → 4 (add 1) → 2 (halve) = 2 steps.",k:"Going forward you can double or subtract 1. Reversed: from the target either halve (if even) or add 1 (if odd), until the target is at most the start; then the remaining gap is closed by decrements (start − target steps).",
i:"startValue = 2, target = 3",o:"2",time:"O(log target)",space:"O(1)",
code:C(`
class Solution:
    def brokenCalc(self, startValue, target):
        steps = 0
        while target > startValue:
            target = target // 2 if target % 2 == 0 else target + 1
            steps += 1
        return steps + startValue - target
`)});
lite({id:2597,slug:"the-number-of-beautiful-subsets",title:"The Number of Beautiful Subsets",level:"Medium",topic:BTK,name:"Backtracking with a count table",
w:"[2,4,6], k=2 → beautiful subsets: {2},{4},{6},{2,6} → 4.",k:"A subset is beautiful if no two of its numbers differ by exactly k. Backtrack over elements: include nums[i] only if neither nums[i]−k nor nums[i]+k is already chosen (tracked in a Counter). Count every non-empty subset reached.",
i:"nums = [2,4,6], k = 2",o:"4",time:"O(2ⁿ)",space:"O(n)",
code:C(`
class Solution:
    def beautifulSubsets(self, nums, k):
        chosen = Counter()
        def go(i):
            if i == len(nums):
                return 1
            res = go(i + 1)
            x = nums[i]
            if chosen[x - k] == 0 and chosen[x + k] == 0:
                chosen[x] += 1
                res += go(i + 1)
                chosen[x] -= 1
            return res
        return go(0) - 1
`)});
lite({id:2535,slug:"difference-between-element-sum-and-digit-sum-of-an-array",title:"Difference Between Element Sum and Digit Sum of an Array",level:"Easy",topic:ARR,name:"Sum the elements, sum the digits, subtract",
w:"[1,15,6,3]: element sum 25, digit sum 1+1+5+6+3 = 16 → 9.",k:"Compute the sum of the elements and the sum of all digits of all elements; return the absolute difference.",
i:"nums = [1,15,6,3]",o:"9",time:"O(n log V)",space:"O(1)",
code:C(`
class Solution:
    def differenceOfSum(self, nums):
        element_sum = sum(nums)
        digit_sum = sum(int(d) for x in nums for d in str(x))
        return abs(element_sum - digit_sum)
`)});
lite({id:2582,slug:"pass-the-pillow",title:"Pass the Pillow",level:"Easy",topic:MB,name:"Position on a back-and-forth cycle",
w:"n=4, time=5 → 1,2,3,4,3,2 → person 2.",k:"The pillow goes from 1 to n and back, a full cycle of 2(n−1) seconds. Reduce time modulo the cycle length t; if t ≤ n−1 the holder is 1 + t, otherwise n − (t − (n−1)).",
i:"n = 4, time = 5",o:"2",time:"O(1)",space:"O(1)",
code:C(`
class Solution:
    def passThePillow(self, n, time):
        t = time % (2 * (n - 1))
        return 1 + t if t <= n - 1 else n - (t - (n - 1))
`)});
lite({id:1851,slug:"minimum-interval-to-include-each-query",title:"Minimum Interval to Include Each Query",level:"Hard",topic:HP,name:"Offline sweep: heap of intervals by size",
w:"intervals [[1,4],[2,4],[3,6],[4,4]], query 2 → smallest interval containing 2 is [2,4] (size 3).",k:"Answer the queries in increasing order. Push every interval that starts at or before the query into a min-heap keyed by size (with its right end); pop intervals whose right end is before the query. The top of the heap is the smallest interval covering the query, or −1 if the heap is empty.",
i:"intervals = [[1,4],[2,4],[3,6],[4,4]], queries = [2,3,4,5]",o:"[3, 3, 1, 4]",time:"O((n + q) log n)",space:"O(n + q)",
code:C(`
class Solution:
    def minInterval(self, intervals, queries):
        intervals.sort()
        res = {}
        heap = []
        i = 0
        for q in sorted(queries):
            while i < len(intervals) and intervals[i][0] <= q:
                l, r = intervals[i]
                heappush(heap, (r - l + 1, r))
                i += 1
            while heap and heap[0][1] < q:
                heappop(heap)
            res[q] = heap[0][0] if heap else -1
        return [res[q] for q in queries]
`)});
lite({id:1203,slug:"sort-items-by-groups-respecting-dependencies",title:"Sort Items by Groups Respecting Dependencies",level:"Hard",topic:GR,name:"Topological sort of groups, then of items inside each group",
w:"8 items, 2 groups: items of one group stay together and obey beforeItems.",k:"Give every item without a group its own new group. Build two dependency graphs: between groups (item a before b in different groups gives group[a] → group[b]) and between items of the same group. Topologically sort the groups (smallest id first), then each group's items (smallest first) and concatenate. If either graph has a cycle return [].",
i:"n = 8, m = 2, group = [-1,-1,1,0,0,1,0,-1], beforeItems = [[],[6],[5],[6],[3,6],[],[],[]]",o:"[6, 3, 4, 5, 2, 0, 1, 7]",time:"O(n + E)",space:"O(n + E)",
code:C(`
class Solution:
    def sortItems(self, n, m, group, beforeItems):
        group = group[:]
        for i in range(n):
            if group[i] == -1:
                group[i] = m
                m += 1
        def topo(nodes, edges):
            indeg = {v: 0 for v in nodes}
            for u in nodes:
                for v in edges.get(u, ()):
                    indeg[v] += 1
            ready = [v for v in nodes if indeg[v] == 0]
            heapify(ready)
            order = []
            while ready:
                u = heappop(ready)
                order.append(u)
                for v in edges.get(u, ()):
                    indeg[v] -= 1
                    if indeg[v] == 0:
                        heappush(ready, v)
            return order if len(order) == len(nodes) else None
        g_edges = defaultdict(set)
        i_edges = defaultdict(set)
        for v in range(n):
            for u in beforeItems[v]:
                if group[u] == group[v]:
                    i_edges[u].add(v)
                else:
                    g_edges[group[u]].add(group[v])
        g_order = topo(list(range(m)), g_edges)
        if g_order is None:
            return []
        members = defaultdict(list)
        for v in range(n):
            members[group[v]].append(v)
        res = []
        for g in g_order:
            order = topo(members[g], i_edges)
            if order is None:
                return []
            res += order
        return res
`)});
lite({id:3021,slug:"alice-and-bob-playing-flower-game",title:"Alice and Bob Playing Flower Game",level:"Medium",topic:MB,name:"Count pairs (x, y) with x + y odd",
w:"n=3, m=2 → the pairs with odd sum: (1,2),(2,1),(3,2) → 3.",k:"Alice wins exactly when the total number of flowers x + y is odd. Count the pairs with x in 1…n and y in 1…m and odd sum: (odd x, even y) plus (even x, odd y) = (n+1)//2·(m//2) + (n//2)·((m+1)//2), which equals n·m // 2.",
i:"n = 3, m = 2",o:"3",time:"O(1)",space:"O(1)",
code:C(`
class Solution:
    def flowerGame(self, n, m):
        return n * m // 2
`)});
lite({id:3211,slug:"generate-binary-strings-without-adjacent-zeros",title:"Generate Binary Strings Without Adjacent Zeros",level:"Medium",topic:BTK,name:"Build strings, never place 0 after 0",
w:"n=3 → '010','011','101','110','111'.",k:"Build the string left to right. After a '0' only '1' may follow; after a '1' either digit. Collect the strings of length n and return them sorted.",
i:"n = 3",o:"['010', '011', '101', '110', '111']",time:"O(2ⁿ)",space:"O(n)",
code:C(`
class Solution:
    def validStrings(self, n):
        res = []
        def go(cur):
            if len(cur) == n:
                res.append(cur)
                return
            go(cur + '1')
            if not cur or cur[-1] == '1':
                go(cur + '0')
        go("")
        return sorted(res)
`)});
lite({id:3516,slug:"find-closest-person",title:"Find Closest Person",level:"Easy",topic:MB,name:"Compare two distances",
w:"x=2, y=7, z=4 → |2−4| = 2, |7−4| = 3 → person 1 arrives first.",k:"Person 1 needs |x − z| steps and person 2 needs |y − z|. Return 1, 2 or 0 (tie).",
i:"x = 2, y = 7, z = 4",o:"1",time:"O(1)",space:"O(1)",
code:C(`
class Solution:
    def findClosest(self, x, y, z):
        a, b = abs(x - z), abs(y - z)
        return 1 if a < b else 2 if b < a else 0
`)});
lite({id:3478,slug:"choose-k-elements-with-maximum-sum",title:"Choose K Elements With Maximum Sum",level:"Medium",topic:HP,name:"Process in order of nums1 with a min-heap of the top k values",
w:"nums1 [4,2,1,5,3], nums2 [10,20,30,40,50], k=2 → [80,30,0,80,50].",k:"Sort the indices by nums1. Sweep upwards keeping a min-heap of the k largest nums2 values among strictly smaller nums1 entries (and their sum). Equal nums1 values share one answer, so add a group's values to the heap only after answering the whole group.",
i:"nums1 = [4,2,1,5,3], nums2 = [10,20,30,40,50], k = 2",o:"[80, 30, 0, 80, 50]",time:"O(n log n)",space:"O(n)",
code:C(`
class Solution:
    def findMaxSum(self, nums1, nums2, k):
        n = len(nums1)
        order = sorted(range(n), key=lambda i: nums1[i])
        res = [0] * n
        heap = []
        total = 0
        i = 0
        while i < n:
            j = i
            while j < n and nums1[order[j]] == nums1[order[i]]:
                res[order[j]] = total
                j += 1
            for t in range(i, j):
                v = nums2[order[t]]
                heappush(heap, v)
                total += v
                if len(heap) > k:
                    total -= heappop(heap)
            i = j
        return res
`)});
lite({id:2119,slug:"a-number-after-a-double-reversal",title:"A Number After a Double Reversal",level:"Easy",topic:MB,name:"Only trailing zeros are lost",
w:"526 → 625 → 526: true; 1800 → 81 → 18: false.",k:"Reversing drops trailing zeros (they become leading zeros). So the number comes back unchanged exactly when it is 0 or does not end in 0.",
i:"num = 526",o:"true",time:"O(1)",space:"O(1)",
code:C(`
class Solution:
    def isSameAfterReversals(self, num):
        return num == 0 or num % 10 != 0
`)});
lite({id:1733,slug:"minimum-number-of-people-to-teach",title:"Minimum Number of People to Teach",level:"Medium",topic:HM,name:"Teach the most popular language to the unconnected friends",
w:"2 languages, 3 users: teach language 1 to user 2 → 1.",k:"Find the friendships whose two people share no language. Only the people in those pairs need teaching. Pick one language to teach to all of them: the best choice is the one already known by the most of these people; the answer is their count minus that maximum.",
i:"n = 2, languages = [[1],[2],[1,2]], friendships = [[1,2],[1,3],[2,3]]",o:"1",time:"O(m·L)",space:"O(n)",
code:C(`
class Solution:
    def minimumTeachings(self, n, languages, friendships):
        langs = [set(l) for l in languages]
        need = set()
        for a, b in friendships:
            if not (langs[a - 1] & langs[b - 1]):
                need.add(a - 1)
                need.add(b - 1)
        if not need:
            return 0
        know = Counter()
        for u in need:
            for l in langs[u]:
                know[l] += 1
        return len(need) - max(know.values(), default=0)
`)});
lite({id:1061,slug:"lexicographically-smallest-equivalent-string",title:"Lexicographically Smallest Equivalent String",level:"Medium",topic:UF,name:"Union-find keeping the smallest letter as root",
w:"s1 'parker', s2 'morris', base 'parser' → 'makkek'.",k:"Letters s1[i] and s2[i] are equivalent. Merge them with union-find, always making the smaller letter the root. Replace every letter of baseStr with the root of its group.",
i:"s1 = \"parker\", s2 = \"morris\", baseStr = \"parser\"",o:"\"makkek\"",time:"O(n α)",space:"O(26)",
code:C(`
class Solution:
    def smallestEquivalentString(self, s1, s2, baseStr):
        parent = {c: c for c in map(chr, range(97, 123))}
        def find(x):
            while parent[x] != x:
                parent[x] = parent[parent[x]]
                x = parent[x]
            return x
        for a, b in zip(s1, s2):
            ra, rb = find(a), find(b)
            if ra != rb:
                parent[max(ra, rb)] = min(ra, rb)
        return ''.join(find(c) for c in baseStr)
`)});
lite({id:2540,slug:"minimum-common-value",title:"Minimum Common Value",level:"Easy",topic:TP,name:"Two pointers on the sorted arrays",
w:"nums1 [1,2,3], nums2 [2,4] → 2.",k:"Both arrays are sorted. Advance the pointer at the smaller value; when the two values are equal that is the smallest common value.",
i:"nums1 = [1,2,3], nums2 = [2,4]",o:"2",time:"O(n + m)",space:"O(1)",
code:C(`
class Solution:
    def getCommon(self, nums1, nums2):
        i = j = 0
        while i < len(nums1) and j < len(nums2):
            if nums1[i] == nums2[j]:
                return nums1[i]
            if nums1[i] < nums2[j]:
                i += 1
            else:
                j += 1
        return -1
`)});
lite({id:2364,slug:"count-number-of-bad-pairs",title:"Count Number of Bad Pairs",level:"Medium",topic:HM,name:"All pairs minus pairs with equal nums[i] − i",
w:"[4,1,3,3]: 6 pairs in total, 1 good pair (indices 1 and 3) → 5 bad pairs.",k:"A pair i<j is good when j − i == nums[j] − nums[i], i.e. nums[i] − i == nums[j] − j. Count good pairs by grouping equal nums[i] − i values, and subtract from n(n−1)/2.",
i:"nums = [4,1,3,3]",o:"5",time:"O(n)",space:"O(n)",
code:C(`
class Solution:
    def countBadPairs(self, nums):
        n = len(nums)
        cnt = Counter(x - i for i, x in enumerate(nums))
        good = sum(c * (c - 1) // 2 for c in cnt.values())
        return n * (n - 1) // 2 - good
`)});
lite({id:3349,slug:"adjacent-increasing-subarrays-detection-i",title:"Adjacent Increasing Subarrays Detection I",level:"Easy",topic:ARR,name:"Strictly increasing run lengths",
w:"[2,5,7,8,9,2,3,4,3,1], k=3 → [7,8,9] and [2,3,4] are adjacent increasing → true.",k:"Compute inc[i] = length of the strictly increasing run starting at i. Two adjacent increasing subarrays of length k start at a and a+k, so we need inc[a] ≥ k and inc[a+k] ≥ k.",
i:"nums = [2,5,7,8,9,2,3,4,3,1], k = 3",o:"true",time:"O(n)",space:"O(n)",
code:C(`
class Solution:
    def hasIncreasingSubarrays(self, nums, k):
        n = len(nums)
        inc = [1] * n
        for i in range(n - 2, -1, -1):
            if nums[i] < nums[i + 1]:
                inc[i] = inc[i + 1] + 1
        return any(inc[a] >= k and inc[a + k] >= k for a in range(n - k))
`)});
lite({id:3397,slug:"maximum-number-of-distinct-elements-after-operations",title:"Maximum Number of Distinct Elements After Operations",level:"Medium",topic:GD,name:"Sort, give each the smallest unused value in its range",
w:"[1,2,2,3,3,4], k=2 → 6 distinct values.",k:"Every element may change by at most k, i.e. take any value in [x−k, x+k]. Sort the numbers. Keep the last value used (cur); for the next number pick max(cur+1, x−k); if that is within x+k count it as a new distinct value.",
i:"nums = [1,2,2,3,3,4], k = 2",o:"6",time:"O(n log n)",space:"O(1)",
code:C(`
class Solution:
    def maxDistinctElements(self, nums, k):
        nums.sort()
        cur = float('-inf')
        count = 0
        for x in nums:
            pick = max(cur + 1, x - k)
            if pick <= x + k:
                count += 1
                cur = pick
        return count
`)});
lite({id:2090,slug:"k-radius-subarray-averages",title:"K Radius Subarray Averages",level:"Medium",topic:PS,name:"Prefix sums over windows of 2k+1",
w:"[7,4,3,9,1,8,5,2,6], k=3 → [-1,-1,-1,5,4,4,-1,-1,-1].",k:"For an index i with k elements on each side the average is the sum of nums[i−k…i+k] divided by 2k+1 (integer division). Use prefix sums; indices without full radius give −1.",
i:"nums = [7,4,3,9,1,8,5,2,6], k = 3",o:"[-1, -1, -1, 5, 4, 4, -1, -1, -1]",time:"O(n)",space:"O(n)",
code:C(`
class Solution:
    def getAverages(self, nums, k):
        n = len(nums)
        pre = [0]
        for x in nums:
            pre.append(pre[-1] + x)
        res = [-1] * n
        for i in range(k, n - k):
            res[i] = (pre[i + k + 1] - pre[i - k]) // (2 * k + 1)
        return res
`)});
lite({id:3609,slug:"minimum-moves-to-reach-target-in-grid",title:"Minimum Moves to Reach Target in Grid",level:"Hard",topic:GD,name:"Undo the moves from the target backwards",
w:"(1,2) → (1,4) → (5,4) takes 2 moves.",k:"A move adds m = max(x, y) to one coordinate. Reverse it: from (X, Y) with X > Y, if X ≥ 2Y the last move doubled X (needs X even, previous x = X/2); otherwise the previous point was (X − Y, Y). Symmetric for Y > X. At X == Y the previous point was (0, Y) or (X, 0), only possible if the start has a zero. Stop on reaching the start, or return −1 when a coordinate drops below the start's.",
i:"sx = 1, sy = 2, tx = 5, ty = 4",o:"2",time:"O(log target)",space:"O(1)",
code:C(`
class Solution:
    def minMoves(self, sx, sy, tx, ty):
        moves = 0
        while (tx, ty) != (sx, sy):
            if tx < sx or ty < sy:
                return -1
            if tx == ty:
                if sx == 0 and sy == 0:
                    return -1
                if sx == 0:
                    tx = 0
                elif sy == 0:
                    ty = 0
                else:
                    return -1
            elif tx > ty:
                if tx >= 2 * ty:
                    if tx % 2:
                        return -1
                    tx //= 2
                else:
                    tx -= ty
            else:
                if ty >= 2 * tx:
                    if ty % 2:
                        return -1
                    ty //= 2
                else:
                    ty -= tx
            moves += 1
        return moves
`)});
lite({id:2441,slug:"largest-positive-integer-that-exists-with-its-negative",title:"Largest Positive Integer That Exists With Its Negative",level:"Easy",topic:HM,name:"Set lookup of the negative",
w:"[-1,2,-3,3] → 3 (and −3 both exist) → 3.",k:"Put all numbers in a set. For each positive number whose negative is also in the set keep the maximum; return −1 if there is none.",
i:"nums = [-1,2,-3,3]",o:"3",time:"O(n)",space:"O(n)",
code:C(`
class Solution:
    def findMaxK(self, nums):
        seen = set(nums)
        return max((x for x in nums if x > 0 and -x in seen), default=-1)
`)});
lite({id:3321,slug:"find-x-sum-of-all-k-long-subarrays-ii",title:"Find X-Sum of All K-Long Subarrays II",level:"Hard",topic:HP,name:"Sliding window with a 'top x' set and a 'rest' set",
w:"nums [1,1,2,2,3,4,2,3], k=6, x=2 → [6,10,12].",k:"The x-sum counts only the x most frequent values (ties: bigger value wins). Keep each value's frequency and two ordered collections of (frequency, value) pairs: top (size ≤ x) and rest. When a value's frequency changes, remove its old pair, insert the new pair, then rebalance: move the best of rest into top, or the worst of top out. Maintain the sum of freq·value in top.",
i:"nums = [1,1,2,2,3,4,2,3], k = 6, x = 2",o:"[6, 10, 12]",time:"O(n·d)",space:"O(d)",
code:C(`
class Solution:
    def findXSum(self, nums, k, x):
        freq = Counter()
        top, rest = [], []
        state = {"sum": 0}
        def remove(pair):
            if pair in top:
                top.remove(pair)
                state["sum"] -= pair[0] * pair[1]
            elif pair in rest:
                rest.remove(pair)
        def add(pair):
            insort(rest, pair)
        def rebalance():
            while rest and len(top) < x:
                p = rest.pop()
                insort(top, p)
                state["sum"] += p[0] * p[1]
            while rest and top and rest[-1] > top[0]:
                a, b = rest.pop(), top.pop(0)
                state["sum"] += a[0] * a[1] - b[0] * b[1]
                insort(top, a)
                insort(rest, b)
        def change(v, delta):
            if freq[v]:
                remove((freq[v], v))
            freq[v] += delta
            if freq[v]:
                add((freq[v], v))
            rebalance()
        res = []
        for i, v in enumerate(nums):
            change(v, 1)
            if i >= k:
                change(nums[i - k], -1)
            if i >= k - 1:
                res.append(state["sum"])
        return res
`)});
lite({id:1240,slug:"tiling-a-rectangle-with-the-fewest-squares",title:"Tiling a Rectangle with the Fewest Squares",level:"Hard",topic:BTK,name:"Backtracking on the skyline",
w:"2 × 3 rectangle → 3 squares (a 2×2 and two 1×1).",k:"Keep the filled heights of each column (the skyline). Always fill the lowest-leftmost gap: try every square size that fits there, from large to small, recurse, and prune when the count already exceeds the best.",
i:"n = 2, m = 3",o:"3",time:"exponential (tiny n, m ≤ 13)",space:"O(m)",
code:C(`
class Solution:
    def tilingRectangle(self, n, m):
        best = [n * m]
        height = [0] * m
        def go(count):
            if count >= best[0]:
                return
            low = min(height)
            if low == n:
                best[0] = count
                return
            start = height.index(low)
            end = start
            while end < m and height[end] == low:
                end += 1
            for size in range(min(end - start, n - low), 0, -1):
                for j in range(start, start + size):
                    height[j] += size
                go(count + 1)
                for j in range(start, start + size):
                    height[j] -= size
        go(0)
        return best[0]
`)});
lite({id:3234,slug:"count-the-number-of-substrings-with-dominant-ones",title:"Count the Number of Substrings With Dominant Ones",level:"Medium",topic:SW,name:"For each start, walk at most √n zeros and count the valid ends",
w:"'00011' → the dominant substrings (ones ≥ zeros²) number 5.",k:"A substring is dominant when ones ≥ zeros², so it has at most √n zeros. For each start i, look at the first zero, second zero and so on (at most √n of them). With exactly z zeros the end lies between the z-th zero and just before the next zero, and the length must be at least z² + z (z zeros plus z² ones). Count those ends by arithmetic. z = 0 counts the all-ones substrings.",
i:"s = \"00011\"",o:"5",time:"O(n√n)",space:"O(n)",
code:C(`
class Solution:
    def numberOfSubstrings(self, s):
        n = len(s)
        nxt = [n] * (n + 2)
        for i in range(n - 1, -1, -1):
            nxt[i] = i if s[i] == '0' else nxt[i + 1]
        total = 0
        for i in range(n):
            cur = nxt[i]
            total += cur - i
            z = 1
            while cur < n and z * z <= n:
                nz = nxt[cur + 1]
                lo = max(cur, i + z * z + z - 1)
                if nz - 1 >= lo:
                    total += nz - lo
                cur = nz
                z += 1
        return total
`)});
lite({id:1437,slug:"check-if-all-1s-are-at-least-length-k-places-away",title:"Check If All 1's Are at Least Length K Places Away",level:"Easy",topic:ARR,name:"Remember the last 1",
w:"[1,0,0,0,1,0,0,1], k=2 → gaps of 3 → true.",k:"Walk the array remembering the index of the previous 1. A new 1 is too close if i − prev − 1 < k.",
i:"nums = [1,0,0,0,1,0,0,1], k = 2",o:"true",time:"O(n)",space:"O(1)",
code:C(`
class Solution:
    def kLengthApart(self, nums, k):
        prev = -k - 1
        for i, v in enumerate(nums):
            if v == 1:
                if i - prev - 1 < k:
                    return False
                prev = i
        return True
`)});
lite({id:717,slug:"1-bit-and-2-bit-characters",title:"1-bit and 2-bit Characters",level:"Easy",topic:ARR,name:"Walk the encoding",
w:"[1,0,0] → '10' then '0' → true.",k:"A 1 starts a two-bit character, a 0 is a one-bit character. Walk from the start skipping 2 on a 1 and 1 on a 0; the last character is one-bit if we land exactly on the last index.",
i:"bits = [1,0,0]",o:"true",time:"O(n)",space:"O(1)",
code:C(`
class Solution:
    def isOneBitCharacter(self, bits):
        i = 0
        while i < len(bits) - 1:
            i += bits[i] + 1
        return i == len(bits) - 1
`)});
lite({id:623,slug:"add-one-row-to-tree",title:"Add One Row to Tree",level:"Medium",topic:BT,name:"Insert level by level",
w:"[4,2,6,3,1,5], val 1, depth 2 → a new row of 1s under the root.",k:"At depth 1 make a new root whose left child is the old tree. Otherwise find the nodes at depth − 1 with BFS (Breadth-First Search); for each, insert val-nodes as its new left and right children and hang the old children below them.",
i:"root = [4,2,6,3,1,5], val = 1, depth = 2",o:"[4, 1, 1, 2, None, None, 6, 3, 1, 5]",time:"O(n)",space:"O(w)",
code:C(`
class Solution:
    def addOneRow(self, root, val, depth):
        if depth == 1:
            return TreeNode(val, root)
        level = [root]
        for _ in range(depth - 2):
            level = [c for node in level for c in (node.left, node.right) if c]
        for node in level:
            node.left = TreeNode(val, node.left)
            node.right = TreeNode(val, None, node.right)
        return root
`)});
lite({id:880,slug:"decoded-string-at-index",title:"Decoded String at Index",level:"Medium",topic:STK,name:"Compute the length, then unwind from the end",
w:"'leet2code3', k=10 → 'o'.",k:"Never build the huge string. First compute the decoded length by scanning. Then go backwards: for a digit d divide the length by d and reduce k mod the length; for a letter, if k is 0 (or equals the length) it is the answer, else shrink the length by 1.",
i:"s = \"leet2code3\", k = 10",o:"\"o\"",time:"O(n)",space:"O(1)",
code:C(`
class Solution:
    def decodeAtIndex(self, s, k):
        size = 0
        for c in s:
            size = size * int(c) if c.isdigit() else size + 1
        for c in reversed(s):
            k %= size
            if k == 0 and c.isalpha():
                return c
            if c.isdigit():
                size //= int(c)
            else:
                size -= 1
`)});
lite({id:3006,slug:"find-beautiful-indices-in-the-given-array-i",title:"Find Beautiful Indices in the Given Array I",level:"Medium",topic:TP,name:"Positions of a and b, then a near-b check",
w:"s 'isawsquirrelnearmysquirrelhouseohmy', a 'my', b 'squirrel', k 15 → [16, 33].",k:"Collect every start index of a and of b. An a-index i is beautiful if some b-index j has |i − j| ≤ k. With both lists sorted, binary search the closest b-index to i.",
i:"s = \"isawsquirrelnearmysquirrelhouseohmy\", a = \"my\", b = \"squirrel\", k = 15",o:"[16, 33]",time:"O(n·L + p log q)",space:"O(n)",
code:C(`
class Solution:
    def beautifulIndices(self, s, a, b, k):
        pa = [i for i in range(len(s) - len(a) + 1) if s.startswith(a, i)]
        pb = [j for j in range(len(s) - len(b) + 1) if s.startswith(b, j)]
        res = []
        for i in pa:
            p = bisect_left(pb, i - k)
            if p < len(pb) and pb[p] <= i + k:
                res.append(i)
        return res
`)});
