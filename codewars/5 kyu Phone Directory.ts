/**
 * テキストから電話帳の整形
 */

const ErrorMessages = {
  ErrorNotFound: 'Error => Not found: num',
  ErrorTooManyPeople: 'Error => Too many people: num',
} as const;
type ErrorMessages = typeof ErrorMessages[keyof typeof ErrorMessages];

export class G964 {
  private static ErrorNotFound = 'Error => Not found: ';
  private static ErrorTooManyPeople = 'Error => Too many people: ';
  public static phone = (strng: string, num: string): string => {
    const directories = strng.split('\n');

    const matchNumberlist = directories.filter((s) => s.includes(num));
    if (matchNumberlist.length == 0) return G964.ErrorNotFound + num;
    if (matchNumberlist.length > 1) return G964.ErrorTooManyPeople + num;
    let s = matchNumberlist[0];

    //formated as +X-abc-def-ghij where X stands for one or two digits),
    const regexNum = /\+[0-9]{1,2}-[0-9]{3}-[0-9]{3}-[0-9]{4}/;
    const regexName = /<([^)]+)>/;
    const regexName2 = /<(.+)>/;
    let s2 = s.replace(regexNum, '');
    const matchName = regexName.exec(s2);
    const name = matchName ? matchName[1] : '';
    let s3 = s2.replace(regexName, '');
    // const address = s3
    //   .trim()
    //   .split(/ |_/)
    //   .filter(
    //     (v) => v !== '*' && v !== ';' && v !== '/' && v !== '?' && v !== '$'&& v !== ''
    //   )
    //   .join(' ')
    //   .trim();
    const address = s3
      .trim()
      .replace(/\*|;|,|\/|\?|\$|:/g, '')
      .replace('  ', ' ')
      .replace('_', ' ')
      .trim();
    return `Phone => ${num}, Name => ${name}, Address => ${address}`;
  };
}
/*
expected 'Phone => 1-541-754-3010, Name => J Steeve, Address => 156 Alphand_St.';
to equal 'Phone => 1-541-754-3010, Name => J Steeve, Address => 156 Alphand St.';

expected 'Phone => 1-121-504-8974, Name => Arthur Clarke, Address => San Antonio $ TT-45120'
to equal 'Phone => 1-121-504-8974, Name => Arthur Clarke, Address => San Antonio TT-45120'
*/

// expected 'Phone => 48-421-674-8974, Name => Peter Gone, Address => Boulder Alley ZQ-87209  ';
// to equal 'Phone => 48-421-674-8974, Name => Peter Gone, Address => Boulder Alley ZQ-87209';

// expected 'Phone => 1-498-512-2222, Name => Bernard Deltheil, Address => Mount Av.  Eldorado';
// to equal 'Phone => 1-498-512-2222, Name => Bernard Deltheil, Address => Mount Av. Eldorado';

// expected 'Error => Too many people: num';
// to equal 'Error => Too many people: 1-541-984-3012';

// expected 'Phone => 1-498-512-2222, Name => Bernard Deltheil, Address => Mount Av.  Eldorado';
// to equal 'Phone => 1-498-512-2222, Name => Bernard Deltheil, Address => Mount Av. Eldorado';

// expected 'Error => Too many people: num2-481-512-2222';
// to equal 'Error => Too many people: 2-481-512-2222';

// expected 'Phone => 5-541-984-3012, Name => Peter Reeves, Address => /PO Box 5300; Albertville, SC-28573';
// to equal 'Phone => 5-541-984-3012, Name => Peter Reeves, Address => PO Box 5300 Albertville SC-28573';

// expected 'Phone => 1-541-754-3010, Name => J Steeve, Address => 156 Alphand_St.';
// to equal 'Phone => 1-541-754-3010, Name => J Steeve, Address => 156 Alphand St.';

// expected 'Phone => 3-921-333-2222, Name => Roland Scorsini, Address => : Bellevue Street DA-67209';
// to equal 'Phone => 3-921-333-2222, Name => Roland Scorsini, Address => Bellevue Street DA-67209';
