print(2 * 5 * 3.14)
print(5 * 5 * 3.14)
print(5 * 5 * 3.14 * 10)
print(4 * 5 * 5 * 3.14)
print(4 / 3.0 * 5 * 5 * 5 * 3.14)

# 上記をリファクタ


# 円周を求める
def circle_circumference(radius):
    return 2 * radius * 3.14


print(circle_circumference(5))


# 円の面積を求める
def circle_area(radius):
    return radius * radius * 3.14


print(circle_area(5))


# 円柱の体積を求める
def cylinder_volume(radius, height):
    return radius * radius * 3.14 * height


print(cylinder_volume(5, 10))


# 球の表面積を求める
def sphere_surface_area(radius):
    return 4 * radius * radius * 3.14


print(sphere_surface_area(5))


# 球の体積を求める
def sphere_volume(radius):
    return 4 / 3.0 * radius * radius * radius * 3.14


print(sphere_volume(5))
