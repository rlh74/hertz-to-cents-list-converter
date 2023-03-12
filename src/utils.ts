export function debounce(func: (...args: any[]) => void, timeout = 300) {
  let timer: number;
  return (...args: any[]) => {
    window.clearTimeout(timer);
    timer = window.setTimeout(() => {
      func(...args);
    }, timeout);
  };
}

export function parsedInputToCents(input: string[]): number[] {
  const freqs = input.map(parseFloat).sort((a, b) => a - b);
  const refFreq = freqs[0];
  return freqs.map((freq) => 1200 * Math.log2(freq / refFreq)).splice(1, freqs.length - 1);
}

export function parseInput(input: string): string[] {
  const parsedInput = input
    .split(/\r?\n|,/)
    .map((item) => item.trim())
    .filter((item) => item !== '')
    .filter((item) => !isNaN(parseFloat(item)))
    .map((item) => parseFloat(item))
    .sort((a, b) => a - b);
    return parsedInput as unknown as string[];

}

