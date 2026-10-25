# SAP
S = lambda call: "Solution()." + call
UNORD = set()
D = {
1349: S("maxStudents([['#','.','#','#','.','#'],['.','#','#','#','#','.'],['#','.','#','#','.','#']])"),
2552: S("countQuadruplets([1,3,2,4,5])"),
}
D2 = {
1349: (S("maxStudents([['.','.'],['.','.']])"), "Two students sit in the same column in different rows; diagonals stay empty.", "full room"),
2552: (S("countQuadruplets([1,2,3,4])"), "No decreasing step in the middle.", "sorted"),
}
