// Function to convert 24h time into words
function timeToWords(time) {
  const hours = ['midnight', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve'];
  const minutes = ['', 'oh one', 'oh two', 'oh three', 'oh four', 'oh five', 'oh six', 'oh seven', 'oh eight', 'oh nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty', 'twenty one', 'twenty two', 'twenty three', 'twenty four', 'twenty five', 'twenty six', 'twenty seven', 'twenty eight', 'twenty nine'];

  const [hour, minute] = time.split(':').map(num => parseInt(num));
  let output = '';

  if (hour === 0 && minute === 0) {
      output = 'midnight';
  } else if (hour === 12 && minute === 0) {
      output = 'noon';
  } else {
      const period = hour < 12 ? 'am' : 'pm';
      const hourText = hours[hour % 12];
      const minuteText = minute < 10 ? minutes[minute] : `${minutes[Math.floor(minute / 10) * 10]} ${minutes[minute % 10]}`;
      output = `${hourText} ${minuteText} ${period}`;
  }

  return output;
}

// Run tests
function runTests() {
  const tests = [
      { input: '00:00', expected: 'midnight' },
      { input: '00:12', expected: 'twelve twelve am' },
      { input: '01:00', expected: 'one o’clock am' },
      { input: '06:01', expected: 'six oh one am' },
      { input: '06:10', expected: 'six ten am' },
      { input: '06:18', expected: 'six eighteen am' },
      { input: '06:30', expected: 'six thirty am' },
      { input: '10:34', expected: 'ten thirty four am' },
      { input: '12:00', expected: 'noon' },
      { input: '12:09', expected: 'twelve oh nine pm' },
      { input: '23:23', expected: 'eleven twenty three pm' }
  ];

  tests.forEach(test => {
      const result = timeToWords(test.input);
      if (result === test.expected) {
          console.log(`Test passed for ${test.input}`);
      } else {
          console.error(`Test failed for ${test.input}. Expected ${test.expected}, but got ${result}`);
      }
  });
}

// Run tests
runTests();
