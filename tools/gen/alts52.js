module.exports=({alt})=>{
const C=s=>s.replace(/^\n/,"").replace(/\n$/,"").split("\n");
// ---- Cisco
alt(3508,{name:"Plain list with scans",tag:"Brute force",time:"O(n) per call",space:"O(memoryLimit)",explain:"Keep packets in a list; check duplicates, evict and count by scanning.",code:C(`
class Router:
    def __init__(self, memoryLimit):
        self.cap = memoryLimit
        self.pk = []

    def addPacket(self, source, destination, timestamp):
        p = [source, destination, timestamp]
        if p in self.pk:
            return False
        if len(self.pk) == self.cap:
            self.pk.pop(0)
        self.pk.append(p)
        return True

    def forwardPacket(self):
        return self.pk.pop(0) if self.pk else []

    def getCount(self, destination, startTime, endTime):
        return sum(1 for s, d, t in self.pk if d == destination and startTime <= t <= endTime)
`)});
alt(2081,{name:"Test every integer",tag:"Brute force",time:"slow",space:"O(1)",explain:"Count up 1, 2, 3 … and keep the numbers that are palindromes in base 10 and in base k (too slow for large n).",code:C(`
class Solution:
    def kMirror(self, k, n):
        def pal(x, base):
            d = []
            while x:
                d.append(x % base)
                x //= base
            return d == d[::-1]
        total = found = 0
        x = 0
        while found < n:
            x += 1
            if pal(x, 10) and pal(x, k):
                total += x
                found += 1
        return total
`)});
alt(2067,{name:"Expand from every start",tag:"Brute force",time:"O(n·26·count)",space:"O(1)",explain:"For each start extend the substring while no letter exceeds count and test whether all present letters have exactly count.",code:C(`
class Solution:
    def equalCountSubstrings(self, s, count):
        n = len(s)
        res = 0
        for i in range(n):
            freq = Counter()
            for j in range(i, n):
                freq[s[j]] += 1
                if freq[s[j]] > count:
                    break
                if all(v == count for v in freq.values()):
                    res += 1
        return res
`)});
alt(3047,{name:"All pairs with combinations",tag:"Alternative",time:"O(n²)",space:"O(1)",explain:"Same test over itertools.combinations.",code:C(`
class Solution:
    def largestSquareArea(self, bottomLeft, topRight):
        side = 0
        for i, j in combinations(range(len(bottomLeft)), 2):
            w = min(topRight[i][0], topRight[j][0]) - max(bottomLeft[i][0], bottomLeft[j][0])
            h = min(topRight[i][1], topRight[j][1]) - max(bottomLeft[i][1], bottomLeft[j][1])
            if w > 0 and h > 0:
                side = max(side, min(w, h))
        return side * side
`)});
alt(1784,{name:"Count the segments",tag:"Alternative",time:"O(n)",space:"O(1)",explain:"Use groupby and count groups of ones.",code:C(`
class Solution:
    def checkOnesSegment(self, s):
        return sum(1 for ch, _ in groupby(s) if ch == '1') <= 1
`)});
alt(3648,{name:"Count by rows and columns",tag:"Alternative",time:"O(n + m)",space:"O(1)",explain:"Step through the rows and columns in jumps of 2k + 1 and count the stops.",code:C(`
class Solution:
    def minSensors(self, n, m, k):
        step = 2 * k + 1
        return len(range(0, n, step)) * len(range(0, m, step))
`)});
alt(2016,{name:"Compare all pairs",tag:"Brute force",time:"O(n²)",space:"O(1)",explain:"Check every pair i < j.",code:C(`
class Solution:
    def maximumDifference(self, nums):
        best = -1
        for i in range(len(nums)):
            for j in range(i + 1, len(nums)):
                if nums[j] > nums[i]:
                    best = max(best, nums[j] - nums[i])
        return best
`)});
alt(486,{name:"Recursion with memo",tag:"Alternative",time:"O(n²)",space:"O(n²)",explain:"best(i, j) = score difference the player to move can force.",code:C(`
class Solution:
    def predictTheWinner(self, nums):
        @lru_cache(None)
        def best(i, j):
            if i == j:
                return nums[i]
            return max(nums[i] - best(i + 1, j), nums[j] - best(i, j - 1))
        return best(0, len(nums) - 1) >= 0
`)});
alt(646,{name:"Longest chain DP",tag:"Alternative",time:"O(n²)",space:"O(n)",explain:"Sort by start; dp[i] = longest chain ending at pair i.",code:C(`
class Solution:
    def findLongestChain(self, pairs):
        pairs = sorted(pairs)
        dp = [1] * len(pairs)
        for i in range(len(pairs)):
            for j in range(i):
                if pairs[j][1] < pairs[i][0]:
                    dp[i] = max(dp[i], dp[j] + 1)
        return max(dp)
`)});
};
