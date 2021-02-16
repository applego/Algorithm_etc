v, t, s, d = map(int, input().split())
first = v * t
last = v * s
if first <= d <= last:
  print("No")
else:
  print("Yes")
