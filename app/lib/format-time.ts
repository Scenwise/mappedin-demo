export function formatTime(timestamp: number) {
  const flooredTimestamp = Math.floor(timestamp);
  return `${flooredTimestamp < 10 ? `0${flooredTimestamp}` : flooredTimestamp}:${timestamp === flooredTimestamp ? '00' : '30'}`;
}