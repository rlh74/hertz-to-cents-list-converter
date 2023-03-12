export function debounce(func: (...args: any[]) => void, timeout = 300) {
  let timer: number;
  return (...args: any[]) => {
    window.clearTimeout(timer);
    timer = window.setTimeout(() => {
      func(...args);
    }, timeout);
  };
}

export function processedInput(inputText: string): number[] {
  const frequencies: string[] = inputText.split(/[\n,]/);
  const filteredFrequencies: string[] = frequencies.filter((freq) => freq !== "");
  const parsedFrequencies: number[] = filteredFrequencies.map((freq) => parseFloat(freq));
  const sortedFrequencies: number[] = parsedFrequencies.sort((a, b) => a - b);
  return sortedFrequencies;
}

export function processedInputToCents(input: string[]): number[] {
  const freqs = input.map(parseFloat).sort((a, b) => a - b);
  const refFreq = freqs[0];
  return freqs.map((freq) => 1200 * Math.log2(freq / refFreq));
}

