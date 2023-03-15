# -*- coding: utf-8 -*-
# # from decimal import Decimal, ROUND_HALF_UP, ROUND_HALF_EVEN

# def getWindDirectionString(deg, wpower):
#     if wpower == 0:
#         return 'C'
#     else:
#         # diff_deg = 22.5
#         if 11.25 <= deg and deg < 33.75:
#             return 'NNE'
#         elif 33.75 <= deg and deg < 56.25:
#             return 'NE'
#         elif 56.25 <= deg and deg < 78.75:
#             return 'ENE'
#         elif 78.75 <= deg and deg < 101.25:
#             return 'E'
#         elif 101.25 <= deg and deg < 123.75:
#             return 'ESE'
#         elif 123.75 <= deg and deg < 146.25:
#             return 'SE'
#         elif 146.25 <= deg and deg < 168.75:
#             return 'SSE'
#         elif 168.75 <= deg and deg < 191.25:
#             return 'S'
#         elif 191.25 <= deg and deg < 213.75:
#             return 'SSW'
#         elif 213.75 <= deg and deg < 236.25:
#             return 'SW'
#         elif 236.25 <= deg and deg < 258.75:
#             return 'WSW'
#         elif 258.75 <= deg and deg < 281.25:
#             return 'W'
#         elif 281.25 <= deg and deg < 303.75:
#             return 'wNW'
#         elif 303.75 <= deg and deg < 326.25:
#             return 'NW'
#         elif 326.25 <= deg and deg < 348.75:
#             return 'NNW'
#         else:
#             return 'N'

# def calcWindSpeed_m_per_s(m_per_min):
#     # m_per_s = calcWindSpeed_m_per_s(m_per_min)
#     # print(Decimal(m_per_min/60.0).quantize(Decimal('0.1'), rounding=ROUND_HALF_UP))
#     # m_per_s_ = Decimal(m_per_min / 60.0).quantize(Decimal('0.01'), rounding=ROUND_HALF_UP)
#     # m_per_s =Decimal(m_per_s_).quantize(Decimal('0.1'), rounding=ROUND_HALF_UP)
#     p = 10 ** 2
#     m_per_s_ = ((m_per_min / 60) * p * 2 + 1) // 2 / p
#     p = 10 ** 1
#     m_per_s = (m_per_s_ * p * 2 + 1) // 2 / p
#     return m_per_s

# def getWindPower(m_per_min):
#     m_per_s = calcWindSpeed_m_per_s(m_per_min)
#     if 0 <= m_per_s and m_per_s <= 0.2:
#         return 0
#     elif 0.3 <= m_per_s and m_per_s <= 1.5:
#         return 1
#     elif 1.6 <= m_per_s and m_per_s <= 3.3:
#         return 2
#     elif 3.4 <= m_per_s and m_per_s <= 5.4:
#         return 3
#     elif 5.5 <= m_per_s and m_per_s <= 7.9:
#         return 4
#     elif 8.0 <= m_per_s and m_per_s <= 10.7:
#         return 5
#     elif 10.8 <= m_per_s and m_per_s <= 13.8:
#         return 6
#     elif 13.9 <= m_per_s and m_per_s <= 17.1:
#         return 7
#     elif 17.2 <= m_per_s and m_per_s <= 20.7:
#         return 8
#     elif 20.8 <= m_per_s and m_per_s <= 24.4:
#         return 9
#     elif 24.5 <= m_per_s and m_per_s <= 28.4:
#         return 10
#     elif 28.5 <= m_per_s and m_per_s <= 32.6:
#         return 11
#     elif 32.7 <= m_per_s:
#         return 12



# input_arr = input().split()
# deg = float(input_arr[0])/10 #風向を示し、本来の角度を10倍した整数で与えられる
# dis = float(input_arr[1]) #風程1分間の風程を示す整数である。単位はメートル (m)

# wpower = getWindPower(dis)
# wdirstr = getWindDirectionString(deg,wpower)
# print("{0} {1}".format(wdirstr,wpower))

# 出力
# 風向文字列　風力整数



# ↑くそ（笑）
while True:
    deg, dis = map(int, input().split())

    DIR = ['N', 'NNE', 'NE', 'ENE', 'E', 'ESE', 'SE', 'SSE', 'S', 'SSW', 'SW', 'WSW', 'W', 'WNW', 'NW', 'NNW', 'N']
    d1 = (deg * 10 + 1125) // 2250
    print('d1: '+ str(d1))
    out1 = DIR[d1]

    WIND = [0.2, 1.5, 3.3, 5.4, 7.9, 10.7, 13.8, 17.1, 20.7, 24.4, 28.4, 32.6]
    p = int(dis * 10.0 / 60 + 0.5) * 1.0 / 10

    out2 = 0
    for i in range(len(WIND)):
        if WIND[i] >= p:
            out2 = i
            break
        else:
            out2 = 12

    if out2 == 0:
        out1 = 'C'

    print(out1,out2)
