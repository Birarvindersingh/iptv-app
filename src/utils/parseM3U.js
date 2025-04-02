export const parseM3U = (data) => {
    const lines = data.split("\n");
    const parsed = [];
  
    for (let i = 0; i < lines.length; i++) {
      if (lines[i].startsWith("#EXTINF")) {
        const name = lines[i].split(",")[1]?.trim();
        const url = lines[i + 1]?.trim();
        if (name && url) {
          parsed.push({ id: parsed.length + 1, name, url });
        }
      }
    }
    return parsed;
  };
  