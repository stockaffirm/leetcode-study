const {lite}=require("./lib");
const C=s=>s.replace(/^\n/,"").replace(/\n$/,"").split("\n");
const ARR="Array / String",HM="Hash Map / Set",STK="Stack / Monotonic Stack",BT="Binary Tree",GR="Graph",HP="Heap",DP="Dynamic Programming",GD="Greedy",MB="Math / Bit Manipulation",BS="Binary Search",SRT="Sorting",SW="Sliding Window",MX="Matrix",UF="Union Find / Segment Tree",TP="Two Pointers",IV="Intervals",BTK="Backtracking",DS="Design",LL="Linked List",TR="Trie",PS="Prefix Sum";
// ---- PayPal
lite({id:1160,slug:"find-words-that-can-be-formed-by-characters",title:"Find Words That Can Be Formed by Characters",level:"Easy",topic:HM,name:"Compare letter counts with chars",
w:"words ['cat','bt','hat','tree'], chars 'atach': 'cat' and 'hat' can be formed → 3 + 3 = 6.",k:"A word is good if every letter appears in chars at least as many times as in the word. Count the letters of chars once, test each word with a Counter, and add the lengths of the good words.",
i:"words = [\"cat\",\"bt\",\"hat\",\"tree\"], chars = \"atach\"",o:"6",time:"O(total length)",space:"O(1)",
code:C(`
class Solution:
    def countCharacters(self, words, chars):
        have = Counter(chars)
        total = 0
        for w in words:
            need = Counter(w)
            if all(have[c] >= v for c, v in need.items()):
                total += len(w)
        return total
`)});
lite({id:2554,slug:"maximum-number-of-integers-to-choose-from-a-range-i",title:"Maximum Number of Integers to Choose From a Range I",level:"Medium",topic:GD,name:"Take the smallest allowed numbers",
w:"banned [1,6,5], n=5, maxSum=6: take 2 and 3 (sum 5); adding 4 would reach 9 → 2.",k:"To pick as many numbers as possible with a limited sum, pick the smallest ones. Walk 1 … n, skip banned numbers, and stop when the next number would push the sum over maxSum.",
i:"banned = [1,6,5], n = 5, maxSum = 6",o:"2",time:"O(n)",space:"O(b)",
code:C(`
class Solution:
    def maxCount(self, banned, n, maxSum):
        bad = set(banned)
        total = count = 0
        for v in range(1, n + 1):
            if v in bad:
                continue
            if total + v > maxSum:
                break
            total += v
            count += 1
        return count
`)});
lite({id:1969,slug:"minimum-non-zero-product-of-the-array-elements",title:"Minimum Non-Zero Product of the Array Elements",level:"Medium",topic:MB,name:"Pair up numbers into (1, 2^p − 2)",
w:"p=3: numbers 1…7; best arrangement leaves 7 and three pairs (1, 6) → 7 · 6³ = 1512.",k:"Swapping bits between two numbers keeps their sum, so to make the product small make one of them tiny. The best is to turn every pair (x, 2^p−1−x) into (1, 2^p−2). That leaves the maximum 2^p−1 alone and 2^(p−1)−1 pairs worth 2^p−2 each: (2^p−1) · (2^p−2)^(2^(p−1)−1) mod 1e9+7.",
i:"p = 3",o:"1512",time:"O(p)",space:"O(1)",
code:C(`
class Solution:
    def minNonZeroProduct(self, p):
        MOD = 10**9 + 7
        top = (1 << p) - 1
        return top % MOD * pow(top - 1, (1 << (p - 1)) - 1, MOD) % MOD
`)});
lite({id:1999,slug:"smallest-greater-multiple-made-of-two-digits",title:"Smallest Greater Multiple Made of Two Digits",level:"Medium",topic:BTK,name:"Generate numbers in increasing order",
w:"k=2 with digits 0 and 2: 2, 20, 22 … the first number > 2 divisible by 2 is 20.",k:"Generate numbers that use only the two digits in increasing order with a queue: start from the non-zero digits and append the digits in ascending order. The first generated number that is greater than k and divisible by k is the answer; stop with −1 once the numbers exceed the 32-bit limit.",
i:"k = 2, digit1 = 0, digit2 = 2",o:"20",time:"O(2^len)",space:"O(2^len)",
code:C(`
class Solution:
    def findInteger(self, k, digit1, digit2):
        ds = sorted({digit1, digit2})
        q = deque(d for d in ds if d > 0)
        while q:
            x = q.popleft()
            if x > 2**31 - 1:
                return -1
            if x > k and x % k == 0:
                return x
            for d in ds:
                q.append(x * 10 + d)
        return -1
`)});
lite({id:2056,slug:"number-of-valid-move-combinations-on-chessboard",title:"Number of Valid Move Combinations On Chessboard",level:"Hard",topic:BTK,name:"Enumerate each piece's moves, compare paths over time",
w:"One rook at (1,1) can end on 15 squares (14 moves along its row and column plus staying) → 15.",k:"Each piece chooses a direction and a distance (or stays). Describe every move by the square it occupies at times 0 … 7 (it waits at the destination). Backtrack over the pieces choosing one move each and reject a combination as soon as two pieces share a square at the same time. Count the complete combinations.",
i:"pieces = [\"rook\"], positions = [[1,1]]",o:"15",time:"O(moves^n · 8)",space:"O(n)",
code:C(`
class Solution:
    def countCombinations(self, pieces, positions):
        rook = [(1, 0), (-1, 0), (0, 1), (0, -1)]
        bishop = [(1, 1), (1, -1), (-1, 1), (-1, -1)]
        def all_moves(piece, r, c):
            dirs = {"rook": rook, "bishop": bishop, "queen": rook + bishop}[piece]
            moves = [[(r, c)] * 8]
            for dr, dc in dirs:
                for k in range(1, 8):
                    nr, nc = r + dr * k, c + dc * k
                    if not (1 <= nr <= 8 and 1 <= nc <= 8):
                        break
                    moves.append([(r + dr * min(t, k), c + dc * min(t, k)) for t in range(8)])
            return moves
        options = [all_moves(p, r, c) for p, (r, c) in zip(pieces, positions)]
        chosen = []
        def clash(a, b):
            return any(x == y for x, y in zip(a, b))
        def go(i):
            if i == len(pieces):
                return 1
            total = 0
            for mv in options[i]:
                if all(not clash(mv, other) for other in chosen):
                    chosen.append(mv)
                    total += go(i + 1)
                    chosen.pop()
            return total
        return go(0)
`)});
lite({id:2183,slug:"count-array-pairs-divisible-by-k",title:"Count Array Pairs Divisible by K",level:"Hard",topic:MB,name:"Group by gcd with k",
w:"[1,2,3,4,5], k=2: pairs containing an even number work: 7 of them.",k:"nums[i]·nums[j] is divisible by k exactly when gcd(nums[i], k) · gcd(nums[j], k) is divisible by k. k has few divisors, so count the earlier numbers by their gcd with k and, for each new number, add the counts of the gcd classes that pair with it.",
i:"nums = [1,2,3,4,5], k = 2",o:"7",time:"O(n·d(k))",space:"O(d(k))",
code:C(`
class Solution:
    def countPairs(self, nums, k):
        cnt = Counter()
        res = 0
        for x in nums:
            g = gcd(x, k)
            for g2, c in cnt.items():
                if g * g2 % k == 0:
                    res += c
            cnt[g] += 1
        return res
`)});
lite({id:2586,slug:"count-the-number-of-vowel-strings-in-range",title:"Count the Number of Vowel Strings in Range",level:"Easy",topic:ARR,name:"Check first and last letter",
w:"['are','amy','u'], indices 0-2: 'are' and 'u' start and end with a vowel → 2.",k:"In the index range, count words whose first and last letters are both vowels.",
i:"words = [\"are\",\"amy\",\"u\"], left = 0, right = 2",o:"2",time:"O(n)",space:"O(1)",
code:C(`
class Solution:
    def vowelStrings(self, words, left, right):
        return sum(w[0] in 'aeiou' and w[-1] in 'aeiou' for w in words[left:right + 1])
`)});
lite({id:2524,slug:"maximum-frequency-score-of-a-subarray",title:"Maximum Frequency Score of a Subarray",level:"Hard",topic:SW,name:"Sliding window with a modular running score",
w:"[1,1,1,2,1,2], k=3: the window [2,1,2] scores 2² + 1 = 5; [1,1,1] scores 1.",k:"The score of a window is Σ value^frequency over its distinct values, taken modulo 1e9+7, and we maximise that modded value. Slide a window of size k keeping the frequency map and the score: adding x changes its term from x^f to x^(f+1); removing x changes it from x^f to x^(f−1).",
i:"nums = [1,1,1,2,1,2], k = 3",o:"5",time:"O(n log k)",space:"O(k)",
code:C(`
class Solution:
    def maxFrequencyScore(self, nums, k):
        MOD = 10**9 + 7
        freq = Counter()
        score = 0
        best = 0
        def add(x):
            nonlocal score
            f = freq[x]
            score += pow(x, f + 1, MOD) - (pow(x, f, MOD) if f else 0)
            freq[x] = f + 1
        def remove(x):
            nonlocal score
            f = freq[x]
            score += (pow(x, f - 1, MOD) if f > 1 else 0) - pow(x, f, MOD)
            freq[x] = f - 1
        for i, x in enumerate(nums):
            add(x)
            if i >= k:
                remove(nums[i - k])
            if i >= k - 1:
                best = max(best, score % MOD)
        return best
`)});
lite({id:2557,slug:"maximum-number-of-integers-to-choose-from-a-range-ii",title:"Maximum Number of Integers to Choose From a Range II",level:"Medium",topic:BS,name:"Arithmetic series between banned numbers",
w:"banned [1,6,5], n=5, maxSum=6 → pick 2 and 3 → 2 (n and maxSum can be huge).",k:"Same greedy as part I (take the smallest available numbers), but n and maxSum are huge so we cannot loop. Sort the distinct banned numbers ≤ n. Between consecutive banned numbers the available values form a run; binary search how many numbers of that run fit in the remaining sum using the arithmetic-series formula. Stop as soon as a run cannot be taken completely.",
i:"banned = [1,6,5], n = 5, maxSum = 6",o:"2",time:"O(b log n)",space:"O(b)",
code:C(`
class Solution:
    def maxCount(self, banned, n, maxSum):
        bad = sorted({b for b in banned if b <= n})
        prev = 0
        count = 0
        remaining = maxSum
        for b in bad + [n + 1]:
            lo, hi = prev + 1, b - 1
            if lo <= hi:
                L = hi - lo + 1
                l, r = 0, L
                while l < r:
                    mid = (l + r + 1) // 2
                    if mid * (2 * lo + mid - 1) // 2 <= remaining:
                        l = mid
                    else:
                        r = mid - 1
                count += l
                remaining -= l * (2 * lo + l - 1) // 2
                if l < L:
                    return count
            prev = b
        return count
`)});
lite({id:1589,slug:"maximum-sum-obtained-of-any-permutation",title:"Maximum Sum Obtained of Any Permutation",level:"Medium",topic:PS,name:"Give the biggest numbers to the most requested slots",
w:"nums [1,2,3,4,5], requests [1,3] and [0,1]: slot 1 is asked twice, slots 0,2,3 once → best sum 19.",k:"A permutation changes where each number goes, not how often each slot is requested. Count how many requests cover each index with a difference array, then pair the largest request counts with the largest numbers (sort both) and sum the products.",
i:"nums = [1,2,3,4,5], requests = [[1,3],[0,1]]",o:"19",time:"O(n log n)",space:"O(n)",
code:C(`
class Solution:
    def maxSumRangeQuery(self, nums, requests):
        n = len(nums)
        diff = [0] * (n + 1)
        for l, r in requests:
            diff[l] += 1
            diff[r + 1] -= 1
        freq = list(accumulate(diff[:n]))
        freq.sort()
        nums.sort()
        return sum(a * b for a, b in zip(freq, nums)) % (10**9 + 7)
`)});
lite({id:851,slug:"loud-and-rich",title:"Loud and Rich",level:"Medium",topic:GR,name:"DFS over 'richer than' edges",
w:"richer pairs [1,0],[2,1],[3,1],[3,7],[4,3],[5,3],[6,3] with the quiet values: person 0's answer is 5 (the quietest among everyone at least as rich).",k:"richer[a] = [x, y] means x has more money than y. For each person, the answer is the quietest person among those who have at least as much money, i.e. themselves and everyone reachable by walking up the 'richer' edges. DFS (Depth-First Search) with memoisation from each person.",
i:"richer = [[1,0],[2,1],[3,1],[3,7],[4,3],[5,3],[6,3]], quiet = [3,2,5,4,6,1,7,0]",o:"[5, 5, 2, 5, 4, 5, 6, 7]",time:"O(n + e)",space:"O(n + e)",
code:C(`
class Solution:
    def loudAndRich(self, richer, quiet):
        n = len(quiet)
        above = [[] for _ in range(n)]
        for a, b in richer:
            above[b].append(a)
        ans = [-1] * n
        def dfs(x):
            if ans[x] >= 0:
                return ans[x]
            ans[x] = x
            for y in above[x]:
                cand = dfs(y)
                if quiet[cand] < quiet[ans[x]]:
                    ans[x] = cand
            return ans[x]
        return [dfs(x) for x in range(n)]
`)});
