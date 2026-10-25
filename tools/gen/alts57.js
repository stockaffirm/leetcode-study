module.exports=({alt})=>{
const C=s=>s.replace(/^\n/,"").replace(/\n$/,"").split("\n");
// ---- Pinterest
alt(1055,{name:"Jump with a next-occurrence table",tag:"Alternative",time:"O(|source|·26 + |target|)",space:"O(26·|source|)",explain:"Precompute for each position the next index of every letter, so each target character is matched with one lookup.",code:C(`
class Solution:
    def shortestWay(self, source, target):
        n = len(source)
        nxt = [dict() for _ in range(n + 1)]
        for i in range(n - 1, -1, -1):
            nxt[i] = dict(nxt[i + 1])
            nxt[i][source[i]] = i
        passes = 1
        pos = 0
        for c in target:
            if c not in nxt[0]:
                return -1
            if c not in nxt[pos]:
                passes += 1
                pos = 0
            pos = nxt[pos][c] + 1
        return passes
`)});
alt(2302,{name:"Prefix sums and binary search",tag:"Alternative",time:"O(n log n)",space:"O(n)",explain:"For each start binary search the longest window whose score is below k.",code:C(`
class Solution:
    def countSubarrays(self, nums, k):
        n = len(nums)
        pre = [0]
        for x in nums:
            pre.append(pre[-1] + x)
        res = 0
        for i in range(n):
            lo, hi = i, n
            while lo < hi:
                mid = (lo + hi + 1) // 2
                if (pre[mid] - pre[i]) * (mid - i) < k:
                    lo = mid
                else:
                    hi = mid - 1
            res += lo - i
        return res
`)});
alt(720,{name:"Trie of all words",tag:"Alternative",time:"O(total length)",space:"O(total length)",explain:"Insert all words into a trie, then DFS only through nodes that end a word; keep the deepest, alphabetically first.",code:C(`
class Solution:
    def longestWord(self, words):
        trie = {}
        for w in words:
            node = trie
            for c in w:
                node = node.setdefault(c, {})
            node['$'] = w
        best = ""
        st = [trie]
        while st:
            node = st.pop()
            for c, child in node.items():
                if c == '$':
                    continue
                if '$' in child:
                    w = child['$']
                    if len(w) > len(best) or (len(w) == len(best) and w < best):
                        best = w
                    st.append(child)
        return best
`)});
alt(1723,{name:"Binary search on the answer + backtracking",tag:"Alternative",time:"exponential",space:"O(n)",explain:"Guess a time limit T and check with backtracking whether the jobs fit into k workers without exceeding T.",code:C(`
class Solution:
    def minimumTimeRequired(self, jobs, k):
        jobs.sort(reverse=True)
        def can(T):
            loads = [0] * k
            def go(i):
                if i == len(jobs):
                    return True
                seen = set()
                for w in range(k):
                    if loads[w] in seen or loads[w] + jobs[i] > T:
                        continue
                    seen.add(loads[w])
                    loads[w] += jobs[i]
                    if go(i + 1):
                        return True
                    loads[w] -= jobs[i]
                return False
            return go(0)
        lo, hi = max(jobs), sum(jobs)
        while lo < hi:
            mid = (lo + hi) // 2
            if can(mid):
                hi = mid
            else:
                lo = mid + 1
        return lo
`)});
alt(1580,{name:"Try every subset size",tag:"Brute force",time:"O(n²)",space:"O(n)",explain:"For a candidate count c use the c smallest boxes and check they fit in the c roomiest rooms by sorted comparison.",code:C(`
class Solution:
    def maxBoxesInWarehouse(self, boxes, warehouse):
        n = len(warehouse)
        left = list(accumulate(warehouse, min))
        right = list(accumulate(reversed(warehouse), min))[::-1]
        caps = sorted((max(left[i], right[i]) for i in range(n)), reverse=True)
        boxes.sort()
        best = 0
        for c in range(1, min(len(boxes), n) + 1):
            use = boxes[:c]
            if all(use[c - 1 - t] <= caps[t] for t in range(c)):
                best = c
        return best
`)});
alt(1564,{name:"Walk the rooms from the deep end",tag:"Alternative",time:"O(n log n)",space:"O(n)",explain:"Prefix minima are non-increasing, so reading them from the back gives rooms from the smallest capacity to the largest; match the smallest boxes first without sorting the capacities.",code:C(`
class Solution:
    def maxBoxesInWarehouse(self, boxes, warehouse):
        caps = list(accumulate(warehouse, min))
        boxes.sort()
        j = 0
        for cap in reversed(caps):
            if j < len(boxes) and boxes[j] <= cap:
                j += 1
        return j
`)});
};
