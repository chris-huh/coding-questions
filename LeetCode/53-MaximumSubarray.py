from typing import List

class Solution:
	def maxSubArray(self, nums: List[int]) -> int:
		# replace input array in-place
		for i in range(1, len(nums)):
			nums[i] = max(nums[i], nums[i] + nums[i-1])
		return max(nums)

if __name__ == "__main__":
	nums = [-2,1,-3,4,-1,2,1,-5,4]
	ans = 6
	
	sol = Solution()
	assert sol.maxSubArray(nums) == ans
	