const {lite}=require("./lib");
const C=s=>s.replace(/^\n/,"").replace(/\n$/,"").split("\n");
const ARR="Array / String",HM="Hash Map / Set",STK="Stack / Monotonic Stack",BT="Binary Tree",GR="Graph",HP="Heap",DP="Dynamic Programming",GD="Greedy",MB="Math / Bit Manipulation",BS="Binary Search",SRT="Sorting",SW="Sliding Window",MX="Matrix",UF="Union Find / Segment Tree",TP="Two Pointers",IV="Intervals",BTK="Backtracking",DS="Design",LL="Linked List",TR="Trie";
// ---- Meta (7/8)
lite({id:1352,slug:"product-of-the-last-k-numbers",title:"Product of the Last K Numbers",level:"Medium",topic:DS,name:"Prefix products that reset at 0",
w:"After 3, 0, 2, 5, 4 the last two numbers multiply to 20, the last three to 40, and the last four include the 0 → 0.",k:"Keep prefix products. A product of the last k numbers is prefix[−1] / prefix[−1−k]. A 0 destroys everything before it, so on 0 restart the list; if k reaches back past the restart the answer is 0.",
i:"add(3), add(0), add(2), add(5), add(4); getProduct(2), getProduct(3), getProduct(4)",o:"20, 40, 0",time:"O(1) per call",space:"O(n)",
code:C(`
class ProductOfNumbers:
    def __init__(self):
        self.pre = [1]
    def add(self, num):
        if num == 0:
            self.pre = [1]
        else:
            self.pre.append(self.pre[-1] * num)
    def getProduct(self, k):
        if k >= len(self.pre):
            return 0
        return self.pre[-1] // self.pre[-1 - k]
`)});
lite({id:1460,slug:"make-two-arrays-equal-by-reversing-subarrays",title:"Make Two Arrays Equal by Reversing Subarrays",level:"Easy",topic:HM,name:"Same numbers, any order",
w:"Reversals can sort any array, so [1,2,3,4] and [2,4,1,3] can be made equal: they hold the same numbers.",k:"Reversing sub-arrays can reorder the array in any way (adjacent swaps are reversals of length 2). So the two arrays can be made equal exactly when they contain the same numbers.",
i:"target = [1,2,3,4], arr = [2,4,1,3]",o:"true",time:"O(n log n)",space:"O(n)",
code:C(`
class Solution:
    def canBeEqual(self, target, arr):
        return sorted(target) == sorted(arr)
`)});
lite({id:1453,slug:"maximum-number-of-darts-inside-of-a-circular-dartboard",title:"Maximum Number of Darts Inside of a Circular Dartboard",level:"Hard",topic:MB,name:"Circles through two points",
w:"Four darts lie on a circle of radius 2 around the origin, so one board of radius 2 covers all of them → 4.",k:"An optimal board can be moved until two darts lie on its edge. So for every pair of darts at most 2r apart compute the two circle centres of radius r through both and count the darts inside each circle (with a tiny tolerance). The best count is the answer (at least 1).",
i:"darts = [[-2,0],[2,0],[0,2],[0,-2]], r = 2",o:"4",time:"O(n³)",space:"O(1)",
code:C(`
class Solution:
    def numPoints(self, darts, r):
        n = len(darts)
        best = 1
        for i in range(n):
            for j in range(i + 1, n):
                x1, y1 = darts[i]
                x2, y2 = darts[j]
                dx, dy = x2 - x1, y2 - y1
                d2 = dx * dx + dy * dy
                if d2 > 4 * r * r:
                    continue
                h = sqrt(r * r - d2 / 4)
                d = sqrt(d2)
                mx, my = (x1 + x2) / 2, (y1 + y2) / 2
                for sgn in (1, -1):
                    cx = mx + sgn * h * (-dy) / d
                    cy = my + sgn * h * dx / d
                    cnt = sum((x - cx) ** 2 + (y - cy) ** 2 <= r * r + 1e-7 for x, y in darts)
                    best = max(best, cnt)
        return best
`)});
lite({id:1781,slug:"sum-of-beauty-of-all-substrings",title:"Sum of Beauty of All Substrings",level:"Medium",topic:ARR,name:"Extend each start, track letter counts",
w:"'aabcb': the substrings with beauty > 0 are aab, aabc, aabcb, abcb, bcb (1 each) → 5.",k:"The beauty of a substring is (highest letter count) − (lowest non-zero letter count). Fix the start, extend the end one letter at a time with a 26-slot count array, and add the beauty each time.",
i:'s = "aabcb"',o:"5",time:"O(26·n²)",space:"O(26)",
code:C(`
class Solution:
    def beautySum(self, s):
        n = len(s)
        res = 0
        for i in range(n):
            cnt = [0] * 26
            for j in range(i, n):
                cnt[ord(s[j]) - 97] += 1
                nz = [c for c in cnt if c]
                res += max(nz) - min(nz)
        return res
`)});
lite({id:1826,slug:"faulty-sensor",title:"Faulty Sensor",level:"Easy",topic:TP,name:"First mismatch, then check the shifted tails",
w:"[2,3,4,5] vs [2,1,3,4]: the first difference is at index 1. Sensor 1's tail [3,4] equals sensor 2's shifted tail [3,4], so sensor 1 dropped a value → 1.",k:"A defective sensor drops one reading and shifts all later readings one step left. Find the first index i where they differ, then check whether sensor 1's readings from i equal sensor 2's readings from i+1 (sensor 1 defective) or the other way round. If both or neither fit, answer −1.",
i:"sensor1 = [2,3,4,5], sensor2 = [2,1,3,4]",o:"1",time:"O(n)",space:"O(n)",
code:C(`
class Solution:
    def badSensor(self, sensor1, sensor2):
        n = len(sensor1)
        i = 0
        while i < n and sensor1[i] == sensor2[i]:
            i += 1
        bad1 = sensor1[i:n - 1] == sensor2[i + 1:]
        bad2 = sensor2[i:n - 1] == sensor1[i + 1:]
        if bad1 and bad2:
            return -1
        if bad1:
            return 1
        if bad2:
            return 2
        return -1
`)});
lite({id:1947,slug:"maximum-compatibility-score-sum",title:"Maximum Compatibility Score Sum",level:"Medium",topic:BTK,name:"Try every student–mentor pairing",
w:"The best pairing of 3 students with 3 mentors adds up to 3 + 2 + 3 = 8 matching answers.",k:"There are at most 8 students, so try every way to assign mentors (permutations). Precompute how many answers match for every student/mentor pair and take the best total.",
i:"students = [[1,1,0],[1,0,1],[0,0,1]], mentors = [[1,0,0],[0,0,1],[1,1,0]]",o:"8",time:"O(m! · m)",space:"O(m²)",
code:C(`
class Solution:
    def maxCompatibilitySum(self, students, mentors):
        m = len(students)
        score = [[sum(a == b for a, b in zip(s, t)) for t in mentors] for s in students]
        return max(sum(score[i][p[i]] for i in range(m)) for p in permutations(range(m)))
`)});
lite({id:1973,slug:"count-nodes-equal-to-sum-of-descendants",title:"Count Nodes Equal to Sum of Descendants",level:"Medium",topic:BT,name:"Post-order subtree sums",
w:"In [10,3,4,2,1] the node 10 equals 3 + 4 + 2 + 1 and the node 3 equals 2 + 1 → 2 nodes.",k:"Compute every subtree sum bottom-up (post-order). A node counts when its value equals the sum of its left and right subtree sums.",
i:"root = [10,3,4,2,1]",o:"2",time:"O(n)",space:"O(h)",
code:C(`
class Solution:
    def equalToDescendants(self, root):
        self.cnt = 0
        def dfs(n):
            if not n:
                return 0
            l, r = dfs(n.left), dfs(n.right)
            if n.val == l + r:
                self.cnt += 1
            return n.val + l + r
        dfs(root)
        return self.cnt
`)});
lite({id:2014,slug:"longest-subsequence-repeated-k-times",title:"Longest Subsequence Repeated k Times",level:"Hard",topic:BTK,name:"BFS over candidate strings",
w:"'letsleetcode', k=2: the subsequence 'let' repeated twice ('letlet') is a subsequence of the string, and it is the longest/largest such.",k:"Only letters that occur at least k times can be used, and the answer has at most n / k letters. Grow candidates letter by letter (BFS), keep those whose k-fold repetition is still a subsequence of s, and remember the longest (largest alphabetically on ties).",
i:'s = "letsleetcode", k = 2',o:'"let"',time:"O(n · 26^(n/k))",space:"O(26^(n/k))",
code:C(`
class Solution:
    def longestSubsequenceRepeatedK(self, s, k):
        cnt = Counter(s)
        chars = sorted((c for c in cnt if cnt[c] >= k), reverse=True)
        def is_sub(t):
            it = iter(s)
            return all(any(c == x for x in it) for c in t * k)
        best = ""
        q = deque([""])
        while q:
            cur = q.popleft()
            for c in chars:
                nxt = cur + c
                if is_sub(nxt):
                    q.append(nxt)
                    if len(nxt) > len(best) or (len(nxt) == len(best) and nxt > best):
                        best = nxt
        return best
`)});
lite({id:2289,slug:"steps-to-make-array-non-decreasing",title:"Steps to Make Array Non-decreasing",level:"Medium",topic:STK,name:"Monotonic stack with step counts",
w:"[5,3,4,4,7,3,6,11,8,5,11]: in each step every number smaller than its left neighbour is removed; after 3 steps the array is non-decreasing.",k:"A number is removed after (1 + the longest time among the numbers it swallows) steps. Keep a decreasing stack of (value, steps). For a new number pop smaller-or-equal entries and take the maximum of their steps; if a bigger number remains on the stack the new one dies after max + 1 steps, otherwise it never dies (0).",
i:"nums = [5,3,4,4,7,3,6,11,8,5,11]",o:"3",time:"O(n)",space:"O(n)",
code:C(`
class Solution:
    def totalSteps(self, nums):
        st = []
        res = 0
        for x in nums:
            steps = 0
            while st and st[-1][0] <= x:
                steps = max(steps, st.pop()[1])
            steps = steps + 1 if st else 0
            st.append((x, steps))
            res = max(res, steps)
        return res
`)});
lite({id:2452,slug:"words-within-two-edits-of-dictionary",title:"Words Within Two Edits of Dictionary",level:"Medium",topic:ARR,name:"Count differing letters",
w:"'word' differs from 'wood' in one letter, 'note' from 'joke' in two, 'wood' equals 'wood' → those three are kept; 'ants' is too far from everything.",k:"Words have the same length, so an edit is a changed letter. For every query check whether some dictionary word differs in at most 2 positions.",
i:'queries = ["word","note","ants","wood"], dictionary = ["wood","joke","moat"]',o:'["word","note","wood"]',time:"O(q · d · L)",space:"O(1)",
code:C(`
class Solution:
    def twoEditWords(self, queries, dictionary):
        return [q for q in queries
                if any(sum(a != b for a, b in zip(q, w)) <= 2 for w in dictionary)]
`)});
lite({id:2596,slug:"check-knight-tour-configuration",title:"Check Knight Tour Configuration",level:"Medium",topic:MX,name:"Check every consecutive pair is a knight move",
w:"The cell numbers 0, 1, 2 … must start in the top-left corner and every next cell must be a knight's jump away.",k:"Record the position of every number. The tour starts at 0 in the top-left corner; for k = 1 … n²−1 the cells k−1 and k must differ by (1,2) or (2,1) rows/columns.",
i:"grid = 5 × 5 tour starting with 0 at the top-left",o:"true",time:"O(n²)",space:"O(n²)",
code:C(`
class Solution:
    def checkValidGrid(self, grid):
        n = len(grid)
        if grid[0][0] != 0:
            return False
        pos = {}
        for r in range(n):
            for c in range(n):
                pos[grid[r][c]] = (r, c)
        for k in range(1, n * n):
            (r1, c1), (r2, c2) = pos[k - 1], pos[k]
            if sorted((abs(r1 - r2), abs(c1 - c2))) != [1, 2]:
                return False
        return True
`)});
lite({id:1832,slug:"check-if-the-sentence-is-pangram",title:"Check if the Sentence Is Pangram",level:"Easy",topic:HM,name:"26 different letters",
w:"'thequickbrownfoxjumpsoverthelazydog' uses every letter a–z.",k:"The sentence has only lower-case letters, so it is a pangram exactly when it has 26 different letters.",
i:'sentence = "thequickbrownfoxjumpsoverthelazydog"',o:"true",time:"O(n)",space:"O(1)",
code:C(`
class Solution:
    def checkIfPangram(self, sentence):
        return len(set(sentence)) == 26
`)});
lite({id:1545,slug:"find-kth-bit-in-nth-binary-string",title:"Find Kth Bit in Nth Binary String",level:"Medium",topic:MB,name:"Recursive mirror",
w:"S1 = 0, S2 = 011, S3 = 0111001, S4 = 011100110110001. The 11th bit of S4 is 1.",k:"S_n = S_(n−1) + '1' + reverse(invert(S_(n−1))). The middle bit (position 2^(n−1)) is 1. A bit in the left half is the same bit of S_(n−1). A bit in the right half is the inverted bit at the mirrored position 2·mid − k of S_(n−1).",
i:"n = 4, k = 11",o:'"1"',time:"O(n)",space:"O(n)",
code:C(`
class Solution:
    def findKthBit(self, n, k):
        if n == 1:
            return "0"
        mid = 1 << (n - 1)
        if k == mid:
            return "1"
        if k < mid:
            return self.findKthBit(n - 1, k)
        return "1" if self.findKthBit(n - 1, 2 * mid - k) == "0" else "0"
`)});
lite({id:856,slug:"score-of-parentheses",title:"Score of Parentheses",level:"Medium",topic:STK,name:"Stack of scores",
w:"'(()(()))': () = 1, (()) = 2, (A) = 2·A. The inner part scores 1 + 2 = 3, doubled = 6.",k:"Keep a stack of partial scores, starting with 0. On '(' push 0. On ')' pop v and add max(2·v, 1) to the new top: an empty pair '()' (v = 0) is worth 1, a wrapped group is doubled.",
i:'s = "(()(()))"',o:"6",time:"O(n)",space:"O(n)",
code:C(`
class Solution:
    def scoreOfParentheses(self, s):
        st = [0]
        for ch in s:
            if ch == "(":
                st.append(0)
            else:
                v = st.pop()
                st[-1] += max(2 * v, 1)
        return st[0]
`)});
lite({id:510,slug:"inorder-successor-in-bst-ii",title:"Inorder Successor in BST II",level:"Medium",topic:BT,name:"Use the parent pointers",
w:"In the tree 2 with children 1 and 3, the successor of the node 1 is its parent 2.",k:"If the node has a right child, the successor is the leftmost node of that subtree. Otherwise climb up while we are a right child; the first ancestor reached from a left child is the successor (none if we reach the root).",
i:"node = 1 in the tree [2,1,3] (nodes know their parent)",o:"2",time:"O(h)",space:"O(1)",
code:C(`
class Solution:
    def inorderSuccessor(self, node):
        if node.right:
            node = node.right
            while node.left:
                node = node.left
            return node
        while node.parent and node is node.parent.right:
            node = node.parent
        return node.parent
`)});
lite({id:1319,slug:"number-of-operations-to-make-network-connected",title:"Number of Operations to Make Network Connected",level:"Medium",topic:UF,name:"Count components with Union Find",
w:"The computers 0, 1, 2 are already wired (with one spare cable), computer 3 is alone: move the spare cable → 1 operation.",k:"To connect n computers you need at least n − 1 cables, otherwise the answer is −1. With enough cables each extra component needs exactly one move, so the answer is (number of connected components − 1). Count the components with Union Find.",
i:"n = 4, connections = [[0,1],[0,2],[1,2]]",o:"1",time:"O(n + E)",space:"O(n)",
code:C(`
class Solution:
    def makeConnected(self, n, connections):
        if len(connections) < n - 1:
            return -1
        parent = list(range(n))
        def find(x):
            while parent[x] != x:
                parent[x] = parent[parent[x]]
                x = parent[x]
            return x
        comps = n
        for a, b in connections:
            ra, rb = find(a), find(b)
            if ra != rb:
                parent[ra] = rb
                comps -= 1
        return comps - 1
`)});
lite({id:867,slug:"transpose-matrix",title:"Transpose Matrix",level:"Easy",topic:MX,name:"Rows become columns",
w:"The first column 1,4,7 becomes the first row.",k:"zip(*matrix) pairs up the i-th entries of all rows — exactly the columns.",
i:"matrix = [[1,2,3],[4,5,6],[7,8,9]]",o:"[[1,4,7],[2,5,8],[3,6,9]]",time:"O(m·n)",space:"O(m·n)",
code:C(`
class Solution:
    def transpose(self, matrix):
        return [list(col) for col in zip(*matrix)]
`)});
lite({id:132,slug:"palindrome-partitioning-ii",title:"Palindrome Partitioning II",level:"Hard",topic:DP,name:"Expand around centres",
w:"'aab' → 'aa' | 'b': one cut.",k:"cut[i] is the minimum number of cuts for the first i letters (initially i − 1). Every palindrome found by expanding around a centre s[l..r] lets the prefix ending at r be cut at l: cut[r+1] = min(cut[r+1], cut[l] + 1).",
i:'s = "aab"',o:"1",time:"O(n²)",space:"O(n)",
code:C(`
class Solution:
    def minCut(self, s):
        n = len(s)
        cut = list(range(-1, n))
        for c in range(n):
            for l, r in ((c, c), (c, c + 1)):
                while l >= 0 and r < n and s[l] == s[r]:
                    cut[r + 1] = min(cut[r + 1], cut[l] + 1)
                    l -= 1
                    r += 1
        return cut[n]
`)});
lite({id:1470,slug:"shuffle-the-array",title:"Shuffle the Array",level:"Easy",topic:ARR,name:"Interleave the two halves",
w:"[2,5,1,3,4,7] with n = 3: take 2, 3 then 5, 4 then 1, 7 → [2,3,5,4,1,7].",k:"The array is [x1…xn, y1…yn]; the answer is x1, y1, x2, y2 … so alternate the first and the second half.",
i:"nums = [2,5,1,3,4,7], n = 3",o:"[2,3,5,4,1,7]",time:"O(n)",space:"O(n)",
code:C(`
class Solution:
    def shuffle(self, nums, n):
        res = []
        for i in range(n):
            res += [nums[i], nums[i + n]]
        return res
`)});
lite({id:2094,slug:"finding-3-digit-even-numbers",title:"Finding 3-Digit Even Numbers",level:"Easy",topic:ARR,name:"Check every even 3-digit number",
w:"With the digits 2, 1, 3, 0 you can make 102, 120, 130, 132, 210, 230, 302, 310, 312, 320.",k:"Count the available digits. Test every even number from 100 to 998: count its digits and check that the pool has enough of each.",
i:"digits = [2,1,3,0]",o:"[102,120,130,132,210,230,302,310,312,320]",time:"O(450)",space:"O(1)",
code:C(`
class Solution:
    def findEvenNumbers(self, digits):
        cnt = Counter(digits)
        res = []
        for x in range(100, 1000, 2):
            c = Counter(map(int, str(x)))
            if all(cnt[d] >= k for d, k in c.items()):
                res.append(x)
        return res
`)});
lite({id:3304,slug:"find-the-k-th-character-in-string-game-i",title:"Find the K-th Character in String Game I",level:"Easy",topic:MB,name:"Build the word until it is long enough",
w:"Start 'a'; every round append the word with each letter moved one step forward: a → ab → abbc → abbcbccd. The 5th letter is 'b'.",k:"Do what the game says: repeat 'append the next-letter version of the whole word' until the word has at least k letters, then read position k.",
i:"k = 5",o:'"b"',time:"O(k)",space:"O(k)",
code:C(`
class Solution:
    def kthCharacter(self, k):
        word = "a"
        while len(word) < k:
            word += "".join(chr((ord(c) - 97 + 1) % 26 + 97) for c in word)
        return word[k - 1]
`)});
