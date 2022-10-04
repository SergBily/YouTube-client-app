export default interface ItemResponse {
  kind: string,
  etag: string,
  id: string,
  snippet: SnippetItem,
  statistics: StatisticsItem
}

interface SnippetItem {
  publishedAt: string,
  channelId: string,
  title: string,
  description: string,
  thumbnails: ThumbnailsSnippetItem,
  channelTitle: string,
  tags: string[],
  categoryId: string,
  liveBroadcastContent: string,
  localized: LocalizedSnippetItem,
  defaultAudioLanguage: string
}

interface ThumbnailsSnippetItem {
  default: ThumbnailsParameters,
  medium: ThumbnailsParameters,
  high: ThumbnailsParameters,
  standard: ThumbnailsParameters,
  maxres: ThumbnailsParameters
}

interface ThumbnailsParameters {
  url: string,
  width: number,
  height: number
}

interface LocalizedSnippetItem {
  title: string,
  description: string
}

interface StatisticsItem {
  viewCount: string,
  likeCount: string,
  dislikeCount: string,
  favoriteCount: string,
  commentCount: string
}
