from typing import List

class Solution:
	def singleNumber(self, nums: List[int]) -> int:
		# O(n^2) solution with a list
		# res = []
        # for num in nums:
        #     if num not in res:
        #         res.append(num)
        #     else:
        #         res.remove(num)
        # return res.pop()

		# O(n) solution with bit operation
		a = 0
		for num in nums:
			a ^= num
		return a

if __name__ == "__main__":
	nums = [4,1,2,1,2]	# should return 4
	ans = 4
	
	sol = Solution()
	assert sol.singleNumber(nums) == ans
	