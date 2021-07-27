def boolean_to_string(b):
    return "True" if b else "False"

from TestCodewar import Test
test = Test()
test.assert_equals(boolean_to_string(True), "True")
test.assert_equals(boolean_to_string(False), "False")
