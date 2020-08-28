
N = int(input())
ARR = list(map(int, input().split()))

sum_of_Humidai = 0
for i in range(1, len(ARR)):
    diff = (ARR[i - 1] - ARR[i])
    if diff > 0:
        ARR[i] += diff
        sum_of_Humidai += diff
else:
    print(sum_of_Humidai)