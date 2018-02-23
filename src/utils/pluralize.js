function pluralize(count, word) {
  return count === 1 ? word : `${word}s`;
}

export default pluralize;