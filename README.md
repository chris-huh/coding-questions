# coding-questions

## Python Data Structures

Hash Map
dict

Set

Stack
list - using append() and pop()
collections.deque - using append() and pop()

Queue
list - using append() and pop(0) _slow_
collections.deque - using append() and popleft()

Heap
heapq - using heappush() and heappop()
queue.PriorityQueue - using put() and get() _thread-safe_

## Dynamic Programming

Optimization over plain recursion bringing time complexities from _exponential_ to _polynomial_. We can store the results of **overlapping** subproblems to avoid repeated calcualtions. (Subproblems don't overlap in Divde-and-Conquer.)

1. Memoization (top down) - like a lookup table, fills in entries that are only needed
2. Tabulation (bottom up)
