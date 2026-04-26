/**
 * Fetches YouTube channel data for the authenticated user.
 * Requires the 'https://www.googleapis.com/auth/youtube.readonly' scope.
 */
export async function fetchYouTubeData(accessToken: string) {
  try {
    const response = await fetch(
      'https://www.googleapis.com/youtube/v3/channels?part=snippet,statistics&mine=true',
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          Accept: 'application/json',
        },
      }
    );

    if (!response.ok) {
      throw new Error(`YouTube API error: ${response.statusText}`);
    }

    const data = await response.json();
    
    if (data.items && data.items.length > 0) {
      const channel = data.items[0];
      return {
        subscriberCount: channel.statistics.subscriberCount,
        viewCount: channel.statistics.viewCount,
        videoCount: channel.statistics.videoCount,
        title: channel.snippet.title,
        description: channel.snippet.description,
        thumbnail: channel.snippet.thumbnails.default.url,
      };
    }
    
    return null;
  } catch (error) {
    console.error('Error fetching YouTube data:', error);
    return null;
  }
}

/**
 * Formats large numbers for display (e.g. 1.2M, 500K)
 */
export function formatCount(count: string | number) {
  const num = typeof count === 'string' ? parseInt(count) : count;
  if (isNaN(num)) return count;
  
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + 'M';
  } else if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'K';
  }
  return num.toString();
}
