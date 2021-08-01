
import sys

# lines = sys.stdin.readlines()
# for i, line in enumerate(lines):
#   line = line.strip("\n")
#   print(i+1,"行目:",line)

# input().strip()


# def create_keystr(d: int, area: str) -> str:
#   arr = area.split('.')[-d:]
#   return ".".join(arr)

# n = int(input())
# d = int(input())

# areas = [input() for _ in range(n)]
# # print(areas)

# counter = {}

# for area in areas:
#   # print(area)
#   # print(create_keystr(d, area))
#   key = create_keystr(d, area)
#   if key in counter.keys():
#     counter[key] += 1
#   else:
#     counter[key] = 1

# sorted_counter = sorted(counter.items(), key=lambda x: x[1], reverse=True)

# for key in sorted_counter:
#   # print(key," ",sorted_counter[key])
#   print(key)
#   print(sorted_counter[key])

def apply_coupon_a(price: int) -> int:
  return price * (1 - 0.05)

def apply_coupon_b(price: int) -> int:
  return price - 100

cnt_buy, cnt_coupon_a, cnt_coupon_b = map(int, input().split(' '))
prices = sorted(map(int, input().split(' ')), reverse=True)

cnt_over_1000 = len(list(filter(lambda x: x >= 1000,prices)))
# print(cnt_over_1000)
print(prices)

# for i in range(2 ** cnt_buy):
#   bag = []
#   total = 0
#   for j in range(cnt_buy):
#     if ((i >> j) & 1):
#       # bag.append(prices[j])
#       # print(i,j,prices[j])
#       total += prices[j]

total = 0
for p in prices:
  if p > 2000 and cnt_coupon_a > 0:
    total += apply_coupon_a(p)
    cnt_coupon_a -= 1
    continue
  elif p >= 1000 and p <= 2000 and cnt_coupon_b > 0:
    total += apply_coupon_b(p)
    cnt_coupon_b -= 1
  elif cnt_coupon_a > 0:
    total += apply_coupon_a(p)
    cnt_coupon_a -= 1
  elif cnt_coupon_b > 0:
    total += apply_coupon_b(p)
    cnt_coupon_b -= 1
  else:
    total += p

print('%d' % total)
print("a:", cnt_coupon_a)
print("b:", cnt_coupon_b)
