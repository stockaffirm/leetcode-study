module.exports=({alt})=>{
const C=s=>s.replace(/^\n/,"").replace(/\n$/,"").split("\n");
// ---- SAP
alt(1349,{name:"Top-down memo over rows",tag:"Alternative",time:"O(m·4ⁿ)",space:"O(m·2ⁿ)",explain:"best(row, previous mask) tries every valid mask for this row.",code:C(`
class Solution:
    def maxStudents(self, seats):
        m, n = len(seats), len(seats[0])
        good = [sum(1 << j for j in range(n) if seats[i][j] == '.') for i in range(m)]
        @lru_cache(None)
        def go(i, prev):
            if i == m:
                return 0
            best = 0
            for mask in range(1 << n):
                if mask & ~good[i] or mask & (mask >> 1):
                    continue
                if mask & (prev << 1) or mask & (prev >> 1):
                    continue
                best = max(best, bin(mask).count('1') + go(i + 1, mask))
            return best
        return go(0, 0)
`)});
alt(2552,{name:"Try every four indices",tag:"Brute force",time:"O(n⁴)",space:"O(1)",explain:"Check all index quadruples i<j<k<l against the condition.",code:C(`
class Solution:
    def countQuadruplets(self, nums):
        return sum(1 for i, j, k, l in combinations(range(len(nums)), 4)
                   if nums[i] < nums[k] < nums[j] < nums[l])
`)});
};
