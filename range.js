function range(start, end, step) {
  let numbers = [];
  if (start === undefined || end === undefined || step === undefined) {
    return numbers;
  } else if (start > end) {
    return numbers;
  } else if (step <= 0) {
    return numbers;
  } else {
    for (let i = start; i <= end; i += step) {
      numbers.push(i);
    }
    return numbers;
  }
}