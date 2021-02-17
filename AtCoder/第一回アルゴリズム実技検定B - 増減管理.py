def dif(x, y):
  if x == y:
    return 'stay'
  elif x < y:
    return 'up {}'.format(y - x)
  else:
    return 'down {}'.format(x - y)

n, *a = map(int, open(0).read().split())
ans = [dif(x, y) for x, y in zip(a, a[1:])]
print("\n".join(ans))
