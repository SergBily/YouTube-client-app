import ItemResponse from './search-item.model';

export default interface SearchResponse {
  kind: string,
  etag: string,
  pageInfo: PageInfo,
  nextPageToken: string,
  regionCode: string,
  items: ItemResponse[]
}

interface PageInfo {
  totalResults: number,
  resultsPerPage: number
}
