/* Pattern notes shown at the top of every topic: why the section exists, the general logic, pseudo code, and the usual pattern. */
window.TOPIC_ALIAS = {
  "Hashmap":"Hash Map / Set","Binary Tree – DFS":"Binary Tree","Binary Tree – BFS":"Binary Tree","Binary Tree - General":"Binary Tree","Binary Tree - BFS":"Binary Tree",
  "Graphs – DFS":"Graph","Graphs – BFS":"Graph","Graph - General":"Graph","Graph - BFS":"Graph","DP – 1D":"Dynamic Programming","DP – Multidimensional":"Dynamic Programming",
  "1D DP":"Dynamic Programming","Multidimensional DP":"Dynamic Programming","Monotonic Stack":"Stack / Monotonic Stack","Stack":"Stack / Monotonic Stack",
  "Heap / Priority Queue":"Heap","Math":"Math / Bit Manipulation","Bit Manipulation":"Math / Bit Manipulation","Binary Search Tree":"Binary Search Tree"
};
window.TOPICS = {
"Array / String":{
 why:"Most problems are arrays or strings underneath. This section holds the ones solved with plain indexing, one or two passes and a little bookkeeping, before any heavier structure is needed.",
 logic:["Decide what one pass over the input has to remember (a count, a running value, a previous character).","Build the answer in place or into a new list and join it at the end.","Check the empty, one-element and all-same cases before you trust the loop."],
 pseudo:"result = []\nfor i, x in enumerate(items):\n    update what we remember about items[0..i]\n    if x belongs in the answer: result.append(x)\nreturn result",
 pattern:"One pass with an index; build with a list and ''.join; write into the array with a read pointer and a write pointer."},
"Hash Map / Set":{
 why:"Whenever a problem asks 'have I seen this before?' or 'how many of each?', a hash map or set answers in O(1) instead of rescanning. It trades memory for time.",
 logic:["Pick the key that makes equal things collide (the value, a sorted word, a (row, col) pair).","Store what you need to recall later (a count, an index, a list).","Look up before you insert, so a thing never matches itself."],
 pseudo:"seen = {}\nfor i, x in enumerate(items):\n    need = target - x\n    if need in seen: return answer(seen[need], i)\n    seen[x] = i",
 pattern:"Counter for frequencies; dict value to index for complements; set for membership and duplicates; defaultdict(list) to group by a key."},
"Dynamic Programming":{
 why:"These problems have overlapping sub-problems: the same smaller question is asked again and again. Storing each answer once turns an exponential search into a polynomial one.",
 logic:["Define dp[state] in one sentence ('the best answer using the first i items').","Write the recurrence: how dp[state] comes from smaller states.","Fix the base cases, then fill states in an order where dependencies are already known.","Keep only the rows you still need to save space."],
 pseudo:"dp = [base] * (n + 1)\nfor i in 1..n:\n    dp[i] = best over choices of f(dp[i - step], cost)\nreturn dp[n]",
 pattern:"1D (climb, rob, coin change), 2D grid or two sequences (paths, edit distance, LCS (Longest Common Subsequence)), knapsack (take or skip), and memoised recursion (@cache) when the order is awkward."},
"Graph":{
 why:"Anything made of things and connections is a graph: grids, courses with prerequisites, networks, word ladders. This section covers traversing it and answering reachability, shortest-path and ordering questions.",
 logic:["Turn the input into an adjacency list (or treat grid cells as nodes with 4 neighbours).","Keep a visited set so each node is processed once.","DFS (Depth-First Search) goes deep and suits connectivity, cycles and components; BFS (Breadth-First Search) goes level by level and gives the shortest path when edges are unweighted.","Use topological order (indegree queue) when edges mean 'must come before'."],
 pseudo:"visited = {start}; queue = deque([start])\nwhile queue:\n    node = queue.popleft()\n    for nxt in graph[node]:\n        if nxt not in visited:\n            visited.add(nxt); queue.append(nxt)",
 pattern:"BFS (Breadth-First Search) with a deque; recursive or stack-based DFS (Depth-First Search); grid flood fill; Kahn's topological sort; Dijkstra with a heap for weighted edges."},
"Math / Bit Manipulation":{
 why:"Some problems are won by a numeric insight or a bit trick rather than a data structure, and they show up as quick wins or tricky corner cases.",
 logic:["Look for a formula, a modulo or divisibility rule before looping.","Watch overflow and negative numbers; Python integers do not overflow but the problem may ask for 32-bit behaviour.","For bits, think in terms of AND, OR, XOR (exclusive OR), shifts and masks on single bits."],
 pseudo:"while n:\n    digit = n % 10          # or: bit = n & 1\n    n //= 10                # or: n >>= 1\n    update the answer from digit",
 pattern:"x & (x - 1) clears the lowest set bit; x ^ x = 0 cancels pairs; divmod peels digits; fast power by repeated squaring."},
"Design":{
 why:"Design problems ask you to build a small data structure or system (LRU (Least Recently Used) cache, iterator, counter) and choose structures so every operation meets its time limit.",
 logic:["List the operations and the time each must take.","Pick the structures that give those times, often two working together (hash map plus linked list).","Keep them consistent: every update touches all of them."],
 pseudo:"class Thing:\n    def __init__(self): create the structures\n    def op1(self, ...): update structures, return result\n    def op2(self, ...): ...",
 pattern:"Hash map plus doubly linked list (LRU, Least Recently Used, cache); deque for sliding windows; heap for top-k; hash map to index for O(1) random pick."},
"Backtracking":{
 why:"When you must list every valid arrangement (subsets, permutations, placements), you try a choice, go deeper, and undo it. This section is that choose, explore, un-choose loop.",
 logic:["State what a partial answer looks like and when it is complete.","At each step loop over the choices that are still legal.","Add the choice, recurse, then remove it so the next choice starts clean.","Prune early when a partial answer can never be valid."],
 pseudo:"def go(path):\n    if complete(path): out.append(path[:]); return\n    for c in choices(path):\n        path.append(c)\n        go(path)\n        path.pop()",
 pattern:"Subsets (include or skip), permutations (used[] array), combinations (start index), grid word search, N-Queens with column and diagonal sets."},
"Binary Search":{
 why:"If the data is sorted, or the answer can be tested yes or no and flips from no to yes exactly once, you can halve the search space each step and reach O(log n).",
 logic:["Decide what 'left' and 'right' mean (indexes, or the range of possible answers).","Test the middle and discard the half that cannot hold the answer.","Choose loop and boundary rules once (lo <= hi, or lo < hi) and stick to them.","For 'minimum value that works', binary search on the answer with a feasibility check."],
 pseudo:"lo, hi = 0, n - 1\nwhile lo <= hi:\n    mid = (lo + hi) // 2\n    if ok(mid): hi = mid - 1\n    else:       lo = mid + 1\nreturn lo",
 pattern:"Classic search in a sorted array; first or last position (bisect_left / bisect_right); rotated array; binary search on the answer (speed, capacity, days)."},
"Greedy":{
 why:"Sometimes the locally best choice at each step is also globally best. These problems let you skip trying everything, if you can argue why the greedy choice is safe.",
 logic:["Find the ordering or rule that makes the best local choice obvious (sort by end time, take the largest, extend the farthest reach).","Make the choice, never revisit it.","Prove it with a swap argument or test small cases against brute force."],
 pseudo:"sort items by the key that makes the choice obvious\nfor item in items:\n    if it fits with what we already chose:\n        choose it\nreturn what we chose",
 pattern:"Sort then sweep; track the farthest reachable index (jump game); two-ended pick; heap when the best choice changes as you go."},
"Binary Tree":{
 why:"Trees are recursive by nature: a tree's answer is built from its left and right sub-tree answers. This section covers walking trees depth-first and level by level.",
 logic:["Write the answer for None (the base case) and for one node in terms of its children.","DFS (Depth-First Search, using recursion) for depth, paths, validity and sub-tree facts; BFS (Breadth-First Search, using a queue) for levels and shortest depth.","Return a value up, or update a shared variable while returning something else."],
 pseudo:"def dfs(node):\n    if not node: return base\n    left = dfs(node.left)\n    right = dfs(node.right)\n    return combine(node.val, left, right)",
 pattern:"Post-order for heights and diameters; pre-order for building and path sums; BFS (Breadth-First Search) with a deque and a level-size loop; lowest common ancestor by returning the found node up."},
"Stack / Monotonic Stack":{
 why:"A stack remembers the most recent unfinished thing (open bracket, last number). A monotonic stack keeps its items in order so 'next greater' style questions are answered in one pass.",
 logic:["Push what is waiting for an answer.","When the new item settles something, pop it and record the answer.","For a monotonic stack, pop while the top breaks the order (smaller or larger), then push."],
 pseudo:"stack = []\nfor i, x in enumerate(items):\n    while stack and items[stack[-1]] < x:\n        j = stack.pop()\n        answer[j] = i - j\n    stack.append(i)",
 pattern:"Matching brackets; evaluate expressions; next greater element; daily temperatures; largest rectangle in a histogram; a stack instead of recursion."},
"Two Pointers":{
 why:"Two indexes moving through the data replace a nested loop with a single pass, usually on sorted data or when comparing both ends.",
 logic:["Choose where the pointers start (both ends, or one behind the other).","Use a rule that says which pointer moves and why that never skips the answer.","Stop when they meet or cross."],
 pseudo:"l, r = 0, n - 1\nwhile l < r:\n    s = a[l] + a[r]\n    if s == target: return l, r\n    if s < target: l += 1\n    else: r -= 1",
 pattern:"Opposite ends (pair sum, container with most water); fast and slow (cycle, middle); read and write pointer (remove duplicates, move zeroes)."},
"Sliding Window":{
 why:"For problems about a contiguous run (longest, shortest, at most k), one window that grows and shrinks avoids rechecking every sub-array.",
 logic:["Grow the right edge one item at a time and add it to the window state.","While the window breaks the rule, shrink from the left and remove items from the state.","Record the best window after each step."],
 pseudo:"l = 0\nfor r, x in enumerate(items):\n    add x to the window state\n    while window is invalid:\n        remove items[l] from the state; l += 1\n    best = max(best, r - l + 1)",
 pattern:"Longest substring without repeats (set or dict); at most k distinct (Counter); fixed-size window (running sum); minimum window with a need-count."},
"Heap":{
 why:"A heap gives the smallest (or largest) item in O(log n) while items keep arriving, which is what 'top k', 'k-th largest' and 'merge sorted streams' need.",
 logic:["Python's heapq is a min-heap; negate values for a max-heap.","For top k largest, keep a min-heap of size k and pop the smallest when it grows.","For merging, push the head of each list and always pop the smallest."],
 pseudo:"heap = []\nfor x in items:\n    heappush(heap, x)\n    if len(heap) > k: heappop(heap)\nreturn heap[0]       # k-th largest",
 pattern:"Top-k with a size-k heap; two heaps for a running median; heap of (cost, node) for Dijkstra; merge k sorted lists."},
"Matrix":{
 why:"Grids are arrays of arrays with their own tricks: neighbours, rotation, spirals and in-place updates. Many are really graph or DP (Dynamic Programming) problems on a grid.",
 logic:["Write the four neighbour offsets once and loop over them.","Check bounds before every access.","For in-place edits, mark cells with a temporary value and fix them up in a second pass."],
 pseudo:"for r in range(R):\n    for c in range(C):\n        for dr, dc in ((1,0),(-1,0),(0,1),(0,-1)):\n            nr, nc = r + dr, c + dc\n            if 0 <= nr < R and 0 <= nc < C: use grid[nr][nc]",
 pattern:"Transpose then reverse to rotate; layer-by-layer spiral; BFS (Breadth-First Search) or DFS (Depth-First Search) flood fill; row and column flags to zero a matrix."},
"Prefix Sum":{
 why:"If you must sum many ranges or count ranges with a target sum, precomputing running totals turns every range query into one subtraction.",
 logic:["prefix[i] is the sum of the first i items.","The sum of items i..j is prefix[j + 1] - prefix[i].","For 'count sub-arrays with sum k', store how many times each prefix has appeared in a dict."],
 pseudo:"prefix = [0]\nfor x in items: prefix.append(prefix[-1] + x)\nrange_sum(i, j) = prefix[j + 1] - prefix[i]",
 pattern:"Range sum queries; sub-array sum equals k (prefix plus hash map); product except self (prefix and suffix products); 2D prefix sums."},
"Intervals":{
 why:"Meetings, ranges and schedules overlap or touch. Sorting by start (or end) turns the overlap question into a simple left-to-right sweep.",
 logic:["Sort by start time.","Compare each interval with the last one you kept: overlap if start <= last end.","Merge by extending the end, or count/remove for scheduling."],
 pseudo:"intervals.sort()\nmerged = [intervals[0]]\nfor s, e in intervals[1:]:\n    if s <= merged[-1][1]: merged[-1][1] = max(merged[-1][1], e)\n    else: merged.append([s, e])",
 pattern:"Merge intervals; insert interval; minimum arrows or non-overlapping (sort by end, greedy); meeting rooms with a heap of end times."},
"Union Find / Segment Tree":{
 why:"These structures answer many questions on a changing collection quickly: Union-Find tracks which items are connected, and a segment tree answers range queries with updates.",
 logic:["Union-Find: find(x) follows parents to the root (with path compression); union(a, b) joins two roots.","Count components by the number of distinct roots, or by decrementing on each successful union.","Segment tree: each node stores the answer for a range, so a query touches O(log n) nodes."],
 pseudo:"parent = list(range(n))\ndef find(x):\n    while parent[x] != x:\n        parent[x] = parent[parent[x]]; x = parent[x]\n    return x\ndef union(a, b): parent[find(a)] = find(b)",
 pattern:"Number of provinces / islands, redundant connection, accounts merge, Kruskal's minimum spanning tree; segment tree or Fenwick for range sums."},
"Linked List":{
 why:"Linked lists have no indexing, so everything is done by rewiring pointers. They test whether you can move references carefully without losing the rest of the list.",
 logic:["Use a dummy node so the head is never a special case.","Save next before you change a pointer.","Fast and slow pointers find the middle and detect cycles."],
 pseudo:"prev, cur = None, head\nwhile cur:\n    nxt = cur.next\n    cur.next = prev\n    prev, cur = cur, nxt\nreturn prev",
 pattern:"Reverse in place; dummy head for merges and removals; fast and slow pointers; split, reverse and merge for reorder."},
"Sorting":{
 why:"Sorting is often the first step that makes the rest easy: equal items become neighbours, ranges become ordered, and greedy or two-pointer rules become valid.",
 logic:["Pick the key that puts related items together.","Sorting costs O(n log n); if that is too slow, consider counting or bucket sort.","Python's sort is stable, so you can sort by several keys in turn."],
 pseudo:"items.sort(key=lambda x: (x.primary, -x.secondary))\nfor item in items:\n    process in sorted order",
 pattern:"sorted with a key; custom comparison via key tuples; bucket or counting sort for small ranges; quickselect for the k-th element."},
"Trie":{
 why:"A trie stores words by their shared prefixes, so prefix search, autocomplete and 'does any word start with this?' cost the length of the word, not the size of the dictionary.",
 logic:["Each node holds a map from character to child, and a flag for 'a word ends here'.","Insert and search walk one character at a time.","Walk the trie during a grid search to prune dead paths early."],
 pseudo:"node = root\nfor ch in word:\n    node = node.children.setdefault(ch, TrieNode())\nnode.end = True",
 pattern:"Insert, search, starts-with; word search II (trie plus backtracking); replace words by shortest root."},
"Binary Search Tree":{
 why:"A BST (Binary Search Tree) keeps left < node < right, so searching, inserting and validating can follow one branch instead of the whole tree, and an in-order walk comes out sorted.",
 logic:["Compare with the node and go left or right.","In-order traversal gives sorted order, which answers k-th smallest and validity questions.","Carry lower and upper bounds down when validating."],
 pseudo:"def search(node, v):\n    while node and node.val != v:\n        node = node.left if v < node.val else node.right\n    return node",
 pattern:"Validate with bounds; in-order for k-th smallest; lowest common ancestor by value; build from a sorted array by picking the middle."},
"Queue":{
 why:"A queue serves things in the order they arrived (first in, first out), which models waiting lines and level-by-level processing.",
 logic:["Use collections.deque so removing from the front is O(1).","Push new work at the back, take work from the front.","Often paired with a size or time window."],
 pseudo:"q = deque([start])\nwhile q:\n    x = q.popleft()\n    handle x\n    q.append(next_item)",
 pattern:"BFS; sliding time window (recent calls); stack built from two queues and the reverse."},
"Divide & Conquer":{
 why:"Some problems split cleanly into independent halves that are solved the same way and then combined, which can cut the cost from O(n^2) to O(n log n).",
 logic:["Split the input in the middle.","Solve each half recursively.","Combine the two answers; the combine step decides the cost."],
 pseudo:"def solve(lo, hi):\n    if lo == hi: return base\n    mid = (lo + hi) // 2\n    return combine(solve(lo, mid), solve(mid + 1, hi))",
 pattern:"Merge sort; build a tree from a sorted array; quickselect; maximum sub-array by halves."},
"Kadane's Algorithm":{
 why:"Kadane's finds the best contiguous sub-array sum in one pass by deciding at each item whether to extend the current run or start fresh.",
 logic:["Track the best sum ending here and the best sum seen anywhere.","If the running sum drops below zero, restart at the next item.","Handle all-negative input by starting from the first item, not zero."],
 pseudo:"cur = best = items[0]\nfor x in items[1:]:\n    cur = max(x, cur + x)\n    best = max(best, cur)\nreturn best",
 pattern:"Maximum sub-array; maximum circular sub-array; best time to buy and sell stock is the same idea on differences."}
};
