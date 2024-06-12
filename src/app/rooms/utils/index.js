export const formatTimestamp = (timestamp) => {
  const now = new Date();
  const date = new Date(timestamp);
  const diffInSeconds = (now - date) / 1000;

  const intervals = {
    year: 31536000,
    month: 2592000,
    week: 604800,
    day: 86400,
    hour: 3600,
    minute: 60,
    second: 1,
  };

  for (const [unit, value] of Object.entries(intervals)) {
    const diff = Math.floor(diffInSeconds / value);
    if (diff >= 1) {
      return new Intl.RelativeTimeFormat("en", { numeric: "auto" }).format(
        -diff,
        unit
      );
    }
  }

  return "just now";
};

export const sortByMostRecent = (array, timeProperty) => {
  return array.sort(
    (a, b) => new Date(b[timeProperty]) - new Date(a[timeProperty])
  );
};

export const sortByOldest = (array, timeProperty) => {
  return array.sort(
    (a, b) => new Date(a[timeProperty]) - new Date(b[timeProperty])
  );
};

export const sortByResponses = (rooms) => {
  return rooms.sort((a, b) => b.responses.length - a.responses.length);
};
