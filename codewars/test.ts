// 2020/11/26 21:16
// mocha chai テストライブラリ使用する test.ts
// npm test -- -w or yarn run test
// 2021/03/05 ファイル名変更 test_till20210305.ts

import { describe, it } from 'mocha';
import { assert, expect } from 'chai';

// 2021/03/05 21:54
import { answer as a20210305_2 } from '../AtCoder/abc002B - 罠';
describe('../AtCoder/abc002B - 罠.ts', () => {
  it('Basic tests', () => {
    assert.deepEqual(a20210305_2('chokudai'), 'chkd');
    assert.deepEqual(a20210305_2('okanemochi'), 'knmch');
    assert.deepEqual(a20210305_2('aoki'), 'k');
    assert.deepEqual(a20210305_2('mazushii'), 'mzsh');
  });
});
