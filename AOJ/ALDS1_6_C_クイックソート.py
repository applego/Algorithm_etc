import sys

def partition(A, p, r):
    x = A[r][1]
    i = p - 1
    for j in range(p, r):
        if A[j][1] <= x:
            i += 1
            A[i], A[j] = A[j], A[i]
    A[i+1], A[r] = A[r], A[i+1]
    
    return i + 1

def quick_sort(A, p, r):
    if p < r:
        q = partition(A, p, r)
        quick_sort(A, p, q-1)
        quick_sort(A, q+1, r)

def solve(A):
    for i in range(n -1):
        if A[i][1] == A[i+1][1] and A[i][2] > A[i+1][2]:
            return 'Not stable'
    return 'Stable'

n = int(input())
A = [(e[0], int(e[2:]), i) for i, e in enumerate(sys.stdin)]

quick_sort(A, 0, n-1)
print(solve(A))
print('\n'.join(f'{a} {b}' for a,b,_ in A))