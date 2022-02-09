export function buildVideoDetailRequest(videoId) {
    return buildApiRequest('GET',
      '/youtube/v3/videos',
      {
        part: 'snippet,statistics,contentDetails',
        id: videoId,
        fields: 'kind,items(contentDetails/duration,id,snippet(channelId,channelTitle,description,publishedAt,thumbnails/medium,title),statistics)'
      }, null);
  }