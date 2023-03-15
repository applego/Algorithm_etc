def s():
  n = int(input())
  A = list(map(int, input().split()))
  i = 0
  for j in range(n):
    if A[j] <= A[-1]: A[i], A[j] = A[j], A[i]; i += 1
  A[i], A[n] = A[n], A[i]
  print(" ".join(map(str,A[:i]))+" ["+str(A[i])+"] "+" ".join(map(str,A[i+1:])))

def partition(A, p, r) -> int:
  x: int = A[r]
  i = p - 1
  for j in range(p, r - 1):
    if A[j] <= x:
      i = i + 1
      A[i], A[j] = A[j], A[i]
  A[i + 1], A[r] = A[r], A[i + 1]
  return i + 1


if '__main__' == __name__:
  # partition()
  s()
