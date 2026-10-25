const {lite}=require("./lib");
const C=s=>s.replace(/^\n/,"").replace(/\n$/,"").split("\n");
const ARR="Array / String",HM="Hash Map / Set",STK="Stack / Monotonic Stack",BT="Binary Tree",GR="Graph",HP="Heap",DP="Dynamic Programming",GD="Greedy",MB="Math / Bit Manipulation",BS="Binary Search",SRT="Sorting",SW="Sliding Window",MX="Matrix",UF="Union Find / Segment Tree",TP="Two Pointers",IV="Intervals",BTK="Backtracking",DS="Design",LL="Linked List",TR="Trie",PS="Prefix Sum";
// ---- SAP
lite({id:1349,slug:"maximum-students-taking-exam",title:"Maximum Students Taking Exam",level:"Hard",topic:DP,name:"Row-by-row bitmask DP",
w:"A 3×6 room with broken seats: placing students so none sees a neighbour's paper fits at most 4.",k:"A student sees left, right, upper-left and upper-right. Go row by row; the state is the bitmask of occupied seats in the previous row. A mask for this row is valid if it only uses working seats, has no two neighbours, and shares no diagonal with the previous mask. dp[mask] = best total after this row.",
i:"seats = [[\"#\",\".\",\"#\",\"#\",\".\",\"#\"],[\".\",\"#\",\"#\",\"#\",\"#\",\".\"],[\"#\",\".\",\"#\",\"#\",\".\",\"#\"]]",o:"4",time:"O(m·4ⁿ)",space:"O(2ⁿ)",
code:C(`
class Solution:
    def maxStudents(self, seats):
        n = len(seats[0])
        dp = {0: 0}
        for row in seats:
            good = sum(1 << j for j in range(n) if row[j] == '.')
            new = {}
            for mask in range(1 << n):
                if mask & ~good or mask & (mask >> 1):
                    continue
                cnt = bin(mask).count('1')
                for prev, val in dp.items():
                    if mask & (prev << 1) == 0 and mask & (prev >> 1) == 0:
                        if new.get(mask, -1) < val + cnt:
                            new[mask] = val + cnt
            dp = new
        return max(dp.values())
`)});
lite({id:2552,slug:"count-increasing-quadruplets",title:"Count Increasing Quadruplets",level:"Hard",topic:PS,name:"For each (j, k) multiply smaller-left by larger-right",
w:"[1,3,2,4,5]: (1,3,2,4) and (1,3,2,5) fit nums[i] < nums[k] < nums[j] < nums[l] → 2.",k:"We need i<j<k<l with nums[i] < nums[k] < nums[j] < nums[l]. For each pair j<k with nums[j] > nums[k], the count is (how many i<j are smaller than nums[k]) × (how many l>k are larger than nums[j]). Keep less[k] = number of earlier elements below nums[k] updated as j moves right, and count larger elements to the right of k while scanning k from the end.",
i:"nums = [1,3,2,4,5]",o:"2",time:"O(n²)",space:"O(n)",
code:C(`
class Solution:
    def countQuadruplets(self, nums):
        n = len(nums)
        less = [0] * n
        res = 0
        for j in range(n):
            great = 0
            for k in range(n - 1, j, -1):
                if nums[k] > nums[j]:
                    great += 1
                elif nums[k] < nums[j]:
                    res += less[k] * great
            for k in range(j + 1, n):
                if nums[j] < nums[k]:
                    less[k] += 1
        return res
`)});
