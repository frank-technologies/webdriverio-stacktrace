### Getting started

```bash
npm start
```

The demo test should fail with unuseful stack trace. The output
will be similar:

```
[chrome 96.0.4664.45 linux #0-0] 1) Test should show stack trace problem
[chrome 96.0.4664.45 linux #0-0] move target out of bounds
  (Session info: headless chrome=96.0.4664.45)
[chrome 96.0.4664.45 linux #0-0] #0 0x564d7feeaee3 <unknown>
[chrome 96.0.4664.45 linux #0-0] #1 0x564d7f9b849f <unknown>
[chrome 96.0.4664.45 linux #0-0] #2 0x564d7fa27f3c <unknown>
[chrome 96.0.4664.45 linux #0-0] #3 0x564d7fa0c272 <unknown>
[chrome 96.0.4664.45 linux #0-0] #4 0x564d7fa1f3bc <unknown>
[chrome 96.0.4664.45 linux #0-0] #5 0x564d7fa0c163 <unknown>
[chrome 96.0.4664.45 linux #0-0] #6 0x564d7f9e1bfc <unknown>
[chrome 96.0.4664.45 linux #0-0] #7 0x564d7f9e2c05 <unknown>
[chrome 96.0.4664.45 linux #0-0] #8 0x564d7ff1cbaa <unknown>
[chrome 96.0.4664.45 linux #0-0] #9 0x564d7ff32651 <unknown>
[chrome 96.0.4664.45 linux #0-0] #10 0x564d7ff1db05 <unknown>
[chrome 96.0.4664.45 linux #0-0] #11 0x564d7ff33a68 <unknown>
[chrome 96.0.4664.45 linux #0-0] #12 0x564d7ff1205f <unknown>
[chrome 96.0.4664.45 linux #0-0] #13 0x564d7ff4e818 <unknown>
[chrome 96.0.4664.45 linux #0-0] #14 0x564d7ff4e998 <unknown>
[chrome 96.0.4664.45 linux #0-0] #15 0x564d7ff69eed <unknown>
[chrome 96.0.4664.45 linux #0-0] #16 0x7f90f231d259 <unknown>
```