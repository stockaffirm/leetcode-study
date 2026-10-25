const {lite}=require("./lib");
const C=s=>s.replace(/^\n/,"").replace(/\n$/,"").split("\n");
const ARR="Array / String",HM="Hash Map / Set",STK="Stack / Monotonic Stack",BT="Binary Tree",GR="Graph",HP="Heap",DP="Dynamic Programming",GD="Greedy",MB="Math / Bit Manipulation",BS="Binary Search",SRT="Sorting",SW="Sliding Window",MX="Matrix",UF="Union Find / Segment Tree",TP="Two Pointers",IV="Intervals",BTK="Backtracking",DS="Design",LL="Linked List",TR="Trie",PS="Prefix Sum";
// ---- Pinterest
lite({id:1055,slug:"shortest-way-to-form-string",title:"Shortest Way to Form String",level:"Medium",topic:TP,name:"Greedy: scan the source as many times as needed",
w:"source 'abc', target 'abcbc': 'abc' then 'bc' (a subsequence of 'abc') → 2.",k:"Each piece is a subsequence of source. Walk through the target with a pointer; scan source from the start, matching as many target characters as possible in one pass, then start a new pass. If a pass matches nothing, some target letter is missing from source: return −1.",
i:"source = \"abc\", target = \"abcbc\"",o:"2",time:"O(|source|·passes)",space:"O(1)",
code:C(`
class Solution:
    def shortestWay(self, source, target):
        i = 0
        passes = 0
        while i < len(target):
            start = i
            for ch in source:
                if i < len(target) and target[i] == ch:
                    i += 1
            if i == start:
                return -1
            passes += 1
        return passes
`)});
lite({id:2302,slug:"count-subarrays-with-score-less-than-k",title:"Count Subarrays With Score Less Than K",level:"Hard",topic:SW,name:"Sliding window on sum × length",
w:"[2,1,4,3,5], k=10: subarrays with sum·length < 10 number 6.",k:"The score of a window is sum × length, which only grows as the window grows. For each right end move the left end forward until the score is below k; then all windows ending at right and starting between left and right are valid: add right − left + 1.",
i:"nums = [2,1,4,3,5], k = 10",o:"6",time:"O(n)",space:"O(1)",
code:C(`
class Solution:
    def countSubarrays(self, nums, k):
        total = left = res = 0
        for r, x in enumerate(nums):
            total += x
            while total * (r - left + 1) >= k:
                total -= nums[left]
                left += 1
            res += r - left + 1
        return res
`)});
lite({id:720,slug:"longest-word-in-dictionary",title:"Longest Word in Dictionary",level:"Medium",topic:TR,name:"Sort, keep words whose prefix was built",
w:"['a','banana','app','appl','ap','apply','apple'] → 'apple' (a, ap, app, appl, apple are all present).",k:"A buildable word has every prefix in the list. Sort the words (shorter and alphabetical first). Keep a set of buildable words: a word is buildable if its prefix without the last letter is buildable (or it has length 1). Track the longest, preferring the lexicographically smaller on ties — sorted order gives that for free.",
i:"words = [\"a\",\"banana\",\"app\",\"appl\",\"ap\",\"apply\",\"apple\"]",o:"\"apple\"",time:"O(n log n · L)",space:"O(n·L)",
code:C(`
class Solution:
    def longestWord(self, words):
        built = {""}
        best = ""
        for w in sorted(words):
            if w[:-1] in built:
                built.add(w)
                if len(w) > len(best):
                    best = w
        return best
`)});
lite({id:1723,slug:"find-minimum-time-to-finish-all-jobs",title:"Find Minimum Time to Finish All Jobs",level:"Hard",topic:BTK,name:"Backtracking with pruning",
w:"jobs [1,2,4,7,8] on 2 workers: {8,2,1} and {7,4} → max 11.",k:"Assign every job to one of k workers to minimise the heaviest worker's total. Backtrack: sort jobs largest first (fail early), try each worker, but skip a worker whose current load equals one already tried (symmetry) and skip assignments that already exceed the best answer found.",
i:"jobs = [1,2,4,7,8], k = 2",o:"11",time:"O(k^n) with pruning",space:"O(n + k)",
code:C(`
class Solution:
    def minimumTimeRequired(self, jobs, k):
        jobs.sort(reverse=True)
        loads = [0] * k
        best = sum(jobs)
        def go(i):
            nonlocal best
            if i == len(jobs):
                best = min(best, max(loads))
                return
            seen = set()
            for w in range(k):
                if loads[w] in seen or loads[w] + jobs[i] >= best:
                    continue
                seen.add(loads[w])
                loads[w] += jobs[i]
                go(i + 1)
                loads[w] -= jobs[i]
        go(0)
        return best
`)});
lite({id:1580,slug:"put-boxes-into-the-warehouse-ii",title:"Put Boxes Into the Warehouse II",level:"Medium",topic:GD,name:"Capacity of each room from the nearer end",
w:"boxes [1,2,2,3,4], rooms [3,4,1,2]: room capacities 3, 3, 1, 2 → 4 boxes fit.",k:"Boxes are pushed in from either end and a box stops at a room only if all rooms before it are tall enough. So room i can hold a box up to max(min of rooms from the left up to i, min of rooms from the right up to i). Sort capacities and boxes, then match greedily from the smallest.",
i:"boxes = [1,2,2,3,4], warehouse = [3,4,1,2]",o:"4",time:"O(n log n)",space:"O(n)",
code:C(`
class Solution:
    def maxBoxesInWarehouse(self, boxes, warehouse):
        n = len(warehouse)
        left = list(accumulate(warehouse, min))
        right = list(accumulate(reversed(warehouse), min))[::-1]
        caps = sorted(max(left[i], right[i]) for i in range(n))
        boxes.sort()
        j = 0
        for cap in caps:
            if j < len(boxes) and boxes[j] <= cap:
                j += 1
        return j
`)});
lite({id:1564,slug:"put-boxes-into-the-warehouse-i",title:"Put Boxes Into the Warehouse I",level:"Medium",topic:GD,name:"Capacity of each room from the left",
w:"boxes [4,3,4,1], rooms [5,3,3,4,1] → capacities 5,3,3,3,1 → 3 boxes fit.",k:"Boxes enter from the left only, so room i can hold a box no taller than the lowest room up to i (a prefix minimum). Sort the boxes and the capacities and match the smallest boxes to the smallest rooms that fit.",
i:"boxes = [4,3,4,1], warehouse = [5,3,3,4,1]",o:"3",time:"O(n log n)",space:"O(n)",
code:C(`
class Solution:
    def maxBoxesInWarehouse(self, boxes, warehouse):
        caps = sorted(accumulate(warehouse, min))
        boxes.sort()
        j = 0
        for cap in caps:
            if j < len(boxes) and boxes[j] <= cap:
                j += 1
        return j
`)});
